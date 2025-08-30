import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Quiz } from "@/data/quizzes";
import { useNavigate } from "react-router-dom";

interface QuizCardProps {
  quiz: Quiz;
  index: number;
}

export const QuizCard = ({ quiz, index }: QuizCardProps) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Card className="quiz-card h-full flex flex-col border-0 overflow-hidden">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-4xl">{quiz.emoji}</span>
            <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${quiz.color}`} />
          </div>
          <h3 className="text-xl font-semibold text-card-foreground leading-tight">
            {quiz.title}
          </h3>
        </CardHeader>
        
        <CardContent className="flex-1 flex flex-col justify-between pt-0">
          <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
            {quiz.description}
          </p>
          
          <Button 
            onClick={() => navigate(`/quiz/${quiz.id}`)}
            className="w-full quiz-gradient text-white border-0 hover:opacity-90 transition-all duration-300 font-medium py-2.5"
          >
            Start Quiz
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};