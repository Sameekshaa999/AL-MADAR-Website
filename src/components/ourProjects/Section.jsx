import React from 'react'
import heading_stripes from '../Zimages/heading_stripes.svg'
import project1 from '../Zimages/project1.svg'
import project2 from '../Zimages/project2.svg'
import project3 from '../Zimages/project3.svg'
import project4 from '../Zimages/project4.svg'
import project5 from '../Zimages/project5.svg'
import project6 from '../Zimages/project6.svg'

const Section = () => {
  return (
    <div className='top-6.5'>
        <div>
            <img src={heading_stripes} alt='heading_stripes'/>
            <h1>Our Projects</h1>
            <p>Al Madar Property Management currently manages the following assets, with great client satisfaction in the property management services offered and an occupancy rate of above 90%. As a result, we have a portfolio that includes villas, flats, offices, and industrial buildings, yet we are expanding.</p>
        </div>
        <div>
          <div className='flex justify-between'>
            <img src={project1} alt='project1' className='h-50vh'/>
            <img src={project2} alt='project2' className='h-50vh'/>
            <img src={project3} alt='project3' className='h-50vh'/>
          </div>
          <div className='flex justify-between'>
            <img src={project4} alt='project4' className='h-50vh'/>
            <img src={project5} alt='project5' className='h-50vh'/>
            <img src={project6} alt='project6' className='h-50vh'/>
          </div>
        </div>
    </div>
  )
}

export default Section