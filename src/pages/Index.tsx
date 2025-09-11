import { motion } from "framer-motion";
import { LecturerCard } from "@/components/LecturerCard";
import { lecturers } from "@/data/lecturers";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { BarChart3, Users, Award } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-glow to-quiz-gradient-end bg-clip-text text-transparent">
              EvalU
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Student feedback and lecturer evaluation system. 
              Help improve education quality through honest feedback.
            </p>
            <div className="flex items-center justify-center gap-6 mb-8">
              <Button
                onClick={() => navigate('/dashboard')}
                variant="outline"
                size="lg"
                className="bg-primary/10 border-primary/20 hover:bg-primary/20"
              >
                <BarChart3 className="w-5 h-5 mr-2" />
                View Dashboard
              </Button>
            </div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="text-4xl"
            >
              📚
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col items-center"
            >
              <Users className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-2">{lecturers.length}</h3>
              <p className="text-muted-foreground">Active Lecturers</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col items-center"
            >
              <Award className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-2">
                {lecturers.reduce((sum, l) => sum + l.totalEvaluations, 0)}
              </h3>
              <p className="text-muted-foreground">Total Evaluations</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col items-center"
            >
              <BarChart3 className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-2">
                {(lecturers.reduce((sum, l) => sum + l.overallRating, 0) / lecturers.length).toFixed(1)}
              </h3>
              <p className="text-muted-foreground">Average Rating</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Lecturers Grid */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Evaluate Your Lecturers
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Share your experience and help improve the quality of education. Your feedback matters!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lecturers.map((lecturer, index) => (
              <LecturerCard key={lecturer.id} lecturer={lecturer} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <p className="text-muted-foreground mb-4">
              Empowering education through student feedback
            </p>
            <p className="text-sm text-muted-foreground">
              Your voice matters. Help us improve the learning experience for everyone.
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
