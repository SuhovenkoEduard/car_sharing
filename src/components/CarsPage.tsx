import React, { ReactElement } from 'react'

import '../scss/CarsPage.scss'

export const CarsPage = (): ReactElement => {
  return (
    <div className="cars-page">
      <div className="route-controls">
        <div className="controls-description">
          <div className="cars-page-header">Забронируйте авто в несколько простых шагов</div>
          <div className="description">Аренда автомобиля приносит вам свободу, мы поможем вам найти лучший автомобиль для вас по отличной цене.</div>
          <div className="users-recommendations">
            <div className="users">
              <div className="user">User 1</div>
              <div className="user">User 2</div>
              <div className="user">User 3</div>
              <div className="user">User 4</div>
            </div>
            <div className="trust-info">
              <div className="stars">
                <div className="star">Star 1</div>
                <div className="star">Star 2</div>
                <div className="star">Star 3</div>
                <div className="star">Star 4</div>
                <div className="star">Star 5</div>
              </div>
              <div className="trust-label">Нам доверяют 10 миллионов клиентов</div>
            </div>
          </div>
        </div>
        <div className="controls-container">
          <div className="left">
            <div className="from-input control">
              <label htmlFor="from-input">Откуда поедете?</label>
              <input id="from-input" type="text" />
            </div>
            <span className="start-date-input control">
              <label htmlFor="start-date-input">Дата начала</label>
              <input id="start-date-input" type="date" />
            </span>
            <span className="end-date-input control">
              <label htmlFor="end-date-input">Дата конца</label>
              <input id="end-date-input" type="date" />
            </span>
          </div>
          <div className="right">
            <div className="to-input control">
              <label htmlFor="to-input">Куда едете?</label>
              <input id="to-input" type="text" />
            </div>
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
      <div className="main-content">
        <div className="filters-container">
          <div className="cars-page-header">Фильтры</div>
          <div className="car-type">
            <div className="filter-label">Тип авто</div>
            <div className="filter-controls">
              <div className="filter-checkbox">Coupe (24)</div>
              <div className="filter-checkbox">Hatchback (12)</div>
              <div className="filter-checkbox">Sedan (16)</div>
              <div className="filter-checkbox">MPV (28)</div>
              <div className="filter-checkbox">SUV (20)</div>
            </div>
          </div>
          <div className="car-capacity">
            <div className="filter-label">Вместимость</div>
            <div className="filter-controls">
              <div className="filter-checkbox">2 - 5 (100)</div>
              <div className="filter-checkbox">6 or more (4)</div>
            </div>
          </div>
          <div className="car-rate">
            <div className="filter-label">Рекомендации клиентов</div>
            <div className="filter-controls">
              <div className="filter-checkbox">70 - 100% (72)</div>
              <div className="filter-checkbox">40 - 69% (41)</div>
              <div className="filter-checkbox">0 - 39% (28)</div>
            </div>
          </div>
        </div>
        <div className="cars-list-container">
          <div className="car-card">Car 1</div>
          <div className="car-card">Car 2</div>
        </div>
      </div>
    </div>
  )
}
