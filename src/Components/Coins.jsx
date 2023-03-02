import React from 'react'
import CoinCard from './CoinCard'

const Coins = (props) => {
  console.log(props.coins)
  return (
    <div className='flex items-center justify-center flex-wrap'>
      {props.coins.map((coin)=> <CoinCard kay={coin.id} coin={coin}/>)}
    </div>
  )
}

export default Coins;