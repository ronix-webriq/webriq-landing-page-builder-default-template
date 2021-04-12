import React from "react"

export default function VariantC({ caption, title, description, offers }) {
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
          <div className="mb-16 max-w-lg mx-auto text-center">
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
          <div className="flex flex-wrap max-w-4xl mx-auto">
            {offers[0] !== undefined && (
              <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
                <div className="py-8 px-10 max-w-md mx-auto bg-white shadow rounded text-center">
                  <div className="mb-12">
                    <h3 className="mb-4 text-2xl font-bold font-heading">
                      {offers[0].title}
                    </h3>
                    <p className="mb-6 text-gray-500">
                      {offers[0].description}
                    </p>
                  </div>
                  <div>
                    <span className="text-5xl lg:text-6xl font-bold">
                      {offers[0].price}
                    </span>
                    <span className="text-gray-500">/month</span>
                    <a
                      className="block mt-6 w-full py-2 px-6 rounded-l-xl rounded-t-xl bg-green-600 hover:bg-green-700 text-white font-bold leading-loose transition duration-200"
                      href="#"
                    >
                      {offers[0].addButton.displayText}
                    </a>
                  </div>
                </div>
              </div>
            )}
            {offers[1] !== undefined && (
              <div className="w-full lg:w-1/2 px-4">
                <div className="py-8 px-10 max-w-md mx-auto bg-white shadow rounded text-center">
                  <div className="mb-12">
                    <h3 className="mb-4 text-2xl font-bold font-heading">
                      {offers[1].title}
                    </h3>
                    <p className="mb-6 text-gray-500">
                      {offers[1].description}
                    </p>
                  </div>
                  <div>
                    <span className="text-5xl lg:text-6xl font-bold">
                      {offers[1].price}
                    </span>
                    <span className="text-gray-500">/month</span>
                    <a
                      className="block mt-6 w-full py-2 px-6 rounded-l-xl rounded-t-xl bg-green-600 hover:bg-green-700 text-white font-bold leading-loose transition duration-200"
                      href="#"
                    >
                      {offers[1].addButton.displayText}
                    </a>
                  </div>
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
