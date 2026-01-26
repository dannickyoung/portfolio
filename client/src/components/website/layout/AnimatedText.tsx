import { ReactNode } from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

/**
 * Animated scrolling text component (inspired by kedavra.me)
 * Creates an infinite scrolling effect with repeated text
 */
export default function AnimatedText({ text, className = '' }: AnimatedTextProps) {
  // Repeat text multiple times for seamless scroll
  const repeatedText = Array(20).fill(text);

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <div className="animate-scroll-text inline-flex">
        {repeatedText.map((t, i) => (
          <span key={i} className="px-8">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

