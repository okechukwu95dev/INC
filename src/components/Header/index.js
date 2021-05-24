import logo from './assets/COMPANY LOGO.svg'
import React from 'react'
import './style.scss'



const Header = props => {
    return (
      

<div className = 'header' >
<nav>
    

    <ul className="h-left nav-box">
        <div className = 'navi'>
        <li className="nav-item ">
            <a className="nav-link" href="#">HOME </a>
        </li>
        </div>

        <div className = 'navi'> 
        <li className="nav-item ">
            <a className="nav-link" href="#">COLLECTIONS</a>
        </li>
        </div>
       
        
    </ul>


    <div className = 'logo-container nav-box '> 
            <a  href="#">
                <img 
                className = 'logo-img' 
                src={logo}>
                </img>

            </a>
        
    </div>
    
  
    <ul className= 'h-right nav-box'>
    <div className = 'navi'> 
              <li className="nav-item ">
                <a className="nav-link" href="#">OBJET</a>
              </li>
              </div>
              <div className = 'navi'> 
              <li className="nav-item ">
                <a className="nav-link" href="#">PROJECTS</a>
              </li>
              </div>
            </ul>
</nav>
</div>


    )
};

export default Header; 
