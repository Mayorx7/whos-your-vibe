import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Star, TrendingUp, Users, BookOpen, ArrowLeft } from "lucide-react";
import { lecturers, courses } from "@/data/lecturers";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  // Mock analytics data
  const totalEvaluations = lecturers.reduce((sum, lecturer) => sum + lecturer.totalEvaluations, 0);
  const averageRating = lecturers.reduce((sum, lecturer) => sum + lecturer.overallRating, 0) / lecturers.length;
  const topRatedLecturers = [...lecturers].sort((a, b) => b.overallRating - a.overallRating).slice(0, 3);
  const recentEvaluations = 5; // Mock number

  const departmentStats = lecturers.reduce((acc, lecturer) => {
    if (!acc[lecturer.department]) {
      acc[lecturer.department] = { count: 0, totalRating: 0, avgRating: 0 };
    }
    acc[lecturer.department].count += 1;
    acc[lecturer.department].totalRating += lecturer.overallRating;
    acc[lecturer.department].avgRating = acc[lecturer.department].totalRating / acc[lecturer.department].count;
    return acc;
  }, {} as Record<string, { count: number; totalRating: number; avgRating: number }>);

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <Button
              variant="ghost"
              onClick={() => navigate('/')}
              className="mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Lecturers
            </Button>
            <h1 className="text-4xl font-bold mb-2">Evaluation Dashboard</h1>
            <p className="text-muted-foreground">
              Overview of lecturer evaluations and feedback analytics
            </p>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="quiz-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Evaluations</p>
                    <p className="text-3xl font-bold">{totalEvaluations}</p>
                  </div>
                  <Users className="w-8 h-8 text-primary" />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="quiz-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Average Rating</p>
                    <p className="text-3xl font-bold">{averageRating.toFixed(1)}</p>
                  </div>
                  <Star className="w-8 h-8 text-yellow-400 fill-current" />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="quiz-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Active Courses</p>
                    <p className="text-3xl font-bold">{courses.length}</p>
                  </div>
                  <BookOpen className="w-8 h-8 text-primary" />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="quiz-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Recent Reviews</p>
                    <p className="text-3xl font-bold">{recentEvaluations}</p>
                  </div>
                  <TrendingUp className="w-8 h-8 text-green-500" />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Top Rated Lecturers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card className="quiz-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-400" />
                  Top Rated Lecturers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topRatedLecturers.map((lecturer, index) => (
                    <div key={lecturer.id} className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                      <img
                        src={lecturer.avatar}
                        alt={lecturer.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <p className="font-semibold">{lecturer.name}</p>
                        <p className="text-sm text-muted-foreground">{lecturer.department}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-bold">{lecturer.overallRating}</span>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          {lecturer.totalEvaluations} reviews
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Department Performance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Card className="quiz-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  Department Performance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {Object.entries(departmentStats).map(([dept, stats]) => (
                    <div key={dept}>
                      <div className="flex justify-between items-center mb-2">
                        <div>
                          <p className="font-semibold">{dept}</p>
                          <p className="text-sm text-muted-foreground">
                            {stats.count} lecturer{stats.count > 1 ? 's' : ''}
                          </p>
                        </div>
                        <Badge variant="outline">
                          {stats.avgRating.toFixed(1)} ★
                        </Badge>
                      </div>
                      <Progress 
                        value={(stats.avgRating / 5) * 100} 
                        className="h-2"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-8"
        >
          <Card className="quiz-card">
            <CardHeader>
              <CardTitle>Recent Evaluation Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {lecturers.slice(0, 5).map((lecturer, index) => (
                  <div key={lecturer.id} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                    <div className="flex items-center gap-3">
                      <img
                        src={lecturer.avatar}
                        alt={lecturer.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-semibold">{lecturer.name}</p>
                        <p className="text-sm text-muted-foreground">
                          New evaluation for {lecturer.courses[0]}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant="outline" className="mb-1">
                        {lecturer.overallRating} ★
                      </Badge>
                      <p className="text-xs text-muted-foreground">2 hours ago</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;