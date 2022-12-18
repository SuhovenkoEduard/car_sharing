import React, { ReactElement } from 'react'

import '../scss/OverlayButton.scss'

export const OverlayButton = ({
  top,
  left,
  width,
  height,
  onClick,
  text,
  className
}: {
  top: number
  left: number
  width: number
  height: number
  onClick: () => void
  text?: string
  className?: string
}): ReactElement => {
  const styles = {
    top: `${top}px`,
    left: `${left}px`,
    width: `${width}px`,
    height: `${height}px`
  }
  return (
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    <button className={`overlay-button ${className}`} type="button" style={{ ...styles }} onClick={onClick}>
      {text}
    </button>
  )
}

// <OverlayButton top={} left={} width={} height={} />
