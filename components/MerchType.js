import React, { useState } from "react";
import styles from "../styles/MerchType.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleLeft, faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
import SingleMerch from "./singleMerch";
import RandomId from "../essentials/randomId"
import jordans from "../images/jordans.jpg"

const merchWidth = 150

const Merch = [
    {
        title: "air-jordans",
        image: jordans.src,
        price: "100$"
    },
    {
        title: "air-jordans",
        image: jordans.src,
        price: "200$"
    },
    {
        title: "air-jordans",
        image: jordans.src,
        price: "300$"
    },
    {
        title: "air-jordans",
        image: jordans.src,
        price: "400$"
    },
    {
        title: "air-jordans",
        image: jordans.src,
        price: "400$"
    },
    {
        title: "air-jordans",
        image: jordans.src,
        price: "400$"
    },
    {
        title: "air-jordans",
        image: jordans.src,
        price: "400$"
    },
    {
        title: "air-jordans",
        image: jordans.src,
        price: "400$"
    },
    {
        title: "air-jordans",
        image: jordans.src,
        price: "400$"
    },
    {
        title: "air-jordans",
        image: jordans.src,
        price: "400$"
    },
    {
        title: "air-jordans",
        image: jordans.src,
        price: "400$"
    },
]



export default function MerchType({ title }) {
    const [sliderInfo, setSliderInfo] = useState({ transX: 0, curView: 0 })

    const clickRight = () => {
        setSliderInfo(() => {
            const newInfo = { ...sliderInfo }
            newInfo.transX -= 2
            newInfo.curView += 1
            return newInfo
        })
    }

    const clickLeft = () => {
        setSliderInfo(() => {
            const newInfo = { ...sliderInfo }
            newInfo.transX += 2
            newInfo.curView -= 1
            return newInfo
        })
    }

    return (
        <div className={styles.MerchTypeContainer}>
            <div className={styles.merchContainerTitle}>
                {title}
            </div>
            <div className={styles.merchContent}>
                <FontAwesomeIcon className={styles.icon} icon={faChevronCircleLeft} onClick={() => clickLeft()} />
                {Merch.map((merch, i) => {
                    const { transX, curView } = sliderInfo
                    return (
                        <div className={styles.sliderSlide} key={RandomId()} data-scale={i === curView} style={{ transform: `translateX(${(i + transX) * merchWidth + 75}px) scale(1)`, minWidth: `${merchWidth}px` }}>
                            <SingleMerch title={merch.title + i} price={merch.price} image={merch.image} />
                        </div>
                    )
                })}
                <FontAwesomeIcon className={styles.icon} icon={faChevronCircleRight} onClick={() => clickRight()} />
            </div>
        </div>
    )
}