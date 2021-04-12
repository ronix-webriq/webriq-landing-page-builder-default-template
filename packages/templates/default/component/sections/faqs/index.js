import React from "react"
import VariantA from "./variant_a"
import VariantB from "./variant_b"
import VariantC from "./variant_c"
import PropTypes from "prop-types"
export default function FAQs({ faqs }) {
  const renderFAQs = () => {
    if (faqs.variants === "variant_a") {
      return <VariantA faqs={faqs.items} />
    } else if (faqs.variants === "variant_b") {
      return <VariantB faqs={faqs.items} />
    } else if (faqs.variants === "variant_c") {
      return <VariantC faqs={faqs.items} />
    } else {
      return <VariantA faqs={faqs.items} />
    }
  }
  return <>{renderFAQs()}</>
}

FAQs.propTypes = {
  variant: PropTypes.string,
}
