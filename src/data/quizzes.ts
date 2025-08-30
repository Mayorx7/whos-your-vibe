export interface QuizQuestion {
  id: number;
  question: string;
  options: {
    id: string;
    text: string;
    points: { [key: string]: number };
  }[];
}

export interface QuizResult {
  id: string;
  title: string;
  emoji: string;
  description: string;
  image?: string;
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  emoji: string;
  color: string;
  questions: QuizQuestion[];
  results: QuizResult[];
}

import { additionalQuizzes } from "./moreQuizzes";

export const quizzes: Quiz[] = [
  {
    id: "marriage-quiz",
    title: "Who Will You Marry?",
    description: "Discover your perfect match based on your preferences!",
    emoji: "💕",
    color: "from-pink-400 to-rose-400",
    questions: [
      {
        id: 1,
        question: "What's your ideal first date?",
        options: [
          { id: "a", text: "Cozy coffee shop conversation", points: { romantic: 3, intellectual: 2, adventurous: 1 } },
          { id: "b", text: "Amusement park adventure", points: { adventurous: 3, fun: 2, romantic: 1 } },
          { id: "c", text: "Art gallery and wine", points: { intellectual: 3, romantic: 2, sophisticated: 3 } },
          { id: "d", text: "Hiking in nature", points: { adventurous: 3, free_spirit: 2, outdoorsy: 3 } }
        ]
      },
      {
        id: 2,
        question: "What quality do you value most in a partner?",
        options: [
          { id: "a", text: "Sense of humor", points: { fun: 3, romantic: 2 } },
          { id: "b", text: "Intelligence", points: { intellectual: 3, sophisticated: 2 } },
          { id: "c", text: "Loyalty", points: { romantic: 3, traditional: 2 } },
          { id: "d", text: "Spontaneity", points: { adventurous: 3, free_spirit: 2 } }
        ]
      },
      {
        id: 3,
        question: "How do you handle conflicts?",
        options: [
          { id: "a", text: "Talk it out immediately", points: { intellectual: 2, mature: 3 } },
          { id: "b", text: "Give each other space first", points: { free_spirit: 2, mature: 2 } },
          { id: "c", text: "Make jokes to lighten the mood", points: { fun: 3, romantic: 1 } },
          { id: "d", text: "Write a heartfelt letter", points: { romantic: 3, sophisticated: 2 } }
        ]
      },
      {
        id: 4,
        question: "What's your dream weekend?",
        options: [
          { id: "a", text: "Binge-watching series together", points: { fun: 2, romantic: 2 } },
          { id: "b", text: "Exploring a new city", points: { adventurous: 3, intellectual: 1 } },
          { id: "c", text: "Cooking a fancy dinner", points: { romantic: 3, sophisticated: 2 } },
          { id: "d", text: "Attending concerts or shows", points: { fun: 2, sophisticated: 3 } }
        ]
      },
      {
        id: 5,
        question: "What's most important for your future together?",
        options: [
          { id: "a", text: "Building a family", points: { romantic: 3, traditional: 3 } },
          { id: "b", text: "Traveling the world", points: { adventurous: 3, free_spirit: 3 } },
          { id: "c", text: "Career success", points: { intellectual: 3, sophisticated: 2 } },
          { id: "d", text: "Making each other laugh daily", points: { fun: 3, romantic: 2 } }
        ]
      }
    ],
    results: [
      {
        id: "romantic",
        title: "The Hopeless Romantic",
        emoji: "🌹",
        description: "You'll marry someone who writes you love letters, remembers every anniversary, and believes in fairy tale endings. They'll sweep you off your feet with grand gestures and quiet moments of tenderness."
      },
      {
        id: "adventurous",
        title: "The Adventure Buddy",
        emoji: "🏔️",
        description: "Your future spouse will be your partner in crime for life's greatest adventures. From spontaneous road trips to hiking mountains, you'll explore the world together hand in hand."
      },
      {
        id: "intellectual",
        title: "The Deep Thinker",
        emoji: "📚",
        description: "You'll marry someone who challenges your mind and engages your soul. Late-night philosophical discussions and shared book recommendations will be the foundation of your love."
      },
      {
        id: "fun",
        title: "The Life of the Party",
        emoji: "🎉",
        description: "Your perfect match will keep you laughing every single day. They'll turn ordinary moments into extraordinary memories with their infectious energy and playful spirit."
      },
      {
        id: "sophisticated",
        title: "The Elegant Soul",
        emoji: "🥂",
        description: "You'll find love with someone who appreciates the finer things in life. Wine tastings, art galleries, and cultured conversations will define your beautiful relationship."
      },
      {
        id: "free_spirit",
        title: "The Free Spirit",
        emoji: "🦋",
        description: "Your soulmate will value freedom and authenticity above all. Together, you'll create your own rules and live life on your own terms, supporting each other's dreams unconditionally."
      }
    ]
  },
  {
    id: "superhero-quiz",
    title: "Which Superhero Are You?",
    description: "Discover your inner superhero based on your personality!",
    emoji: "⚡",
    color: "from-blue-400 to-indigo-500",
    questions: [
      {
        id: 1,
        question: "What's your greatest strength?",
        options: [
          { id: "a", text: "Physical power", points: { superman: 3, hulk: 2 } },
          { id: "b", text: "Intelligence", points: { batman: 3, ironman: 3 } },
          { id: "c", text: "Speed", points: { flash: 3, quicksilver: 2 } },
          { id: "d", text: "Leadership", points: { captain_america: 3, superman: 2 } }
        ]
      },
      {
        id: 2,
        question: "How do you prefer to solve problems?",
        options: [
          { id: "a", text: "With careful planning", points: { batman: 3, captain_america: 2 } },
          { id: "b", text: "Using technology", points: { ironman: 3, batman: 2 } },
          { id: "c", text: "Direct confrontation", points: { superman: 3, hulk: 3 } },
          { id: "d", text: "Quick action", points: { flash: 3, spiderman: 2 } }
        ]
      },
      {
        id: 3,
        question: "What motivates you most?",
        options: [
          { id: "a", text: "Protecting loved ones", points: { spiderman: 3, superman: 2 } },
          { id: "b", text: "Justice for all", points: { captain_america: 3, superman: 2 } },
          { id: "c", text: "Personal redemption", points: { batman: 3, ironman: 2 } },
          { id: "d", text: "The thrill of action", points: { flash: 2, hulk: 2 } }
        ]
      },
      {
        id: 4,
        question: "What's your weakness?",
        options: [
          { id: "a", text: "Being too trusting", points: { superman: 3, captain_america: 2 } },
          { id: "b", text: "Overthinking", points: { batman: 3, spiderman: 2 } },
          { id: "c", text: "Anger issues", points: { hulk: 3, batman: 1 } },
          { id: "d", text: "Impulsiveness", points: { flash: 3, ironman: 2 } }
        ]
      },
      {
        id: 5,
        question: "What's your ideal team role?",
        options: [
          { id: "a", text: "The leader", points: { captain_america: 3, superman: 2 } },
          { id: "b", text: "The strategist", points: { batman: 3, ironman: 2 } },
          { id: "c", text: "The powerhouse", points: { hulk: 3, superman: 2 } },
          { id: "d", text: "The support", points: { spiderman: 3, flash: 2 } }
        ]
      }
    ],
    results: [
      {
        id: "superman",
        title: "Superman",
        emoji: "🦸‍♂️",
        description: "You're the ultimate hero! With unwavering moral compass and incredible strength, you inspire others to be their best. Your greatest power isn't your abilities—it's your heart."
      },
      {
        id: "batman",
        title: "Batman",
        emoji: "🦇",
        description: "You're the Dark Knight! Strategic, intelligent, and determined, you prove that heroes are made, not born. Your greatest weapon is your mind, and you never give up."
      },
      {
        id: "spiderman",
        title: "Spider-Man",
        emoji: "🕷️",
        description: "With great power comes great responsibility! You balance humor with heroism, always looking out for the little guy. Your relatability makes you everyone's favorite hero."
      },
      {
        id: "ironman",
        title: "Iron Man",
        emoji: "🤖",
        description: "You're a genius, billionaire, playboy, philanthropist! Your wit is as sharp as your technology. You prove that anyone can be a hero with enough determination and style."
      },
      {
        id: "captain_america",
        title: "Captain America",
        emoji: "🛡️",
        description: "You're America's First Avenger! Your strong moral code and natural leadership inspire others to fight for what's right. You never back down from a fight for justice."
      },
      {
        id: "hulk",
        title: "The Incredible Hulk",
        emoji: "💚",
        description: "HULK SMASH! You have incredible power that emerges when you're passionate about something. Beneath the strength lies a brilliant mind and a protective heart."
      },
      {
        id: "flash",
        title: "The Flash",
        emoji: "⚡",
        description: "You're the fastest person alive! Your quick thinking and optimistic nature help you solve problems in a flash. You bring light and hope wherever you go."
      }
    ]
  },
  {
    id: "anime-character-quiz",
    title: "Which Anime Character Are You?",
    description: "Find out which iconic anime character matches your personality!",
    emoji: "🎌",
    color: "from-purple-400 to-pink-400",
    questions: [
      {
        id: 1,
        question: "What's your fighting style?",
        options: [
          { id: "a", text: "Raw power and determination", points: { goku: 3, naruto: 2 } },
          { id: "b", text: "Speed and precision", points: { levi: 3, zoro: 2 } },
          { id: "c", text: "Strategy and intelligence", points: { light: 3, senku: 3 } },
          { id: "d", text: "Magic and special abilities", points: { natsu: 3, edward: 2 } }
        ]
      },
      {
        id: 2,
        question: "What drives you forward?",
        options: [
          { id: "a", text: "Protecting friends", points: { naruto: 3, natsu: 3 } },
          { id: "b", text: "Becoming stronger", points: { goku: 3, zoro: 2 } },
          { id: "c", text: "Seeking knowledge", points: { senku: 3, edward: 2 } },
          { id: "d", text: "Justice and order", points: { light: 3, levi: 2 } }
        ]
      },
      {
        id: 3,
        question: "How do you handle failure?",
        options: [
          { id: "a", text: "Train harder until I succeed", points: { goku: 3, zoro: 3 } },
          { id: "b", text: "Learn from mistakes", points: { senku: 3, edward: 2 } },
          { id: "c", text: "Never give up on friends", points: { naruto: 3, natsu: 2 } },
          { id: "d", text: "Adapt my strategy", points: { light: 3, levi: 2 } }
        ]
      },
      {
        id: 4,
        question: "What's your ideal team?",
        options: [
          { id: "a", text: "A close-knit group of friends", points: { naruto: 3, natsu: 3 } },
          { id: "b", text: "I work better alone", points: { levi: 3, light: 2 } },
          { id: "c", text: "Fellow researchers and thinkers", points: { senku: 3, edward: 2 } },
          { id: "d", text: "Strong rivals who push me", points: { goku: 3, zoro: 2 } }
        ]
      },
      {
        id: 5,
        question: "What's your biggest flaw?",
        options: [
          { id: "a", text: "Too trusting", points: { goku: 3, naruto: 2 } },
          { id: "b", text: "Obsessed with goals", points: { light: 3, zoro: 2 } },
          { id: "c", text: "Reckless when friends are hurt", points: { natsu: 3, naruto: 2 } },
          { id: "d", text: "Emotionally distant", points: { levi: 3, senku: 2 } }
        ]
      }
    ],
    results: [
      {
        id: "goku",
        title: "Goku",
        emoji: "🔥",
        description: "You're pure-hearted and always seeking to improve! Your love for fighting and protecting others makes you an unstoppable force. Food is definitely a priority too!"
      },
      {
        id: "naruto",
        title: "Naruto Uzumaki",
        emoji: "🍜",
        description: "Believe it! You never give up and fight for your friends no matter what. Your determination and big heart inspire everyone around you to be their best!"
      },
      {
        id: "levi",
        title: "Levi Ackerman",
        emoji: "⚔️",
        description: "Humanity's strongest soldier! You're disciplined, precise, and deadly efficient. Your stoic exterior hides a deep care for those you're sworn to protect."
      },
      {
        id: "light",
        title: "Light Yagami",
        emoji: "📓",
        description: "You're brilliant and strategic, but beware of your own ambitions! Your desire for justice and control can lead you down dark paths. Intelligence is your greatest weapon."
      },
      {
        id: "senku",
        title: "Senku Ishigami",
        emoji: "🧪",
        description: "Science is everything! You're incredibly logical and love solving problems through knowledge and experimentation. Your motto: 'This is exhilarating!'"
      },
      {
        id: "natsu",
        title: "Natsu Dragneel",
        emoji: "🐉",
        description: "You're fired up and always ready to protect your guild family! Your passion burns bright, and you never back down from a challenge. Friendship is your magic!"
      },
      {
        id: "edward",
        title: "Edward Elric",
        emoji: "⚗️",
        description: "The Fullmetal Alchemist! You're determined to right past wrongs and protect your loved ones. Science and alchemy are your tools, but your heart drives everything."
      },
      {
        id: "zoro",
        title: "Roronoa Zoro",
        emoji: "🗾",
        description: "Three-sword style! You're incredibly dedicated to your goals and loyal to your crew. Your sense of direction might be questionable, but your resolve is unshakeable!"
      }
    ]
  },
  ...additionalQuizzes
];
