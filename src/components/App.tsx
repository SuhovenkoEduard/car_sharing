import React, { ReactElement } from 'react'
import { SignIn } from './SignIn'
import { Main } from './Main'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { SignUp } from './SignUp'

import '../scss/App.scss'

export const App = (): ReactElement => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/sign-in" replace />} />
          <Route path="/home" element={<Main />} />
          <Route path="/cars" element={<Main />} />
          <Route path="/sign-in" element={<SignIn />}/>
          <Route path="/sign-up" element={<SignUp />}/>
          <Route path="*" element={<div>Wrong url.</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
