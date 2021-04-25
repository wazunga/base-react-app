import React from 'react'
import PropTypes from 'prop-types'
import { Router } from '@reach/router'
import { DashboardNav } from '../../components/DashboardNav'
import { Sidebar } from '../../components/Sidebar'
import { DashboardContainer } from './DashboardContainer'
import { DashboardContent } from './DashboardContent'
import { DashboardMainContent } from './DashboarMainContent'

const Section = ({ title }) => (
  <div className="bg-gray-50">
    <h1 className="text-2xl">{title}</h1>
  </div>
)

Section.propTypes = {
  title: PropTypes.string.isRequired
}

export const Dashboard = () => (
  <DashboardContainer>
    <Sidebar />
    <DashboardContent>
      <DashboardNav />
      <DashboardMainContent>
        <Router>
          <Section title="Dashboard Home" path="/" />
          <Section title="Link 1" path="link1" />
          <Section title="Link 2" path="link2" />
          <Section title="Not found" default />
        </Router>
      </DashboardMainContent>
    </DashboardContent>
  </DashboardContainer>
)
