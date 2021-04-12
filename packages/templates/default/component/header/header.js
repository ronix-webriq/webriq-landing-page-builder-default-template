import React from "react"
import Head from "next/head"
import PropTypes from "prop-types"
export default function Header(props) {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="" name="" content="" />
      </Head>
    </>
  )
}

Header.propTypes = {
  title: PropTypes.string,
}
