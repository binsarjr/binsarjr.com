---
layout: blog
title: 'Getting Started with SvelteKit and MDsveX'
excerpt: 'Learn how to create beautiful, content-rich websites using SvelteKit and MDsveX. This guide covers setup, configuration, and best practices.'
publishedAt: '2024-12-15'
updatedAt: '2024-12-16'
tags: ['SvelteKit', 'MDsveX', 'Tutorial', 'JavaScript']
category: 'tutorial'
featured: true
author:
  name: 'Binsar Jr'
  avatar: '/avatar.jpg'
  bio: 'Full Stack Developer & Technical Writer'
---

<script>
  import { Button } from '$lib/components';
  import { onMount } from 'svelte';
  
  let count = 0;
  
  onMount(() => {
    console.log('Blog post mounted!');
  });
</script>

# Introduction

SvelteKit combined with MDsveX provides an incredibly powerful way to create content-rich websites that blend markdown content with interactive Svelte components.

## Table of Contents

## What is MDsveX?

MDsveX is a markdown preprocessor for Svelte that allows you to use Svelte components inside your markdown files. This means you can:

- Write content in markdown
- Embed interactive Svelte components
- Use frontmatter for metadata
- Apply layouts automatically

## Setting Up Your Project

### Installation

First, install the necessary dependencies:

```bash
npm install -D mdsvex rehype-slug rehype-autolink-headings
```

### Configuration

Create an `mdsvex.config.js` file in your project root:

```javascript
import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

const config = defineConfig({
	extensions: ['.svelte.md', '.md', '.svx'],

	remarkPlugins: [],

	rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],

	layout: {
		blog: './srclib/components/layouts/BlogLayout.svelte'
	}
});

export default config;
```

## Interactive Components

One of the coolest features of MDsveX is the ability to embed Svelte components directly in your markdown:

<div class="my-8 p-6 bg-gray-800 rounded-lg border border-gray-700">
  <h3 class="text-xl font-semibold mb-4 text-yellow-400">Interactive Counter</h3>
  <p class="mb-4 text-gray-300">Click the button below to see Svelte reactivity in action:</p>
  
  <div class="flex items-center gap-4">
    <Button on:click={() => count++}>
      Clicked {count} times
    </Button>
    <Button on:click={() => count = 0} variant="outline">
      Reset
    </Button>
  </div>
</div>

## Code Highlighting

MDsveX supports syntax highlighting out of the box:

```typescript
interface BlogPost {
	id: number;
	title: string;
	excerpt: string;
	publishedAt: Date;
	tags: string[];
}

const post: BlogPost = {
	id: 1,
	title: 'My Amazing Post',
	excerpt: 'This is a great post about SvelteKit',
	publishedAt: new Date(),
	tags: ['svelte', 'tutorial']
};
```

## Advanced Features

### Custom Layouts

You can specify different layouts for different types of content using the frontmatter `layout` field:

```yaml
---
layout: blog
title: 'My Blog Post'
---
```

### Frontmatter Processing

MDsveX automatically processes frontmatter and makes it available to your layouts as props:

```svelte
<!-- BlogLayout.svelte -->
<script>
	export let title;
	export let publishedAt;
	export let tags = [];
</script>

<h1>{title}</h1>
<time>{publishedAt}</time>
```

## Best Practices

1. **Organize your content**: Keep markdown files in a dedicated `src/content` directory
2. **Use consistent frontmatter**: Define a schema for your frontmatter fields
3. **Leverage layouts**: Create reusable layouts for different content types
4. **Interactive components**: Use Svelte components to enhance your content

## Performance Considerations

- MDsveX files are processed at build time
- Components are tree-shaken like regular Svelte components
- Static content is optimized automatically

## Conclusion

MDsveX bridges the gap between static content and interactive web applications. It's perfect for:

- **Blogs** with interactive examples
- **Documentation** sites with live demos
- **Portfolios** with rich project descriptions
- **Landing pages** with dynamic content

The combination of markdown's simplicity and Svelte's reactivity opens up endless possibilities for creating engaging, content-rich websites.

## Resources

- [MDsveX Documentation](https://mdsvex.pngwn.io/)
- [SvelteKit Documentation](https://kit.svelte.dev/)
- [Remark Plugins](https://github.com/remarkjs/remark/blob/main/doc/plugins.md)
- [Rehype Plugins](https://github.com/rehypejs/rehype/blob/main/doc/plugins.md)

---

_Want to learn more about building modern web applications? Check out my other tutorials on React, Vue.js, and full-stack development._
