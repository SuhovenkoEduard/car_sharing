import React, { ReactElement } from 'react'
import { useNavigate } from 'react-router-dom'

import '../scss/OverlayButton.scss'

export const OverlayButton = ({
  top,
  left,
  width,
  height,
  navigatePath,
  text,
  className
}: {
  top: number
  left: number
  width: number
  height: number
  navigatePath: string
  text?: string
  className?: string
}): ReactElement => {
  const navigate = useNavigate()
  const styles = {
    top: `${top}px`,
    left: `${left}px`,
    width: `${width}px`,
    height: `${height}px`
  }

  const definedClassName = (className != null) ? className : ''

  return (
    <button
      className={`overlay-button ${definedClassName}`}
      type="button" style={{ ...styles }}
      onClick={() => navigate(navigatePath)}>
      {text}
    </button>
  )
}

// <OverlayButton top={} left={} width={} height={} />
