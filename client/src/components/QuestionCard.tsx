import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/hooks/useLanguage';
import type { Question } from '../data/questions';

interface QuestionCardProps {
  question: Question;
  onAnswer: (optionIndex: number) => void;
  isAnimating?: boolean;
}

export function QuestionCard({ question, onAnswer, isAnimating = false }: QuestionCardProps) {
  const { currentLanguage } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="w-full"
    >
      <Card className="border-none shadow-lg bg-card">
        <CardContent className="p-8">
          <h2 className="text-2xl font-semibold text-center mb-8 leading-relaxed">
            {question[currentLanguage]}
          </h2>
          
          <div className="space-y-4">
            {question.options.map((option, index) => (
              <Button
                key={index}
                variant="outline"
                className="answer-option w-full p-6 h-auto text-left justify-start text-wrap hover:scale-[1.02] transition-all duration-200 hover:shadow-md border-2 hover:border-primary/50"
                onClick={() => !isAnimating && onAnswer(index)}
                disabled={isAnimating}
              >
                <span className="text-base leading-relaxed">
                  {option[currentLanguage]}
                </span>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
