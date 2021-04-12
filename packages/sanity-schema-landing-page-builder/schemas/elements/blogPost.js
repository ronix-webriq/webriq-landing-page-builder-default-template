import { MdDescription } from "react-icons/md"

export default {
  name: "blogPost",
  icon: MdDescription,
  type: "object",
  fields: [
    {
      name: "blogImage",
      title: "Add Blog Image",
      description: "Add an image which will be your blog banner.",
      type: "addImage",
    },
    {
      name: "title",
      title: "Title",
      description: "Add a title for your blog post.",
      type: "string",
    },
    {
      name: "author",
      title: "Author",
      description: "Add the author for this blog post.",
      type: "addPerson",
    },
    {
      name: "datePosted",
      title: "Date Posted",
      type: "date",
      options: {
        dateFormat: "MM-DD-YYYY",
        calendarTodayLabel: "Today",
      },
    },
    {
      name: "addText",
      title: "Blog Content",
      description: "Add your blog content here.",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
  preview: {
    select: {
      media: "blogImage.image",
      author: "author.person",
      date: "datePosted",
      heading: "title",
    },
    prepare({ media, author, date, heading }) {
      return {
        title: `Heading: ${heading ? heading : "Not added"}`,
        subtitle: `By: ${author ? author : "Not added"} , 
                  Updated: ${date ? date : "Not set"}`,
        media: media,
      }
    },
  },
}
