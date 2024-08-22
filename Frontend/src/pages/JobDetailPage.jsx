import React from "react";
import Header from "../component/Header";
import JobDetail from "../component/JobDetail";
import Footer from "../component/Footer";
import PostAJob from "../component/PostAJob";
function JobDetailPage() {
  return (
    <div>
      <Header />
      <PostAJob />
      <JobDetail />
      <Footer />
    </div>
  );
}

export default JobDetailPage;
