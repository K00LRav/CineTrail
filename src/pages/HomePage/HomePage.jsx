import React from 'react'
import Slider from '../../components/Slider/Slider';
import './HomePage.css'

function HomePage({apiKey, baseUrl} ) {
  return (
    <div className='homepage-container'>
        <Slider apiKey={apiKey} baseUrl={baseUrl}/>
        </div>
  )
}

export default HomePage