import React from 'react'
import CoinCard from './CoinCard'

const Coins = (props) => {
  return (
    <div className='flex items-center justify-center flex-wrap'>
      {props.coins.map((coin)=> <CoinCard singleCoin={props.singleCoin} key={coin.id} coin={coin}/>)}
    </div>
  )
}

export default Coins;