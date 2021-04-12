import React from "react"
import VariantA from "./variant_a"
import VariantB from "./variant_b"
import VariantC from "./variant_c"
import VariantD from "./variant_d"
import PropTypes from "prop-types"
export default function Blog({ blog }) {
  // console.log(blog.addBlogPost.filter(date => ))
  const renderBlog = () => {
    if (blog.variants === "variant_a") {
      return (
        <VariantA
          caption={blog.caption}
          title={blog.heading}
          posts={blog.addBlogPost}
        />
      )
    } else if (blog.variants === "variant_b") {
      return (
        <VariantB
          caption={blog.caption}
          title={blog.heading}
          posts={blog.addBlogPost}
        />
      )
    } else if (blog.variants === "variant_c") {
      return (
        <VariantC
          caption={blog.caption}
          title={blog.heading}
          posts={blog.addBlogPost}
        />
      )
    } else if (blog.variants === "variant_d") {
      return (
        <VariantD
          caption={blog.caption}
          title={blog.heading}
          posts={blog.addBlogPost}
        />
      )
    } else {
      return (
        <VariantA
          caption={blog.caption}
          title={blog.heading}
          posts={blog.addBlogPost}
        />
      )
    }
  }
  return <>{renderBlog()}</>
}

Blog.propTypes = {
  variant: PropTypes.string,
}
