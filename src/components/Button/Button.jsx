import React from 'react';

import './Button.scss';

const BUTTON_TYPE_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted'
}

// children, qualsiasi tag o testo, tipo di bottone ed eventuali altre props
const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button className={ `button-container ${BUTTON_TYPE_CLASSES[buttonType]}`} {...otherProps}>
        {children}
    </button>
  )
}

export default Button;