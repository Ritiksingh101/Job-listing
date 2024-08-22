import React from "react";
import "tailwindcss/tailwind.css";
import Header from "../component/Header";
import Footer from "../component/Footer";
import PostAJob from "../component/PostAJob"
import Filter from "../component/Filter"
const JobListingPage = () => {
  return (
    <div>
      <Header></Header>
      <PostAJob/>

      <div className="px-16 py-8">
      <Filter/>
      </div>
     
      <Footer />
    </div>
  );
};

export default JobListingPage;
