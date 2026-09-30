/**
 * FIT3179 - Australia's Inflation Squeeze (2021–2026)
 * Main Vega-Lite Loader Script
 */

document.addEventListener('DOMContentLoaded', () => {
  const embedOptions = {
    actions: false,    // Hides the default "View Source / Export" menu for a clean look
    renderer: 'canvas' // High-performance canvas rendering
  };

  // Section 1 Visualisations
  vegaEmbed('#vis1_map', 'json/map1_capital_cities.json', {actions: false}).catch(console.error);
  vegaEmbed('#vis2_bar', 'json/bar1_state_essential_discretionary.json', {actions: false}).catch(console.error);
  
  // Section 2 Visualisation 
  vegaEmbed('#vis3_treemap', 'json/treemap_cpi_weights.json', {actions: false}).catch(console.error);
});