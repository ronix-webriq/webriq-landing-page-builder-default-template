import React from "react"
import VariantA from "./variant_a"
import VariantB from "./variant_b"
import PropTypes from "prop-types"
export default function Newsletter({ newsletter }) {
  const renderNewsletter = () => {
    if (newsletter.variants === "variant_a") {
      return <VariantA />
    } else if (newsletter.variants === "variant_b") {
      return <VariantB />
    } else {
      return <VariantA />
    }
  }
  return <>{renderNewsletter()}</>
}

Newsletter.propTypes = {
  variant: PropTypes.string,
}
