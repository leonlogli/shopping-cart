import { ValidationRules } from 'react-hook-form'

import { MenuOptionGroup } from '../state'

const menuItemOptionsFormValiation = ({
  max,
  min,
}: MenuOptionGroup): ValidationRules => ({
  ...((min || 0) === 1 && {
    required: 'Vous devez choisir un produit',
  }),

  ...(!!min &&
    (min || 0) > 1 && {
      minLength: {
        value: min,
        message: `Veuillez choisir au moins ${min} produit${
          min > 1 ? 's' : ''
        }`,
      },
    }),

  ...(!!max &&
    (min || 0) > 1 && {
      maxLength: {
        value: max,
        message: `Vous ne pouvez pas choisir plus ${max} produit${
          max > 1 ? 's' : ''
        }`,
      },
    }),
})

export { menuItemOptionsFormValiation }
export default menuItemOptionsFormValiation
