import React, {useState} from 'react'
import './searchBar.css'

const SearchBar = (props) => {
  const [state, setState] = useState({term: "", location: "", sortBy: "best_match"})

  const sortByOptions = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count",
   }

   const renderSortByOptions = () => {
     return Object.keys(sortByOptions).map(option => {
       let sortByOptionValue = sortByOptions[option]
        return (
          <li 
            key={sortByOptionValue} 
            className={getSortByClass(sortByOptionValue)} 
            onClick={handleSortByChange.bind(this, sortByOptionValue)}
          >
            {option}
          </li>
        )
     })
   }

   const getSortByClass = sortByOption => {
     if(state.sortBy === sortByOption) {
       return 'active'
     } else {
       return ''
     }
   }

   const handleSortByChange = sortByOption => {
     setState({...state, sortBy: sortByOption})
   }

   const handleTermChange = event => {
     setState({...state, term: event.target.value})
   }
   
   const handleLocationChange = event => {
     setState({...state, location: event.target.value})
   }

   const handleSearch = event => { 
     props.searchYelp(state.term, state.location, state.sortBy)
     event.preventDefault()
   }

  return (
    <div className="SearchBar">
      <div className="SearchBar-sort-options">
        <ul>
          {renderSortByOptions()}
        </ul>
      </div>
      <div className="SearchBar-fields">
        <input 
          placeholder="Search Businesses" 
          onChange={handleTermChange} 
          value={state.term}
        />
        <input 
          placeholder="Where?" 
          onChange={handleLocationChange} 
          value={state.location}
        />
      </div>
      <div className="SearchBar-submit">
        <button onClick={handleSearch}>Let's Go</button>
      </div>
    </div>
  )
}

export default SearchBar
