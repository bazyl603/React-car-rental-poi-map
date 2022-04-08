import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import MarkerClusterGroup from "react-leaflet-markercluster";
import * as L from "leaflet";

import './App.css';
import "leaflet/dist/leaflet.css";
import 'react-leaflet-markercluster/dist/styles.min.css';

import icon from './assets/marker.svg';

import { useApi } from './components/ApiProvider';

function App() {

  const blueIcon = new L.Icon({
    iconUrl: "https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|abcdef&chf=a,s,ee00FFFF",
    iconAnchor: new L.Point(10, 34),
  });

  const greenIcon = new L.Icon({
    iconUrl: "https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|2ecc71&chf=a,s,ee00FFFF",
    iconAnchor: new L.Point(10, 34),
  });

  const gIcon = new L.Icon({
    iconUrl: icon,
    iconAnchor: new L.Point(10, 34),
  });

  return (
    <div className='App'>
      <MapContainer center={[52.1935161702226, 20.9304286193486]} zoom={15} maxZoom={18} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker> */}
        <MarkerClusterGroup showCoverageOnHover={false}>
          <Marker position={[52.1935161702226, 20.9304286193486]} icon={blueIcon} />
          <Marker position={[52.193275, 20.930372]} icon={greenIcon} />
          <Marker position={[52.193891367697, 20.930564789789]} icon={gIcon} />
        </MarkerClusterGroup>
      </MapContainer>
    </div>
  );
}

export default App;
