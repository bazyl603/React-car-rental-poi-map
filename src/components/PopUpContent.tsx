import React from 'react';
import BatteryBar from './BatteryBar';
import BtnCustom from './BtnCustom';
import { CONTENER, FLEX, IMG, TEXT, VRAPER } from './styled/popUpContent';
import { dataElement } from './types';

interface Props {
  data: dataElement
}

function PopUpContent(props: Props): JSX.Element{

  const { data } = props;

  //const image = `https://android.jrotor.com/api/attachments/${data.picture.name}`;
  const image = `./img/${data.picture.name}.jpg`

  return (
    <CONTENER>
      <FLEX>
        <VRAPER>
          <IMG src={image} alt={data.name} />
          <TEXT>{data.platesNumber}</TEXT>
        </VRAPER>
        
        <VRAPER>
          <TEXT>{data.rangeKm} km</TEXT>
          <BatteryBar levelPct={data.batteryLevelPct}/>
          <TEXT>{data.batteryLevelPct} %</TEXT>
        </VRAPER>
      </FLEX>
      <FLEX>
        <VRAPER>
          <TEXT>{data.type}</TEXT>
          <TEXT>reservation: {data.reservation ? data.reservationEnd : "--"}</TEXT>
        </VRAPER>
        
        <VRAPER>
          <TEXT>{data.name}</TEXT>
        </VRAPER>
      </FLEX>
      
    <BtnCustom onClick={() => alert('rental function')} position={{left: 25, top: 85}} height={30}>Rent</BtnCustom>
    </CONTENER>
  );
}

export default PopUpContent;