import React,{useEffect, useState} from 'react'
import Coins from './Coins';
import Loading from './Loading';
import SearchBar from './SearchBar';

const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'

const Home = (props) => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (url) =>{
    setLoading(true);
    try{
      const request = await fetch(url);
      const response = await request.json();

      setCoins(response);
      setLoading(false);
      setError(null);
    }catch(error){
      setError(error);
      setLoading(false);
    }
  }

  const getSearchValue = (searchValue) => {
    const filterSearchValue = searchValue.toLowerCase();
    
    const searchResult = coins.filter((coin)=>{
      const name = coin.name.toLowerCase();
      return name.startsWith(filterSearchValue);
    });

    setCoins(searchResult);
  } 

  useEffect(()=>{
    fetchData(url);
  },[])

  return (
    <div className=' my-[20px]'>
      <SearchBar getSearchValue={getSearchValue}/>
      {error && <h1>{error}</h1>}
      {loading && <Loading />}
      <Coins coins={coins} singleCoin={props.singleCoin}/>
    </div>
  )
}

export default Home
