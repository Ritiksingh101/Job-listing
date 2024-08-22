import React from 'react'
import Header from '../component/Header'
import CompanyDashboard from '../component/CompanyDashboard'

import Footer from '../component/Footer'
import JobListComp from '../component/JobListComp'

function CompanyJobList() {
  return (
    <div>
      <Header/>
      <CompanyDashboard/>
      <JobListComp/>
      <Footer/>
    </div>
  )
}

export default CompanyJobList
