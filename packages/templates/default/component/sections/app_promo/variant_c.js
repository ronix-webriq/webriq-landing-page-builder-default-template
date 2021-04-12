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
          <div className="flex flex-wrap items-center -mx-4">
            <div className="mb-12 lg:mb-0 w-full lg:w-1/2 px-4">
              <div className="max-w-md">
                <span className="text-green-600 font-bold">
                  Dolor sit amet consectutar
                </span>
                <h2 className="text-4xl lg:text-5xl font-bold font-heading">
                  Build &amp; Launch without problems
                </h2>
                <p className="mb-6 text-gray-500 leading-loose">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque efficitur nisl sodales egestas lobortis.
                </p>
                <ul className="mb-8 text-gray-500 font-bold">
                  <li className="mb-3 flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-green-500"
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
                    <span>Vestibulum viverra ante non libero</span>
                  </li>
                  <li className="mb-3 flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-green-500"
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
                    <span>Morbi mollis metus pretium ultrices tincidunt</span>
                  </li>
                  <li className="mb-3 flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-green-500"
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
                    <span>Etiam lectus nunc, commodo et risus in</span>
                  </li>
                </ul>
                <div>
                  <a href="#">
                    <img
                      className="mb-2 mr-6 inline-block"
                      src="atis-assets/logo/brands/google-play-store.png"
                      alt=""
                    />
                  </a>
                  <a href="#">
                    <img
                      className="mb-2 inline-block"
                      src="atis-assets/logo/brands/app-store-download.png"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="transform -rotate-12 flex items-center w-full lg:w-1/2 px-4">
              <div className="w-1/3">
                <img
                  src="atis-assets/illustrations/book-detail-full.png"
                  alt=""
                />
              </div>
              <div className="w-1/3">
                <img src="atis-assets/illustrations/login-full.png" alt="" />
                <img src="atis-assets/illustrations/details-full.png" alt="" />
              </div>
              <div className="w-1/3">
                <img src="atis-assets/illustrations/home.png" alt="" />
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
