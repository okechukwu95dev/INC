import logo from './../Header/assets/COMPANY LOGO.svg'
import React from 'react'
import {Link} from 'react-router-dom'
import './style.scss'



const Header_collections = props => {
    return (
      

<div className = 'header-collections' >
<nav>
    
<ul className="h-left nav-box">
        <div className = 'navi'>
        <li className="nav-item ">
            <Link to='/' className="nav-link" href="#">HOME </Link>
        </li>
        </div>

        <div className = 'navi'> 
        <li className="nav-item ">
            <Link to='/collections' className="nav-link" href="#">COLLECTIONS</Link>
        </li>
        </div>
    </ul>

    <div className = 'logo-container nav-box '> 
            <Link to='/'  href="#">
                <img 
                className = 'logo-img' 
                src={logo}>
                </img>
            </Link>
    </div>
    
    <ul className= 'h-right nav-box'>
        <div className = 'navi'> 
            <li className="nav-item ">
             <Link to='/objet' className="nav-link" href="#">OBJET</Link>
            </li>
        </div>
        <div className = 'navi'> 
             <li className="nav-item ">
            <Link to ='/projects' className="nav-link" href="#">PROJECTS</Link>
            </li>
        </div>
    </ul>
</nav>
</div>


    )
};

export default Header_collections; 
