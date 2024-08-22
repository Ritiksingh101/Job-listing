import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 p-12 pl-28">
        {/* About Company */}
        <div>
          <h5 className="text-white font-bold mb-4">About Company</h5>
          <ul>
            <li className="mb-2"><a href="#contact" className="hover:text-teal-500">Contact Us</a></li>
            <li className="mb-2"><a href="#terms" className="hover:text-teal-500">Terms & Condition</a></li>
            <li className="mb-2"><a href="#privacy" className="hover:text-teal-500">Privacy & Policy</a></li>
            <li><a href="#candidate-listing" className="hover:text-teal-500">Candidate Listing</a></li>
          </ul>
        </div>

        {/* For Candidate's */}
        <div>
          <h5 className="text-white font-bold mb-4">For Candidate's</h5>
          <ul>
            <li className="mb-2"><a href="#create-resume" className="hover:text-teal-500">Create Resume</a></li>
            <li className="mb-2"><a href="#browse-categories" className="hover:text-teal-500">Browse Categories</a></li>
            <li className="mb-2"><a href="#save-jobs" className="hover:text-teal-500">Save Jobs List</a></li>
            <li className="mb-2"><a href="#browse-jobs" className="hover:text-teal-500">Browse Jobs</a></li>
            <li><a href="#candidate-dashboard" className="hover:text-teal-500">Candidate Dashboard</a></li>
          </ul>
        </div>

        {/* For Employer's */}
        <div>
          <h5 className="text-white font-bold mb-4">For Employer's</h5>
          <ul>
            <li className="mb-2"><a href="#post-job" className="hover:text-teal-500">Post A Job</a></li>
            <li className="mb-2"><a href="#browse-candidates" className="hover:text-teal-500">Browse Candidates</a></li>
            <li className="mb-2"><a href="#job-packages" className="hover:text-teal-500">Job Packages</a></li>
            <li className="mb-2"><a href="#jobs-featured" className="hover:text-teal-500">Jobs Featured</a></li>
            <li><a href="#employer-dashboard" className="hover:text-teal-500">Employer Dashboard</a></li>
          </ul>
        </div>

        {/* Download App */}
        <div>
          <h5 className="text-white font-bold mb-4">Download App</h5>
          <div className="mb-4">
            <a href="#app-store">
              <img src="https://jobes-nextjs.vercel.app/assets/images/icon/apple-app.svg" alt="App Store" className="h-12" />
            </a>
          </div>
          <div>
            <a href="#google-play">
              <img src="https://jobes-nextjs.vercel.app/assets/images/icon/apple-app.svg" alt="Google Play" className="h-12" />
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-8 flex flex-col md:flex-row justify-center items-center gap-10">
        <div className="flex items-center space-x-4 ">
          <img src="https://jobes-nextjs.vercel.app/assets/images/footer-logo.svg" alt="Logo" className="" />
        </div>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <span className="text-teal-500 font-bold">Support Line:</span>
          <a href="tel:+09903573983465" className="hover:text-teal-500">+099-035 7398 3465</a>
        </div>
      </div>

      <div className="container mx-auto mt-8 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center p-10">
        <div className="text-gray-500">&copy; Copyright 2023 <span className="text-teal-500">JOBES</span> | Design By <a href="#egenstheme" className="hover:text-teal-500">Egenstheme</a></div>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <a href="#privacy-policy" className="hover:text-teal-500">Privacy Policy</a>
          <a href="#terms-of-services" className="hover:text-teal-500">Terms of Services</a>
          <a href="#sitemap" className="hover:text-teal-500">Our Sitemap</a>
        </div>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <span className="text-gray-500">Follow JOBES:</span>
          <a href="#facebook" className="hover:text-teal-500"><i className="fa fa-facebook"></i></a>
          <a href="#twitter" className="hover:text-teal-500"><i className="fa fa-twitter"></i></a>
          <a href="#linkedin" className="hover:text-teal-500"><i className="fa fa-linkedin"></i></a>
          <a href="#instagram" className="hover:text-teal-500"><i className="fa fa-instagram"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
