import React from "react"
import variant_a from "./variant_a.png"
import variant_b from "./variant_b.png"
import variant_c from "./variant_c.png"
import variant_d from "./variant_d.png"
import variant_e from "./variant_e.png"
import variant_f from "./variant_f.png"
import styles from "../../styles/variants.css"

export const variantA = () => {
  return <img src={variant_a} className={styles.cookies} />
}

export const variantB = () => {
  return <img src={variant_b} className={styles.cookies} />
}

export const variantC = () => {
  return <img src={variant_c} className={styles.cookies} />
}

export const variantD = () => {
  return <img src={variant_d} className={styles.cookies} />
}

export const variantE = () => {
  return <img src={variant_e} className={styles.cookies} />
}

export const variantF = () => {
  return <img src={variant_f} className={styles.cookies} />
}
