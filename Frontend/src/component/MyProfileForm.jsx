import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faUpload, faEnvelope, faMapMarkerAlt, faBuilding, faUsers, faGlobe, faInfoCircle, faBriefcase } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faPinterest,
  faDribbble,
  faBehance,
} from "@fortawesome/free-brands-svg-icons";

function MyProfileForm() {
  return (
    <div className='py-[3%]'>
       <div className="p-8 bg-white shadow-lg rounded-lg max-w-4xl mx-auto mt-10">
      <h1 className="text-3xl font-extrabold mb-8 text-center text-[#14B8A6]">My Profile</h1>
      
      {/* Company Information Section */}
      <h2 className="text-2xl font-bold mb-4 text-gray-700">Company Information</h2>
      <form>
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div className="relative">
            <label className="block text-sm font-medium mb-1">Company Name*</label>
            <FontAwesomeIcon icon={faBuilding} className="absolute left-3 top-1/2 transform  text-gray-400" />
            <input
              type="text"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm pl-10 py-2 outline-none"
              placeholder="Company Name"
            />
          </div>
          <div className="relative">
            <label className="block text-sm font-medium mb-1">Company Type*</label>
            <FontAwesomeIcon icon={faBriefcase} className="absolute left-3 top-1/2 transform  text-gray-400" />
            <select className="mt-1 block w-full border-gray-300 rounded-md shadow-sm pl-10 py-2 outline-none">
              <option>Digital Agency</option>
              <option>Digital Market Agency</option>
              <option>Software Company</option>
              {/* Other options can be added here */}
            </select>
          </div>

          <div className="relative">
            <label className="block text-sm font-medium mb-1">Company Size*</label>
            <FontAwesomeIcon icon={faUsers} className="absolute left-3 top-1/2 transform  text-gray-400" />
            <input
              type="text"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm pl-10 py-2 outline-none"
              placeholder="Company Size"
            />
          </div>
          <div className="relative">
            <label className="block text-sm font-medium mb-1">Email*</label>
            <FontAwesomeIcon icon={faEnvelope} className="absolute left-3 top-1/2 transform  text-gray-400" />
            <input
              type="email"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm pl-10 py-2 outline-none"
              placeholder="Email"
            />
          </div>

          <div className="relative">
            <label className="block text-sm font-medium mb-1">Location*</label>
            <FontAwesomeIcon icon={faMapMarkerAlt} className="absolute left-3 top-1/2 transform  text-gray-400" />
            <input
              type="text"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm pl-10 py-2 outline-none"
              placeholder="Location"
            />
          </div>
          <div className="relative">
            <label className="block text-sm font-medium mb-1">Website Link*</label>
            <FontAwesomeIcon icon={faGlobe} className="absolute left-3 top-1/2 transform  text-gray-400" />
            <input
              type="url"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm pl-10 py-2 outline-none"
              placeholder="Website Link"
            />
          </div>
        </div>

        {/* Social Links Section */}
        <h2 className="text-2xl font-bold mb-4 text-gray-700">Social Links</h2>
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div className="relative">
            <label className="block text-sm font-medium mb-1">Facebook</label>
            <FontAwesomeIcon icon={faFacebook} className="absolute left-3 top-1/2 transform  text-blue-600" />
            <input
              type="url"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm pl-10 py-2 outline-none"
              placeholder="Facebook"
            />
          </div>
          <div className="relative">
            <label className="block text-sm font-medium mb-1">Twitter</label>
            <FontAwesomeIcon icon={faTwitter} className="absolute left-3 top-1/2 transform  text-blue-400" />
            <input
              type="url"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm pl-10 py-2 outline-none"
              placeholder="Twitter"
            />
          </div>
          <div className="relative">
            <label className="block text-sm font-medium mb-1">LinkedIn</label>
            <FontAwesomeIcon icon={faLinkedin} className="absolute left-3 top-1/2 transform  text-blue-700" />
            <input
              type="url"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm pl-10 py-2 outline-none"
              placeholder="LinkedIn"
            />
          </div>
          <div className="relative">
            <label className="block text-sm font-medium mb-1">Pinterest</label>
            <FontAwesomeIcon icon={faPinterest} className="absolute left-3 top-1/2 transform  text-red-500" />
            <input
              type="url"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm pl-10 py-2 outline-none"
              placeholder="Pinterest"
            />
          </div>
          <div className="relative">
            <label className="block text-sm font-medium mb-1">Dribbble</label>
            <FontAwesomeIcon icon={faDribbble} className="absolute left-3 top-1/2 transform  text-pink-500" />
            <input
              type="url"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm pl-10 py-2 outline-none"
              placeholder="Dribbble"
            />
          </div>
          <div className="relative">
            <label className="block text-sm font-medium mb-1">Behance</label>
            <FontAwesomeIcon icon={faBehance} className="absolute left-3 top-1/2 transform  text-blue-800" />
            <input
              type="url"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm pl-10 py-2 outline-none"
              placeholder="Behance"
            />
          </div>
        </div>

        {/* Logo and Cover Photo Section */}
        <h2 className="text-2xl font-bold mb-4 text-gray-700">Logo and Cover Photo</h2>
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium mb-2">Company Logo:</label>
            <div className="flex items-center">
              <span className="inline-block h-16 w-16 rounded-full overflow-hidden bg-gray-100">
                <svg
                  className="h-full w-full text-gray-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M24 24H0V0h24v24z"
                    fill="none"
                  />
                  <path
                    d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                  />
                </svg>
              </span>
              <button
                type="button"
                className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 flex items-center"
              >
                <FontAwesomeIcon icon={faUpload} className="mr-2" />
                Upload Logo Image
              </button>
            </div>
            <p className="mt-2 text-sm text-gray-500">
              Maximum file size: 2MB.
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Company Cover Photo:</label>
            <div className="flex items-center">
              <button
                type="button"
                className="bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 flex items-center"
              >
                <FontAwesomeIcon icon={faUpload} className="mr-2" />
                Upload Cover Image
              </button>
            </div>
            <p className="mt-2 text-sm text-gray-500">
              Maximum file size: 5MB.
            </p>
          </div>
        </div>

        {/* Working Area Section */}
        <h2 className="text-2xl font-bold mb-4 text-gray-700">Working Area</h2>
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Working Field*</label>
          <div className="relative">
            <FontAwesomeIcon icon={faBriefcase} className="absolute left-3 top-1/2 transform  text-gray-400" />
            <input
              type="text"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm pl-10 py-2"
              placeholder="Frontend Developer"
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Short Description*</label>
          <div className="relative">
            <FontAwesomeIcon icon={faInfoCircle} className="absolute left-3 top-3 text-gray-400" />
            <textarea
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm pl-10 py-2"
              rows="3"
              placeholder="Company Details"
            ></textarea>
          </div>
        </div>

        <div className="flex justify-between items-center mt-8">
          <button
            type="button"
            className="bg-blue-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-700"
          >
            Add Education
          </button>

          <button
            type="submit"
            className="bg-[#00A7AC] text-white py-2 px-4 rounded-md shadow-sm hover:bg-black"
          >
            Update Change
          </button>
        </div>
      </form>
    </div>
    </div>
  )
}

export default MyProfileForm
