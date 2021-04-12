import React from "react"
import VariantA from "./variant_a"
import VariantB from "./variant_b"
import VariantC from "./variant_c"
import VariantD from "./variant_d"
import PropTypes from "prop-types"
export default function CallToAction({ callToAction }) {
  const renderCallToAction = () => {
    if (callToAction.variants === "variant_a") {
      return <VariantA />
    } else if (callToAction.variants === "variant_b") {
      return <VariantB />
    } else if (callToAction.variants === "variant_c") {
      return <VariantC />
    } else if (callToAction.variants === "variant_d") {
      return <VariantD />
    } else {
      return <VariantA />
    }
  }
  return <>{renderCallToAction()}</>
}

CallToAction.propTypes = {
  variant: PropTypes.string,
}
