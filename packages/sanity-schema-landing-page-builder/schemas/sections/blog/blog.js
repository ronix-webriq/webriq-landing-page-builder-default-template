import { variantA, variantB, variantC, variantD } from "./variants"
import { MdArtTrack } from "react-icons/md"

export default {
  name: "blog",
  title: "Blog",
  icon: MdArtTrack,
  type: "object",
  fields: [
    {
      name: "variants",
      title: "Variants",
      type: "visualOptions",
      options: {
        showTooltip: true,
        optionSize: "large",
        list: {
          variant_a: {
            name: "Variant A",
            icon: variantA,
          },
          variant_b: {
            name: "Variant B",
            icon: variantB,
          },
          variant_c: {
            name: "Variant C",
            icon: variantC,
          },
          variant_d: {
            name: "Variant D",
            icon: variantD,
          },
        },
      },
    },
    {
      name: "caption",
      title: "Caption",
      description: "Add caption text above Heading.",
      placeholder: "Dolor set amet consectutar",
      type: "string",
    },
    {
      name: "heading",
      title: "Heading",
      placeholder: "Our Blog",
      type: "string",
    },
    {
      name: "addBlogPost",
      title: "Add Blog Posts",
      type: "array",
      of: [{ type: "blogPost" }],
      options: {
        editModal: "fullscreen",
      },
    },
  ],
  preview: {
    select: {
      posts: "addBlogPost.length",
    },
    prepare({ posts }) {
      return {
        title: `Blog`,
        subtitle: `Posts: ${posts ? posts : "None"}`,
      }
    },
  },
}
