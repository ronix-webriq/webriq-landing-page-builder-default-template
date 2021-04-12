import React from "react"

export default function VariantC() {
  return (
    <section className="relative py-10 lg:h-screen bg-gray-50">
      <div className="hidden lg:flex items-center absolute inset-0 w-2/5 bg-white">
        <img
          className="mx-auto"
          src="atis-assets/illustrations/technical-support-dark-green.png"
          alt=""
        />
      </div>
      <div className="lg:absolute inset-0 flex justify-center items-center ml-auto w-full lg:w-3/5 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto py-10">
            <h3 className="mb-6 text-2xl">
              Got any question? Let’s talk about it.
            </h3>
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
    </section>
  )
}
