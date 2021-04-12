import React from "react"

export default function VariantC() {
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
          <div className="mb-16 mx-auto max-w-md text-center">
            <span className="text-green-600 font-bold">
              Dolor sit amet consectutar
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold font-heading">
              Build &amp; Launch without problems
            </h2>
          </div>
          <div className="flex flex-wrap -mx-4">
            <div className="mb-8 lg:mb-0 w-full md:w-1/2 lg:w-1/3 px-4">
              <div className="py-10 px-6 bg-white shadow rounded text-center">
                <span className="mb-6 w-16 h-16 inline-flex justify-center items-center bg-green-100 rounded text-2xl text-green-600 font-bold">
                  1
                </span>
                <h3 className="mb-4 text-2xl font-bold font-heading">
                  Lorem ipsum dolor sit amet
                </h3>
                <p className="text-gray-500 leading-loose">
                  Fusce quam tellus, placerat eu metus ut, viverra aliquet
                  purus.
                </p>
              </div>
            </div>
            <div className="mb-8 lg:mb-0 w-full md:w-1/2 lg:w-1/3 px-4">
              <div className="py-10 px-6 bg-white shadow rounded text-center">
                <span className="mb-6 w-16 h-16 inline-flex justify-center items-center bg-green-100 rounded text-2xl text-green-600 font-bold">
                  2
                </span>
                <h3 className="mb-4 text-2xl font-bold font-heading">
                  Ut congue nec leo eget aliquam
                </h3>
                <p className="text-gray-500 leading-loose">
                  Ut tempus tellus ac nisi vestibulum tempus. Nunc tincidunt
                  lectus libero.
                </p>
              </div>
            </div>
            <div className="w-full md:w-full lg:w-1/3 px-4">
              <div className="py-10 px-6 bg-white shadow rounded text-center">
                <span className="mb-6 w-16 h-16 inline-flex justify-center items-center bg-green-100 rounded text-2xl text-green-600 font-bold">
                  3
                </span>
                <h3 className="mb-4 text-2xl font-bold font-heading">
                  Proin fringilla eleifend justo
                </h3>
                <p className="text-gray-500 leading-loose">
                  Donec ut ligula nunc. Mauris blandit vel est et facilisis.
                  Integer sapien felis.
                </p>
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
