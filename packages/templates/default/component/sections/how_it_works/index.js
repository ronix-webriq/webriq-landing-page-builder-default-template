import React from "react"
import VariantA from "./variant_a"
import VariantB from "./variant_b"
import VariantC from "./variant_c"
import VariantD from "./variant_d"
import VariantE from "./variant_e"
import VariantF from "./variant_f"
import PropTypes from "prop-types"
export default function HowItWorks({ howItWorks }) {
  const renderHowItWorks = () => {
    if (howItWorks.variants === "variant_a") {
      return <VariantA />
    } else if (howItWorks.variants === "variant_b") {
      return <VariantB />
    } else if (howItWorks.variants === "variant_c") {
      return <VariantC />
    } else if (howItWorks.variants === "variant_d") {
      return <VariantD />
    } else if (howItWorks.variants === "variant_e") {
      return <VariantE />
    } else if (howItWorks.variants === "variant_f") {
      return <VariantF />
    } else {
      return <VariantA />
    }
  }
  return <>{renderHowItWorks()}</>
}

HowItWorks.propTypes = {
  variant: PropTypes.string,
}
