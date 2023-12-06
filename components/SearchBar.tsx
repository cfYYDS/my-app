"use client"
import {useState} from 'react'
import SearchMenufacturer from "./SearchMenufacturer"

const SearchBar = () => {
    const [manufacturer, setManufacturer] = useState('')
  const handleSearch = ()=>{}
    return (
    <form action=""
    className='searchbar'
    onSubmit={handleSearch}>
        <div className="searchbar__item">
              <SearchMenufacturer manufacturer={manufacturer}
              setManufacturer={setManufacturer}
              />
        </div>
    </form>
  )
}

export default SearchBar