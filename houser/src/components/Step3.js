import React, { Component } from 'react';
//import connect for redux
import { connect } from 'react-redux';
//import Link to route
import { Link } from 'react-router-dom';
//import the action creators
import { addMortgage, addRent } from '../ducks/reducer';
import './Dashboard.css'

class Step3 extends Component {
    constructor() {
        super()
        this.state = {
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
        this.setState({
            mortgage: 0,
            rent: 0
        })
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
                    <button onClick={() => this.handleClick()}>Previous Step</button>
                </Link>

                <Link to='/'>
                    <button onClick={() => this.handleClick()}>Complete</button>
                </Link>
            </div>
        )
    }
}


export default connect(null, { addMortgage, addRent })(Step3);