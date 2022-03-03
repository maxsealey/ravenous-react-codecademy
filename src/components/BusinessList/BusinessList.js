import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business.js';

class BusinessList extends React.Component {
    render() {
        return (
            <div className = "BusinessList" key={business.id}>
                { this.props.businesses.map(business => <Business business={business}/>) }
            </div>
        );
    }
} // Contains individual Business Components

export default BusinessList;