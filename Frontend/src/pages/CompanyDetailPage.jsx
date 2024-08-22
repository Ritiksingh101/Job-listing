import React from 'react'
import Header from '../component/Header'
import PostAJob from '../component/PostAJob'
import Footer from '../component/Footer'

function CompanyDetailPage() {
  return (
    <div className='flex flex-col gap-10' >
      <Header/>
        <PostAJob/>
        <div className=' w-[100%] flex justify-center items-center'>
        <div className='w-[70%] flex flex-col' >
        <div className="   mx-auto text-[12px]  flex flex-col bg-white rounded-lg overflow-hidden">
        <div className="relative">
        <img 
          src="	https://jobes-nextjs.vercel.app/assets/images/bg/blog-dt-img.png" 
          alt="Company Banner" 
          className="w-full h-[35vh] object-center object-cover" 
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="px-6 py-4 flex justify-between">
        <div >
        <h1 className="text-[17px] font-bold text-gray-900">Elite Hangstroman</h1>
        <div className="flex items-center  gap-3  pl-[5px] mt-2 text-gray-600">
        <i class="fa fa-map-marker text-blue-600" aria-hidden="true"></i>
         <label> Dhaka, Bangladesh</label>
        </div>
        <div className="flex items-center mt-2 text-gray-600">
          <svg className="w-5 h-5 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3.9 12.9l5.7 5.7c.8.8 2 .8 2.8 0l7.9-7.9c.4-.4.6-.9.6-1.4 0-1.1-.9-2-2-2H6.2c-1.1 0-2 .9-2 2 0 .5.2 1 .6 1.4l2.8 2.8-1.4 1.4-2.8-2.8c-.8-.8-2.1-.8-2.8 0s-.8 2.1 0 2.8z"/>
          </svg>
          Category: Software Agency
        </div>
        </div>
        <div>
        <div className="flex  items-center mt-2">
          <a 
            href="https://www.example24.com" 
            className="text-blue-500 hover:underline"
          >
            Website Link: www.example24.com
          </a>
        </div>
        <div className="flex flex-col  items-center mt-2 gap-2 ">
        <div className='w-[100%] flex gap-2 items-center'>
        <i class="fa fa-share-alt text-blue-500" aria-hidden="true"></i>
        <span className="mr-2">Follow Company -</span>
        </div>
          <div className='w-[100%] flex gap-4'>
          <a href="#" className="text-gray-600 hover:text-blue-600 mx-1">
          <i class="fa fa-facebook" aria-hidden="true"></i>
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600 mx-1">
          <i class="fa fa-twitter" aria-hidden="true"></i>
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600 mx-1">
          <i class="fa fa-linkedin" aria-hidden="true"></i>
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600 mx-1">
          <i class="fa fa-instagram" aria-hidden="true"></i>
               </a>
          </div>
         </div>
    </div>
    </div>
      <div className=' w-[100%] flex gap-2 '>
        <div className=' w-[60%]'>
        <div className=" mx-auto px-4 py-8">
        <div className="mb-8 text-[13px]">
        <h2 className="text-xl font-bold mb-4">About Company</h2>
        <p className="text-gray-700">
          A software company is a business that develops and sells computer software. Some software companies specialize in a particular type of software, such as operating systems, productivity tools, or games, while others develop a range of software products. Many software companies also offer services such as custom software development, consulting, and technical support to their customers. The size and scope of software companies can vary greatly, from small startups to large multinational corporations.
        </p>
      </div>
      <div className='text-[12px]'>
        <h2 className="text-xl font-bold mb-4">Working Area</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex items-start">
            <div className="mr-4">
              <img src="https://jobes-nextjs.vercel.app/assets/images/icon/creative-design.svg" alt="Creative Design Icon" className="w-12 h-12" />
            </div>
            <div>
              <h3 className="text-[15px] font-bold">Creative Design</h3>
              <p className="text-gray-600">Creative design is a process that involves creating.</p>
              <span className="text-teal-500 font-bold">01</span>
            </div>
          </div>
          <div className="flex items-start">
            <div className="mr-4">
              <img src="https://jobes-nextjs.vercel.app/assets/images/icon/react-next.svg" alt="React Next.JS Icon" className="w-12 h-12" />
            </div>
            <div>
              <h3 className="text-[15px] font-bold">React Next.JS</h3>
              <p className="text-gray-600">Creative design is a process that involves creating.</p>
              <span className="text-teal-500 font-bold">02</span>
            </div>
          </div>
          <div className="flex items-start">
            <div className="mr-4">
              <img src="https://jobes-nextjs.vercel.app/assets/images/icon/html-tem.svg" alt="HTML Template Icon" className="w-12 h-12" />
            </div>
            <div>
              <h3 className="text-[15px] font-bold">HTML Template</h3>
              <p className="text-gray-600">Creative design is a process that involves creating.</p>
              <span className="text-teal-500 font-bold">03</span>
            </div>
          </div>
          <div className="flex items-start">
            <div className="mr-4">
              <img src="	https://jobes-nextjs.vercel.app/assets/images/icon/wordpress.svg
           " alt="WordPress Icon" className="w-12 h-12" />
            </div>
            <div>
              <h3 className="text-[15px] font-bold">WordPress</h3>
              <p className="text-gray-600">Creative design is a process that involves creating.</p>
              <span className="text-teal-500 font-bold">04</span>
            </div>
          </div>
        </div>
      </div>
       </div>
        </div>
        <div className=' w-[40%] pt-[30px]'>
        <div className=" bg-white border overflow-hidden p-6">
      <div className="mb-6 flex  flex-col gap-4">
        <h2 className="text-xl font-bold mb-4">Company Overview:</h2>
        <ul className="text-gray-700 flex  flex-col gap-3">
          <li className="mb-2">
            <span className="text-teal-500 font-semibold">Company Name: </span>Elite Hangstroman.
          </li>
          <li className="mb-2">
            <span className="text-teal-500 font-semibold">Category: </span>Software Agency.
          </li>
          <li className="mb-2">
            <span className="text-teal-500 font-semibold">Location: </span>Dhaka, Bangladesh.
          </li>
          <li className="mb-2">
            <span className="text-teal-500 font-semibold">Member Since: </span>03 April, 1982.
          </li>
          <li className="mb-2">
            <span className="text-teal-500 font-semibold">Company size: </span>40 People.
          </li>
          <li className="mb-2">
            <span className="text-teal-500 font-semibold">Completed Job: </span>08.
          </li>
          <li className="mb-2">
            <span className="text-teal-500 font-semibold">Last Job Posted: </span>06 January, 2023.
          </li>
        </ul>
      </div>
      <div className="mb-4">
        <button className="w-full bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600">
          Job Available 23
        </button>
      </div>
      <div>
        <button className="w-full bg-white border border-teal-500 text-teal-500  py-2 px-4 rounded-lg hover:bg-teal-50 ">
          Go Our Site Map
        </button>
      </div>
    </div>
        </div>

      </div>
      
    </div>
    </div>
        
    </div>
    <Footer/>
    </div>
  )
}

export default CompanyDetailPage