import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            term:'',
            location:'',
            sortBy:'best-match'
        }

        this.sortByOptions = {
            'Best Match':'best-match',
            'Highest Rated':'rating',
            'Most Reviewed':'review_count'
        }
    }

    getSortByClass(sortByOption) {
        if (this.state.sortBy == sortByOption) {
            return 'active'
        } else {
            return ''
        }
    }

    renderSortByOptions(){
        return Object.keys(sortByOptions)
        .map(sortByOption => { // on each key in sortByOptions object
            let sortByOptionValue = sortByOptions[sortByOption]; //stores each value
            return <li key = {sortByOptionValue}>{sortByOption}</li> // returns list item 
        }) 
    }// returns array of list items 

    render() {
        return (
        <div className="SearchBar">
            <div className="SearchBar-sort-options">
                <ul>
                {this.renderSortByOptions()}
                </ul>
            </div>
            <div className="SearchBar-fields">
                <input placeholder="Search Businesses" />
                <input placeholder="Where?" />
            </div>
            <div className="SearchBar-submit">
                <a>Let's Go</a>
            </div>
        </div>
        );
    }
}

export default SearchBar;