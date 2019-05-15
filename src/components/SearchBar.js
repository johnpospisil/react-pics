import React from 'react';


// class-based component
class SearchBar extends React.Component {
  state = { term: '' };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
          <label>Image Search</label>
          {/* Abbreviated event handler */}
          {/* event.target.value is the text located in the input */}
            <input type="text" value={this.state.term} onChange={e => this.setState({ term: e.target.value })} />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;