import React from 'react'
import Header from '../component/Header'
import PostAJob from '../component/PostAJob'
import JobCategoryAll from '../component/JobCategoryAll'
import Footer from '../component/Footer'


function JobCategoryPage() {
  return (
    <div>
      <Header/>
      <PostAJob/>
      <JobCategoryAll/>
      <Footer/>
    </div>
  )
}

export default JobCategoryPage
