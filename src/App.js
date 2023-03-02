import './App.css';
import Nav from './Components/Nav';
import {Routes, Route} from 'react-router-dom';
import Track from './Components/Track';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <Nav/>
     <Routes>
      <Route path="/" element={ <Home/> } />
      <Route path="track" element={ <Track/> } />
     </Routes>
    </div>
  );
}

export default App;
