import { variantA, variantB, variantC, variantD } from "./variants"
import { MdNavigation } from "react-icons/md"

export default {
  name: "navigation",
  title: "Navigation",
  icon: MdNavigation,
  type: "object",
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
        },
      },
    },
    {
      name: "addMenu",
      title: "Add Menu",
      description: "Populate items for your navigation menu",
      type: "array",
      of: [{ type: "internalLink" }, { type: "externalLink" }],
      options: {
        editModal: "fullscreen",
      },
    },
    {
      name: "addButtons",
      title: "Add Buttons",
      type: "array",
      of: [{ type: "internalLink" }, { type: "externalLink" }],
    },
  ],
  preview: {
    select: {
      media: "image.image",
      menu: "addMenu.length",
      buttons: "addButtons.length",
    },
    prepare({ media, buttons, menu }) {
      return {
        media: media,
        title: "Navigation",
        subtitle: `Menu items: ${menu ? menu : "None"} , 
                  Buttons: ${buttons ? buttons : "None"}`,
      }
    },
  },
}
