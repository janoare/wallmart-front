import React, {Component} from 'react';
import SearchBar from '../searchbar/SearchBar';
import ProductTable from '../producttable/ProductTable';

class ProductFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
          filterText: '',
          products: []
        };

    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    }

    handleFilterTextChange(e) {
        
        let filterText = e.target.value;
        
        if(filterText.length > 3) {
            console.log("mayor a 3");
            fetch('http://localhost:8080/v1/products/search', {
                method: 'post',
                body: JSON.stringify({criteria: 'ab'}),
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
            .then(response => response.json())
            .then((data) => {
                //console.log(JSON.stringify(data))
                this.setState({
                    filterText: filterText,
                    products: data
                });
            })
            .catch(err => {console.log(err)})
        } else if(!isNaN(filterText)){
            console.log(`es numero ${filterText} `);
            fetch(`http://localhost:8080/v1/products/search/by-id/${filterText}`, {
                method: 'get',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
            .then(response => response.json())
            .then((data) => {
                //console.log(JSON.stringify(data))
                this.setState({
                    filterText: filterText,
                    products: [data]
                });
            })
            .catch(err => {console.log(err)})
        }  else {
            this.setState({
                filterText: filterText
            })
        }         
    }
    
    render() {
        return (
            <div>
                {this.filterText}
              <SearchBar
                filterText={this.state.filterText}
                onFilterTextChange={this.handleFilterTextChange}
              />
              <ProductTable
                products={this.state.products}
                filterText={this.state.filterText}
              />
            </div>
          );
    }
}

export default ProductFilter;