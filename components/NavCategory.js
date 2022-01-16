import React from "react";
import Link from "next/link";
import styles from "../styles/NavCategory.module.scss";

export default function NavCategory({ title }) {
    return (
        <div className={styles.container}>
            <Link href={{ pathname: `/${title.replace(" ", "")}` }}>
                <div className={`${styles.title} noSelect`}>
                    {title}
                </div>
            </Link>
        </div>
    );
}