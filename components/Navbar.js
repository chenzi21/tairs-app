import React, { useEffect, useState } from "react";
import NavCategory from "./NavCategory";
import styles from "../styles/Navbar.module.scss";
import Logo from "../images/logo.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

const categories = [
    "Merchandise",
    "Drawings",
    "Contact Us",
    "About"
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const router = useRouter()

    const handleMenuOpen = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        if (menuOpen) setMenuOpen(false)
    }, [router.route])

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
            <FontAwesomeIcon icon={faEllipsisV} className={styles.icon} data-menu-open={menuOpen} onClick={handleMenuOpen} />
        </div>
    );
}