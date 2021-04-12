import {
  variantA,
  variantB,
  variantC,
  variantD,
  variantE,
  variantF,
} from "./variants"

import { MdHelp } from "react-icons/md"

export default {
  name: "howItWorks",
  title: "How it works",
  icon: MdHelp,
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
          items6: {
            name: "Variant F",
            icon: variantF,
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
      name: "addSteps",
      title: "Add Steps",
      description: "Add steps to give more information about how it works.",
      type: "array",
      of: [{ type: "steps" }],
    },
  ],
  preview: {
    select: {
      steps: "addSteps.length",
    },
    prepare({ steps }) {
      return {
        title: `How it works`,
        subtitle: `Steps: ${steps ? steps : "Not added"}`,
      }
    },
  },
}
