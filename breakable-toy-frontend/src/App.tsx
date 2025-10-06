import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Page from './app/login/login';
import Artist from './Artist';
import AlbumDisplay from './AlbumDisplay';
import SearchTool from './Search';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/login" element={<Page />} />
        <Route path="/artist" element={<Artist/>}/>
        <Route path="/album" element={<AlbumDisplay/>}/>
        <Route path='/search' element={<SearchTool/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
