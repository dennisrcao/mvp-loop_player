import React from 'react';
// import { useRef , useContext } from "react";
import { SampleContainer } from './styled/Sample.styled';
import * as Tone from 'tone';

const Sample = (props) => {
  // const player = new Tone.Player({
  //   url: "https://tonejs.github.io/audio/loop/FWDL.mp3",
  //   loop: true,
  //   loopStart: 0.5,
  //   loopEnd: 0.7,
  // }).toDestination();


  let url = 'https://tonejs.github.io/audio/berklee/gong_1.mp3';
  // let url = 'https://youtu.be/oq2Oq1J6t70'; //< --- does not work
  async function triggerSample(){
    await Tone.start()
    console.log('audio is ready');
    const player = new Tone.Player(url).toDestination();
    Tone.loaded().then(() => {
	    player.start();
    }).catch((err)=>{
      console.log('yo an error');
      console.error(err);
    });
  }

  return (
    <>
      <SampleContainer>
      <button onClick={triggerSample}></button>

      </SampleContainer>
    </>

  );
}

// <tone-example label="Player">
// <tone-loader></tone-loader>
// <div slot="explanation">
//   Click on the button to play the audio file on loop
//   using <a href="https://tonejs.github.io/docs/Player">Tone.Player</a>.
// </div>

// <div id="content">
//   <tone-play-toggle></tone-play-toggle>
// </div>
// </tone-example>

export default Sample;