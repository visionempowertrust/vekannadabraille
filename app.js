const lessons = [
  {
    slug: "vowels-reading-order",
    title: "Vowels and Reading Order",
    summary: "Learn independent Kannada vowels and how Bharati Braille writes vowels after consonants.",
    icon: "⠁",
    time: "25 min",
    level: "Start here",
    introduction: "Kannada print often shows a consonant with a vowel sign attached to it. In Bharati Braille, sight readers should learn to read the consonant cell and then the vowel cell in spoken order. This workshop starts with independent vowels and then uses simple syllables to show that order.",
    objectives: [
      "Recognize the common Kannada vowel cells by sight.",
      "Explain why vowel signs are practiced as full vowel cells.",
      "Read open syllables such as ಕಾ, ಕಿ, ಕೂ, ಗೆ, and ಮೈ in braille order."
    ],
    focus: ["ಅ", "ಆ", "ಇ", "ಈ", "ಉ", "ಊ", "ಎ", "ಏ", "ಐ", "ಒ", "ಓ", "ಔ", "ಕ", "ಗ", "ಮ"],
    practiceSets: [
      { title: "Vowel warm-up", instruction: "Read each braille cell aloud, then cover the print and name it again.", items: ["ಅ", "ಆ", "ಇ", "ಈ", "ಉ", "ಊ", "ಎ", "ಏ", "ಐ", "ಒ", "ಓ", "ಔ"] },
      { title: "Short vowel pairs", instruction: "Compare the shape of each pair and say what changed.", items: ["ಅ / ಆ", "ಇ / ಈ", "ಉ / ಊ", "ಎ / ಏ", "ಒ / ಓ"] },
      { title: "Consonant plus vowel order", instruction: "Read consonant first, vowel second. Do not read the printed vowel sign first.", items: ["ಕಾ", "ಕಿ", "ಕೀ", "ಕು", "ಕೂ", "ಕೆ", "ಕೇ", "ಕೈ", "ಕೊ", "ಕೋ", "ಕೌ"] },
      { title: "Mixed syllables", instruction: "Move left to right and say the full syllable after reading both cells.", items: ["ಗಾ", "ಗಿ", "ಗೂ", "ಮೆ", "ಮೇ", "ಮೈ", "ರೋ", "ಲೌ"] },
      { title: "Quick recognition", instruction: "Point to the Kannada print as soon as you recognize the braille pattern.", items: ["ಏ", "ಕೀ", "ಮೌ", "ಐ", "ಗೋ", "ಉ", "ಕೆ", "ಓ"] },
      { title: "Mini reading line", instruction: "Read slowly first, then repeat with a steady rhythm.", items: ["ಕಾ ಕಿ ಕು ಕೆ ಕೋ", "ಮಾ ಮೀ ಮೂ ಮೇ ಮೈ", "ಗಾ ಗಿ ಗೆ ಗೋ ಗೌ"] }
    ]
  },
  {
    slug: "velar-row",
    title: "Consonants: ಕ to ಙ",
    summary: "Practice the velar row with dot patterns, Kannada print, and sound labels.",
    icon: "⠅",
    time: "20 min",
    level: "Letters",
    introduction: "The velar row is a good first consonant row because it begins with ಕ, a common Kannada letter. Practice the row as a family: ಕ, ಖ, ಗ, ಘ, ಙ. Sight reading improves when you compare nearby cells instead of memorizing each one in isolation.",
    objectives: [
      "Recognize the five velar consonants in print and braille.",
      "Distinguish unaspirated and aspirated pairs: ಕ/ಖ and ಗ/ಘ.",
      "Read short syllables built from velar consonants and vowels."
    ],
    focus: ["ಕ", "ಖ", "ಗ", "ಘ", "ಙ", "ಅ", "ಆ", "ಇ", "ಉ", "ಎ"],
    practiceSets: [
      { title: "Row chant", instruction: "Read the row forward, then backward.", items: ["ಕ", "ಖ", "ಗ", "ಘ", "ಙ", "ಙ", "ಘ", "ಗ", "ಖ", "ಕ"] },
      { title: "Pair contrast", instruction: "Name each pair and notice the different braille shape.", items: ["ಕ / ಖ", "ಗ / ಘ", "ಕ / ಗ", "ಖ / ಘ", "ಗ / ಙ"] },
      { title: "Open syllables", instruction: "Read consonant plus vowel in spoken order.", items: ["ಕಾ", "ಕಿ", "ಕು", "ಕೆ", "ಗಾ", "ಗಿ", "ಗು", "ಗೆ", "ಘಾ", "ಘು"] },
      { title: "Find the odd one", instruction: "In each group, identify the cell that is from a different consonant.", items: ["ಕ ಕ ಕ ಖ", "ಗ ಗ ಘ ಗ", "ಖ ಕ ಖ ಖ", "ಘ ಘ ಙ ಘ", "ಗ ಙ ಗ ಗ"] },
      { title: "Speed line", instruction: "Read once for accuracy, then once for fluency.", items: ["ಕ ಖ ಗ ಘ ಙ", "ಕಾ ಖಾ ಗಾ ಘಾ", "ಕಿ ಖಿ ಗಿ ಘಿ", "ಕು ಖು ಗು ಘು"] }
    ]
  },
  {
    slug: "palatal-row",
    title: "Consonants: ಚ to ಞ",
    summary: "Recognize the palatal row and compare similar-looking braille cells.",
    icon: "⠉",
    time: "20 min",
    level: "Letters",
    introduction: "This workshop introduces ಚ, ಛ, ಜ, ಝ, and ಞ. These sounds appear in everyday words, names, and school vocabulary. Practice them as a row, then mix them with vowels so the cells become familiar in real reading.",
    objectives: [
      "Read the palatal row by sight.",
      "Separate ಚ/ಛ and ಜ/ಝ when they appear quickly.",
      "Read short syllable strings without pausing between every cell."
    ],
    focus: ["ಚ", "ಛ", "ಜ", "ಝ", "ಞ", "ಆ", "ಇ", "ಈ", "ಏ", "ಒ"],
    practiceSets: [
      { title: "Row recognition", instruction: "Read each print letter, then read its braille cell.", items: ["ಚ", "ಛ", "ಜ", "ಝ", "ಞ"] },
      { title: "Aspirated pairs", instruction: "Say the soft sound first, then the breathy sound.", items: ["ಚ / ಛ", "ಜ / ಝ", "ಚಾ / ಛಾ", "ಜಿ / ಝಿ"] },
      { title: "Vowel practice", instruction: "Read the consonant cell, then the vowel cell.", items: ["ಚಾ", "ಚಿ", "ಚೀ", "ಛೆ", "ಛೋ", "ಜಾ", "ಜಿ", "ಜೇ", "ಝು", "ಝೋ"] },
      { title: "Mixed row drill", instruction: "Keep your eyes moving left to right.", items: ["ಚ ಜ ಛ ಝ ಞ", "ಜ ಚ ಝ ಛ ಚ", "ಞ ಜ ಚ ಛ ಝ", "ಚಾ ಜಿ ಛು ಝೇ"] },
      { title: "Review with velars", instruction: "Mix this row with the previous row.", items: ["ಕ ಚ ಗ ಜ", "ಖ ಛ ಘ ಝ", "ಕಿ ಚಿ ಗಿ ಜಿ", "ಕೆ ಚೆ ಗೆ ಜೆ"] }
    ]
  },
  {
    slug: "retroflex-row",
    title: "Consonants: ಟ to ಣ",
    summary: "Build confidence with retroflex sounds and their Bharati Braille cells.",
    icon: "⠾",
    time: "25 min",
    level: "Letters",
    introduction: "Retroflex consonants are important in Kannada and can be challenging for new readers because several cells look visually dense. Treat this workshop as slow, careful pattern practice before adding speed.",
    objectives: [
      "Recognize ಟ, ಠ, ಡ, ಢ, and ಣ.",
      "Compare visually dense cells without guessing.",
      "Read retroflex syllables with long and short vowels."
    ],
    focus: ["ಟ", "ಠ", "ಡ", "ಢ", "ಣ", "ಅ", "ಆ", "ಈ", "ಉ", "ಓ"],
    practiceSets: [
      { title: "Careful row read", instruction: "Read each item and trace the dot group with your eyes.", items: ["ಟ", "ಠ", "ಡ", "ಢ", "ಣ"] },
      { title: "Dense-cell contrast", instruction: "Pause briefly between each pair and name both letters.", items: ["ಟ / ಠ", "ಡ / ಢ", "ಟ / ಢ", "ಠ / ಣ", "ಡ / ಣ"] },
      { title: "Syllable builder", instruction: "Read consonant plus vowel as one syllable.", items: ["ಟಾ", "ಟಿ", "ಟು", "ಠಾ", "ಠೋ", "ಡಾ", "ಡೀ", "ಢು", "ಣಾ", "ಣೀ"] },
      { title: "Accuracy line", instruction: "Read without speed pressure. Accuracy first.", items: ["ಟ ಠ ಡ ಢ ಣ", "ಟಾ ಠಾ ಡಾ ಢಾ ಣಾ", "ಟಿ ಠಿ ಡಿ ಢಿ ಣಿ"] },
      { title: "Mixed review", instruction: "Combine velar, palatal, and retroflex rows.", items: ["ಕ ಚ ಟ", "ಗ ಜ ಡ", "ಖ ಛ ಠ", "ಘ ಝ ಢ", "ಙ ಞ ಣ"] }
    ]
  },
  {
    slug: "dental-row",
    title: "Consonants: ತ to ನ",
    summary: "Read the dental row and distinguish ತ, ಥ, ದ, ಧ, and ನ.",
    icon: "⠞",
    time: "25 min",
    level: "Letters",
    introduction: "The dental row appears constantly in Kannada. This workshop gives extra practice with ತ, ಥ, ದ, ಧ, and ನ so learners can read common syllables without stopping.",
    objectives: [
      "Read the dental consonant row by sight.",
      "Distinguish ತ/ಥ and ದ/ಧ quickly.",
      "Read common syllables and short review lines."
    ],
    focus: ["ತ", "ಥ", "ದ", "ಧ", "ನ", "ಅ", "ಆ", "ಇ", "ಉ", "ಎ", "ಓ"],
    practiceSets: [
      { title: "Row read", instruction: "Read forward, backward, then mixed.", items: ["ತ", "ಥ", "ದ", "ಧ", "ನ", "ನ", "ಧ", "ದ", "ಥ", "ತ"] },
      { title: "Pair practice", instruction: "Say the pair twice: once slowly, once naturally.", items: ["ತ / ಥ", "ದ / ಧ", "ತ / ದ", "ಥ / ಧ", "ದ / ನ"] },
      { title: "Vowel combinations", instruction: "Use spoken order: consonant, then vowel.", items: ["ತಾ", "ತಿ", "ತು", "ತೆ", "ತೋ", "ದಾ", "ದಿ", "ದು", "ದೆ", "ದೋ"] },
      { title: "Nasal practice", instruction: "Find ನ quickly in each line.", items: ["ನ ತ ನ ದ", "ತಾ ನಾ ದಾ ನಾ", "ನಿ ತಿ ನು ತು", "ದೆ ನೇ ನೋ ನು"] },
      { title: "Mixed consonant rows", instruction: "Read all learned rows in short bursts.", items: ["ಕ ತ ಚ ದ", "ಗ ದ ಜ ನ", "ಟ ತ ಡ ದ", "ಕಿ ತಿ ಚಿ ದಿ", "ಕು ತು ಗು ದು"] }
    ]
  },
  {
    slug: "remaining-consonants",
    title: "Consonants: ಪ to ಹ",
    summary: "Finish common consonants, semivowels, liquids, sibilants, and ಹ.",
    icon: "⠏",
    time: "35 min",
    level: "Letters",
    introduction: "This workshop completes the most common consonants: ಪ, ಫ, ಬ, ಭ, ಮ, ಯ, ರ, ಲ, ಳ, ವ, ಶ, ಷ, ಸ, and ಹ. Because the set is larger, practice it in smaller families.",
    objectives: [
      "Recognize the remaining common consonants.",
      "Read family groups such as ಪ/ಫ/ಬ/ಭ/ಮ and ಯ/ರ/ಲ/ವ.",
      "Use the full consonant inventory in mixed drills."
    ],
    focus: ["ಪ", "ಫ", "ಬ", "ಭ", "ಮ", "ಯ", "ರ", "ಲ", "ಳ", "ವ", "ಶ", "ಷ", "ಸ", "ಹ"],
    practiceSets: [
      { title: "Labial family", instruction: "Read this family until each cell feels familiar.", items: ["ಪ", "ಫ", "ಬ", "ಭ", "ಮ", "ಪಾ", "ಫಿ", "ಬು", "ಭೇ", "ಮೋ"] },
      { title: "Flow letters", instruction: "Practice letters that commonly connect sounds in words.", items: ["ಯ", "ರ", "ಲ", "ಳ", "ವ", "ಯಾ", "ರಿ", "ಲು", "ವೇ", "ವೋ"] },
      { title: "Sibilants and ಹ", instruction: "Compare ಶ, ಷ, ಸ, and ಹ carefully.", items: ["ಶ", "ಷ", "ಸ", "ಹ", "ಶಾ", "ಷಿ", "ಸು", "ಹೇ", "ಸೋ"] },
      { title: "Large-set recognition", instruction: "Point to the letter as soon as you know it.", items: ["ಮ", "ರ", "ಪ", "ಸ", "ವ", "ಭ", "ಳ", "ಹ", "ಬ", "ಯ", "ಶ", "ಲ"] },
      { title: "Mixed syllable lines", instruction: "Read each line twice, then cover the print.", items: ["ಪಾ ಬಿ ಮು ಮೇ", "ಯಾ ರಿ ಲು ವೇ", "ಶಿ ಸು ಹಾ ಸೋ", "ಮಾ ವಿ ಭು ಫೇ"] },
      { title: "Full consonant review", instruction: "Mix newer cells with earlier consonant rows.", items: ["ಕ ಪ ತ ಮ", "ಚ ಜ ರ ಲ", "ಟ ಡ ಸ ಹ", "ಗ ಬ ದ ವ", "ನ ಮ ಯ ರ"] }
    ]
  },
  {
    slug: "marks",
    title: "Halant, Anusvara, Visarga",
    summary: "See how vowel cancellation and syllable codas are represented in braille.",
    icon: "⠈",
    time: "20 min",
    level: "Marks",
    introduction: "Kannada print uses marks that change how a syllable is read. This workshop introduces halant, anusvara, and visarga as sight-reading signals. The goal is not grammar analysis; it is quick recognition while reading.",
    objectives: [
      "Identify halant, anusvara, and visarga cells.",
      "Read consonant clusters slowly and accurately.",
      "Notice when a printed mark changes the spoken syllable."
    ],
    focus: ["್", "ಂ", "ಃ", "ಕ", "ರ", "ಮ", "ಸ", "ಹ"],
    practiceSets: [
      { title: "Mark recognition", instruction: "Name each mark and say what it does.", items: ["್", "ಂ", "ಃ"] },
      { title: "Halant before consonant", instruction: "Read the halant signal and then the consonant.", items: ["ಕ್", "ತ್", "ರ್", "ಲ್", "ಮ್", "ಸ್"] },
      { title: "Cluster practice", instruction: "Read slowly. Keep the consonant order clear.", items: ["ಕ್ರ", "ಪ್ರ", "ತ್ರ", "ಬ್ರ", "ಗ್ರ", "ಸ್ಕ"] },
      { title: "Anusvara practice", instruction: "Notice the nasal sound at the end of the syllable.", items: ["ಕಂ", "ಗಂ", "ತಂ", "ನಂ", "ಮಂ", "ಸಂ"] },
      { title: "Visarga practice", instruction: "Read the vowel or consonant, then the visarga mark.", items: ["ಅಃ", "ಕಃ", "ದಃ", "ಮಃ", "ಹಃ"] },
      { title: "Mixed marks", instruction: "Tell which mark appears in each item.", items: ["ಕಂ", "ಕ್", "ಅಃ", "ಪ್ರ", "ಸಂ", "ಮ್", "ಹಃ", "ತ್ರ"] }
    ]
  },
  {
    slug: "words-sentences",
    title: "Words and Sentences",
    summary: "Read short Kannada words, numbers, punctuation, and mixed review drills.",
    icon: "⠎",
    time: "40 min",
    level: "Practice",
    introduction: "The final workshop moves from cells to reading. Learners practice short words, familiar syllable patterns, numbers, punctuation, and sentence-like lines. Keep the pace comfortable and repeat each set for fluency.",
    objectives: [
      "Read short Kannada words using learned cells.",
      "Recognize Kannada and Arabic numerals with the number sign.",
      "Read punctuation and short sentence lines with a steady rhythm."
    ],
    focus: ["ಕನ್ನಡ", "ಕಲಿಕೆ", "ಮನೆ", "ನದಿ", "೧", "೨", "೩", ".", "?"],
    practiceSets: [
      { title: "Short words", instruction: "Read one word at a time. Then read the full line.", items: ["ಮನೆ", "ನದಿ", "ಕವಿ", "ಮಲೆ", "ಹರಿ", "ಸರಳ", "ಕಲಿಕೆ"] },
      { title: "Kannada learning words", instruction: "Practice words likely to appear in this course.", items: ["ಕನ್ನಡ", "ಬ್ರೈಲ್", "ಓದು", "ಅಕ್ಷರ", "ಪಾಠ", "ಅಭ್ಯಾಸ"] },
      { title: "Number practice", instruction: "Read the number sign before each digit.", items: ["೧", "೨", "೩", "೪", "೫", "10", "25", "೩೫"] },
      { title: "Punctuation", instruction: "Read the punctuation name after the word.", items: ["ಮನೆ.", "ನದಿ?", "ಹೌದು!", "ಕವಿ,", "ಪಾಠ:"] },
      { title: "Sentence lines", instruction: "Read slowly first, then repeat naturally.", items: ["ಕವಿ ಓದು.", "ಮನೆ ಸರಳ.", "ಕನ್ನಡ ಕಲಿಕೆ.", "ಬ್ರೈಲ್ ಓದು."] },
      { title: "Final mixed review", instruction: "Read across rows, not down columns.", items: ["ಅ ಕ ಗ ಚ ಜ", "ಟ ಡ ತ ದ ನ", "ಪ ಬ ಮ ರ ಲ", "ಶ ಸ ಹ ಕಂ ಕ್ರ", "೧ ೨ ೩ ೪ ೫"] }
    ]
  }
];

