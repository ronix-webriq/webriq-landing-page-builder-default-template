import React from "react"
import VariantA from "./variant_a"
import VariantB from "./variant_b"
import VariantC from "./variant_c"
import VariantD from "./variant_d"
import PropTypes from "prop-types"
export default function Gallery({ gallery }) {
  const renderGallery = () => {
    if (gallery.variants === "variant_a") {
      return <VariantA />
    } else if (gallery.variants === "variant_b") {
      return <VariantB />
    } else if (gallery.variants === "variant_c") {
      return <VariantC />
    } else if (gallery.variants === "variant_d") {
      return <VariantD />
    } else {
      return <VariantA />
    }
  }
  return <>{renderGallery()}</>
}

Gallery.propTypes = {
  variant: PropTypes.string,
}
