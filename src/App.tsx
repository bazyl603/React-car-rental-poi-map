import React from 'react';

import Map from './components/Map';

import './App.css';
import "leaflet/dist/leaflet.css";
import 'react-leaflet-markercluster/dist/styles.min.css';

import { useApi } from './components/ApiProvider';

function App() {

  const {data, error} = useApi();

  return (
    <div className='App'>
      {error ? <p>something went wrong</p> :
      data ? <Map data={data} center={{lat: data[0].location.latitude, lon: data[0].location.longitude}}/> : <p>loading...</p> }
    </div>
  );
}

export default App;
