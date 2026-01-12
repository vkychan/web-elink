import React, { lazy, useMemo, useState } from 'react';
import { Spin } from 'antd';
import { GAME_REGISTRY } from './config';
import './GamePlayer.css';

const GamePlayer = () => {
  const [activeGameId, setActiveGameId] = useState<string | null>(null);

  const GameComponent = useMemo(() => {
    if (!activeGameId) return null;
    const entry = GAME_REGISTRY[activeGameId];
    if (!entry) return null;
    return lazy(entry.component);
  }, [activeGameId]);


  if (!activeGameId) {
    return (
      <div className="game-gallery-wrapper">
        <div className="game-card-list">
          {Object.values(GAME_REGISTRY).map((game) => (
            <div key={game.id} className="game-card">
              <div className="game-thumb-wrapper">
                <img
                  src={game.thumbnail}
                  alt={game.name}
                  className="game-thumb"
                />
                <button
                  className="game-play-btn"
                  onClick={() => setActiveGameId(game.id)}
                >
                  ▶
                </button>
              </div>
              <div className="game-name">{game.name}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (!GameComponent) {
    return <div>Game not found</div>;
  }

  return (
    <div className="game-runtime-wrapper">
      <button
        className="back-to-center-btn"
        onClick={() => setActiveGameId(null)}
      >
        ← Game Center
      </button>

      <React.Suspense
          fallback={
            <div className="game-loading-mask">
              <Spin size="large" tip="Loading game..." />
            </div>
          }
        >
          <GameComponent />
        </React.Suspense>
    </div>
  );
};

export default GamePlayer;
