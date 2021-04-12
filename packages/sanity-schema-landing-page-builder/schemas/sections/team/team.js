import { variantA, variantB, variantC, variantD } from "./variants"
import { MdGroup } from "react-icons/md"

export default {
  name: "team",
  title: "Team",
  icon: MdGroup,
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
      placeholder: "Check our awesome team members",
      type: "string",
    },
    {
      name: "people",
      title: "People",
      description: "Add people to your team section.",
      type: "array",
      of: [{ type: "addPerson" }],
    },
  ],
  preview: {
    select: {
      caption: "caption",
      heading: "heading",
      people: "people.length",
    },
    prepare({ people }) {
      return {
        title: `Team`,
        subtitle: `Team members: ${people ? people : "Not added"}`,
      }
    },
  },
}
