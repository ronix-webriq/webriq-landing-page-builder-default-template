import { MdShoppingBasket } from "react-icons/md"

export default {
  name: "pricingDetail",
  title: "Pricing Detail",
  icon: MdShoppingBasket,
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      description: "Price title. Example: Beginner",
      type: "string",
    },
    {
      name: "price",
      title: "Price",
      description: "Example: $24",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "addButton",
      title: "Add Button",
      type: "addButton",
    },
  ],
  preview: {
    select: {
      title: "title",
      price: "price",
      description: "description",
    },
    prepare({ title, price, description }) {
      return {
        title: `Offer: ${title ? title : "Not added"} with price: ${
          price ? price : "Not added"
        }`,
        subtitle: `Description: ${description ? description : "Not added"}`,
      }
    },
  },
}
