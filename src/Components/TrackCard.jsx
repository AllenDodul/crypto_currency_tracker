import React from 'react';

const TrackCard = (props) => {
  const {coin} = props;
  const {image, name, current_price} = props.coin;

  const onRemove = () =>{
    props.handleWatchListRemove(coin);
  }

  return (
    <div className='flex items-center justify-between bg-[rgba(0,0,0,0.4)] p-[5px] my-[15px] rounded'>
      <div className='flex'>
        <div>
          <img className='h-[50px]' src={image} alt={name} />
        </div>
        <div className='mx-[20px]'>
          <h4>Name: {name}</h4>
          <p>Current Price: {current_price} USD</p>
        </div>
      </div>
      <div className='mx-[20px]'>
        <button onClick={onRemove} className='border-none outline-none'>Remove</button>
      </div>
    </div>
  )
}

export default TrackCard;