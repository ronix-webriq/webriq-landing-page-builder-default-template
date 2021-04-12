import { variantA, variantB, variantC, variantD } from "./variants"
import { MdCloudCircle } from "react-icons/md"

export default {
  name: "logoCloud",
  title: "Logo Cloud",
  icon: MdCloudCircle,
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
      name: "heading",
      title: "Heading",
      description: "Add a heading.",
      placeholder: "Trusted by brands all over the world",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      description: "Add details for this logo cloud.",
      type: "text",
    },
    {
      name: "logo",
      title: "Logo",
      description: "Add logo images.",
      type: "array",
      of: [{ type: "addImage" }],
    },
    {
      name: "primaryButton",
      title: "Primary Button",
      type: "addButton",
    },
  ],
  preview: {
    select: {
      heading: "heading",
      description: "description",
    },
    prepare({ heading, description }) {
      return {
        title: `Logo Cloud`,
        subtitle: `Heading: ${heading ? heading : "Not added"} ,
                  Description: ${description ? description : "Not added"}`,
      }
    },
  },
}
