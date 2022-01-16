import React from "react";
import NavCategory from "./NavCategory";
import styles from "../styles/Navbar.module.scss";

const categories = [
    "Merchandise",
    "Drawings",
    "Contact Us",
    "About"
];

export default function Navbar() {
    return (
        <div className={styles.navbar}>
            {categories.map(category => {
                return (
                    <NavCategory title={category} key={category} />
                );
            })}
        </div>
    );
}