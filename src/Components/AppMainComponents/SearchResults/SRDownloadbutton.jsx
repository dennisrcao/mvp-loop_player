import React from 'react';




const SRDownloadButton = (props) => {
  function saveToDB (){
    console.log('in clicked with url', props.url);
  }
  return (
    <>
      <button onClick ={saveToDB}> download</button>
    </>
  )
}




export default SRDownloadButton;