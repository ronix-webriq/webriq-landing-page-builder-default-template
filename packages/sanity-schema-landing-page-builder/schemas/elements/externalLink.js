import { MdLaunch } from "react-icons/md"

export default {
  name: "externalLink",
  title: "External Link",
  icon: MdLaunch,
  description: "Add a link from another landing page.",
  type: "object",
  fields: [
    {
      name: "displayText",
      title: "Display Text",
      type: "string",
    },
    {
      name: "link",
      title: "Link",
      description: "Example: https://www.sanity.io",
      type: "url",
    },
  ],
  preview: {
    select: {
      title: "displayText",
      link: "link",
    },
    prepare({ title, link }) {
      return {
        title: `Text: ${title ? title : "Not added"}`,
        subtitle: `Link: ${link ? link : "Not added"}`,
      }
    },
  },
}
