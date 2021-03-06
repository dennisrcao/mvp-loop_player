import React, {useState} from 'react';
import { MainCanvas} from './styled/AppMain.styled.js';
import Search from './AppMainComponents/Search/Search.jsx';
import SearchResults from './AppMainComponents/SearchResults/SearchResults.jsx';
import FourSamples from './AppMainComponents/FourSamples/FourSamples.jsx';
import {SearchDataContext, FourPlayerURLsContext, WhichPlayerToReplace} from '../Contexts/Context.js';

let exampleURL2 = 'https://freesound.org/data/previews/379/379210_7027306-hq.mp3';
let exampleURL = 'https://freesound.org/data/previews/632/632164_1584152-hq.mp3';

const AppMain = () => {
  const [searchData, setSearchData] = useState([]);
  const [fourPlayerURLs, setFourPlayerURLs] = useState([exampleURL2,exampleURL2,exampleURL2,exampleURL2]);
  const [startIndex, setStartIndex] = useState(0);
  return (
      <MainCanvas>
        <SearchDataContext.Provider value={{ searchDataKey:[searchData, setSearchData]}}>
        <FourPlayerURLsContext.Provider value={{fourPlayerURLsKey:[fourPlayerURLs, setFourPlayerURLs]}}>
        <WhichPlayerToReplace.Provider value={{startIndex, setStartIndex}}>
          <Search/>
          <SearchResults/>
          <FourSamples/>
        </WhichPlayerToReplace.Provider>
        </FourPlayerURLsContext.Provider>
        </SearchDataContext.Provider>
      </MainCanvas>
  );
};

export default AppMain;