import React from 'react'
import Header from './../components/Header'
import BlackMenu from './../components/BlackMenu'
const LandingLayout = (props) =>  {
    return (
        <div className = 'main'>
            <BlackMenu />
            <Header />
            {/* //to render any input in app.js */}
            {props.children}
            
        </div>
    )
}

export default LandingLayout
