import React from "react"

export default function VariantA() {
  return (
    <div className="fixed top-0 inset-x-0 z-50">
      <div className="py-6 bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4 items-center">
            <div className="w-full lg:w-3/4 px-4">
              <p className="font-bold font-heading">Cookie Policy</p>
              <p className="mt-3 mb-6 text-gray-400 text-sm">
                We use cookies to personalise content, to provide social media
                features and to analyse our traffic. We also share information
                about your use of our site with our social media, advertising
                and analytics partners. If you want to change your cookie
                setting, please see the ‘how to reject cookies section of our .
                Otherwise, if you agree to our use of cookies, please continue
                to use our website.
              </p>
            </div>
            <div className="w-full lg:w-1/4 px-4 lg:text-right">
              <a
                className="inline-block mr-4 py-2 px-4 rounded-l-xl rounded-t-xl border-2 border-purple-600 hover:border-purple-700 bg-purple-600 hover:bg-purple-700 transition duration-200"
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
      </div>
    </div>
  )
}
