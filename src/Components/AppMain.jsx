import React, {useState} from 'react';
import { MainCanvas} from './styled/AppMain.styled.js';
import Search from './AppMainComponents/Search/Search.jsx';
import SearchResults from './AppMainComponents/SearchResults/SearchResults.jsx';
import FourSamples from './AppMainComponents/FourSamples/FourSamples.jsx';
import {SearchDataContext} from '../Contexts/SearchDataContext.js';


const AppMain = () => {
  const [searchData, setSearchData] = useState([]);

  return (
      <MainCanvas>
        <SearchDataContext.Provider value={{searchData, setSearchData}}>
          <Search/>
          <SearchResults/>
        </SearchDataContext.Provider>

        <FourSamples>
        </FourSamples>

      </MainCanvas>
  );
};

export default AppMain;