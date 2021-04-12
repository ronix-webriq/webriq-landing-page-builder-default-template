import React from "react"
import { urlFor } from "../../../lib/sanity"

export default function VariantB({ person }) {
  const [member, setMember] = React.useState({
    name: "Spiderman",
    jobTitle: "",
    image: "",
  })
  console.log(person)
  React.useEffect(() => {
    person.map(item =>
      item.person === "Ironman"
        ? setMember({
            name: item.person,
            jobTitle: item.description,
            image: item.addMedia.image,
          })
        : null
    )
  }, [])

  const choosenMember = (name, jobTitle, img) => {
    setMember({ name, jobTitle, image: img })
  }
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
          <div className="flex flex-wrap items-center -mx-3">
            <div className="w-full lg:w-1/3 px-3 mb-8 lg:mb-0">
              <ul className="flex flex-wrap flex-row lg:flex-col justify-center lg:justify-start space-x-6 lg:space-x-0">
                {person.map((prson, index) => (
                  <li key={index}>
                    <button
                      className={`text-2xl lg:text-4xl mb-4 ${
                        prson.person === member.name
                          ? "text-gray-900"
                          : "text-gray-300"
                      } hover:text-gray-400 font-bold focus:outline-none`}
                      onClick={() =>
                        choosenMember(
                          prson.person,
                          prson.description,
                          prson.addMedia.image
                        )
                      }
                    >
                      {prson.person}
                    </button>
                  </li>
                ))}
                {/* <li>
                  <button className="text-2xl lg:text-4xl mb-4 text-gray-300 hover:text-gray-400 font-bold">
                    Danny Bailey
                  </button>
                </li>
                <li>
                  <button className="text-2xl lg:text-4xl mb-4 text-gray-300 hover:text-gray-400 font-bold">
                    Ian Brown
                  </button>
                </li>
                <li>
                  <button className="text-2xl lg:text-4xl mb-4 text-gray-300 hover:text-gray-400 font-bold">
                    Daisy Carter
                  </button>
                </li>
                <li>
                  <button className="text-2xl lg:text-4xl mb-4 text-gray-300 hover:text-gray-400 font-bold">
                    Dennis Robertson
                  </button>
                </li>
                <li>
                  <button className="text-2xl lg:text-4xl mb-4 text-gray-900 font-bold">
                    Alice Bradley
                  </button>
                </li>
                <li>
                  <button className="text-2xl lg:text-4xl mb-4 text-gray-300 hover:text-gray-400 font-bold">
                    Sahra Ortiz
                  </button>
                </li> */}
              </ul>
            </div>
            <div className="w-full lg:w-2/3 px-3">
              <div className="flex p-6 flex-wrap bg-white rounded-lg shadow">
                <div className="w-full lg:w-1/2 lg:pr-3">
                  <img
                    className="h-80 lg:h-auto w-full lg:w-auto object-cover rounded-lg"
                    src={urlFor(member.image)}
                  />
                </div>
                <div className="w-full lg:w-1/2 lg:pl-3 lg:mt-6 order-first lg:order-last">
                  <h4 className="text-2xl font-bold font-heading">
                    {member.name}
                  </h4>
                  <p className="mb-6 text-gray-500">{member.jobTitle}</p>
                  {/* <p className="mb-6 text-gray-500 leading-loose">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    vitae felis at ante bibendum mollis et et mauris.
                  </p>
                  <p className="mb-6 text-gray-500 leading-loose">
                    Quisque id sagittis turpis. Nulla sollicitudin rutrum eros
                    eu dictum. Integer sit amet erat sit amet lectus lacinia
                    mattis. Donec est tortor, fermentum at urna a, accumsan
                    suscipit sem.
                  </p> */}
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
