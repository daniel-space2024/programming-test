import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';

// We need to dynamically import our components that require 'window'
const MapContainer = dynamic(() => import('react-leaflet').then((mod) => mod.MapContainer), {
  ssr: false, // This line is important. It's what prevents server-side render
});
const TileLayer = dynamic(() => import('react-leaflet').then((mod) => mod.TileLayer), {
  ssr: false,
});
const Marker = dynamic(() => import('react-leaflet').then((mod) => mod.Marker), {
  ssr: false,
});
const Popup = dynamic(() => import('react-leaflet').then((mod) => mod.Popup), {
  ssr: false,
});

type MapComponentProps = {
  lat: number | null;
  lng: number | null;
};

const MapComponent = ({ lat, lng }: MapComponentProps) => {
  const [locationIcon, setLocationIcon] = useState<L.Icon | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && !locationIcon) {
      const L = require('leaflet');
      const newLocationIcon = L.icon({
        iconUrl: '/marker-icon.png',
        iconSize: [30, 30],
      });
      setLocationIcon(newLocationIcon);
    }
  }, [locationIcon]);

  if (lat == null || lng == null) {
    return <div>Location data is not available.</div>;
  }

  // The MapContainer and related components will only be rendered client-side
  return (
    <div>
      {locationIcon && (
        <MapContainer center={[lat, lng]} zoom={13} style={{ height: '300px' }}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[lat, lng]} icon={locationIcon}>
            <Popup>
              {lat}, {lng}
            </Popup>
          </Marker>
        </MapContainer>
      )}
    </div>
  );
};

export default MapComponent;
