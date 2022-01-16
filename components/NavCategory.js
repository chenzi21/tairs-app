import React from "react";
import Link from "next/link";
import styles from "../styles/NavCategory.module.scss";

export default function NavCategory({ title }) {
    return (
        <Link href={{ pathname: `/${title.replace(" ", "")}` }} passHref>
            <div className={styles.navContainer}>
                <div className={`${styles.title} noSelect`}>
                    {title}
                </div>
            </div>
        </Link>
    );
}