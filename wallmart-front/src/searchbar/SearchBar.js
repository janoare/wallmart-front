import React, { Component } from 'react'

class SearchBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
      const filterText = this.props.filterText;
      const handleFilterTextChange = this.props.handleFilterTextChange
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
  