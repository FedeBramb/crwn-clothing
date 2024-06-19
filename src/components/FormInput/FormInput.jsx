import React from 'react'

import './FormInput.scss';

// Ricevo come argomento label e altre props da SignUpForm
// Diamo la classe 'restringe
const FormInput = ({ label, ...inputProps  }) => {
  return (
    <div className='group'>
        <input className='form-input' { ...inputProps }  />
        {label && (
          <label className={`${inputProps.value.length ? 'shrink' : ''} form-input-label`}>
            {label}
          </label>
        )}
    </div>
  )
}

export default FormInput