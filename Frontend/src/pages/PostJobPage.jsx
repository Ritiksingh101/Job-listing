import React from 'react'
import PostAJob from '../component/PostAJob'
import Header from '../component/Header'
import Footer from '../component/Footer'
import JobPostForm from '../component/JobPostForm'
function PostJobPage() {
  return (
    <div>
      <Header></Header>
      <PostAJob/>
      <JobPostForm/>
      <Footer/>
    </div>
  )
}

export default PostJobPage
