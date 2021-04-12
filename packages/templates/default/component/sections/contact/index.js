import React from "react"
import VariantA from "./variant_a"
import VariantB from "./variant_b"
import VariantC from "./variant_c"
import PropTypes from "prop-types"
export default function Contact({ contact }) {
  const renderContact = () => {
    if (contact.variants === "variant_a") {
      return <VariantA />
    } else if (contact.variants === "variant_b") {
      return <VariantB />
    } else if (contact.variants === "variant_c") {
      return <VariantC />
    } else {
      return <VariantA />
    }
  }
  return <>{renderContact()}</>
}

Contact.propTypes = {
  variant: PropTypes.string,
  contact: PropTypes.object,
}
