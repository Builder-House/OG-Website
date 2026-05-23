# Builder House — Website

Premium web design agency website built with Next.js 14, React, Tailwind CSS, and Framer Motion.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Fonts**: Playfair Display + DM Sans (Google Fonts)
- **Deployment**: Vercel

## Project Structure

```
app/
  layout.tsx          # Root layout (Navbar + Footer)
  page.tsx            # Home page
  globals.css         # Global styles
  about/              # About Us
  services/           # Services
  portfolio/          # Portfolio
  case-studies/       # Case Studies
  industries/         # Industries We Serve
  process/            # Our Process
  faq/                # FAQ
  contact/            # Contact
  our-story/          # Our Story
  careers/            # Careers
  blog/               # Blog / Journal
  privacy-policy/     # Privacy Policy
  terms/              # Terms & Conditions
  refund-policy/      # Refund Policy
  not-found.tsx       # Custom 404 page
  sitemap.ts          # Auto-generated sitemap
  robots.ts           # Robots.txt

components/
  Navbar.tsx          # Navigation (desktop + mobile)
  Footer.tsx          # Footer
  PageHero.tsx        # Reusable page hero
  SectionHeader.tsx   # Reusable section heading
  home/               # Home-specific sections
    HomeHero.tsx
    HomeStats.tsx
    HomeServices.tsx
    HomePortfolio.tsx
    HomeTestimonials.tsx
    HomeCTA.tsx
```

## Deploying to Vercel

1. Push this project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and import the repository
3. Vercel auto-detects Next.js — click Deploy
4. Add your custom domain `builderhouse.in` in Vercel settings

## Customisation

- **Colors**: Edit `tailwind.config.js` and `app/globals.css` CSS variables
- **Content**: Each page is a separate file in `app/` — edit directly
- **Fonts**: Change font imports in `app/globals.css`
- **Contact email**: Search for `hello@builderhouse.in` and replace as needed

## Contact

hello@builderhouse.in  
© Builder House — Divyansh Agarwal & Bhaskar Rao
