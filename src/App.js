import React from 'react';

import './App.css';


import BusinessList from './BusinessList';
import SearchBar from './SearchBar';
import {Yelp} from './Yelp.js';





class App extends React.Component {
	
	constructor(props)
{
	super(props)
	this.state={
    businesses: [],
    type: ''
    
  };
  this.searchYelp = this.searchYelp.bind(this);
  this.getSortBy = this.getSortBy.bind(this);
  this.compareValues = this.compareValues.bind(this);
}
	
  
  searchYelp(term, location, sortBy) {
           
  var list = Yelp.search(term, location, sortBy);
  list.then(value => this.setState({businesses: value}))
  
  //.then(console.log(this.state.businesses[0]));
        console.log(this.state.businesses[0])
  }

  getSortBy(type){
    this.setState({type: type})

  }

  compareValues(key, order = 'asc') {
    return function innerSort(a, b) {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        // property doesn't exist on either object
        return 0;
      }
  
      const varA = (typeof a[key] === 'string')
        ? a[key].toUpperCase() : a[key];
      const varB = (typeof b[key] === 'string')
        ? b[key].toUpperCase() : b[key];
  
      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return (
        (order === 'desc') ? (comparison * -1) : comparison
      );
    };
  }


 
  render() 

  {

    if(this.state.type === 'rating'){
      this.state.businesses.sort(this.compareValues('rating', 'desc'));
    }

    else if(this.state.type === 'review_count'){
      this.state.businesses.sort(this.compareValues('review_count', 'desc'));
    }

    console.log(this.state.type)

    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar getSortBy = {this.getSortBy}  searchYelp={this.searchYelp} />
        <BusinessList businesses={this.state.businesses} />
        
		
      </div>
    );
  }
}

export default App;
