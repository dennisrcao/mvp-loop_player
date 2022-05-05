import React, {useContext} from 'react';
import { SearchDataContext } from '../../../Contexts/Context.js';
import { SearchResultsContainer, SearchResultContainer, SRCNameContainer, SRCPlayButtonContainer, SearchResultsTitle} from './styled/SearchResults.styled.js';
import SRMoveTo4Player from './SRMoveTo4Player.jsx';
import AudioPlayer from "./MiniAudioPlayer/AudioPlayer.js";




const SearchResults = (props) => {
  const {searchDataKey} = useContext(SearchDataContext);
  const searchData = searchDataKey[0];
  console.log('searchData', searchData);

  return (
    <SearchResultsContainer>
      <SearchResultsTitle> <p> Search Results  </p></SearchResultsTitle>
      {
        searchData.map((entry, index)=>{
          return (
            <>
              <SearchResultContainer key={index}>
                <SRCPlayButtonContainer>
                  {
                    <AudioPlayer url={entry.previews['preview-lq-mp3']}/>
                  }
                </SRCPlayButtonContainer>
                  {console.log(entry)}
                <SRCNameContainer>{entry.name.substring(0,30)} </SRCNameContainer>

                <SRMoveTo4Player url={entry.previews['preview-lq-mp3']} />

              </SearchResultContainer>
            </>
          )
        })
      }
    </SearchResultsContainer>

  );
}



export default SearchResults;