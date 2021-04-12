import { MdPerson } from "react-icons/md"

export default {
  name: "addPerson",
  title: "Add Person",
  icon: MdPerson,
  type: "object",
  fields: [
    {
      name: "person",
      title: "Person",
      description: "Add the name of the person.",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      description:
        "Short background of the person. Example: HR Manager at Company ABC",
      type: "string",
    },
    {
      name: "addMedia",
      title: "Media",
      type: "addImage",
    },
  ],
  preview: {
    select: {
      person: "person",
      media: "addMedia.image",
      description: "description",
    },
    prepare({ person, media, description }) {
      return {
        media: media,
        title: `Person: ${person ? person : "Not added"}`,
        subtitle: `Description: ${description ? description : "Not added"}`,
      }
    },
  },
}
