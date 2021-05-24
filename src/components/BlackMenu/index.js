import React from 'react'
import './style.scss'
import globe from './assets/globe-image.png'




const BlackMenu = props => {
    return (
       
        <div className = 'black-menu' >

        <ul class="left">
            {/* <!------------------- GLOBE LOGO  -------------------------------> */}
            <li class="nav-item">
              <imG
              className="globe "
              src = {globe}
            />
            </li>
              {/* <!------------------- LANGUAGES  -------------------------------> */}
            <li class="nav-item ">
              <a id = "AR" class = "language nav-link" href="#">AR</a>
            </li>
            <li class="nav-item">
              <a id = "FR" class = "language nav-link" href="#">FR</a>
            </li>
            <li class="nav-item">
              <a id = "EN" class = "language nav-link" href="#">EN</a>
            </li>
            <li class="nav-item">
              <a id = "IT" class = "language nav-link" href="#">IT</a>
            </li>
        </ul>


{/* right side  */}

        
        <ul class="right">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#">search</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">catalogue</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">login</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">wishlist</a>
          </li>
        </ul>
        
      </div>
        
    )
};

export default BlackMenu; 