import React, { ReactElement } from 'react'
import { CARS } from '../constants/constants'
import { CarCard } from './CarCard'

import '../scss/cars-page.scss'

export const CarsPage = (): ReactElement => {
  return (
    <div className="cars-page">
      <div className="route-controls">
        <div className="controls-description">
          <div className="controls-description-header">Забронируйте авто в несколько простых шагов</div>
          <div className="description">Аренда автомобиля приносит вам свободу, мы поможем вам найти лучший автомобиль для вас по отличной цене.</div>
          <div className="users-recommendations" />
        </div>
        <div className="controls-container">
          <div className="left">
            <div className="from-input control">
              <label htmlFor="from-input">Откуда поедете?</label>
              <input id="from-input" type="text" />
            </div>
            <div className="control-bottom-container">
              <span className="start-date-input control">
                <label htmlFor="start-date-input">Дата начала</label>
                <input id="start-date-input" type="date" />
              </span>
              <span className="end-date-input control">
                <label htmlFor="end-date-input">Дата конца</label>
                <input id="end-date-input" type="date" />
              </span>
            </div>
          </div>
          <div className="right">
            <div className="to-input control">
              <label htmlFor="to-input">Куда едете?</label>
              <input id="to-input" type="text" />
            </div>
            <div className="control-bottom-container">
              <span className="start-time-input control">
                <label htmlFor="start-time-input">Время посадки</label>
                <input id="start-time-input" type="time" />
              </span>
              <span className="end-time-input control">
                <label htmlFor="end-time-input">Время высадки</label>
                <input id="end-time-input" type="time" />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="main-content">
        <div className="filters-container">
          <div className="filters-header">Фильтры</div>
          <div className="car-type">
            <div className="filter-label">Тип авто</div>
            <div className="filter-controls">
              <div className="filter-checkbox">
                <input id="coupe" type="checkbox" defaultChecked />
                <label htmlFor="coupe">Coupe (24)</label>
              </div>
              <div className="filter-checkbox">
                <input id="hatchback" type="checkbox" defaultChecked />
                <label htmlFor="hatchback">Hatchback (12)</label>
              </div>
              <div className="filter-checkbox">
                <input id="sedan" type="checkbox" defaultChecked />
                <label htmlFor="sedan">Sedan (16)</label>
              </div>
              <div className="filter-checkbox">
                <input id="mpv" type="checkbox" />
                <label htmlFor="mpv">MPV (28)</label>
              </div>
              <div className="filter-checkbox">
                <input id="suv" type="checkbox" />
                <label htmlFor="suv">SUV (20)</label>
              </div>
            </div>
          </div>
          <div className="car-capacity">
            <div className="filter-label">Вместимость</div>
            <div className="filter-controls">
              <div className="filter-checkbox">
                <input id="25" type="checkbox" defaultChecked />
                <label htmlFor="25">2 - 5 (100)</label>
              </div>
              <div className="filter-checkbox">
                <input id="6" type="checkbox" />
                <label htmlFor="6">6 or more (4)</label>
              </div>
            </div>
          </div>
          <div className="car-rate">
            <div className="filter-label">Рекомендации клиентов</div>
            <div className="filter-controls">
              <div className="filter-checkbox">
                <input id="70+" type="checkbox" defaultChecked />
                <label htmlFor="70+">70 - 100% (72)</label>
              </div>
              <div className="filter-checkbox">
                <input id="40+" type="checkbox" />
                <label htmlFor="40+">40 - 69% (41)</label>
              </div>
              <div className="filter-checkbox">
                <input id="0+" type="checkbox" />
                <label htmlFor="0+">0 - 39% (28)</label>
              </div>
            </div>
          </div>
        </div>
        <div className="cars-list-container">
          {CARS.map((car, index) => (
            <CarCard key={index} {...car} />
          ))}
        </div>
      </div>
    </div>
  )
}
