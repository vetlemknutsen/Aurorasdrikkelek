"use client";

import { useEffect, useState } from 'react';

export default function Home() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetch('https://aurorasdrikkelek-production.up.railway.app/api/hello')
            .then((res) => res.json())
            .then((data) => setMessage(data.message));
    }, []);

    return (
        <div className="flex justify-center items-center h-screen">
            <h1 className="text-3xl font-bold">{message || 'Loading...'}</h1>
        </div>
    );
}
