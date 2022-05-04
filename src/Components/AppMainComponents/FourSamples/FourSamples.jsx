import React from 'react';
// import { useRef , useContext } from "react";
import { FourSamplesContainer} from './styled/FourSamples.styled.js';
import Sample from './Sample.jsx';

const FourSamples = (props) => {

  return (
    <FourSamplesContainer>
      <Sample/>
      <Sample/>
      <Sample/>
      <Sample/>
    </FourSamplesContainer>


  );
}


export default FourSamples;