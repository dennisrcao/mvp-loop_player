import React, { useContext, useEffect} from 'react';
import { FourPlayerURLsContext } from '../../../Contexts/Context.js'; //global state of urls used
import { FourSamplesContainer, FourSamplesGlobal} from './styled/FourSamples.styled.js';
import Waveform from './Waveform.jsx';

const FourSamples = (props) => {
  const {fourPlayerURLsKey} = useContext(FourPlayerURLsContext);
  let fourPlayerURLs = fourPlayerURLsKey[0];
  // console.log('<FourSamples> four urls are', fourPlayerURLs);
  useEffect(()=>{
    // console.log('<FourSample> useEffect triggered');
  },[fourPlayerURLs])

  function playAllSamples () {
    console.log('playallsamples');
    console.log(document.getElementById('sample-play-btn-1'));
    document.getElementById('sample-play-btn-0').click();
    document.getElementById('sample-play-btn-1').click();
    document.getElementById('sample-play-btn-2').click();
    document.getElementById('sample-play-btn-3').click();

  }


  return (
    <>
      <FourSamplesGlobal>
        <button id="play-all-samples-btn" onClick={playAllSamples}>Play all</button>
      </FourSamplesGlobal>

      <FourSamplesContainer>
        <Waveform url={fourPlayerURLs[0]} index={0}/>
        <Waveform url={fourPlayerURLs[1]} index={1}/>
        <Waveform url={fourPlayerURLs[2]} index={2}/>
        <Waveform url={fourPlayerURLs[3]} index={3}/>

      </FourSamplesContainer>
    </>


  );
}



export default FourSamples;