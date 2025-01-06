"use client"

import { useState, useEffect } from "react";
import styles from "@/app/jeg-har-aldri/jeg-har-aldri.module.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import {IconButton} from "@mui/material";

const StopWatch = () => {
    const [timer, setTimer] = useState(null);
    const [currentTime, setCurrentTime] = useState(0);
    const [timeDiff, setTimeDiff] = useState(0);
    const [isInfoBoxVisible, setIsInfoBoxVisible] = useState(false);

    const updateTimeDifference = (time) => {
        const seconds = time;
        if (seconds <= 60) {
            setTimeDiff(Math.floor((60 - seconds) / 2));
        } else {
            setTimeDiff(Math.floor((seconds - 60) / 2));
        }
    };

    const updateTimeLabel = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    };

    const startTimer = () => {
        if (!timer) {
            const newTimer = setInterval(() => {
                setCurrentTime((prev) => prev + 1);
            }, 1000);
            setTimer(newTimer);
        }
    };

    const pauseTimer = () => {
        if (timer) {
            clearInterval(timer);
            setTimer(null);
        }
        updateTimeDifference(currentTime);
    };

    const resetTimer = () => {
        clearInterval(timer);
        setTimer(null);
        setCurrentTime(0);
        setTimeDiff(0);
    };

    useEffect(() => {
        updateTimeDifference(currentTime);
    }, [currentTime]);

    return (
        <div style={{backgroundColor: "#fffcd1"}}>
            <Link href="/" className={styles.backButtonHotseat}>
                <ArrowBackIcon/>
            </Link>
                <IconButton
                    onClick={() => setIsInfoBoxVisible(!isInfoBoxVisible)}
                    style={{
                        position: "absolute",
                        top: "13px",
                        left: "30px",
                        color: "black",
                        backgroundColor: "transparent",

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
            <div className="centered-container">

                {isInfoBoxVisible && (
                    <div className="info-box">
                        <p>
                            Dette er "Hot Seat". Start klokken og prøv å stoppe den nærmest ett
                            minutt. Differansen i sekunder avgjør antall "slurker".
                        </p>
                    </div>
                )}

                <div className="stopwatch-time">
                    {updateTimeLabel(currentTime)}
                </div>
                <div className="stopwatch-diff">
                    {timeDiff} Slurker!
                </div>

                <div className="stopwatch-button-container">
                    <button
                        onClick={startTimer}
                        className="stopwatch-button bg-green exclude-font-size"
                    >
                        Start
                    </button>
                    <button
                        onClick={pauseTimer}
                        className="stopwatch-button bg-yellow exclude-font-size"
                    >
                        Pause
                    </button>
                    <button
                        onClick={resetTimer}
                        className="stopwatch-button bg-pink exclude-font-size"
                    >
                        Reset
                    </button>
                </div>
            </div>
        </div>
    );
};

export default StopWatch;