const chart = [
  ["ಅ", "a", "⠁", "1", "vowel"], ["ಆ", "aa", "⠜", "345", "vowel"],
  ["ಇ", "i", "⠊", "24", "vowel"], ["ಈ", "ii", "⠔", "35", "vowel"],
  ["ಉ", "u", "⠥", "136", "vowel"], ["ಊ", "uu", "⠳", "1256", "vowel"],
  ["ಎ", "e", "⠢", "26", "vowel"], ["ಏ", "ee", "⠑", "15", "vowel"],
  ["ಐ", "ai", "⠌", "34", "vowel"], ["ಒ", "o", "⠭", "1346", "vowel"],
  ["ಓ", "oo", "⠕", "135", "vowel"], ["ಔ", "au", "⠪", "246", "vowel"],
  ["ಋ", "r vocalic", "⠐⠗", "5, 1235", "vowel"],

  ["ಕ", "ka", "⠅", "13", "consonant"], ["ಖ", "kha", "⠨", "46", "consonant"],
  ["ಗ", "ga", "⠛", "1245", "consonant"], ["ಘ", "gha", "⠣", "126", "consonant"],
  ["ಙ", "nga", "⠬", "346", "consonant"], ["ಚ", "cha", "⠉", "14", "consonant"],
  ["ಛ", "chha", "⠡", "16", "consonant"], ["ಜ", "ja", "⠚", "245", "consonant"],
  ["ಝ", "jha", "⠴", "356", "consonant"], ["ಞ", "nya", "⠒", "25", "consonant"],
  ["ಟ", "tta", "⠾", "23456", "consonant"], ["ಠ", "ttha", "⠺", "2456", "consonant"],
  ["ಡ", "dda", "⠫", "1246", "consonant"], ["ಢ", "ddha", "⠿", "123456", "consonant"],
  ["ಣ", "nna", "⠼", "3456", "consonant"], ["ತ", "ta", "⠞", "2345", "consonant"],
  ["ಥ", "tha", "⠹", "1456", "consonant"], ["ದ", "da", "⠙", "145", "consonant"],
  ["ಧ", "dha", "⠮", "2346", "consonant"], ["ನ", "na", "⠝", "1345", "consonant"],
  ["ಪ", "pa", "⠏", "1234", "consonant"], ["ಫ", "pha", "⠖", "235", "consonant"],
  ["ಬ", "ba", "⠃", "12", "consonant"], ["ಭ", "bha", "⠘", "45", "consonant"],
  ["ಮ", "ma", "⠍", "134", "consonant"], ["ಯ", "ya", "⠽", "13456", "consonant"],
  ["ರ", "ra", "⠗", "1235", "consonant"], ["ಲ", "la", "⠇", "123", "consonant"],
  ["ಳ", "lla", "⠸", "456", "consonant"], ["ವ", "va", "⠧", "1236", "consonant"],
  ["ಶ", "sha", "⠩", "146", "consonant"], ["ಷ", "ssa", "⠯", "12346", "consonant"],
  ["ಸ", "sa", "⠎", "234", "consonant"], ["ಹ", "ha", "⠓", "125", "consonant"],
  ["ಕ್ಷ", "ksha", "⠟", "12345", "consonant"],

  ["್", "halant", "⠈", "4", "mark"], ["ಂ", "anusvara", "⠂", "2", "mark"],
  ["ಃ", "visarga", "⠃", "12", "mark"], ["೯", "number sign + 9", "⠼⠊", "3456, 24", "mark"]
];

