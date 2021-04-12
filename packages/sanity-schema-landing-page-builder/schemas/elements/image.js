import { FiCamera } from "react-icons/fi"

export default {
  name: "addImage",
  title: "Add image",
  icon: FiCamera,
  type: "object",
  fields: [
    {
      name: "image",
      title: "Add Image",
      description: "Add image to your section.",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "alt",
      title: "Alternative text",
      description: `Text to display when image can't be loaded`,
      type: "string",
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      media: "image",
      altText: "alt",
    },
    prepare({ media, altText }) {
      return {
        media: media,
        title: altText,
      }
    },
  },
}
