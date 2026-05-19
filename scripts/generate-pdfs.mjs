#!/usr/bin/env node
/**
 * Generate downloadable, ATS-friendly PDFs of the CV and Resume.
 *
 * Boots the SvelteKit dev server (vite), uses headless Chromium to render
 * the dedicated /cv/ats and /resume/ats routes, then writes:
 *
 *   static/cv.pdf
 *   static/resume.pdf
 *
 * These files are then served at /cv.pdf and /resume.pdf by SvelteKit and
 * referenced from the Download buttons on /cv and /resume.
 *
 * Run via:   bun run pdfs
 */

import { spawn } from 'node:child_process';
import { existsSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { chromium } from 'playwright';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(__dirname, '..');
const outDir = resolve(projectRoot, 'static');

if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });

function findOpenPort(stdout) {
	const m = stdout.match(/Local:\s+http:\/\/[^:]+:(\d+)\//);
	return m ? Number(m[1]) : null;
}

async function bootServer() {
	console.log('→ booting vite dev server …');
	const proc = spawn('bun', ['run', 'vite', 'dev'], {
		cwd: projectRoot,
		stdio: ['ignore', 'pipe', 'pipe']
	});

	const port = await new Promise((resolveP, reject) => {
		let buf = '';
		const onData = (chunk) => {
			buf += chunk.toString();
			const p = findOpenPort(buf);
			if (p) {
				proc.stdout.off('data', onData);
				resolveP(p);
			}
		};
		proc.stdout.on('data', onData);
		proc.stderr.on('data', (c) => (buf += c.toString()));
		proc.on('exit', (code) => reject(new Error(`vite exited early with ${code}\n${buf}`)));
		setTimeout(() => reject(new Error('timed out waiting for vite to boot')), 30_000);
	});

	console.log(`  vite up on http://localhost:${port}`);
	return { proc, port };
}

async function renderPdf(browser, url, file) {
	console.log(`→ rendering ${url}`);
	const ctx = await browser.newContext({ viewport: { width: 794, height: 1123 } });
	const page = await ctx.newPage();
	page.on('pageerror', (e) => console.log('  pageerror:', e.message));

	const resp = await page.goto(url, { waitUntil: 'networkidle' });
	if (!resp || !resp.ok()) {
		throw new Error(`bad response from ${url}: ${resp ? resp.status() : 'no response'}`);
	}

	// Force print-media so the route's @media print blocks apply
	await page.emulateMedia({ media: 'print' });
	// Wait for fonts to settle
	await page.evaluate(() => document.fonts && document.fonts.ready);
	await page.waitForTimeout(300);

	await page.pdf({
		path: file,
		format: 'A4',
		printBackground: true,
		margin: { top: '0', right: '0', bottom: '0', left: '0' },
		preferCSSPageSize: false
	});

	console.log(`  ✓ ${file}`);
	await ctx.close();
}

(async () => {
	const server = await bootServer();
	let exitCode = 0;
	let browser;

	try {
		browser = await chromium.launch();
		const base = `http://localhost:${server.port}`;
		await renderPdf(browser, `${base}/cv/ats`, resolve(outDir, 'cv.pdf'));
		await renderPdf(browser, `${base}/resume/ats`, resolve(outDir, 'resume.pdf'));
		console.log('\nDone. Output:');
		console.log(`  ${resolve(outDir, 'cv.pdf')}`);
		console.log(`  ${resolve(outDir, 'resume.pdf')}`);
	} catch (err) {
		console.error('PDF generation failed:', err);
		exitCode = 1;
	} finally {
		if (browser) await browser.close();
		server.proc.kill('SIGTERM');
	}
	process.exit(exitCode);
})();
