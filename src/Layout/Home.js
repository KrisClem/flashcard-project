import React, {useState, useEffect} from "react";
import { CreateDeckButton } from "../Decks/CreateDeckButton";
import { DecksList } from "../Decks/DecksList";
import { listDecks } from "../utils/api";

export function Home () {
    const [decks, setDecks] = useState([])

    useEffect(() => {
        async function loadDecks() {
                const response = await listDecks();
                setDecks(response);
        }
       
        loadDecks();
    }, [])

    return (
        <>
        <CreateDeckButton />
        <DecksList decks={decks}/>
        </>
    )
}