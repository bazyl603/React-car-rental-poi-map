import React from 'react';
import styled from 'styled-components';

type Props = {
  levelPct: number
};

interface StyledProps{
  width: number
}

const OBR = styled.i<StyledProps>`
  & {
    margin: auto;
    box-sizing: border-box;
    position: relative;
    display: block;
    width: 30%;
    height: 15%;
    max-width: 50px;
    max-height: 25px;
    transform: scale(var(--ggs, 1));
    border: 2px solid;
    border-radius: 3px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    height: 85%;
    background: currentColor;
    top: 1px;
  }
  &::before {
    right: -4px;
    border-radius: 3px;
    width: 4px;
  }
  &::after {
    width: ${props => props.width - 10}%;
    left: 1px;
    background-color: ${props => props.width > 65 ? 'green' : 'orange'};
    background-color: ${props => props.width <= 30 && 'red'};
  }
`

function BatteryBar({ levelPct }: Props): JSX.Element{  

  return (      
    <OBR width={levelPct}/>
  );
}

export default BatteryBar;