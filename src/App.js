import './App.css';
import Nav from './Components/Nav';
import {Routes, Route} from 'react-router-dom';
import Track from './Components/Track';
import Home from './Components/Home';
import SingleCoinPage from './Components/SingleCoinPage';
import { useState } from 'react';
import News from './Components/News';

function App() {
  const [singlePageCoin, setSinglePageCoin] = useState({});
  const [watchList, setWatchList] = useState([]);
  
  const singleCoin = (coin) =>{
    setSinglePageCoin(coin);
  }

  const handleWatchList = (coin) =>{
    setWatchList((prevCoin)=>{
      return [...prevCoin, coin];
    });
  }

  const handleWatchListRemove = (coin) =>{
    const filterWatchList = watchList.filter((singleCoin)=> singleCoin.name!== coin.name);
    setWatchList(filterWatchList);
  }

  return (
    <div className="App">
      <div className='flex items-center justify-center'>
        <div className='lex items-center w-[1024px] m-[20px]'>
          <Nav/>
          <Routes>
            <Route path="/" element={ <Home singleCoin={singleCoin}/> } />
            <Route path="track" element={ <Track watchList={watchList} handleWatchListRemove={handleWatchListRemove}/> } />
            <Route path='singlecoin' element={<SingleCoinPage singlePageCoin={singlePageCoin} handleWatchList={handleWatchList}/>}/>
            <Route path='news' element={<News />}/>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
