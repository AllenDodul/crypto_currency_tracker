import React from 'react';

const NewsCard = (props) => {
  const {date, title, description} = props.singleNews
  console.log();
  return (
    <div className='my-[10px]'>
      <div className='mb-[20px]'>
        <h1 className='text-xl my-[5px] text-white'>{title}</h1>
        <p className='text-sm my-[5px]'>{date}</p>
      </div>
      <p>{description}</p>
      <div className='h-[1px] w-[100%] bg-gray-500 my-[5px]'></div>
    </div>
  )
}

export default NewsCard;