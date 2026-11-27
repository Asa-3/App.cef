/** Ícones de linha simples (estilo do novo design). Herdam a cor do texto. */
const PATHS = {
  home: 'M3 11.5 12 4l9 7.5M5.5 9.5V20h5v-5.5h3V20h5V9.5',
  chat: 'M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v8a2.5 2.5 0 0 1-2.5 2.5H10l-4.5 3.5V17h0A1.5 1.5 0 0 1 4 15.5z',
  people:
    'M9 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM2.5 20c.6-3.4 3.2-5.5 6.5-5.5s5.9 2.1 6.5 5.5M16 4.3a3.5 3.5 0 0 1 0 6.4M18 14.8c1.9.7 3.2 2.5 3.5 5.2',
  user: 'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4.5 20.5c.8-3.8 3.8-6 7.5-6s6.7 2.2 7.5 6',
  search: 'M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM20 20l-4-4',
  plus: 'M12 5v14M5 12h14',
  chevronRight: 'M9 5l7 7-7 7',
  group: 'M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM16 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM2 19c.5-3 2.8-5 6-5s5.5 2 6 5M14.5 14.2c.5-.1 1-.2 1.5-.2 3.2 0 5.5 2 6 5',
  mail: 'M4 6h16v12H4zM4 7l8 6 8-6',
  phone:
    'M6.5 3.5h3l1.5 4-2 1.5a11 11 0 0 0 6 6l1.5-2 4 1.5v3a2 2 0 0 1-2 2A16.5 16.5 0 0 1 4.5 5.5a2 2 0 0 1 2-2z',
  briefcase: 'M4 8h16v11H4zM9 8V5.5h6V8M4 13h16',
  building: 'M5 20V4h10v16M15 9h4v11M8 8h4M8 12h4M8 16h4M3 20h18',
  cake: 'M4 20h16v-7H4zM4 16c2 1.5 4-1.5 6 0s4-1.5 6 0 4-1.5 4 0M12 13V9M12 6.5c-.8 0-1.3-.6-1.3-1.3S12 3 12 3s1.3 1.5 1.3 2.2-.5 1.3-1.3 1.3z',
} as const;

export type IconName = keyof typeof PATHS;

type IconProps = { name: IconName; size?: number; strokeWidth?: number };

export function Icon({ name, size = 24, strokeWidth = 2 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={sizeֻǱ˞