const vowelSigns = {
  "ಾ": "ಆ", "ಿ": "ಇ", "ೀ": "ಈ", "ು": "ಉ", "ೂ": "ಊ", "ೆ": "ಎ", "ೇ": "ಏ",
  "ೈ": "ಐ", "ೊ": "ಒ", "ೋ": "ಓ", "ೌ": "ಔ", "ೃ": "ಋ"
};

const directMap = Object.fromEntries(chart.map(([print, , braille]) => [print, braille]));
const consonants = new Set(chart.filter((item) => item[4] === "consonant").map(([print]) => print));
const digits = {
  "0": "⠼⠚", "1": "⠼⠁", "2": "⠼⠃", "3": "⠼⠉", "4": "⠼⠙",
  "5": "⠼⠑", "6": "⠼⠋", "7": "⠼⠛", "8": "⠼⠓", "9": "⠼⠊",
  "೦": "⠼⠚", "೧": "⠼⠁", "೨": "⠼⠃", "೩": "⠼⠉", "೪": "⠼⠙",
  "೫": "⠼⠑", "೬": "⠼⠋", "೭": "⠼⠛", "೮": "⠼⠓", "೯": "⠼⠊"
};
const punctuation = { ",": "⠂", ";": "⠆", ":": "⠒", ".": "⠲", "?": "⠦", "!": "⠖", "-": "⠤" };

