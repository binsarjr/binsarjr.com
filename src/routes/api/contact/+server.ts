// +server.ts
import { isValidEmail } from '$lib/utils';
import { json } from '@sveltejs/kit';

export async function POST({ request }) {
	try {
		const { name, email, subject, message } = await request.json();

		// Basic validation
		if (!name || !email || !subject || !message) {
			return json({ success: false, error: 'All fields are required' }, { status: 400 });
		}

		if (!isValidEmail(email)) {
			return json(
				{ success: false, error: 'Please provide a valid email address' },
				{ status: 400 }
			);
		}

		// Here you would typically:
		// 1. Send email using a service like SendGrid, Resend, etc.
		// 2. Save to database
		// 3. Send notification

		// For demo purposes, we'll just log and return success
		console.log('Contact form submission:', { name, email, subject, message });

		// Simulate processing time
		await new Promise((resolve) => setTimeout(resolve, 1000));

		return json({
			success: true,
			message: "Thank you for your message! I'll get back to you soon."
		});
	} catch (error) {
		console.error('Contact form error:', error);
		return json(
			{ success: false, error: 'Something went wrong. Please try again.' },
			{ status: 500 }
		);
	}
}
