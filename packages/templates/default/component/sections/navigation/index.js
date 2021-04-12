import React from "react"
import VariantA from "./variant_a"
import VariantB from "./variant_b"
import VariantC from "./variant_c"
import VariantD from "./variant_d"
import PropTypes from "prop-types"

export default function Navigation({ template, navigation }) {
  const { addMenu, addButtons } = navigation
  const renderNavigation = () => {
    if (navigation.variants === "variant_a") {
      return (
        navigation && (
          <VariantA
            template={template}
            links={addMenu}
            buttons={addButtons}
            // logo={navigation.logo}
          />
        )
      )
    } else if (navigation.variants === "variant_b") {
      return (
        <VariantB template={template} links={addMenu} buttons={addButtons} />
      )
    } else if (navigation.variants === "variant_c") {
      return (
        <VariantC template={template} links={addMenu} buttons={addButtons} />
      )
    } else if (navigation.variants === "variant_d") {
      return (
        <VariantD template={template} links={addMenu} buttons={addButtons} />
      )
    } else {
      return (
        <VariantA template={template} links={addMenu} buttons={addButtons} />
      )
    }
  }
  return renderNavigation()
}

Navigation.propTypes = {
  variant: PropTypes.string,
  template: PropTypes.object,
  navigation: PropTypes.object,
}
