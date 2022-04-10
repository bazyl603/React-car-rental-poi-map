import React from 'react';

import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import MarkerClusterGroup from "react-leaflet-markercluster";

import { blueIcon, greenIcon } from './assets/markerIcon';
import PopUpContent from './PopUpContent';
import { dataElement } from './types';

interface Props {
  data: dataElement[],
  center: {lat: number, lon: number}
}

function Map(props: Props): JSX.Element{

  const { data, center } = props;

  return (
    <>
    <MapContainer center={[center.lat, center.lon]} zoom={15} maxZoom={18} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <MarkerClusterGroup showCoverageOnHover={false}>
        {data.map((el: dataElement) => (
          <Marker position={[el.location.latitude, el.location.longitude]} icon={el.status === "AVAILABLE" ? greenIcon : blueIcon} key={el.id}> 
            <Popup>
              <PopUpContent data={el}  />
            </Popup>
          </Marker>))
        }
      </MarkerClusterGroup>
    </MapContainer>
    </>
  );
}

export default Map;