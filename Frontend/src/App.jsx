import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import JobListingPage from "./pages/JobListingPage";
import PostJobPage from "./pages/PostJobPage";
import JobCategoryPage from "./pages/JobCategoryPage";
import CompanyListing from "./pages/CompanyListing";
import JobDetailPage from "./pages/JobDetailPage";
import FaqPages from "./pages/FaqPages";
import ContactUsPage from "./pages/ContactUsPage";
import DashBoardCandi from "./pages/DashBoardCandi";
import CompanyDetailPage from "./pages/CompanyDetailPage";
import EditResumePage from "./pages/EditResumePage";
import PlanSubcriptionpage from "./pages/PlansSubsriptionPage";
import CompanyJobList from "./pages/CompanyJobList";
import CompanyProfilePage from "./pages/CompanyProfilePage";
import CompanyDashboardPage from "./pages/CompanyDashboardPage";
import {store} from "./pages/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signuppage" element={<SignUpPage />} />
        <Route path="/joblisting" element={<JobListingPage />} />
        <Route path="/postjob" element={<PostJobPage />} />
        <Route path="/jobcategory" element={<JobCategoryPage />} />
        <Route path="/companylisting" element={<CompanyListing />} />
        <Route path="/jobDetail" element={<JobDetailPage />} />
        <Route path="/faqpages" element={<FaqPages />} />
        <Route path="/contactus" element={<ContactUsPage />} />
        <Route path="/candidatedashboard" element={<DashBoardCandi />} />
        <Route path="/companydetailpage" element={<CompanyDetailPage />} />
        <Route path="/editresumepage" element={<EditResumePage />} />
        <Route path="/plansubcriptionpage" element={<PlanSubcriptionpage />} />
        <Route path="/companyjoblist" element={<CompanyJobList />} />
        <Route path="/companyprofilepage" element={<CompanyProfilePage />} />
        <Route
          path="/companydashboardpage"
          element={<CompanyDashboardPage />}
        />
      </Routes>
    </Provider>
  );
}

export default App;
