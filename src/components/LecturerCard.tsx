import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Users, BookOpen } from "lucide-react";
import { Lecturer } from "@/data/lecturers";
import { useNavigate } from "react-router-dom";

interface LecturerCardProps {
  lecturer: Lecturer;
  index: number;
}

export const LecturerCard = ({ lecturer, index }: LecturerCardProps) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Card className="quiz-card h-full overflow-hidden border-border/50 bg-gradient-card">
        <CardContent className="p-6 h-full flex flex-col">
          {/* Avatar and Basic Info */}
          <div className="flex items-center gap-4 mb-4">
            <div className="relative">
              <img
                src={lecturer.avatar}
                alt={lecturer.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
              />
              <div className="absolute -bottom-1 -right-1 bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                {lecturer.overallRating}
              </div>
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-lg text-foreground leading-tight">
                {lecturer.name}
              </h3>
              <p className="text-muted-foreground text-sm">
                {lecturer.department}
              </p>
            </div>
          </div>

          {/* Rating and Stats */}
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="font-semibold text-foreground">
                {lecturer.overallRating}
              </span>
            </div>
            <div className="flex items-center gap-1 text-muted-foreground">
              <Users className="w-4 h-4" />
              <span className="text-sm">{lecturer.totalEvaluations} reviews</span>
            </div>
          </div>

          {/* Bio */}
          <p className="text-muted-foreground text-sm mb-4 flex-1 line-clamp-3">
            {lecturer.bio}
          </p>

          {/* Courses */}
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <BookOpen className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm font-medium text-foreground">
                Courses ({lecturer.courses.length})
              </span>
            </div>
            <div className="flex flex-wrap gap-1">
              {lecturer.courses.slice(0, 3).map((course) => (
                <Badge
                  key={course}
                  variant="secondary"
                  className="text-xs bg-primary/10 text-primary"
                >
                  {course}
                </Badge>
              ))}
              {lecturer.courses.length > 3 && (
                <Badge variant="outline" className="text-xs">
                  +{lecturer.courses.length - 3} more
                </Badge>
              )}
            </div>
          </div>

          {/* Action Button */}
          <Button
            onClick={() => navigate(`/evaluate/${lecturer.id}`)}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-all duration-300"
          >
            Evaluate Lecturer
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};