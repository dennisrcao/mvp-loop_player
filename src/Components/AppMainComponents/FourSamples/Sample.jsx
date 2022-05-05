import React from 'react';
import '../FourSamples/Sample_LoopSlicer/css/style.css'; //not sure if you should keep this
import { SampleContainer } from './styled/Sample.styled';
import * as Tone from 'tone';
import './Sample_LoopSlicer/js/ctrl.js'

const Sample = (props) => {
  function togglePlaybackFX(){
    console.log('toggleplayback');
    let x = document.getElementById("playback-container");
    // if (x.style.display === "none") {
    //   x.style.display = "block";
    // } else {
    //   x.style.display = "none";
    // }
  }
  function toggleCompressionFX(){
    let x = document.getElementById("compressor-container");
    // if (x.style.display === "none") {
    //   x.style.display = "block";
    // } else {
    //   x.style.display = "none";
    // }
  }
  function toggleEQFX(){
    let x = document.getElementById("eq-container");
    // if (x.style.display === "none") {
    //   x.style.display = "block";
    // } else {
    //   x.style.display = "none";
    // }
  }

  return (
    <>
      <SampleContainer>
        <div className="sound-top-container">
        <div className="controls">
          <div className="open-container">
            <label className="btn-sm btn-primary btn-openfile" htmlFor="openfile">
              <i className="glyphicon glyphicon-open-file"></i>
              <input id="openfile" type="file" style={{display:'none'}} />
            </label>
          </div>
          <div className="play-container">
            <button className="btn-xs btn-primary" data-action="play" id="playbtn">
              <i className="glyphicon glyphicon-play-circle"></i>
              Play
              /
              <i className="glyphicon glyphicon-pause"></i>
              Pause
          </button>
          </div>
          <div className="save-container">
            <button className="btn btn-primary" data-toggle="modal" data-target="#saveModal" data-action="opensavedialog">
              <i className="glyphicon glyphicon-save"></i>
              Save
            </button>
          </div>
        </div>
        <div className="filename-container">
          <p className="filename"><small id = "filename"></small></p>
        </div>

        <div className="zoom-btn-container">
          <button className="zoom-btn" data-action="zoomin">
            <i className = "glyphicon glyphicon-zoom-in"> </i>
          </button>
          <button className="zoom-btn" data-action="zoomout">
            <i className = "glyphicon glyphicon-zoom-out"> </i>
          </button>
        </div>

        <div className="fx-container">
          <button  id="fx-playback-btn" onClick={togglePlaybackFX()} data-action="fx-playbackspeed">
            <i className = "glyphicon glyphicon-forward"> </i>
          </button>
          <button id="fx-compression-btn" onClick={toggleCompressionFX()} data-action="fx-compression">
            <i className = "glyphicon glyphicon-volume-up"> </i>
          </button>
          <button id="fx-equalizer-btn" onClick={toggleEQFX()} data-action="fx-eq">
            <i className = "glyphicon glyphicon-equalizer"> </i>
          </button>
        </div>

        </div>
        <div id="demo">
          <div id="waveform">
              <span id="progressmode"></span>
              <div className="progress progress-striped active" id="progress-bar">
                <div className="progress-bar progress-bar-info"></div>
              </div>
          </div>
			  </div>

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