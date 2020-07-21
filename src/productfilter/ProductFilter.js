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
        if(filterText.length <= 3) {
            if(!isNaN(filterText)) {
                fetch(`${this.props.base_url}/v1/products/search/by-id/${filterText}`, {
                    method: 'get',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                })
                .then(response => response.json())
                .then((data) => {
                    this.setState({
                        products: [data]
                    });
                })
                .catch(err => {console.log(err)});
            }
        } else {
            fetch(`${this.props.base_url}/v1/products/search`, {
                method: 'post',
                body: JSON.stringify({criteria: filterText}),
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
            .then(response => response.json())
            .then((data) => {
                this.setState({
                    products: data
                });
            })
            .catch(err => {console.log(err)})
        }

        this.setState({
            filterText: filterText
        });
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