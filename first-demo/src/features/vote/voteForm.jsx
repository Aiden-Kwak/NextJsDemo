"use client";

import React, { useState } from "react";
import axios from "axios";

export default function VoteForm({ initialBidenCount, initialTrumpCount }) {
    const [bidenCount, setBidenCount] = useState(initialBidenCount);
    const [trumpCount, setTrumpCount] = useState(initialTrumpCount);
    const [typedMessage, setTypedMessage] = useState("");
    const [error, setError] = useState("");

    const handleInputChange = (e) => {
        setTypedMessage(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8000/api/vote/post-vote', { vote: typedMessage });
            getVoteNum();
        } catch (err) {
            setError("An error occurred: " + err.message);
        }
    };

    const getVoteNum = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/vote/get-vote');
            setBidenCount(response.data.biden_count);
            setTrumpCount(response.data.trump_count);
        } catch (err) {
            setError("An error occurred: " + err.message);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={typedMessage}
                    onChange={handleInputChange}
                    placeholder="Type 'Biden' or 'Trump'"
                />
                <button type="submit">Submit Vote</button>
            </form>
            <p>Biden Count: {bidenCount}</p>
            <p>Trump Count: {trumpCount}</p>
            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    );
}
