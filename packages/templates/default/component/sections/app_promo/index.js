import React from "react"
import VariantA from "./variant_a"
import VariantB from "./variant_b"
import VariantC from "./variant_c"
import PropTypes from "prop-types"
export default function AppPromo({ appPromo }) {
  const renderAppPromo = () => {
    if (appPromo.variants === "variant_a") {
      return <VariantA />
    } else if (appPromo.variants === "variant_b") {
      return <VariantB />
    } else if (appPromo.variants === "variant_c") {
      return <VariantC />
    } else {
      return <VariantA />
    }
  }
  return <>{renderAppPromo()}</>
}

AppPromo.propTypes = {
  variant: PropTypes.string,
}
