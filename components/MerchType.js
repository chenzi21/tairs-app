import React from "react";
import styles from "../styles/MerchType.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleLeft, faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
import SingleMerch from "./singleMerch";

const Merch = [
    {
        title: "air-jordans",
        image: "someImage",
        price: "100$"
    },
    {
        title: "air-jordans1",
        image: "someImage",
        price: "200$"
    },
    {
        title: "air-jordans2",
        image: "someImage",
        price: "300$"
    },
    {
        title: "air-jordans3",
        image: "someImage",
        price: "400$"
    },
]

export default function MerchType({ title }) {
    return (
        <div className={styles.MerchTypeContainer}>
            <div className={styles.merchContainerTitle}>
                {title}
            </div>
            <div className={styles.merchContent}>
                <FontAwesomeIcon icon={faChevronCircleLeft} />
                {Merch.map(merch => {
                    return (
                        <SingleMerch title={merch.title} key={merch.title} price={merch.price} image={merch.image} />
                    )
                })}
                <FontAwesomeIcon icon={faChevronCircleRight} />
            </div>
        </div>
    )
}