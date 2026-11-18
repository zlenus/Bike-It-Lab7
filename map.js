// Import Mapbox as an ES module
import mapboxgl from 'https://cdn.jsdelivr.net/npm/mapbox-gl@2.15.0/+esm';

// Check that Mapbox GL JS is loaded
console.log('Mapbox GL JS Loaded:', mapboxgl);

// Set your Mapbox access token here
mapboxgl.accessToken = 'pk.eyJ1IjoienNsZW51cyIsImEiOiJjbXdsbXZzMHQwdTd0MnhwczM4OXV2bHh6In0.ImBVDiH7wAxNqrZqM7RyCw';

// Initialize the map
const map = new mapboxgl.Map({
  container: 'map',                            // id of the div
  style: 'mapbox://styles/mapbox/streets-v12', // basemap style
  center: [-71.09415, 42.36027],               // [longitude, latitude] — MIT
  zoom: 12,
  minZoom: 5,
  maxZoom: 18,
});