const lessonGrid = document.querySelector("#lessonGrid");
const workshopDetails = document.querySelector("#workshopDetails");
const summaryModal = document.querySelector("#summaryModal");
const summaryTitle = document.querySelector("#summaryTitle");
const summaryBody = document.querySelector("#summaryBody");
const closeSummary = document.querySelector("#closeSummary");
const chartGrid = document.querySelector("#chartGrid");
const chartButtons = document.querySelectorAll("[data-chart-filter]");
const kannadaInput = document.querySelector("#kannadaInput");
const brailleOutput = document.querySelector("#brailleOutput");

const quizState = new Map();
const cellState = new Map();
let textMode = localStorage.getItem("text-mode-kannada") || "en";
const kannadaUi = {
  local: "ಕನ್ನಡ", workshops: "ಕಾರ್ಯಾಗಾರಗಳು", chart: "ಪಟ್ಟಿ", sandbox: "ಅಭ್ಯಾಸ ಪೆಟ್ಟಿಗೆ",
  goals: "ಕಲಿಕೆಯ ಗುರಿಗಳು", oneAtATime: "ಒಂದೊಂದೇ ಸೆಲ್ ಕಲಿಯಿರಿ", summary: "ಕಾರ್ಯಾಗಾರ ಸಾರಾಂಶ",
  practice: "ಈ ಕಾರ್ಯಾಗಾರವನ್ನು ಅಭ್ಯಾಸ ಮಾಡಿ", choose: "ಉತ್ತರವನ್ನು ಆಯ್ಕೆಮಾಡಿ.", prev: "ಹಿಂದಿನದು", next: "ಮುಂದಿನದು",
  question: "ಪ್ರಶ್ನೆ", correct: "ಸರಿ", notQuite: "ಇನ್ನೂ ಸರಿಯಾಗಿಲ್ಲ", practiceSets: "ಅಭ್ಯಾಸ ಸಮೂಹಗಳು",
  cellNote: "ಮುದ್ರಿತ ಅಕ್ಷರವನ್ನು ಓದಿ, ನಂತರ ಬ್ರೈಲ್ ಸೆಲ್ ಹೆಸರಿಸಿ.", quizCopy: "ಈ ಕಾರ್ಯಾಗಾರದ ಅಭ್ಯಾಸ ಪ್ರಶ್ನೆಗಳನ್ನು ಹಿಂದಿನದು ಮತ್ತು ಮುಂದಿನದು ಬಳಸಿ ನೋಡಿ.",
  back: "ಮೇಲಕ್ಕೆ", allFilter: "ಎಲ್ಲ", vowels: "ಸ್ವರಗಳು", consonants: "ವ್ಯಂಜನಗಳು", marks: "ಗುರುತುಗಳು",
  hero: "ಕನ್ನಡ ಬ್ರೈಲ್ ನೋಡಿ ಕಲಿಯಿರಿ", heroCopy: "ಕನ್ನಡ ಭಾರತೀ ಬ್ರೈಲ್ ಸೆಲ್‌ಗಳನ್ನು ಗುರುತಿಸಲು ದೃಷ್ಟಿಯುಳ್ಳ ಕಲಿಯುವವರಿಗೆ ಕಾರ್ಯಾಗಾರ ಶೈಲಿಯ ಪುಟ.",
  path: "ಸೂಚಿಸಿದ ಮಾರ್ಗ", pathCopy: "ಸ್ವರಗಳು, ಸಾಮಾನ್ಯ ವ್ಯಂಜನಗಳು, ಸ್ವರ ಗುರುತುಗಳು, ಹಲಂತ ಗುಂಪುಗಳು, ಸಂಖ್ಯೆಗಳು ಮತ್ತು ಚಿಕ್ಕ ಓದು ಅಭ್ಯಾಸಗಳ ಮೂಲಕ ಕಲಿಯಿರಿ.",
  chartTitle: "ಕನ್ನಡ ಅಕ್ಷರಗಳು ಮತ್ತು ಬ್ರೈಲ್ ಸೆಲ್‌ಗಳು", chartCopy: "ಭಾರತೀ ಬ್ರೈಲ್‌ನಲ್ಲಿ ಸ್ವರ ಗುರುತುಗಳನ್ನು ವ್ಯಂಜನದ ನಂತರ ಪೂರ್ಣ ಸ್ವರ ಸೆಲ್‌ಗಳಾಗಿ ಓದುತ್ತೇವೆ.",
  sandboxLabel: "ಕನ್ನಡ ಮುದ್ರಣ", sandboxCopy: "ಕನ್ನಡ ಪಠ್ಯವನ್ನು ಟೈಪ್ ಮಾಡಿ ಕಲಿಕೆಯ ಬ್ರೈಲ್ ರೂಪವನ್ನು ನೋಡಿ."
};

