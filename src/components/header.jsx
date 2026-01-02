import React from 'react'
import {Link} from 'react-scroll'
import './header.css'


const header = () => {
  return (
    <div className='header'>
      <div className='header__left'>
        <h1>
          Devolop<span>er</span>
        </h1>
      </div>
<div className='header__right'>
  <Link to='about' smooth={true} duration={500}>
  <h5>About</h5>
  </Link>
  <Link to='skill' smooth={true} duration={500}>
  <h5>Skills</h5>
  </Link>
  <Link to='project' smooth={true} duration={500}>
  <h5>Projects</h5>
  </Link>
  <Link to='contact' smooth={true} duration={500}>
  <h5>Contact</h5>
  </Link>
  <h5 className='header__rightbtn'>Join With Me</h5>
</div>
    </div>
  )
      
  
}

export default header
