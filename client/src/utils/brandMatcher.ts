import type { Answer } from '@shared/schema';
import type { Question } from '../hooks/useQuiz';

export function calculateBrandScores(answers: Answer[], questions: Question[]): Record<string, number> {
  const brandScores: Record<string, number> = {};
  const brandCounts: Record<string, number> = {};

  answers.forEach(answer => {
    const question = questions.find(q => q.id === answer.questionId);
    if (!question) return;

    const selectedOption = question.options[answer.optionIndex];
    if (!selectedOption) return;

    // Add weights from the selected option to brand scores
    Object.entries(selectedOption.weights).forEach(([brandId, weight]) => {
      if (!brandScores[brandId]) {
        brandScores[brandId] = 0;
        brandCounts[brandId] = 0;
      }
      brandScores[brandId] += weight;
      brandCounts[brandId] += 1;
    });
  });

  // Normalize scores by the number of questions that mentioned each brand
  // This prevents brands mentioned in more questions from having unfair advantage
  Object.keys(brandScores).forEach(brandId => {
    if (brandCounts[brandId] > 0) {
      brandScores[brandId] = (brandScores[brandId] / brandCounts[brandId]) * brandCounts[brandId];
    }
  });

  return brandScores;
}
