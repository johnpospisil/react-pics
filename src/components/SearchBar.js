import React from 'react';


// class-based component
class SearchBar extends React.Component {
  state = { term: '' };

  // event handler
  // using an arrow function below ensures that 'this' refers to the instance of the SearchBar, instead of the App.
  onFormSubmit = event => {
    event.preventDefault(); // prevent the form from clearing when the user presses ENTER
    this.props.onSubmit(this.state.term);
  }

  

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
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