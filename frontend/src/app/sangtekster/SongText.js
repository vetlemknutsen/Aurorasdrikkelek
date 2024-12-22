import React from 'react';
import styles from "./sangtekster.module.css"
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";


const SongText = ({ lyricsText, headerText, backgroundColor, setCurrentSong }) => {


    const formatLyrics = (lyrics) => {

        const lines = lyrics.split('\n');
        const formattedLyrics = lines.map((line, index) => {

            const regex = /\((.*?)\)/;
            const match = line.match(regex);

            if (match) {
                const textBeforeParentheses = line.split('(')[0];
                const textInsideParentheses = match[1];


                return (
                    <div key={index}>
                        <p>{textBeforeParentheses}</p>
                        <p style={{ fontWeight: 'bold' }}>({textInsideParentheses})</p>
                        <br />
                    </div>
                );
            } else {

                return <p key={index}>{line}</p>;
            }
        });

        return formattedLyrics;
    };

    return (
        <div>
            <Link href="/" className={styles.backButton2}>
                <ArrowBackIcon />
            </Link>
            <div
                style={{
                    backgroundColor: backgroundColor,
                    color: 'white',
                    padding: '20px',
                    height: '100vh',
                    width: '100vw',
                    overflowY: 'scroll',
                    textAlign: "center"
                }}
            >
                <h1 style={{textAlign: 'center', marginBottom: '30px', marginTop: "5%"}}>{headerText}</h1>
                <div>{formatLyrics(lyricsText)}</div>
            </div>
        </div>
    );
};

export default SongText;
