import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { QuizProgress } from "@/components/QuizProgress";
import { quizzes, Quiz as QuizType, QuizResult } from "@/data/quizzes";
import { ArrowLeft } from "lucide-react";

export default function Quiz() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [quiz, setQuiz] = useState<QuizType | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: string]: number }>({});
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState<QuizResult | null>(null);

  useEffect(() => {
    const foundQuiz = quizzes.find(q => q.id === id);
    if (foundQuiz) {
      setQuiz(foundQuiz);
    } else {
      navigate('/');
    }
  }, [id, navigate]);

  const handleAnswer = (optionId: string) => {
    if (!quiz) return;

    const question = quiz.questions[currentQuestion];
    const option = question.options.find(opt => opt.id === optionId);
    
    if (option) {
      const newAnswers = { ...answers };
      Object.entries(option.points).forEach(([key, points]) => {
        newAnswers[key] = (newAnswers[key] || 0) + points;
      });
      setAnswers(newAnswers);

      if (currentQuestion + 1 < quiz.questions.length) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        // Calculate result
        const maxScore = Math.max(...Object.values(newAnswers));
        const winningType = Object.entries(newAnswers).find(([, score]) => score === maxScore)?.[0];
        const quizResult = quiz.results.find(r => r.id === winningType) || quiz.results[0];
        setResult(quizResult);
        setShowResult(true);
      }
    }
  };

  const shareResult = async (platform: 'whatsapp' | 'twitter' | 'copy') => {
    if (!result || !quiz) return;

    const text = `I just took the "${quiz.title}" quiz and got: ${result.title} ${result.emoji}! ${result.description}`;
    const url = window.location.origin;

    switch (platform) {
      case 'whatsapp':
        window.open(`https://wa.me/?text=${encodeURIComponent(`${text}\n\nTry it yourself: ${url}`)}`);
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(`${text}\n\nTry it yourself: ${url}`)}`);
        break;
      case 'copy':
        await navigator.clipboard.writeText(`${text}\n\nTry it yourself: ${url}`);
        // You could add a toast notification here
        break;
    }
  };

  if (!quiz) {
    return <div>Loading...</div>;
  }

  if (showResult && result) {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen bg-background flex items-center justify-center p-4"
      >
        <div className="w-full max-w-lg">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="mb-6 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Quizzes
          </Button>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="quiz-card text-center border-0">
              <CardHeader className="pb-6">
                <div className="text-6xl mb-4">{result.emoji}</div>
                <h1 className="text-2xl font-bold text-card-foreground mb-2">
                  {result.title}
                </h1>
                <p className="text-muted-foreground leading-relaxed">
                  {result.description}
                </p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    onClick={() => shareResult('whatsapp')}
                    variant="outline"
                    className="flex-1"
                  >
                    Share on WhatsApp
                  </Button>
                  <Button
                    onClick={() => shareResult('twitter')}
                    variant="outline"
                    className="flex-1"
                  >
                    Share on Twitter
                  </Button>
                </div>
                
                <Button
                  onClick={() => shareResult('copy')}
                  variant="outline"
                  className="w-full"
                >
                  Copy Link
                </Button>
                
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button
                    onClick={() => {
                      setCurrentQuestion(0);
                      setAnswers({});
                      setShowResult(false);
                      setResult(null);
                    }}
                    variant="secondary"
                    className="flex-1"
                  >
                    Retake Quiz
                  </Button>
                  <Button
                    onClick={() => navigate('/')}
                    className="flex-1 quiz-gradient text-white"
                  >
                    More Quizzes
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="mb-6 text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Quizzes
        </Button>

        <QuizProgress 
          currentQuestion={currentQuestion + 1} 
          totalQuestions={quiz.questions.length} 
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="quiz-card border-0">
              <CardHeader>
                <h2 className="text-xl font-semibold text-card-foreground leading-tight">
                  {quiz.questions[currentQuestion].question}
                </h2>
              </CardHeader>
              
              <CardContent className="space-y-3">
                {quiz.questions[currentQuestion].options.map((option, index) => (
                  <motion.div
                    key={option.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Button
                      onClick={() => handleAnswer(option.id)}
                      variant="outline"
                      className="w-full text-left justify-start p-4 h-auto border-border hover:border-primary/50 hover:bg-accent/50 transition-all duration-200"
                    >
                      <span className="leading-relaxed">{option.text}</span>
                    </Button>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}