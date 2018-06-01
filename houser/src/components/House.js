import React from 'react';
import './House.css'

export default function House(props){
    return(
        <div className='House' >
            <button id='DeleteButton' onClick={() => {props.deleteHouse(props.id)}} >X</button>
            <p>Property Name: {props.name}</p>
            <p>Address: {props.address}</p>
            <p>City: {props.city}</p>
            <p>State: {props.state}</p>
            <p>Zip: {props.zip}</p>
            <p>Monthly Mortgage: {props.mortgage}</p>
            <p>Desired Rent: {props.rent}</p>

        </div> 
    )
}