import React from "react"

export default function VariantA() {
  return (
    <section>
      <div className="skew skew-top mr-for-radius">
        <svg
          className="h-8 md:h-12 lg:h-20 w-full text-green-600"
          viewBox="0 0 10 10"
          preserveAspectRatio="none"
        >
          <polygon fill="currentColor" points="0 0 10 10 0 10" />
        </svg>
      </div>
      <div className="skew skew-top ml-for-radius">
        <svg
          className="h-8 md:h-12 lg:h-20 w-full text-green-600"
          viewBox="0 0 10 10"
          preserveAspectRatio="none"
        >
          <polygon fill="currentColor" points="0 10 10 0 10 10" />
        </svg>
      </div>
      <div className="pt-20 bg-green-600 overflow-hidden radius-for-skewed">
        <div className="container mx-auto px-4">
          <div className="relative max-w-md mx-auto text-center">
            <a
              className="mb-8 inline-block px-5 py-5 bg-white rounded-lg"
              href="#"
            >
              <img
                className="h-12"
                src="atis-assets/logo/atis/atis-mono-sign.svg"
                alt=""
              />
            </a>
            <p className="text-gray-50 font-bold">Dolor sit amet consectutar</p>
            <h2 className="text-4xl lg:text-5xl text-white font-bold">
              Build &amp; Launch without problems
            </h2>
            <div className="h-80 mt-10">
              <img
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-80 z-10"
                src="atis-assets/illustrations/book-detail.png"
                alt=""
              />
              <img
                className="absolute bottom-0 left-0 h-80 -ml-16 -mb-20"
                src="atis-assets/illustrations/details.png"
                alt=""
              />
              <img
                className="absolute bottom-0 right-0 h-80 -mr-16 -mb-20"
                src="atis-assets/illustrations/login.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
