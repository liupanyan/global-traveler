import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import { Destination } from './types';

interface LeafletMapProps {
  destinations: Destination[];
  onMarkerClick?: (destination: Destination) => void;
}

const LeafletMap: React.FC<LeafletMapProps> = ({ destinations, onMarkerClick }) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersRef = useRef<L.Marker[]>([]);
  const polylineRef = useRef<L.Polyline | null>(null);

  // Initialize Map
  useEffect(() => {
    if (mapContainerRef.current && !mapInstanceRef.current) {
      mapInstanceRef.current = L.map(mapContainerRef.current).setView([20, 0], 2);

      L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 20
      }).addTo(mapInstanceRef.current);
    }

    // Cleanup on unmount
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  // Update Markers and Path
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map) return;

    // Clear existing markers
    markersRef.current.forEach(marker => marker.remove());
    markersRef.current = [];
    
    if (polylineRef.current) {
      polylineRef.current.remove();
      polylineRef.current = null;
    }

    if (destinations.length === 0) return;

    // Add new markers
    const latLngs: L.LatLngExpression[] = [];
    const bounds = L.latLngBounds([]);

    destinations.forEach((dest, index) => {
      const latLng: L.LatLngExpression = [dest.coordinates.lat, dest.coordinates.lng];
      latLngs.push(latLng);
      bounds.extend(latLng);

      // Create custom numbered marker
      const numberedIcon = L.divIcon({
        className: 'bg-transparent',
        html: `<div style="
          background-color: #0ea5e9; 
          color: white; 
          width: 32px; 
          height: 32px; 
          border-radius: 50%; 
          display: flex; 
          align-items: center; 
          justify-content: center; 
          font-weight: bold; 
          font-size: 14px; 
          border: 3px solid white; 
          box-shadow: 0 3px 8px rgba(0,0,0,0.4);
          font-family: ui-sans-serif, system-ui, sans-serif;
        ">${index + 1}</div>`,
        iconSize: [32, 32],
        iconAnchor: [16, 16], // Center the circle
        popupAnchor: [0, -16]
      });

      // Build Popup Content
      let popupContent = `
        <div style="font-family: system-ui, sans-serif; min-width: 200px;">
          <h3 style="margin: 0 0 5px 0; font-size: 16px; font-weight: bold;">${dest.name}</h3>
          <p style="margin: 0 0 8px 0; color: #666; font-size: 13px;">${dest.description}</p>
      `;

      if (dest.activities && dest.activities.length > 0) {
        popupContent += `
          <div style="margin-top: 8px; border-top: 1px solid #eee; padding-top: 8px;">
            <strong style="font-size: 12px; color: #333;">推荐活动:</strong>
            <ul style="margin: 4px 0 0 0; padding-left: 16px; font-size: 12px; color: #444;">
              ${dest.activities.map(act => `<li>${act}</li>`).join('')}
            </ul>
          </div>
        `;
      }
      
      popupContent += `</div>`;

      const marker = L.marker(latLng, { icon: numberedIcon })
        .addTo(map)
        .bindPopup(popupContent);
      
      marker.on('click', () => {
        if (onMarkerClick) onMarkerClick(dest);
      });

      markersRef.current.push(marker);
    });

    // Draw path connecting destinations
    if (latLngs.length > 1) {
      polylineRef.current = L.polyline(latLngs, {
        color: '#0ea5e9', // Brand 500
        weight: 3,
        opacity: 0.7,
        dashArray: '5, 10'
      }).addTo(map);
    }

    // Fit bounds to show all markers
    if (latLngs.length > 0) {
      map.fitBounds(bounds, { padding: [50, 50], maxZoom: 12 });
    }
  }, [destinations, onMarkerClick]);

  return <div ref={mapContainerRef} className="h-full w-full outline-none" />;
};

export default LeafletMap;
