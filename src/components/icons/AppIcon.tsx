import React from 'react';

export type AppIconName =
  | 'clipboard'
  | 'coins'
  | 'globe'
  | 'search'
  | 'target'
  | 'briefcase'
  | 'hands'
  | 'phone'
  | 'palette'
  | 'star'
  | 'user'
  | 'rocket'
  | 'trash'
  | 'fire'
  | 'bulb'
  | 'handshake'
  | 'sprout';

type Props = {
  name: AppIconName;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
  title?: string;
};

function Svg({
  size,
  className,
  style,
  title,
  children,
}: Omit<Props, 'name'> & { children: React.ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={title}
      className={className}
      style={{ display: 'block', ...style }}
    >
      {title ? <title>{title}</title> : null}
      {children}
    </svg>
  );
}

const stroke = {
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

export function AppIcon({ name, size = 24, className, style, title }: Props) {
  switch (name) {
    case 'user':
      return (
        <Svg size={size} className={className} style={style} title={title ?? 'User'}>
          <path {...stroke} d="M20 21a8 8 0 0 0-16 0" />
          <path {...stroke} d="M12 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4Z" />
        </Svg>
      );
    case 'clipboard':
      return (
        <Svg size={size} className={className} style={style} title={title ?? 'Clipboard'}>
          <path {...stroke} d="M9 5h6" />
          <path {...stroke} d="M10 3h4a2 2 0 0 1 2 2v1H8V5a2 2 0 0 1 2-2Z" />
          <path {...stroke} d="M7 6h10a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z" />
        </Svg>
      );
    case 'coins':
      return (
        <Svg size={size} className={className} style={style} title={title ?? 'Coins'}>
          <path {...stroke} d="M12 6c3.3 0 6-1.1 6-2.5S15.3 1 12 1 6 2.1 6 3.5 8.7 6 12 6Z" />
          <path {...stroke} d="M18 3.5V7c0 1.4-2.7 2.5-6 2.5S6 8.4 6 7V3.5" />
          <path {...stroke} d="M18 7v3.5C18 12 15.3 13 12 13s-6-1-6-2.5V7" />
          <path {...stroke} d="M18 10.5V14c0 1.4-2.7 2.5-6 2.5S6 15.4 6 14v-3.5" />
        </Svg>
      );
    case 'globe':
      return (
        <Svg size={size} className={className} style={style} title={title ?? 'Globe'}>
          <path {...stroke} d="M12 22a10 10 0 1 0-10-10 10 10 0 0 0 10 10Z" />
          <path {...stroke} d="M2 12h20" />
          <path {...stroke} d="M12 2c3 2.7 4.7 6.2 4.7 10S15 19.3 12 22c-3-2.7-4.7-6.2-4.7-10S9 4.7 12 2Z" />
        </Svg>
      );
    case 'search':
      return (
        <Svg size={size} className={className} style={style} title={title ?? 'Search'}>
          <path {...stroke} d="M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16Z" />
          <path {...stroke} d="M21 21l-4.3-4.3" />
        </Svg>
      );
    case 'target':
      return (
        <Svg size={size} className={className} style={style} title={title ?? 'Target'}>
          <path {...stroke} d="M12 22a10 10 0 1 0-10-10 10 10 0 0 0 10 10Z" />
          <path {...stroke} d="M12 18a6 6 0 1 0-6-6 6 6 0 0 0 6 6Z" />
          <path {...stroke} d="M12 14a2 2 0 1 0-2-2 2 2 0 0 0 2 2Z" />
        </Svg>
      );
    case 'briefcase':
      return (
        <Svg size={size} className={className} style={style} title={title ?? 'Briefcase'}>
          <path {...stroke} d="M9 6V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1" />
          <path {...stroke} d="M4 7h16a2 2 0 0 1 2 2v3H2V9a2 2 0 0 1 2-2Z" />
          <path {...stroke} d="M2 12v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-7" />
          <path {...stroke} d="M9 12v2h6v-2" />
        </Svg>
      );
    case 'hands':
      return (
        <Svg size={size} className={className} style={style} title={title ?? 'Hands'}>
          <path {...stroke} d="M7 14l-2 2a3 3 0 0 0 0 4 3 3 0 0 0 4 0l2-2" />
          <path {...stroke} d="M17 14l2 2a3 3 0 0 1 0 4 3 3 0 0 1-4 0l-2-2" />
          <path {...stroke} d="M8 13l2-2a3 3 0 0 1 4 0l2 2" />
        </Svg>
      );
    case 'phone':
      return (
        <Svg size={size} className={className} style={style} title={title ?? 'Phone'}>
          <path {...stroke} d="M8 2h8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z" />
          <path {...stroke} d="M10 19h4" />
        </Svg>
      );
    case 'palette':
      return (
        <Svg size={size} className={className} style={style} title={title ?? 'Palette'}>
          <path {...stroke} d="M12 3a9 9 0 1 0 0 18h2a2 2 0 0 0 0-4h-1a2 2 0 0 1 0-4h3a4 4 0 0 0 0-8H12Z" />
          <path {...stroke} d="M7.5 10.5h0" />
          <path {...stroke} d="M9 7.5h0" />
          <path {...stroke} d="M12 6.5h0" />
          <path {...stroke} d="M15 7.5h0" />
        </Svg>
      );
    case 'star':
      return (
        <Svg size={size} className={className} style={style} title={title ?? 'Star'}>
          <path {...stroke} d="M12 2l2.5 6.2 6.5.5-5 4.1 1.6 6.2L12 16l-5.6 3 1.6-6.2-5-4.1 6.5-.5L12 2Z" />
        </Svg>
      );
    case 'rocket':
      return (
        <Svg size={size} className={className} style={style} title={title ?? 'Rocket'}>
          <path {...stroke} d="M14 4c3 0 6 3 6 6-2 1-4 1-6 0-1-2-1-4 0-6Z" />
          <path {...stroke} d="M10 14c-2 2-6 2-6 2s0-4 2-6c1-1 3-2 4-2l4 4c0 1-1 3-2 4Z" />
          <path {...stroke} d="M8 16l-2 4 4-2" />
          <path {...stroke} d="M13 11a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
        </Svg>
      );
    case 'trash':
      return (
        <Svg size={size} className={className} style={style} title={title ?? 'Trash'}>
          <path {...stroke} d="M4 7h16" />
          <path {...stroke} d="M10 3h4l1 2H9l1-2Z" />
          <path {...stroke} d="M6 7l1 14h10l1-14" />
          <path {...stroke} d="M10 11v6" />
          <path {...stroke} d="M14 11v6" />
        </Svg>
      );
    case 'fire':
      return (
        <Svg size={size} className={className} style={style} title={title ?? 'Fire'}>
          <path {...stroke} d="M12 22c4 0 7-3 7-7 0-3-2-5-4-7 0 2-1 3-3 4 0-3-2-5-4-7-1 2-3 4-3 7 0 4 3 10 7 10Z" />
        </Svg>
      );
    case 'bulb':
      return (
        <Svg size={size} className={className} style={style} title={title ?? 'Bulb'}>
          <path {...stroke} d="M9 18h6" />
          <path {...stroke} d="M10 22h4" />
          <path {...stroke} d="M12 2a7 7 0 0 0-4 12c.7.6 1 1.3 1 2h6c0-.7.3-1.4 1-2A7 7 0 0 0 12 2Z" />
        </Svg>
      );
    case 'handshake':
      return (
        <Svg size={size} className={className} style={style} title={title ?? 'Handshake'}>
          <path {...stroke} d="M8 13l2-2a3 3 0 0 1 4 0l2 2" />
          <path {...stroke} d="M6 12l-2 2 3 3 2-2" />
          <path {...stroke} d="M18 12l2 2-3 3-2-2" />
          <path {...stroke} d="M9 16l1 1" />
          <path {...stroke} d="M11 17l1 1" />
          <path {...stroke} d="M13 17l1 1" />
        </Svg>
      );
    case 'sprout':
      return (
        <Svg size={size} className={className} style={style} title={title ?? 'Sprout'}>
          <path {...stroke} d="M12 22v-8" />
          <path {...stroke} d="M12 14c-2.5 0-4.5-2-4.5-4.5 2.5 0 4.5 2 4.5 4.5Z" />
          <path {...stroke} d="M12 14c2.5 0 4.5-2 4.5-4.5-2.5 0-4.5 2-4.5 4.5Z" />
        </Svg>
      );
    default:
      return null;
  }
}

