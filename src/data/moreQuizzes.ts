import { Quiz } from "./quizzes";

export const additionalQuizzes: Quiz[] = [
  {
    id: "ideal-country-quiz",
    title: "What's Your Ideal Country?",
    description: "Discover which country matches your lifestyle and dreams!",
    emoji: "🌍",
    color: "from-green-400 to-blue-400",
    questions: [
      {
        id: 1,
        question: "What's your ideal climate?",
        options: [
          { id: "a", text: "Warm and sunny year-round", points: { tropical: 3, mediterranean: 2 } },
          { id: "b", text: "Four distinct seasons", points: { temperate: 3, continental: 2 } },
          { id: "c", text: "Cool and crisp", points: { nordic: 3, alpine: 2 } },
          { id: "d", text: "Mild with occasional rain", points: { temperate: 2, oceanic: 3 } }
        ]
      },
      {
        id: 2,
        question: "What's most important in your daily life?",
        options: [
          { id: "a", text: "Work-life balance", points: { nordic: 3, oceanic: 2 } },
          { id: "b", text: "Career opportunities", points: { continental: 3, metropolitan: 2 } },
          { id: "c", text: "Rich culture and history", points: { mediterranean: 3, continental: 2 } },
          { id: "d", text: "Natural beauty and outdoor activities", points: { alpine: 3, oceanic: 3 } }
        ]
      },
      {
        id: 3,
        question: "What type of food do you prefer?",
        options: [
          { id: "a", text: "Fresh, simple, local ingredients", points: { mediterranean: 3, oceanic: 2 } },
          { id: "b", text: "Hearty, comfort food", points: { nordic: 2, alpine: 3 } },
          { id: "c", text: "Diverse, international cuisine", points: { metropolitan: 3, continental: 2 } },
          { id: "d", text: "Spicy, exotic flavors", points: { tropical: 3, mediterranean: 1 } }
        ]
      },
      {
        id: 4,
        question: "How do you prefer to spend weekends?",
        options: [
          { id: "a", text: "Hiking or skiing in nature", points: { alpine: 3, nordic: 2 } },
          { id: "b", text: "Exploring museums and cafes", points: { continental: 3, metropolitan: 2 } },
          { id: "c", text: "Beach activities and water sports", points: { tropical: 3, mediterranean: 2 } },
          { id: "d", text: "Cozy time at home with family", points: { nordic: 3, oceanic: 2 } }
        ]
      },
      {
        id: 5,
        question: "What's your ideal community like?",
        options: [
          { id: "a", text: "Small, tight-knit, everyone knows each other", points: { oceanic: 3, alpine: 2 } },
          { id: "b", text: "Diverse, bustling, lots of opportunities", points: { metropolitan: 3, continental: 2 } },
          { id: "c", text: "Relaxed, family-oriented, traditional", points: { mediterranean: 3, tropical: 2 } },
          { id: "d", text: "Progressive, equal, socially conscious", points: { nordic: 3, oceanic: 2 } }
        ]
      }
    ],
    results: [
      {
        id: "nordic",
        title: "Scandinavian Paradise",
        emoji: "🇸🇪",
        description: "Norway, Sweden, or Denmark would be perfect for you! You value work-life balance, social equality, and cozy hygge lifestyle. Long summer days and northern lights await!"
      },
      {
        id: "mediterranean",
        title: "Mediterranean Dream",
        emoji: "🇮🇹",
        description: "Italy, Spain, or Greece is calling your name! You love la dolce vita - great food, rich culture, beautiful coastlines, and a relaxed approach to life."
      },
      {
        id: "tropical",
        title: "Tropical Paradise",
        emoji: "🏝️",
        description: "Thailand, Costa Rica, or the Philippines would suit you perfectly! You crave constant sunshine, exotic foods, and a laid-back island lifestyle."
      },
      {
        id: "oceanic",
        title: "Island Nation",
        emoji: "🇳🇿",
        description: "New Zealand or Australia is your ideal home! You appreciate stunning natural beauty, outdoor adventures, and friendly, down-to-earth communities."
      },
      {
        id: "alpine",
        title: "Mountain Paradise",
        emoji: "🏔️",
        description: "Switzerland, Austria, or Colorado would be perfect! You love crisp mountain air, outdoor activities, and the peaceful beauty of alpine landscapes."
      },
      {
        id: "continental",
        title: "European Heart",
        emoji: "🇩🇪",
        description: "Germany, France, or the Netherlands would suit you! You appreciate efficiency, rich history, excellent public transport, and a perfect blend of tradition and modernity."
      },
      {
        id: "metropolitan",
        title: "Global City",
        emoji: "🏙️",
        description: "New York, London, or Tokyo is your calling! You thrive in diverse, fast-paced environments with endless cultural opportunities and career possibilities."
      }
    ]
  },
  {
    id: "disney-character-quiz",
    title: "Which Disney Character Are You?",
    description: "Find your Disney alter ego and discover your magical personality!",
    emoji: "🏰",
    color: "from-pink-400 to-purple-400",
    questions: [
      {
        id: 1,
        question: "What's your greatest dream?",
        options: [
          { id: "a", text: "Finding true love", points: { ariel: 3, belle: 2, cinderella: 3 } },
          { id: "b", text: "Exploring new worlds", points: { moana: 3, aladdin: 2, ariel: 2 } },
          { id: "c", text: "Helping others", points: { mulan: 3, belle: 2, elsa: 2 } },
          { id: "d", text: "Being free to be myself", points: { elsa: 3, moana: 2, aladdin: 2 } }
        ]
      },
      {
        id: 2,
        question: "What's your biggest strength?",
        options: [
          { id: "a", text: "Courage and determination", points: { mulan: 3, moana: 3 } },
          { id: "b", text: "Intelligence and curiosity", points: { belle: 3, ariel: 2 } },
          { id: "c", text: "Kindness and compassion", points: { cinderella: 3, belle: 2 } },
          { id: "d", text: "Independence and power", points: { elsa: 3, mulan: 2 } }
        ]
      },
      {
        id: 3,
        question: "How do you handle difficult situations?",
        options: [
          { id: "a", text: "Face them head-on with courage", points: { mulan: 3, moana: 2 } },
          { id: "b", text: "Think through all possibilities", points: { belle: 3, elsa: 2 } },
          { id: "c", text: "Stay optimistic and kind", points: { cinderella: 3, ariel: 2 } },
          { id: "d", text: "Find creative solutions", points: { aladdin: 3, ariel: 2 } }
        ]
      },
      {
        id: 4,
        question: "What's your ideal environment?",
        options: [
          { id: "a", text: "Under the sea with marine life", points: { ariel: 3 } },
          { id: "b", text: "A cozy library full of books", points: { belle: 3 } },
          { id: "c", text: "An ice palace in the mountains", points: { elsa: 3 } },
          { id: "d", text: "The open ocean on a sailing ship", points: { moana: 3 } }
        ]
      },
      {
        id: 5,
        question: "What motivates you most?",
        options: [
          { id: "a", text: "Protecting your family", points: { mulan: 3, elsa: 2 } },
          { id: "b", text: "Following your heart", points: { ariel: 3, moana: 2 } },
          { id: "c", text: "Doing what's right", points: { cinderella: 3, belle: 2 } },
          { id: "d", text: "Seeking adventure", points: { aladdin: 3, moana: 3 } }
        ]
      }
    ],
    results: [
      {
        id: "ariel",
        title: "Ariel",
        emoji: "🧜‍♀️",
        description: "You're curious, adventurous, and willing to take risks for your dreams! Like Ariel, you're not afraid to explore new worlds and follow your heart, even when others don't understand."
      },
      {
        id: "belle",
        title: "Belle",
        emoji: "📚",
        description: "You're intelligent, independent, and see beyond appearances! Like Belle, you value knowledge, kindness, and aren't afraid to be different from everyone else."
      },
      {
        id: "mulan",
        title: "Mulan",
        emoji: "🗾",
        description: "You're brave, determined, and willing to fight for what's right! Like Mulan, you'll go to great lengths to protect those you love and prove that you can achieve anything."
      },
      {
        id: "elsa",
        title: "Elsa",
        emoji: "❄️",
        description: "You're powerful, independent, and learning to embrace who you are! Like Elsa, you have incredible strength within you and are discovering how to let your true self shine."
      },
      {
        id: "moana",
        title: "Moana",
        emoji: "🌊",
        description: "You're adventurous, determined, and connected to something greater! Like Moana, you're called to explore beyond your comfort zone and restore balance to the world."
      },
      {
        id: "cinderella",
        title: "Cinderella",
        emoji: "👗",
        description: "You're kind, optimistic, and believe in the power of dreams! Like Cinderella, you maintain grace and hope even in difficult times, knowing that magic can happen."
      },
      {
        id: "aladdin",
        title: "Aladdin",
        emoji: "🧞‍♂️",
        description: "You're clever, resourceful, and have a good heart! Like Aladdin, you use your wit and creativity to overcome obstacles and prove that true worth comes from within."
      }
    ]
  },
  {
    id: "career-quiz",
    title: "What's Your Dream Career?",
    description: "Discover the perfect career path that matches your personality!",
    emoji: "💼",
    color: "from-blue-400 to-green-400",
    questions: [
      {
        id: 1,
        question: "What energizes you most?",
        options: [
          { id: "a", text: "Working with people and helping them", points: { helper: 3, leader: 2 } },
          { id: "b", text: "Solving complex problems", points: { analyst: 3, creator: 2 } },
          { id: "c", text: "Creating something new", points: { creator: 3, entrepreneur: 2 } },
          { id: "d", text: "Leading and organizing teams", points: { leader: 3, entrepreneur: 2 } }
        ]
      },
      {
        id: 2,
        question: "What's your ideal work environment?",
        options: [
          { id: "a", text: "Collaborative team spaces", points: { helper: 2, leader: 3 } },
          { id: "b", text: "Quiet, focused individual work", points: { analyst: 3, creator: 2 } },
          { id: "c", text: "Dynamic, fast-paced startup", points: { entrepreneur: 3, leader: 2 } },
          { id: "d", text: "Creative studio or workshop", points: { creator: 3, entrepreneur: 1 } }
        ]
      },
      {
        id: 3,
        question: "What matters most to you in work?",
        options: [
          { id: "a", text: "Making a positive impact", points: { helper: 3, leader: 2 } },
          { id: "b", text: "Intellectual challenges", points: { analyst: 3, creator: 2 } },
          { id: "c", text: "Creative expression", points: { creator: 3, helper: 1 } },
          { id: "d", text: "Financial success and growth", points: { entrepreneur: 3, leader: 2 } }
        ]
      },
      {
        id: 4,
        question: "How do you prefer to learn new skills?",
        options: [
          { id: "a", text: "Through mentoring others", points: { helper: 3, leader: 2 } },
          { id: "b", text: "Deep research and analysis", points: { analyst: 3, creator: 1 } },
          { id: "c", text: "Hands-on experimentation", points: { creator: 3, entrepreneur: 2 } },
          { id: "d", text: "Leading projects and initiatives", points: { leader: 3, entrepreneur: 2 } }
        ]
      },
      {
        id: 5,
        question: "What's your communication style?",
        options: [
          { id: "a", text: "Empathetic and supportive", points: { helper: 3, leader: 1 } },
          { id: "b", text: "Precise and data-driven", points: { analyst: 3, entrepreneur: 1 } },
          { id: "c", text: "Inspiring and visionary", points: { creator: 2, leader: 3 } },
          { id: "d", text: "Persuasive and results-focused", points: { entrepreneur: 3, leader: 2 } }
        ]
      }
    ],
    results: [
      {
        id: "helper",
        title: "The Helper",
        emoji: "🤝",
        description: "Teaching, counseling, healthcare, or social work would be perfect for you! You're naturally empathetic and find fulfillment in making a difference in people's lives."
      },
      {
        id: "analyst",
        title: "The Analyst",
        emoji: "📊",
        description: "Data science, research, engineering, or finance suits you perfectly! You love diving deep into complex problems and finding logical solutions through careful analysis."
      },
      {
        id: "creator",
        title: "The Creator",
        emoji: "🎨",
        description: "Design, writing, music, or innovation roles are your calling! You thrive when you can express your creativity and bring new ideas to life through your unique vision."
      },
      {
        id: "leader",
        title: "The Leader",
        emoji: "👑",
        description: "Management, consulting, project leadership, or executive roles fit you perfectly! You excel at inspiring teams, making strategic decisions, and driving organizational success."
      },
      {
        id: "entrepreneur",
        title: "The Entrepreneur",
        emoji: "🚀",
        description: "Starting your own business, sales, or business development is your path! You're driven by growth, love taking calculated risks, and excel at turning ideas into profitable ventures."
      }
    ]
  },
  {
    id: "house-quiz",
    title: "Which Hogwarts House Are You?",
    description: "Discover where the Sorting Hat would place you at Hogwarts!",
    emoji: "🧙‍♂️",
    color: "from-amber-400 to-red-400",
    questions: [
      {
        id: 1,
        question: "What quality do you value most?",
        options: [
          { id: "a", text: "Courage and bravery", points: { gryffindor: 3, hufflepuff: 1 } },
          { id: "b", text: "Intelligence and wit", points: { ravenclaw: 3, slytherin: 1 } },
          { id: "c", text: "Loyalty and kindness", points: { hufflepuff: 3, gryffindor: 1 } },
          { id: "d", text: "Ambition and cunning", points: { slytherin: 3, ravenclaw: 1 } }
        ]
      },
      {
        id: 2,
        question: "What's your greatest fear?",
        options: [
          { id: "a", text: "Being a coward", points: { gryffindor: 3, hufflepuff: 1 } },
          { id: "b", text: "Being ignorant", points: { ravenclaw: 3, slytherin: 1 } },
          { id: "c", text: "Being alone", points: { hufflepuff: 3, gryffindor: 1 } },
          { id: "d", text: "Being ordinary", points: { slytherin: 3, ravenclaw: 1 } }
        ]
      },
      {
        id: 3,
        question: "How do you prefer to solve problems?",
        options: [
          { id: "a", text: "Head-on with determination", points: { gryffindor: 3, slytherin: 1 } },
          { id: "b", text: "Through careful analysis", points: { ravenclaw: 3, hufflepuff: 1 } },
          { id: "c", text: "By working with others", points: { hufflepuff: 3, gryffindor: 1 } },
          { id: "d", text: "Using strategy and cunning", points: { slytherin: 3, ravenclaw: 1 } }
        ]
      },
      {
        id: 4,
        question: "What would you most like to be remembered for?",
        options: [
          { id: "a", text: "Your heroic deeds", points: { gryffindor: 3, hufflepuff: 1 } },
          { id: "b", text: "Your brilliant discoveries", points: { ravenclaw: 3, slytherin: 1 } },
          { id: "c", text: "Your kindness to others", points: { hufflepuff: 3, gryffindor: 1 } },
          { id: "d", text: "Your powerful achievements", points: { slytherin: 3, ravenclaw: 1 } }
        ]
      },
      {
        id: 5,
        question: "Which magical creature appeals to you most?",
        options: [
          { id: "a", text: "Phoenix - brave and loyal", points: { gryffindor: 3, hufflepuff: 2 } },
          { id: "b", text: "Raven - wise and mysterious", points: { ravenclaw: 3, slytherin: 1 } },
          { id: "c", text: "Badger - hardworking and faithful", points: { hufflepuff: 3, gryffindor: 1 } },
          { id: "d", text: "Snake - cunning and ambitious", points: { slytherin: 3, ravenclaw: 1 } }
        ]
      }
    ],
    results: [
      {
        id: "gryffindor",
        title: "Gryffindor",
        emoji: "🦁",
        description: "You belong in Gryffindor! You're brave, daring, and always ready to stand up for what's right. Like Harry, Hermione, and Ron, you face challenges with courage and loyalty."
      },
      {
        id: "hufflepuff",
        title: "Hufflepuff",
        emoji: "🦡",
        description: "You belong in Hufflepuff! You're kind, loyal, and hardworking. You value fairness and friendship above all, and you're always there for those who need you."
      },
      {
        id: "ravenclaw",
        title: "Ravenclaw",
        emoji: "🦅",
        description: "You belong in Ravenclaw! You're intelligent, creative, and love learning. You solve problems through wit and wisdom, always seeking knowledge and understanding."
      },
      {
        id: "slytherin",
        title: "Slytherin",
        emoji: "🐍",
        description: "You belong in Slytherin! You're ambitious, determined, and resourceful. You're a natural leader who isn't afraid to use cunning to achieve your goals."
      }
    ]
  },
  {
    id: "food-personality-quiz",
    title: "What Food Matches Your Personality?",
    description: "Discover which delicious food perfectly represents who you are!",
    emoji: "🍕",
    color: "from-orange-400 to-red-400",
    questions: [
      {
        id: 1,
        question: "How do you approach new experiences?",
        options: [
          { id: "a", text: "Jump right in with excitement", points: { spicy: 3, exotic: 2 } },
          { id: "b", text: "Take time to warm up to them", points: { comfort: 3, classic: 2 } },
          { id: "c", text: "Analyze all the possibilities first", points: { sophisticated: 3, healthy: 2 } },
          { id: "d", text: "Go with whatever feels right", points: { sweet: 3, comfort: 2 } }
        ]
      },
      {
        id: 2,
        question: "What's your ideal social gathering?",
        options: [
          { id: "a", text: "Big party with lots of energy", points: { spicy: 3, sweet: 2 } },
          { id: "b", text: "Intimate dinner with close friends", points: { sophisticated: 3, classic: 2 } },
          { id: "c", text: "Cozy movie night at home", points: { comfort: 3, sweet: 2 } },
          { id: "d", text: "Adventure travel with new cuisines", points: { exotic: 3, spicy: 2 } }
        ]
      },
      {
        id: 3,
        question: "How do you handle stress?",
        options: [
          { id: "a", text: "Work out or do something active", points: { healthy: 3, spicy: 2 } },
          { id: "b", text: "Treat yourself to something indulgent", points: { sweet: 3, comfort: 2 } },
          { id: "c", text: "Find a quiet, calming activity", points: { sophisticated: 3, healthy: 2 } },
          { id: "d", text: "Stick to familiar, comforting routines", points: { comfort: 3, classic: 2 } }
        ]
      },
      {
        id: 4,
        question: "What's your fashion style?",
        options: [
          { id: "a", text: "Bold and eye-catching", points: { spicy: 3, exotic: 2 } },
          { id: "b", text: "Classic and timeless", points: { classic: 3, sophisticated: 2 } },
          { id: "c", text: "Comfortable and practical", points: { comfort: 3, healthy: 2 } },
          { id: "d", text: "Sweet and charming", points: { sweet: 3, classic: 1 } }
        ]
      },
      {
        id: 5,
        question: "What motivates you most?",
        options: [
          { id: "a", text: "Exciting challenges and thrills", points: { spicy: 3, exotic: 2 } },
          { id: "b", text: "Making others happy", points: { sweet: 3, comfort: 2 } },
          { id: "c", text: "Personal growth and wellness", points: { healthy: 3, sophisticated: 2 } },
          { id: "d", text: "Creating beautiful experiences", points: { sophisticated: 3, exotic: 2 } }
        ]
      }
    ],
    results: [
      {
        id: "spicy",
        title: "Spicy Food",
        emoji: "🌶️",
        description: "You're bold, adventurous, and never boring! Like spicy food, you add excitement to every situation and aren't afraid to turn up the heat. People love your fiery energy!"
      },
      {
        id: "sweet",
        title: "Sweet Dessert",
        emoji: "🍰",
        description: "You're kind, optimistic, and bring joy to others! Like a perfect dessert, you make everything better and sweeter. People can't help but smile when you're around!"
      },
      {
        id: "comfort",
        title: "Comfort Food",
        emoji: "🍝",
        description: "You're warm, reliable, and make everyone feel at home! Like comfort food, you provide stability and warmth in people's lives. You're the friend everyone turns to!"
      },
      {
        id: "exotic",
        title: "Exotic Cuisine",
        emoji: "🍜",
        description: "You're adventurous, cultured, and always interesting! Like exotic cuisine, you bring unique flavors and perspectives that broaden everyone's horizons. You're unforgettable!"
      },
      {
        id: "healthy",
        title: "Fresh & Healthy",
        emoji: "🥗",
        description: "You're balanced, mindful, and inspiring! Like healthy food, you make people want to be their best selves. Your positive energy and wisdom are refreshing to everyone around you!"
      },
      {
        id: "sophisticated",
        title: "Gourmet Cuisine",
        emoji: "🍷",
        description: "You're refined, thoughtful, and appreciate the finer things! Like gourmet cuisine, you have excellent taste and attention to detail. You elevate every experience you're part of!"
      },
      {
        id: "classic",
        title: "Classic Favorite",
        emoji: "🍔",
        description: "You're dependable, genuine, and timelessly appealing! Like a classic favorite, you never go out of style and people always enjoy your company. You're authentically wonderful!"
      }
    ]
  },
  {
    id: "music-genre-quiz",
    title: "What Music Genre Are You?",
    description: "Find out which music genre perfectly matches your vibe!",
    emoji: "🎵",
    color: "from-purple-400 to-indigo-400",
    questions: [
      {
        id: 1,
        question: "What's your energy level like?",
        options: [
          { id: "a", text: "High energy, always moving", points: { pop: 3, rock: 2, electronic: 2 } },
          { id: "b", text: "Calm and steady", points: { folk: 3, classical: 2, jazz: 2 } },
          { id: "c", text: "Intense and passionate", points: { rock: 3, hip_hop: 2, electronic: 1 } },
          { id: "d", text: "Smooth and laid-back", points: { jazz: 3, r_b: 3, folk: 2 } }
        ]
      },
      {
        id: 2,
        question: "How do you express your emotions?",
        options: [
          { id: "a", text: "Through storytelling", points: { folk: 3, country: 3, hip_hop: 2 } },
          { id: "b", text: "With bold, dramatic gestures", points: { rock: 3, classical: 2, pop: 2 } },
          { id: "c", text: "Through rhythm and flow", points: { hip_hop: 3, r_b: 3, electronic: 2 } },
          { id: "d", text: "With subtle, nuanced feelings", points: { jazz: 3, classical: 3, folk: 2 } }
        ]
      },
      {
        id: 3,
        question: "What's your ideal night out?",
        options: [
          { id: "a", text: "Dancing at a club", points: { pop: 3, electronic: 3, hip_hop: 2 } },
          { id: "b", text: "Concert at a small venue", points: { folk: 3, jazz: 2, rock: 2 } },
          { id: "c", text: "Big stadium show", points: { rock: 3, pop: 2, country: 2 } },
          { id: "d", text: "Intimate jazz lounge", points: { jazz: 3, r_b: 2, classical: 2 } }
        ]
      },
      {
        id: 4,
        question: "What inspires your creativity?",
        options: [
          { id: "a", text: "Personal experiences and relationships", points: { r_b: 3, folk: 3, country: 2 } },
          { id: "b", text: "Social issues and change", points: { hip_hop: 3, folk: 2, rock: 2 } },
          { id: "c", text: "Pure artistic expression", points: { classical: 3, jazz: 3, electronic: 2 } },
          { id: "d", text: "Fun and entertainment", points: { pop: 3, electronic: 2, country: 2 } }
        ]
      },
      {
        id: 5,
        question: "How do you like your music produced?",
        options: [
          { id: "a", text: "Polished and perfect", points: { pop: 3, classical: 2, r_b: 2 } },
          { id: "b", text: "Raw and authentic", points: { rock: 3, folk: 3, hip_hop: 2 } },
          { id: "c", text: "Innovative and experimental", points: { electronic: 3, jazz: 2, classical: 2 } },
          { id: "d", text: "Heartfelt and genuine", points: { country: 3, folk: 2, r_b: 2 } }
        ]
      }
    ],
    results: [
      {
        id: "pop",
        title: "Pop Music",
        emoji: "🎤",
        description: "You're upbeat, social, and love bringing people together! Like pop music, you're catchy, accessible, and always know how to get the party started. You're the soundtrack to good times!"
      },
      {
        id: "rock",
        title: "Rock Music",
        emoji: "🎸",
        description: "You're bold, passionate, and unafraid to make some noise! Like rock music, you have strong opinions and aren't afraid to express them. You live life with intensity and authenticity!"
      },
      {
        id: "hip_hop",
        title: "Hip-Hop",
        emoji: "🎤",
        description: "You're creative, confident, and have something important to say! Like hip-hop, you use your voice to tell stories and create change. You're rhythmic, smart, and always authentic!"
      },
      {
        id: "jazz",
        title: "Jazz",
        emoji: "🎷",
        description: "You're sophisticated, improvisational, and appreciate life's complexities! Like jazz, you're smooth, unpredictable, and deeply expressive. You find beauty in the unexpected!"
      },
      {
        id: "folk",
        title: "Folk Music",
        emoji: "🎻",
        description: "You're genuine, thoughtful, and connected to your roots! Like folk music, you value storytelling and authentic human connection. You're wise beyond your years and deeply empathetic!"
      },
      {
        id: "electronic",
        title: "Electronic Music",
        emoji: "🎹",
        description: "You're innovative, forward-thinking, and love pushing boundaries! Like electronic music, you're not afraid to experiment and create something entirely new. You're the future!"
      },
      {
        id: "classical",
        title: "Classical Music",
        emoji: "🎼",
        description: "You're refined, passionate, and appreciate timeless beauty! Like classical music, you have depth, complexity, and emotional range that moves people. You're truly artistic!"
      },
      {
        id: "country",
        title: "Country Music",
        emoji: "🤠",
        description: "You're down-to-earth, loyal, and value genuine connections! Like country music, you tell it like it is and aren't afraid to be vulnerable. You're the friend everyone can count on!"
      },
      {
        id: "r_b",
        title: "R&B/Soul",
        emoji: "🎺",
        description: "You're smooth, passionate, and deeply emotional! Like R&B, you express feelings with style and grace. You have soul and know how to make people feel something real!"
      }
    ]
  },
  {
    id: "travel-style-quiz",
    title: "What's Your Travel Style?",
    description: "Discover how you love to explore the world!",
    emoji: "✈️",
    color: "from-cyan-400 to-blue-400",
    questions: [
      {
        id: 1,
        question: "How do you prefer to plan your trips?",
        options: [
          { id: "a", text: "Detailed itinerary with everything planned", points: { planner: 3, cultural: 2 } },
          { id: "b", text: "General ideas, but mostly go with the flow", points: { spontaneous: 3, backpacker: 2 } },
          { id: "c", text: "Research extensively, plan some key things", points: { cultural: 3, planner: 2 } },
          { id: "d", text: "Book accommodation and figure out the rest", points: { relaxed: 3, spontaneous: 2 } }
        ]
      },
      {
        id: 2,
        question: "What's your ideal accommodation?",
        options: [
          { id: "a", text: "Luxury resort with all amenities", points: { luxury: 3, relaxed: 2 } },
          { id: "b", text: "Unique local stays like B&Bs", points: { cultural: 3, authentic: 3 } },
          { id: "c", text: "Hostels or budget-friendly options", points: { backpacker: 3, spontaneous: 2 } },
          { id: "d", text: "Boutique hotels with character", points: { explorer: 3, cultural: 2 } }
        ]
      },
      {
        id: 3,
        question: "What activities excite you most?",
        options: [
          { id: "a", text: "Museums, galleries, historical sites", points: { cultural: 3, planner: 2 } },
          { id: "b", text: "Outdoor adventures and sports", points: { adventure: 3, explorer: 3 } },
          { id: "c", text: "Spa treatments and beach lounging", points: { relaxed: 3, luxury: 3 } },
          { id: "d", text: "Local festivals and street food", points: { authentic: 3, spontaneous: 2 } }
        ]
      },
      {
        id: 4,
        question: "How do you like to get around?",
        options: [
          { id: "a", text: "Private tours and comfortable transport", points: { luxury: 3, planner: 2 } },
          { id: "b", text: "Public transport and walking", points: { authentic: 3, backpacker: 3 } },
          { id: "c", text: "Rental car for maximum flexibility", points: { explorer: 3, spontaneous: 2 } },
          { id: "d", text: "Whatever's most convenient", points: { relaxed: 3, cultural: 1 } }
        ]
      },
      {
        id: 5,
        question: "What's your travel budget philosophy?",
        options: [
          { id: "a", text: "Splurge on experiences, save on basics", points: { cultural: 3, adventure: 2 } },
          { id: "b", text: "Luxury all the way", points: { luxury: 3, relaxed: 2 } },
          { id: "c", text: "Budget-conscious but not restrictive", points: { backpacker: 3, authentic: 2 } },
          { id: "d", text: "Spend where it matters most to you", points: { explorer: 3, planner: 2 } }
        ]
      }
    ],
    results: [
      {
        id: "luxury",
        title: "The Luxury Traveler",
        emoji: "🥂",
        description: "You believe travel should be comfortable and indulgent! You love five-star experiences, spa treatments, and being pampered. Life's too short for uncomfortable flights and bad hotels!"
      },
      {
        id: "cultural",
        title: "The Culture Seeker",
        emoji: "🏛️",
        description: "You travel to learn and grow! Museums, historical sites, and cultural experiences are your passion. You want to understand the heart and soul of every place you visit."
      },
      {
        id: "adventure",
        title: "The Adventure Seeker",
        emoji: "🏔️",
        description: "You crave adrenaline and outdoor thrills! Hiking, extreme sports, and physical challenges are what make travel exciting for you. The more adventurous, the better!"
      },
      {
        id: "backpacker",
        title: "The Backpacker",
        emoji: "🎒",
        description: "You're all about authentic, budget-friendly travel! Hostels, street food, and meeting fellow travelers are your style. You prove that amazing experiences don't require big budgets!"
      },
      {
        id: "spontaneous",
        title: "The Spontaneous Explorer",
        emoji: "🌟",
        description: "You love the thrill of the unknown! Last-minute bookings, unexpected discoveries, and going where the wind takes you - that's your kind of adventure!"
      },
      {
        id: "relaxed",
        title: "The Relaxed Vacationer",
        emoji: "🏖️",
        description: "You travel to unwind and recharge! Beach resorts, spa days, and stress-free environments are your paradise. You know how to truly disconnect and enjoy the moment!"
      },
      {
        id: "authentic",
        title: "The Authentic Traveler",
        emoji: "🏘️",
        description: "You want to live like a local! Street food, neighborhood markets, and genuine cultural immersion are your goals. You seek real connections with people and places!"
      },
      {
        id: "explorer",
        title: "The Explorer",
        emoji: "🗺️",
        description: "You're driven by curiosity and discovery! Off-the-beaten-path destinations, hidden gems, and unique experiences are what fuel your wanderlust. You're a modern-day adventurer!"
      },
      {
        id: "planner",
        title: "The Detailed Planner",
        emoji: "📋",
        description: "You believe the best trips are well-planned trips! Detailed itineraries, booked activities, and contingency plans ensure you make the most of every moment. Organization is your superpower!"
      }
    ]
  }
];