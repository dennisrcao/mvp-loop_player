import React from 'react';
import Wavesurfer from "wavesurfer.js";
import { Button, Flex } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import * as WaveformRegionsPlugin from "wavesurfer.js/dist/plugin/wavesurfer.regions";
import randomColor from "randomcolor";


const Waveform = ({ url }) => {
  const waveform = useRef(null);

  useEffect(() => {
    if (!waveform.current) {
      waveform.current = Wavesurfer.create({
        container: "#waveform",
        waveColor: "#567FFF",
        barGap: 2,
        barWidth: 3,
        barRadius: 3,
        cursorWidth: 3,
        cursorColor: "#567FFF",
		// Add the regions plugin.
	    // More info here https://wavesurfer-js.org/plugins/regions.html
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

  }, []);


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
    <Flex flexDirection="column" w="100%">
      <div id="waveform" />
      <Flex flexDirection="row" justifyContent="center">
        <Button m="4" onClick={playAudio}>
          Play / Pause
        </Button>
      </Flex>
    </Flex>
  );
};

export default Waveform;
