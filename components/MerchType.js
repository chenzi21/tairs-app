import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/MerchType.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleLeft, faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
import SingleMerch from "./SingleMerch";
// import RandomId from "../essentials/randomId";
import jordans from "../images/jordans.jpg";
import useWindowDimensions from "../custom-hooks/useWindowDimensions"

const Merch = [];

for (let i = 0; i < 10; i++) {
    Merch.push({
        title: `air-jordans${i}`,
        image: jordans.src,
        price: `${i}00$`
    });
}


export default function MerchType({ title }) {
    const [sliderInfo, setSliderInfo] = useState({ transX: 0, curView: 1 });
    const isAbleToClick = useRef(true)

    const setRef = () => {
        isAbleToClick.current = false
        setTimeout(()=>{
            isAbleToClick.current = true
        },600)
    }


    const clickRight = () => {
        if(isAbleToClick.current){
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
            setRef()
        }
    };

    const clickLeft = () => {
        if(isAbleToClick.current){
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
            setRef()
        }
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
                            <div className={styles.sliderSlide} key={merch.title} style={{ transform: `translateX(${(i + transX) * 100 + 38}%)`, transition: "transform 0.5s ease" }}>
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