import React from "react"

export default function VariantD() {
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
          <div className="mb-16 flex flex-wrap items-center">
            <div className="w-full lg:w-1/2">
              <span className="text-green-600 font-bold">
                Dolor sit amet consectutar
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold font-heading">
                Featured Posts
              </h2>
            </div>
            <div className="hidden lg:block text-right w-1/2">
              <a
                className="inline-block py-2 px-6 rounded-l-xl rounded-t-xl bg-green-600 hover:bg-green-700 text-gray-50 font-bold leading-loose transition duration-200"
                href="#"
              >
                View More Articles
              </a>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3">
            <div className="mb-8 lg:mb-0 w-full lg:w-1/4 px-3">
              <div className="py-4 px-6 bg-white shadow rounded">
                <h4 className="mb-4 text-gray-500 font-bold uppercase">
                  Topics
                </h4>
                <ul>
                  <li>
                    <a
                      className="block py-2 px-3 mb-4 rounded text-green-600 font-bold bg-gray-50"
                      href="#"
                    >
                      All
                    </a>
                  </li>
                  <li>
                    <a
                      className="block py-2 px-3 mb-4 rounded hover:text-green-600 hover:bg-gray-50"
                      href="#"
                    >
                      Community
                    </a>
                  </li>
                  <li>
                    <a
                      className="block py-2 px-3 mb-4 rounded hover:text-green-600 hover:bg-gray-50"
                      href="#"
                    >
                      Design
                    </a>
                  </li>
                  <li>
                    <a
                      className="block py-2 px-3 mb-4 rounded hover:text-green-600 hover:bg-gray-50"
                      href="#"
                    >
                      Engineering
                    </a>
                  </li>
                  <li>
                    <a
                      className="block py-2 px-3 mb-4 rounded hover:text-green-600 hover:bg-gray-50"
                      href="#"
                    >
                      Marketplace
                    </a>
                  </li>
                  <li>
                    <a
                      className="block py-2 px-3 mb-4 rounded hover:text-green-600 hover:bg-gray-50"
                      href="#"
                    >
                      News
                    </a>
                  </li>
                  <li>
                    <a
                      className="block py-2 px-3 mb-4 rounded hover:text-green-600 hover:bg-gray-50"
                      href="#"
                    >
                      Culture
                    </a>
                  </li>
                  <li>
                    <a
                      className="block py-2 px-3 mb-4 rounded hover:text-green-600 hover:bg-gray-50"
                      href="#"
                    >
                      Product Updates
                    </a>
                  </li>
                  <li>
                    <a
                      className="block py-2 px-3 mb-4 rounded hover:text-green-600 hover:bg-gray-50"
                      href="#"
                    >
                      Trust &amp; Security
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full lg:w-3/4 px-3">
              <div className="flex flex-wrap -mx-3 mb-8 lg:mb-6">
                <div className="mb-4 lg:mb-0 w-full lg:w-1/4 px-3">
                  <img
                    className="w-full h-full object-cover rounded"
                    src="https://images.unsplash.com/photo-1552338804-c42590cb7b88?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1189&q=80"
                    alt=""
                  />
                </div>
                <div className="w-full lg:w-3/4 px-3">
                  <a className="hover:underline" href="#">
                    <h3 className="mb-1 text-2xl font-bold font-heading">
                      Morbi scelerisque nulla et lectus dignissim eleifend nulla
                      eu nulla a metus
                    </h3>
                  </a>
                  <div className="mb-2 flex items-center text-sm">
                    <a
                      className="text-green-600 hover:underline hover:text-green-700"
                      href="#"
                    >
                      John Doe
                    </a>
                    <span className="text-gray-400 mx-2">•</span>
                    <span className="text-gray-400">24 Jan, 2021</span>
                  </div>
                  <p className="text-gray-500">
                    Quisque id sagittis turpis. Nulla sollicitudin rutrum eros
                    eu dictum...
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-8 lg:mb-6">
                <div className="mb-4 lg:mb-0 w-full lg:w-1/4 px-3">
                  <img
                    className="w-full h-full object-cover rounded"
                    src="https://images.unsplash.com/photo-1578509395623-a34c97f15379?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=968&q=80"
                    alt=""
                  />
                </div>
                <div className="w-full lg:w-3/4 px-3">
                  <a className="hover:underline" href="#">
                    <h3 className="mb-1 text-2xl font-bold font-heading">
                      Morbi scelerisque nulla et lectus dignissim eleifend nulla
                      eu nulla a metus
                    </h3>
                  </a>
                  <div className="mb-2 flex items-center text-sm">
                    <a
                      className="text-green-600 hover:underline hover:text-green-700"
                      href="#"
                    >
                      John Doe
                    </a>
                    <span className="text-gray-400 mx-2">•</span>
                    <span className="text-gray-400">24 Jan, 2021</span>
                  </div>
                  <p className="text-gray-500">
                    Quisque id sagittis turpis. Nulla sollicitudin rutrum eros
                    eu dictum...
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-8 lg:mb-6">
                <div className="mb-4 lg:mb-0 w-full lg:w-1/4 px-3">
                  <img
                    className="w-full h-full object-cover rounded"
                    src="https://images.unsplash.com/photo-1551008475-4533d141425b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=968&q=80"
                    alt=""
                  />
                </div>
                <div className="w-full lg:w-3/4 px-3">
                  <a className="hover:underline" href="#">
                    <h3 className="mb-1 text-2xl font-bold font-heading">
                      Morbi scelerisque nulla et lectus dignissim eleifend nulla
                      eu nulla a metus
                    </h3>
                  </a>
                  <div className="mb-2 flex items-center text-sm">
                    <a
                      className="text-green-600 hover:underline hover:text-green-700"
                      href="#"
                    >
                      John Doe
                    </a>
                    <span className="text-gray-400 mx-2">•</span>
                    <span className="text-gray-400">24 Jan, 2021</span>
                  </div>
                  <p className="text-gray-500">
                    Quisque id sagittis turpis. Nulla sollicitudin rutrum eros
                    eu dictum...
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-8 lg:mb-6">
                <div className="mb-4 lg:mb-0 w-full lg:w-1/4 px-3">
                  <img
                    className="w-full h-full object-cover rounded"
                    src="https://images.unsplash.com/37/IHLjdHdzSvi0rgUMMlSK_TE3_0286.jpg?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1191&q=80"
                    alt=""
                  />
                </div>
                <div className="w-full lg:w-3/4 px-3">
                  <a className="hover:underline" href="#">
                    <h3 className="mb-1 text-2xl font-bold font-heading">
                      Morbi scelerisque nulla et lectus dignissim eleifend nulla
                      eu nulla a metus
                    </h3>
                  </a>
                  <div className="mb-2 flex items-center text-sm">
                    <a
                      className="text-green-600 hover:underline hover:text-green-700"
                      href="#"
                    >
                      John Doe
                    </a>
                    <span className="text-gray-400 mx-2">•</span>
                    <span className="text-gray-400">24 Jan, 2021</span>
                  </div>
                  <p className="text-gray-500">
                    Quisque id sagittis turpis. Nulla sollicitudin rutrum eros
                    eu dictum...
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-8 lg:mb-6">
                <div className="mb-4 lg:mb-0 w-full lg:w-1/4 px-3">
                  <img
                    className="w-full h-full object-cover rounded"
                    src="https://images.unsplash.com/photo-1552338804-c42590cb7b88?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1189&q=80"
                    alt=""
                  />
                </div>
                <div className="w-full lg:w-3/4 px-3">
                  <a className="hover:underline" href="#">
                    <h3 className="mb-1 text-2xl font-bold font-heading">
                      Morbi scelerisque nulla et lectus dignissim eleifend nulla
                      eu nulla a metus
                    </h3>
                  </a>
                  <div className="mb-2 flex items-center text-sm">
                    <a
                      className="text-green-600 hover:underline hover:text-green-700"
                      href="#"
                    >
                      John Doe
                    </a>
                    <span className="text-gray-400 mx-2">•</span>
                    <span className="text-gray-400">24 Jan, 2021</span>
                  </div>
                  <p className="text-gray-500">
                    Quisque id sagittis turpis. Nulla sollicitudin rutrum eros
                    eu dictum...
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3">
                <div className="mb-4 lg:mb-0 w-full lg:w-1/4 px-3">
                  <img
                    className="w-full h-full object-cover rounded"
                    src="https://images.unsplash.com/photo-1578509395623-a34c97f15379?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=968&q=80"
                    alt=""
                  />
                </div>
                <div className="w-full lg:w-3/4 px-3">
                  <a className="hover:underline" href="#">
                    <h3 className="mb-1 text-2xl font-bold font-heading">
                      Morbi scelerisque nulla et lectus dignissim eleifend nulla
                      eu nulla a metus
                    </h3>
                  </a>
                  <div className="mb-2 flex items-center text-sm">
                    <a
                      className="text-green-600 hover:underline hover:text-green-700"
                      href="#"
                    >
                      John Doe
                    </a>
                    <span className="text-gray-400 mx-2">•</span>
                    <span className="text-gray-400">24 Jan, 2021</span>
                  </div>
                  <p className="text-gray-500">
                    Quisque id sagittis turpis. Nulla sollicitudin rutrum eros
                    eu dictum...
                  </p>
                </div>
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
