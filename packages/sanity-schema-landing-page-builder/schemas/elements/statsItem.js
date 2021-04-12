import { MdInsertChart } from "react-icons/md"

export default {
  name: "statsItem",
  icon: MdInsertChart,
  type: "object",
  fields: [
    {
      name: "label",
      title: "Label",
      description: "What is this statistics item for? Example: Subscribers",
      type: "string",
    },
    {
      name: "value",
      title: "Value",
      description:
        "What is the value based on your label? Example: Item is for 'Subscribers' then set the value to the number of subscribers",
      type: "string",
    },
  ],
  preview: {
    select: {
      label: "label",
      value: "value",
    },
    prepare({ label, value }) {
      return {
        title: `Label: ${label ? label : "Not added"}`,
        subtitle: `Value: ${value ? value : "Not added"}`,
      }
    },
  },
}
