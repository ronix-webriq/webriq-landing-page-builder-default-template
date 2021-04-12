import { variantA, variantB, variantC } from "./variants"
import { MdNewReleases } from "react-icons/md"

export default {
  name: "appPromo",
  title: "App Promo",
  icon: MdNewReleases,
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
      description: "Add a text above the heading",
      placeholder: "Dolor sit amet consectutar",
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
      name: "addStatistics",
      title: "Add Statistics",
      type: "statsItem",
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
    },
  ],
  preview: {
    select: {
      caption: "caption",
      heading: "heading",
    },
    prepare({ caption, heading }) {
      return {
        title: `App Promo`,
        subtitle: `Caption: ${caption ? caption : "Not added"} , Heading: ${
          heading ? heading : "Not added"
        }`,
      }
    },
  },
}