function ui(key, fallback) {
  return textMode === "kn" ? kannadaUi[key] || fallback : fallback;
}

function makeLanguageToggle() {
  const nav = document.querySelector("nav");
  if (!nav) return;
  const toggle = document.createElement("div");
  toggle.className = "language-toggle";
  toggle.setAttribute("aria-label", "Text language");
  toggle.innerHTML = `
    <button type="button" data-text-mode="en">English</button>
    <button type="button" data-text-mode="kn">ಕನ್ನಡ</button>
  `;
  nav.appendChild(toggle);
  toggle.addEventListener("click", (event) => {
    const button = event.target.closest("[data-text-mode]");
    if (!button) return;
    textMode = button.dataset.textMode;
    localStorage.setItem("text-mode-kannada", textMode);
    renderAll();
  });
  updateLanguageToggle();
}

function updateLanguageToggle() {
  document.querySelectorAll("[data-text-mode]").forEach((button) => {
    button.classList.toggle("active", button.dataset.textMode === textMode);
  });
}

function setupPageText() {
  document.querySelectorAll("nav a").forEach((link) => {
    if (link.getAttribute("href") === "#workshops") link.textContent = ui("workshops", "Workshops");
    if (link.getAttribute("href") === "#chart") link.textContent = ui("chart", "Chart");
    if (link.getAttribute("href") === "#sandbox") link.textContent = ui("sandbox", "Sandbox");
  });
  document.querySelector("#hero-title").textContent = ui("hero", "Learn Kannada Braille by seeing");
  document.querySelector(".hero-copy p:last-child").textContent = ui("heroCopy", "A workshop-style website for sighted learners who want to recognize Kannada braille cells, understand the writing order, and build confidence one group at a time.");
  document.querySelector("#path-title").textContent = ui("path", "Suggested path");
  document.querySelector(".intro p").textContent = ui("pathCopy", "Start with vowels and common consonants, then move to consonant rows, vowel signs, halant clusters, numbers, punctuation, and short reading drills.");
  document.querySelector("#chart-title").textContent = ui("chartTitle", "Kannada letters and braille cells");
  document.querySelector("#chart .section-heading p:not(.eyebrow)").textContent = ui("chartCopy", "Bharati Braille writes vowels as full braille letters after the consonant sound. For example, a printed vowel sign is learned as a spoken-order braille cell.");
  document.querySelector("label[for='kannadaInput']").textContent = ui("sandboxLabel", "Kannada print");
  document.querySelector("#sandbox .section-heading p:not(.eyebrow)").textContent = ui("sandboxCopy", "Type Kannada text to see a learning-oriented braille rendering. Unknown characters are kept as-is so teachers can spot gaps in the starter table.");
  document.querySelector("[data-chart-filter='all']").textContent = ui("allFilter", "All");
  document.querySelector("[data-chart-filter='vowel']").textContent = ui("vowels", "Vowels");
  document.querySelector("[data-chart-filter='consonant']").textContent = ui("consonants", "Consonants");
  document.querySelector("[data-chart-filter='mark']").textContent = ui("marks", "Marks");
  document.querySelector(".site-footer a").textContent = ui("back", "Back to top");
  updateLanguageToggle();
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[char]));
}

