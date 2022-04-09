import React from 'react';
import styled from 'styled-components';

type Props = {
  children: JSX.Element | string,
};

const BUTTON = styled.button`
    margin: 0;
    position: absolute;
    top: 90%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    box-shadow:inset 0px 1px 0px 0px #bbdaf7;
    background:linear-gradient(to bottom, #79bbff 5%, #378de5 100%);
    background-color:#79bbff;
    border-radius:6px;
    border:1px solid #84bbf3;
    display:inline-block;
    cursor:pointer;
    color:#ffffff;
    font-family:Arial;
    font-size:15px;
    font-weight:bold;
    padding:6px 24px;
    text-decoration:none;
    text-shadow:0px 1px 0px #528ecc;
    &:hover {
      background:linear-gradient(to bottom, #378de5 5%, #79bbff 100%);
	    background-color:#378de5;
    }
  `

function PopUpContent({ children }: Props): JSX.Element{

  return (      
    <BUTTON>{ children }</BUTTON>
  );
}

export default PopUpContent;