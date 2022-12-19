import React, { ReactElement, useState } from 'react'
import { Checkbox, FormControl } from '@mui/material'
import { ReactComponent as SocialsSVG } from '../../images/socials.svg'
import { useNavigate } from 'react-router-dom'
import { CarSharingRoutes } from '../../types/types'

import '../../scss/sign-in.scss'

interface User {
  role: string
  roleName: string
  login: string
  password: string
}

const REGISTERED_USERS: User[] = [
  {
    role: 'client',
    roleName: 'Клиент',
    login: 'client',
    password: 'client'
  },
  {
    role: 'employee',
    roleName: 'Сотрудник',
    login: 'employee',
    password: 'employee'
  },
  {
    role: 'manager',
    roleName: 'Главный менеджер кол. центра',
    login: 'manager',
    password: 'manager'
  }
]

export const SignIn = (): ReactElement => {
  const navigate = useNavigate()
  const [rememberMe, setRememberMe] = useState<boolean>(true)
  const [login, setLogin] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleSubmit = (): void => {
    const user = REGISTERED_USERS.find((user: User) => user.login === login && user.password === password)

    if (user != null) {
      localStorage.setItem('role', user.role)
      localStorage.setItem('roleName', user.roleName)
      localStorage.setItem('login', user.login)
      localStorage.setItem('password', user.password)
      navigate(CarSharingRoutes.home)
    } else {
      alert('Неправильный логин или пароль')
      localStorage.setItem('role', '')
      localStorage.setItem('roleName', '')
      localStorage.setItem('login', '')
      localStorage.setItem('password', '')
    }
  }

  return (
    <div className="sign-in-form-container">
      <div className="sign-in-form">
        <FormControl className="actual-form">
          <div className="header">Авторизация</div>
          <div className="description">Войдите в свою учетную запись, используя адрес электронной почты и пароль,
            указанные при регистрации.
          </div>
          <div className="inputs">
            <div className="email-container">
              <div className="inputLabel">Почта</div>
              <input id="email" value={login} type="email" onChange={(event) => {
                setLogin(event.target.value)
              }}/>
            </div>
            <div className="password-container">
              <div className="inputLabel">Пароль</div>
              <input id="password" value={password} type="password" onChange={(event) => {
                setPassword(event.target.value)
              }}/>
            </div>
          </div>
          <div className="inputs-remember-me_forgot-password">
            <span>
              <Checkbox id="remember-me-checkbox" checked={rememberMe} onChange={() => setRememberMe(!rememberMe)}/>
              <label htmlFor="remember-me-checkbox">Запомнить меня</label>
            </span>
            <button type="button" className="highlighted-label">
              <a href="javascript:void(0);" onClick={() => alert('Пока не реализовано.')}>Забыли пароль</a>
            </button>
          </div>
          <div className="authorization-button">
            <button type="button" onClick={handleSubmit}>Авторизоваться</button>
          </div>
          <div className="sign-up-link-container">
            <span>У вас нет учётной записи?</span>
            <button type="button" className="highlighted-label">
              <a href="javascript:void(0);" onClick={() => navigate(CarSharingRoutes.signUp)}>Зарегистироваться</a>
            </button>
          </div>
          <hr style={{ width: '488px', marginLeft: '-48px', border: '1px solid #E5E8ED' }}/>
          <div className="footer">
            <div>Или войдите в систему с помощью</div>
            <SocialsSVG/>
          </div>
        </FormControl>
      </div>
    </div>
  )
}
