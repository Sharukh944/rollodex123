import React from 'react'

const Search = (props) =>{
    return(
        <input
            name='Search'
            className='search-box'
            type='password'
            placeholder='search monsters'
            onChange = {props.handleSearch}
        />
    )
}

export default Search