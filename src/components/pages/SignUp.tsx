import React, { ReactElement, useState } from 'react'
import { FormControl, Checkbox } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { ReactComponent as SocialsSVG } from '../../images/socials.svg'
import { CarSharingRoutes } from '../../types/types'

import '../../scss/sign-up.scss'

export const SignUp = (): ReactElement => {
  const navigate = useNavigate()
  const [rememberMe, setRememberMe] = useState<boolean>(true)
  return (
    <div className="sign-up-form-container">
      <div className="sign-up-form">
        <FormControl className="actual-form">
          <div className="header">Регистрация</div>
          <div className="description">
            Регистрация занимает менее минуты, но дает вам полный контроль над приложением.</div>
          <div className="inputs">
            <div className="full-name-container">
              <div className="inputLabel">ФИО</div>
              <input id="full-name" />
            </div>
            <div className="email-container">
              <div className="inputLabel">Почта</div>
              <input id="email" />
            </div>
            <div className="password-container">
              <div className="inputLabel">Пароль</div>
              <input id="password" />
            </div>
            <div className="repeated-password-container">
              <div className="inputLabel">Подтвердите пароль</div>
              <input id="repeated-password" />
            </div>
          </div>
          <div className="inputs-remember-me_forgot-password">
            <span>
              <Checkbox id="remember-me-checkbox" checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} />
              <label htmlFor="remember-me-checkbox">Запомнить меня</label>
            </span>
          </div>
          <div className="authorization-button">
            <button type="button" onClick={() => navigate(CarSharingRoutes.home)}>Зарегистрироваться</button>
          </div>
          <div className="sign-in-link-container">
            <span>У вас уже есть учётная запись?</span>
            <button type="button" className="highlighted-label">
              <a href="javascript:void(0);" onClick={() => navigate(CarSharingRoutes.signIn)}>Авторизоваться</a>
            </button>
          </div>
          <hr style={{ width: '483px', marginLeft: '-48px', border: '1px solid #E5E8ED' }}/>
          <div className="footer">
            <div>Или войдите в систему с помощью</div>
            <SocialsSVG />
          </div>
        </FormControl>
      </div>
    </div>
  )
}
