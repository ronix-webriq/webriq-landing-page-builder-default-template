import {
  variantA,
  variantB,
  variantC,
  variantD,
  variantE,
  variantF,
} from "./variants"

import { MdBeenhere } from "react-icons/md"

export default {
  name: "cookies",
  title: "Cookies",
  icon: MdBeenhere,
  type: "object",
  fieldsets: [
    {
      name: "buttons",
      title: "Buttons",
    },
  ],
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
        },
      },
    },
    {
      name: "heading",
      title: "Heading",
      description: "Example: Cookies or Cookie Policy",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      description: "Add details for this policy.",
      type: "text",
    },
    {
      name: "primaryAction",
      title: "Primary Action",
      description: "First button display. Example: Accept cookies",
      fieldset: "buttons",
      type: "string",
    },
    {
      name: "secondaryAction",
      title: "Secondary Action",
      description: "Second button display. Example: Decline cookies",
      fieldset: "buttons",
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
        title: `Cookies`,
        subtitle: `Heading: ${heading ? heading : "Not added"} ,
                  Description: ${description ? description : "Not added"}`,
      }
    },
  },
}
