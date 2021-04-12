import React from "react"
import variant_a from "./variant_a.png"
import variant_b from "./variant_b.png"
import styles from "../../styles/variants.css"

export const variantA = () => {
  return <img src={variant_a} className={styles.contact} />
}

export const variantB = () => {
  return <img src={variant_b} className={styles.contact} />
}
