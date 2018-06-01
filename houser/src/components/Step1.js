import React, { Component } from 'react';
//import Link to route
// import { Link } from 'react-router-dom';
//import connect for redux
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
//import the action creators
import { addName, addAddress, addCity, addState, addZip } from '../ducks/reducer';
import './Dashboard.css'

class Step1 extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zip: 0
        }
    }

    handleNameInput(val) {
        this.setState({ name: val })
    }

    handleAddressInput(val) {
        this.setState({ address: val })
    }

    handleCityInput(val) {
        this.setState({ city: val })
    }

    handleStateInput(val) {
        this.setState({ state: val })
    }

    handleZipInput(val) {
        this.setState({ zip: val })
    }

    handleClick() {
        this.props.addName(this.state.name)
        this.props.addAddress(this.state.address)
        this.props.addCity(this.state.city)
        this.props.addState(this.state.state)
        this.props.addZip(this.state.zip)

        this.setState({
            name: '',
            address: '',
            city: '',
            state: '',
            zip: 0
        })
    }

    render() {
        console.log(this.state)
        return (
            <div className='Dashboard' >
                <h1>Add New Listing</h1>
                <Link to='/'>
                    <button>Cancel</button>
                </Link>
                <h3>Property Name</h3>
                <input onChange={(e) => this.handleNameInput(e.target.value)} />
                <h3>Address</h3>
                <input onChange={(e) => this.handleAddressInput(e.target.value)} />
                <h3>City</h3>
                <input onChange={(e) => this.handleCityInput(e.target.value)} />
                <h3>State</h3>
                <input onChange={(e) => this.handleStateInput(e.target.value)} />
                <h3>Zip</h3>
                <input onChange={(e) => this.handleZipInput(e.target.value)} type='number' />
                <br />
                <br />
                <br />
                <Link to='/step2'>
                    <button onClick={() => this.handleClick()}>NextStep</button>
                </Link>
            </div>
        )
    }
}

export default connect(null, { addName, addAddress, addCity, addState, addZip })(Step1);


