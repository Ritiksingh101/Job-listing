import React from "react";
import Header from '../component/Header'
import PostAJob from '../component/PostAJob'
import Footer from '../component/Footer'
function JobDetail() {
  return (
    <div>
    <Header/>
    <PostAJob/>
    <div className="flex  gap-2 px-[50px] py-[5%]">
      <div className=" w-[100%] flex  text-[12px] flex-col gap-2">
        <div className="w-[100%] flex gap-2  justify-center ">
          <div className=" flex w-[30%] items-center gap-3 pl-[23px]">
            <img
              className="h-[30px] w-[30px] rounded-full"
              src="https://jobes-nextjs.vercel.app/assets/images/bg/company-logo/company-01.png"
            ></img>
            <div className="flex flex-col">
              <label className="font-bold">Senior UI &UX Engineer</label>
              <label className="text-gray-400 font-semibold">Bistro.Tech Group Ltd</label>
            </div>
          </div>
          <div className="w-[35%]  flex flex-col p-[10px] ">
            <div className="flex items-center gap-2">
              <i class="fa fa-map-marker text-[#00A7AC]" aria-hidden="true"></i>
              <h1 className="font-semibold">Location: <span className="text-gray-400">Dhaka,Bangladesh</span></h1>
            </div>
            <div className="flex items-center gap-2">
              <i class="fa fa-square-o text-[#00A7AC]" aria-hidden="true"></i>
              <h1 className="font-semibold">Category: <span className="text-gray-400">Creative Design</span></h1>
            </div>
          </div>
          <div className="w-[35%]  flex flex-col p-[10px] ">
            <div className="flex items-center gap-2">
              <i
                class="fa fa-envelope-o  text-[#00A7AC]"
                aria-hidden="true"
              ></i>
              <h1 className="font-semibold">job type: <span className="text-gray-400">Full Time</span></h1>
            </div>
            <div className="flex items-center gap-2">
              <i class="fa fa-money  text-[#00A7AC]" aria-hidden="true"></i>
              <h1 className="font-semibold">Salary: <span className="text-gray-400">$40k-$78K/per Month</span></h1>
            </div>
          </div>
        </div>
        <div className="p-6  w-[100%]  text-[13px] text-gray-800">
          <h1 className="text-2xl font-bold mb-4 text-[18px]">
            Job Description:
          </h1>
          <p className="mb-4">
            A UI/UX (User Interface/User Experience) designer is responsible for
            designing and creating engaging and effective interfaces for
            software and web applications. This includes designing the layout,
            visual design, and interactivity of the user interface.
          </p>

          <h2 className="text-[18px]  mb-2 font-bold">Job Responsibility:</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              Collaborating with cross-functional teams: UI/UX designers often
              work closely with other teams, including product management,
              engineering, and marketing, to ensure that the user interface is
              aligned with business and technical requirements. You will need to
              be able to effectively communicate your design ideas and gather
              feedback from other team members.
            </li>
            <li>
              Conducting user research and testing to understand user needs and
              behaviors.
            </li>
            <li>
              Designing wireframes, prototypes, and high-fidelity mockups.
            </li>
            <li>Developing and maintaining design systems and style guides.</li>
            <li>
              Collaborating with cross-functional teams, including product
              management, engineering, and marketing.
            </li>
            <li>
              Staying up-to-date with the latest design trends and technologies.
            </li>
            <li>
              Gathering and analyzing user requirements to inform the design of
              new software or web applications.
            </li>
          </ul>
          <h2 className="text-[18px] font-bold mb-2">Educational Requirements:</h2>
          <ul className="list-disc list-inside mb-4">
            <li>Bachelor degree to complete any reputational university.</li>
            <li>Bachelor degree to complete any reputational university.</li>
          </ul>

          <h2 className="text-[18px] font-bold mb-2">Experiences:</h2>
          <p className="mb-4">2-3 Years in this field.</p>

          <h2 className="text-[18px] font-bold mb-2">Main Duties:</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              Gathering and analyzing user requirements to inform the design of
              new software or web applications.
            </li>
            <li>
              Designing the layout, visual design, and interactivity of the user
              interface.
            </li>
            <li>
              Developing and maintaining design systems and style guides to
              ensure consistency in the user experience.
            </li>
            <li>
              Collaborating with cross-functional teams, including product
              management, engineering, and marketing, to ensure that the user
              interface is aligned with business and technical requirements.
            </li>
          </ul>
          <h2 className="text-[18px] font-bold mb-2">Extra Benefits:</h2>
          <ul className="list-disc list-inside mb-4">
            <li>Any health care.</li>
            <li>Yearly performance bonus.</li>
            <li>Flexibility & remote working.</li>
            <li>Two days off weekly.</li>
          </ul>
        </div>
      </div>
      <div className="w-[45%] flex flex-col gap-3 ">
        <div className="w-[100%] flex gap-2 ">
          <div className="h-[6vh] w-[40%]   flex gap-2 justify-center items-center ">
            <label className="hover: text-[#00A7AC]">SaveJob</label>
            <div className="h-[30px] w-[30px] hover:bg-[#00A7AC] text-white rounded-full flex justify-center items-center bg-gray-400">
              <i class="fa fa-bookmark" aria-hidden="true"></i>
            </div>
          </div>
          <div></div>
          <button  class="group  relative w-40  overflow-hidden border border-[#00A7AC] bg-white text-[#00A7AC]  transition-all before:absolute before:left-0 before:top-0 before:h-0 before:w-1/4 before:bg-[#00A7AC] before:duration-500 after:absolute after:bottom-0 after:right-0 after:h-0 after:w-1/4 after:bg-[#00A7AC] after:duration-500 hover:text-white hover:before:h-full hover:after:h-full">
            <span class="top-0 flex h-full w-full items-center justify-center before:absolute before:bottom-0 before:left-1/4 before:z-0 before:h-0 before:w-1/4 before:bg-[#00A7AC] before:duration-500 after:absolute after:right-1/4 after:top-0 after:z-0 after:h-0 after:w-1/4 after:bg-[#00A7AC] after:duration-500 hover:text-white group-hover:before:h-full group-hover:after:h-full"></span>
            <span class="absolute bottom-0 left-4 right-0 top-0 z-10 flex h-[5vh] w-[70%] items-center justify-center group-hover:text-white pl-[20px] text-[14px]">
              Apply Position
            </span>
          </button>{" "}
        </div>
        <div className="h-[1px] w-[100%]bg-[#00A7AC]"></div>
        <div className="p-6 h-[120vh] rounded-md text-[13px] text-gray-800">
          <h2 className="text-lg font-bold mb-4">Job Summary:</h2>
          <ul className="list-none mb-4 space-y-2">
            <li>
              <span className="font-semibold">Job Title:</span> Senior UI/UX
              Engineer
            </li>
            <li>
              <span className="font-semibold">Vacancy:</span> 07 Person
            </li>
            <li>
              <span className="font-semibold">Experiences:</span> 2-3 Years.
            </li>
            <li>
              <span className="font-semibold">Job Category:</span> Creative
              Design
            </li>
            <li>
              <span className="font-semibold">Job Type:</span> Full-Time
            </li>
            <li>
              <span className="font-semibold">Salary:</span> 40K-$78K/Per Month
            </li>
            <li>
              <span className="font-semibold">Deadline:</span> 02/02/2023
            </li>
          </ul>
          <div className="mb-4 flex gap-2 items-center">
            <i class="fa fa-briefcase   text-[#00A7AC] " aria-hidden="true"></i>

            <a href="#" className=" text-[#00A7AC] underline">
              View All Jobs In This Company
            </a>
          </div>
          <div className="flex space-x-4 mb-4 pl-[15px] items-center ">
            <label>job link share:</label>
            <div className="h-[30px] w-[30px] rounded-full border text-[#00A7AC] border-[#00A7AC] flex justify-center items-center">
              <i class="fa fa-facebook-official" aria-hidden="true"></i>
            </div>
            <div className="h-[30px] w-[30px] rounded-full border border-[#00A7AC] text-[#00A7AC] flex justify-center items-center">
              <i class="fa fa-twitter-square" aria-hidden="true"></i>
            </div>
            <div className="h-[30px] w-[30px] rounded-full border border-[#00A7AC] text-[#00A7AC] flex justify-center items-center">
              <i class="fa fa-linkedin-square" aria-hidden="true"></i>
            </div>
            <div className="h-[30px] w-[30px] rounded-full border border-[#00A7AC] text-[#00A7AC]  flex justify-center items-center">
              <i class="fa fa-camera-retro" aria-hidden="true"></i>
            </div>
          </div>
          <div className="p-4 bg-gray-100 rounded-md text-center">
            <a
              href="mailto:info@example.com"
              className=" text-[#00A7AC] font-semibold"
            >
              Email Now
            </a>
            <p>
              Send your resume at{" "}
              <a href="mailto:info@example.com" className=" text-[#00A7AC]">
                info@example.com
              </a>
            </p>
          </div>
          <div className="h-[20vh] w-[100%] p-[20px] flex flex-col ">
            <label>Get Location</label>
            <div className="h-[30vh] w-[30%]"></div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
}
export default JobDetail;