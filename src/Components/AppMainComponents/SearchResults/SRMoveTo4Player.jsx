import React,  {useContext} from 'react';
import {WhichPlayerToReplace} from '../../../Contexts/Context.js';
import { FourPlayerURLsContext } from '../../../Contexts/Context.js';

const SRMoveTo4Player = (props) => {
  // console.log('<SRMoveTo4Player> with props', props);
  // console.log('<SRMoveTo4Player> with useContext', useContext(WhichPlayerToReplace));
  let {startIndex, setStartIndex} = useContext(WhichPlayerToReplace);
  const {fourPlayerURLsKey} = useContext(FourPlayerURLsContext);
  let fourPlayerURLs = fourPlayerURLsKey[0]; //array of all links
  let setFourPlayerURLs = fourPlayerURLsKey[1]; //this is a function

  function updateIndex (){
    console.log('startInde is', startIndex);

    console.log('------Start ------');
    let newIndex;
    (startIndex ===3) ?  newIndex = 0: newIndex = startIndex+1;

    console.log('---UPDATE PLAYER------');
    let copy =[...fourPlayerURLs];
    copy[startIndex] = props.url;
    console.log('new Index is ', newIndex);
    setFourPlayerURLs(copy);
    setStartIndex(newIndex);
    console.log('------End ------');

  }
  return (
    <>
      <button onClick ={()=>updateIndex(props.url)}> --> </button>
    </>
  )
}




export default SRMoveTo4Player;