import React from 'react';
import TrackCard from './TrackCard';

const Track = (props) => {
  return (
    <div className="my-[20px]">
      {props.watchList.map((coin)=><TrackCard key={coin.name} coin={coin}/>)}
    </div>
  )
}

export default Track;