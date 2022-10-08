import React from 'react'
import './Card.scss'

const Card = () => {
  return (
    <div className='card'>
      <div className='section-card'>
        <div className='card-block one'>
          <button>
            <p>graphic design</p>
          </button>
        </div>
        <div className='card-block two'>
          <button>
            <p>ui/ux design</p>
          </button>
        </div>
        <div className='card-block three'>
          <button>
            <p>motion design</p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card