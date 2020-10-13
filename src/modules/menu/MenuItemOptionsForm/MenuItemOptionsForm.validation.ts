import { ValidationRules } from 'react-hook-form'

import { MenuOptionGroup } from '../state'

const menuItemOptionsFormValiation = ({
  max,
  min,
}: MenuOptionGroup): ValidationRules => ({
  ...((min || 0) === 1 && {
    required: 'You must choose one product',
  }),

  ...(!!min &&
    (min || 0) > 1 && {
      minLength: {
        value: min,
        message: `You must choose at least ${min} product${min > 1 ? 's' : ''}`,
      },
    }),

  ...(!!max &&
    (min || 0) > 1 && {
      maxLength: {
        value: max,
        message: `You cannot choose more than ${max} product${
          max > 1 ? 's' : ''
        }`,
      },
    }),
})

export { menuItemOptionsFormValiation }
export default menuItemOptionsFormValiation
