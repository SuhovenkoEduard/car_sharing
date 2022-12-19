import React, { ReactElement, useState } from 'react'
import { ReactComponent as ActiveHeartIcon } from '../images/icons/heart-active.svg'
import { ReactComponent as InactiveHeartIcon } from '../images/icons/heart-inactive.svg'
import { ReactComponent as UserIcon } from '../images/icons/user.svg'
import { ReactComponent as ManualIcon } from '../images/icons/manual.svg'
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
  const [isActiveCopy, setIsActiveCopy] = useState(active)

  return (
    <div className="car-card-container" onClick={() => setIsActiveCopy(!isActiveCopy)}>
      <div className="car-card-top-row">
        <div className="car-name-container">
          <div className="car-name">{name}</div>
          <div className="car-type">{type}</div>
        </div>
        <div className="active-icon">
          {isActiveCopy ? <ActiveHeartIcon /> : <InactiveHeartIcon />}
        </div>
      </div>
      <div className="car-card-image">
        <img src={imageUrl} alt={name} draggable={false} />
      </div>
      <div className="car-card-bottom-row">
        <div className="car-capacity-container">
          <div className="car-capacity-icon"><UserIcon /></div>
          <div className="car-capacity">{capacity}</div>
        </div>
        <div className="car-transmission-container">
          <div className="car-transmission-icon"><ManualIcon /></div>
          <div className="car-transmission">{transmission}</div>
        </div>
        <div className="car-cost-per-day-container">
          <span className="car-cost-per-day">{costPerDay}$</span>
          <span className="car-cost-per-day-time-period">/d</span>
        </div>
      </div>
    </div>
  )
}
