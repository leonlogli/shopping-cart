import React, {
  useState,
  FormEvent,
  ChangeEvent,
  MouseEvent,
  useEffect,
  forwardRef,
} from 'react'
import { InputBaseProps } from '@material-ui/core/InputBase'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import IconButton from '@material-ui/core/IconButton'

import {
  MobileSearchPaneRoot,
  Input,
  ClearIcon,
} from './MobileSearchField.style'

export type MobileSearchFieldProps = InputBaseProps & {
  onSubmit?: (value?: string) => void
  /**
   * Callback invoked on back icon click
   */
  onBack?: (event?: MouseEvent<HTMLButtonElement>) => void
  value?: string
}

const MobileSearchField = forwardRef<HTMLDivElement, MobileSearchFieldProps>(
  (props, ref) => {
    const {
      className,
      id,
      placeholder = 'Search',
      onSubmit = () => null,
      onChange = () => null,
      inputProps,
      onBack,
      value = '',
      ...other
    } = props
    const [internalValue, setInternalValue] = useState(value)
    const [showClearButton, setShowClearButton] = useState(false)

    useEffect(() => {
      setInternalValue(value)
      if (internalValue) {
        setShowClearButton(true)
      }
    }, [value])

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      setInternalValue(event.target.value)
      setShowClearButton(!!event.target.value)
      onChange(event)
    }

    const handleClear = () => {
      setInternalValue('')
      setShowClearButton(false)
    }

    const handleFocus = () => {
      if (internalValue) {
        setShowClearButton(true)
      }
    }

    const handleSubmit = (event: FormEvent<HTMLDivElement>) => {
      event.preventDefault()
      onSubmit(internalValue)
    }

    return (
      <MobileSearchPaneRoot
        square
        component="form"
        onSubmit={handleSubmit}
        id={id}
        ref={ref}
        className={className}
        onFocus={handleFocus}
      >
        <IconButton aria-label="go back" color="inherit" onClick={onBack}>
          <ArrowBackIcon />
        </IconButton>
        <Input
          type="search"
          value={internalValue}
          onChange={handleChange}
          placeholder={placeholder}
          autoCapitalize="none"
          autoComplete="off"
          autoCorrect="off"
          spellCheck="false"
          inputProps={{ 'aria-label': placeholder, ...inputProps }}
          {...other}
        />
        {showClearButton && <ClearIcon onClick={handleClear} />}
      </MobileSearchPaneRoot>
    )
  }
)

export { MobileSearchField }
export default MobileSearchField
