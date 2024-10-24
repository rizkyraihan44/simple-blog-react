import { useState } from "react"
import PropTypes from "prop-types";

const Search = ({ onSearchChange, totalPosts }) => {
  const [search, setSearch] = useState('');

  // const handleSearch = (event) => {
  //   setSearch(event.target.value)
  //   onSearchChange(event.target.value)
  // }

  const handleClick = (event) => {
    const value = event.target.value;
    setSearch(value)
    onSearchChange(value)
  }

  const searchKeydown = (e) => {
    if (e.key === 'Enter') {
      onSearchChange(search)
    }

  }

  return (
    <>
      <div>
        <input type="text" onChange={e => setSearch(e.target.value)} onKeyDown={searchKeydown} value={search} />
        <button onClick={handleClick}>Search</button>
      </div>
      <p>Found {totalPosts} posts with {search} word</p>
    </>

  )
}

Search.propTypes = {
  onSearchChange: PropTypes.func,
  totalPosts: PropTypes.number
}

export default Search