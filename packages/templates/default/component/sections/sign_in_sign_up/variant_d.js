import React from "react"

export default function VariantD() {
  return (
    <section className="py-10 lg:py-20 bg-green-600">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto">
          <div className="mb-10">
            <a className="text-white text-3xl font-bold leading-none" href="#">
              <img
                className="mx-auto"
                src="atis-assets/logo/atis/atis-mono-light.svg"
                alt=""
                width="auto"
              />
            </a>
          </div>
          <div className="p-6 lg:p-12 bg-white shadow-md rounded">
            <div className="mb-6 px-3">
              <span className="text-gray-500">Sign In</span>
              <h3 className="text-2xl font-bold">Join our community</h3>
            </div>
            <form action>
              <div className="mb-3 flex p-4 bg-gray-50 rounded">
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
              <div className="mb-6 flex p-4 bg-gray-50 rounded">
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
              <div className="text-center">
                <button className="mb-4 w-full py-4 bg-green-600 hover:bg-green-700 rounded text-sm font-bold text-gray-50 transition duration-200">
                  Sign In
                </button>
                <a className="text-xs text-green-600 hover:underline" href="#">
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
                  <span className="text-xs text-gray-500 font-bold">
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
                  <span className="text-xs text-gray-500 font-bold">
                    Sign In with Google
                  </span>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
