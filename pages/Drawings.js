import React from "react";
import styles from "../styles/Drawings.module.scss";
import Dragon from "../images/dragon.jpeg";
import FlowerCrown from "../images/flowerCrown.jpeg";
import flowers from "../images/flowers.jpeg";
// import RandomId from "../essentials/randomId";
import Navbar from "../components/Navbar";
import Image from "next/image";

const images = [{ image: Dragon, description: "beautifuly marvelous" }, { image: flowers, description: "beautifuly marvelous" }, { image: FlowerCrown, description: "beautifuly marvelous" }, { image: Dragon, description: "beautifuly marvelous" }, { image: Dragon, description: "beautifuly marvelous" }, { image: Dragon, description: "beautifuly marvelous" }, { image: Dragon, description: "beautifuly marvelous" }, { image: Dragon, description: "beautifuly marvelous" }, { image: Dragon, description: "beautifuly marvelous" }];

export default function Drawings() {
    return (
        <div className={styles.drawingsMasterContainer}>
            {images.map(drawing => {
                return (
                    <div className={styles.drawingContainer} key={`${drawing.image.src}`}>
                        <img src={drawing.image.src} alt="" />
                        <div className={styles.description}>
                            {drawing.description}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}