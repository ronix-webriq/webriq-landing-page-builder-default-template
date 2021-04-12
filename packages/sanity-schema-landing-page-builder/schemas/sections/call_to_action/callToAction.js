import { variantA, variantB, variantC, variantD } from "./variants"
import { MdCallToAction } from "react-icons/md"

export default {
  name: "callToAction",
  title: "Call to action",
  icon: MdCallToAction,
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
      placeholder: "So much more than a business analytics tool",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      placeholder:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur nisl sodales egestas lobortis.",
      type: "text",
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
      button: "primaryButton.displayText",
    },
    prepare({ heading, description, button }) {
      return {
        title: `Call to action`,
        subtitle: `Heading: ${heading ? heading : "Not added"} , 
                  Description: ${description ? description : "Not added"},
                  Button: ${button ? button : "Not added"}`,
      }
    },
  },
}
