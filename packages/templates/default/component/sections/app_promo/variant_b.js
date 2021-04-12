import React from "react"

export default function VarianB() {
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
          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-1/2 px-4">
              <div className="max-w-md">
                <span className="text-green-600 font-bold">
                  Dolor sit amet consectutar
                </span>
                <h2 className="text-4xl lg:text-5xl font-bold font-heading">
                  Build &amp; Launch without problems
                </h2>
                <p className="mb-16 text-gray-500 leading-loose">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque efficitur nisl sodales egestas lobortis.
                </p>
                <div className="flex flex-wrap">
                  <div className="mb-8 w-full lg:w-1/2">
                    <h4 className="text-gray-500">Total Revenue</h4>
                    <span className="text-3xl lg:text-4xl font-bold">
                      $33,261
                    </span>
                  </div>
                  <div className="mb-8 w-full lg:w-1/2">
                    <h4 className="text-gray-500">Subscribers</h4>
                    <span className="text-3xl lg:text-4xl font-bold">
                      481,095
                    </span>
                  </div>
                  <div className="mb-8 w-full lg:w-1/2">
                    <h4 className="text-gray-500">Modal Sale Rate</h4>
                    <span className="text-3xl lg:text-4xl font-bold">25%</span>
                  </div>
                  <div className="mb-8 w-full lg:w-1/2">
                    <h4 className="text-gray-500">Conversations</h4>
                    <span className="text-3xl lg:text-4xl font-bold">
                      643,533
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-center w-full lg:w-1/2 px-4">
              <button className="order-1 xl:order-0 mr-12 inline-block p-6 bg-white rounded-full shadow text-green-600 hover:text-green-400 focus:outline-none">
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
              </button>
              <div className="w-full xl:w-auto order-0 xl:order-1">
                <img
                  className="mx-auto mb-8 xl:mb-0"
                  src="atis-assets/illustrations/book-detail-full.png"
                  alt=""
                />
              </div>
              <button className="order-2 xl:order-2 ml-12 inline-block p-6 bg-white rounded-full shadow text-green-600 hover:text-green-400 focus:outline-none">
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>
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
