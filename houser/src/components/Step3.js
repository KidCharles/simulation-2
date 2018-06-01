import React, { Component } from 'react';
//import connect for redux
import { connect } from 'react-redux';
//import Link to route
import { Link } from 'react-router-dom';
//import the action creators
import { addMortgage, addRent } from '../ducks/reducer';
import './Dashboard.css'
import axios from 'axios';

class Step3 extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zip: 0,
            img: '',
            mortgage: 0,
            rent: 0
        }
    }

    handleMortgageInput(val) {
        this.setState({ mortgage: val })
    }

    handleRentInput(val) {
        this.setState({ rent: val })
    }

    handleClick() {
        this.props.addMortgage(this.state.mortgage)
        this.props.addRent(this.state.rent)

        let body = {
            name: this.props.name,
            address: this.props.address,
            city: this.props.city,
            state: this.props.state,
            zip: this.props.zip,
            img: this.props.img,
            houses: this.props.houses,
            mortgage: this.props.mortgage,
            rent: this.props.rent
        }
        !body.name
            ?
            alert('please fill out form correctly')
            :
            axios.post('/api/houses', body).then(() => this.props.history.push('/') )
    }

    render() {
        return (
            <div className='Dashboard' >
                <h1>Add New Listing</h1>
                <Link to='/'>
                    <button>Cancel</button>
                </Link>
                <br />
                <p>Recommended Rent: $0</p>
                <h3>Monthly Mortgage Amount</h3>
                <input type='number' onChange={(e) => this.handleMortgageInput(e.target.value)} />
                <h3>Desired Monthly Rent</h3>
                <input type='number' onChange={(e) => this.handleRentInput(e.target.value)} />
                <br />
                <br />
                <br />
                <Link to='/step2'>
                    <button>Previous Step</button>
                </Link>

                {/* <Link to='/'> */}
                    <button onClick={() => this.handleClick()}>Complete</button>
                {/* </Link> */}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        name: state.name,
        address: state.address,
        city: state.city,
        state: state.state,
        zip: state.zip,
        img: state.img,
        houses: state.houses,
        mortgage: state.mortgage,
        rent: state.rent,
    }
}


export default connect(mapStateToProps, { addMortgage, addRent })(Step3);