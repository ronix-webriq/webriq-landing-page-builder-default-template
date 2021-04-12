import React from "react"

export default function VariantC() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-50">
      <div className="max-w-md lg:max-w-3xl mx-4 md:mx-0 md:ml-10 mb-6 py-6 pl-6 pr-16 bg-gray-800 text-white rounded-lg">
        <div className="flex flex-wrap items-center -mx-4">
          <div className="w-full lg:w-1/2 px-4">
            <p className="font-bold font-heading">Cookie Policy</p>
            <p className="mb-4 mt-3 mb-6 text-gray-400 text-sm">
              We use{" "}
              <a className="text-green-600 underline" href="#">
                cookies
              </a>{" "}
              to personalise content, to provide social media features and to
              analyse our traffic.
            </p>
          </div>
          <div className="w-full lg:w-1/2 px-4 lg:text-right">
            <a
              className="mr-4 py-2 px-4 rounded-l-xl rounded-t-xl border-2 border-green-600 hover:border-green-700 bg-green-600 hover:bg-green-700 transition duration-200"
              href="#"
            >
              Allow
            </a>
            <a
              className="py-2 px-4 rounded-r-xl rounded-t-xl border-2 border-gray-400 hover:bg-gray-700 transition duration-200"
              href="#"
            >
              Decline
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
