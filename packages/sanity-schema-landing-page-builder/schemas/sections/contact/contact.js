import { variantA, variantB } from "./variants"
import { MdContacts } from "react-icons/md"

export default {
  name: "contact",
  title: "Contact",
  icon: MdContacts,
  type: "object",
  fieldsets: [
    {
      name: "address",
      title: "Address",
      description: "Add your business or office address here.",
    },
    {
      name: "emailAndNumber",
      title: "Email and Number",
      description:
        "Add your email address and telephone or mobile number here.",
    },
    {
      name: "social",
      title: "Social Media",
      desciption: "Add your social media accounts here.",
    },
  ],
  fields: [
    {
      name: "variants",
      title: "Variants",
      type: "visualOptions",
      options: {
        showTooltip: true,
        optionSize: "large",
        list: {
          variant_a: {
            name: "Variant A",
            icon: variantA,
          },
          variant_b: {
            name: "Variant B",
            icon: variantB,
          },
        },
      },
    },
    {
      name: "addressHeading",
      title: "Add Heading",
      fieldset: "address",
      placeholder: "Office",
      type: "string",
    },
    {
      name: "enterAddress",
      title: "Enter Address",
      fieldset: "address",
      placeholder: "359 Hidden Valley Road, NY",
      type: "text",
    },
    {
      name: "emailAndNumberHeading",
      title: "Add Heading",
      fieldset: "emailAndNumber",
      placeholder: "Contacts",
      type: "string",
    },
    {
      name: "enterNumber",
      title: "Enter Number",
      fieldset: "emailAndNumber",
      type: "string",
    },
    {
      name: "enterEmail",
      title: "Enter Email Address",
      fieldset: "emailAndNumber",
      placeholder: "hallo@gamil.com",
      type: "string",
      validation: Rule =>
        Rule.regex(
          /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
          {
            name: "email", // Error message is "Does not match email-pattern"
            invert: false, // Boolean to allow any value that does NOT match pattern
          }
        ),
    },
    {
      name: "socialAcctHeading",
      title: "Add Heading",
      fieldset: "social",
      placeholder: "Socials",
      type: "string",
    },
    {
      name: "enterSocialAcct",
      title: "Enter Social Media Account/s",
      fieldset: "social",
      type: "array",
      of: [{ type: "socialMedia" }],
      options: {
        editModal: "fullscreen",
      },
    },
  ],
  preview: {
    select: {
      address: "enterAddress",
      email: "enterEmail",
      number: "enterNumber",
      socials: "enterSocialAcct.length",
    },
    prepare({ address, email, number, socials }) {
      return {
        title: `Contact`,
        subtitle: `Address: ${address ? "added" : "not added"},
                   Email: ${email ? "added" : "not added"},
                   Number: ${number ? "added" : "not added"},
                   Socials: ${socials ? socials : "not added"}`,
      }
    },
  },
}
