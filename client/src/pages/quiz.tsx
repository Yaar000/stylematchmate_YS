import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Moon, Sun, RotateCcw } from 'lucide-react';
import { LanguageSelector } from '@/components/LanguageSelector';
import { ThemeProvider, useTheme } from '@/components/ThemeProvider';
import { ProgressBar } from '@/components/ProgressBar';
import { QuestionCard } from '@/components/QuestionCard';
import { ResultCard } from '@/components/ResultCard';
import { ShareButtons } from '@/components/ShareButtons';
import { useQuiz } from '@/hooks/useQuiz';
import { useLanguage } from '@/hooks/useLanguage';
import { useState } from 'react';

function QuizContent() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();
  const {
    currentQuestionIndex,
    shuffledQuestions,
    answers,
    isLoading,
    result,
    gender,
    setGender,
    startQuiz,
    answerQuestion,
    goBack,
    resetQuiz,
    progress
  } = useQuiz();
  
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentScreen, setCurrentScreen] = useState<'welcome' | 'gender-select' | 'quiz' | 'loading' | 'result'>('welcome');

  const handleStartQuiz = () => {
    setCurrentScreen('gender-select');
  };

  const handleGenderSelect = (selectedGender: 'male' | 'female') => {
    setGender(selectedGender);
    setCurrentScreen('quiz');
  };

  const handleAnswerQuestion = async (optionIndex: number) => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    
    // Add a small delay for animation
    setTimeout(async () => {
      await answerQuestion(optionIndex);
      
      if (currentQuestionIndex + 1 >= shuffledQuestions.length) {
        setCurrentScreen('loading');
        // The loading will automatically transition to result
        setTimeout(() => {
          setCurrentScreen('result');
        }, 2000);
      }
      
      setIsAnimating(false);
    }, 300);
  };

  const handleGoBack = () => {
    if (currentQuestionIndex > 0) {
      goBack();
    } else if (currentScreen === 'quiz') {
      setCurrentScreen('gender-select');
    } else {
      setCurrentScreen('welcome');
    }
  };

  const handleRestart = () => {
    resetQuiz();
    setCurrentScreen('welcome');
  };

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Header */}
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <LanguageSelector />
        <Button
          variant="outline"
          size="sm"
          onClick={toggleTheme}
          className="p-2 h-8"
        >
          {theme === 'dark' ? (
            <Sun className="h-4 w-4" />
          ) : (
            <Moon className="h-4 w-4" />
          )}
        </Button>
      </div>

      <AnimatePresence mode="wait">
        {/* Welcome Screen */}
        {currentScreen === 'welcome' && (
          <motion.div
            key="welcome"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="min-h-screen flex items-center justify-center px-4"
          >
            <div className="max-w-md w-full text-center">
              <div className="mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400" 
                  alt="Fashion collage"
                  className="w-full h-48 object-cover rounded-2xl shadow-lg"
                />
              </div>
              
              <h1 className="text-4xl font-bold mb-4 gradient-text">
                {t.title}
              </h1>
              
              <p className="text-muted-foreground mb-8 leading-relaxed whitespace-pre-line">
                {t.subtitle}
              </p>
              
              <Button 
                onClick={handleStartQuiz}
                className="w-full gradient-primary text-white py-4 px-8 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                {t.startButton}
                <ArrowLeft className="ml-2 h-5 w-5 rotate-180" />
              </Button>
              
              <div className="mt-6 text-sm text-muted-foreground">
                <span className="inline-block mr-1">⏱️</span>
                {t.duration}
              </div>
            </div>
          </motion.div>
        )}

        {/* Gender Selection Screen */}
        {currentScreen === 'gender-select' && (
          <motion.div
            key="gender-select"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="min-h-screen flex items-center justify-center px-4"
          >
            <div className="max-w-md w-full text-center">
              <h1 className="text-3xl font-bold mb-8 gradient-text">
                {t.genderSelect}
              </h1>
              
              <div className="space-y-4">
                <Button
                  onClick={() => handleGenderSelect('male')}
                  className="w-full py-6 px-8 rounded-xl font-semibold text-lg bg-blue-500 hover:bg-blue-600 text-white hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  👨 {t.male}
                </Button>
                
                <Button
                  onClick={() => handleGenderSelect('female')}
                  className="w-full py-6 px-8 rounded-xl font-semibold text-lg bg-pink-500 hover:bg-pink-600 text-white hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  👩 {t.female}
                </Button>
              </div>
              
              <Button
                onClick={() => setCurrentScreen('welcome')}
                variant="ghost"
                className="mt-8"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                {t.backButton}
              </Button>
            </div>
          </motion.div>
        )}

        {/* Quiz Screen */}
        {currentScreen === 'quiz' && (
          <motion.div
            key="quiz"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="min-h-screen"
          >
            {/* Progress Header */}
            <div className="sticky top-0 bg-background/80 backdrop-blur-sm shadow-sm z-40 px-4 py-4">
              <div className="max-w-2xl mx-auto">
                <div className="flex justify-between items-center mb-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleGoBack}
                    className="p-2"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    <span className="ml-2">{t.backButton}</span>
                  </Button>
                </div>
                <ProgressBar
                  current={currentQuestionIndex + 1}
                  total={shuffledQuestions.length}
                  percentage={progress}
                />
              </div>
            </div>

            {/* Question */}
            <div className="max-w-2xl mx-auto px-4 py-8">
              <AnimatePresence mode="wait">
                {shuffledQuestions[currentQuestionIndex] && (
                  <QuestionCard
                    key={currentQuestionIndex}
                    question={shuffledQuestions[currentQuestionIndex]}
                    onAnswer={handleAnswerQuestion}
                    isAnimating={isAnimating}
                  />
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}

        {/* Loading Screen */}
        {currentScreen === 'loading' && (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="min-h-screen flex items-center justify-center"
          >
            <div className="text-center">
              <div className="w-20 h-20 spinner mx-auto mb-6"></div>
              <h2 className="text-2xl font-semibold mb-4">
                {t.analyzing}
              </h2>
              <p className="text-muted-foreground loading-dots">
                {t.analyzingDesc}
              </p>
            </div>
          </motion.div>
        )}

        {/* Result Screen */}
        {currentScreen === 'result' && result && (
          <motion.div
            key="result"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="min-h-screen py-8"
          >
            <div className="max-w-4xl mx-auto px-4">
              <ResultCard result={result} />
              
              <div className="mt-12 text-center space-y-6">
                <ShareButtons result={result} />
                
                <Button
                  onClick={handleRestart}
                  className="gradient-primary text-white py-3 px-8 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <RotateCcw className="mr-2 h-5 w-5" />
                  {t.restartButton}
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Quiz() {
  return (
    <ThemeProvider>
      <QuizContent />
    </ThemeProvider>
  );
}
