import React from "react"
import variant_a from "./variant_a.png"
import variant_b from "./variant_b.png"
import variant_c from "./variant_c.png"
import variant_d from "./variant_d.png"
import variant_e from "./variant_e.png"
import styles from "../../styles/variants.css"

export const variantA = () => {
  return <img src={variant_a} className={styles.header} />
}

export const variantB = () => {
  return <img src={variant_b} className={styles.header} />
}

export const variantC = () => {
  return <img src={variant_c} className={styles.header} />
}

export const variantD = () => {
  return <img src={variant_d} className={styles.header} />
}

export const variantE = () => {
  return <img src={variant_e} className={styles.header} />
}
