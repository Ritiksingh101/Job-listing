import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
function PlanInvoiceList() {
  return (
    <div>
      <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Plan & Invoice List:</h1>
          <button className="bg-blue-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-700">
            Upgrade Plan
          </button>
        </div>

        {/* Invoice Table */}
        <table className="min-w-full bg-white rounded-md overflow-hidden">
          <thead>
            <tr className="bg-teal-600 text-white text-left">
              <th className="py-3 px-6 font-semibold text-sm">(#) Number</th>
              <th className="py-3 px-6 font-semibold text-sm">Date</th>
              <th className="py-3 px-6 font-semibold text-sm">Package</th>
              <th className="py-3 px-6 font-semibold text-sm">Amount</th>
              <th className="py-3 px-6 font-semibold text-sm">Payment Through</th>
              <th className="py-3 px-6 font-semibold text-sm">Payment Status</th>
            </tr>
          </thead>
          <tbody>
            {[
              { number: "#83c8h9s88ee4", date: "03/01/2023", package: "Default", amount: "$720", method: "Online Method", status: "Pending", statusColor: "text-orange-500" },
              { number: "#837bg73j833k3", date: "07/01/2023", package: "Default", amount: "$1000", method: "Online Method", status: "Unpaid", statusColor: "text-red-500" },
              { number: "#83c8h9s88ee4", date: "03/01/2023", package: "Default", amount: "$720", method: "Online Method", status: "Paid Fee", statusColor: "text-blue-500" },
              { number: "#83c8h9s88ee4", date: "03/01/2023", package: "Default", amount: "$720", method: "Online Method", status: "Paid Fee", statusColor: "text-blue-500" },
              { number: "#83c8h9s88ee4", date: "03/01/2023", package: "Default", amount: "$720", method: "Online Method", status: "Pending", statusColor: "text-orange-500" },
              { number: "#83c8h9s88ee4", date: "03/01/2023", package: "Default", amount: "$720", method: "Online Method", status: "Pending", statusColor: "text-orange-500" },
              { number: "#83c8h9s88ee4", date: "03/01/2023", package: "Default", amount: "$720", method: "Online Method", status: "Pending", statusColor: "text-orange-500" },
            ].map((invoice, index) => (
              <tr key={index} className="border-b hover:bg-gray-100">
                <td className="py-4 px-6 text-gray-800 font-medium">{invoice.number}</td>
                <td className="py-4 px-6 text-gray-500">{invoice.date}</td>
                <td className="py-4 px-6">
                  <span className="bg-teal-100 text-teal-600 py-1 px-3 rounded-full text-xs">{invoice.package}</span>
                </td>
                <td className="py-4 px-6 text-teal-600 font-medium">{invoice.amount}</td>
                <td className="py-4 px-6 text-gray-500">{invoice.method}</td>
                <td className="py-4 px-6 flex items-center space-x-2">
                  <span className={`${invoice.statusColor} font-medium`}>{invoice.status}</span>
                  <FontAwesomeIcon icon={faDownload} className="text-gray-500 cursor-pointer hover:text-gray-600" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-4">
          <div className="text-gray-500">06 Results Showing in 20 Jobs</div>
          <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faChevronLeft} className="cursor-pointer text-gray-500 hover:text-gray-600" />
            {[1, 2, 3].map((page) => (
              <span key={page} className="cursor-pointer px-2 py-1 text-sm font-medium text-white bg-teal-600 rounded-md">
                {page < 2 ? `0${page}` : page}
              </span>
            ))}
            <FontAwesomeIcon icon={faChevronRight} className="cursor-pointer text-gray-500 hover:text-gray-600" />
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default PlanInvoiceList
