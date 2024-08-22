import React from "react";

const FeaturedJobs = () => {
  const jobs = [
    {
      title: "React JS Developer",
      type: "Full Time, Part Time",
      salary: "$80-$110 /Per month",
      vacancy: "07 Person (Both)",
      deadline: "02 March, 2023",
      logo: "https://jobes-nextjs.vercel.app/assets/images/bg/company-logo/company-01.png",
    },
    {
      title: "Assistant Laboratorist",
      type: "Full Time, Part Time",
      salary: "$30-$40 /Per month",
      vacancy: "05 Person (Both)",
      deadline: "02 March, 2023",
      logo: "https://jobes-nextjs.vercel.app/assets/images/bg/company-logo/company-02.png",
    },
    {
      title: "Senior Receptionist",
      type: "Full Time, Part Time",
      salary: "$60-$90 /Per month",
      vacancy: "07 Person (Female)",
      deadline: "03 March, 2023",
      logo: "https://jobes-nextjs.vercel.app/assets/images/bg/company-logo/company-03.png",
    },
    {
      title: "Senior WordPress Developer",
      type: "Part Time, Remote",
      salary: "$60-$80 /Per month",
      vacancy: "03 Person (Male)",
      deadline: "04 March, 2023",
      logo: "https://jobes-nextjs.vercel.app/assets/images/bg/company-logo/company-05.png",
    },
    {
      title: "Manager (HR)",
      type: "Full Time, Part Time",
      salary: "$60-$76 /Per month",
      vacancy: "01 Person (Both)",
      deadline: "05 March, 2023",
      logo: "https://jobes-nextjs.vercel.app/assets/images/bg/company-logo/company-06.png",
    },
    {
      title: "UI/UX Designer",
      type: "Full Time, Part Time",
      salary: "$60-$70 /Per month",
      vacancy: "03 Person (Both)",
      deadline: "02 March, 2023",
      logo: "https://jobes-nextjs.vercel.app/assets/images/bg/company-logo/company-04.png",
    },
  ];

  return (
    <section className=" p-24 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12 flex flex-col justify-center items-start gap-7 ">
        <h1 className='text-[35px] font-bold'>Latest <span className='text-[#00A7AC]'>Featured</span> Jobs</h1>

         
          <p className="text-gray-600">
            To choose your trending job dream & to make future bright.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg border hover:border-teal-500 transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <img src={job.logo} alt={job.title} className="h-12 w-12 rounded-full mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{job.title}</h3>
                  <p className="text-sm text-gray-600">{job.type}</p>
                </div>
              </div>
              <div className="text-sm text-gray-600">
                <p className="mb-2">💰 Salary: <span className="text-gray-800 font-medium">{job.salary}</span></p>
                <p className="mb-2">👥 Vacancy: <span className="text-gray-800 font-medium">{job.vacancy}</span></p>
                <p className="mb-4">📅 Deadline: <span className="text-gray-800 font-medium">{job.deadline}</span></p>
              </div>
              <a
                href="#apply-now"
                className="text-teal-500 font-semibold hover:underline"
              >
                ➤ Apply Now
              </a>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <a
            href="#explore-more"
            className="text-teal-500 font-semibold hover:underline flex items-center justify-center"
          >
            Explore More ➤
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;
