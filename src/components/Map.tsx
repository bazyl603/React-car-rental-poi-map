import React from 'react';

import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import MarkerClusterGroup from "react-leaflet-markercluster";

import { blueIcon, greenIcon } from './assets/markerIcon';

function Map(props: any): JSX.Element{
  
  return (
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
        <Marker position={[52.1935161702226, 20.9304286193486]} icon={blueIcon}> 
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        <Marker position={[52.193275, 20.930372]} icon={greenIcon}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        <Marker position={[52.193891367697, 20.930564789789]} icon={greenIcon}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MarkerClusterGroup>
    </MapContainer>
  );
}

export default Map;