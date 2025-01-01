import React from 'react'
import { CiSearch } from "react-icons/ci";

const SearchBar = ({onSearch}) => {
    const handleSearch =(e)=>{
        e.preventDefault();
        // console.log(e.target.query.value);
        // console.log('whisi is this',e.target.elements.query.value.trim())
        const query =e.target.elements.query.value.trim() || "batman";
        // const query= e.target.query.value;
        onSearch(query);
    }
  return (
    <form className='search-bar ' onSubmit={handleSearch}>
      <input className='search-text' type='text' name='query' placeholder='Search movie...'/>

      <button className='search-icon' type='submit'><CiSearch /></button>
    </form>
  )
}

export default SearchBar
