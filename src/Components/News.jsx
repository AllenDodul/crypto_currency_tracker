import React,{ useEffect, useState} from 'react'

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
 
  const fetchNews = async () =>{
    setLoading(true);
    
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'afbcc3a4a2msh6ad2d9bbb1511bep154abdjsnf13a89e9e8af',
        'X-RapidAPI-Host': 'crypto-news16.p.rapidapi.com'
      }
    };

    try{
      const request = await fetch('https://crypto-news16.p.rapidapi.com/news/top/20', options)
      const response = await request.json();

      setNews(response);
      setLoading(false);
      setError(null);
    }catch(error){
      setLoading(false);
      setError(error);
    }
  }

  useEffect(()=>{
    fetchNews();
  },[])
  
  return (
    <div>
      {error && <h1>{error}</h1> }
      {loading && <p>{loading}</p>}
      {news && <p>{loading}</p>}  
    </div>
  )
}

export default News;