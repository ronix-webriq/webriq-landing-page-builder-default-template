import React from "react"
// import ErrorPage from "next/error"
import { useRouter } from "next/router"
import { groq } from "next-sanity"
import { getClient, usePreviewSubscription } from "../lib/sanity"
import dynamic from "next/dynamic"
import PageNotFound from "./404"

const Navigation = dynamic(() => import("../component/sections/navigation"))
const Hero = dynamic(() => import("../component/sections/hero"))
const Feature = dynamic(() => import("../component/sections/feature"))
const Portfolio = dynamic(() => import("../component/sections/portfolio"))

const pageQuery = groq`
   *[_type == "page" && slug.current == $slug][0] {
    ...,
    _id,
    title,
    "slug": slug.current,
    sections[]{
      ...,
      // "variant": variants,
      addMenu[]{
       "text": displayText,
       "link": setPage->slug.current,
      },
			addButtons[]{
        "text": displayText,
        "externalLink": link,
        "link": setPage->slug.current
      },
      headerContent {
        ...,
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
			"title": heading
    }
  }
`

export default function page({ data, preview }) {
  const router = useRouter()
  React.useEffect(() => {
    if (data.page?.slug === "home" || data.page?.slug === "Home") {
      router.replace("/")
    }
  }, [])

  if (!router.isFallback && !data.page?.slug) {
    return <PageNotFound statusCode={404} />
  }

  const { data: page } = usePreviewSubscription(pageQuery, {
    params: { slug: data?.page?.slug },
    initialData: data,
    enabled: preview,
  })

  if (!page) {
    return null
  }

  const { sections } = page
  console.log(sections)
  return (
    <>
      {/* <article>
      <h1 className="text-black">{title}</h1>
      <aside></aside>
    </article> */}
      {sections &&
        sections.map(section =>
          section._type === "navigation" ? (
            <Navigation
              navigation={section}
              template={{ bg: "gray", color: "green" }}
              variant={
                section.variants === "variant_a"
                  ? "variant_a"
                  : section.variants === "variant_b"
                  ? "variant_b"
                  : section.variants === "variant_c"
                  ? "variant_c"
                  : section.variants === "variant_d"
                  ? "variant_d"
                  : "variant_a"
              }
            />
          ) : section._type === "header" ? (
            <Hero
              template={{
                bg: "gray",
                color: "green",
              }}
              header={section}
              variant={
                section.variants === "variant_a"
                  ? "variant_a"
                  : section.variants === "variant_b"
                  ? "variant_b"
                  : section.variants === "variant_c"
                  ? "variant_c"
                  : section.variants === "variant_d"
                  ? "variant_d"
                  : "variant_a"
              }
            />
          ) : section._type === "features" ? (
            <Feature
              template={{
                bg: "gray",
                color: "green",
              }}
              feature={section}
              variant={
                section.variants === "variant_a"
                  ? "variant_a"
                  : section.variants === "variant_b"
                  ? "variant_b"
                  : section.variants === "variant_c"
                  ? "variant_c"
                  : section.variants === "variant_d"
                  ? "variant_d"
                  : section.variants === "variant_e"
                  ? "variant_e"
                  : section.variants === "variant_f"
                  ? "variant_f"
                  : section.variants === "variant_g"
                  ? "variant_g"
                  : section.variants === "variant_h"
                  ? "variant_h"
                  : "variant_a"
              }
            />
          ) : section._type === "portfolio" ? (
            <Portfolio
              template={{
                bg: "gray",
                color: "green",
              }}
              portfolio={section}
              variant={
                section.variants === "variant_a"
                  ? "variant_a"
                  : section.variants === "variant_b"
                  ? "variant_b"
                  : section.variants === "variant_c"
                  ? "variant_c"
                  : section.variants === "variant_d"
                  ? "variant_d"
                  : "variant_a"
              }
            />
          ) : null
        )}
    </>
  )
}

export async function getStaticProps({ params, preview = false }) {
  const page = await getClient(preview).fetch(pageQuery, {
    slug: params.slug,
  })

  return {
    props: {
      preview,
      data: { page },
    },
  }
}

export async function getStaticPaths() {
  const paths = await getClient().fetch(
    groq`*[_type == "page" && defined(slug.current)][].slug.current`
  )

  return {
    paths: paths.map(slug => ({ params: { slug } })),
    fallback: true,
  }
}
