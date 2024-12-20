"use client";

import { useState } from "react";
import Link from 'next/link';
import SettingsIcon from '@mui/icons-material/Settings';

export default function HomePage() {
    const [isInfoVisible, setInfoVisible] = useState(false);

    const toggleInfo = () => {
        setInfoVisible(!isInfoVisible);
    };

    return (
        <div className="centered-container">
            <img src="/champis.png" alt="Champagne" className="champagne"/>
            <img src="/logo.png" alt="Logo" className="logo"/>

            <div className="grid-container">
                <Link href="/roulette" className="game-button bg-teal">Roulette</Link>
                <Link href="/jeg-har-aldri" className="game-button exclude-font-size bg-pink">Jeg har aldri</Link>
                <Link href={'#'} className="game-button bg-indigo">Hot Seat</Link>
                <Link href="/snusboksen" className="game-button bg-lime">Snusboksen</Link>
                <Link href={'#'} className="game-button bg-blue">Sangtekster</Link>
                <Link href={'#'} className="game-button bg-yellow">Bli kjent!</Link>
            </div>

            <button
                onClick={toggleInfo}
                className="info-button"
            >
                <SettingsIcon/>
            </button>

            {isInfoVisible && (
                <div className="info-box">
                    <p>
                        Velkommen til "Aurora's Drikkelek" - det perfekte nettsted for å sette i gang kvelden!
                        Aurora's drikkelek inneholder både gamle og nye drikkeleker, samlet på ett sted!
                        Instruksjoner for hver drikkelek finner du inne på info-knappen på lekene.
                        Husk å drikke med måte og behandle dine meddeltakere med respekt! Aldersgrense: 18+
                    </p>
                </div>
            )}
        </div>
    );
}
