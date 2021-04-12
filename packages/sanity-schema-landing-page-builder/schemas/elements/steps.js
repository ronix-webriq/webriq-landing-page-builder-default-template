import { MdCheckCircle } from "react-icons/md"

export default {
  name: "steps",
  title: "Steps",
  icon: MdCheckCircle,
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      description: "What is this step?",
      placeholder: "Lorem ipsum dolor sit amet consectutar",
      type: "string",
    },
    {
      name: "details",
      title: "Details",
      description: "Give more details for this step.",
      placeholder:
        "Fusce quam tellus, placerat eu metus ut, viverra aliquet purus. Suspendisse potenti. Nulla non nibh feugiat.",
      type: "text",
    },
  ],
  preview: {
    select: {
      title: "title",
      details: "details",
    },
    prepare({ title, details }) {
      return {
        title: `Step: ${title ? title : "Not added"}`,
        subtitle: `Details: ${details ? details : "Not added"}`,
      }
    },
  },
}
