import React, {useState} from 'react';

const SingleCoinPage = (props) => {
  const [addToWishList, setAddToWishList] = useState(false);
  const {singlePageCoin} = props; 

  const handleWatchListBTN = () =>{
    setAddToWishList(true);
    props.handleWatchList(singlePageCoin);
  }

  return (
    <div className=' my-[20px]'>
      <div className='flex flex-wrap'>
        <div>
          <img
            className=' w-[100px] h-[auto]'
            src={singlePageCoin.image} 
            alt={singlePageCoin.name} 
          />
        </div>
        <div className='m-[20px]'>
          <h1 className='text-3xl'>{singlePageCoin.name}</h1>
          <p className='text-lg'>Price : {singlePageCoin.current_price} USD</p>
        </div>
      </div>
      <div className='my-[20px]'>
        <h2 className='text-xl'>Info</h2>
        <div className="flex items-center justify-center">
          <div className=' w-[100%] h-[1px] bg-gray-600 my-[10px]'></div>
        </div>
        <p>Current Price: {singlePageCoin.current_price} USD</p>
        <p>Price Change 24h: {singlePageCoin.price_change_24h} USD</p>
        <p>Price Change Percentage 24h: {singlePageCoin.price_change_percentage_24h}</p>
        <p>Market Cap: {singlePageCoin.market_cap} USD</p>
        <p>Market Cap Change 24h: {singlePageCoin.market_cap_change_24h} USD</p>
        <p>Market Cap Change Percentage 24h: {singlePageCoin.market_cap_change_percentage_24h}</p>
        <p>Circulating Supply: {singlePageCoin.circulating_supply}</p>
      </div>
      <div className='my-[20px]'>
        <button onClick={handleWatchListBTN} className='bg-[#CF7D56] text-black p-[5px] border-none outline-none rounded'>{addToWishList === true ? "Added To Watch List" : "Add To Watch List"}</button>
      </div>
    </div>
  )
}

export default SingleCoinPage
