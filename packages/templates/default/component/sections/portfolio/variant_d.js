import React from "react"
import PropTypes from "prop-types"
import { urlFor } from "../../../lib/sanity"
export default function VariantD({
  /* template,*/ caption,
  title,
  images,
  primaryBtn,
}) {
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
          <div className="mb-8 md:mb-16 max-w-lg mx-auto text-center">
            <span className="text-green-600 font-bold">
              {/* Dolor sit amet consectutar */}
              {caption}
            </span>
            <h2 className="mb-6 text-4xl lg:text-5xl font-bold font-heading">
              {/* Lates Projects */}
              {title}
            </h2>
            <div className="inline-flex flex-wrap py-1 sm:px-1 sm:space-x-1 bg-white rounded text-sm">
              <button className="w-full sm:w-auto mb-1 sm:mb-0 mx-1 sm:mx-0 py-2 px-4 hover:bg-gray-50 text-gray-500 hover:text-gray-900 rounded hover:shadow font-bold focus:outline-none transition duration-200">
                Category 1
              </button>
              <button className="w-full sm:w-auto mb-1 sm:mb-0 mx-1 sm:mx-0 py-2 px-4 bg-gray-50 text-gray-900 shadow rounded font-bold focus:outline-none transition duration-200">
                Category 2
              </button>
              <button className="w-full sm:w-auto mb-1 sm:mb-0 mx-1 sm:mx-0 py-2 px-4 hover:bg-gray-50 text-gray-500 hover:text-gray-900 rounded hover:shadow font-bold focus:outline-none transition duration-200">
                Category 3
              </button>
              <button className="w-full sm:w-auto mb-1 sm:mb-0 mx-1 sm:mx-0 py-2 px-4 hover:bg-gray-50 text-gray-500 hover:text-gray-900 rounded hover:shadow font-bold focus:outline-none transition duration-200">
                Category 4
              </button>
            </div>
          </div>
          <div className="flex flex-wrap -mx-4 mb-12">
            <div className="flex flex-wrap w-full lg:w-1/2 mb-8 lg:mb-0">
              <div className="w-full lg:w-1/2 px-4 mb-8">
                <img
                  className="h-64 w-full rounded-lg object-cover"
                  src={urlFor(images[0])}
                  alt=""
                />
              </div>
              <div className="w-full lg:w-1/2 px-4 mb-8">
                <img
                  className="h-64 w-full rounded-lg object-cover"
                  src={urlFor(images[1])}
                  alt=""
                />
              </div>
              <div className="w-full px-4 mb-8">
                <img
                  className="lg:h-auto w-full rounded-lg object-cover"
                  src={urlFor(images[2])}
                  alt=""
                />
              </div>
            </div>
            <div className="flex flex-wrap w-full lg:w-1/2">
              <div className="w-full px-4 mb-8">
                <div className="relative">
                  <img
                    className="h-128 w-full rounded-lg object-cover"
                    src={urlFor(images[3])}
                    alt=""
                  />
                  <div className="absolute inset-0 bg-gray-900 opacity-80 rounded-lg" />
                  <div className="absolute inset-0 p-6 flex justify-center">
                    <div className="max-w-md my-auto">
                      <span className="text-green-600 font-bold">
                        Dolor sit amet consectutar
                      </span>
                      <h2 className="text-4xl lg:text-5xl text-white font-bold">
                        Build &amp; Launch without problems
                      </h2>
                      <div className="max-w-xs">
                        <p className="mb-6 text-gray-400">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Pellentesque efficitur nisl sodales egestas
                          lobortis.
                        </p>
                        <a
                          className="inline-block py-2 px-6 rounded-l-xl rounded-t-xl bg-green-600 hover:bg-green-700 text-gray-50 font-bold leading-loose"
                          href="#"
                        >
                          See More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
                <img
                  className="h-64 w-full rounded-lg object-cover"
                  src={urlFor(images[4])}
                  alt=""
                />
              </div>
              <div className="w-full lg:w-1/2 px-4">
                <img
                  className="h-64 w-full rounded-lg object-cover"
                  src={urlFor(images[5])}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="text-center">
            <a
              className="inline-block py-2 px-6 rounded-l-xl rounded-t-xl bg-green-600 hover:bg-green-700 text-gray-50 font-bold leading-loose transition duration-200"
              href={
                primaryBtn.link === "home" || primaryBtn.link === "Home"
                  ? "/"
                  : primaryBtn.link
              }
            >
              {primaryBtn.text}
            </a>
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
VariantD.propTypes = {
  template: PropTypes.object,
  caption: PropTypes.string,
  title: PropTypes.string,
  images: PropTypes.array,
  primaryBtn: PropTypes.string,
}
