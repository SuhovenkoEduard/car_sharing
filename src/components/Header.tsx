import React, { ReactElement } from 'react'
import { TABS } from '../constants/constants'
import { OverlayButton } from './OverlayButton'
import { useNavigate } from 'react-router-dom'

import '../scss/Header.scss'

export const Header = (): ReactElement => {
  const navigate = useNavigate()
  return (
    <div className="global-header">
      <div className="tabs">
        {TABS.map((tab, index) => (
          <OverlayButton key={index} {...tab} onClick={() => navigate(tab.navigatePath)}/>
        ))}
      </div>
    </div>
  )
}
