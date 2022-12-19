import React, { ReactElement } from 'react'
import { Car } from '../types/types'

import '../scss/car-card.scss'

export const CarCard = ({
  name,
  type,
  capacity,
  transmission,
  costPerDay,
  imageUrl,
  active
}: Car): ReactElement => {
  return (
    <div className="car-card-container">
      <div className="car-card-top-row">
        <div className="car-name-container">
          <div className="car-name">{name}</div>
          <div className="car-type">{type}</div>
        </div>
        <div className="active-icon"></div>
      </div>
      <div className="car-card-image">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="car-card-bottom-row">
        <div className="car-capacity-container">
          <div className="car-capacity-icon"></div>
          <div className="car-capacity">{capacity}</div>
        </div>
        <div className="car-transmission-container">
          <div className="car-transmission-icon"></div>
          <div className="car-transmission">{transmission}</div>
        </div>
        <div className="car-cost-per-day-container">
          <span className="car-cost-per-day">{costPerDay}</span>
          <span className="car-cost-per-day-time-period">/d</span>
        </div>
      </div>
    </div>
  )
}
