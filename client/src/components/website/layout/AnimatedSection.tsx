import { ReactNode } from 'react';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';

interface AnimatedSectionProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function AnimatedSection({ children, delay = 0, className = '' }: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1, triggerOnce: true });

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      } ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

