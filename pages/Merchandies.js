import React from "react";
import styles from "../components/Merchandies.scss"

const merchTypes = [
    "Hats",
    "Shirts",
    "Sweatshirts",
]

export default function Merchandies() {
    return (
        <div className={styles.mainContainer}>
            {merchTypes.map(type=>{
                return(<MerchType/>)
            })}
        </div>
    )
}