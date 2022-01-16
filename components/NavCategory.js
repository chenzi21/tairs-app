import React from "react";
import Link from "next/link";
import styles from "../styles/NavCategory.module.scss";

export default function NavCategory({ title }) {
    return (
        <div className={styles.navContainer}>
            <Link href={{ pathname: `/${title.replace(" ", "")}` }} passHref>
                <div className={`${styles.title} noSelect`}>
                    {title}
                </div>
            </Link>
        </div>
    );
}