import React, { useContext} from 'react';
import { FourPlayerURLsContext } from '../../../Contexts/Context.js'; //global state of urls used
import { FourSamplesContainer} from './styled/FourSamples.styled.js';
import Waveform from './Sample.jsx';

const FourSamples = (props) => {
  const {fourPlayerURLsKey} = useContext(FourPlayerURLsContext);
  console.log('<FourSamples>', fourPlayerURLsKey);



  return (
    <FourSamplesContainer>
      <Waveform url='https://freesound.org/data/previews/632/632164_1584152-lq.mp3'/>

    </FourSamplesContainer>


  );
}


export default FourSamples;