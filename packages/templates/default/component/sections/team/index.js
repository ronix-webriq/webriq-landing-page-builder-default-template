import React from "react"
import VariantA from "./variant_a"
import VariantB from "./variant_b"
import VariantC from "./variant_c"
import VariantD from "./variant_d"
import PropTypes from "prop-types"
export default function Team({ team }) {
  console.log(team)
  const renderTeam = () => {
    if (team.variants === "variant_a") {
      return (
        <VariantA
          caption={team.caption}
          title={team.title}
          person={team.people}
        />
      )
    } else if (team.variants === "variant_b") {
      return (
        <VariantB
          caption={team.caption}
          title={team.title}
          person={team.people}
        />
      )
    } else if (team.variants === "variant_c") {
      return (
        <VariantC
          caption={team.caption}
          title={team.title}
          person={team.people}
        />
      )
    } else if (team.variants === "variant_d") {
      return (
        <VariantD
          caption={team.caption}
          title={team.title}
          person={team.people}
        />
      )
    } else {
      return (
        <VariantA
          caption={team.caption}
          title={team.title}
          person={team.people}
        />
      )
    }
  }
  return <>{renderTeam()}</>
}

Team.propTypes = {
  variant: PropTypes.string,
}
