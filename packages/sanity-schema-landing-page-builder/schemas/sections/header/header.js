import { variantA, variantB, variantC, variantD } from "./variants"
import { MdVerticalAlignTop } from "react-icons/md"

export default {
  name: "header",
  title: "Header",
  icon: MdVerticalAlignTop,
  type: "object",
  fieldsets: [
    {
      name: "addButtons",
      title: "Add Buttons",
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
          variant_c: {
            name: "Variant C",
            icon: variantC,
          },
          variant_d: {
            name: "Variant D",
            icon: variantD,
          },
          // variant_e: {
          //   name: "Variant E",
          //   icon: variantE,
          // },
        },
      },
    },
    {
      name: "headerContent",
      title: "Header content",
      type: "hero",
      inputComponent: "headerSections",
    },
    {
      name: "primaryButton",
      title: "Primary Button",
      fieldset: "addButtons",
      type: "addButton",
      options: {
        collapsible: true,
        collapsed: false,
      },
    },
    {
      name: "secondaryButton",
      title: "Secondary Button",
      fieldset: "addButtons",
      type: "addButton",
      options: {
        collapsible: true,
        collapsed: false,
      },
    },
  ],
  preview: {
    select: {
      media: "headerContent.addMedia.length",
      buttons: "addButtons.length",
    },
    prepare({ buttons, media }) {
      return {
        title: `Header`,
        subtitle: `Media items: ${media ? media : "None"} , 
                   Buttons: ${buttons ? buttons : "None"}`,
      }
    },
  },
}
