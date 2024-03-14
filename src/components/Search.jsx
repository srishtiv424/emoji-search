import React  from "react";
import '../style/Search.css'
function Search({handleChange,searchText}){
    return (
            <input className='search'onChange={handleChange} value={searchText} placeholder="Search Emoji..."/>
    )
}

export default Search