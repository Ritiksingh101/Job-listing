import React from "react";
import Header from "../component/Header";
import Filter from "../component/Filter";
import Footer from "../component/Footer";
import PostAJob from "../component/PostAJob";
function CompanyListing() {
  return (
    <div>
      <Header></Header>
      <PostAJob />
      <div className="px-16 py-8">
        <Filter />
      </div>
      <Footer />
    </div>
  );
}

export default CompanyListing;
