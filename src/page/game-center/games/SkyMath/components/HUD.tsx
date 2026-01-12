
import React from 'react';
import { MathQuestion } from '../types';
import '../App.css';

interface HUDProps {
  score: number;
  hp: number;
  shield: number;
  streak: number;
  level: number;
  question: MathQuestion | null;
  onPause: () => void;
}

export const HUD: React.FC<HUDProps> = ({ score, hp, shield, streak, level, question, onPause }) => {
  const isShieldReady = shield >= 5;

  return (
    <div className="sky-math-hud">
      {/* Top Bar Stats */}
      <div className="sky-math-hud-top">
        <div className="sky-math-hud-left">
          <div className="sky-math-score-box">
            <span className="sky-math-score-label">Flight.Score</span>
            <span className="sky-math-score-value">{score.toLocaleString()}</span>
          </div>
          
          {/* Health & Shield */}
          <div className="sky-math-health-shield-box">
             <div className="sky-math-health-row">
                <span className="sky-math-health-label">Hull Integrity</span>
                <div className="sky-math-health-bars">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div key={i} className={`sky-math-health-bar ${i < hp ? 'active' : 'inactive'}`} />
                  ))}
                </div>
             </div>
             <div className="sky-math-shield-row">
                <div className="sky-math-shield-header">
                   <span className={`sky-math-shield-label ${isShieldReady ? 'ready' : 'not-ready'}`}>
                     Kinetic Shield {isShieldReady ? '[READY]' : ''}
                   </span>
                   <span className="sky-math-shield-value">{Math.min(shield, 5)}/5</span>
                </div>
                <div className="sky-math-shield-bar-container">
                  <div 
                    className={`sky-math-shield-bar ${isShieldReady ? 'ready' : 'not-ready'}`}
                    style={{ width: `${(Math.min(shield, 5) / 5) * 100}%` }} 
                  />
                </div>
             </div>
          </div>
        </div>

        <div className="sky-math-hud-right">
          <button 
            onClick={onPause}
            className="sky-math-pause-btn"
            title="Pause Game [ESC]"
          >
            <div className="sky-math-pause-btn-bars">
              <div className="sky-math-pause-btn-bar"></div>
              <div className="sky-math-pause-btn-bar delay"></div>
            </div>
          </button>

          <div className="sky-math-level-box">
            <span className="sky-math-level-label">Combat.Rank</span>
            <div className="sky-math-level-value">LVL {level}</div>
          </div>
          {streak > 0 && (
            <div className="sky-math-streak">
              {streak}X STREAK
            </div>
          )}
        </div>
      </div>

      {/* Optimized Question Panel - Moved higher and made more compact */}
      {question && (
        <div className="sky-math-question-container">
          <div className="sky-math-question-wrapper">
            <div className="sky-math-question-glow" />
            <div className="sky-math-question-box">
               {/* Grid deco */}
              <div className="sky-math-question-grid"></div>
              
              <div className="sky-math-question-label">Target Equation</div>
              
              <div className="sky-math-question-equation">
                {question.equation}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Corner Accents */}
      <div className="sky-math-corner-accent left" />
      <div className="sky-math-corner-accent right" />
    </div>
  );
};
