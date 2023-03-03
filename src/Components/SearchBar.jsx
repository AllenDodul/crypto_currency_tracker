import React,{useState, useEffect} from 'react';

const SearchBar = (props) => {
  const [searchValue, setSearchValue] = useState('');
  
  const searchCoin = (e) =>{
    setSearchValue(e.target.value);
    props.getSearchValue(searchValue);
  }
  
  useEffect(()=>{
  }, [searchValue])
  return (
    <div className='flex items-center justify-center m-[20px]'>
      <input 
        onChange={searchCoin}
        className=' h-[25px] max-w-[600px] w-[100%] p-[5px] outline-none bg-transparent border border-solid border-gray-500 rounded'
        type="text"
        placeholder='Search...'
        value={searchValue}
      />
    </div>
  )
}

export default SearchBar;