import React from 'react';
import { SampleContainer } from './styled/Sample.styled';
import UploadAudio from './SampleComponents/UploadAudio.jsx';


const Sample = (props) => {

  return (
    <>
      <SampleContainer>
      <h3> im a sample</h3>
      <UploadAudio/>

      </SampleContainer>
    </>

  );
}


export default Sample;