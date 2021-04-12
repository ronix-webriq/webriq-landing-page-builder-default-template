import React from "react"
import VariantA from "./variant_b"
import VariantB from "./variant_a"
import VariantC from "./variant_c"
import VariantD from "./variant_d"
import VariantE from "./variant_e"
import VariantF from "./variant_f"
import PropTypes from "prop-types"
export default function Cookies(props) {
  const renderCookies = () => {
    if (props.variant === "variant_a") {
      return <VariantA />
    } else if (props.variant === "variant_b") {
      return <VariantB />
    } else if (props.variant === "variant_c") {
      return <VariantC />
    } else if (props.variant === "variant_d") {
      return <VariantD />
    } else if (props.variant === "variant_e") {
      return <VariantE />
    } else if (props.variant === "variant_f") {
      return <VariantF />
    } else {
      return <VariantA />
    }
  }
  return <>{renderCookies()}</>
}

Cookies.propTypes = {
  variant: PropTypes.string,
}
