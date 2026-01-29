# Sanity CMS Setup for BlueCrest Group Insights

This document explains how to set up and use Sanity CMS for managing blog content (Insights) on the BlueCrest Group website.

## 🚀 Quick Start

### 1. Create a Sanity Project

1. Go to [sanity.io](https://www.sanity.io/) and sign up/log in
2. Create a new project
3. Note down your **Project ID** and **Dataset** (usually "production")

### 2. Configure Environment Variables

Create a `.env.local` file in the project root with your Sanity credentials:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

### 3. Access Sanity Studio

You have two options to access Sanity Studio:

#### Option A: Use Sanity's Hosted Studio (Recommended)
1. Go to [manage.sanity.io](https://manage.sanity.io/)
2. Select your project
3. Click "Studio" in the left sidebar
4. Start creating content!

#### Option B: Run Studio Locally
1. Navigate to the sanity directory: `cd sanity`
2. Start the studio: `pnpm dev` (or `sanity dev`)
3. Access at `http://localhost:3333`
4. Log in with your Sanity account

**Note**: Due to React 19 compatibility, the studio is not embedded in the Next.js app. Use one of the options above instead.

## 📝 Content Management

### Creating Articles

1. Go to `/studio` in your browser
2. Click on "Insight Article" in the sidebar
3. Click "Create new Insight Article"
4. Fill in the required fields:
   - **Title**: The article headline
   - **Slug**: Auto-generated from title (URL-friendly)
   - **Excerpt**: Short summary (max 200 characters)
   - **Main Image**: Featured image for the article
   - **Category**: Choose from predefined categories
   - **Author**: Reference to an author (create authors first)
   - **Body**: Rich text content with formatting options
   - **Published At**: Publication date/time
   - **Featured Article**: Toggle to show on homepage

### Creating Authors

1. Go to `/studio`
2. Click on "Author" in the sidebar
3. Create author profiles with name, image, and bio

### Featured Articles on Homepage

- Toggle "Featured Article" to true when creating/editing an article
- Only featured articles appear on the homepage Insights section
- Maximum of 3 featured articles are displayed

## 🎨 Content Features

### Rich Text Editor

The body content supports:
- **Headings**: H2 and H3
- **Text formatting**: Bold, italic
- **Links**: Internal and external
- **Lists**: Bulleted and numbered
- **Images**: Inline images with captions
- **Quotes**: Block quotes for emphasis

### Image Optimization

All images are automatically optimized using Next.js Image component:
- WebP format conversion
- Responsive sizing
- Lazy loading

## 🔒 Security & Permissions

### CORS Configuration

Add your domains to Sanity's CORS settings:

1. Go to [manage.sanity.io](https://manage.sanity.io/)
2. Select your project
3. Go to Settings → API → CORS Origins
4. Add your domains:
   - `http://localhost:3000` (development)
   - `https://www.bluecrest-group.com` (production)

### API Tokens

For server-side operations (optional):
1. Go to Settings → API → Tokens
2. Create a token with read permissions
3. Add to `.env.local`: `SANITY_API_TOKEN=your_token_here`

## 📦 Project Structure

```
/sanity
  /schemaTypes
    article.ts         # Article schema definition
    author.ts          # Author schema definition
    index.ts          # Export all schemas
  sanity.config.ts    # Sanity configuration
  sanity.cli.ts       # CLI configuration
  env.ts             # Environment variables

/src
  /app
    /insights         # Insights listing page
    /insights/[slug]  # Individual article page
    /studio          # Sanity Studio route
  /components
    PortableTextComponents.tsx  # Rich text rendering
  /lib
    sanity.client.ts  # Sanity client setup
    sanity.ts         # Queries and utilities
```

## 🔄 Content Workflow

1. **Create Content**: Write articles in Sanity Studio
2. **Preview**: Content is automatically available on the site
3. **Featured**: Toggle "Featured Article" to show on homepage
4. **Publish**: Set "Published At" date to control when article appears

## 🌐 SEO & Performance

### Automatic SEO

- Dynamic meta titles and descriptions
- Open Graph images from article featured images
- Structured data for articles
- XML sitemap generation (includes all published articles)

### Caching Strategy

- Production: CDN caching enabled for fast load times
- Development: Fresh data on every request
- Static generation for article pages

## 🛠️ Development Commands

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

## 📚 Sanity Documentation

- [Sanity Documentation](https://www.sanity.io/docs)
- [Schema Types](https://www.sanity.io/docs/schema-types)
- [GROQ Query Language](https://www.sanity.io/docs/groq)
- [Image URLs](https://www.sanity.io/docs/image-url)

## 🎯 Categories

Current article categories:
- Financial Strategy
- Business Growth
- Tax Planning
- CFO Insights
- Real Estate
- Startups

To add more categories, edit `sanity/schemaTypes/article.ts`.

## 🚨 Troubleshooting

### Can't access Sanity Studio
- Use the hosted studio at manage.sanity.io
- Or run locally: `cd sanity && pnpm dev`
- Check that `.env.local` exists with correct Sanity credentials
- Verify `NEXT_PUBLIC_SANITY_PROJECT_ID` is set

### Images not loading
- Verify Sanity CDN is accessible
- Check CORS settings in Sanity dashboard
- Ensure images are properly uploaded in Sanity Studio

### No articles showing
- Check that articles have `publishedAt` date set
- Verify `slug` is generated for each article
- Check browser console for errors

## 📞 Support

For Sanity-specific issues, visit [Sanity Community](https://slack.sanity.io/)
