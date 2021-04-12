import React from "react"
import VariantA from "./variant_a"
import VariantB from "./variant_b"
import VariantC from "./variant_c"
import PropTypes from "prop-types"
export default function Footer({ footer }) {
  const renderFooter = () => {
    if (footer.variants === "variant_a") {
      return <VariantA />
    } else if (footer.variants === "variant_b") {
      return <VariantB />
    } else if (footer.variants === "variant_c") {
      return <VariantC />
    } else {
      return <VariantA />
    }
  }
  return <>{renderFooter()}</>
}

Footer.propTypes = {
  variant: PropTypes.string,
}
