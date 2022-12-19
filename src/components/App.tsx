import React, { ReactElement } from 'react'
import { SignIn } from './pages/SignIn'
import { Main } from './Main'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { SignUp } from './pages/SignUp'
import { CarSharingRoutes } from '../types/types'

import '../scss/app.scss'

export const App = (): ReactElement => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={CarSharingRoutes.index} element={<Navigate to={CarSharingRoutes.signIn} replace />} />
          <Route path={CarSharingRoutes.home} element={<Main />} />
          <Route path={CarSharingRoutes.cars} element={<Main />} />
          <Route path={CarSharingRoutes.signIn} element={<SignIn />}/>
          <Route path={CarSharingRoutes.signUp} element={<SignUp />}/>
          <Route path={CarSharingRoutes.default} element={<div>Wrong url.</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
