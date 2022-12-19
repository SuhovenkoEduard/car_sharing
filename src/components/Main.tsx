import React, { ReactElement } from 'react'
import { useLocation } from 'react-router-dom'
import { HomePage } from './HomePage'
import { CarsPage } from './CarsPage'
import { Header } from './Header'
import { Footer } from './Footer'
import { OverlayButton } from './OverlayButton'

import { TABS } from '../constants/constants'

import '../scss/Main.scss'

export const Main = (): ReactElement => {
  const location = useLocation()
  const { pathname: url } = location

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const currentTab = TABS.find(tab => url === `/${tab.name}`)!

  const styles = currentTab.isDisplayBackgroundImage
    ? {
        backgroundImage: `url(${currentTab.imageUrl})`,
        backgroundSize: `${currentTab.imageWidth}px ${currentTab.imageHeight}px`,
        height: `${currentTab.imageHeight}px`,
        backgroundRepeat: 'no-repeat'
      }
    : {}

  return (
    <div className="main-page" style={styles}>
      <Header/>
      <div className="page-content">
        {url === '/home' && (
          <>
            <OverlayButton className="cursor-hider" top={1780} left={1318} width={22} height={21} onClick={() => console.log('cursor')}/>
            <HomePage />
          </>
        )}
        {url === '/cars' && (
          <CarsPage/>
        )}
      </div>
      <Footer/>
    </div>
  )
}
