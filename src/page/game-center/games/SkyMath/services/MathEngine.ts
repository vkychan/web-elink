
import { MathQuestion, DifficultyConfig } from '../types';

export class MathEngine {
  static generateQuestion(config: DifficultyConfig): MathQuestion {
    const { rangeMin, rangeMax, operators } = config;
    const op = operators[Math.floor(Math.random() * operators.length)];
    
    let a = Math.floor(Math.random() * (rangeMax - rangeMin + 1)) + rangeMin;
    let b = Math.floor(Math.random() * (rangeMax - rangeMin + 1)) + rangeMin;

    let answer = 0;
    let equation = "";

    switch (op) {
      case '+':
        answer = a + b;
        equation = `${a} + ${b}`;
        break;
      case '-':
        // Ensure positive answers for primary school
        if (a < b) [a, b] = [b, a];
        answer = a - b;
        equation = `${a} - ${b}`;
        break;
      case '*':
        answer = a * b;
        equation = `${a} × ${b}`;
        break;
      default:
        answer = a + b;
        equation = `${a} + ${b}`;
    }

    const options = this.generateOptions(answer, config.targetCount);
    
    return {
      equation,
      answer,
      options
    };
  }

  private static generateOptions(correctAnswer: number, count: number): number[] {
    const options = new Set<number>();
    options.add(correctAnswer);

    while (options.size < count) {
      const offset = Math.floor(Math.random() * 11) - 5; // -5 to +5
      const fake = correctAnswer + offset;
      if (fake >= 0 && fake !== correctAnswer) {
        options.add(fake);
      } else {
        // Random fallback if offset results in negative or duplicate
        options.add(Math.floor(Math.random() * 100));
      }
    }

    return Array.from(options).sort(() => Math.random() - 0.5);
  }
}
