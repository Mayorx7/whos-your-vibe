import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Star, Send } from "lucide-react";
import { lecturers, courses, evaluationQuestions } from "@/data/lecturers";
import { useToast } from "@/hooks/use-toast";

const Evaluation = () => {
  const { lecturerId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [selectedCourse, setSelectedCourse] = useState<string>("");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [ratings, setRatings] = useState<{ [key: string]: number }>({});
  const [comments, setComments] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const lecturer = lecturers.find(l => l.id === lecturerId);
  const lecturerCourses = courses.filter(c => c.lecturerId === lecturerId);
  
  if (!lecturer) {
    return <div>Lecturer not found</div>;
  }

  const handleCourseSelect = (courseId: string) => {
    setSelectedCourse(courseId);
    setCurrentQuestion(0);
  };

  const handleRating = (questionId: string, rating: number) => {
    setRatings(prev => ({ ...prev, [questionId]: rating }));
  };

  const handleComment = (questionId: string, comment: string) => {
    setComments(prev => ({ ...prev, [questionId]: comment }));
  };

  const handleNext = () => {
    if (currentQuestion < evaluationQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Evaluation Submitted!",
      description: "Thank you for your feedback. Your evaluation has been recorded.",
    });

    navigate('/dashboard');
  };

  const currentQ = evaluationQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / evaluationQuestions.length) * 100;
  const canProceed = currentQ.type === 'rating' ? ratings[currentQ.id] : true;

  // Course Selection Screen
  if (!selectedCourse) {
    return (
      <div className="min-h-screen bg-background p-4">
        <div className="max-w-4xl mx-auto">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Lecturers
          </Button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <img
              src={lecturer.avatar}
              alt={lecturer.name}
              className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-primary/20"
            />
            <h1 className="text-3xl font-bold mb-2">{lecturer.name}</h1>
            <p className="text-muted-foreground mb-4">{lecturer.department}</p>
            <p className="text-lg mb-6">Select a course to evaluate:</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {lecturerCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card 
                  className="cursor-pointer hover:shadow-lg transition-all duration-300 quiz-card"
                  onClick={() => handleCourseSelect(course.id)}
                >
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-bold text-lg">{course.name}</h3>
                        <p className="text-muted-foreground">{course.code}</p>
                      </div>
                      <Badge variant="outline">{course.credits} credits</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      {course.semester}
                    </p>
                    <Button className="w-full">
                      Evaluate This Course
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const selectedCourseData = courses.find(c => c.id === selectedCourse);

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <Button
            variant="ghost"
            onClick={() => setSelectedCourse("")}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Change Course
          </Button>
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              {lecturer.name} • {selectedCourseData?.name}
            </p>
          </div>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium">
              Question {currentQuestion + 1} of {evaluationQuestions.length}
            </span>
            <span className="text-sm text-muted-foreground">
              {Math.round(progress)}% Complete
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Question Card */}
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="quiz-card mb-8">
            <CardHeader>
              <CardTitle className="text-xl">{currentQ.text}</CardTitle>
              {currentQ.required && (
                <Badge variant="outline" className="w-fit">Required</Badge>
              )}
            </CardHeader>
            <CardContent>
              {currentQ.type === 'rating' ? (
                <div className="flex justify-center gap-2">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <Button
                      key={rating}
                      variant={ratings[currentQ.id] === rating ? "default" : "outline"}
                      size="lg"
                      onClick={() => handleRating(currentQ.id, rating)}
                      className="w-12 h-12 p-0"
                    >
                      <Star 
                        className={`w-6 h-6 ${
                          ratings[currentQ.id] >= rating 
                            ? 'fill-current' 
                            : ''
                        }`} 
                      />
                    </Button>
                  ))}
                </div>
              ) : (
                <Textarea
                  placeholder="Share your thoughts..."
                  value={comments[currentQ.id] || ''}
                  onChange={(e) => handleComment(currentQ.id, e.target.value)}
                  className="min-h-[120px]"
                />
              )}
            </CardContent>
          </Card>
        </motion.div>

        {/* Navigation */}
        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
          >
            Previous
          </Button>

          {currentQuestion === evaluationQuestions.length - 1 ? (
            <Button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="bg-primary hover:bg-primary/90"
            >
              {isSubmitting ? (
                <>Submitting...</>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Submit Evaluation
                </>
              )}
            </Button>
          ) : (
            <Button
              onClick={handleNext}
              disabled={currentQ.required && !canProceed}
            >
              Next
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Evaluation;