import React, {useContext} from 'react';
import { SearchDataContext } from '../../../Contexts/SearchDataContext.js';
import { SearchResultsContainer, SearchResultContainer, SRCNameContainer, SRCPlayButtonContainer, SearchResultsTitle} from './styled/SearchResults.styled.js';
import SRDownloadButton from './SRDownloadbutton.jsx';
import AudioPlayer from "./MiniAudioPlayer/AudioPlayer.js";




const SearchResults = (props) => {
  const {searchData} = useContext(SearchDataContext);

  return (
    <>
    <SearchResultsTitle> <p> Search Results  </p></SearchResultsTitle>

    <form action="/upload" method="POST" enctype="multipart/form-data">
      <div class="custom-file mb-3">
        <input type="file" name="file" id="file" class="custom=file-input"/>
        <label for="file" class="custom-file-label"> Choose File</label>
      </div>
      <input type="submit" value="Submit" class="btn btn-primary btn-block"/>
    </form>

    <SearchResultsContainer>
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
                <SRCNameContainer>{entry.name.substring(0,30)}     {entry.id}</SRCNameContainer>

                <SRDownloadButton url={entry.download}/>

              </SearchResultContainer>
            </>
          )
        })
      }
    </SearchResultsContainer>
    </>

  );
}



export default SearchResults;