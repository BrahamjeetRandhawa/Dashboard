import React, { useEffect, useState } from "react";



function TypingHeading({ text = "", speed = 75 }) {
    const [displayText, setDisplayText] = useState("");
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (!text) return;


const timer = setTimeout(() => {
    setDisplayText((prev) => prev + text.charAt(index));
    setIndex((prev) => prev + 1);
}, speed);
if (index >= text.length) {
    clearTimeout(timer);
}
return () => clearTimeout(timer);
    }, [index, text, speed]);

    useEffect(() => {
        setDisplayText("");
        setIndex(0);
    }, [text]);

    return ( 
    <span className="dynamicHeading">{displayText}</span>
    );
}

export default TypingHeading;