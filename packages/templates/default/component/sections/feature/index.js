import React from "react"
import VariantA from "./variant_a"
import VariantB from "./variant_b"
import VariantC from "./variant_c"
import VariantD from "./variant_d"
import VariantE from "./variant_e"
import VariantF from "./variant_f"
import VariantG from "./variant_g"
import VariantH from "./variant_h"
import PropTypes from "prop-types"
export default function Feature({ template, feature }) {
  console.log(feature, template)
  const renderFeature = () => {
    if (feature.variants === "variant_a") {
      return (
        <VariantA
          caption={feature.caption}
          title={feature.heading}
          features={feature.features}
        />
      )
    } else if (feature.variants === "variant_b") {
      return (
        <VariantB
          caption={feature.caption}
          title={feature.heading}
          description={feature.description}
          features={feature.features}
          featureItems={feature.featureItems}
        />
      )
    } else if (feature.variants === "variant_c") {
      return (
        <VariantC
          caption={feature.caption}
          title={feature.heading}
          features={feature.features}
        />
      )
    } else if (feature.variants === "variant_d") {
      return (
        <VariantD
          caption={feature.caption}
          title={feature.heading}
          features={feature.features}
        />
      )
    } else if (feature.variants === "variant_e") {
      return (
        <VariantE
          caption={feature.caption}
          title={feature.heading}
          description={feature.description}
          image={feature.addImages[0].image}
        />
      )
    } else if (feature.variants === "variant_f") {
      return (
        <VariantF
          caption={feature.caption}
          title={feature.heading}
          description={feature.description}
          images={feature.addImages}
          button={feature.primaryButton}
        />
      )
    } else if (feature.variants === "variant_g") {
      return (
        <VariantG
          caption={feature.caption}
          title={feature.heading}
          description={feature.description}
          images={feature.addImages}
          featureItems={feature.featureItems}
        />
      )
    } else if (feature.variants === "variant_h") {
      return (
        <VariantH
          caption={feature.caption}
          title={feature.heading}
          features={feature.features}
          images={feature.addImages}
        />
      )
    } else {
      return <VariantA />
    }
  }
  return <>{renderFeature()}</>
}

Feature.propTypes = {
  variant: PropTypes.string,
  template: PropTypes.string,
  feature: PropTypes.object,
}
