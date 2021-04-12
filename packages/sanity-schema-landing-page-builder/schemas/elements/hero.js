import { FiBookmark } from "react-icons/fi"

export default {
  name: "hero",
  title: "Hero",
  icon: FiBookmark,
  type: "object",
  fields: [
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
      name: "addMedia",
      title: "Media",
      type: "array",
      of: [{ type: "addImage" }, { type: "youtube" }],
      options: {
        layout: "grid",
        editModal: "fullscreen",
      },
    },
  ],
}
