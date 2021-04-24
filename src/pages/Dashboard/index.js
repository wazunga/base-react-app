import React from 'react'
import { DashboardNav } from '../../components/DashboardNav'
import { Sidebar } from '../../components/Sidebar'
import { DashboardContainer } from './DashboardContainer'
import { DashboardContent } from './DashboardContent'
import { DashboardMainContent } from './DashboarMainContent'

const Dashboard = () => (
  <DashboardContainer>
    <Sidebar />
    <DashboardContent>
      <DashboardNav />
      <DashboardMainContent />
    </DashboardContent>
  </DashboardContainer>
)

export default Dashboard
