import React from 'react'
import Header from '../component/Header'
import JobCategory from '../component/JobCategory'
import Hero from '../component/Hero'
import Footer from '../component/Footer'
import FeaturedJobs from '../component/FeaturedJobs'
import WorkingProcess from '../component/WorkingProcess'
import { useSelector } from 'react-redux'
function Home() {

  const demo = useSelector((state)=>state.user.check)
  return (
  <div>
    
<Header/>
<Hero/>
{demo}
<JobCategory/>
<FeaturedJobs/>
<WorkingProcess/>
<Footer/>
  </div>
  )
}

export default Home
