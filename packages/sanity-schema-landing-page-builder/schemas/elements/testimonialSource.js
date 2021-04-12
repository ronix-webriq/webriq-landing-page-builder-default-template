import { MdPersonPinCircle } from "react-icons/md"

export default {
  name: "testimonialSource",
  icon: MdPersonPinCircle,
  type: "object",
  fields: [
    {
      name: "source",
      title: "Source",
      description: "The person or organization the testimony came from.",
      type: "addPerson",
    },
    {
      name: "testimony",
      title: "Testimony",
      type: "text",
    },
  ],
  preview: {
    select: {
      author: "source.person",
      description: "source.description",
      media: "source.addMedia.image",
    },
    prepare({ author, description, media }) {
      return {
        title: `Source: ${author ? author : "Not added"}`,
        media: media,
        subtitle: ` Description: ${description ? description : "Not added"}`,
      }
    },
  },
}
