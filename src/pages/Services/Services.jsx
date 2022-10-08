import React from 'react';
import './Services.scss';
import Card from '../../components/Card/Card';
import Button from '../../components/Button/Button';

const Services = () => {
  return (
    <div>
      <section className='section-service'>
        <div className='main-service'>
          <div className='block-service'>
            <div>
              <p className='service-title'>Services & Offer</p>
              <p className='service-text'>Taking into account the key scenarios of behavior, understanding the essence of resource-saving technologies requires.</p>
            </div>
            <div className='service-button'>
              <Button/>
            </div>
          </div>
          <div className='block-card'>
            <Card/>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
