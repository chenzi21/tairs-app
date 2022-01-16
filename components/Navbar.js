import React from "react";
import NavCategory from "./NavCategory";
import styles from "../styles/Navbar.module.scss";
import Logo from "../images/logo.jpeg";

const categories = [
    "Merchandise",
    "Drawings",
    "Contact Us",
    "About"
];

export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <img src={Logo.src} alt="" className={styles.logo} />
            {categories.map(category => {
                return (
                    <NavCategory title={category} key={category} />
                );
            })}
        </div>
    );
}