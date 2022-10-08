import React from 'react'
import './Home.scss'
import Slider from '../../components/Slider/Slider'
import Button from '../../components/Button/Button'



const Home = () => {
  return (
    <div>
      <section className='section-home'>
        <div className='main-home'>
          <div className='title-home'>
            <p>We have design experience</p>
          </div>
          <div>
            <Slider/>
          </div>
          <div>
            <Button/>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
