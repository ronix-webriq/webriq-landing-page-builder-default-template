import React from "react"

export default function VariantC({ faqs }) {
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
          <div className="mb-16 max-w-xl mx-auto text-center">
            <span className="text-green-600 font-bold">
              Dolor sit amet consectutar
            </span>
            <h2 className="text-5xl font-bold">Frequently Asked Questions</h2>
          </div>
          <div className="flex flex-wrap -mx-4 -mb-8">
            {faqs.map((faq, index) => (
              <div className="w-full lg:w-1/2 px-4 mb-8" key={index}>
                <div className="h-full p-8 bg-white rounded shadow">
                  <div className="mb-6 flex items-start">
                    <span className="mr-4 inline-block p-3 rounded-full bg-green-600">
                      <svg
                        className="w-6 h-6 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                        />
                      </svg>
                    </span>
                    <h3 className="text-xl font-bold">{faq.question}</h3>
                  </div>
                  <p className="text-gray-400 leading-loose">{faq.answer}</p>
                </div>
              </div>
            ))}
            {/* <div className="w-full lg:w-1/2 px-4 mb-8">
              <div className="h-full p-8 bg-white rounded shadow">
                <div className="mb-6 flex items-start">
                  <span className="mr-4 inline-block p-3 rounded-full bg-green-600">
                    <svg
                      className="w-6 h-6 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                      />
                    </svg>
                  </span>
                  <h3 className="text-xl font-bold">
                    Fusce eget nunc et libero accumsan rutrum quis nec lectus?
                  </h3>
                </div>
                <p className="text-gray-400 leading-loose">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam euismod orci sed tristique placerat. Fusce in ligula
                  urna. Fusce eget nunc et libero accumsan rutrum quis nec
                  lectus. Quisque luctus sem nibh, quis ornare neque consectetur
                  varius.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4 mb-8">
              <div className="h-full p-8 bg-white rounded shadow">
                <div className="mb-6 flex items-start">
                  <span className="mr-4 inline-block p-3 rounded-full bg-green-600">
                    <svg
                      className="w-6 h-6 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                      />
                    </svg>
                  </span>
                  <h3 className="text-xl font-bold">
                    Nunc maximus odio sit amet eros faucibus?
                  </h3>
                </div>
                <p className="text-gray-400 leading-loose">
                  Phasellus in molestie lorem. In egestas placerat justo, eget
                  congue tellus egestas vitae. Mauris placerat blandit congue.
                  Nullam sit amet nulla sed velit sagittis accumsan. Ut a lacus
                  in tellus molestie semper.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4 mb-8">
              <div className="h-full p-8 bg-white rounded shadow">
                <div className="mb-6 flex items-start">
                  <span className="mr-4 inline-block p-3 rounded-full bg-green-600">
                    <svg
                      className="w-6 h-6 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                      />
                    </svg>
                  </span>
                  <h3 className="text-xl font-bold">
                    Nam feugiat ex eget sapien lobortis?
                  </h3>
                </div>
                <p className="text-gray-400 leading-loose">
                  Nam pretium dolor vel odio bibendum vehicula. Ut in dignissim
                  eros. In ultrices laoreet porttitor. Sed gravida porttitor
                  posuere. Nam vulputate metus vel massa luctus mollis. Sed
                  malesuada nibh egestas ultricies volutpat. Nunc maximus odio
                  sit amet eros faucibus, nec convallis arcu pellentesque.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4 mb-8">
              <div className="h-full p-8 bg-white rounded shadow">
                <div className="mb-6 flex items-start">
                  <span className="mr-4 inline-block p-3 rounded-full bg-green-600">
                    <svg
                      className="w-6 h-6 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                      />
                    </svg>
                  </span>
                  <h3 className="text-xl font-bold">
                    In hac habitasse platea dictumst?
                  </h3>
                </div>
                <p className="text-gray-400 leading-loose">
                  Nullam ante dui, porta eget sagittis sed, iaculis vitae lorem.
                  Vestibulum vel neque id lectus fringilla sollicitudin. Nunc
                  sed dapibus velit. Integer ut felis nisl.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4 mb-8">
              <div className="h-full p-8 bg-white rounded shadow">
                <div className="mb-6 flex items-start">
                  <span className="mr-4 inline-block p-3 rounded-full bg-green-600">
                    <svg
                      className="w-6 h-6 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                      />
                    </svg>
                  </span>
                  <h3 className="text-xl font-bold">
                    Nullam congue lacinia nibh quis scelerisque?
                  </h3>
                </div>
                <p className="text-gray-400 leading-loose">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam euismod orci sed tristique placerat. Fusce in ligula
                  urna. Fusce eget nunc et libero accumsan rutrum quis nec
                  lectus.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4 mb-8">
              <div className="h-full p-8 bg-white rounded shadow">
                <div className="mb-6 flex items-start">
                  <span className="mr-4 inline-block p-3 rounded-full bg-green-600">
                    <svg
                      className="w-6 h-6 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                      />
                    </svg>
                  </span>
                  <h3 className="text-xl font-bold">
                    Nam feugiat ex eget sapien lobortis?
                  </h3>
                </div>
                <p className="text-gray-400 leading-loose">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam euismod orci sed tristique placerat. Fusce in ligula
                  urna. Fusce eget nunc et libero accumsan rutrum quis nec
                  lectus. Quisque luctus sem nibh, quis ornare neque consectetur
                  varius.
                </p>
              </div>
            </div> */}
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
