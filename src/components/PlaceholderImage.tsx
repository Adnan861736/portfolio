'use client';

interface PlaceholderImageProps {
  text: string;
  width?: number;
  height?: number;
}

export function PlaceholderImage({ text, width = 1200, height = 800 }: PlaceholderImageProps) {
  return (
    <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#8b5cf6', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#grad)" />
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="48"
        fontWeight="bold"
        fill="white"
        fontFamily="system-ui"
      >
        {text}
      </text>
      <text
        x="50%"
        y="60%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="20"
        fill="rgba(255, 255, 255, 0.8)"
        fontFamily="system-ui"
      >
        Add your screenshot here
      </text>
    </svg>
  );
}
