import { variantA, variantB, variantC, variantD } from "./variants"
import { MdPhotoLibrary } from "react-icons/md"

export default {
  name: "portfolio",
  title: "Portfolio",
  icon: MdPhotoLibrary,
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
      placeholder: "Latest Projects",
      type: "string",
    },
    {
      name: "addMedia",
      title: "Media",
      type: "array",
      of: [{ type: "addImage" }],
    },
    {
      name: "primaryButton",
      title: "Primary Button",
      description: "Add a button",
      type: "addButton",
    },
  ],
  preview: {
    select: {
      media: "addMedia.image",
    },
    prepare({ media }) {
      return {
        title: `Portfolio`,
        subtitle: `Media items: ${media ? media : "None"}`,
      }
    },
  },
}
