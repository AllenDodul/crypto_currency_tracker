import React from 'react'

const CoinCard = (props) => {
  return (
    <div  className='flex items-center bg-[rgba(0,0,0,0.3)] m-[20px] p-[5px] rounded w-[250px]'>
      <div>
        <img className='h-[50px]' src={props.coin.image} alt="" />
      </div>
      <div>
        <h2>{props.coin.name}</h2>
        <p>{props.coin.current_price}</p>
      </div>
    </div>
  )
}

export default CoinCard;