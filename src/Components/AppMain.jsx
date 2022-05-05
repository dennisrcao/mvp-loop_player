import React, {useState} from 'react';
import { MainCanvas} from './styled/AppMain.styled.js';
import Search from './AppMainComponents/Search/Search.jsx';
import SearchResults from './AppMainComponents/SearchResults/SearchResults.jsx';
import FourSamples from './AppMainComponents/FourSamples/FourSamples.jsx';
import {SearchDataContext, FourPlayerURLsContext} from '../Contexts/Context.js';

let exampleURL = 'https://freesound.org/data/previews/379/379210_7027306-hq.mp3';
const AppMain = () => {
  const [searchData, setSearchData] = useState([]);
  const [fourPlayerURLs, setFourPlayerURLs] = useState([exampleURL,exampleURL,exampleURL,exampleURL]);
  console.log("<AppMain> state fourPlayerURL is", fourPlayerURLs);
  console.log("type is", typeof fourPlayerURLs);



//line 24 is only searchDataContext

  return (
      <MainCanvas>
        <SearchDataContext.Provider value={{ searchDataKey:[searchData, setSearchData]}}>
        <FourPlayerURLsContext.Provider value={{fourPlayerURLsKey:[fourPlayerURLs, setFourPlayerURLs]}}>
          <Search/>
          <SearchResults/>
          <FourSamples/>

        </FourPlayerURLsContext.Provider>

        </SearchDataContext.Provider>


      </MainCanvas>
  );
};

export default AppMain;