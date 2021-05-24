import React from 'react'
import './style.scss'

const Homepage = (props) => {
    return (

        <div className ='main'> 

            <section className = 'scroll-section home-section-1 '>
                <button className = 'preview'>  2021 COLLECTION PREVIEW </button>
            </section>

            <section className = 'scroll-section home-section-2 '>
                <h1  className="" >MATERIALITY & TIMELESSNESS</h1>
                <p className="">
                Suspendisse convallis tortor vitae lorem ultricies pellentesque. Morbi ut vulputate risus. Vestibulum nec erat
                diam.<br></br> Aliquam ipsum risus, sodales egestas purus eget, maximus iaculisorci. Phasellus sit .
                </p>
            </section>

            <section className = 'scroll-section home-section-3'>
                <div className = 'section-card one'><h1>FURNITURE</h1></div>
                <div className = 'section-card two '><h1>LUMI</h1></div>
                <div className = 'section-card three'><h1>OBJET</h1></div>
            </section>


            <section className = 'scroll-section home-section-4 '>
                
            </section>
        </div>
     
    )
}

export default Homepage; 
