# Zen Deta Loading Bar

A sleek animated loading bar theme extension for Zen Browser that displays a beautiful progress indicator at the top of the page during loading, similar to the loading bar used in Deta Surf browser.

## Features

- 🎯 **Smooth Top Loading Bar** - Displays an elegant animated loading bar at the top of pages
- 🎨 **Zen Theme Integration** - Automatically uses colors from your Zen Browser theme or set custom colors
- 🌈 **Gradient or Solid Colors** - Choose between gradient effects or single color display
- 💫 **Blur Animation Effects** - Beautiful blur effects during the pulse animation (optional)
- 📐 **Customizable Thickness** - Adjustable bar height to match your preference
- 🌑 **Box Shadow Support** - Optional shadow effects with customizable settings
- ⚡ **CSS-Only Implementation** - Lightweight solution using pure CSS animations
- 🎛️ **Comprehensive Settings** - Multiple customization options through preferences
- 📏 **Smart Positioning** - Non-intrusive design that doesn't interfere with page interaction
- 💨 **High Performance** - Minimal impact on browser performance

## Prerequisites

Before installing this theme, you need to have **Sine** installed, which is a theme manager for Zen Browser and Firefox. If you don't know how to install Sine, [please click here to view the Sine installation Guide.](https://github.com/CosmoCreeper/Sine#%EF%B8%8F-installation)

### Installing Sine

1. Download Sine from the official repository
2. Follow the installation instructions for your browser
3. Restart your browser after installation

## Installation

### Method 1: Through Sine Theme Store (Recommended)

1. Open Sine menu in your browser
2. Search for "Deta Loading Bar" in the theme store
3. Click "Install" on the theme
4. The theme will be automatically applied

### Method 2: Manual Installation

If the theme is not available in the Sine theme store:

1. Open Sine menu
2. Enter the following repository URL:
   ```
   rasyidrafi/zen-deta-loading-bar
   ```
3. Click "Install" to add the theme
4. The theme will be applied

## Customization Options

This theme includes extensive customization options that can be configured through Sine's preferences:

### Core Settings

- **Enable/Disable Deta Loading Bar**: Master toggle to enable or disable the loading bar (default: enabled)
- **Use color from Zen browser theme**: Automatically uses your Zen Browser's theme colors (default: enabled)
- **Use only main color for the loading bar**: Disable gradient and use solid color (default: disabled)

### Color Customization

- **Main color**: Primary color for the loading bar (default: `rgba(243,202,176,255)`)
- **Middle color**: Secondary color for gradient center (default: `rgba(255,255,255,255)`)

### Visual Effects

- **Thickness**: Height of the loading bar (default: `6px`)
- **Enable/Disable Box Shadow**: Toggle shadow effects (default: enabled)
- **Custom Box shadow**: Customize shadow appearance (default: `0 2px 12px 0 rgba(0,0,0,0.25), 0 1.5px 4px 0 rgba(0,0,0,0.15)`)
- **Enable/Disable Blur Effect**: Toggle blur animation during pulse (default: enabled)
- **Blur Intensity**: Adjust blur strength (default: `1.8px`)

### How to Configure

1. Open Sine menu in your browser
2. Navigate to the theme settings for "Deta Loading Bar"
3. Adjust the available options as desired:
   - Toggle features on/off
   - Choose between Zen theme colors or custom colors
   - Customize visual effects and animations
   - Adjust thickness and shadow settings
4. Changes will apply automatically

### Color Examples

You can use various color formats:
- **RGBA**: `rgba(243,202,176,255)` - Light peach with full opacity
- **Hex**: `#573241` - Dark reddish-brown
- **Named colors**: `steelblue`, `crimson`, `gold`
- **HSL**: `hsl(120, 100%, 50%)` - Pure green

### Box Shadow Examples

Standard CSS box-shadow syntax:
- **Default**: `0 2px 12px 0 rgba(0,0,0,0.25), 0 1.5px 4px 0 rgba(0,0,0,0.15)`
- **Subtle**: `0 1px 3px rgba(0,0,0,0.12)`
- **Strong**: `0 4px 20px rgba(0,0,0,0.4)`

### Thickness Examples

CSS units supported:
- **Pixels**: `6px` (default), `8px`, `4px`
- **Em units**: `0.2em`, `0.5em`
- **Rem units**: `0.25rem`, `0.5rem`

## What This Theme Does

This theme enhances your browsing experience by:

- **Visual Loading Feedback**: Provides clear indication when pages are loading
- **Pulse Animation**: Features a smooth growing and shrinking effect with optional blur
- **Smart Integration**: Automatically uses Zen Browser's theme colors when enabled
- **Non-intrusive Design**: Positioned at the top with minimal visual interference
- **High Visibility**: Centered positioning with high z-index for clear visibility
- **No Click Interference**: Pointer events disabled so the bar doesn't interfere with page interaction
- **Automatic Display**: Shows only when the active tab is actually loading

## Technical Details

- **Animation Duration**: 1.2s cubic-bezier ease infinite alternate pulse
- **Bar Height**: Customizable thickness (default: 6px)
- **Positioning**: Absolute positioning at top of browser stack, centered horizontally
- **Animation Range**: Pulse animation from 20px to 120px width with scale and opacity effects
- **Z-Index**: 9999 for maximum visibility
- **Conditional Features**: Media queries for optional blur, shadow, and color effects

## Compatibility

- ✅ Zen Browser (Primary target)

## Contributing

Found a bug or want to suggest an improvement? Feel free to open an issue or submit a pull request on the [GitHub repository](https://github.com/rasyidrafi/zen-deta-loading-bar/).

## License

This project is open source and available under standard open source terms.

## Author

Created by [rasyidrafi](https://github.com/rasyidrafi)

---

*Version 2.0.1 - Last updated: August 1, 2025*