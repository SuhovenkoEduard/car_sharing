import React, { ReactElement, useState } from 'react'
import { FormControl, Checkbox } from '@mui/material'

import { ReactComponent as SocialsSVG } from '../images/socials.svg'

import '../scss/SignIn.scss'
import { useNavigate } from 'react-router-dom'

export const SignIn = (): ReactElement => {
  const navigate = useNavigate()
  const [rememberMe, setRememberMe] = useState<boolean>(true)
  return (
    <div className="sign-in-form-container">
      <div className="sign-in-form">
        <FormControl className="actual-form">
          <div className="header">Авторизация</div>
          <div className="description">Войдите в свою учетную запись, используя адрес электронной почты и пароль, указанные при регистрации.</div>
          <div className="inputs">
            <div className="email-container">
              <div className="inputLabel">Почта</div>
              <input id="email" />
            </div>
            <div className="password-container">
              <div className="inputLabel">Пароль</div>
              <input id="password" />
            </div>
          </div>
          <div className="inputs-remember-me_forgot-password">
            <span>
              <Checkbox id="remember-me-checkbox" checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} />
              <label htmlFor="remember-me-checkbox">Запомнить меня</label>
            </span>
            <button type="button" className="highlighted-label">
              <a href="javascript:void(0);" onClick={() => alert('Пока не реализовано.')}>Забыли пароль</a>
            </button>
          </div>
          <div className="authorization-button">
            <button type="button" onClick={() => navigate('/home')}>Авторизоваться</button>
          </div>
          <div className="sign-up-link-container">
            <span>У вас нет учётной записи?</span>
            <button type="button" className="highlighted-label">
              <a href="javascript:void(0);" onClick={() => navigate('/sign-up')}>Зарегистироваться</a>
            </button>
          </div>
          <hr style={{ width: '488px', marginLeft: '-48px', border: '1px solid #E5E8ED' }}/>
          <div className="footer">
            <div>Или войдите в систему с помощью</div>
            <SocialsSVG />
          </div>
        </FormControl>
      </div>
    </div>
  )
}