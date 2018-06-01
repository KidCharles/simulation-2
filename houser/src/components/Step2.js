import React, { Component } from 'react';
//import connect for redux
import { connect } from 'react-redux';
//import Link to route
import { Link } from 'react-router-dom';
//import the action creators
import { addImg } from '../ducks/reducer';
import './Dashboard.css'

class Step2 extends Component {
    constructor() {
        super()
        this.state = {
           img:''
        }
    }

    handleNameInput(val) {
        this.setState({ img: val })
    }

    handleClick() {
        this.props.addImg(this.state.img)
        // this.setState({
        //     img: '',
        // })
    }

    render() {
        // console.log(this.state)
        return (
            <div className='Dashboard' >
                <h1>Add New Listing</h1>
                <Link to='/'>
                    <button>Cancel</button>
                </Link>
                <h3>Image Url</h3>
                <input onChange={(e) => this.handleNameInput(e.target.value)} />
                <br />
                <br />
                <br />
                <Link to='/step1'>
                    <button onClick={() => this.handleClick()}>Previous Step</button>
                </Link>
                
                <Link to='/step3'>
                    <button onClick={() => this.handleClick()}>Next Step</button>
                </Link>
            </div>
        )
    }
}

export default connect(null, { addImg })(Step2);


