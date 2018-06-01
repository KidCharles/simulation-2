import React from 'react';
import './Header.css';
import logo from './logo.png';

export default function Header() {
    return (
        <div className="Header" >
           
            <h1> <img src={logo} /> Houser</h1>
        </div>
    )
}