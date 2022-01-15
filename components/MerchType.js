import React, { useState } from "react";
import styles from "../styles/MerchType.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleLeft, faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
import SingleMerch from "./singleMerch";
import RandomId from "../essentials/randomId"

const merchWidth = 150

const Merch = [
    {
        title: "air-jordans",
        image: "someImage",
        price: "100$"
    },
    {
        title: "air-jordans",
        image: "someImage",
        price: "200$"
    },
    {
        title: "air-jordans",
        image: "someImage",
        price: "300$"
    },
    {
        title: "air-jordans",
        image: "someImage",
        price: "400$"
    },
    {
        title: "air-jordans",
        image: "someImage",
        price: "400$"
    },
    {
        title: "air-jordans",
        image: "someImage",
        price: "400$"
    },
    {
        title: "air-jordans",
        image: "someImage",
        price: "400$"
    },
    {
        title: "air-jordans",
        image: "someImage",
        price: "400$"
    },
    {
        title: "air-jordans",
        image: "someImage",
        price: "400$"
    },
    {
        title: "air-jordans",
        image: "someImage",
        price: "400$"
    },
    {
        title: "air-jordans",
        image: "someImage",
        price: "400$"
    },
]



export default function MerchType({ title }) {
    const [transX, setTransX] = useState(0)

    const clickRight = () => {
        setTransX(() => {
            return transX - 2
        })
        console.log(`right ${transX}`)
    }

    const clickLeft = () => {
        setTransX(() => {
            return transX + 2
        })
        console.log(`left ${transX}`)
    }

    return (
        <div className={styles.MerchTypeContainer}>
            <div className={styles.merchContainerTitle}>
                {title}
            </div>
            <div className={styles.merchContent}>
                <FontAwesomeIcon className={styles.icon} icon={faChevronCircleLeft} onClick={() => clickLeft()} />
                {Merch.map((merch, i) => {
                    console.log(i === (transX/2))
                    return (
                        <div className={styles.sliderSlide} key={RandomId()} data-scale={i === (transX/2)} style={{ transform: `translateX(${(i + transX) * merchWidth + 75}px)`, minWidth: `${merchWidth}px`, transition: "transform 10s" }}>
                            <SingleMerch title={merch.title + i} price={merch.price} image={merch.image} />
                        </div>
                    )
                })}
                <FontAwesomeIcon className={styles.icon} icon={faChevronCircleRight} onClick={() => clickRight()} />
            </div>
        </div>
    )
}