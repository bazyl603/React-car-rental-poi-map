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
      {data ? <Map /> : <p>loading...</p> }
    </div>
  );
}

export default App;
