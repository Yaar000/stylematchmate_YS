import type { Answer, Question } from '../data/questions';

export function calculateBrandScores(answers: Answer[], questions: Question[]): Record<string, number> {
  const brandScores: Record<string, number> = {};

  answers.forEach(answer => {
    const question = questions.find(q => q.id === answer.questionId);
    if (!question) return;

    const selectedOption = question.options[answer.optionIndex];
    if (!selectedOption) return;

    // Add weights from the selected option to brand scores
    Object.entries(selectedOption.weights).forEach(([brandId, weight]) => {
      if (!brandScores[brandId]) {
        brandScores[brandId] = 0;
      }
      brandScores[brandId] += weight;
    });
  });

  return brandScores;
}
