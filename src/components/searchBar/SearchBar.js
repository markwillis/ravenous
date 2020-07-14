import React from 'react'
import './searchBar.css'

const SearchBar = () => {
  const sortByOptions = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count",
   }

   function renderSortByOptions() {
     Object.keys(sortByOptions).map(option => {
       let sortByOptionValue = sortByOptions[option]
        return (
          <li key={sortByOptionValue}>{option}</li>
        )
     })
   }

  return (
    <div className="SearchBar">
      <div className="SearchBar-sort-options">
        <ul>
          {renderSortByOptions()}
        </ul>
      </div>
      <div className="SearchBar-fields">
        <input placeholder="Search Businesses" />
        <input placeholder="Where?" />
      </div>
      <div className="SearchBar-submit">
        <button>Let's Go</button>
      </div>
    </div>
  )
}

export default SearchBar