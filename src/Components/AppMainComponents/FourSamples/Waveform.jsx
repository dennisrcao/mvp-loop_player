import React from 'react';
import {useContext} from 'react';
import {WhichPlayerToReplace} from '../../../Contexts/Context.js';
import Wavesurfer from "wavesurfer.js";
import { Button, Flex } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import * as WaveformRegionsPlugin from "wavesurfer.js/dist/plugin/wavesurfer.regions";
import randomColor from "randomcolor";
import './Waveform.css';

let previousURL = '';

const Waveform = ({ url, index }) => {
  const waveform = useRef(null);
  let {startIndex, setStartIndex} = useContext(WhichPlayerToReplace);
  console.log('Global startIndex', startIndex);
  console.log('<Waveform> ', index);
  useEffect(() => {
    if (!waveform.current || url) {
      if (waveform.current){
        waveform.current.destroy();
      }
      waveform.current = Wavesurfer.create({
        container: `#waveform-${index}`,
        waveColor: "#567FFF",
        barGap: 2,
        barWidth: 3,
        barRadius: 3,
        cursorWidth: 3,
        cursorColor: "#567FFF",
        height        : 128,
        minPxPerSec   : 20,
        pixelRatio    : window.devicePixelRatio,
        plugins: [WaveformRegionsPlugin.create({ maxLength: 90 })],
      });
      waveform.current.load(url);
      // Enable dragging on the audio waveform
      waveform.current.enableDragSelection({
          maxLength: 90,
          });
      // Perform action when new region is created
      waveform.current.on("region-created", (e) => {
      let color = randomColor({
          luminosity: "light",
          alpha: 0.3,
          format: "rgba",
      });
      e.color = color;
      });
    }
    if (startIndex===index){
      console.log('startIndex===index URL useeffect here');

       waveform.current.destroy();
       waveform.current = Wavesurfer.create({
        container: `#waveform-${index}`,
        waveColor: "#567FFF",
        barGap: 2,
        barWidth: 3,
        barRadius: 3,
        cursorWidth: 3,
        cursorColor: "#567FFF",
        height        : 128,
        minPxPerSec   : 20,
        pixelRatio    : window.devicePixelRatio,
        plugins: [WaveformRegionsPlugin.create({ maxLength: 90 })],
      });
      waveform.current.load(url);
      // Enable dragging on the audio waveform
      waveform.current.enableDragSelection({
          maxLength: 90,
          });
      // Perform action when new region is created
      waveform.current.on("region-created", (e) => {
      let color = randomColor({
          luminosity: "light",
          alpha: 0.3,
          format: "rgba",
      });
      e.color = color;
      });

    }

  }, [url]);
  // delete a particular region
  const deleteClip = (clipid) => {
    waveform.current.regions.list[clipid].remove();
  };
  // play a particular region
  const playClip = (clipid) => {
    waveform.current.regions.list[clipid].play();
  };
  const playAudio = () => {
    if (waveform.current.isPlaying()) {
      waveform.current.pause();
    } else {
      waveform.current.play();
    }
  };

  return (
    <div id="sample-container">
      <div id="control-container">
        <Button id={`sample-play-btn-${index}`}  m="4" onClick={playAudio}>
          Play / Pause
        </Button>
      </div>

      <div id={`waveform-container-${index}`}>
        <div id= {`waveform-${index}`} >
        </div>
      </div>
    </div>


  );
};

export default Waveform;
