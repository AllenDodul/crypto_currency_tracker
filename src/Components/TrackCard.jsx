import React from 'react';

const TrackCard = (props) => {
  const {image, name, current_price} = props.coin;
  return (
    <div className='flex bg-[rgba(0,0,0,0.4)] p-[5px] my-[15px] rounded'>
      <div>
        <img className='h-[50px]' src={image} alt={name} />
      </div>
      <div className='mx-[20px]'>
        <h4>Name: {name}</h4>
        <p>Current Price: {current_price}</p>
      </div>
    </div>
  )
}

export default TrackCard;