function isBrailleChar(char) {
  const code = char.codePointAt(0);
  return code >= 0x2800 && code <= 0x283f;
}

function brailleDotNumbers(char) {
  const mask = char.codePointAt(0) - 0x2800;
  return [1, 2, 3, 4, 5, 6].filter((dot) => mask & (1 << (dot - 1)));
}

function renderBrailleCell(char) {
  const activeDots = brailleDotNumbers(char);
  const label = activeDots.length ? `dots ${activeDots.join("-")}` : "blank braille cell";
  return `
    <span class="visual-braille-cell" role="img" aria-label="${label}">
      ${[1, 2, 3, 4, 5, 6].map((dot) => `
        <span class="visual-braille-dot${activeDots.includes(dot) ? " active" : ""}" data-dot="${dot}"></span>
      `).join("")}
    </span>
  `;
}

function renderBrailleCells(value) {
  return [...String(value)].map((char) => {
    if (isBrailleChar(char)) return renderBrailleCell(char);
    if (char === " ") return `<span class="visual-braille-space" aria-hidden="true"></span>`;
    if (char === "\n") return "<br>";
    return `<span class="visual-braille-text">${escapeHtml(char)}</span>`;
  }).join("");
}

function renderStaticBraille() {
  document.querySelectorAll("[data-braille-render]").forEach((element) => {
    element.innerHTML = renderBrailleCells(element.dataset.brailleRender);
  });
}

function renderLessons() {
  lessonGrid.innerHTML = lessons.map((lesson) => `
    <article class="workshop-card" id="card-${lesson.slug}">
      <span class="workshop-icon" aria-hidden="true">${lesson.icon}</span>
      <div>
        <h3>${lesson.title}</h3>
        <p>${lesson.summary}</p>
      </div>
      <div class="workshop-meta">
        <a href="#${lesson.slug}">Practice</a>
        <span>${lesson.practiceSets.length} sets</span>
      </div>
    </article>
  `).join("");
}

