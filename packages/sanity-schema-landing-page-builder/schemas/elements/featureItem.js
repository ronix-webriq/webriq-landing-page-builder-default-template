import { MdAddShoppingCart } from "react-icons/md"

export default {
  name: "featureItem",
  icon: MdAddShoppingCart,
  type: "object",
  fields: [
    {
      name: "heading",
      title: "Heading",
      placeholder: "Easy to Customize",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      placeholder:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      type: "text",
    },
  ],
  preview: {
    select: {
      heading: "heading",
      description: "description",
    },
    prepare({ heading, description }) {
      return {
        title: `Feature: ${heading ? heading : "Not added"} ,
                Description: ${description ? description : "Not added"}`,
      }
    },
  },
}
