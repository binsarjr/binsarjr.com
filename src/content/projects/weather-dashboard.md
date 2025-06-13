---
layout: project
title: 'Weather Dashboard'
description: 'Beautiful weather dashboard with forecasts, maps, and location-based weather alerts using modern APIs and interactive charts.'
image: '/project1.jpg'
technologies: ['Vue.js', 'TypeScript', 'Weather API', 'Chart.js', 'Mapbox', 'Tailwind CSS']
githubUrl: 'https://github.com/binsarjr/weather-dashboard'
liveUrl: 'https://weather.binsarjr.com'
category: 'web'
featured: false
completedAt: '2024-09-12'
---

# Weather Dashboard

A comprehensive weather application that provides real-time weather data, forecasts, and interactive visualizations for locations worldwide.

## Features

### 🌤️ Real-time Weather Data

- Current conditions with detailed metrics
- 7-day weather forecast
- Hourly forecasts for next 24 hours
- Weather alerts and warnings

### 📊 Interactive Charts

- Temperature trends
- Precipitation probability
- Wind speed and direction
- UV index tracking

### 🗺️ Interactive Maps

- Weather overlay maps
- Satellite imagery
- Radar precipitation maps
- Global weather patterns

## Technical Implementation

Built with Vue.js 3 and Composition API for reactive data management. Integrates multiple weather APIs for comprehensive coverage and fallback data sources.

```javascript
// Weather service implementation
export class WeatherService {
  async getCurrentWeather(lat: number, lon: number) {
    const response = await fetch(`/api/weather/current?lat=${lat}&lon=${lon}`);
    return response.json();
  }
}
```

The dashboard features responsive design that works seamlessly across desktop, tablet, and mobile devices.
