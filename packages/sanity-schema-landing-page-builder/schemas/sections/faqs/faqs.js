import { variantA, variantB, variantC } from "./variants"
import { MdQuestionAnswer } from "react-icons/md"

export default {
  name: "faqs",
  title: "Frequently Asked Questions",
  icon: MdQuestionAnswer,
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
      name: "caption",
      title: "Caption",
      description: "Add caption text above Heading.",
      placeholder: "Dolor set amet consectutar",
      type: "string",
    },
    {
      name: "heading",
      title: "Heading",
      placeholder: "Frequently Asked Questions",
      type: "string",
    },
    {
      name: "items",
      title: "Items",
      description: "Add questions and answers here.",
      type: "array",
      of: [{ type: "questionsAsked" }],
      options: {
        editModal: "fullscreen",
      },
    },
  ],
  preview: {
    select: {
      items: "items.length",
    },
    prepare({ items }) {
      return {
        title: `Frequently Asked Questions`,
        subtitle: `Items: ${items ? items : "Not added"}`,
      }
    },
  },
}
