import React from "react"

export default function VariantA({ faqs }) {
  console.log(faqs)
  const [view, setView] = React.useState({ index: 0, hidden: false })
  const toggleView = index => {
    setView({ index: index, hidden: !view.hidden })
  }
  console.log(view)
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
          <div className="mb-16 max-w-xl mx-auto text-center">
            <span className="text-green-600 font-bold font-heading">
              Dolor sit amet consectutar
            </span>
            <h2 className="mb-6 text-5xl font-bold font-heading">
              Frequently Asked Questions
            </h2>
            <form className="flex justify-center">
              <input
                className="w-2/3 p-4 text-xs font-heading bg-white focus:border-gray-500 focus:outline-none rounded-l"
                placeholder="Search, find any question you want to ask..."
              />
              <button className="pr-4 rounded-r-lg bg-white text-green-600">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"}
                  />
                </svg>
              </button>
            </form>
          </div>
          {/* <div className="mb-16 flex justify-center space-x-4">
            <button className="inline-block h-2 w-2 bg-green-600 rounded-full" />
            <button className="inline-block h-2 w-2 bg-green-600 rounded-full" />
            <button className="inline-block h-2 w-2 bg-green-600 rounded-full" />
            <button className="inline-block h-2 w-2 bg-green-600 rounded-full" />
            <button className="inline-block h-2 w-2 bg-green-600 rounded-full" />
          </div> */}
          <div className="max-w-3xl mx-auto">
            <ul className="space-y-4 lg:space-y-6">
              {faqs.map((faq, index) => (
                <li className="p-6 bg-gray-50 rounded shadow" key={index}>
                  <button
                    className="w-full flex justify-between items-center text-left font-bold font-heading hover:text-gray-600 border-none"
                    onClick={() => toggleView(index)}
                  >
                    <span className="text-xl">{faq.question}</span>
                    <svg
                      className="w-4 h-4 text-green-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={
                          view.index === index && view.hidden === false
                            ? "M19 14l-7 7m0 0l-7-7m7 7V3"
                            : "M5 10l7-7m0 0l7 7m-7-7v18"
                        }
                      />
                    </svg>
                  </button>
                  <p
                    className={`${
                      view.index === index && view.hidden === false
                        ? "hidden"
                        : null
                    } mt-4 text-gray-400 font-normal leading-loose`}
                  >
                    {faq.answer}
                  </p>
                </li>
              ))}
              {/* <li className="p-6 bg-gray-50 rounded shadow">
                <button className="w-full flex justify-between items-center text-left font-bold font-heading hover:text-gray-600" onClick={() => setView(prevState => !prevState)}>
                  <span className="text-xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit?
                  </span>
                  <svg
                    className="w-4 h-4 text-green-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={view === true ? "M19 14l-7 7m0 0l-7-7m7 7V3" :  "M5 10l7-7m0 0l7 7m-7-7v18" }
                    />
                  </svg>
                </button>
                <p className={`${view === true ? 'hidden' : null} mt-4 text-gray-400 font-normal leading-loose`}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam euismod orci sed tristique placerat. Fusce in ligula
                  urna. Fusce eget nunc et libero accumsan rutrum quis nec
                  lectus. Quisque luctus sem nibh, quis ornare neque consectetur
                  varius. Maecenas rhoncus consectetur rutrum.
                </p>
              </li>
              <li className="p-6 bg-gray-50 rounded shadow">
                <button className="w-full flex justify-between items-center text-left font-bold font-heading hover:text-gray-600" onClick={() => setView(prevState => !prevState)}>
                  <span className="text-xl">
                    Nunc maximus odio sit amet eros faucibus?
                  </span>
                  <svg
                    className="w-4 h-4 text-green-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </button>
                <p  className={`${view === true ? 'hidden' : null} mt-4 text-gray-400 font-normal leading-loose`}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus quis ultricies est. Duis nec hendrerit magna. Ut vel
                  orci gravida, hendrerit enim non, gravida turpis. Praesent non
                  lectus porttitor, scelerisque nulla nec, ornare neque. Integer
                  massa libero, ornare ut leo nec, scelerisque rutrum elit.
                  Morbi et massa id ipsum lobortis rhoncus. Aenean sit amet
                  porta nulla, quis varius risus. Suspendisse ultrices ut lectus
                  non laoreet. Etiam ornare laoreet tortor quis porttitor.
                  Suspendisse tempus erat non dui volutpat eleifend.
                </p>
              </li>
              <li className="p-6 bg-gray-50 rounded shadow">
                <button className="w-full flex justify-between items-center text-left font-bold font-heading hover:text-gray-600" onClick={() => setView(prevState => !prevState)}>
                  <span className="text-xl">
                    Nam feugiat ex eget sapien lobortis?
                  </span>
                  <svg
                    className="w-4 h-4 text-green-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </button>
                <p  className={`${view === true ? 'hidden' : null} mt-4 text-gray-400 font-normal leading-loose`}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus quis ultricies est. Duis nec hendrerit magna. Ut vel
                  orci gravida, hendrerit enim non, gravida turpis. Praesent non
                  lectus porttitor, scelerisque nulla nec, ornare neque. Integer
                  massa libero, ornare ut leo nec, scelerisque rutrum elit.
                  Morbi et massa id ipsum lobortis rhoncus. Aenean sit amet
                  porta nulla, quis varius risus. Suspendisse ultrices ut lectus
                  non laoreet. Etiam ornare laoreet tortor quis porttitor.
                  Suspendisse tempus erat non dui volutpat eleifend.
                </p>
              </li>
              <li className="p-6 bg-gray-50 rounded shadow">
                <button className="w-full flex justify-between items-center text-left font-bold font-heading hover:text-gray-600" onClick={() => setView(prevState => !prevState)}>
                  <span className="text-xl">
                    In hac habitasse platea dictumst?
                  </span>
                  <svg
                    className="w-4 h-4 text-green-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </button>
                <p  className={`${view === true ? 'hidden' : null} mt-4 text-gray-400 font-normal leading-loose`}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus quis ultricies est. Duis nec hendrerit magna. Ut vel
                  orci gravida, hendrerit enim non, gravida turpis. Praesent non
                  lectus porttitor, scelerisque nulla nec, ornare neque. Integer
                  massa libero, ornare ut leo nec, scelerisque rutrum elit.
                  Morbi et massa id ipsum lobortis rhoncus. Aenean sit amet
                  porta nulla, quis varius risus. Suspendisse ultrices ut lectus
                  non laoreet. Etiam ornare laoreet tortor quis porttitor.
                  Suspendisse tempus erat non dui volutpat eleifend.
                </p>
              </li>
              <li className="p-6 bg-gray-50 rounded shadow">
                <button className="w-full flex justify-between items-center text-left font-bold font-heading hover:text-gray-600" onClick={() => setView(prevState => !prevState)}>
                  <span className="text-xl">
                    Nullam congue lacinia nibh quis scelerisque?
                  </span>
                  <svg
                    className="w-4 h-4 text-green-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </button>
                <p  className={`${view === true ? 'hidden' : null} mt-4 text-gray-400 font-normal leading-loose`}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus quis ultricies est. Duis nec hendrerit magna. Ut vel
                  orci gravida, hendrerit enim non, gravida turpis. Praesent non
                  lectus porttitor, scelerisque nulla nec, ornare neque. Integer
                  massa libero, ornare ut leo nec, scelerisque rutrum elit.
                  Morbi et massa id ipsum lobortis rhoncus. Aenean sit amet
                  porta nulla, quis varius risus. Suspendisse ultrices ut lectus
                  non laoreet. Etiam ornare laoreet tortor quis porttitor.
                  Suspendisse tempus erat non dui volutpat eleifend.
                </p>
              </li>
              <li className="p-6 bg-gray-50 rounded shadow">
                <button className="w-full flex justify-between items-center text-left font-bold font-heading hover:text-gray-600" onClick={() => setView(prevState => !prevState)}>
                  <span className="text-xl">
                    Nam feugiat ex eget sapien lobortis?
                  </span>
                  <svg
                    className="w-4 h-4 text-green-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </button>
                <p  className={`${view === true ? 'hidden' : null} mt-4 text-gray-400 font-normal leading-loose`}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus quis ultricies est. Duis nec hendrerit magna. Ut vel
                  orci gravida, hendrerit enim non, gravida turpis. Praesent non
                  lectus porttitor, scelerisque nulla nec, ornare neque. Integer
                  massa libero, ornare ut leo nec, scelerisque rutrum elit.
                  Morbi et massa id ipsum lobortis rhoncus. Aenean sit amet
                  porta nulla, quis varius risus. Suspendisse ultrices ut lectus
                  non laoreet. Etiam ornare laoreet tortor quis porttitor.
                  Suspendisse tempus erat non dui volutpat eleifend.
                </p>
              </li> */}
            </ul>
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
