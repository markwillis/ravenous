import React from 'react';
import './App.css';
import BusinessList from '../businessList/BusinessList'
import SearchBar from '../searchBar/SearchBar'

const business = [
  {
    imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
    name: 'Rachels Pizzeria',
    address: '101 Paddington Way',
    city: 'Flavortown',
    state: 'NY',
    zipCode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90
  },
  {
    imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
    name: 'MarginOttos Pizzeria',
    address: '1231 Paddington Way',
    city: 'Pizzatown',
    state: 'CA',
    zipCode: '90210',
    category: 'Pizza',
    rating: 4.6,
    reviewCount: 922
  },
  {
    imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
    name: 'Marks Pizzeria',
    address: '1111 Paddington Way',
    city: 'Flavortown',
    state: 'NY',
    zipCode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90
  },
]

const businesses = business.map(bus => bus)

function App(props) {
  const searchYelp = (term, location, sortBy) => {
    console.log(`Searching Yelp for ${term}, in ${location}, sorted by: ${sortBy}`)
  }

  return (
    <div className="App">
      <h1>rávenous</h1>
      <SearchBar searchYelp={searchYelp}/>
      <BusinessList businesses={businesses}/>
    </div>
  );
}

export default App;
