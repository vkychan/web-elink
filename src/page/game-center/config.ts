// src/pages/GameCenter/config.ts
import React from 'react';
import skymath from './images/skymath.png';

export interface GameEntry {
  id: string;
  name: string;
  thumbnail: string;
  // 使用动态导入，只有玩家点击时才会加载该游戏的代码
  component: () => Promise<{ default: React.ComponentType<any> }>;
}

export const GAME_REGISTRY: Record<string, GameEntry> = {
  'sky-math': {
    id: 'sky-math',
    name: 'SKY MATH',
    thumbnail: skymath,
    component: () => import('./games/SkyMath/App'), // 指向游戏入口
  },
  'sky-math1': {
    id: 'sky-math1',
    name: 'SKY MATH 1',
    thumbnail: skymath,
    component: () => import('./games/SkyMath/App'), // 指向游戏入口
  }
};