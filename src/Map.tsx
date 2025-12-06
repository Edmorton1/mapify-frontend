import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet';
import RecenterMap from './RecenterMap';
import useUserPosition from './useUserPosition';

const Mapp = () => {
  const {array, object} = useUserPosition();

  console.log(object);

  return (
    <MapContainer center={array} zoom={13} style={{height: '100vh'}}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Marker position={array}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <RecenterMap center={array} />
    </MapContainer>
  );
};

export default Mapp;
