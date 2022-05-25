import React from 'react';
import memesData from '../memesData.js';

function Meme() {

    const [meme, setMeme] = React.useState({
        topText: '',
        bottomText: '',
        randomImg: 'http://i.imgflip.com/1bij.jpg',
    });

    const [allMemeImages, setAllMemeImages] = React.useState(memesData);

    // const [memeImage, setMemeImage] = React.useState("http://i.imgflip.com/1bij.jpg");
    
    function getMemeImage() {  
        const memesArray = allMemeImages.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randomNumber].url;        
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImg: url,
        }));
    }

    return(
        <main>
            <div className="form">
                <input 
                    type="text" 
                    placeholder="Enter your top text" 
                    className="form--input" 
                />
                <input 
                    type="text" 
                    placeholder="Enter your bottom text" 
                    className="form--input" 
                />
                <button 
                className="form--button" 
                onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <img src={meme.randomImg} className="meme--image" />
        </main>
    )
};

export default Meme;