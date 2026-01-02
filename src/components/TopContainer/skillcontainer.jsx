import React from 'react'
import {Element} from "react-scroll"
import Skilling from '../../assets/skill.png'
import LinearProgress from '@mui/material/LinearProgress';
import './skillcontainer.css'

const skillcontainer = () => {
  return (
   <Element className='skillcontainer' name='skill'>
    <div className='skillcontainer__img'>
        <img src={Skilling} alt="" />
    </div>
    <div className='skillcontainer__text'>
<h2>SKILLSET</h2>
<div className='skillcontainer__skillset'>
    <h5>React</h5>
    <div className='skillcontainer__slider skillcontainer__slider1'>
    <LinearProgress variant='determinate' value={80} />
    </div>
</div>
<div className='skillcontainer__skillset'>
    <h5>HTML</h5>
    <div className=' skillcontaiskillcontainer__sliderner__slider2'>
    <LinearProgress variant='determinate' value={90} />
    </div>
</div>
<div className='skillcontainer__skillset'>
    <h5>CSS</h5>
    <div className='skillcontainer__slider skillcontainer__slider3'>
    <LinearProgress variant='determinate' value={90} />
    </div>
</div>
<div className='skillcontainer__skillset'>
    <h5>JavaScript</h5>
    <div className='skillcontainer__slider skillcontainer__slider4'>
    <LinearProgress variant='determinate' value={75} />
    </div>
</div>
<div className='skillcontainer__skillset'>
    <h5>JAVA</h5>
    <div className='skillcontainer__slider skillcontainer__slider5'>
    <LinearProgress variant='determinate' value={50} />
    </div>
</div>
<div className='skillcontainer__skillset'>
    <h5>PHP</h5>
    <div className='skillcontainer__slider skillcontainer__slider6'>
    <LinearProgress variant='determinate' value={75} />
    </div>
</div>
<div className='skillcontainer__skillset'>
    <h5>MySQL</h5>
    <div className='skillcontainer__slider skillcontainer__slider7'>
    <LinearProgress variant='determinate' value={75} />
    </div>
</div>
<div className='skillcontainer__skillset'>
    <h5>Bootstrap</h5>
    <div className='skillcontainer__slider skillcontainer__slider8'>
    <LinearProgress variant='determinate' value={85} />
    </div>
</div>
<div className='skillcontainer__skillset'>
    <h5>Git&GitHub</h5>
    <div className='skillcontainer__slider skillcontainer__slider9'>
    <LinearProgress variant='determinate' value={80} />
    </div>
</div>
<div className='skillcontainer__skillset'>
    <h5>Responsive Design</h5>
    <div className='skillcontainer__slider skillcontainer__slider10'>
    <LinearProgress variant='determinate' value={90} />
    </div>
</div>
    </div>
   </Element>
  )
}

export default skillcontainer