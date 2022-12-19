import React, { ReactElement } from 'react'
import { OverlayButton } from './OverlayButton'
import '../scss/Header.scss'

import { TABS } from '../constants/constants'

export const Header = (): ReactElement => {
  return (
    <div className="header">
      <div className="tabs">
        {TABS.map((tab, index) => (
          <OverlayButton key={index} {...tab} />
        ))}
      </div>
    </div>
  )
}
