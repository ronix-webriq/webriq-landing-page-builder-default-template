import React from "react"
import { urlFor } from "../../../lib/sanity"

export default function VarianB({ caption, title, posts }) {
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
          <div className="mb-6 flex flex-wrap justify-center">
            <div className="mb-16 w-full text-center">
              <span className="text-green-600 font-bold">{caption}</span>
              <h2 className="text-4xl lg:text-5xl font-bold font-heading">
                {title}
              </h2>
            </div>
            <div className="flex flex-wrap -mx-3 mb-16">
              <div className="flex flex-wrap w-full lg:w-1/2">
                {posts.map((post, index) => (
                  <div
                    className="mb-6 lg:mb-0 w-full lg:w-1/2 px-3"
                    key={index}
                  >
                    <div className="h-full flex flex-col rounded shadow">
                      <img
                        className="rounded-t object-cover h-24 lg:h-72 w-full"
                        src={urlFor(post.image)}
                        alt=""
                      />
                      <div className="mt-auto p-6 rounded-b bg-white">
                        <span className="text-sm text-gray-400">
                          {post.datePosted}
                        </span>
                        <h2 className="my-2 text-2xl font-bold">
                          {post.title}
                        </h2>
                        <p className="mb-6 text-gray-400 leading-loose">
                          {post.description}
                        </p>
                        <a
                          className="text-green-600 hover:text-green-700 font-bold"
                          href="#"
                        >
                          Learn More
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
                {/* <div className="mb-6 lg:mb-0 w-full lg:w-1/2 px-3">
                <div className="h-full flex flex-col rounded shadow">
                  <img
                    className="rounded-t object-cover h-80 lg:h-full w-full"
                    src="https://images.unsplash.com/photo-1559827291-72ee739d0d9a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=968&q=80"
                    alt=""
                  />
                  <div className="mt-auto p-6 rounded-b bg-white">
                    <span className="text-sm text-gray-400">24 Jan, 2021</span>
                    <h2 className="my-2 text-2xl font-bold">
                      Morbi scelerisque nulla et lectus dignissim eleifend nulla
                      eu nulla a metus
                    </h2>
                    <p className="mb-6 text-gray-400 leading-loose">
                      Quisque id sagittis turpis. Nulla sollicitudin rutrum eros
                      eu dictum. Integer sit amet erat sit amet lectus lacinia
                      mattis. Donec est tortor, fermentum at urna a, accumsan
                      suscipit sem.
                    </p>
                    <a
                      className="text-green-600 hover:text-green-700 font-bold"
                      href="#"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
             
                <div className="mb-6 w-full lg:w-1/2 px-3">
                  <div className="rounded overflow-hidden shadow">
                    <img
                      className="lg:h-48 rounded-t"
                      src="https://images.unsplash.com/photo-1413752362258-7af2a667b590?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80"
                      alt=""
                    />
                    <div className="p-6 rounded-b bg-white">
                      <span className="text-sm text-gray-400">
                        24 Jan, 2021
                      </span>
                      <h2 className="my-2 text-2xl font-bold">
                        Morbi scelerisque nulla et lectus
                      </h2>
                      <a
                        className="text-green-600 hover:text-green-700 font-bold"
                        href="#"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mb-6 w-full lg:w-1/2 px-3">
                  <div className="rounded overflow-hidden shadow">
                    <img
                      className="lg:h-48 rounded-t"
                      src="https://images.unsplash.com/photo-1459213599465-03ab6a4d5931?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1055&q=80"
                      alt=""
                    />
                    <div className="p-6 rounded-b bg-white">
                      <span className="text-sm text-gray-400">
                        24 Jan, 2021
                      </span>
                      <h2 className="my-2 text-2xl font-bold">
                        Morbi scelerisque nulla et lectus
                      </h2>
                      <a
                        className="text-green-600 hover:text-green-700 font-bold"
                        href="#"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mb-6 w-full lg:w-1/2 px-3">
                  <div className="rounded overflow-hidden shadow">
                    <img
                      className="lg:h-48 rounded-t"
                      src="https://images.unsplash.com/photo-1459213599465-03ab6a4d5931?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1055&q=80"
                      alt=""
                    />
                    <div className="p-6 rounded-b bg-white">
                      <span className="text-sm text-gray-400">
                        24 Jan, 2021
                      </span>
                      <h2 className="my-2 text-2xl font-bold">
                        Morbi scelerisque nulla et lectus
                      </h2>
                      <a
                        className="text-green-600 hover:text-green-700 font-bold"
                        href="#"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mb-6 w-full lg:w-1/2 px-3">
                  <div className="rounded overflow-hidden shadow">
                    <img
                      className="lg:h-48 rounded-t"
                      src="https://images.unsplash.com/photo-1413752362258-7af2a667b590?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80"
                      alt=""
                    />
                    <div className="p-6 rounded-b bg-white">
                      <span className="text-sm text-gray-400">
                        24 Jan, 2021
                      </span>
                      <h2 className="my-2 text-2xl font-bold">
                        Morbi scelerisque nulla et lectus
                      </h2>
                      <a
                        className="text-green-600 hover:text-green-700 font-bold"
                        href="#"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
            <div>
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
