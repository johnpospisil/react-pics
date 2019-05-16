import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

// a class-based component
class App extends React.Component {

async onSearchSubmit(term) {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    params: { query: term },
    headers: {
      Authorization: 'Client-ID 38d5c414f5c3c927f8391dae84b618211535b915ab1965da020eb5a762e993e0'
    }
  });
  console.log(response.data.results);
}

  render() {
    return (
      <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;