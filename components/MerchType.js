import React, { useState } from "react";
import styles from "../styles/MerchType.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleLeft, faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
import SingleMerch from "./singleMerch";
// import RandomId from "../essentials/randomId";
import jordans from "../images/jordans.jpg";

const merchWidth = 300;

const Merch = [
    {
        title: "air-jordans1",
        image: jordans.src,
        price: "100$"
    },
    {
        title: "air-jordans2",
        image: jordans.src,
        price: "200$"
    },
    {
        title: "air-jordans3",
        image: jordans.src,
        price: "300$"
    },
    {
        title: "air-jordans4",
        image: jordans.src,
        price: "400$"
    },
    {
        title: "air-jordans5",
        image: jordans.src,
        price: "400$"
    },
    {
        title: "air-jordans6",
        image: jordans.src,
        price: "400$"
    },
    {
        title: "air-jordans7",
        image: jordans.src,
        price: "400$"
    },
    {
        title: "air-jordans8",
        image: jordans.src,
        price: "400$"
    },
    {
        title: "air-jordans9",
        image: jordans.src,
        price: "400$"
    },
    {
        title: "air-jordans10",
        image: jordans.src,
        price: "400$"
    },
    {
        title: "air-jordans11",
        image: jordans.src,
        price: "400$"
    },
];

export default function MerchType({ title }) {
    const [sliderInfo, setSliderInfo] = useState({ transX: 0, curView: 1 });

    const clickRight = () => {
        setSliderInfo(() => {
            const newInfo = { ...sliderInfo };
            if (newInfo.curView === Merch.length - 1) {
                newInfo.curView = 0;
                newInfo.transX = 2;
            } else {
                newInfo.transX -= 2;
                newInfo.curView += 1;
            }
            return newInfo;
        });
    };

    const clickLeft = () => {
        setSliderInfo(() => {
            const newInfo = { ...sliderInfo };
            if (newInfo.curView === 0) {
                newInfo.curView = Merch.length - 1;
                newInfo.transX = -((newInfo.curView - 1) * 2);
            } else {
                newInfo.transX += 2;
                newInfo.curView -= 1;
            }
            return newInfo;
        });
    };

    return (
        <div className={styles.MerchTypeContainer}>
            <div className={`${styles.merchContainerTitle} noSelect`}>
                {title}
            </div>
            <div className={styles.merchContent}>
                <FontAwesomeIcon className={styles.icon} icon={faChevronCircleLeft} onClick={() => clickLeft()} />
                <div className={styles.slider}>
                    {Merch.map((merch, i) => {
                        const { transX, curView } = sliderInfo;
                        return (
                            <div className={styles.sliderSlide} key={merch.title} style={{ transform: `translateX(${(i + transX) * 100 + 40}%)`, minWidth: `${merchWidth}px`, transition: "transform 0.5s ease" }}>
                                <SingleMerch title={merch.title} price={merch.price} image={merch.image} shouldScale={i === curView} />
                            </div>
                        );
                    })}
                </div>
                <FontAwesomeIcon className={styles.icon} icon={faChevronCircleRight} onClick={() => clickRight()} />
            </div>
        </div>
    );
}