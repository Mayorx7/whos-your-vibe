export interface Lecturer {
  id: string;
  name: string;
  department: string;
  courses: string[];
  avatar: string;
  bio: string;
  overallRating: number;
  totalEvaluations: number;
}

export interface Course {
  id: string;
  name: string;
  code: string;
  lecturerId: string;
  semester: string;
  credits: number;
}

export interface EvaluationQuestion {
  id: string;
  text: string;
  type: 'rating' | 'text';
  required: boolean;
}

export interface Evaluation {
  id: string;
  lecturerId: string;
  courseId: string;
  studentId: string;
  ratings: { [questionId: string]: number };
  comments: { [questionId: string]: string };
  overallComment: string;
  submittedAt: string;
}

export const lecturers: Lecturer[] = [
  {
    id: "lec1",
    name: "Dr. Sarah Johnson",
    department: "Computer Science",
    courses: ["CS101", "CS201", "CS301"],
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b494?w=400&h=400&fit=crop&crop=face",
    bio: "Professor of Computer Science with 15 years of experience in software engineering and AI research.",
    overallRating: 4.5,
    totalEvaluations: 89
  },
  {
    id: "lec2", 
    name: "Prof. Michael Chen",
    department: "Mathematics",
    courses: ["MATH101", "MATH201", "STAT101"],
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    bio: "Mathematics professor specializing in calculus, statistics, and mathematical modeling.",
    overallRating: 4.2,
    totalEvaluations: 67
  },
  {
    id: "lec3",
    name: "Dr. Emily Rodriguez",
    department: "Physics",
    courses: ["PHYS101", "PHYS201"],
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
    bio: "Experimental physicist with expertise in quantum mechanics and thermodynamics.",
    overallRating: 4.7,
    totalEvaluations: 54
  },
  {
    id: "lec4",
    name: "Prof. David Wilson",
    department: "Business Administration",
    courses: ["BUS101", "MGMT201", "MARK101"],
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    bio: "Business strategy consultant turned educator with 20 years of industry experience.",
    overallRating: 4.3,
    totalEvaluations: 76
  },
  {
    id: "lec5",
    name: "Dr. Lisa Thompson",
    department: "Psychology",
    courses: ["PSY101", "PSY201"],
    avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
    bio: "Clinical psychologist and researcher focusing on cognitive behavioral therapy.",
    overallRating: 4.6,
    totalEvaluations: 43
  },
  {
    id: "lec6",
    name: "Prof. James Martinez",
    department: "History",
    courses: ["HIST101", "HIST201"],
    avatar: "https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=400&h=400&fit=crop&crop=face",
    bio: "Medieval history scholar with extensive research in European civilizations.",
    overallRating: 4.1,
    totalEvaluations: 38
  }
];

export const courses: Course[] = [
  { id: "CS101", name: "Introduction to Programming", code: "CS101", lecturerId: "lec1", semester: "Fall 2024", credits: 3 },
  { id: "CS201", name: "Data Structures", code: "CS201", lecturerId: "lec1", semester: "Spring 2024", credits: 4 },
  { id: "CS301", name: "Algorithms", code: "CS301", lecturerId: "lec1", semester: "Fall 2024", credits: 4 },
  { id: "MATH101", name: "Calculus I", code: "MATH101", lecturerId: "lec2", semester: "Fall 2024", credits: 4 },
  { id: "MATH201", name: "Linear Algebra", code: "MATH201", lecturerId: "lec2", semester: "Spring 2024", credits: 3 },
  { id: "STAT101", name: "Statistics", code: "STAT101", lecturerId: "lec2", semester: "Fall 2024", credits: 3 },
  { id: "PHYS101", name: "General Physics I", code: "PHYS101", lecturerId: "lec3", semester: "Fall 2024", credits: 4 },
  { id: "PHYS201", name: "Quantum Physics", code: "PHYS201", lecturerId: "lec3", semester: "Spring 2024", credits: 4 },
  { id: "BUS101", name: "Business Fundamentals", code: "BUS101", lecturerId: "lec4", semester: "Fall 2024", credits: 3 },
  { id: "MGMT201", name: "Management Principles", code: "MGMT201", lecturerId: "lec4", semester: "Spring 2024", credits: 3 },
  { id: "MARK101", name: "Marketing Basics", code: "MARK101", lecturerId: "lec4", semester: "Fall 2024", credits: 3 },
  { id: "PSY101", name: "Introduction to Psychology", code: "PSY101", lecturerId: "lec5", semester: "Fall 2024", credits: 3 },
  { id: "PSY201", name: "Cognitive Psychology", code: "PSY201", lecturerId: "lec5", semester: "Spring 2024", credits: 3 },
  { id: "HIST101", name: "World History", code: "HIST101", lecturerId: "lec6", semester: "Fall 2024", credits: 3 },
  { id: "HIST201", name: "Medieval History", code: "HIST201", lecturerId: "lec6", semester: "Spring 2024", credits: 3 }
];

export const evaluationQuestions: EvaluationQuestion[] = [
  { id: "q1", text: "How would you rate the lecturer's knowledge of the subject?", type: "rating", required: true },
  { id: "q2", text: "How clear and understandable were the lectures?", type: "rating", required: true },
  { id: "q3", text: "How well did the lecturer encourage student participation?", type: "rating", required: true },
  { id: "q4", text: "How available was the lecturer for questions and help?", type: "rating", required: true },
  { id: "q5", text: "How would you rate the overall course organization?", type: "rating", required: true },
  { id: "q6", text: "What did you like most about this lecturer's teaching style?", type: "text", required: false },
  { id: "q7", text: "What suggestions do you have for improvement?", type: "text", required: false },
  { id: "overall", text: "Any additional comments about the course or lecturer?", type: "text", required: false }
];

// Mock evaluation data
export const mockEvaluations: Evaluation[] = [
  {
    id: "eval1",
    lecturerId: "lec1",
    courseId: "CS101",
    studentId: "student1",
    ratings: { q1: 5, q2: 4, q3: 4, q4: 5, q5: 4 },
    comments: { 
      q6: "Great use of real-world examples",
      q7: "Maybe provide more practice problems"
    },
    overallComment: "Excellent instructor, learned a lot!",
    submittedAt: "2024-01-15"
  }
];