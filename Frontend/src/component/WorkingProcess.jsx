import React from "react";
import "tailwindcss/tailwind.css";

const WorkingProcess = () => {
  const processes = [
    {
      title: "Account Create",
      description: "To create your account be confident & safely.",
      icon: "https://jobes-nextjs.vercel.app/assets/images/icon/account-create.svg", // Replace with actual path
    },
    {
      title: "Create Resume",
      description: "To create your account be confident & safely.",
      icon: "https://jobes-nextjs.vercel.app/assets/images/icon/create-resume.svg", // Replace with actual path
    },
    {
      title: "Find Jobs",
      description: "To create your account be confident & safely.",
      icon: "https://jobes-nextjs.vercel.app/assets/images/icon/job-find.svg", // Replace with actual path
    },
    {
      title: "Apply Jobs",
      description: "To create your account be confident & safely.",
      icon: "https://jobes-nextjs.vercel.app/assets/images/icon/job-apply.svg", // Replace with actual path
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container flex flex-col item mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          JOBES Working <span className="text-[#00A7AC]">Process</span>
        </h2>
        <p className="text-gray-600 mb-12">
          To choose your trending job dream & to make future bright.
        </p>
        <div className="flex justify-center items-center space-x-6 ">
          {processes.map((process, index) => (
            <div className="flex flex-col items-center">
              <div className="h-64 w-64 bg-[#E5F6F7] rounded-full flex items-center flex-col justify-center mb-4 p-2   border-2 border-transparent hover:border-teal-500 transition-all duration-300 ease-in-out">
                <img
                  src={process.icon}
                  alt={process.title}
                  className="h-16 w-16"
                />
                <h3 className="text-lg font-semibold text-gray-800">
                  {process.title}
                </h3>
                <p className="text-sm text-gray-600 mt-2 text-center">
                  {process.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;
