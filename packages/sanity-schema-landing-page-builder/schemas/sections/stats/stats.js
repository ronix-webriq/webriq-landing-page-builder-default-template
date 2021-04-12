import { variantA, variantB, variantC } from "./variants"
import { MdEqualizer } from "react-icons/md"

export default {
  name: "stats",
  title: "Statistics",
  icon: MdEqualizer,
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
        },
      },
    },
    {
      name: "items",
      title: "Items",
      description: "Add items to show statistics. Example: Subscribers 250,000",
      type: "array",
      of: [{ type: "statsItem" }],
    },
  ],
  preview: {
    select: {
      items: "items.length",
    },
    prepare({ items }) {
      return {
        title: `Statistics`,
        subtitle: `Items: ${items ? items : "Not added"}`,
      }
    },
  },
}
