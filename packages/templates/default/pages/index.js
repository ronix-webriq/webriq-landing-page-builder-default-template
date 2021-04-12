import groq from "groq"
import React from "react"
import dynamic from "next/dynamic"
import { getClient, usePreviewSubscription } from "../lib/sanity"
import PropTypes from "prop-types"

// Importing Component Sections Dynamically
const Navigation = dynamic(() => import("../component/sections/navigation"))
const Hero = dynamic(() => import("../component/sections/hero"))
const Pricing = dynamic(() => import("../component/sections/pricing"))
const Feature = dynamic(() => import("../component/sections/feature"))
// const SignInSignUp = dynamic(() =>import("../component/sections/sign_in_sign_up"))
const Team = dynamic(() => import("../component/sections/team"))
const Blog = dynamic(() => import("../component/sections/blog"))
const Portfolio = dynamic(() => import("../component/sections/portfolio"))
const CallToAction = dynamic(() =>
  import("../component/sections/call_to_action")
)
const Newsletter = dynamic(() => import("../component/sections/newsletter"))
const Testimonial = dynamic(() => import("../component/sections/testimonials"))
const Gallery = dynamic(() => import("../component/sections/gallery"))
const HowItWorks = dynamic(() => import("../component/sections/how_it_works"))
const FAQs = dynamic(() => import("../component/sections/faqs"))
const Contact = dynamic(() => import("../component/sections/contact"))
const AppPromo = dynamic(() => import("../component/sections/app_promo"))
const Stats = dynamic(() => import("../component/sections/stats"))
// const Cookies = dynamic(() => import("../component/sections/cookies"))
const Footer = dynamic(() => import("../component/sections/footer"))

const query = groq`
  *[_type == "page" && title == "home" || slug.current == 'home' || title == "Home" || slug.current == 'Home']{   	     
    ...,
    _id,
    title,
    "slug": slug.current,
    sections[]{
      ...,
      // "variant": variants,
      addMenu[]{
      ...,
       "text": displayText,
       "link": link,
       "link": setPage->slug.current,
      },
			addButtons[]{
        ...,
        "text": displayText,
        "link": link,
        "link": setPage->slug.current
      },
      headerContent {
        // ...,
        "videoLink": addMedia[_type=='youtube'].url,
        "type": _type,
        "title": heading,
        "description": desription,
        "images": addMedia[_type=="addImage"]
      },
			primaryButton {
        "text": displayText,
        "link": route
      },
			secondaryButton {
        "text": displayText,
        "link": route
      },
			"featureItems": specialFeatures,
			"features": featureItems[] {        
        "type": _type,        
        "title": heading,
        "description": description,        
      },
			"images": addImages[].image,
      "images": addMedia[].image,
			"title": heading,
      addBlogPost[] {
        ...,
        "blogTitle":title,
        "postedDate": datePosted,
        "image": blogImage.image,
        "blogText": addText[0].children[0].text,
        "authorName": author.person,
				"authorDescription": author.description,
        "authorImage": author.photo.image,
      }
    }
  }
`

export default function Home({ data, preview }) {
  // const [edit, setEdit] = React.useState(false)

  const { data: page } = usePreviewSubscription(query, {
    initialData: data,
    enabled: preview,
  })
  console.log(page)
  // const [templateColor, setTemplateColor] = React.useState({
  //   bg: "gray",
  //   color: "green",
  // })

  return (
    <>
      {page[0] !== undefined &&
        page[0].sections.map(section =>
          section._type === "navigation" ? (
            <Navigation
              navigation={section}
              template={{
                bg: "gray",
                color: "green",
              }}
            />
          ) : section._type === "header" ? (
            <Hero
              template={{
                bg: "gray",
                color: "green",
              }}
              header={section}
            />
          ) : section._type === "features" ? (
            <Feature
              template={{
                bg: "gray",
                color: "green",
              }}
              feature={section}
            />
          ) : section._type === "portfolio" ? (
            <Portfolio
              template={{
                bg: "gray",
                color: "green",
              }}
              portfolio={section}
            />
          ) : section._type === "blog" ? (
            <Blog
              template={{
                bg: "gray",
                color: "green",
              }}
              blog={section}
            />
          ) : section._type === "contact" ? (
            <Contact
              template={{
                bg: "gray",
                color: "green",
              }}
              contact={section}
            />
          ) : section._type === "pricing" ? (
            <Pricing
              template={{
                bg: "gray",
                color: "green",
              }}
              pricing={section}
            />
          ) : section._type === "testimonial" ? (
            <Testimonial
              template={{
                bg: "gray",
                color: "green",
              }}
              testimonial={section}
            />
          ) : section._type === "team" ? (
            <Team
              template={{
                bg: "gray",
                color: "green",
              }}
              team={section}
            />
          ) : section._type === "howItWorks" ? (
            <HowItWorks
              template={{
                bg: "gray",
                color: "green",
              }}
              howItWorks={section}
            />
          ) : section._type === "newsletter" ? (
            <Newsletter
              template={{
                bg: "gray",
                color: "green",
              }}
              newsletter={section}
            />
          ) : section._type === "faqs" ? (
            <FAQs
              template={{
                bg: "gray",
                color: "green",
              }}
              faqs={section}
            />
          ) : section._type === "callToAction" ? (
            <CallToAction
              template={{
                bg: "gray",
                color: "green",
              }}
              callToAction={section}
            />
          ) : section._type === "stats" ? (
            <Stats
              template={{
                bg: "gray",
                color: "green",
              }}
              stats={section}
            />
          ) : section._type === "appPromo" ? (
            <AppPromo
              template={{
                bg: "gray",
                color: "green",
              }}
              appPromo={section}
            />
          ) : section._type === "logoCloud" ? (
            <Gallery
              template={{
                bg: "gray",
                color: "green",
              }}
              gallery={section}
            />
          ) : section._type === "footer" ? (
            <Footer
              template={{
                bg: "gray",
                color: "green",
              }}
              footer={section}
            />
          ) : null
        )}
    </>
  )
}

export const getStaticProps = async ({ preview = false }) => {
  const page = await getClient(preview).fetch(query)

  return {
    props: {
      preview,
      data: { page },
    },
  }
}

Home.propTypes = {
  data: PropTypes.object,
  preview: PropTypes.bool,
}
