
import { DifficultyConfig } from './types';

export const CANVAS_WIDTH = 800;
export const CANVAS_HEIGHT = 600;

export const PLAYER_WIDTH = 60;
export const PLAYER_HEIGHT = 60;
export const PLAYER_SPEED = 2;

export const PROJECTILE_WIDTH = 8;
export const PROJECTILE_HEIGHT = 20;
export const PROJECTILE_SPEED = 10;

export const TARGET_WIDTH = 80;
export const TARGET_HEIGHT = 50;

export const INITIAL_HP = 3;
export const INITIAL_SCORE = 0;

export const DIFFICULTY_LEVELS: Record<number, DifficultyConfig> = {
  1: {
    level: 1,
    rangeMin: 1,
    rangeMax: 10,
    operators: ['+'],
    targetCount: 3,
    baseSpeed: 0.3,
  },
  2: {
    level: 2,
    rangeMin: 5,
    rangeMax: 20,
    operators: ['+', '-'],
    targetCount: 3,
    baseSpeed: 1.0,
  },
  3: {
    level: 3,
    rangeMin: 10,
    rangeMax: 50,
    operators: ['+', '-'],
    targetCount: 4,
    baseSpeed: 2.0,
  },
  4: {
    level: 4,
    rangeMin: 1,
    rangeMax: 10,
    operators: ['*'],
    targetCount: 4,
    baseSpeed: 2.8,
  },
  5: {
    level: 5,
    rangeMin: 5,
    rangeMax: 15,
    operators: ['*', '+'],
    targetCount: 5,
    baseSpeed: 3.2,
  }
};
