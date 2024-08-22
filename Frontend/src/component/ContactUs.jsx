import React from 'react';

const ContactUs = () => {
  return (
    <div className="container mx-auto p-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Need Any Help? Contact Us</h2>
        <p className="text-gray-600 mt-2">Alternatively, you can also check for the Company email, phone number, and address on the official website.</p>
        <div className="text-teal-500 mt-4">
          <i className="fas fa-phone-alt"></i> Support Line: +099-035 7398 3465
        </div>
        <p className="text-red-600">Our Customer Service Available from 9 am to 6 pm (Saturday to Thursday)</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        <div>
          <h3 className="text-xl font-bold mb-4">Main Office</h3>
          <div className="bg-white p-6 rounded shadow">
            <h4 className="text-lg font-bold">Dhaka, Bangladesh</h4>
            <p className="text-gray-700">+880-187 346 8987</p>
            <p className="text-gray-700">Mirpur DOSH, Avenue-01, Road-02, House-147/148</p>
            <div className="mt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902357246897!2d90.38696501498154!3d23.75096308459088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c13b5c6e4c4d%3A0xb0e6fdfd3d812e6d!2sEgens%20Lab!5e0!3m2!1sen!2sbd!4v1653346096954!5m2!1sen!2sbd"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Dhaka Office Location"
              ></iframe>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Office-01</h3>
          <div className="bg-white p-6 rounded shadow">
            <h4 className="text-lg font-bold">New York, USA</h4>
            <p className="text-gray-700">+981-187 346 8987</p>
            <p className="text-gray-700">New York, Avenue-01, Block-B, House-140/142</p>
            <div className="mt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902357246897!2d90.38696501498154!3d23.75096308459088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c13b5c6e4c4d%3A0xb0e6fdfd3d812e6d!2sEgens%20Lab!5e0!3m2!1sen!2sbd!4v1653346096954!5m2!1sen!2sbd"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="New York Office Location"
              ></iframe>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Office-02</h3>
          <div className="bg-white p-6 rounded shadow">
            <h4 className="text-lg font-bold">London City, UK</h4>
            <p className="text-gray-700">+998-737 346 898</p>
            <p className="text-gray-700">West London, Avenue-05, Block No-C, House-08/10</p>
            <div className="mt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902357246897!2d90.38696501498154!3d23.75096308459088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c13b5c6e4c4d%3A0xb0e6fdfd3d812e6d!2sEgens%20Lab!5e0!3m2!1sen!2sbd!4v1653346096954!5m2!1sen!2sbd"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="London Office Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white p-8 rounded shadow">
        <h3 className="text-xl font-bold mb-4">Contact Us</h3>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Your Name</label>
            <input type="text" className="mt-1 p-2 w-full border rounded" placeholder="Mr. Jackson Mile" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" className="mt-1 p-2 w-full border rounded" placeholder="info@example.com" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone</label>
            <input type="tel" className="mt-1 p-2 w-full border rounded" placeholder="+880-17 *** *** **" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Company Name (Optional)</label>
            <input type="text" className="mt-1 p-2 w-full border rounded" placeholder="Company Name" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea className="mt-1 p-2 w-full border rounded" rows="5" placeholder="Message..."></textarea>
          </div>
          <div className="md:col-span-2 text-center">
            <button type="submit" className="px-4 py-2 bg-teal-500 text-white rounded">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
