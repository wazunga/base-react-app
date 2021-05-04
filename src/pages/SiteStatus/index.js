import React from 'react'
import { ErrorDisplay } from '../../components/ErrorDisplay/ErrorDisplay'
import errorTest from '../../assets/testErrorDisplay.svg'

const SiteStatus = () => (
  <>
    <ErrorDisplay img={errorTest} title="Title Test" message="Message Test" />
  </>
)

export default SiteStatus
