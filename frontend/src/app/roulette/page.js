"use client";

import { useState, useEffect, useRef } from "react";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import {IconButton, Tooltip} from "@mui/material";
import styles from "@/app/jeg-har-aldri/jeg-har-aldri.module.css";
import styles2 from "./roulette.module.css"
import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";


export default function Home() {
    const [isRunning, setIsRunning] = useState(false);
    const [color, setColor] = useState("white");
    const [currentInterval, setCurrentInterval] = useState(0);
    const [showInfo, setShowInfo] = useState(false);
    const [hasStarted, setHasStarted] = useState(false);
    const intervals = [100, 100, 200,200 ,200,200,300,300, 300,300,500, 500,600,600,700,700, 900, 900];
    const timeoutRef = useRef(null);
    const stopTimeoutRef = useRef(null);

    const switchBackgroundColor = () => {
        setColor((prevColor) => (prevColor === "red" ? "green" : "red"));
    };

    const startRoulette = () => {
        setIsRunning(true);
        setColor("white");
        setCurrentInterval(0);
        setHasStarted(true);

        const blink = (index) => {
            if (index < intervals.length) {
                switchBackgroundColor();
                timeoutRef.current = setTimeout(() => {
                    blink(index + 1);
                }, intervals[index]);
            } else {
                clearTimeout(timeoutRef.current);
                timeoutRef.current = null;
                const randomValue = Math.random();
                setColor(randomValue <= 0.4 ? "red" : "green");
                setIsRunning(false);

            }
        };

        blink(0);

        stopTimeoutRef.current = setTimeout(() => {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
            const randomValue = Math.random();
            setColor(randomValue <= 0.4 ? "red" : "green");
            setIsRunning(false);
        }, 5000);
    };

    const toggleInfo = () => {
        setShowInfo((prev) => !prev);
    };

    useEffect(() => {
        return () => {
            clearTimeout(timeoutRef.current);
            clearTimeout(stopTimeoutRef.current);
        };
    }, []);


    return (
        <div className={hasStarted ? '' : styles2.background} style={{ backgroundColor: color, height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ textAlign: "center" }}>
                {!isRunning ? (
                    <button onClick={startRoulette} style={{ padding: "20px", fontSize: "20px", borderRadius: "500px", fontFamily: 'Jumble, sans-serif' }}>
                        Start
                    </button>
                ) : (
                    <p style={{ fontSize: "24px", color: "#fff" }}></p>
                )}
            </div>
            {!isRunning && (
                <Link href="/" className={styles2.backButton2}>
                    <ArrowBackIcon />
                </Link>
            )}
            {!isRunning && (

            <Tooltip title="Info" arrow>
                <IconButton
                    onClick={toggleInfo}
                    style={{
                        position: "absolute",
                        top: "20px",
                        left: "40px",
                        color: "black",
                        backgroundColor: "white",

                        borderRadius: "50%",
                        padding: "0px",
                        width: "20px",
                        height: "20px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <HelpOutlineIcon />
                </IconButton>
            </Tooltip>


            )}

            {showInfo && (
                <div style={{
                    position: "absolute",
                    top: "60px",
                    left: "16px",
                    padding: "10px",
                    backgroundColor: "white",
                    borderRadius: "8px",
                    border: "1px solid black",
                    width: "300px",
                    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                }}>
                    <p style={{
                        fontSize: "16px",
                        textAlign: "center",
                        fontFamily: "Arial, sans-serif",
                        fontWeight: "500",
                    }}>
                        Dette er "Roulette". Her må alle deltakere inn på nettsiden for å spille.
                        Alle deltakere legger telefonen sin på bordet og trykker "Start!". Da starter det en roulette
                        hvor du ender med enten rød eller grønn farge.

                        De som fikk grønn, drikk! De som fikk rød, dere trenger ikke gjøre noe!

                        For å prøve på nytt, trykk "Prøv på nytt".
                    </p>
                </div>
            )}

        </div>
    );
}