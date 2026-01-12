import React, { useState, useEffect, useRef, useCallback } from 'react';
import { GameState, MathQuestion, Projectile, Target, Notification, FloatingText } from './types';
import {
  CANVAS_WIDTH,
  CANVAS_HEIGHT,
  PLAYER_WIDTH,
  PLAYER_HEIGHT,
  PLAYER_SPEED,
  PROJECTILE_WIDTH,
  PROJECTILE_HEIGHT,
  PROJECTILE_SPEED,
  TARGET_WIDTH,
  TARGET_HEIGHT,
  INITIAL_HP,
  INITIAL_SCORE,
  DIFFICULTY_LEVELS
} from './constants';
import { MathEngine } from './services/MathEngine';
import { HUD } from './components/HUD';
import { NotificationSystem } from './components/NotificationSystem';
import './App.css';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>(GameState.IDLE);
  const [score, setScore] = useState(INITIAL_SCORE);
  const [hp, setHp] = useState(INITIAL_HP);
  const [shield, setShield] = useState(0);
  const [streak, setStreak] = useState(0);
  const [level, setLevel] = useState(1);
  const [currentQuestion, setCurrentQuestion] = useState<MathQuestion | null>(null);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [isShaking, setIsShaking] = useState(false);
  const [isWarping, setIsWarping] = useState(false);

  // Performance Refs
  const gameStateRef = useRef<GameState>(GameState.IDLE);
  const scoreRef = useRef(INITIAL_SCORE);
  const hpRef = useRef(INITIAL_HP);
  const shieldRef = useRef(0);
  const streakRef = useRef(0);
  const levelRef = useRef(1);
  const floatingTextsRef = useRef<FloatingText[]>([]);
  const playerRef = useRef({ x: CANVAS_WIDTH / 2 - PLAYER_WIDTH / 2, y: CANVAS_HEIGHT - 100 });
  const projectilesRef = useRef<Projectile[]>([]);
  const targetsRef = useRef<Target[]>([]);
  const keysPressed = useRef<Record<string, boolean>>({});
  const requestRef = useRef<number>(0);
  const lastShotTime = useRef<number>(0);
  const [tick, setTick] = useState(0);

  const syncState = useCallback(() => {
    setScore(scoreRef.current);
    setHp(hpRef.current);
    setShield(shieldRef.current);
    setStreak(streakRef.current);
    setLevel(levelRef.current);
  }, []);

  const triggerShake = () => {
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 200);
  };

  const spawnFloatingText = (x: number, y: number, text: string, color: string) => {
    floatingTextsRef.current.push({
      id: Math.random().toString(36).substring(7),
      x, y, text, color, life: 1.0
    });
  };

  const addNotification = useCallback((message: string, type: 'info' | 'success' | 'warning' = 'info') => {
    const id = Math.random().toString(36).substring(7);
    setNotifications(prev => [...prev, { id, message, type }]);
  }, []);

  const handleDamage = useCallback(() => {
    if (shieldRef.current >= 5) {
      shieldRef.current = 0;
      addNotification("SHIELD ABSORBED IMPACT", "info");
      spawnFloatingText(playerRef.current.x + PLAYER_WIDTH / 2, playerRef.current.y, "SHIELD BLOCK", "#22d3ee");
      triggerShake();
    } else {
      hpRef.current -= 1;
      triggerShake();
      spawnFloatingText(playerRef.current.x + PLAYER_WIDTH / 2, playerRef.current.y, "HULL DAMAGE!", "#ef4444");
      if (hpRef.current <= 0) {
        gameStateRef.current = GameState.GAMEOVER;
        setGameState(GameState.GAMEOVER);
      }
    }
    syncState();
  }, [addNotification, syncState]);

  const spawnQuestion = useCallback(() => {
    const config = DIFFICULTY_LEVELS[levelRef.current];
    const question = MathEngine.generateQuestion(config);
    setCurrentQuestion(question);

    const targets: Target[] = question.options.map((val, i) => {
      const step = CANVAS_WIDTH / (question.options.length + 1);
      return {
        id: Math.random().toString(36).substring(7),
        x: step * (i + 1) - TARGET_WIDTH / 2,
        y: -150 - (Math.random() * 100),
        width: TARGET_WIDTH,
        height: TARGET_HEIGHT,
        value: val,
        isCorrect: val === question.answer,
        active: true,
        speed: config.baseSpeed + (Math.random() * 0.4)
      };
    });
    targetsRef.current = targets;
  }, []);

  const gameLoop = useCallback((time: number) => {
    if (gameStateRef.current !== GameState.PLAYING) return;

    // 1. Movement
    const speed = PLAYER_SPEED;
    if (keysPressed.current['ArrowLeft'] || keysPressed.current['KeyA']) playerRef.current.x = Math.max(0, playerRef.current.x - speed);
    if (keysPressed.current['ArrowRight'] || keysPressed.current['KeyD']) playerRef.current.x = Math.min(CANVAS_WIDTH - PLAYER_WIDTH, playerRef.current.x + speed);
    if (keysPressed.current['ArrowUp'] || keysPressed.current['KeyW']) playerRef.current.y = Math.max(0, playerRef.current.y - speed);
    if (keysPressed.current['ArrowDown'] || keysPressed.current['KeyS']) playerRef.current.y = Math.min(CANVAS_HEIGHT - PLAYER_HEIGHT, playerRef.current.y + speed);

    // 2. Firing
    if (keysPressed.current['Space'] && time - lastShotTime.current > 180) {
      projectilesRef.current.push({
        id: Math.random().toString(36).substring(7),
        x: playerRef.current.x + PLAYER_WIDTH / 2 - PROJECTILE_WIDTH / 2,
        y: playerRef.current.y,
        width: PROJECTILE_WIDTH,
        height: PROJECTILE_HEIGHT,
        active: true
      });
      lastShotTime.current = time;
    }

    // 3. Updates
    projectilesRef.current.forEach(p => p.y -= PROJECTILE_SPEED);
    projectilesRef.current = projectilesRef.current.filter(p => p.y > -50);

    floatingTextsRef.current.forEach(ft => {
      ft.y -= 1.4;
      ft.life -= 0.015;
    });
    floatingTextsRef.current = floatingTextsRef.current.filter(ft => ft.life > 0);

    // 4. Targets Logic
    let needsNewQuestion = false;
    let correctOnScreen = false;

    for (let i = targetsRef.current.length - 1; i >= 0; i--) {
      const t = targetsRef.current[i];
      t.y += t.speed;
      if (t.isCorrect) correctOnScreen = true;

      // Off-screen check
      if (t.y > CANVAS_HEIGHT) {
        if (t.isCorrect) {
          handleDamage();
          spawnFloatingText(t.x + TARGET_WIDTH / 2, CANVAS_HEIGHT - 60, "TARGET ESCAPED!", "#ef4444");
          needsNewQuestion = true;
          break;
        }
        targetsRef.current.splice(i, 1);
        continue;
      }

      // Projectile Collision
      let hit = false;
      for (let j = projectilesRef.current.length - 1; j >= 0; j--) {
        const p = projectilesRef.current[j];
        if (p.x < t.x + t.width && p.x + p.width > t.x && p.y < t.y + t.height && p.y + p.height > t.y) {
          projectilesRef.current.splice(j, 1);
          targetsRef.current.splice(i, 1);
          hit = true;

          if (t.isCorrect) {
            scoreRef.current += 100;
            streakRef.current += 1;
            shieldRef.current = Math.min(5, shieldRef.current + 1);
            spawnFloatingText(t.x + TARGET_WIDTH / 2, t.y, "+100 SCORE", "#4ade80");

            if (streakRef.current % 5 === 0 && levelRef.current < 5) {
              levelRef.current += 1;
              setIsWarping(true);
              setTimeout(() => setIsWarping(false), 2000);
              addNotification(`SPEED INCREASE: LVL ${levelRef.current}`, 'success');
            }
            needsNewQuestion = true;
          } else {
            scoreRef.current = Math.max(0, scoreRef.current - 50);
            streakRef.current = 0;
            spawnFloatingText(t.x + TARGET_WIDTH / 2, t.y, "WRONG TARGET!", "#ef4444");
            if (levelRef.current > 1 && Math.random() > 0.7) {
              levelRef.current -= 1;
              addNotification("DIFFICULTY SCALED BACK", "warning");
            }
          }
          syncState();
          break;
        }
      }
      if (hit && needsNewQuestion) break;

      // Plane Collision
      if (playerRef.current.x < t.x + t.width && playerRef.current.x + PLAYER_WIDTH > t.x && playerRef.current.y < t.y + t.height && playerRef.current.y + PLAYER_HEIGHT > t.y) {
        targetsRef.current.splice(i, 1);
        handleDamage();
        if (gameStateRef.current !== GameState.PLAYING) break;
      }
    }

    if (needsNewQuestion || (!correctOnScreen && targetsRef.current.length === 0)) {
      spawnQuestion();
    }

    setTick(prev => prev + 1);
    if (gameStateRef.current === GameState.PLAYING) {
      requestRef.current = requestAnimationFrame(gameLoop);
    }
  }, [spawnQuestion, syncState, addNotification, handleDamage]);

  const togglePause = useCallback(() => {
    setGameState(prev => {
      if (prev === GameState.PLAYING) return GameState.PAUSED;
      if (prev === GameState.PAUSED) return GameState.PLAYING;
      return prev;
    });
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent, isDown: boolean) => {
      keysPressed.current[e.code] = isDown;
      if (e.code === 'Space') {
         e.preventDefault();
    }
      if (isDown && e.code === 'Escape') {
        togglePause();
      }
    };
    const down = (e: KeyboardEvent) => handleKey(e, true);
    const up = (e: KeyboardEvent) => handleKey(e, false);
    window.addEventListener('keydown', down);
    window.addEventListener('keyup', up);
    return () => { window.removeEventListener('keydown', down); window.removeEventListener('keyup', up); };
  }, [togglePause]);

  useEffect(() => {
    if (gameState === GameState.PLAYING) {
      gameStateRef.current = GameState.PLAYING;
      requestRef.current = requestAnimationFrame(gameLoop);
    } else {
      gameStateRef.current = gameState;
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    }
    return () => { if (requestRef.current) cancelAnimationFrame(requestRef.current); };
  }, [gameState, gameLoop]);

  const quitGame = () => {
    // 1. Reset Game State
    gameStateRef.current = GameState.IDLE;
    setGameState(GameState.IDLE);

    // 2. Clear UI/Notifications
    setNotifications([]);
    setScore(INITIAL_SCORE);
    setLevel(1);
    setStreak(0);
    setShield(0);
    setHp(INITIAL_HP);
  };

  const startGame = () => {
    // 1. Force clear all notifications immediately
    setNotifications([]);

    // 2. Reset REFs to initial values
    scoreRef.current = INITIAL_SCORE;
    hpRef.current = INITIAL_HP;
    shieldRef.current = 0;
    streakRef.current = 0;
    levelRef.current = 1;
    playerRef.current = { x: CANVAS_WIDTH / 2 - PLAYER_WIDTH / 2, y: CANVAS_HEIGHT - 100 };
    projectilesRef.current = [];
    targetsRef.current = [];
    floatingTextsRef.current = [];

    // 3. Explicitly reset component STATE to prevent persistence during re-mount
    setScore(INITIAL_SCORE);
    setHp(INITIAL_HP);
    setShield(0);
    setStreak(0);
    setLevel(1);
    setCurrentQuestion(null);

    // 4. Update state to trigger gameplay render
    setGameState(GameState.PLAYING);
    spawnQuestion();
  };

  return (
    <div className={`sky-math-container ${isShaking ? 'animate-shake' : ''}`}>
      <div className="sky-math-bg-gradient" />
      <div className={`sky-math-stars ${isWarping ? 'animate-warp' : ''}`} />

      {/* Container is now adaptive using aspect-ratio and max-width/height */}
      <div className="sky-math-game-container">

        {/* IDLE SCREEN */}
        {gameState === GameState.IDLE && (
          <div className="sky-math-idle-screen">
            <h1 className="sky-math-title">SKY MATH</h1>
            <h2 className="sky-math-subtitle">PILOT ACADEMY</h2>
            <button onClick={startGame} className="sky-math-start-btn">
              <span>Take Flight</span>
            </button>
            <div className="sky-math-controls">
              <div className="sky-math-control-item">
                <div className="sky-math-control-key">W</div>
                <div>THRUST</div>
              </div>
              <div className="sky-math-control-item">
                <div className="sky-math-control-key">A</div>
                <div>LEFT</div>
              </div>
              <div className="sky-math-control-item">
                <div className="sky-math-control-key">S</div>
                <div>DOWN</div>
              </div>
              <div className="sky-math-control-item">
                <div className="sky-math-control-key">D</div>
                <div>RIGHT</div>
              </div>
              <div className="sky-math-control-item">
                <div className="sky-math-control-key space">SPACE</div>
                <div>CANNONS</div>
              </div>
            </div>
          </div>
        )}

        {/* PAUSE MENU */}
        {gameState === GameState.PAUSED && (
          <div className="sky-math-pause-menu">
            <div className="sky-math-pause-content">
              <h2 className="sky-math-pause-title">MISSION PAUSED</h2>
              <div className="sky-math-pause-buttons">
                <button onClick={togglePause} className="sky-math-pause-btn">RESUME FLIGHT</button>
                <button onClick={quitGame} className="sky-math-pause-btn abort">ABORT MISSION</button>
              </div>
            </div>
          </div>
        )}

        {/* GAME OVER SCREEN */}
        {gameState === GameState.GAMEOVER && (
          <div className="sky-math-gameover-screen">
            <h2 className="sky-math-gameover-title">SQUADRON DOWN</h2>
            <div className="sky-math-gameover-stats">
              <div className="sky-math-gameover-stat-row">
                <span>FINAL SCORE:</span>
                <span className="sky-math-gameover-stat-value">{score}</span>
              </div>
              <div className="sky-math-gameover-stat-row">
                <span>LEVEL REACHED:</span>
                <span className="sky-math-gameover-stat-value">{level}</span>
              </div>
              <div className="sky-math-gameover-stat-row">
                <span>MAX STREAK:</span>
                <span className="sky-math-gameover-stat-value">{streak}</span>
              </div>
            </div>
            <div className="sky-math-gameover-buttons">
              <button onClick={startGame} className="sky-math-gameover-btn">RE-TRY</button>
              <button onClick={quitGame} className="sky-math-gameover-btn menu">MENU</button>
            </div>
          </div>
        )}

        {/* MAIN GAME LAYER */}
        {(gameState === GameState.PLAYING || gameState === GameState.PAUSED) && (
          <>
            <HUD
              score={score}
              hp={hp}
              shield={shield}
              streak={streak}
              level={level}
              question={currentQuestion}
              onPause={togglePause}
            />
            <NotificationSystem notifications={notifications} onDismiss={(id) => setNotifications(prev => prev.filter(n => n.id !== id))} />

            {/* SVG uses viewBox to handle scaling automatically */}
            <svg
              viewBox={`0 0 ${CANVAS_WIDTH} ${CANVAS_HEIGHT}`}
              className="sky-math-svg"
              preserveAspectRatio="xMidYMid meet"
            >
                  <defs>
                    <filter id="glow-cyan"><feGaussianBlur stdDeviation="3" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
                    <linearGradient id="orbGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#22d3ee" /><stop offset="100%" stopColor="#1e40af" />
                    </linearGradient>
                    <radialGradient id="shieldGrad">
                        <stop offset="70%" stopColor="#22d3ee" stopOpacity="0" />
                        <stop offset="95%" stopColor="#22d3ee" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.6" />
                    </radialGradient>
                  </defs>

                  {/* Targets */}
                  {targetsRef.current.map(t => (
                    <g key={t.id} transform={`translate(${t.x}, ${t.y})`}>
                      <circle cx={TARGET_WIDTH/2} cy={TARGET_HEIGHT/2} r={32} fill="url(#orbGrad)" fillOpacity="0.8" stroke="rgba(255,255,255,0.4)" strokeWidth="2" />
                      <circle cx={TARGET_WIDTH/2} cy={TARGET_HEIGHT/2} r={38} fill="none" stroke="rgba(34,211,238,0.2)" strokeWidth="1" />
                      <text x={TARGET_WIDTH/2} y={TARGET_HEIGHT/2 + 10} textAnchor="middle" className="font-game sky-math-target-text">{t.value}</text>
                    </g>
                  ))}

                  {/* Floating Text */}
                  {floatingTextsRef.current.map(ft => (
                    <text key={ft.id} x={ft.x} y={ft.y} fill={ft.color} fillOpacity={ft.life} className="font-game sky-math-floating-text" textAnchor="middle">
                      {ft.text}
                    </text>
                  ))}

                  {/* Projectiles */}
                  {projectilesRef.current.map(p => (
                    <rect key={p.id} x={p.x} y={p.y} width={p.width} height={p.height} fill="#22d3ee" rx="4" filter="url(#glow-cyan)" />
                  ))}

                  {/* Airplane */}
                  <g transform={`translate(${playerRef.current.x}, ${playerRef.current.y})`}>
                    <path d="M30,0 L35,15 L55,25 L35,35 L30,55 L25,35 L5,25 L25,15 Z" fill="#f1f5f9" filter="url(#glow-cyan)" />
                    <path d="M30,5 L34,15 L30,45 L26,15 Z" fill="#0ea5e9" />

                    {/* Shield Effect */}
                    {shield >= 5 && (
                      <g className="sky-math-shield-effect">
                        <circle cx="30" cy="25" r="45" fill="url(#shieldGrad)" />
                        <circle cx="30" cy="25" r="45" fill="none" stroke="#22d3ee" strokeWidth="1.5" opacity="0.6" />
                        <circle cx="30" cy="25" r="43" fill="none" stroke="#22d3ee" strokeWidth="0.5" opacity="0.4" />
                      </g>
                    )}

                    {/* Engine fire */}
                    <path d="M25,55 L30,75 L35,55 Z" fill="orange" className="sky-math-engine-fire" />
                  </g>
                </svg>
              </>
            )}
      </div>
    </div>
  );
};

export default App;
