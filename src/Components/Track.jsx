import React from 'react';
import TrackCard from './TrackCard';

const Track = (props) => {
  return (
    <div className="my-[20px]">
      {props.watchList.map((coin)=><TrackCard key={coin.name} coin={coin} handleWatchListRemove={props.handleWatchListRemove}/>)}
    </div>
  )
}

export default Track;