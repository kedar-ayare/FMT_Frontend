import React, { createContext, useState } from 'react';

export const ImageContext = createContext();

export const ImageProvider = ({ children }) => {
    const [images, setImages] = useState([]);
    const [text, setText] = useState("working atleast")
    const [caption, setCaption] = useState("");

    return (
        <ImageContext.Provider value={{ images, setImages, caption, setCaption }}>
        {children}
        </ImageContext.Provider>
    );
};
