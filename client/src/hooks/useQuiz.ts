import { useState, useCallback } from 'react';
import { questions, Question } from '../data/questions';
import { brands } from '../data/brands';
import { calculateBrandScores } from '../utils/brandMatcher';
import type { Answer, QuizResult } from '@shared/schema';

export interface QuizState {
  currentQuestionIndex: number;
  answers: Answer[];
  isLoading: boolean;
  result: QuizResult | null;
  shuffledQuestions: Question[];
}

export const useQuiz = () => {
  const [state, setState] = useState<QuizState>(() => {
    // Shuffle questions on initialization
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    return {
      currentQuestionIndex: 0,
      answers: [],
      isLoading: false,
      result: null,
      shuffledQuestions: shuffled
    };
  });

  const startQuiz = useCallback(() => {
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    setState({
      currentQuestionIndex: 0,
      answers: [],
      isLoading: false,
      result: null,
      shuffledQuestions: shuffled
    });
  }, []);

  const answerQuestion = useCallback(async (optionIndex: number) => {
    const currentQuestion = state.shuffledQuestions[state.currentQuestionIndex];
    const newAnswer: Answer = {
      questionId: currentQuestion.id,
      optionIndex
    };

    const newAnswers = [...state.answers, newAnswer];
    const nextIndex = state.currentQuestionIndex + 1;

    if (nextIndex >= state.shuffledQuestions.length) {
      // Quiz completed, calculate results
      setState(prev => ({ ...prev, isLoading: true }));
      
      // Artificial delay for better UX
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const brandScores = calculateBrandScores(newAnswers, state.shuffledQuestions);
      const sortedBrands = [...brands]
        .map(brand => ({ ...brand, score: brandScores[brand.id] || 0 }))
        .sort((a, b) => b.score - a.score);

      const result: QuizResult = {
        answers: newAnswers,
        mainBrand: {
          name: sortedBrands[0].name,
          score: Math.round((sortedBrands[0].score / Math.max(...Object.values(brandScores))) * 100),
          description: sortedBrands[0].description.ko,
          logo: sortedBrands[0].logo
        },
        alternativeBrands: sortedBrands.slice(1, 3).map(brand => ({
          name: brand.name,
          score: Math.round((brand.score / Math.max(...Object.values(brandScores))) * 100),
          description: brand.description.ko,
          logo: brand.logo
        }))
      };

      setState(prev => ({
        ...prev,
        answers: newAnswers,
        isLoading: false,
        result
      }));
    } else {
      setState(prev => ({
        ...prev,
        answers: newAnswers,
        currentQuestionIndex: nextIndex
      }));
    }
  }, [state.currentQuestionIndex, state.answers, state.shuffledQuestions]);

  const goBack = useCallback(() => {
    if (state.currentQuestionIndex > 0) {
      setState(prev => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex - 1,
        answers: prev.answers.slice(0, -1)
      }));
    }
  }, [state.currentQuestionIndex]);

  const resetQuiz = useCallback(() => {
    startQuiz();
  }, [startQuiz]);

  return {
    ...state,
    startQuiz,
    answerQuestion,
    goBack,
    resetQuiz,
    progress: (state.currentQuestionIndex / state.shuffledQuestions.length) * 100
  };
};
