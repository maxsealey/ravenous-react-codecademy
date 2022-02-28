import React from 'react';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';

const business = {
  imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
} // restaurant data, will update with API information later

const businesses = [business, business, business, business, business, business] // array of business objects

function App() {
  return (
    <div class="App">
      <h1>ravenous</h1>
      <SearchBar /> { /* instance of SearchBar component */}
      <BusinessList businesses = { businesses } />
    </div>
  ); // main App component
}

export default App;
