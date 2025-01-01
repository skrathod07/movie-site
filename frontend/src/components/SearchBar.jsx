import React from 'react'

const SearchBar = ({onSearch}) => {
    const handleSearch =(e)=>{
        e.preventDefault();
        // console.log(e.target.query.value);
        // console.log('whisi is this',e.target.elements.query.value.trim())
        const query =e.target.elements.query.value.trim();
        // const query= e.target.query.value;
        onSearch(query);
    }
  return (
    <form className='search-bar' onSubmit={handleSearch}>
      <input type='text' name='query' placeholder='Search movie...'/>
      <button type='submit'>Search</button>
    </form>
  )
}

export default SearchBar
