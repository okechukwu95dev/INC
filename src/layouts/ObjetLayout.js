import React from 'react'
import Header_collections from '../components/Header_collections'
import BlackMenu from '../components/BlackMenu'


const ObjetLayout = (props) => {
    return (
        <div className = 'main'>
        <BlackMenu />
        <Header_collections/>
        {/* //to render any input in app.js */}
        {props.children}
        
    </div>
)
}

export default ObjetLayout
