import React, { useState } from "react";
import NavCategory from "./NavCategory";
import styles from "../styles/Navbar.module.scss";
import Logo from "../images/logo.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";

const categories = [
    "Merchandise",
    "Drawings",
    "Contact Us",
    "About"
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const handleMenuOpen = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <div className={styles.navbar}>
            <img src={Logo.src} alt="" className={styles.logo} />
            <div className={styles.categories} data-menu-open={menuOpen}>
                {categories.map(category => {
                    return (
                        <NavCategory title={category} key={category} />
                    );
                })}
            </div>
            <FontAwesomeIcon icon={faEllipsisV} className={styles.icon} onClick={handleMenuOpen} />
        </div>
    );
}