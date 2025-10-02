// DynamicTypingText.tsx
import React, { useState, useEffect } from 'react';

const DynamicTypingText: React.FC<{ phrases: string[]; speed?: number; className?: string }> = ({ phrases, speed = 150, className }) => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentPhrase = phrases[phraseIndex];
      
      // Determine the new text
      const updatedText = isDeleting
        ? currentPhrase.substring(0, text.length - 1)
        : currentPhrase.substring(0, text.length + 1);
      
      setText(updatedText);

      // Determine when to switch state
      if (!isDeleting && updatedText === currentPhrase) {
        // Pause at end of phrase before starting to delete
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && updatedText === '') {
        // Finished deleting, move to next phrase
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      }
    };

    // Set the speed for the typing effect
    const typingSpeed = isDeleting ? speed / 2 : speed;
    
    const timeout = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, phraseIndex, phrases, speed]);

  return (
    <span className={className}>
      {text}
      {/* Blinking Cursor */}
      <span className="ml-1 font-extrabold text-blue-600 animate-pulse border-r-2 border-blue-600"></span>
    </span>
  );
};

export default DynamicTypingText;