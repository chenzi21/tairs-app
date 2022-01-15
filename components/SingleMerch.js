import React from "react"
import styles from "../styles/SingleMerch.module.scss"

export default function SingleMerch ({title, image, price, shouldScale}) {
    console.log(title, shouldScale)
    return(
        <div className={styles.singleMerch} data-scale={shouldScale}>
            <div className={styles.merchTitle}>
                {title}
            </div>
            <img src={image} />
            <div className={styles.price}>
                {price}
            </div>
        </div>
    )
}