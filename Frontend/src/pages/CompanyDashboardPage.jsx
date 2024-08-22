import React from 'react'
import Header from '../component/Header'
import CompanyDashboard from '../component/CompanyDashboard'
import CompanyCandidateStats from '../component/CompanyCandidateStats'
import CandidateDashboardAppliedList from '../component/CandidateDashboardAppliedList'
import Footer from '../component/Footer'




function CompanyDashboardPage() {
  return (
    <div>
    <Header/>
   
    <CompanyDashboard/>
    <CompanyCandidateStats/>
    <CandidateDashboardAppliedList/>
  
    <Footer/>
   
    </div>
  )

  
}

export default CompanyDashboardPage
