import React from "react";
import styles from "../../styles/Merchandise.module.scss";
import MerchType from "../../components/MerchType";
import Navbar from "../../components/Navbar";

const merchTypes = [
    "Hats",
    "Shirts",
    "Sweatshirts",
];

export default function Merchandise() {
    return (
        <div className={styles.masterContainer}>
            <div className={styles.mainContainer}>
                {merchTypes.map(type => {
                    return (<MerchType title={type} key={type} />);
                })}
            </div>
        </div>
    );
}