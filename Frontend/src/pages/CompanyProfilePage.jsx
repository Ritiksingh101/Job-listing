import React from 'react'
import Header from '../component/Header'
import CompanyDashboard from '../component/CompanyDashboard'
import MyProfileForm from '../component/MyProfileForm'
import Footer from '../component/Footer'



function CompanyProfilePage() {
  return (
    <div>
      <Header/>
      
      <CompanyDashboard/>
    
      <MyProfileForm/>
      <Footer/>
    </div>
  )
}

export default CompanyProfilePage
