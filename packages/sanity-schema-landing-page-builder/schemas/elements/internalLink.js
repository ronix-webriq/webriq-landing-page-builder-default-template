import { MdPageview } from "react-icons/md"

export default {
  name: "internalLink",
  title: "Link Pages",
  icon: MdPageview,
  type: "object",
  fields: [
    {
      name: "displayText",
      title: "Display Text",
      type: "string",
    },
    {
      name: "setPage",
      title: "Set Page",
      description: "Select from the published pages of this page builder",
      type: "reference",
      to: [{ type: "page" }],
    },
  ],
  preview: {
    select: {
      title: "displayText",
      page: "setPage.title",
    },
    prepare({ title, page }) {
      return {
        title: `Link: ${title ? title : "Not added"}`,
        subtitle: `Reference page: ${page ? page : "Not added"}`,
      }
    },
  },
}
