import React from "react";
import styles from "../styles/Merchandies.module.scss"
import MerchType from "../components/MerchType";
import Navbar from "../components/Navbar";

const merchTypes = [
    "Hats",
    "Shirts",
    "Sweatshirts",
]

export default function Merchandies() {
    return (
        <div className={styles.masterContainer}>
            <Navbar/>
            <div className={styles.mainContainer}>
                {merchTypes.map(type=>{
                    return(<MerchType title={type} key={type}/>)
                })}
            </div>
        </div>
    )
}