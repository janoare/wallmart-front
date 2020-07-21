import React, { Component } from 'react'

class SearchBar extends Component {
    render() {
      const filterText = this.props.filterText;
      return (
        <form>
          <input
            type="text"
            placeholder="Search..."
            value={filterText}
            onChange={(e) => this.props.onFilterTextChange(e)}/>
        </form>
      );
    }
}

export default SearchBar;
  