import { z } from "zod";

export const answerSchema = z.object({
  questionId: z.number(),
  optionIndex: z.number(),
});

export const quizResultSchema = z.object({
  gender: z.enum(['male', 'female']),
  answers: z.array(answerSchema),
  mainBrand: z.object({
    name: z.string(),
    score: z.number(),
    description: z.string(),
    logo: z.string(),
  }),
  alternativeBrands: z.array(z.object({
    name: z.string(),
    score: z.number(),
    description: z.string(),
    logo: z.string(),
  })),
});

export type Gender = 'male' | 'female';
export type Answer = z.infer<typeof answerSchema>;
export type QuizResult = z.infer<typeof quizResultSchema>;
