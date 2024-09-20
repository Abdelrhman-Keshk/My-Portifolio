import React, { useState, useEffect } from "react";

const Typewriter = ({ texts, speed, deleteSpeed, delay }) => {
    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [textIndex, setTextIndex] = useState(0);

    useEffect(() => {
        const currentText = texts[textIndex];

        const handleTyping = () => {
            if (!isDeleting) {
                if (currentIndex < currentText.length) {
                    setDisplayedText((prev) => prev + currentText[currentIndex]);
                    setCurrentIndex(currentIndex + 1);
                } else {
                    setTimeout(() => setIsDeleting(true), delay);
                }
            } else {
                if (currentIndex > 0) {
                    setDisplayedText((prev) => prev.slice(0, -1));
                    setCurrentIndex(currentIndex - 1);
                } else {
                    setIsDeleting(false);
                    setTextIndex((prev) => (prev + 1) % texts.length);
                }
            }
        };

        const interval = setInterval(handleTyping, isDeleting ? deleteSpeed : speed);

        return () => clearInterval(interval);
    }, [currentIndex, isDeleting, textIndex, texts, speed, deleteSpeed, delay]);

    return <span className="type-writer">{displayedText}<span className="writer-line"></span></span>;
};


export default Typewriter