import { useState, useEffect } from 'react';
import Tag from './Tag';
import { api } from './../core/ApiService';

const GuiffCard = () => {
    const [meme, setMeme] = useState('');

    const fetchMeme = async() => {
        setMeme( await api.memes() );
    }

    useEffect( () => {fetchMeme()}, [] );
    console.log(meme);

    return (
        <>
            <img src="" alt="guif" />
            <Tag/>
        </>
    )
}

export default GuiffCard;
