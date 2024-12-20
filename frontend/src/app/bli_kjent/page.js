"use client";

import {useEffect, useState} from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../jeg-har-aldri/jeg-har-aldri.module.css";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import Link from "next/link";

const backend_url =  "https://aurorasdrikkelek-production.up.railway.app";

export default function bliKjent() {
    const [index, setIndex] = useState(0);
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch(`${backend_url}/api/games/blikjent/cards`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(data => {
                console.log('Data mottatt:', data);
                setCards(data.cards);
            })
            .catch(error => {
                console.error('Feil under sending av forespørsel:', error);
            });
    }, []);

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
                {cards.length > 0 && (
                    <>

                        <motion.div
                            key={cards[index].id}
                            className={styles.card}
                            style={{backgroundColor: cards[index].color}}
                            initial={{x: 300, opacity: 0}}
                            animate={{x: 0, opacity: 1}}
                            transition={{
                                duration: 0.2,
                                ease: "linear",
                            }}
                        >
                            <p className={styles.cardText}>{cards[index].title}</p>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
            <Link href="/" className={styles.backButton}>
                Tilbake
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
