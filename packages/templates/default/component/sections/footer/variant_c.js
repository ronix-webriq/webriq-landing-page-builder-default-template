import React from "react"

export default function VariantC() {
  return (
    <section className="bg-gray-50">
      <div className="flex w-full">
        <div className="w-1/3 flex">
          <div className="w-1/3 py-1 bg-green-400" />
          <div className="w-1/3 py-1 bg-green-500" />
          <div className="w-1/3 py-1 bg-green-600" />
        </div>
        <div className="w-1/3 flex">
          <div className="w-1/3 py-1 bg-green-400" />
          <div className="w-1/3 py-1 bg-green-500" />
          <div className="w-1/3 py-1 bg-green-600" />
        </div>
        <div className="w-1/3 flex">
          <div className="w-1/3 py-1 bg-green-400" />
          <div className="w-1/3 py-1 bg-green-500" />
          <div className="w-1/3 py-1 bg-green-600" />
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="pt-10 pb-12">
          <div className="relative lg:pb-8 mb-8 flex flex-wrap lg:border-b lg:border-gray-300">
            <p className="w-full lg:w-auto text-gray-400 text-sm text-center lg:text-left order-last lg:order-first">
              © 2021. All rights reserved.
            </p>
            <div className="lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 mb-6 lg:mb-0 mx-auto">
              <a className="mr-6 text-sm hover:text-gray-500" href="#">
                Terms of Service
              </a>
              <a className="text-sm hover:text-gray-500" href="#">
                Police Privacy
              </a>
            </div>
            <div className="mb-12 lg:mb-0 lg:ml-auto w-full lg:w-auto order-first lg:order-last text-center lg:text-left">
              <a
                className="inline-block text-xl font-bold leading-none"
                href="#"
              >
                <img
                  className="inline-block h-12 lg:h-6"
                  src="atis-assets/logo/atis/atis-mono-black.svg"
                  alt=""
                  width="auto"
                />
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <a
              className="inline-block w-10 mr-2 p-2 bg-white hover:bg-gray-50 rounded"
              href="#"
            >
              <img className="mx-auto" src="atis-assets/social/facebook.svg" />
            </a>
            <a
              className="inline-block w-10 mr-2 p-2 bg-white hover:bg-gray-50 rounded"
              href="#"
            >
              <img className="mx-auto" src="atis-assets/social/twitter.svg" />
            </a>
            <a
              className="inline-block w-10 p-2 bg-white hover:bg-gray-50 rounded"
              href="#"
            >
              <img className="mx-auto" src="atis-assets/social/instagram.svg" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
