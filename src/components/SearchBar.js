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
          {/* Abbreviated event handler syntax can be seen in the comment below. */}
          {/* In this case, the onInputChange function could be deleted since it is not needed. */}
          {/* <input type="text" onChange={e => console.log(e.target.value)} /> */}
            <input type="text" onChange={this.onInputChange} />
            
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;