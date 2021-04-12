import { MdGrade } from "react-icons/md"

export default {
  name: "questionsAsked",
  title: "Questions Asked",
  icon: MdGrade,
  type: "object",
  fields: [
    {
      name: "question",
      title: "Question",
      placeholder: "What is the question?",
      type: "string",
    },
    {
      name: "answer",
      title: "Answer",
      placeholder: "Add the answer here.",
      type: "text",
    },
  ],
  preview: {
    select: {
      question: "question",
      answer: "answer",
    },
    prepare({ question, answer }) {
      return {
        title: `Question: ${question ? question : "Not added"}`,
        subtitle: `Answer: ${answer ? answer : "Not added"}`,
      }
    },
  },
}
