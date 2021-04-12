import { MdPublic } from "react-icons/md"

export default {
  name: "socialMedia",
  title: "Social Media",
  icon: MdPublic,
  type: "object",
  fields: [
    {
      name: "userAccount",
      title: "User Account",
      type: "string",
    },
    {
      name: "platform",
      title: "Platform",
      description: `The social media platform for this user account. Example: Facebook`,
      type: "string",
      options: {
        list: [
          { title: "Facebook", value: "facebook" },
          { title: "Instagram", value: "instagram" },
          { title: "Twitter", value: "twitter" },
          { title: "LinkedIn", value: "linkedin" },
        ],
      },
    },
    {
      name: "userLink",
      title: "User Link",
      type: "url",
    },
  ],
  preview: {
    select: {
      platform: "platform",
      account: "userAccount",
    },
    prepare({ platform, account }) {
      return {
        title: `Account: ${account ? account : "Not added"}`,
        subtitle: `Platform: ${platform ? platform : "Not set"}`,
      }
    },
  },
}
