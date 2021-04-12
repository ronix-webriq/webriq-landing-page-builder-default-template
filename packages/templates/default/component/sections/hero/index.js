import React from "react"
import VariantA from "./variant_a"
import VariantB from "./variant_b"
import VariantC from "./variant_c"
import VariantD from "./variant_d"
import VariantE from "./variant_e"
import PropTypes from "prop-types"
export default function Hero({ template, header }) {
  const { images, title, description, videoLink } = header.headerContent
  console.log(images[0])
  const renderHero = () => {
    if (header.variants === "variant_a") {
      return (
        <VariantA
          template={template}
          image={images[0].image}
          title={title}
          description={description}
          primaryButton={header.primaryButton}
          secondaryButton={header.secondaryButton}
        />
      )
    } else if (header.variants === "variant_b") {
      return (
        <VariantB
          template={template}
          images={images}
          title={title}
          description={description}
          primaryButton={header.primaryButton}
          secondaryButton={header.secondaryButton}
        />
      )
    } else if (header.variants === "variant_c") {
      return (
        <VariantC
          template={template}
          images={images}
          videoLink={videoLink[0]}
          title={title}
          primaryButton={header.primaryButton}
          secondaryButton={header.secondaryButton}
        />
      )
    } else if (header.variants === "variant_d") {
      return (
        <VariantD
          template={template}
          images={images}
          title={title}
          description={description}
          primaryButton={header.primaryButton}
          secondaryButton={header.secondaryButton}
        />
      )
    } else if (header.variants === "variant_e") {
      return (
        <VariantE
          template={template}
          images={images}
          title={title}
          description={description}
          primaryButton={header.primaryButton}
          secondaryButton={header.secondaryButton}
        />
      )
    } else {
      return (
        <VariantA
          template={template}
          images={images}
          title={title}
          description={description}
          primaryButton={header.primaryButton}
          secondaryButton={header.secondaryButton}
        />
      )
    }
  }
  return <>{renderHero()}</>
}

Hero.propTypes = {
  variant: PropTypes.string,
  template: PropTypes.object,
  header: PropTypes.object,
}
