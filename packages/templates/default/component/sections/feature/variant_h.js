import React from "react"
import PropTypes from "prop-types"
import { urlFor } from "../../../lib/sanity"

export default function VariantH({ caption, title, features, images }) {
  if (features === undefined) {
    return null
  }
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
          <div className="flex flex-wrap items-center -mx-4">
            <div className="mb-12 lg:mb-0 w-full lg:w-1/2 px-4">
              <div className="max-w-md">
                <span className="text-green-600 font-bold">{caption}</span>
                <h2 className="mb-6 text-4xl lg:text-5xl font-bold font-heading">
                  {title}
                </h2>
                <ul>
                  {features[0] === undefined ? null : (
                    <li className="flex mb-4">
                      <div>
                        <svg
                          className="mr-3 w-8 h-8 text-green-600"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                          />
                        </svg>
                      </div>
                      <div className="max-w-xs">
                        <h3 className="font-bold font-heading">
                          {features[0].title}
                        </h3>
                        <p className="text-gray-500 leading-loose">
                          {features[0].description}
                        </p>
                      </div>
                    </li>
                  )}
                  {features[1] === undefined ? null : (
                    <li className="flex mb-4">
                      <div>
                        <svg
                          className="mr-3 w-8 h-8 text-green-600"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                          />
                        </svg>
                      </div>
                      <div className="max-w-xs">
                        <h3 className="font-bold font-heading">
                          {features[1].title}
                        </h3>
                        <p className="text-gray-500 leading-loose">
                          {features[1].description}
                        </p>
                      </div>
                    </li>
                  )}
                  {features[2] === undefined ? null : (
                    <li className="flex">
                      <div>
                        <svg
                          className="mr-3 w-8 h-8 text-green-600"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                          />
                        </svg>
                      </div>
                      <div className="max-w-xs">
                        <h3 className="font-bold font-heading">
                          {features[2].title}
                        </h3>
                        <p className="text-gray-500 leading-loose">
                          {features[2].description}
                        </p>
                      </div>
                    </li>
                  )}
                </ul>
              </div>
            </div>
            <div className="flex flex-wrap items-center w-full lg:w-1/2 px-4">
              <div className="mb-6 w-full lg:w-1/2 px-3">
                <img
                  className="mb-6 w-full h-64 object-cover rounded-lg"
                  src={urlFor(images[0].image)}
                  alt=""
                />
                <img
                  className="w-full h-64 object-cover rounded-lg"
                  src={urlFor(images[1].image)}
                  alt=""
                />
              </div>
              <div className="w-full lg:w-1/2 px-3">
                <img
                  className="w-full h-64 object-cover rounded-lg"
                  src={urlFor(images[2].image)}
                  alt=""
                />
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
VariantH.propTypes = {
  caption: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  features: PropTypes.array,
  images: PropTypes.array,
  featureItems: PropTypes.array,
}
