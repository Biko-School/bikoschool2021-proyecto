import { useState, useEffect } from 'react';
import Tag from './Tag';
import { api } from './../core/ApiService';

interface Meme {
    images: []
}

const GuiffCard = () => {
    const [meme, setMeme] = useState<Meme[]>([]);

    const fetchMeme = async() => {
        setMeme( await api.memes() );
    }

    useEffect( () => {fetchMeme()}, [] );
    console.log(meme[0].images);

    return (
        <>
            <img src="" alt="guif" />
            <Tag/>
        </>
    )
}

export default GuiffCard;
