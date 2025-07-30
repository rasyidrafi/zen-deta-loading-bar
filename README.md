# Zen Deta Loading Bar

A sleek top loading bar theme extension for Zen Browser that displays an animated progress indicator at the top of the page during loading, similar to the loading bar used in Deta Surf browser.

## Features

- 🎯 **Smooth Top Loading Bar** - Displays an elegant animated loading bar at the top of pages
- 🎨 **Customizable Colors** - Configure main and middle colors of the loading bar gradient
- 🌈 **Pulse Animation** - Beautiful pulsing effect that grows and shrinks during loading
- ⚡ **CSS-Only Implementation** - Lightweight solution using pure CSS animations
- 🎛️ **Easy Toggle** - Simple enable/disable option through preferences
- 📏 **Adjustable Thickness** - Customizable bar height to match your preference
- 💫 **High Performance** - Minimal impact on browser performance

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

This theme includes several customization options that can be configured through Sine's preferences:

### Loading Bar Settings

- **Enable Deta Loading Bar**: Master toggle to enable or disable the loading bar (default: enabled)
- **Main color**: Primary color for the gradient animation (default: `rgba(243,202,176,255)`)
- **Middle color**: Secondary color for the gradient center (default: `rgba(255,255,255,255)`)
- **Thickness**: Height of the loading bar (default: `6px`)

### How to Configure

1. Open Sine menu in your browser
2. Navigate to the theme settings for "Deta Loading Bar"
3. Adjust the following options as desired:
   - Toggle the loading bar on/off as needed
   - Customize the main color to match your browser theme
   - Set the middle color for the gradient effect
   - Change the thickness to your preferred bar height
4. Changes will apply automatically

### Color Examples

You can use various color formats:
- **RGBA**: `rgba(243,202,176,255)` - Light peach with full opacity
- **Hex**: `#573241` - Dark reddish-brown
- **Named colors**: `steelblue`, `crimson`, `gold`
- **HSL**: `hsl(120, 100%, 50%)` - Pure green

### Thickness Examples

You can specify thickness using CSS units:
- **Pixels**: `6px`
- **Em units**: `0.2em`, `0.5em`
- **Rem units**: `0.25rem`, `0.5rem`

## What This Theme Does

This theme enhances your browsing experience by:

- **Visual Loading Feedback**: Provides clear indication when pages are loading
- **Pulse Animation**: Features a growing and shrinking effect with blur transition
- **Non-intrusive Design**: Sits at the top with minimal visual interference
- **Smart Positioning**: Centered at the top of the browser stack with high z-index for visibility
- **No Click Interference**: Pointer events are disabled so the bar doesn't interfere with page interaction
- **Automatic Display**: Shows only when pages are actually loading

## Technical Details

- **Animation Duration**: 0.8s ease-out infinite alternate pulse
- **Bar Height**: Customizable thickness (default: 6px)
- **Positioning**: Absolute positioning at the top of the browser stack, centered horizontally
- **Animation Effect**: Pulse animation from 25px to 100px width with blur effect
- **Z-Index**: 9999 for maximum visibility

## Compatibility

- ✅ Zen Browser (Primary target)

## Contributing

Found a bug or want to suggest an improvement? Feel free to open an issue or submit a pull request on the [GitHub repository](https://github.com/rasyidrafi/zen-deta-loading-bar/).

## License

This project is open source and available under standard open source terms.

## Author

Created by [rasyidrafi](https://github.com/rasyidrafi)

---

*Version 1.2.0 - Last updated: July 30, 2025*