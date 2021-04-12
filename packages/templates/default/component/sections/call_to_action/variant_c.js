import React from "react"

export default function VariantC() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
            <h2 className="text-4xl lg:text-5xl font-bold font-heading">
              Many usefull features
            </h2>
            <p className="max-w-lg text-gray-500 leading-loose">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque efficitur nisl sodales egestas lobortis.
            </p>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <div className="mb-4 flex items-center lg:justify-end">
              <form action>
                <input
                  className="mr-2 py-2 px-4 bg-white rounded leading-loose"
                  type="email"
                  placeholder="hello@example.com"
                />
                <button className="inline-block py-2 px-6 bg-green-600 hover:bg-green-700 text-white font-bold leading-loose rounded-l-xl rounded-t-xl transition duration-200">
                  Get Started
                </button>
              </form>
            </div>
            <div>
              <ul className="flex items-center lg:justify-end text-gray-500">
                <li className="mr-4 flex items-center">
                  <span>
                    <svg
                      className="mr-2 w-6 h-6 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span>No credit card needed</span>
                </li>
                <li className="flex items-center">
                  <span>
                    <svg
                      className="mr-2 w-6 h-6 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span>Easy to use</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
