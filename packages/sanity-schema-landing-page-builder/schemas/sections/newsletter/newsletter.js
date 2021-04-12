import { variantA, variantB } from "./variants"
import { MdChromeReaderMode } from "react-icons/md"

export default {
  name: "newsletter",
  title: "Newsletter",
  icon: MdChromeReaderMode,
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
        },
      },
    },
    {
      name: "heading",
      title: "Heading",
      placeholder: "So much more than a business analytics tool",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      description: "Add text below Heading.",
      placeholder:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur nisl sodales egestas lobortis.r",
      type: "text",
    },
    {
      name: "primaryAction",
      title: "Primary Action",
      placeholder: "Sign Up",
      type: "string",
    },
  ],
  preview: {
    select: {
      heading: "heading",
      description: "description",
    },
    prepare({ heading, description }) {
      return {
        title: `Newsletter`,
        subtitle: `Heading: ${heading ? heading : "Not added"} , Description: ${
          description ? description : "Not added"
        }`,
      }
    },
  },
}
