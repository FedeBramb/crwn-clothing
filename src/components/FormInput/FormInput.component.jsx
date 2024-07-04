import React from 'react'

import { FormInputLabel, Input, Group } from './FormInput.styles';

// Ricevo come argomento label e altre props da SignUpForm
// Diamo la classe 'restringe
const FormInput = ({ label, ...inputProps  }) => {
  return (
    <Group>
        <Input { ...inputProps }  />
        {label && (
          <FormInputLabel
          shrink={inputProps.value.length}
          >
            {label}
          </FormInputLabel>
        )}
    </Group>
  )
}

export default FormInput