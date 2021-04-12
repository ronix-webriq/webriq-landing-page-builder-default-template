import React from "react"
import VariantA from "./variant_a"
import VariantB from "./variant_b"
import VariantC from "./variant_c"
import PropTypes from "prop-types"
export default function Stats({ stats }) {
  const renderStats = () => {
    if (stats.variants === "variant_a") {
      return <VariantA />
    } else if (stats.variants === "variant_b") {
      return <VariantB />
    } else if (stats.variants === "variant_c") {
      return <VariantC />
    } else {
      return <VariantA />
    }
  }
  return <>{renderStats()}</>
}

Stats.propTypes = {
  variant: PropTypes.string,
}
