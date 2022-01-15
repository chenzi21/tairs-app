import React from "react"
import styles from "../styles/SingleMerch.module.scss"

export default function SingleMerch ({title, image, price}) {
    return(
        <div className={styles.singleMerch}>
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