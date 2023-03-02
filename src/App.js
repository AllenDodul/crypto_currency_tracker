import './App.css';
import Nav from './Components/Nav';
import {Routes, Route} from 'react-router-dom';
import Track from './Components/Track';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <div className='flex items-center justify-center'>
        <div className='lex items-center w-[1024px] m-[20px]'>
          <Nav/>
          <Routes>
            <Route path="/" element={ <Home/> } />
            <Route path="track" element={ <Track/> } />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
