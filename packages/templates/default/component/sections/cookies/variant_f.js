import React from "react"

export default function VariantC() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-50">
      <div className="max-w-md mx-4 md:mx-0 md:ml-10 mb-6 pt-8 bg-gray-800 text-white rounded-lg">
        <div className="px-8 text-center">
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
        </div>
        <div className="flex border-t border-gray-700 text-center">
          <a
            className="inline-block w-1/2 py-4 text-sm rounded-bl-lg border-r border-gray-700 font-bold hover:bg-gray-700 transition duration-200"
            href="#"
          >
            Decline Cookies
          </a>
          <a
            className="inline-block w-1/2 py-4 text-sm rounded-br-lg text-green-600 font-bold hover:bg-gray-700 transition duration-200"
            href="#"
          >
            Allow Cookies
          </a>
        </div>
      </div>
    </div>
  )
}