function renderWorkshopDetails() {
  workshopDetails.innerHTML = lessons.map((lesson, index) => `
    <article class="workshop-detail" id="${lesson.slug}">
      <div class="workshop-detail-header">
        <div>
          <p class="eyebrow">Workshop ${index + 1}</p>
          <h3>${lesson.title}</h3>
          <p>${lesson.introduction}</p>
        </div>
        <div class="workshop-badge" aria-hidden="true">
          <span>${lesson.icon}</span>
          <strong>${lesson.time}</strong>
        </div>
      </div>

      <div class="lesson-two-column">
        <section aria-label="${lesson.title} objectives">
          <h4>${ui("goals", "Learning goals")}</h4>
          <ul class="objective-list">
            ${lesson.objectives.map((objective) => `<li>${objective}</li>`).join("")}
          </ul>
        </section>
        <section class="cell-stepper" data-cell-stepper="${lesson.slug}" aria-label="${lesson.title} cell lesson" aria-live="polite">
          <div class="cell-stepper-heading">
            <h4>${ui("oneAtATime", "Learn one cell at a time")}</h4>
            <span class="cell-step-count"></span>
          </div>
          <div class="cell-step-card">
            <span class="cell-step-print"></span>
            <span class="cell-step-braille"></span>
            <span class="cell-step-note"></span>
          </div>
          <div class="step-controls">
            <button class="button secondary dark-text" type="button" data-prev-cell="${lesson.slug}">${ui("prev", "Previous")}</button>
            <button class="button primary" type="button" data-next-cell="${lesson.slug}">${ui("next", "Next")}</button>
          </div>
        </section>
      </div>

      <button class="button summary-button" type="button" data-summary="${lesson.slug}">${ui("summary", "Workshop summary")}</button>

      <section class="section-quiz" data-workshop-quiz="${lesson.slug}" aria-label="${lesson.title} quiz" aria-live="polite">
        <div class="section-quiz-copy">
          <h4>${ui("practice", "Practice this workshop")}</h4>
          <p>${ui("quizCopy", "Use Previous and Next to move through this workshop's practice pool.")}</p>
        </div>
        <div class="section-quiz-panel">
          <div class="section-quiz-prompt">
            <span class="section-quiz-braille"></span>
            <span class="section-quiz-help"></span>
          </div>
          <div class="section-quiz-choices"></div>
          <div class="section-quiz-footer">
            <p class="section-quiz-feedback">${ui("choose", "Choose an answer to begin.")}</p>
            <div class="step-controls">
              <button class="button secondary dark-text" type="button" data-prev-workshop="${lesson.slug}">${ui("prev", "Previous")}</button>
              <button class="button primary" type="button" data-next-workshop="${lesson.slug}">${ui("next", "Next")}</button>
            </div>
          </div>
        </div>
      </section>
    </article>
  `).join("");
}

