import { variantA, variantB, variantC, variantD } from "./variants"
import { MdFormatQuote } from "react-icons/md"

export default {
  name: "testimonial",
  title: "Testimonial",
  icon: MdFormatQuote,
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
      placeholder: "What our clients think about us",
      type: "string",
    },
    {
      name: "addTestimonials",
      title: "Add Testimonials",
      type: "array",
      of: [{ type: "testimonialSource" }],
      options: {
        editModal: "fullscreen",
      },
    },
  ],
  preview: {
    select: {
      testimonials: "addTestimonials.length",
    },
    prepare({ testimonials }) {
      return {
        title: `Testimonials`,
        subtitle: `Testimonials added: ${testimonials ? testimonials : "None"}`,
      }
    },
  },
}
