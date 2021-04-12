import {
  variantA,
  variantB,
  variantC,
  variantD,
  variantE,
  variantF,
  variantG,
  variantH,
} from "./variants"

import { MdShoppingCart } from "react-icons/md"

export default {
  name: "features",
  title: "Features",
  icon: MdShoppingCart,
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
          variant_e: {
            name: "Variant E",
            icon: variantE,
          },
          variant_f: {
            name: "Variant F",
            icon: variantF,
          },
          variant_g: {
            name: "Variant G",
            icon: variantG,
          },
          variant_h: {
            name: "Variant H",
            icon: variantH,
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
      placeholder: "Build & Launch without problems",
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
    {
      name: "featureItems",
      title: "Feature Items",
      description:
        "Add all the features to display. Example: Adding an 'Easy to Customize' feature with description.",
      type: "array",
      of: [{ type: "featureItem" }],
      options: {
        editModal: "fullscreen",
      },
    },
    {
      name: "specialFeatures",
      title: "Special Features",
      description:
        "A list of short descriptions that best describes the overall feature. Example: 'Fast', 'Reliable'",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "addImages",
      title: "Add Images",
      type: "array",
      of: [{ type: "addImage" }],
      options: {
        editModal: "fullscreen",
      },
    },
  ],
  preview: {
    select: {
      featureItems: "featureItems.length",
      specialFeatures: "specialFeatures.length",
    },
    prepare({ featureItems, specialFeatures }) {
      return {
        title: `Features`,
        subtitle: `Feature Items: ${featureItems ? featureItems : "Not added"} ,
                  Special Features: ${
                    specialFeatures ? specialFeatures : "Not added"
                  }`,
      }
    },
  },
}
