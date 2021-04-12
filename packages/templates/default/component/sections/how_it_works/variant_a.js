import React from "react"

export default function VariantA() {
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
          <div className="mb-10 flex flex-wrap">
            <div className="mb-10 lg:mb-0 w-full lg:w-1/2">
              <div className="max-w-md">
                <span className="text-green-600 font-bold">
                  Dolor sit amet consectutar
                </span>
                <h2 className="mb-2 text-4xl lg:text-5xl font-bold font-heading">
                  Build &amp; Launch without problems
                </h2>
                <p className="max-w-xs text-gray-500 leading-loose">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque efficitur nisl sodales egestas lobortis.
                </p>
              </div>
            </div>
            <div className="relative w-full lg:w-1/2">
              <img
                className="relative rounded-lg"
                src="https://images.unsplash.com/photo-1607556772227-fe3868023d27?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
                alt=""
              />
              <button className="text-white hover:text-gray-50">
                <svg
                  className="absolute w-16 h-16"
                  style={{ top: "38%", left: "45%" }}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex flex-wrap -mx-4">
            <div className="mb-12 lg:mb-0 w-full md:w-1/2 lg:w-1/3 px-4">
              <span className="mb-6 w-12 h-12 flex justify-center items-center bg-green-100 rounded text-green-600 font-bold">
                1
              </span>
              <h3 className="mb-2 text-2xl font-bold font-heading">
                Lorem ipsum dolor sit amet consectutar
              </h3>
              <p className="text-gray-500 leading-loose">
                Fusce quam tellus, placerat eu metus ut, viverra aliquet purus.
                Suspendisse potenti. Nulla non nibh feugiat.
              </p>
            </div>
            <div className="mb-12 lg:mb-0 w-full md:w-1/2 lg:w-1/3 px-4">
              <span className="mb-6 w-12 h-12 flex justify-center items-center bg-green-100 rounded text-green-600 font-bold">
                2
              </span>
              <h3 className="mb-2 text-2xl font-bold font-heading">
                Lorem ipsum dolor sit amet consectutar
              </h3>
              <p className="text-gray-500 leading-loose">
                Fusce quam tellus, placerat eu metus ut, viverra aliquet purus.
                Suspendisse potenti. Nulla non nibh feugiat.
              </p>
            </div>
            <div className="w-full lg:w-1/3 px-4">
              <span className="mb-6 w-12 h-12 flex justify-center items-center bg-green-100 rounded text-green-600 font-bold">
                3
              </span>
              <h3 className="mb-2 text-2xl font-bold font-heading">
                Lorem ipsum dolor sit amet consectutar
              </h3>
              <p className="text-gray-500 leading-loose">
                Fusce quam tellus, placerat eu metus ut, viverra aliquet purus.
                Suspendisse potenti. Nulla non nibh feugiat.
              </p>
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
