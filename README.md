# UnitConverter

A modern, clean, and intuitive unit converter web application built with Next.js, TypeScript, and TailwindCSS.

## Features

- **Fast & Accurate Conversions**: Convert between length, weight, temperature, and volume units
- **Modern UI**: Clean, minimalist design inspired by Google's simplicity
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Instant Results**: Real-time conversion as you type
- **Multiple Categories**: 
  - Length (meters, kilometers, miles, feet, inches, etc.)
  - Weight (grams, kilograms, pounds, ounces, etc.)
  - Temperature (Celsius, Fahrenheit, Kelvin)
  - Volume (liters, milliliters, gallons, cups, etc.)
- **Ad-Ready**: Optimized layout with strategic ad placement slots
- **SEO Optimized**: Fast loading and search engine friendly

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Fonts**: Geist Sans & Geist Mono
- **Deployment**: Vercel-ready

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser** and navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and custom CSS
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main page component
├── components/
│   ├── Header.tsx           # Site header with navigation
│   ├── Converter.tsx        # Main conversion interface
│   ├── AdSlot.tsx          # Reusable ad slot component
│   └── Footer.tsx          # Site footer
└── utils/
    └── conversions.ts       # Conversion logic and utilities
```

## Conversion Logic

The application uses a modular conversion system:

- **Base Unit System**: Most conversions use a base unit (e.g., meters for length, kilograms for weight)
- **Temperature Special Case**: Temperature conversions use direct formulas between Celsius, Fahrenheit, and Kelvin
- **Precision**: Results are rounded to 6 decimal places for accuracy
- **Formatting**: Large numbers use scientific notation, small numbers use standard notation

## Ad Integration

The layout includes strategic ad placement:

- **Vertical Ads**: 300x600 slots on left and right sides (desktop only)
- **Small Ads**: 300x250 slots at bottom left and right
- **Horizontal Ads**: 728x90 slot below main content
- **Responsive**: Ads hide on mobile to maintain clean UX

## Performance Optimizations

- **Next.js App Router**: Latest routing system for optimal performance
- **TypeScript**: Type safety and better development experience
- **TailwindCSS**: Utility-first CSS for minimal bundle size
- **Optimized Fonts**: Geist fonts with proper loading strategies
- **SEO Metadata**: Comprehensive meta tags for search engines

## Future Enhancements

- Currency conversion support
- More unit categories (area, speed, pressure, etc.)
- Dark mode toggle
- Unit history/favorites
- API for programmatic access
- Progressive Web App (PWA) features

## Deployment

This project is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

Or deploy to any platform that supports Next.js:

```bash
npm run build
npm start
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - feel free to use this project for your own unit converter needs!