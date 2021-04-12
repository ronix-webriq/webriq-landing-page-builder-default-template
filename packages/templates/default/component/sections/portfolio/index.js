import React from "react"
import VariantA from "./variant_a"
import VariantB from "./variant_b"
import VariantC from "./variant_c"
import VariantD from "./variant_d"
import PropTypes from "prop-types"
export default function Portfolio({ template, portfolio }) {
  console.log(portfolio)
  const renderPortfolio = () => {
    if (portfolio.variants === "variant_a") {
      return (
        <VariantA
          template={template}
          caption={portfolio.caption}
          title={portfolio.title}
          images={portfolio.images}
          primaryBtn={portfolio.primaryButton}
        />
      )
    } else if (portfolio.variants === "variant_b") {
      return (
        <VariantB
          template={template}
          caption={portfolio.caption}
          title={portfolio.title}
          images={portfolio.images}
          primaryBtn={portfolio.primaryButton}
        />
      )
    } else if (portfolio.variants === "variant_c") {
      return (
        <VariantC
          template={template}
          caption={portfolio.caption}
          title={portfolio.title}
          images={portfolio.images}
          primaryBtn={portfolio.primaryButton}
        />
      )
    } else if (portfolio.variants === "variant_d") {
      return (
        <VariantD
          template={template}
          caption={portfolio.caption}
          title={portfolio.title}
          images={portfolio.images}
          primaryBtn={portfolio.primaryButton}
        />
      )
    } else {
      return <VariantA />
    }
  }
  return <>{renderPortfolio()}</>
}

Portfolio.propTypes = {
  template: PropTypes.object,
  variant: PropTypes.string,
  portfolio: PropTypes.object,
}
