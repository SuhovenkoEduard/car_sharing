import React, { ReactElement } from 'react'
import '../scss/footer.scss'
import { ReactComponent as FooterSVG } from '../images/Footer.svg'

export const Footer = (): ReactElement => {
  return (
    <div className="footer">
      <FooterSVG />
    </div>
  )
}
