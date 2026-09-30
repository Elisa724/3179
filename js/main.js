/**
 * FIT3179 - Australia's Inflation Squeeze (2021–2026)
 * Main Vega-Lite Loader Script
 */

document.addEventListener('DOMContentLoaded', () => {
  const embedOptions = {
    actions: false,    // Hides the default "View Source / Export" menu for a clean look
    renderer: 'canvas' // High-performance canvas rendering
  };

  // Visualization 1: Proportional Symbol Map of Capital Cities
  vegaEmbed('#vis1_map', 'json/map1_capital_cities.json', embedOptions)
    .catch(console.error);

  // Visualization 2: Essential vs. Discretionary Grouped Bar Chart
  vegaEmbed('#vis2_bar', 'json/bar1_state_essential_discretionary.json', embedOptions)
    .catch(console.error);
});