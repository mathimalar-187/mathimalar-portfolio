import React from 'react'
import { Element } from 'react-scroll'
import { IconButton } from '@mui/material'
import { LinkedIn, Instagram, Facebook } from '@mui/icons-material'
import './contact.css'

const Contact = () => {
  return (
    <Element className='contact' name='contact'>
      <h1>Contact</h1>

      <div className='contact_container'>
        <p>
          Email : <span>mathimalar187@gmail.com</span>
        </p>

        <p>
          GitHub Username : <span>mathimalar-187</span>
        </p>

        <div>
          <a href="https://google.com" target="_blank" rel="noreferrer">
            <IconButton>
              <LinkedIn style={{ color: ' #f64c08', fontSize: 40 }} />
            </IconButton>
          </a>

          <a href="https://google.com" target="_blank" rel="noreferrer">
            <IconButton>
              <Instagram style={{ color: ' #f64c08', fontSize: 40 }}/>
            </IconButton>
          </a>

          <a href="https://google.com" target="_blank" rel="noreferrer">
            <IconButton>
              <Facebook style={{ color: ' #f64c08', fontSize: 40 }} />
            </IconButton>
          </a>
        </div>
      </div>
    </Element>
  )
}

export default Contact
