import React from 'react';


// class-based component
class SearchBar extends React.Component {

  onInputChange(event) {
    // event.target.value shows what has been typed into the input
    console.log(event.target.value);
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
          <label>Image Search</label>
          {/* Call the onInputChange function whenever the following input is changed. */}
          {/* notice there is no '()' after 'onInputChange'.*/} 
          {/* This is so when a function is used with onChange. */}
            <input type="text" onChange={this.onInputChange} />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;