function renderChart(filter = "all") {
  chartGrid.innerHTML = chart
    .filter((item) => filter === "all" || item[4] === filter)
    .map(([print, label, braille, dots, group]) => `
      <article class="chart-card" data-group="${group}">
        <span class="chart-braille" aria-label="Braille ${dots}">${renderBrailleCells(braille)}</span>
        <div>
          <h3>${print}</h3>
          <p>${label}</p>
          <p>dots ${dots}</p>
        </div>
      </article>
    `).join("");
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function renderCellStep(slug) {
  const lesson = lessons.find((item) => item.slug === slug);
  const stepper = workshopDetails.querySelector(`[data-cell-stepper="${slug}"]`);
  const index = cellState.get(slug) || 0;
  if (!lesson || !stepper) return;

  const item = lesson.focus[index];
  stepper.querySelector(".cell-step-count").textContent = `${index + 1} of ${lesson.focus.length}`;
  stepper.querySelector(".cell-step-print").textContent = item;
  stepper.querySelector(".cell-step-braille").innerHTML = renderBrailleCells(translateKannada(item));
  stepper.querySelector(".cell-step-note").textContent = ui("cellNote", "Read the Kannada print, then name the braille cell.");
  stepper.querySelector("[data-prev-cell]").disabled = index === 0;
  stepper.querySelector("[data-next-cell]").disabled = index === lesson.focus.length - 1;
}

function moveCellStep(slug, direction) {
  const lesson = lessons.find((item) => item.slug === slug);
  if (!lesson) return;

  const currentIndex = cellState.get(slug) || 0;
  const nextIndex = Math.min(Math.max(currentIndex + direction, 0), lesson.focus.length - 1);
  cellState.set(slug, nextIndex);
  renderCellStep(slug);
}

function setupCellSteppers() {
  lessons.forEach((lesson) => {
    cellState.set(lesson.slug, 0);
    renderCellStep(lesson.slug);
  });
}

function getWorkshopPool(lesson) {
  const items = [
    ...lesson.focus,
    ...lesson.practiceSets.flatMap((set) => set.items)
  ];
  const uniqueItems = [...new Set(items)]
    .filter((item) => !item.includes("/") && item.trim().length > 0)
    .map((item) => ({
      print: item,
      braille: translateKannada(item)
    }))
    .filter((item) => item.braille !== item.print);

  return uniqueItems.length >= 4 ? uniqueItems : chart
    .filter((item) => item[4] !== "mark")
    .map(([print, , braille]) => ({ print, braille }));
}

function buildOptions(pool, answer, index) {
  const distractors = pool.filter((item) => item.print !== answer.print);
  const rotated = [...distractors.slice(index), ...distractors.slice(0, index)];
  return shuffle([answer, ...rotated.slice(0, 3)]);
}

function renderWorkshopQuestion(slug) {
  const lesson = lessons.find((item) => item.slug === slug);
  const quiz = workshopDetails.querySelector(`[data-workshop-quiz="${slug}"]`);
  if (!lesson || !quiz) return;

  let state = quizState.get(slug);
  if (!state) {
    state = {
      pool: getWorkshopPool(lesson),
      index: 0
    };
    quizState.set(slug, state);
  }

  const answer = state.pool[state.index];
  const options = buildOptions(state.pool, answer, state.index);

  quiz.querySelector(".section-quiz-braille").innerHTML = renderBrailleCells(answer.braille);
  quiz.querySelector(".section-quiz-help").textContent = `${ui("question", "Question")} ${state.index + 1} of ${state.pool.length}`;
  quiz.querySelector(".section-quiz-feedback").textContent = ui("choose", "Choose an answer to begin.");
  quiz.querySelector(".section-quiz-choices").innerHTML = options.map((item) => `
    <button type="button" data-workshop-answer="${slug}" data-answer="${item.print}">${item.print}</button>
  `).join("");
  quiz.querySelector("[data-prev-workshop]").disabled = state.index === 0;
  quiz.querySelector("[data-next-workshop]").disabled = state.index === state.pool.length - 1;
}

function moveWorkshopQuestion(slug, direction) {
  const lesson = lessons.find((item) => item.slug === slug);
  if (!lesson) return;

  let state = quizState.get(slug);
  if (!state) {
    state = {
      pool: getWorkshopPool(lesson),
      index: 0
    };
  }

  state.index = Math.min(Math.max(state.index + direction, 0), state.pool.length - 1);
  quizState.set(slug, state);
  renderWorkshopQuestion(slug);
}

function answerWorkshopQuestion(button) {
  const slug = button.dataset.workshopAnswer;
  const state = quizState.get(slug);
  const quiz = button.closest(".section-quiz");
  if (!state || !quiz) return;

  const answer = state.pool[state.index];
  const isCorrect = button.dataset.answer === answer.print;
  [...quiz.querySelectorAll("[data-workshop-answer]")].forEach((choice) => {
    choice.disabled = true;
    if (choice.dataset.answer === answer.print) choice.classList.add("correct");
  });
  if (!isCorrect) button.classList.add("incorrect");
  quiz.querySelector(".section-quiz-feedback").textContent = isCorrect
    ? `${ui("correct", "Correct")}: ${answer.print}.`
    : `${ui("notQuite", "Not quite")}. ${answer.print}.`;
}

function setupWorkshopQuizzes() {
  lessons.forEach((lesson) => renderWorkshopQuestion(lesson.slug));
}

function renderSummary(lesson) {
  summaryTitle.textContent = lesson.title;
  document.querySelector(".summary-modal-header .eyebrow").textContent = ui("summary", "Workshop summary");
  summaryBody.innerHTML = `
    <section>
      <h3>${ui("goals", "Learning goals")}</h3>
      <ul class="objective-list">
        ${lesson.objectives.map((objective) => `<li>${objective}</li>`).join("")}
      </ul>
    </section>
    <section>
      <h3>${ui("practiceSets", "Practice sets")}</h3>
      <div class="practice-set-grid">
        ${lesson.practiceSets.map((set) => `
          <section class="practice-set" aria-label="${set.title}">
            <h4>${set.title}</h4>
            <p>${set.instruction}</p>
            <div class="drill-list">
              ${set.items.map((item) => `
                <span class="drill-chip">
                  <strong>${item}</strong>
                  <em>${renderBrailleCells(translateKannada(item))}</em>
                </span>
              `).join("")}
            </div>
          </section>
        `).join("")}
      </div>
    </section>
  `;
}

function openSummary(slug) {
  const lesson = lessons.find((item) => item.slug === slug);
  if (!lesson) return;

  renderSummary(lesson);
  summaryModal.hidden = false;
  closeSummary.focus();
}

function closeSummaryModal() {
  summaryModal.hidden = true;
}

function translateKannada(input) {
  let output = "";
  const chars = [...input];

  for (let index = 0; index < chars.length; index += 1) {
    const char = chars[index];
    const next = chars[index + 1];

    if (char === "ಕ" && next === "್" && chars[index + 2] === "ಷ") {
      output += directMap["ಕ್ಷ"];
      index += 2;
      continue;
    }

    if (consonants.has(char) && next === "್") {
      output += `${directMap["್"]}${directMap[char]}`;
      index += 1;
      continue;
    }

    if (consonants.has(char) && vowelSigns[next]) {
      output += `${directMap[char]}${directMap[vowelSigns[next]]}`;
      index += 1;
      continue;
    }

    if (vowelSigns[char]) {
      output += directMap[vowelSigns[char]];
      continue;
    }

    output += directMap[char] || digits[char] || punctuation[char] || char;
  }

  return output;
}

function updateSandbox() {
  brailleOutput.innerHTML = renderBrailleCells(translateKannada(kannadaInput.value));
}

function renderAll() {
  quizState.clear();
  cellState.clear();
  setupPageText();
  renderLessons();
  renderWorkshopDetails();
  renderStaticBraille();
  setupCellSteppers();
  setupWorkshopQuizzes();
  renderChart(document.querySelector("[data-chart-filter].active")?.dataset.chartFilter || "all");
  updateSandbox();
}

chartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    chartButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderChart(button.dataset.chartFilter);
  });
});

workshopDetails.addEventListener("click", (event) => {
  const summaryButton = event.target.closest("[data-summary]");
  if (summaryButton) {
    openSummary(summaryButton.dataset.summary);
    return;
  }

  const prevCellButton = event.target.closest("[data-prev-cell]");
  if (prevCellButton) {
    moveCellStep(prevCellButton.dataset.prevCell, -1);
    return;
  }

  const nextCellButton = event.target.closest("[data-next-cell]");
  if (nextCellButton) {
    moveCellStep(nextCellButton.dataset.nextCell, 1);
    return;
  }

  const answerButton = event.target.closest("[data-workshop-answer]");
  if (answerButton) {
    answerWorkshopQuestion(answerButton);
    return;
  }

  const prevButton = event.target.closest("[data-prev-workshop]");
  if (prevButton) {
    moveWorkshopQuestion(prevButton.dataset.prevWorkshop, -1);
    return;
  }

  const nextButton = event.target.closest("[data-next-workshop]");
  if (nextButton) moveWorkshopQuestion(nextButton.dataset.nextWorkshop, 1);
});
closeSummary.addEventListener("click", closeSummaryModal);
summaryModal.addEventListener("click", (event) => {
  if (event.target === summaryModal) closeSummaryModal();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !summaryModal.hidden) closeSummaryModal();
});
kannadaInput.addEventListener("input", updateSandbox);

makeLanguageToggle();
renderAll();
