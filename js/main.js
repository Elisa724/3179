/**
 * FIT3179 - Australia's Inflation Squeeze (2021–2026)
 * Main Vega-Lite Loader Script
 */

document.addEventListener('DOMContentLoaded', () => {
  const embedOptions = {
    actions: false,    // Hides the default "View Source / Export" menu for a clean look
  };

  // Section 1 Visualisations
  vegaEmbed('#vis1_map', 'json/map1_capital_cities.json', {actions: false}).catch(console.error);
  vegaEmbed('#vis2_bar', 'json/bar_state_essential_discretionary.json', {actions: false}).catch(console.error);
  
  // Section 2 Visualisation 
  vegaEmbed('#vis3_treemap', 'json/treemap_cpi_weights.json', {actions: false}).catch(console.error);
  vegaEmbed('#vis4_bumpchart', 'json/bump_chart_cpi_ranks.json', embedOptions).catch(console.error);

  // Section 3 Visualisation
  vegaEmbed('#vis-map2', 'json/map2_state_real_wages.json', {actions: false, renderer: 'svg'}).catch(console.error);
  vegaEmbed('#vis-heatmap', 'json/heatmap_industry_wpi.json', {actions: false,renderer: 'svg'}).catch(console.error);
});