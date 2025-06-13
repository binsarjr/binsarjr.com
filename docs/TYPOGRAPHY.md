# Typography Documentation

Sistem typography yang telah dikonfigurasi untuk website ini menggunakan Tailwind CSS v4 dengan plugin Typography dan custom enhancements.

## Penggunaan Dasar

### Layout Components

Semua layout components (`BlogLayout`, `ProjectLayout`, `ServiceLayout`, `DefaultLayout`) sudah menggunakan class `prose-enhanced` secara otomatis.

### Class Utama

- `.prose-enhanced` - Class utama untuk semua konten typography

### Komponen Typography (Opsional)

```svelte
<script>
	import { Typography } from '$lib/components';
</script>

<Typography variant="default" size="md">
	<!-- Konten markdown/html -->
</Typography>
```

#### Variants:

- `default` - Spacing normal
- `compact` - Spacing lebih rapat
- `wide` - Spacing lebih lebar untuk reading yang nyaman

#### Sizes:

- `sm` - Font size kecil
- `md` - Font size normal (default)
- `lg` - Font size besar
- `xl` - Font size sangat besar

## Features yang Didukung

### 1. Enhanced Headings

- White solid color styling
- Auto-generated anchor links dengan hover effect
- Responsive font sizes
- Scroll margin untuk navigation

### 2. Enhanced Links

- Animated underline effect
- Gradient hover states
- Focus accessibility

### 3. Enhanced Lists

- Custom bullet points dengan warna yellow
- Numbered lists dengan styling khusus
- Proper spacing dan indentation

### 4. Enhanced Code

- Syntax highlighting support
- Language labels (dengan data-lang attribute)
- Copy button styling (ready to implement)
- Inline code dengan background

### 5. Enhanced Blockquotes

- Border kiri dengan warna accent
- Glass-morphism background
- Large quote mark
- Citation support

### 6. Enhanced Tables

- Glass-morphism background
- Hover effects
- Responsive wrapper
- Zebra striping (dengan class `.striped`)

### 7. Enhanced Images

- Rounded corners
- Shadow effects
- Hover zoom
- Border styling

### 8. Task Lists (GitHub-style)

- Custom checkbox styling
- Interactive checkboxes
- Proper spacing

### 9. Callout Boxes

Classes yang tersedia:

- `.callout.note` - Blue (informasi)
- `.callout.tip` - Green (tips)
- `.callout.warning` - Amber (peringatan)
- `.callout.danger` - Red (bahaya)

### 10. Footnotes

- Automatic styling untuk footnotes
- Backlink support
- Proper spacing

## Accessibility Features

- Focus indicators
- High contrast mode support
- Reduced motion support
- Screen reader friendly
- Proper heading hierarchy
- Color contrast compliance

## Responsive Design

- Clamp() untuk responsive font sizes
- Mobile-optimized spacing
- Touch-friendly interactive elements
- Proper line heights untuk readability

## Dark Theme Optimized

- Semua colors sudah dioptimasi untuk dark theme
- Glass-morphism effects
- Proper contrast ratios
- Print stylesheet support

## Contoh Penggunaan

### Dalam Layout

```svelte
<!-- Sudah otomatis menggunakan prose-enhanced -->
<main>
	<article class="prose-enhanced">
		<slot />
	</article>
</main>
```

### Dengan Typography Component

```svelte
<Typography variant="wide" size="lg">
	<h1>Judul Artikel</h1>
	<p>Konten artikel dengan spacing yang lebar dan font yang besar.</p>
</Typography>
```

### Callout Box

```html
<div class="callout tip">
	<p><strong>Tip:</strong> Gunakan variant="wide" untuk artikel yang panjang.</p>
</div>
```

### Task List

```markdown
- [x] Task yang sudah selesai
- [ ] Task yang belum selesai
- [x] Task lainnya
```

### Code dengan Language Label

```html
<pre data-lang="typescript">
  <code>
    const hello = "world";
  </code>
</pre>
```

## Browser Support

- Modern browsers (Chrome 88+, Firefox 87+, Safari 14+)
- Fallback untuk older browsers
- Progressive enhancement
- CSS Grid dan Flexbox support

## Performance

- Minimal CSS dengan @layer untuk optimasi
- Tree-shaking friendly
- Critical CSS inlined
- Optimized untuk Tailwind CSS v4
