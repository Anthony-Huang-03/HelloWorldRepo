import React, { useState, useEffect } from 'react';

const TypewriterAndInverseEffect = ({ lines, speed, pauseDuration }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0); // Index of the current line
  const [charIndex, setCharIndex] = useState(0); // Character index within the current line
  const [isTyping, setIsTyping] = useState(true);
  const [isPausing, setIsPausing] = useState(false); // New state to manage pause

  useEffect(() => {
    if (index >= lines.length) return; // Stop if all lines have been processed

    const currentLine = lines[index];

    const type = () => {
      if (charIndex < currentLine.length) {
        setDisplayedText((prev) => prev + currentLine.charAt(charIndex));
        setCharIndex((prev) => prev + 1);
      } else {
        // Once typing is complete, pause before erasing (unless it's the last line)
        if (index < lines.length - 1) {
          setIsPausing(true);
        }
      }
    };

    const erase = () => {
      if (charIndex > 0) {
        setDisplayedText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      } else {
        // Move to the next line after erasing
        if (index < lines.length - 1) {
          setIsTyping(true);
          setIndex((prev) => prev + 1);
          setCharIndex(0); // Reset character index for the next line
          setDisplayedText(' '); // Set a space to prevent line shifting
        }
      }
    };

    const timer = setTimeout(() => {
      if (isPausing) {
        setIsPausing(false); // Reset pause state after delay
        setIsTyping(false); // Start erasing after pause
      } else if (isTyping) {
        type();
      } else {
        erase();
      }
    }, isPausing ? pauseDuration : speed);

    // Cleanup function
    return () => clearTimeout(timer);
  }, [lines, speed, isTyping, index, charIndex, pauseDuration, isPausing]);

  return <div>{displayedText}</div>;
};

export default TypewriterAndInverseEffect;
