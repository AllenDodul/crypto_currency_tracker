import React,{useEffect, useState} from 'react'
import Coins from './Coins';

const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'

const Home = () => {
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

  useEffect(()=>{
    fetchData(url);
  },[])


  return (
    <div className=' my-[20px]'>
      {error && <h1>{error}</h1>}
      {loading && <h1>loading</h1>}
      <Coins coins={coins}/>
    </div>
  )
}

export default Home
