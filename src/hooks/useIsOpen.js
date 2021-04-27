import { useState } from 'react'

/** This hooks is very helpfull when you want to manage the
 * state of a component which needs to deal with open/close
 * validation. The initialValue param the most of time should be
 * initialized as false, but there is no problem if its value is true.
 * @param {boolean} initialValue
 * @returns {Array}
 */
export const useIsOpen = (initialValue) => {
  const [isOpen, setIsOpen] = useState(initialValue)

  /**
   * Hanlde isOpen state
   * @returns {void}
   */
  const handleIsOpen = (e) => {
    e.preventDefault()
    isOpen ? setIsOpen(false) : setIsOpen(true)
  }

  return [isOpen, handleIsOpen]
}
