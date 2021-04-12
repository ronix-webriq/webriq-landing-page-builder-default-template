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
          <div className="mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold font-heading">
              Contact
            </h2>
            <p className="text-gray-500 leading-loose">
              Got any question? Let’s talk about it.
            </p>
          </div>
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2 mb-16 lg:mb-0">
              <div className="flex flex-wrap">
                <div className="mb-12 w-full md:w-1/2 lg:w-1/2">
                  <h3 className="mb-2 text-3xl lg:text-4xl font-bold">
                    Office
                  </h3>
                  <p className="text-gray-400">359 Hidden Valley</p>
                  <p className="text-gray-400">Road, NY</p>
                </div>
                <div className="mb-12 w-full md:w-1/2">
                  <h3 className="mb-2 text-3xl lg:text-4xl font-bold">
                    Contacts
                  </h3>
                  <p className="text-gray-400">hallo@gamil.com</p>
                </div>
                <div className="w-full md:w-1/3 lg:w-full">
                  <h3 className="mb-2 text-3xl lg:text-4xl font-bold">
                    Socials
                  </h3>
                  <div className="flex">
                    <a className="mr-3" href="#">
                      <img src="atis-assets/social/facebook.svg" alt="" />
                    </a>
                    <a className="mr-3" href="#">
                      <img src="atis-assets/social/twitter.svg" alt="" />
                    </a>
                    <a href="#">
                      <img src="atis-assets/social/instagram.svg" alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="max-w-md lg:mx-auto">
                <form action>
                  <div className="mb-4 text-sm">
                    <span className="mr-4 font-semibold">Department:</span>
                    <label className="mr-4">
                      <input
                        className="mr-1"
                        type="radio"
                        name="department"
                        defaultValue={1}
                        defaultChecked
                      />
                      <span>Support</span>
                    </label>
                    <label>
                      <input
                        className="mr-1"
                        type="radio"
                        name="department"
                        defaultValue={2}
                      />
                      <span>Sales</span>
                    </label>
                  </div>
                  <div className="mb-4">
                    <input
                      className="w-full p-4 text-xs font-semibold leading-none bg-white rounded outline-none"
                      type="text"
                      placeholder="Subject"
                      style={{
                        backgroundImage: 'url("data:image/png',
                        backgroundRepeat: "no-repeat",
                        backgroundAttachment: "scroll",
                        backgroundSize: "16px 18px",
                        backgroundPosition: "98% 50%",
                      }}
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      className="w-full p-4 text-xs font-semibold leading-none bg-white rounded outline-none"
                      type="text"
                      placeholder="Name"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      className="w-full p-4 text-xs font-semibold leading-none bg-white rounded outline-none"
                      type="email"
                      placeholder="name@example.com"
                    />
                  </div>
                  <div className="mb-4">
                    <textarea
                      className="w-full h-24 p-4 text-xs font-semibold leading-none resize-none bg-white rounded outline-none"
                      type="text"
                      placeholder="Message..."
                      defaultValue={""}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="flex px-2 bg-white rounded">
                      <input
                        className="hidden"
                        type="file"
                        placeholder="Choose file.."
                        name="Choose file"
                      />
                      <div className="my-1 ml-auto px-4 py-3 text-xs text-white font-semibold leading-none bg-gray-500 hover:bg-gray-600 rounded cursor-pointer transition duration-200">
                        Browse
                      </div>
                    </label>
                  </div>
                  <div className="flex justify-between items-center">
                    <label>
                      <input
                        className="mr-1"
                        type="checkbox"
                        name="terms"
                        defaultValue={1}
                      />
                      <span className="text-sm font-semibold">
                        I agree to terms and conditions.
                      </span>
                    </label>
                    <button className="inline-block py-2 px-6 rounded-l-xl rounded-t-xl bg-green-600 hover:bg-green-700 text-gray-50 font-bold leading-loose transition duration-200">
                      Get Started
                    </button>
                  </div>
                </form>
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
