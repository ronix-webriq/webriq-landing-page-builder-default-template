import React from "react"
import VariantA from "./variant_a"
import VariantB from "./variant_b"
import VariantC from "./variant_c"
import VariantD from "./variant_d"
import PropTypes from "prop-types"
export default function Pricing({ pricing }) {
  console.log(pricing)
  const renderPricing = () => {
    if (pricing.variants === "variant_a") {
      return (
        <VariantA
          caption={pricing.caption}
          title={pricing.title}
          description={pricing.description}
          offers={pricing.offers}
        />
      )
    } else if (pricing.variants === "variant_b") {
      return (
        <VariantB
          caption={pricing.caption}
          title={pricing.title}
          description={pricing.description}
          offers={pricing.offers}
        />
      )
    } else if (pricing.variants === "variant_c") {
      return (
        <VariantC
          caption={pricing.caption}
          title={pricing.title}
          description={pricing.description}
          offers={pricing.offers}
        />
      )
    } else if (pricing.variants === "variant_d") {
      return (
        <VariantD
          caption={pricing.caption}
          title={pricing.title}
          description={pricing.description}
          offers={pricing.offers}
        />
      )
    } else {
      return (
        <VariantA
          caption={pricing.caption}
          title={pricing.title}
          description={pricing.description}
          offers={pricing.offers}
        />
      )
    }
  }
  return <>{renderPricing()}</>
}

Pricing.propTypes = {
  variant: PropTypes.string,
}
