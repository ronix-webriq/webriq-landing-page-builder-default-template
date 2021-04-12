import React from "react"

export default function VarianB({ caption, title, description, offers }) {
  return (
    <section>
      <div className="skew skew-top mr-for-radius">
        <svg
          className="h-8 md:h-12 lg:h-20 w-full text-gray-50"
          viewBox="0 0 10 10"
          preserveAspectRatio="none"
        >
          <polygon fill="currentColor" points="0 0 10 10 0 10" />
        </svg>
      </div>
      <div className="skew skew-top ml-for-radius">
        <svg
          className="h-8 md:h-12 lg:h-20 w-full text-gray-50"
          viewBox="0 0 10 10"
          preserveAspectRatio="none"
        >
          <polygon fill="currentColor" points="0 10 10 0 10 10" />
        </svg>
      </div>
      <div className="py-20 bg-gray-50 radius-for-skewed">
        <div className="container mx-auto px-4">
          <div className="mb-16 w-full flex flex-wrap items-center">
            <div className="w-full lg:w-1/2">
              <span className="text-green-600 font-bold">{caption}</span>
              <h2 className="mb-2 text-4xl lg:text-5xl font-bold font-heading">
                {title}
              </h2>
            </div>
            <div className="w-full lg:w-1/2">
              <p className="max-w-xs lg:mx-auto text-gray-500 leading-loose">
                {description}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap">
            {offers[0] !== undefined && (
              <div className="mb-8 w-full p-8 flex flex-wrap items-center bg-white rounded shadow">
                <div className="w-full lg:w-1/5 px-3 self-start">
                  <h3 className="mb-4 text-2xl font-bold font-heading">
                    {offers[0].title}
                  </h3>
                </div>
                <div className="w-full lg:w-2/5 px-3">
                  <ul className="mb-4 text-gray-500">
                    <li className="mb-4 flex">
                      <svg
                        className="mr-2 w-5 h-5 text-green-500"
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
                      <span>Vestibulum viverra</span>
                    </li>
                    <li className="mb-4 flex">
                      <svg
                        className="mr-2 w-5 h-5 text-green-500"
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
                      <span>Morbi mollis metus pretium</span>
                    </li>
                    <li className="flex">
                      <svg
                        className="mr-2 w-5 h-5 text-green-500"
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
                      <span>Etiam lectus nunc, commodo</span>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-1/5 px-3 lg:text-center">
                  <span className="text-4xl font-bold">{offers[0].price}</span>
                </div>
                <div className="w-full lg:w-1/5 px-3">
                  <a
                    className="inline-block mt-4 lg:mt-0 py-2 px-6 rounded-l-xl rounded-t-xl bg-green-600 hover:bg-green-700 text-white font-bold leading-loose transition duration-200"
                    href="#"
                  >
                    {offers[0].addButton.displayText}
                  </a>
                </div>
              </div>
            )}
            {offers[1] !== undefined && (
              <div className="mb-8 w-full p-8 flex flex-wrap items-center bg-white rounded shadow">
                <div className="w-full lg:w-1/5 px-3 self-start">
                  <h3 className="mb-4 text-2xl font-bold font-heading">
                    {offers[1].title}
                  </h3>
                </div>
                <div className="w-full lg:w-2/5 px-3">
                  <ul className="mb-4 text-gray-500">
                    <li className="mb-4 flex">
                      <svg
                        className="mr-2 w-5 h-5 text-green-500"
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
                      <span>Vestibulum viverra</span>
                    </li>
                    <li className="mb-4 flex">
                      <svg
                        className="mr-2 w-5 h-5 text-green-500"
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
                      <span>Morbi mollis metus pretium</span>
                    </li>
                    <li className="flex">
                      <svg
                        className="mr-2 w-5 h-5 text-green-500"
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
                      <span>Etiam lectus nunc, commodo</span>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-1/5 px-3 lg:text-center">
                  <span className="text-4xl font-bold">{offers[1].price}</span>
                </div>
                <div className="w-full lg:w-1/5 px-3">
                  <a
                    className="inline-block mt-4 lg:mt-0 py-2 px-6 rounded-l-xl rounded-t-xl bg-green-600 hover:bg-green-700 text-white font-bold leading-loose transition duration-200"
                    href="#"
                  >
                    {offers[1].addButton.displayText}
                  </a>
                </div>
              </div>
            )}
            {offers[2] !== undefined && (
              <div className="w-full p-8 flex flex-wrap items-center bg-white rounded shadow">
                <div className="w-full lg:w-1/5 px-3 self-start">
                  <h3 className="mb-4 text-2xl font-bold font-heading">
                    {offers[2].title}
                  </h3>
                </div>
                <div className="w-full lg:w-2/5 px-3">
                  <ul className="mb-4 text-gray-500">
                    <li className="mb-4 flex">
                      <svg
                        className="mr-2 w-5 h-5 text-green-500"
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
                      <span>Vestibulum viverra</span>
                    </li>
                    <li className="mb-4 flex">
                      <svg
                        className="mr-2 w-5 h-5 text-green-500"
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
                      <span>Morbi mollis metus pretium</span>
                    </li>
                    <li className="flex">
                      <svg
                        className="mr-2 w-5 h-5 text-green-500"
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
                      <span>Etiam lectus nunc, commodo</span>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-1/5 px-3 lg:text-center">
                  <span className="text-4xl font-bold">{offers[2].price}</span>
                </div>
                <div className="w-full lg:w-1/5 px-3">
                  <a
                    className="inline-block mt-4 lg:mt-0 py-2 px-6 rounded-l-xl rounded-t-xl bg-green-600 hover:bg-green-700 text-white font-bold leading-loose transition duration-200"
                    href="#"
                  >
                    {offers[2].addButton.displayText}
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="skew skew-bottom mr-for-radius">
        <svg
          className="h-8 md:h-12 lg:h-20 w-full text-gray-50"
          viewBox="0 0 10 10"
          preserveAspectRatio="none"
        >
          <polygon fill="currentColor" points="0 0 10 0 0 10" />
        </svg>
      </div>
      <div className="skew skew-bottom ml-for-radius">
        <svg
          className="h-8 md:h-12 lg:h-20 w-full text-gray-50"
          viewBox="0 0 10 10"
          preserveAspectRatio="none"
        >
          <polygon fill="currentColor" points="0 0 10 0 10 10" />
        </svg>
      </div>
    </section>
  )
}
