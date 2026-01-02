import React from 'react'
import { Link } from 'react-scroll'
import './topcontent.css'

const topcontent = () => {
  return (
    <div className='topcontent'>
        <div className='topcontent__container'>
        <h1> Miss .Mathi Malar</h1>
        <p>A Professional web and App Devoloper</p>
        <a href='mathi-portfolio/src/assets/mathi_resume.pdf'>
          <button className='topcontent__dowbtn'>Download CV</button>
        </a>
       <Link  to="project" smooth={true} duration={500}>
       <button className='topcontent__wrkbtn'>My Work</button>
       </Link>
        </div>
    </div>
  )
}

export default topcontent
