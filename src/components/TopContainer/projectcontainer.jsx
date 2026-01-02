import React from 'react'
import { Element } from 'react-scroll'
import Project1 from './project1'
import './projectcontainer.css'

const projectcontainer = () => {

    const client_projects = [
{
   img :"/src/assets/expense.webp",
   title:"Expense Tracker",
   desc:"A modern expense tracker platform with advanced filtering, payment integration, and responsive design.",
   link:"https://github.com/mathimalar-187/finance-trackers.git",
},
{
   img :"/src/assets/dashboard.png",
   title:"Analystic Dashboard",
   desc:" A collaborative task management application with real-time updates and team features.",
   link:"https://github.com/mathimalar-187/analysis-dashboard.git",
},
{
   img :"/src/assets/fruit.jpg",
   title:"Fruit Shop",
   desc:" A fresh fruit buying platform for online customers.",
   link:"https://github.com/mathimalar-187/fruit-shop.git",
},
    ]
  return (
    <Element className='projectcontainer' name='project'>
      <h1>Projects</h1>
      <p>Here are some projects which i done  making lives of people easy</p>
      <div className='projectcontainer__project'>
        {client_projects.map((project, index) => (
          <Project1 
            key={index} 
            img={project.img} 
            title={project.title} 
            desc={project.desc}
            link={project.link} 
          />
        ))}
      </div>
    </Element>
  )
}

export default projectcontainer
