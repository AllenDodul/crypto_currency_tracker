import React from 'react'
import { Link } from 'react-router-dom';

const CoinCard = (props) => {
  const selectCard = () =>{
    props.singleCoin(props.coin);
  }

  return (
    <Link to='singlecoin'>
      <div onClick={selectCard} className='flex items-center bg-[rgba(0,0,0,0.3)] m-[10px] p-[5px] rounded w-[280px] cursor-pointer'>
        <div>
          <img className='h-[50px]' src={props.coin.image} alt={props.coin.name} />
        </div>
        <div className='mx-[10px]'>
          <h2>{props.coin.name}</h2>
          <p>{props.coin.current_price} USD</p>
        </div>
      </div>
    </Link>
  )
}

export default CoinCard;