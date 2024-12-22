"use client"

import { useState } from 'react';
import SongText from './SongText';
import styles from "./sangtekster.module.css"
import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Home = () => {
    const [currentSong, setCurrentSong] = useState(null);
    // const backend_url = "https://aurorasdrikkelek-production.up.railway.app";
    const backend_url = "http://localhost:5000";


    const handleSongClick = async (songTitle) => {
        try {
            const encodedTitle = encodeURIComponent(songTitle);
            const response = await fetch(`${backend_url}/api/songs/${encodedTitle}`);
            if (response.ok) {
                const song = await response.json();
                setCurrentSong(song);
            } else {
                console.error("Failed to fetch song data");
            }
        } catch (error) {
            console.error("Error fetching song:", error);
        }
    };


    return (
        <div className={`${styles.container} ${currentSong === null ? styles.background : ''}`}>
            {!currentSong && (
            <Link href="/" className={styles.backButton2}>
                <ArrowBackIcon />
            </Link>
                )}
            {!currentSong ? (
                <div className={styles.songSelection}>
                    <h1 className={styles.header}>Velg en sang!</h1>
                    <div className={styles.songList}>
                        <button
                            onClick={() => handleSongClick("Mamma Mia")}
                            className={styles.songButton}
                        >
                            Mamma Mia
                        </button>
                        <button
                            onClick={() => handleSongClick("Lay All Your Love On Me")}
                            className={styles.songButton}
                        >
                            Lay All Your Love On Me
                        </button>
                        <button
                            onClick={() => handleSongClick("Take On Me")}
                            className={styles.songButton}
                        >
                            Take On Me
                        </button>
                    </div>
                </div>
            ) : (
                <div>

                    <SongText
                        lyricsText={currentSong.lyrics}
                        headerText={currentSong.title}
                        backgroundColor={currentSong.backgroundColor}
                        setCurrentSong={setCurrentSong}
                    />
                </div>
            )}
        </div>
    );
};

export default Home;
