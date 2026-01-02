import React from 'react'
import { Element } from 'react-scroll'
import TopContent from './topcontent'
import './topcontainer.css'

const topcontainer = () => {
  return (
   <Element name='about' className='topcontainer'>
    <TopContent />
   </Element> 
  );
};

export default topcontainer
