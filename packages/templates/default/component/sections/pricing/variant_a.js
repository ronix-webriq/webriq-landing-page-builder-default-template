import React from "react"

export default function VariantA({ caption, title, description, offers }) {
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
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-green-600 font-bold">{caption}</span>
            <h2 className="mb-2 text-4xl lg:text-5xl font-bold font-heading">
              {title}
            </h2>
            <p className="mb-6 text-gray-500">{description}</p>
            <div className="inline-block py-1 px-1 bg-white rounded-lg">
              <button className="mr-1 text-sm py-2 px-4 text-gray-500 hover:text-gray-900 font-bold">
                Monthly
              </button>
              <button className="text-sm py-2 px-4 text-gray-900 bg-gray-50 rounded-lg shadow font-bold">
                Yearly
              </button>
            </div>
          </div>
          <div className="flex flex-wrap -mx-4">
            {offers[0] !== undefined && (
              <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8 lg:mb-0">
                <div className="p-8 bg-white shadow rounded">
                  <h4 className="mb-2 text-2xl font-bold font-heading">
                    {offers[0].title}
                  </h4>
                  <span className="text-6xl font-bold">{offers[0].price}</span>
                  <span className="text-gray-500">/month</span>
                  <p className="mt-3 mb-6 text-gray-500 leading-loose">
                    {offers[0].description}
                  </p>
                  <ul className="mb-6 text-gray-500">
                    <li className="mb-2 flex">
                      <svg
                        className="mr-2 w-5 h-5 text-green-600"
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
                    <li className="mb-2 flex">
                      <svg
                        className="mr-2 w-5 h-5 text-green-600"
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
                    <li className="mb-2 flex">
                      <svg
                        className="mr-2 w-5 h-5 text-green-600"
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
                    <li className="mb-2 flex">
                      <svg
                        className="mr-2 w-5 h-5 text-green-600"
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
                      <span>Ut quam nisl mollis id pretium</span>
                    </li>
                    <li className="mb-2 flex">
                      <svg
                        className="mr-2 w-5 h-5 text-green-600"
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
                      <span>Suspendisse bibendum</span>
                    </li>
                  </ul>
                  <a
                    className="inline-block text-center py-2 px-4 w-full rounded-l-xl rounded-t-xl bg-green-600 hover:bg-green-700 text-white font-bold leading-loose transition duration-200"
                    href="#"
                  >
                    {offers[0].addButton.displayText}
                  </a>
                </div>
              </div>
            )}
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8 lg:mb-0">
              {offers[1] !== undefined && (
                <div className="p-8 bg-green-600 shadow rounded">
                  <h4 className="mb-2 text-2xl font-bold text-white">
                    {offers[1].title}
                  </h4>
                  <span className="text-6xl font-bold text-white">
                    {offers[1].price}
                  </span>
                  <span className="text-gray-50 text-xs">/month</span>
                  <p className="mt-3 mb-6 leading-loose text-gray-50">
                    {offers[1].description}
                  </p>
                  <ul className="mb-6 text-gray-50">
                    <li className="mb-2 flex">
                      <svg
                        className="mr-2 w-5 h-5 text-green-400"
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
                    <li className="mb-2 flex">
                      <svg
                        className="mr-2 w-5 h-5 text-green-400"
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
                    <li className="mb-2 flex">
                      <svg
                        className="mr-2 w-5 h-5 text-green-400"
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
                    <li className="mb-2 flex">
                      <svg
                        className="mr-2 w-5 h-5 text-green-400"
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
                      <span>Ut quam nisl mollis id pretium</span>
                    </li>
                    <li className="mb-2 flex">
                      <svg
                        className="mr-2 w-5 h-5 text-green-400"
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
                      <span>Suspendisse bibendum</span>
                    </li>
                  </ul>
                  <a
                    className="inline-block text-center py-2 px-4 w-full rounded-l-xl rounded-t-xl bg-white hover:bg-gray-50 font-bold leading-loose transition duration-200"
                    href="#"
                  >
                    {offers[1].addButton.displayText}
                  </a>
                </div>
              )}
            </div>
            {offers[2] !== undefined && (
              <div className="w-full lg:w-1/3 px-4">
                <div className="p-8 bg-white shadow rounded">
                  <h4 className="mb-2 text-2xl font-bold font-heading">
                    {offers[2].title}
                  </h4>
                  <span className="text-6xl font-bold">{offers[2].price}</span>
                  <span className="text-gray-400 text-xs">/month</span>
                  <p className="mt-3 mb-6 text-gray-500 leading-loose">
                    {offers[2].description}
                  </p>
                  <ul className="mb-6 text-gray-500">
                    <li className="mb-2 flex">
                      <svg
                        className="mr-2 w-5 h-5 text-green-600"
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
                    <li className="mb-2 flex">
                      <svg
                        className="mr-2 w-5 h-5 text-green-600"
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
                    <li className="mb-2 flex">
                      <svg
                        className="mr-2 w-5 h-5 text-green-600"
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
                    <li className="mb-2 flex">
                      <svg
                        className="mr-2 w-5 h-5 text-green-600"
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
                      <span>Ut quam nisl mollis id pretium</span>
                    </li>
                    <li className="mb-2 flex">
                      <svg
                        className="mr-2 w-5 h-5 text-green-600"
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
                      <span>Suspendisse bibendum</span>
                    </li>
                  </ul>
                  <a
                    className="inline-block text-center py-2 px-4 w-full rounded-l-xl rounded-t-xl bg-green-600 hover:bg-green-700 text-white font-bold leading-loose transition duration-200"
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
