import React from 'react';

function SearchBar({handleChange , handleSubmit ,value}) {
  return (
      <>
        <input
        type="search"
        onChange={handleChange}
        placeholder="Enter City"
        className="search-bar"
        value={value}
        />
        <button 
            type="button" 
            onClick={handleSubmit} 
            className="submit-btn"
        >
        Submit
        </button>
    </>
  )
}
export default SearchBar
