import { variantA, variantB, variantC, variantD } from "./variants"
import { MdMonetizationOn } from "react-icons/md"

export default {
  name: "pricing",
  title: "Pricing",
  icon: MdMonetizationOn,
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
      placeholder: "Choose your best plan",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      placeholder: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      type: "text",
    },
    {
      name: "offers",
      title: "Offers",
      description: "What products do you want to feature?",
      type: "array",
      of: [{ type: "pricingDetail" }],
      options: {
        editModal: "fullscreen",
      },
    },
  ],
  preview: {
    select: {
      offers: "offers.length",
    },
    prepare({ offers }) {
      return {
        title: `Pricing`,
        subtitle: `Offers added: ${offers ? offers : "Not added"}`,
      }
    },
  },
}
