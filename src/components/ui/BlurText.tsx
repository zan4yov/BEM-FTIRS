import { useState, useEffect, useRef } from 'react';

interface BlurTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

export function BlurText({ text, className, style }: BlurTextProps) {
  const words = text.split(' ');
  const [on, setOn] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setOn(true);
    }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className={className} style={style}>
      {words.map((w, i) => (
        <span key={i} style={{
          display: 'inline-block',
          marginRight: '0.22em',
          opacity: on ? 1 : 0,
          filter: on ? 'blur(0px)' : 'blur(10px)',
          transform: on ? 'translateY(0)' : 'translateY(45px)',
          transition: `opacity 0.65s ease ${i * 0.1}s, filter 0.65s ease ${i * 0.1}s, transform 0.65s cubic-bezier(.22,.61,.36,1) ${i * 0.1}s`,
        }}>{w}</span>
      ))}
    </div>
  );
}
