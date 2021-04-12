import { FiYoutube } from "react-icons/fi"

export default {
  name: "youtube",
  title: "Youtube link",
  icon: FiYoutube,
  type: "object",
  fields: [
    {
      name: "url",
      title: "YouTube video URL",
      type: "url",
    },
  ],
}
