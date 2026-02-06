# Logo Assets

This folder contains the Oneskai logo assets used throughout the website.

## Logo Files

### Main Logos
- **os-light.webp** - Full logo for light theme (colorful icon + dark text)
- **os-dark.webp** - Full logo for dark theme (colorful icon + light text)

### Optional (deprecated/placeholder)
- **icon.svg** - Icon only (placeholder)
- **logo-light.svg** - SVG placeholder
- **logo-dark.svg** - SVG placeholder

## Logo Specifications

### Current Implementation
- Format: WebP (optimized for web performance)
- Dimensions: 160px width × 40px height
- Usage: Header and Footer components

### File Format
- WebP preferred for best quality and performance
- Includes transparency for flexible backgrounds

## Usage

The website automatically switches between light and dark logos based on the user's theme preference:

### Header Component
- Uses `os-light.webp` when the site is in light mode
- Uses `os-dark.webp` when the site is in dark mode

### Footer Component
- Uses `os-light.webp` when the site is in light mode
- Uses `os-dark.webp` when the site is in dark mode

## Implementation Details

Both Header and Footer components use Next.js Image component with:
- Priority loading for optimal performance
- Automatic theme switching via `useTheme()` hook
- Smooth transitions between theme changes
- Fallback to light logo during initial mount (hydration)

## Notes

- Both logos maintain the same visual weight and dimensions
- The colorful icon portion remains consistent in both versions
- Only the "oneskai" text color changes between light and dark versions
- Logos are optimized for both light and dark backgrounds
