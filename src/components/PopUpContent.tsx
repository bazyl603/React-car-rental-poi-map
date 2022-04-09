import React from 'react';
import BtnCustom from './BtnCustom';
import { CONTENER, FLEX, IMG, TEXT, VRAPER } from './styled/popUpContent';
import { dataElement } from './types';

interface Props {
  data: dataElement
}

function PopUpContent(props: Props): JSX.Element{

  const { data } = props;

  const image = `https://android.jrotor.com/api/attachments/${data.picture.name}`;

  return (
    <CONTENER>
      <FLEX>
        <VRAPER>
          <IMG src={image} alt={data.name} />
          <TEXT>{data.platesNumber}</TEXT>
        </VRAPER>
        
        <VRAPER>
          <TEXT>{data.rangeKm} km</TEXT>
          <TEXT>{data.batteryLevelPct} %</TEXT>
        </VRAPER>
      </FLEX>
      
    <BtnCustom>more</BtnCustom>
    </CONTENER>
  );
}

export default PopUpContent;