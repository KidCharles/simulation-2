import React, { Component } from 'react';
import House from './House';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import './Dashboard.css'


class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            houses: []
        }
        this.deleteHouse = this.deleteHouse.bind(this)
    }


    //comp did mount  
    componentDidMount() {
        axios.get('/api/houses').then((res) => {
            this.setState({
                houses: res.data
            })
        })
    }

    deleteHouse(id) {
        axios.delete(`/api/houses/${id}`).then(res => {
            this.setState({
                houses: res.data
            })
        })
    }


    render() {
        // console.log(this.state)
        let mappedHouses = this.state.houses.map((e, i) => {
            return (
                <div key={i}>
                    <House 
                    id={e.id}
                    name={e.name}
                    address={e.address}
                    city={e.city}
                    state={e.state}
                    zip={e.zip}
                    deleteHouse={this.deleteHouse}
                    houses={this.state.houses}
                    />
                </div>
            )
        })
        return (
            <div className='Dashboard' >
                <h1>Dashboard</h1>
                <Link to='/step1' >
                    <button>ADD NEW PROPERTY</button>
                </Link>

                <hr />
                <br />
                <h3>Home Listings</h3>
                <House/>
                {mappedHouses}
            </div>
        )
    }
}

export default connect(null)(Dashboard);