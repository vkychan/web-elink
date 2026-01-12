
export enum GameState {
  IDLE = 'IDLE',
  PLAYING = 'PLAYING',
  PAUSED = 'PAUSED',
  GAMEOVER = 'GAMEOVER',
  VICTORY = 'VICTORY'
}

export interface MathQuestion {
  equation: string;
  answer: number;
  options: number[];
}

export interface GameObject {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface Projectile extends GameObject {
  active: boolean;
}

export interface Target extends GameObject {
  value: number;
  isCorrect: boolean;
  active: boolean;
  speed: number;
}

export interface FloatingText {
  id: string;
  x: number;
  y: number;
  text: string;
  color: string;
  life: number; // 0 to 1
}

export interface DifficultyConfig {
  level: number;
  rangeMin: number;
  rangeMax: number;
  operators: string[];
  targetCount: number;
  baseSpeed: number;
}

export interface Notification {
  id: string;
  message: string;
  type: 'info' | 'success' | 'warning';
}
