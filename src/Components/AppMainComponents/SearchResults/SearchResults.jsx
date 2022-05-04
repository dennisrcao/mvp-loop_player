import React, {useContext} from 'react';
import { SearchDataContext } from '../../../Contexts/SearchDataContext.js';
import { SearchResultsContainer, SearchResultContainer, SRCNameContainer, SRCPlayButtonContainer, SearchResultsTitle} from './styled/SearchResults.styled.js';
import SRDownloadButton from './SRDownloadbutton.jsx';
import AudioPlayer from "./MiniAudioPlayer/AudioPlayer.js";




const SearchResults = (props) => {
  const {searchData} = useContext(SearchDataContext);

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

                <SRDownloadButton url={entry.download}/>

              </SearchResultContainer>
            </>
          )
        })
      }
    </SearchResultsContainer>

  );
}



export default SearchResults;