import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import CompanyDashboard from "../component/CandidateDashBoard";
import Sidebar from "../component/Sidebar";
import UserProfile from "../component/UserProfile";
import JobTable from "../component/JobTable";
import RecentActivity from "../component/RecentActivity";

function DashBoardCandi() {
  return (
    <div>
      <Header />
      <div className="p-16 flex justify-center ">
     <div className="flex flex-col items-center ">
     <Sidebar/>
     <RecentActivity/>
      </div> 
      <div>
      <UserProfile/>
      <JobTable/>
      </div>
     
      </div>
     
      <Footer />

    </div>
  );
}

export default DashBoardCandi;
