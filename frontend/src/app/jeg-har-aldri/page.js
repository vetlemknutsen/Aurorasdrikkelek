"use client";


import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./jeg-har-aldri.module.css";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

const cards = [
    { id: 1, text: "Kort 1: Velkommen!", color: "#FF5733" },
    { id: 2, text: "Kort 2: Neste steg", color: "#33FF57" },
    { id: 3, text: "Kort 3: Fortsett å swipe!", color: "#3357FF" },
    { id: 4, text: "Kort 4: Du er nesten ferdig!", color: "#F3FF33" },
];

export default function JegHarAldri() {
    const [index, setIndex] = useState(0);

    const swipe = (direction) => {
        if (direction === "next" && index < cards.length - 1) {
            setIndex(index + 1);
        } else if (direction === "prev" && index > 0) {
            setIndex(index - 1);
        }
    };

    return (
        <div className={styles.container}>
            <AnimatePresence>
                <motion.div
                    key={cards[index].id}
                    className={styles.card}
                    style={{backgroundColor: cards[index].color}}
                    initial={{x: 300, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    exit={{x: -300, opacity: 0}}
                    transition={{duration: 0.5}}
                >
                    <p className={styles.cardText}>{cards[index].text}</p>
                </motion.div>
            </AnimatePresence>
            <div className={styles.controls}>
                <button
                    className={`${styles.button} ${styles['button-prev']}`}
                    onClick={() => swipe("prev")}
                    disabled={index === 0}
                >
                    <ChevronLeft />
                </button>
                <button
                    className={`${styles.button} ${styles['button-next']}`}
                    onClick={() => swipe("next")}
                    disabled={index === cards.length - 1}
                >
                    <ChevronRight />
                </button>
            </div>

        </div>
    );
}
