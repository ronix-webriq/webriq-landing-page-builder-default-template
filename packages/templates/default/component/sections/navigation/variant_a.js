import React from "react"
import PropTypes from "prop-types"
// import { urlFor } from "../../../lib/sanity"
import Link from "next/link"

export default function VariantA({ template, links, buttons /*logo */ }) {
  return (
    <section>
      <nav className="relative px-6 py-6 flex justify-between items-center bg-white">
        {/* {logo !== undefined ? (
          <a className="text-3xl font-bold leading-none" href="/">
            <img
              className="h-12"
              src={urlFor(logo.image)}
              alt=""
              width="auto"
            />
          </a>
        ) : null} */}
        <a className="text-2xl font-bold leading-none">
          <div className="h-6">Logo</div>
        </a>
        <div className="lg:hidden">
          <button className="navbar-burger flex items-center text-green-600 p-3">
            <svg
              className="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
          {links !== undefined
            ? links.map((link, index) => (
                <React.Fragment key={index}>
                  <li>
                    {link._type === "internalLink" ? (
                      <Link
                        href={`${
                          link.link === "Home" || link.link === "home"
                            ? "/"
                            : `/${link.link}`
                        }`}
                      >
                        <a
                          className={`text-sm text-gray-400 hover:text-gray-500`}
                        >
                          {link.text}
                        </a>
                      </Link>
                    ) : (
                      <Link
                        href={`${
                          link.link === "Home" || link.link === "home"
                            ? "/"
                            : `${link.link}`
                        }`}
                      >
                        <a
                          className={`text-sm text-gray-400 hover:text-gray-500`}
                        >
                          {link.text}
                        </a>
                      </Link>
                    )}
                  </li>
                  {links.length !== index + 1 ? (
                    <li className="text-gray-300">
                      <svg
                        className="w-4 h-4 current-fill"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                        ></path>
                      </svg>
                    </li>
                  ) : null}
                </React.Fragment>
              ))
            : null}

          {/* <li>
            <a className="text-sm text-gray-400 hover:text-gray-500" href="#">
              About Us
            </a>
          </li>
          <li className="text-gray-300">
            <svg
              className="w-4 h-4 current-fill"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              ></path>
            </svg>
          </li>
          <li>
            <a className="text-sm text-gray-400 hover:text-gray-500" href="#">
              Services
            </a>
          </li>
          <li className="text-gray-300">
            <svg
              className="w-4 h-4 current-fill"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              ></path>
            </svg>
          </li>
          <li>
            <a className="text-sm text-gray-400 hover:text-gray-500" href="#">
              Platform
            </a>
          </li>
          <li className="text-gray-300">
            <svg
              className="w-4 h-4 current-fill"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              ></path>
            </svg>
          </li>
          <li>
            <a className="text-sm text-gray-400 hover:text-gray-500" href="#">
              Testimonials
            </a>
          </li> */}
        </ul>
        {buttons !== undefined && buttons[0] !== undefined ? (
          <a
            className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold rounded-l-xl rounded-t-xl transition duration-200"
            href={
              Object.keys(buttons[0])[0] === "externalLink"
                ? buttons[0].externalLink
                : buttons[0].link
            }
          >
            {buttons[0].text}
          </a>
        ) : null}
        {buttons !== undefined && buttons[1] !== undefined ? (
          <a
            className={`hidden lg:inline-block py-2 px-6 bg-${template.color}-500 hover:bg-${template.color}-600 text-sm text-white font-bold rounded-l-xl rounded-t-xl transition duration-200`}
            href={
              Object.keys(buttons[1])[0] === "externalLink"
                ? buttons[1].externalLink
                : buttons[1].link
            }
          >
            {buttons[1].text}
          </a>
        ) : null}
      </nav>
      <div className="hidden navbar-menu relative z-50">
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" />
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
          <div className="flex items-center mb-8">
            <a className="mr-auto text-3xl font-bold leading-none" href="#">
              <img
                className="h-10"
                src="atis-assets/logo/atis/atis-mono-black.svg"
                alt=""
                width="auto"
              />
            </a>
            <button className="navbar-close">
              <svg
                className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div>
            <ul>
              <li className="mb-1">
                <a
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600 rounded"
                  href="#"
                >
                  Start
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600 rounded"
                  href="#"
                >
                  About Us
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600 rounded"
                  href="#"
                >
                  Services
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600 rounded"
                  href="#"
                >
                  Platform
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600 rounded"
                  href="#"
                >
                  Testimonials
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-auto">
            <div className="pt-6">
              <a
                className="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold leading-none bg-gray-50 hover:bg-gray-100 rounded-l-xl rounded-t-xl"
                href="#"
              >
                Sign in
              </a>
              <a
                className={`block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-${template.color}-600 hover:bg-${template.color}-700 rounded-l-xl rounded-t-xl`}
                href="#"
              >
                Sign Up
              </a>
            </div>
            <p className="my-4 text-xs text-center text-gray-400">
              <span>© 2020 All rights reserved.</span>
            </p>
            <div className="text-center">
              <a className="inline-block px-1" href="#">
                <img src="atis-assets/social/facebook.svg" alt="" />
              </a>
              <a className="inline-block px-1" href="#">
                <img src="atis-assets/social/twitter.svg" alt="" />
              </a>
              <a className="inline-block px-1" href="#">
                <img src="atis-assets/social/instagram.svg" alt="" />
              </a>
            </div>
          </div>
        </nav>
      </div>
    </section>
  )
}

VariantA.propTypes = {
  template: PropTypes.object,
  links: PropTypes.array,
  buttons: PropTypes.array,
  logo: PropTypes.object,
}
