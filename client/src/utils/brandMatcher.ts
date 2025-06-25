import type { Answer } from '@shared/schema';
import type { Question } from '../hooks/useQuiz';

export function calculateBrandScores(answers: Answer[], questions: Question[]): Record<string, number> {
  const brandScores: Record<string, number> = {};
  const brandWeightedCounts: Record<string, number> = {};
  const brandMaxWeight: Record<string, number> = {};

  // Calculate weighted scores with emphasis on higher weights
  answers.forEach(answer => {
    const question = questions.find(q => q.id === answer.questionId);
    if (!question) return;

    const selectedOption = question.options[answer.optionIndex];
    if (!selectedOption) return;

    // Process weights with emphasis on higher values
    Object.entries(selectedOption.weights).forEach(([brandId, weight]) => {
      if (!brandScores[brandId]) {
        brandScores[brandId] = 0;
        brandWeightedCounts[brandId] = 0;
        brandMaxWeight[brandId] = 0;
      }
      
      // Square the weight to emphasize higher values more
      const emphasizedWeight = weight * weight;
      brandScores[brandId] += emphasizedWeight;
      brandWeightedCounts[brandId] += weight;
      brandMaxWeight[brandId] = Math.max(brandMaxWeight[brandId], weight);
    });
  });

  // Apply final scoring with preference for brands with higher individual weights
  const finalScores: Record<string, number> = {};
  
  Object.keys(brandScores).forEach(brandId => {
    const totalScore = brandScores[brandId];
    const avgWeight = brandWeightedCounts[brandId] / answers.length;
    const maxWeight = brandMaxWeight[brandId];
    
    // Bonus multiplier for brands with consistently high weights (4-5)
    const consistencyBonus = maxWeight >= 4 ? 1.5 : 1.0;
    const avgWeightBonus = avgWeight >= 3 ? 1.2 : 1.0;
    
    finalScores[brandId] = totalScore * consistencyBonus * avgWeightBonus;
  });

  return finalScores;
}
