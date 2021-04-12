import React from "react"
import variant_a from "./variant_a.png"
import variant_b from "./variant_b.png"
import variant_c from "./variant_c.png"
import styles from "../../styles/variants.css"

export const variantA = () => {
  return <img src={variant_a} className={styles.promo} />
}

export const variantB = () => {
  return <img src={variant_b} className={styles.promo} />
}

export const variantC = () => {
  return <img src={variant_c} className={styles.promo} />
}
