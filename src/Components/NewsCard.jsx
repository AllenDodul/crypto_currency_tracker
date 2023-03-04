import React from 'react';

const NewsCard = (props) => {
  const {date, title, description, url} = props.singleNews
  console.log();
  return (
    <div className='m-[20px]'>
      <div className='mb-[20px]'>
        <h1 className='text-xl my-[5px] text-white'>{title}</h1>
        <p className='text-sm my-[5px]'>{date}</p>
      </div>
      <p>{description}</p>
    </div>
  )
}

export default NewsCard;