# Binsar Jr - Personal Website

A modern, responsive personal website built with SvelteKit, featuring a black and yellow color scheme. This website showcases projects, services, blog posts, and provides a way for visitors to get in touch.

## 🚀 Features

- **Modern Design**: Clean, responsive design with a striking black and yellow color scheme
- **Performance Optimized**: Lazy loading, optimized builds, and modern web standards
- **SEO Ready**: Meta tags, sitemap generation, and structured data
- **Interactive Components**: Smooth scrolling, filtering, search functionality
- **Blog System**: Markdown-ready blog with categorization and search
- **Contact Form**: Working contact form with server-side validation
- **Internationalization**: Ready for multiple languages with Paraglide
- **Type Safety**: Built with TypeScript for better development experience

## 🛠 Tech Stack

- **Framework**: SvelteKit
- **Package Manager**: Bun (for fast installs and development)
- **Styling**: Tailwind CSS
- **Typography**: Inter font family
- **Icons**: Lucide Svelte
- **Date Handling**: date-fns
- **Build Tool**: Vite
- **Language**: TypeScript
- **Internationalization**: Paraglide.js

## 📁 Project Structure

```
src/
├── lib/
│   ├── components/       # Reusable UI components
│   │   ├── About.svelte
│   │   ├── Blog.svelte
│   │   ├── Contact.svelte
│   │   ├── Hero.svelte
│   │   ├── Navbar.svelte
│   │   ├── Projects.svelte
│   │   ├── Services.svelte
│   │   └── ...
│   ├── data/            # Static data files
│   │   ├── blog.ts
│   │   └── projects.ts
│   ├── constants.ts     # Site configuration
│   └── utils.ts         # Utility functions
├── routes/
│   ├── api/             # API endpoints
│   ├── blog/            # Blog pages
│   └── +page.svelte     # Homepage
└── app.html             # HTML template
```

## 🔧 Development

### Prerequisites

- Node.js 18+ or Bun (recommended)
- bun (preferred) or npm/yarn

### Getting Started

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd binsarjr.com
   ```

2. **Install dependencies**

   ```bash
   bun install
   # or
   npm install
   ```

3. **Start development server**

   ```bash
   bun run dev
   # or
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

### Available Scripts

- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun run preview` - Preview production build
- `bun run check` - Run type checking
- `bun run lint` - Run ESLint

## 🎨 Customization

### Site Configuration

Update `src/lib/constants.ts` to customize:

- Personal information (name, email, bio)
- Social media links
- Skills and technologies
- Navigation items
- SEO defaults

### Content

- **Projects**: Edit `src/lib/data/projects.ts`
- **Blog Posts**: Edit `src/lib/data/blog.ts`
- **About Section**: Modify skills and experience in constants

### Styling

The website uses Tailwind CSS with a custom black and yellow theme. Key colors:

- Primary: Various shades of yellow (#facc15, #fde047, etc.)
- Background: Black and dark grays
- Text: White and light grays

### Components

All components are modular and reusable:

- **Hero**: Landing section with intro and tech stack
- **About**: Skills, experience, and personal info
- **Projects**: Portfolio showcase with filtering
- **Services**: Service offerings
- **Blog**: Article listing and detail pages
- **Contact**: Contact form and information

## 🚀 Deployment

### Build for Production

```bash
bun run build
```

### Deployment Options

The project is configured with `@sveltejs/adapter-auto` which automatically detects your deployment platform:

- **Vercel**: Deploy directly from GitHub
- **Netlify**: Drag and drop the `build` folder
- **Static Hosting**: Use the generated `build` folder

For specific platforms, you may need to change the adapter in `svelte.config.js`.

## 📧 Contact Form

The contact form includes:

- Client-side validation
- Server-side API endpoint (`/api/contact`)
- Error handling and success messages
- Email validation

To set up email sending, modify `src/routes/api/contact/+server.ts` to integrate with your preferred email service (SendGrid, Resend, etc.).

## 🌐 SEO & Performance

- Automatically generated sitemap at `/sitemap.xml`
- Robots.txt configuration
- Meta tags for social sharing
- Lazy loading for components
- Optimized images and assets
- Performance-focused build configuration

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help with customization, feel free to reach out:

- Email: [Your Email]
- GitHub: [Your GitHub Profile]
- LinkedIn: [Your LinkedIn Profile]

---

Built with ❤️ using SvelteKit and modern web technologies.
