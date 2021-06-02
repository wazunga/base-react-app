import React from 'react'
import PropTypes from 'prop-types'

export const DashboardSectionTitle = ({ title }) => {
  return (
    <div className="flex pt-1 pr-1 mb-3 justify-content">
      <h1 className="text-2xl">{title}</h1>
    </div>
  )
}

DashboardSectionTitle.propTypes = {
  title: PropTypes.string.isRequired
}
