import React from "react"
import PropTypes from "prop-types"
import { urlFor } from "../../../lib/sanity"

export default function VariantA({ caption, title, posts }) {
  console.log(caption, title, posts)
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
          <div className="mb-16 text-center">
            <span className="text-green-600 font-bold">{caption}</span>
            <h2 className="text-4xl lg:text-5xl font-bold font-heading">
              {title}
            </h2>
          </div>
          <div className="flex flex-wrap justify-center -mx-3">
            <div className="flex flex-wrap w-full lg:w-1/2">
              <div className="w-full px-3 mb-5">
                <a href="#">
                  <div className="relative h-64 mx-auto rounded">
                    <img
                      className="relative h-full w-full rounded object-cover"
                      src={urlFor(posts[0].image)}
                      alt=""
                    />
                    <div className="absolute inset-0 bg-gray-900 opacity-75 rounded" />
                    <div className="absolute inset-0 p-6 flex flex-col items-start">
                      <span className="mb-auto py-1 px-3 text-sm bg-white rounded-full text-green-600 uppercase font-bold">
                        Travel
                      </span>
                      <span className="text-sm text-gray-400">
                        {posts[0].postedDate}
                      </span>
                      <p className="text-xl lg:text-2xl text-white font-bold">
                        {posts[0].blogTitle}
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="w-full lg:w-1/2 px-3 mb-5">
                <a href="#">
                  <div className="relative mx-auto rounded h-128">
                    <img
                      className="relative h-full w-full rounded object-cover"
                      src={urlFor(posts[1].image)}
                      alt=""
                    />
                    <div className="absolute inset-0 bg-gray-900 opacity-75 rounded" />
                    <div className="absolute inset-0 p-6 flex flex-col items-start">
                      <span className="mb-auto py-1 px-3 text-sm bg-white rounded-full text-green-600 uppercase font-bold">
                        Travel
                      </span>
                      <span className="text-sm text-gray-400">
                        {posts[1].postedDate}
                      </span>
                      <p className="text-xl lg:text-2xl text-white font-bold">
                        {posts[1].title}
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="w-full lg:w-1/2 px-3 mb-5">
                <a href="#">
                  <div className="relative mx-auto rounded h-128">
                    <img
                      className="relative h-full w-full rounded object-cover"
                      src="https://images.unsplash.com/photo-1459213599465-03ab6a4d5931?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1055&q=80"
                      alt=""
                    />
                    <div className="absolute inset-0 bg-gray-900 opacity-75 rounded" />
                    <div className="absolute inset-0 p-6 flex flex-col items-start">
                      <span className="mb-auto py-1 px-3 text-sm bg-white rounded-full text-green-600 uppercase font-bold">
                        Travel
                      </span>
                      <span className="text-sm text-gray-400">
                        24 Jan, 2021
                      </span>
                      <p className="text-xl lg:text-2xl text-white font-bold">
                        Aenean convallis sapien a dignissim placerat.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="flex flex-wrap w-full lg:w-1/2">
              <div className="w-full lg:w-1/2 px-3 mb-5">
                <a href="#">
                  <div className="relative mx-auto rounded h-128">
                    <img
                      className="relative h-full w-full rounded object-cover"
                      src="https://images.unsplash.com/photo-1413752362258-7af2a667b590?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80"
                      alt=""
                    />
                    <div className="absolute inset-0 bg-gray-900 opacity-75 rounded" />
                    <div className="absolute inset-0 p-6 flex flex-col items-start">
                      <span className="mb-auto py-1 px-3 text-sm bg-white rounded-full text-green-600 uppercase font-bold">
                        Travel
                      </span>
                      <span className="text-sm text-gray-400">
                        24 Jan, 2021
                      </span>
                      <p className="text-xl lg:text-2xl text-white font-bold">
                        Vestibulum vehicula leo eget libero eleifend.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="w-full lg:w-1/2 px-3 mb-5">
                <a href="#">
                  <div className="relative mx-auto rounded h-128">
                    <img
                      className="relative h-full w-full rounded object-cover"
                      src="https://images.unsplash.com/photo-1413752362258-7af2a667b590?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80"
                      alt=""
                    />
                    <div className="absolute inset-0 bg-gray-900 opacity-75 rounded" />
                    <div className="absolute inset-0 p-6 flex flex-col items-start">
                      <span className="mb-auto py-1 px-3 text-sm bg-white rounded-full text-green-600 uppercase font-bold">
                        Travel
                      </span>
                      <span className="text-sm text-gray-400">
                        24 Jan, 2021
                      </span>
                      <p className="text-xl lg:text-2xl text-white font-bold">
                        Vestibulum vehicula leo eget libero eleifend.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="w-full px-3 mb-5">
                <a href="#">
                  <div className="relative mx-auto rounded h-64">
                    <img
                      className="relative h-full w-full rounded object-cover"
                      src="https://images.unsplash.com/photo-1559827291-72ee739d0d9a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=968&q=80"
                      alt=""
                    />
                    <div className="absolute inset-0 bg-gray-900 opacity-75 rounded" />
                    <div className="absolute inset-0 p-6 flex flex-col items-start">
                      <span className="mb-auto py-1 px-3 text-sm bg-white rounded-full text-green-600 uppercase font-bold">
                        Travel
                      </span>
                      <span className="text-sm text-gray-400">
                        24 Jan, 2021
                      </span>
                      <p className="text-xl lg:text-2xl text-white font-bold">
                        Lorem ipsum dolor sit amet
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="mt-10">
              <a
                className="inline-block py-2 px-6 rounded-l-xl rounded-t-xl bg-green-600 hover:bg-green-700 text-gray-50 font-bold leading-loose outline-none transition duration-200"
                href="#"
              >
                View More Articles
              </a>
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
VariantA.propTypes = {
  caption: PropTypes.string,
  title: PropTypes.string,
  posts: PropTypes.object,
}
