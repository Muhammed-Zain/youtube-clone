import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import {AppContext} from './context/contextAPI';
import  Header  from './components/Header';
import  Home  from './components/Home';
import SearchResults from './components/SearchResults';
import VideoDetails from './components/VideoDetails';


const App = () => {
  return (
    <AppContext>
      <BrowserRouter>
        <div className='flex flex-col h-full'>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/SearchResults/:searchQuery" element={<SearchResults />} />
            <Route path="/video/:id" element={<VideoDetails />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AppContext>
  )
};

export default App;