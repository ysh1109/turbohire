import React from 'react'
import './Header.css'
import icon from '../../assets/Vector.png'
import line from '../../assets/line.png'
import close from '../../assets/close.png'


function Header() {
    return (
        <nav className="Header">
            <div className="header_line">
                <div className="header_circle">
                 <img className="header_icon" src={icon}></img>
                </div>
                
                <a style={{padding:4}}>Form Selection</a>
                <div style={{}}>
                <img src={line}></img>
                </div>
                <div className="header_circle_2">
                 <img className="header_icon" src={icon}></img>
                </div>
                
                <a style={{padding:4}}>Set up</a>
                <div style={{}}>
                <img src={line}></img>
                </div>
                <div className="header_circle_2">
                 <img style={{padding:4}} className="header_icon" src={icon}></img>
                </div>
                
                <a style={{padding:4}}>Form Creation</a>
                <div style={{}}>
                <img src={line}></img>
                </div>
                <div className="header_circle_2">
                 <img className="header_icon" src={icon}></img>
                </div>
                
                <a style={{padding:4}}>Review</a>
                
            </div>
           <img style={{marginRight:10}} src={close}></img>
        </nav>
    )
}

export default Header
