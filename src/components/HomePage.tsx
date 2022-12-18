import React, { ReactElement } from 'react'
import { OverlayButton } from './OverlayButton'
import { useNavigate } from 'react-router-dom'

export const HomePage = (): ReactElement => {
  const navigate = useNavigate()
  return (
    <div className="home-page">
      <OverlayButton top={542} left={100} width={442} height={100} onClick={() => navigate('/cars')} />
    </div>
  )
}

/*
<div className="slide1">
        <div className="left">
          <div className="title">Ваш первый автомобиль после получения прав</div>
          <div className="description">Ваш первый автомобиль после получения прав</div>
          <button type="button">Перейти к машинам</button>
        </div>
        <div className="right">
          <img src="../images/home-page-car-slide1.jpg" alt="car"/>
        </div>
        <div className="slide2">
          <img src="../images/home-page-car-slide2.jpg" alt="car"/>
          <div className="about-section">
            <div className="about-label-small">О НАС</div>
            <div className="about-label-large">Что можно сказать о нас</div>
            <div className="about-us-content">
              Активно развивающееся направление позволяет значительно сэкономить ваши финансовые сбережения на аренде автомобиля.
              Каршеринг предоставляет человеку бесплатное, доступное и комфортное передвижение на автомобиле в пределах одного города или страны.
              Пользуясь такого рода услугой, водитель снимает с себя все обязанности по содержанию и эксплуатации автомобиля:
              оплата страховки, техобслуживания автомобиля, заправок, посещение автомойки или станции технического обслуживания,
              оплата транспортного налога или парковки.
              Все это ложится на плечи компании - арендодателя.
            </div>
          </div>
          <div className="slide3">

          </div>
        </div>
      </div>
 */
