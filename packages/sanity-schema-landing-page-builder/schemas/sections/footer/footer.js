import { variantA, variantB, variantC } from "./variants"
import { MdVerticalAlignBottom } from "react-icons/md"

export default {
  name: "footer",
  title: "Footer",
  icon: MdVerticalAlignBottom,
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
      name: "description",
      title: "Description",
      placeholder:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus eget justo.",
      type: "text",
    },
    {
      name: "addLinks",
      title: "Add Links",
      description: "Add links (example: social media) to your footer.",
      type: "array",
      of: [
        { type: "socialMedia" },
        { type: "externalLink" },
        { type: "internalLink" },
      ],
      options: {
        editModal: "fullscreen",
      },
    },
    {
      name: "addContact",
      title: "Add contact",
      type: "array",
      of: [{ type: "contact" }],
      options: {
        editModal: "fullscreen",
      },
    },
    {
      name: "copyright",
      title: "Copyright",
      placeholder: "© 2021. All rights reserved.",
      type: "string",
    },
  ],
  preview: {
    select: {
      contacts: "addContact.length",
      links: "addLinks.length",
    },
    prepare({ contacts, links }) {
      return {
        title: `Footer`,
        subtitle: `Links: ${links ? links : "Not added"}, Contacts: ${
          contacts ? contacts : "Not added"
        }`,
      }
    },
  },
}
