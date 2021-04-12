import React from "react"
import VariantA from "./variant_a"
import VariantB from "./variant_b"
import VariantC from "./variant_c"
import VariantD from "./variant_d"
import PropTypes from "prop-types"
export default function Testimonial({ testimonial }) {
  const renderTestimonial = () => {
    if (testimonial.variants === "variant_a") {
      return <VariantA />
    } else if (testimonial.variants === "variant_b") {
      return <VariantB />
    } else if (testimonial.variants === "variant_c") {
      return <VariantC />
    } else if (testimonial.variants === "variant_d") {
      return <VariantD />
    } else {
      return <VariantA />
    }
  }
  return <>{renderTestimonial()}</>
}

Testimonial.propTypes = {
  variant: PropTypes.string,
}
