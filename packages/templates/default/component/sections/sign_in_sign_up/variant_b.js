import React from "react"

export default function VarianB() {
  return (
    <section>
      <div className="flex flex-wrap">
        <div className="pt-6 lg:pt-16 pb-6 w-full lg:w-1/2">
          <div className="max-w-md mx-auto">
            <div className="mb-6 lg:mb-20 w-full px-3 flex items-center justify-between">
              <a className="text-3xl font-bold leading-none" href="#">
                <img
                  className="h-12"
                  src="atis-assets/logo/atis/atis-mono-black.svg"
                  alt=""
                  width="auto"
                />
              </a>
              <a
                className="py-2 px-6 text-xs rounded-l-xl rounded-t-xl bg-green-100 hover:bg-green-200 text-green-600 font-bold transition duration-200"
                href="#"
              >
                Sign Up
              </a>
            </div>
            <div>
              <div className="mb-6 px-3">
                <span className="text-gray-500">Sign In</span>
                <h3 className="text-2xl font-bold">Join our community</h3>
              </div>
              <form action>
                <div className="mb-3 flex p-4 mx-3 bg-gray-50 rounded">
                  <input
                    className="w-full text-xs bg-gray-50 outline-none"
                    type="email"
                    placeholder="name@email.com"
                  />
                  <svg
                    className="h-6 w-6 ml-4 my-auto text-gray-300"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </div>
                <div className="mb-6 flex p-4 mx-3 bg-gray-50 rounded">
                  <input
                    className="w-full text-xs bg-gray-50 outline-none"
                    type="password"
                    placeholder="Enter your password"
                  />
                  <button>
                    <svg
                      className="h-6 w-6 ml-4 my-auto text-gray-300"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </button>
                </div>
                <div className="px-3 text-center">
                  <button className="mb-4 w-full py-4 bg-green-600 hover:bg-green-700 rounded text-sm font-bold text-gray-50 transition duration-200">
                    Sign In
                  </button>
                  <a
                    className="text-xs text-green-600 hover:underline"
                    href="#"
                  >
                    Forgot password?
                  </a>
                  <a
                    className="mt-8 mb-4 p-4 flex justify-center items-center border rounded hover:bg-gray-50"
                    href="#"
                  >
                    <img
                      className="mr-4"
                      src="atis-assets/social/facebook-logo.png"
                      alt=""
                    />
                    <span className="text-xs text-gray-500 font-bold transition duration-200">
                      Sign In with Facebook
                    </span>
                  </a>
                  <a
                    className="p-4 flex justify-center items-center border rounded hover:bg-gray-50"
                    href="#"
                  >
                    <img
                      className="mr-4"
                      src="atis-assets/social/google-logo.png"
                      alt=""
                    />
                    <span className="text-xs text-gray-500 font-bold transition duration-200">
                      Sign In with Google
                    </span>
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="hidden lg:block relative w-full lg:w-1/2 bg-green-600">
          <div
            className="absolute bottom-0 inset-x-0 mx-auto mb-12 max-w-xl text-center"
            style={{ zIndex: 10 }}
          >
            <img
              className="lg:max-w-xs mx-auto"
              src="https://business.devtubes.com/img/cover-img-1.png"
              alt=""
            />
            <h2 className="mb-2 text-2xl text-white font-bold">
              So much more than a business analytics tool
            </h2>
            <div className="max-w-lg mx-auto">
              <p className="mb-6 text-gray-50 leading-loose">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque efficitur nisl sodales egestas lobortis.
              </p>
            </div>
            <a
              className="inline-block py-2 px-6 leading-loose rounded-t-xl rounded-l-xl bg-white hover:bg-gray-500 text-gray-900 hover:text-white transition duration-200 font-bold"
              href="#"
            >
              Get Started
            </a>
            <div className="mt-12 flex justify-center space-x-3">
              <button className="p-1 bg-green-500 rounded-full" />
              <button className="p-1 bg-green-500 rounded-full" />
              <button className="p-1 bg-white rounded-full" />
              <button className="p-1 bg-green-500 rounded-full" />
            </div>
          </div>
        </div>
        <div className="lg:hidden bg-green-600">
          <div className="relative w-full">
            <img
              className="relative mx-auto max-w-sm mt-4 mb-4 block"
              src="https://business.devtubes.com/img/cover-img-1.png"
              alt=""
            />
            <div className="flex justify-center space-x-3">
              <button className="p-1 bg-green-500 rounded-full" />
              <button className="p-1 bg-green-500 rounded-full" />
              <button className="p-1 bg-white rounded-full" />
              <button className="p-1 bg-green-500 rounded-full" />
            </div>
          </div>
          <div className="py-10 px-3 text-center" style={{ zIndex: 10 }}>
            <h2 className="mb-2 text-2xl text-white font-bold">
              So much more than a business analytics tool
            </h2>
            <p className="mb-6 text-gray-50 leading-loose">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque efficitur nisl sodales egestas lobortis.
            </p>
            <a
              className="py-2 px-6 leading-loose rounded-t-xl rounded-l-xl rounded-l-xl bg-white hover:bg-gray-500 text-gray-900 hover:text-white transition duration-200 font-bold"
              href="#"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
