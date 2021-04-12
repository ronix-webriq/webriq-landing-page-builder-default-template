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
          <div className="flex flex-wrap items-center">
            <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
              <div className="max-w-md">
                <span className="text-green-600 font-bold">
                  Dolor sit amet consectutar
                </span>
                <h2 className="mb-2 text-4xl lg:text-5xl font-bold font-heading">
                  Build &amp; Launch without problems
                </h2>
                <div className="max-w-xs">
                  <p className="text-gray-500 leading-loose">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque efficitur nisl sodales egestas lobortis.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="mb-12 lg:mb-8 flex flex-wrap items-start">
                <span className="mb-4 lg:mb-0 lg:mr-6 inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded text-green-600 text-2xl font-bold">
                  1
                </span>
                <div className="w-full lg:w-3/4">
                  <h3 className="mb-4 text-2xl font-bold font-heading">
                    Lorem ipsum dolor sit amet consectutar
                  </h3>
                  <p className="text-gray-500 leading-loose">
                    Fusce quam tellus, placerat eu metus ut, viverra aliquet
                    purus. Suspendisse potenti. Nulla non nibh feugiat.
                  </p>
                </div>
              </div>
              <div className="mb-12 lg:mb-8 flex flex-wrap items-start">
                <span className="mb-4 lg:mb-0 lg:mr-6 inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded text-green-600 text-2xl font-bold">
                  2
                </span>
                <div className="w-full lg:w-3/4">
                  <h3 className="mb-4 text-2xl font-bold font-heading">
                    Lorem ipsum dolor sit amet consectutar
                  </h3>
                  <p className="text-gray-500 leading-loose">
                    Fusce quam tellus, placerat eu metus ut, viverra aliquet
                    purus. Suspendisse potenti. Nulla non nibh feugiat.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap items-start">
                <span className="mb-4 lg:mb-0 lg:mr-6 inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded text-green-600 text-2xl font-bold">
                  3
                </span>
                <div className="w-full lg:w-3/4">
                  <h3 className="mb-4 text-2xl font-bold font-heading">
                    Lorem ipsum dolor sit amet consectutar
                  </h3>
                  <p className="text-gray-500 leading-loose">
                    Fusce quam tellus, placerat eu metus ut, viverra aliquet
                    purus. Suspendisse potenti. Nulla non nibh feugiat.
                  </p>
                </div>
              </div>
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
