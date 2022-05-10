import React from 'react';
import { useRef , useContext } from "react";
import { SearchDataContext } from '../../../Contexts/Context.js';

import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import MenuItem from '@mui/material/MenuItem';
import ModalCircleFifths from './ModalCircleFifths.jsx';

import { SearchContainer, SearchTermContainer, SearchKeyContainer} from './styled/Search.styled.js';

const axios = require('axios');
const FREESOUND_TOKEN='39wKhLgQ9evoEDRkT5VKEs83DYJVgkOP2z14bb2j';

const musicKeys = [
  {
    value: '',
    label: 'Empty',
  },

  {
    value: 'Ab Minor',
    label: 'Ab Minor [ 1A ]',
  },
  {
    value: 'Eb Minor',
    label: 'Eb Minor [ 2A ]',
  },
  {
    value: 'Bb Minor',
    label: 'Bb Minor [ 3A ]',
  },
  {
    value: 'F Minor',
    label: 'F Minor [ 4A ]',
  },
  {
    value: 'C Minor',
    label: 'C Minor [ 5A ]',
  },
  {
    value: 'G Minor',
    label: 'G Minor [ 6A ]',
  },
  {
    value: 'D Minor',
    label: 'D Minor [ 7A ]',
  },
  {
    value: 'A Minor',
    label: 'A Minor [ 8A ]',
  },
  {
    value: 'E Minor',
    label: 'E Minor [ 9A ]',
  },
  {
    value: 'B Minor',
    label: 'B Minor [ 10A ]',
  },
  {
    value: 'F# Minor',
    label: 'F# Minor [ 11A ]',
  },
  {
    value: 'Db Minor',
    label: 'Db Minor [ 12A ]',
  }

];


const Search = (props) => {
  const keyRef = useRef('');
  const termRef = useRef('');
  const {searchDataKey} = useContext(SearchDataContext);  //gather global state
  const setSearchData = searchDataKey[1];


  function searchTermHandler(e){
    e.preventDefault();
    let searchQuery = keyRef.current.value + ' ' + termRef.current.value;
    console.log('searching.... ', searchQuery);
    axios.get(`https://freesound.org/apiv2/search/text/?query=${searchQuery}&token=${FREESOUND_TOKEN}`).then((res)=>{
      let textQueryResults = res.data.results;
      let textQueryIDs = [];
      let textQueryIDsPromises = [];
      textQueryResults.forEach(result=> textQueryIDs.push(result.id));
      textQueryIDs.forEach(id=>{
        textQueryIDsPromises.push(axios.get(`https://freesound.org/apiv2/sounds/${id}/?token=${FREESOUND_TOKEN}`))
      });
      Promise.all(textQueryIDsPromises).then((idQueryResults)=>{
        textQueryResults.forEach((textQuery,index) => {
          textQuery['previews'] = idQueryResults[index].data.previews;
          textQuery['download'] = idQueryResults[index].data.download;
        })
        // console.log('textQueryResults', textQueryResults);
        setSearchData(textQueryResults);
      })
    })
    .catch((err)=>{
      console.error(err.message);
    });
  }

  return (
    <SearchContainer>
        <form>
          <SearchKeyContainer>
            <TextField select label="Select" size="small" defaultValue={""}  inputRef={keyRef} style = {{width: 194, height:140}}>
              {musicKeys.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </SearchKeyContainer>
          <SearchTermContainer>
            <TextField label="Search sample" variant="outlined"  size="small" placeholder="Search..." inputRef={termRef}>
            </TextField>
            <IconButton type="submit" aria-label="search" onClick={(e)=>searchTermHandler(e)}>
              <SearchIcon style={{ fill: "blue" }} />
            </IconButton>
          </SearchTermContainer>
        </form>

        <ModalCircleFifths/>

    </SearchContainer>


  );
}
//        <SearchIcon style={{ fill: "blue" }} />


export default Search;