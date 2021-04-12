import React from "react"
import VariantA from "./variant_a"
import VariantB from "./variant_b"
import VariantC from "./variant_c"
import VariantD from "./variant_d"
import PropTypes from "prop-types"
export default function SignInSignUp(props) {
  const renderSignInSignUp = () => {
    if (props.variant === "variant_a") {
      return <VariantA />
    } else if (props.variant === "variant_b") {
      return <VariantB />
    } else if (props.variant === "variant_c") {
      return <VariantC />
    } else if (props.variant === "variant_d") {
      return <VariantD />
    } else {
      return <VariantA />
    }
  }
  return <>{renderSignInSignUp()}</>
}

SignInSignUp.propTypes = {
  variant: PropTypes.string,
}
