import React from 'react'
import './search.css'

function Search({ inputHandler }) {
    return (
        <input type="search" placeholder='Search a dog breed' className='search' onChange={inputHandler} />
    )
}

export default Search