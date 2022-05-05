import React from 'react';




const SRMoveTo4Player = (props) => {
  console.log('<SRMoveTo4Player> with props', props);
  function saveToDB (){
    console.log('in clicked with url', props.url);
    // location.href=props.url;
  }
  return (
    <>
      <button onClick ={saveToDB}> --> </button>
    </>
  )
}




export default SRMoveTo4Player;