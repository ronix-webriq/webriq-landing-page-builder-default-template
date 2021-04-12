import { FiMousePointer } from "react-icons/fi"

export default {
  name: "addButton",
  title: "Add Button",
  icon: FiMousePointer,
  type: "object",
  fields: [
    {
      name: "displayText",
      title: "Display Text",
      description: "Example: Get Started",
      type: "string",
    },
    {
      name: "source",
      title: "Source",
      type: "string",
      options: {
        layout: "radio",
        list: [
          "page slug (From the `Slug` field. Example: about-us)",
          "link (Example: 'https://www.sanity.io')",
        ],
      },
    },
    {
      name: "route",
      title: "Route",
      description: `Enter the page slug or link where this button will direct the page when clicked.`,
      type: "string",
    },
  ],
}
