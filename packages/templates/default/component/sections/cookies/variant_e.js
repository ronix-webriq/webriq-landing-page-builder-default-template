import React from "react"

export default function VariantC() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-50">
      <div className="max-w-md mx-4 md:mx-0 md:ml-10 mb-6 p-8 bg-gray-800 text-white rounded-lg">
        <div className="text-center">
          <p className="font-bold font-heading">Cookie Policy</p>
          <p className="mb-5 mt-3 mb-6 text-gray-400 text-sm">
            We use{" "}
            <a
              className="text-green-600 hover:text-green-700 underline"
              href="#"
            >
              cookies
            </a>{" "}
            to personalise content, to provide social media features and to
            analyse our traffic.
          </p>
          <a
            className="inline-block mr-3 py-2 px-4 rounded-l-xl rounded-t-xl border-2 border-green-600 hover:border-green-700 bg-green-600 hover:bg-green-700 transition duration-200"
            href="#"
          >
            Allow
          </a>
          <a
            className="inline-block py-2 px-4 rounded-r-xl rounded-t-xl border-2 border-gray-400 hover:bg-gray-700 transition duration-200"
            href="#"
          >
            Decline
          </a>
        </div>
      </div>
    </div>
  )
}
