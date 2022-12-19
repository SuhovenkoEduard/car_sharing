import React, { ReactElement } from 'react'
import { TABS } from '../constants/constants'
import { OverlayButton } from './OverlayButton'
import { useNavigate, useLocation } from 'react-router-dom'

import '../scss/Header.scss'

export const Header = (): ReactElement => {
  const location = useLocation()
  const { pathname: url } = location

  const localPath = url.slice(1, url.length)
  console.log(localPath)

  const backgroundImageUrl = `./images/header/${localPath}.png`

  const navigate = useNavigate()
  return (
    <div className="global-header" style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
      <div className="tabs">
        {TABS.map((tab, index) => (
          <OverlayButton key={index} {...tab} onClick={() => navigate(tab.navigatePath)}/>
        ))}
      </div>
    </div>
  )
}
