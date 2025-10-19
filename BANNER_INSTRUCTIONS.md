# Banner Image Instructions

## Adding Your Banner Image

To use your own banner.png image instead of the placeholder:

1. **Add your banner.png file** to the `public/` folder
2. **Update the image source** in `src/App.jsx`:
   - Change `src="/banner.svg"` to `src="/banner.png"`
   - Or use any other image name you prefer

## Recommended Banner Specifications

- **Dimensions**: 1200x300px (4:1 aspect ratio)
- **Format**: PNG, JPG, or SVG
- **Content**: Should work well with white text overlay
- **File size**: Keep under 500KB for fast loading

## Current Implementation

The header now includes:
- ✅ Banner image with fallback gradient
- ✅ White text overlay with title and metrics count
- ✅ Responsive design for all screen sizes
- ✅ Error handling if image fails to load

## Customization

You can modify the banner styling in `src/App.jsx`:
- Change banner height: `h-32` (128px)
- Adjust text overlay opacity: `bg-opacity-20`
- Modify text colors and sizes in the overlay div
