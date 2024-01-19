// components/MapComponent.tsx
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const locationIcon = L.icon({
  iconUrl: '/marker-icon.png', // Path to marker image in the public directory
  iconSize: [30, 30], // Size of the icon
});


type MapComponentProps = {
  lat: number | null;
  lng: number | null;
};

const MapComponent = ({ lat, lng }: MapComponentProps) => {
  // Check if the latitude and longitude are valid before rendering the map  
  if (lat == null || lng == null) {  
    return <div>Location data is not available.</div>;  
  }  

  return (
    <MapContainer center={[lat, lng]} zoom={13} style={{ height: '300px' }}>
      <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, lng]}  icon={locationIcon}>
        <Popup>
        { lat}, {lng }
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
