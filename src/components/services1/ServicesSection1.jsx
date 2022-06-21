import React from 'react'
import services1_bg from '../Zimages/services1_bg.svg'
import services1_FM from '../Zimages/services1_FM.svg'
import services1_TM from '../Zimages/services1_TM.svg'

const ServicesSection1 = () => {
  return (
    <div>
        <div className=' top-6.5'>
            <img src={services1_bg} alt='services1_bg' className=''/>
            <div>
                <h2>Our Services</h2>
                <h1>People are our priority </h1>
                <button>call : +974 44675405</button>
            </div>
        </div>
        <div>
            <img src={services1_TM} alt='services1_TM' className='h-50vh'/>
        </div>
        <div>
            <img src={services1_FM} alt='services1_FM' className='h-50vh'/>
        </div>
    </div>
    
  )
}

export default ServicesSection1