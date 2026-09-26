/**
 * FIT3179 - Australia's Inflation Squeeze (2021–2026)
 * Main Vega-Lite Loader Script
 */

document.addEventListener('DOMContentLoaded', () => {
  const embedOptions = {
    actions: false,    // Hides the default "View Source / Export" menu for a clean look
    renderer: 'canvas' // High-performance canvas rendering
  };

  // Embed Map 1: Capital City Proportional Symbol Map
  vegaEmbed('#vis1_map', 'json/map1_capital_cities.json', embedOptions)
    .then(result => {
      console.log("Map 1 successfully rendered.");
    })
    .catch(error => {
      console.error("Error loading Map 1:", error);
      document.querySelector('#vis1_map').innerHTML = 
        `<p style="color: red; padding: 20px;">Failed to load Map 1. Check file paths and CSV data.</p>`;
    });
});