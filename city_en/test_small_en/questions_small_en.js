// 8 short questions, one per level
const SMALL_QUESTIONS = [
    {
      levelHint: 1,
      text: "When you face a new object or tool, what do you usually do first?",
      options: [
        { text: "Touch it and try it right away", level: 1 },
        { text: "Look around and ask others how they use it", level: 2 },
        { text: "Check how it works over time", level: 3 },
        { text: "Wait for clear rules or instruction", level: 4 }
      ]
    },
    {
      levelHint: 2,
      text: "You come to a new place (office, campus). What is most important for you?",
      options: [
        { text: "Where things and people are located", level: 2 },
        { text: "Who is the main person here", level: 5 },
        { text: "What you can do here immediately", level: 1 },
        { text: "What problems this place can solve for the future", level: 8 }
      ]
    },
    {
      levelHint: 3,
      text: "You join a project that already started. What do you ask first?",
      options: [
        { text: "When did it start and what was done so far?", level: 3 },
        { text: "Who is responsible for what?", level: 4 },
        { text: "Why do we need this project at all?", level: 6 },
        { text: "What can go wrong here?", level: 7 }
      ]
    },
    {
      levelHint: 4,
      text: "At work or in study you feel most comfortable when…",
      options: [
        { text: "Roles and rules are clear and stable", level: 4 },
        { text: "You can improvise and change the process", level: 5 },
        { text: "You can experiment and break patterns", level: 7 },
        { text: "You can see long-term balance of pros and cons", level: 8 }
      ]
    },
    {
      levelHint: 5,
      text: "You have to make a decision with risk. What is your style?",
      options: [
        { text: "I take responsibility and choose myself", level: 5 },
        { text: "I ask others and look for consensus", level: 4 },
        { text: "I look for proofs and arguments first", level: 6 },
        { text: "I try to avoid any decision", level: 2 }
      ]
    },
    {
      levelHint: 6,
      text: "When you hear two opposite opinions, what do you do?",
      options: [
        { text: "Look for logical arguments on both sides", level: 6 },
        { text: "Look who is more important here", level: 5 },
        { text: "Look for a completely new angle", level: 7 },
        { text: "Wait until the conflict calms down", level: 2 }
      ]
    },
    {
      levelHint: 7,
      text: "What attracts you more in thinking?",
      options: [
        { text: "Paradoxes, strange examples, breaking habits", level: 7 },
        { text: "Clear rules and proven methods", level: 4 },
        { text: "Practical step-by-step instructions", level: 3 },
        { text: "Global harmony of the system", level: 8 }
      ]
    },
    {
      levelHint: 8,
      text: "When you choose a long-term path (career, project), what is key?",
      options: [
        { text: "Long-term balance of people, resources and risks", level: 8 },
        { text: "What I can personally win here", level: 5 },
        { text: "Where I can learn new tools quickly", level: 1 },
        { text: "Where there are clear rules and stability", level: 4 }
      ]
    }
  ];
  