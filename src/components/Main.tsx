import React, { ReactElement } from 'react'
import { useLocation } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { CarsPage } from './pages/CarsPage'
import { Header } from './layout/Header'
import { Footer } from './layout/Footer'
import { TABS } from '../constants/constants'
import { CarSharingRoutes } from '../types/types'

import '../scss/main.scss'

export const Main = (): ReactElement => {
  const location = useLocation()
  const { pathname: url } = location

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const currentTab = TABS.find(tab => url === tab.navigatePath)!

  const styles = currentTab.isDisplayBackgroundImage
    ? {
        backgroundImage: `url(${currentTab.imageUrl})`,
        backgroundSize: `${currentTab.imageWidth}px ${currentTab.imageHeight}px`,
        height: `${currentTab.imageHeight}px`,
        backgroundRepeat: 'no-repeat'
      }
    : {}

  return (
    <div className="main-page">
      <Header/>
      <div className="page-content" style={styles}>
        {url === CarSharingRoutes.home && (
          <HomePage />
        )}
        {url === CarSharingRoutes.cars && (
          <CarsPage/>
        )}
      </div>
      <Footer/>
    </div>
  )
}
