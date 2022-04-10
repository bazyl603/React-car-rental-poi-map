import React, { useState } from 'react';

import Map from './components/Map';

import './App.css';
import "leaflet/dist/leaflet.css";
import 'react-leaflet-markercluster/dist/styles.min.css';

import { useApi } from './components/ApiProvider';
import Modal from './components/Modal';
import BtnCustom from './components/BtnCustom';
import filterApi from './hooks/Filter';

function App() {

  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [batteryLevel, setBateryLevel] = useState<boolean>(false);

  const {data, error} = useApi();

  const filterData = filterApi(data, {batteryLeve: batteryLevel, status: isChecked});

  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);  

  const checkHandler = () => {
    setIsChecked(!isChecked)
  }
  const batterykHandler = () => {
    setBateryLevel(!batteryLevel);
  }
  console.log("filterdada : " + filterData)
  return (
    <div className='App'>
      {error ? <p>something went wrong</p> :
      filterData ? (
        <>
          <Modal open={open} handleClose={handleClose} setOpen={setOpen}>
            <>
            <div style={{margin: '30px'}}>
              <label htmlFor="checkbox">Available: </label>
              <input type="checkbox" id="checkbox" checked={isChecked} onChange={checkHandler}/>
            </div>
            <div>
              <label htmlFor="checkbox">Battery greater than 50% : </label>
              <input type="checkbox" id="checkbox" checked={batteryLevel} onChange={batterykHandler}/>
            </div>
            </>
          </Modal>
          <BtnCustom onClick={handleOpen} position={{left: 50, top: 90}} height={40}>Filter</BtnCustom>
          <Map data={filterData} center={{lat: data[0].location.latitude, lon: data[0].location.longitude}}/>
        </>
      ) : <p>loading...</p> }      
    </div>
  );
}

export default App;
