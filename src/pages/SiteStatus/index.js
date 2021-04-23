import React, { Fragment } from 'react'
import ErrorDisplay from '../../components/ErrorDisplay/ErrorDisplay'
import errorTest from '../../assets/testErrorDisplay.svg'

const SiteStatus = () => (
  <Fragment>
    <ErrorDisplay img={errorTest} title="Title Test" message="Message Test" />
  </Fragment>
)

export default SiteStatus
