import { useState } from 'react'

/** Receive an array of two positions where the firts position must be those
 * classes when the elemen is inactive, so then default the second position
 * must be the active classes
 * @param {Array} InitialValues
 * @returns {string} classes 
*/
export const useIsActiveClasses = (initialValues) => {
  const [classesArray, setClassesArray] = useState(initialValues)

  /** Takes isOpen value as argument, the its value an returns those classes
   * that are you needed to handle your UI behaviour
   * @param {boolean} isOpen
   * @returns {string}
  */
  const classes = (isOpen) => !isOpen ? classesArray[0] : classesArray[1]

  const handelUpdateClassesArray = (e, value, index) => {
    e.preventDefault()
    let toUpdate = classesArray
    toUpdate[index] = value
    setClassesArray(toUpdate)
  }

  return [classes, handelUpdateClassesArray]
}
