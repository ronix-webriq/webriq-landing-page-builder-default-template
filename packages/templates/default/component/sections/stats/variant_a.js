import React from "react"

export default function VariantA() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-center -mx-4">
          <div className="mb-8 w-full lg:w-1/4 px-4">
            <div className="relative py-10 bg-white shadow rounded">
              <img
                className="h-40 absolute inset-0 mt-2 mx-auto"
                src="atis-assets/elements/puzzle.svg"
                alt=""
              />
              <h4 className="mb-1 text-green-600">Total Revenue</h4>
              <span className="text-3xl lg:text-4xl font-bold">$33,261</span>
            </div>
          </div>
          <div className="mb-8 w-full lg:w-1/4 px-4">
            <div className="relative py-10 bg-white shadow rounded">
              <img
                className="h-40 absolute inset-0 mt-2 mx-auto"
                src="atis-assets/elements/user-circle.svg"
                alt=""
              />
              <h4 className="mb-2 text-green-600">Subscribers</h4>
              <span className="text-3xl lg:text-4xl font-bold">481,095</span>
            </div>
          </div>
          <div className="mb-8 w-full lg:w-1/4 px-4">
            <div className="relative py-10 bg-white shadow rounded">
              <img
                className="h-40 absolute inset-0 mt-2 mx-auto"
                src="atis-assets/elements/thumb-up.svg"
                alt=""
              />
              <h4 className="mb-2 text-green-600">Conversations</h4>
              <span className="text-3xl lg:text-4xl font-bold">643,533</span>
            </div>
          </div>
          <div className="mb-8 w-full lg:w-1/4 px-4">
            <div className="relative py-10 bg-white shadow rounded">
              <img
                className="h-40 absolute inset-0 mt-2 mx-auto"
                src="atis-assets/elements/terminal.svg"
                alt=""
              />
              <h4 className="mb-2 text-green-600">Modal Sale Rate</h4>
              <span className="text-3xl lg:text-4xl font-bold">25%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
