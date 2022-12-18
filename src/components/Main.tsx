import React, { ReactElement } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { HomePage } from './HomePage'
import { OverlayButton } from './OverlayButton'

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
      pagesCount: 3
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
      pagesCount: 1
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
      pagesCount: 1
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
      pagesCount: 1
    }
  ]

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const currentTab = tabs.find(tab => url === `/${tab.name}`)!

  const styles = {
    backgroundImage: `url(${currentTab.imageUrl})`,
    backgroundSize: `${currentTab.imageWidth}px ${currentTab.imageHeight}px`,
    height: `${currentTab.imageHeight}px`
  }

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
        <div>
          {url === '/home' && (
            <HomePage />
          )}
          {url === '/cars' && (
            <div>Cars</div>
          )}
        </div>
        <div className="footer" />
      </div>
  )
}
