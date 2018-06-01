import React, { Component } from 'react';

class Wizard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zip: 0
        }
    }

    //handle input change

    //post new house to db

    render() {
        return (
            <div>
                <h1>Add New Listing</h1>
                <button>Cancel</button>
                <h3>Property Name</h3>
                <input />
                <h3>Address</h3>
                <input />
                <h3>City</h3>
                <input />
                <h3>State</h3>
                <input />
                <h3>Zip</h3>
                <input type='number'/>
            </div>
        )
    }

}

export default Wizard;