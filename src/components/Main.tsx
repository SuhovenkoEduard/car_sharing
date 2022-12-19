import React, { ReactElement } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { HomePage } from './HomePage'
import { OverlayButton } from './OverlayButton'
import { CarsPage } from './CarsPage'

// import { ReactComponent as LeverY } from '../images/LeverY.svg'

import '../scss/Main.scss'

export const Main = (): ReactElement => {
  const location = useLocation()
  const { pathname: url } = location

  const navigate = useNavigate()

  const tabs = [
    {
      title: 'Главная',
      name: 'home',
      top: 25,
      left: 250,
      width: 57,
      height: 17,
      onClick: () => navigate('/home'),
      imageUrl: '../images/home-page.png',
      imageWidth: 1440,
      imageHeight: 2228,
      isDisplayBackgroundImage: true
    },
    {
      title: 'Машины',
      name: 'cars',
      top: 25,
      left: 341,
      width: 68,
      height: 17,
      onClick: () => navigate('/cars'),
      imageUrl: '../images/cars-page.png',
      imageWidth: 1440,
      imageHeight: 1269,
      isDisplayBackgroundImage: false
    },
    {
      title: 'О нас',
      name: 'about',
      top: 25,
      left: 443,
      width: 45,
      height: 17,
      onClick: () => navigate('/about'),
      imageUrl: '..images/about-page.png',
      imageWidth: 1440,
      imageHeight: 1269,
      isDisplayBackgroundImage: true
    },
    {
      title: 'Комментарии',
      name: 'comments',
      top: 25,
      left: 530,
      width: 113,
      height: 17,
      onClick: () => navigate('/comments'),
      imageUrl: '..images/comments-page.png',
      imageWidth: 1440,
      imageHeight: 1269,
      isDisplayBackgroundImage: true
    }
  ]

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const currentTab = tabs.find(tab => url === `/${tab.name}`)!

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
        <div className="header">
           {/* <LeverY className="lever-y-logo" /> */}
          <div className="tabs">
            {tabs.map((tab, index) => (
              <OverlayButton key={index} {...tab} />
            ))}
          </div>
        </div>
        <div className="page-content">
          {url === '/home' && (
            <>
              <OverlayButton className="cursor-hider" top={1780} left={1318} width={22} height={21} onClick={() => console.log('cursor')}/>
              <HomePage />
            </>
          )}
          {url === '/cars' && (
            <CarsPage />
          )}
        </div>
        <div className="footer" />
      </div>
  )
}
