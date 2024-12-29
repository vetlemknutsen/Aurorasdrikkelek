"use client";

import {useEffect, useState} from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../jeg-har-aldri/jeg-har-aldri.module.css";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const backend_url =  "https://aurorasdrikkelek-production.up.railway.app";

export default function bliKjent() {
    const [index, setIndex] = useState(0);
    const [cards, setCards] = useState([]);
    const [isCardsLoaded, setIsCardsLoaded] = useState(false);
    const [isClient, setIsClient] = useState(false);
    const [containerBgColor, setContainerBgColor] = useState("white");


    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (isClient && cards.length === 0) {
            fetch(`${backend_url}/api/games/blikjent/cards`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Data mottatt:', data);
                    const shuffledCards = shuffleArray(data.cards);
                    setCards(shuffledCards);
                    setIsCardsLoaded(true);
                })
                .catch(error => {
                    console.error('Feil under sending av forespørsel:', error);
                });
        }
    }, [isClient, cards.length]);

    const shuffleArray = (array) => {
        let shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    };

    const swipe = (direction) => {
        if (direction === "next" && index < cards.length - 1) {
            setIndex(index + 1);
        } else if (direction === "prev" && index > 0) {
            setIndex(index - 1);
        }
    };

    useEffect(() => {
        if (cards[index - 1]) {
            setContainerBgColor(cards[index - 1].color);
        }
    }, [index, cards]);


    return (
        <div className={styles.container} style={{ backgroundColor: containerBgColor }}>
            <AnimatePresence>
                {isCardsLoaded && cards.length > 0 && (
                    <>

                        <motion.div
                            key={cards[index].id}
                            className={styles.card}
                            style={{backgroundColor: cards[index].color}}
                            initial={{x: 300, opacity: 0}}
                            animate={{x: 0, opacity: 1}}
                            exit={{x: 300, opacity: 0}}
                            transition={{
                                duration: 0.3,
                                ease: "linear",
                            }}
                        >
                            <p className={styles.cardText}>{cards[index].title}</p>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
            <Link href="/" className={styles.backButton}>
                <ArrowBackIcon />
            </Link>
            <div className={styles.controls}>
                <button
                    className={`${styles.button} ${styles['button-prev']}`}
                    onClick={() => swipe("prev")}
                    disabled={index === 0}
                >
                    <ChevronLeft/>
                </button>
                <button
                    className={`${styles.button} ${styles['button-next']}`}
                    onClick={() => swipe("next")}
                    disabled={index === cards.length - 1}
                >
                    <ChevronRight/>
                </button>
            </div>

        </div>
    );
}
