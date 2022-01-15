import React from "react"
import styles from "../styles/SingleMerch.module.scss"

export default function SingleMerch ({title, image, price, shouldScale}) {
    return(
        <div className={`${styles.singleMerch} noSelect`} data-scale={shouldScale} draggable={false}>
            <div className={styles.merchTitle}>
                {title}
            </div>
            <img src={image} draggable={false} />
            <div className={styles.price}>
                {price}
            </div>
        </div>
    )
}