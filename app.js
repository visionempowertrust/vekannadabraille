const accessibilityStyles = document.createElement("link");
accessibilityStyles.rel = "stylesheet";
accessibilityStyles.href = "accessibility.css?v=20260618-2";
document.head.appendChild(accessibilityStyles);
const accessibilityScript = document.createElement("script");
accessibilityScript.src = "accessibility.js?v=20260618-2";
document.head.appendChild(accessibilityScript);

const sourceLessons = [
  {
    slug: "vowels-reading-order",
    title: "Vowels and Reading Order",
    summary: "Learn independent Kannada vowels and how Bharati Braille writes vowels after consonants.",
    icon: "⠁",
    time: "25 min",
    level: "Start here",
    introduction: "Kannada print often shows a consonant with a vowel sign attached to it. In Bharati Braille, sight readers should learn to read the consonant cell and then the vowel cell in spoken order. This lesson starts with independent vowels and then uses simple syllables to show that order.",
    objectives: [
      "Recognize the common Kannada vowel cells by sight.",
      "Explain why vowel signs are practiced as full vowel cells.",
      "Read open syllables such as ಕಾ, ಕಿ, ಕೂ, ಗೆ, and ಮೈ in braille order."
    ],
    focus: ["ಅ", "ಆ", "ಇ", "ಈ", "ಉ", "ಊ", "ಎ", "ಏ", "ಐ", "ಒ", "ಓ", "ಔ", "ಋ", "ಕ", "ಗ", "ಮ"],
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
    introduction: "This lesson introduces ಚ, ಛ, ಜ, ಝ, and ಞ. These sounds appear in everyday words, names, and school vocabulary. Practice them as a row, then mix them with vowels so the cells become familiar in real reading.",
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
    introduction: "Retroflex consonants are important in Kannada and can be challenging for new readers because several cells look visually dense. Treat this lesson as slow, careful pattern practice before adding speed.",
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
    introduction: "The dental row appears constantly in Kannada. This lesson gives extra practice with ತ, ಥ, ದ, ಧ, and ನ so learners can read common syllables without stopping.",
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
    introduction: "This lesson completes the most common consonants: ಪ, ಫ, ಬ, ಭ, ಮ, ಯ, ರ, ಲ, ಳ, ವ, ಶ, ಷ, ಸ, and ಹ. Because the set is larger, practice it in smaller families.",
    objectives: [
      "Recognize the remaining common consonants.",
      "Read family groups such as ಪ/ಫ/ಬ/ಭ/ಮ and ಯ/ರ/ಲ/ವ.",
      "Use the full consonant inventory in mixed drills."
    ],
    focus: ["ಪ", "ಫ", "ಬ", "ಭ", "ಮ", "ಯ", "ರ", "ಲ", "ಳ", "ವ", "ಶ", "ಷ", "ಸ", "ಹ", "ಕ್ಷ"],
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
    introduction: "Kannada print uses marks that change how a syllable is read. This lesson introduces halant, anusvara, and visarga as sight-reading signals. The goal is not grammar analysis; it is quick recognition while reading.",
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
    introduction: "The final lesson moves from cells to reading. Learners practice short words, familiar syllable patterns, numbers, punctuation, and sentence-like lines. Keep the pace comfortable and repeat each set for fluency.",
    objectives: [
      "Read short Kannada words using learned cells.",
      "Recognize Kannada and Arabic numerals with the number sign.",
      "Read punctuation and short sentence lines with a steady rhythm."
    ],
    focus: ["ಕನ್ನಡ", "ಕಲಿಕೆ", "ಮನೆ", "ನದಿ", "೧", "೨", "೩", "೯", ".", "?"],
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

function chunkCells(items, min = 3, max = 5) {
  const chunks = [];
  for (let index = 0; index < items.length; index += max) {
    chunks.push(items.slice(index, index + max));
  }
  while (chunks.length > 1 && chunks[chunks.length - 1].length < min) {
    const previous = chunks[chunks.length - 2];
    if (previous.length <= min) break;
    chunks[chunks.length - 1].unshift(previous.pop());
  }
  return chunks;
}

function lessonGroup(lesson) {
  if (lesson.slug === "vowels-reading-order") return "vowels";
  if (lesson.slug === "marks") return "marks";
  if (lesson.slug === "words-sentences") return "words";
  return "consonants";
}

function expandedTitle(lesson, focus, index) {
  if (focus.length === lesson.focus.length) return lesson.title;
  if (lessonGroup(lesson) === "vowels") return `Vowels ${index + 1}: ${focus[0]} to ${focus[focus.length - 1]}`;
  if (lessonGroup(lesson) === "marks") return `Marks ${index + 1}: ${focus[0]} to ${focus[focus.length - 1]}`;
  if (lessonGroup(lesson) === "words") return `Reading Practice ${index + 1}`;
  return `Consonants ${index + 1}: ${focus[0]} to ${focus[focus.length - 1]}`;
}

function expandLessons(rawLessons) {
  return rawLessons.flatMap((lesson) => {
    const chunks = chunkCells(lesson.focus);
    return chunks.map((focus, index) => ({
      ...lesson,
      group: lessonGroup(lesson),
      slug: chunks.length === 1 ? lesson.slug : `${lesson.slug}-${index + 1}`,
      title: expandedTitle(lesson, focus, index),
      focus
    }));
  });
}

const lessons = expandLessons(sourceLessons);

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

  ["್", "halant", "⠈", "4", "mark"], ["ಂ", "anusvara", "⠰", "56", "mark"],
  ["ಃ", "visarga", "⠠", "6", "mark"], ["೯", "number sign + 9", "⠼⠊", "3456, 24", "mark"]
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
const lessonDetails = document.querySelector("#lessonDetails");
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
  local: "ಕನ್ನಡ", lessons: "ಕಾರ್ಯಾಗಾರಗಳು", chart: "ಪಟ್ಟಿ", sandbox: "ಅಭ್ಯಾಸ ಪೆಟ್ಟಿಗೆ",
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

function regionalMode() {
  return textMode === "kn";
}

function displayLessonTitle(lesson) {
  if (!regionalMode()) return lesson.title;
  if (lesson.group === "vowels") return ui("vowels", "Vowels");
  if (lesson.group === "marks") return ui("marks", "Marks");
  if (lesson.group === "words") return ui("practiceSets", "Practice sets");
  const letters = lesson.focus.filter((item) => !["1", "2", "3", ".", "?"].includes(item));
  return `${ui("consonants", "Consonants")}: ${letters[0]} - ${letters[Math.min(letters.length - 1, 4)]}`;
}

function displayLessonSummary(lesson) {
  if (!regionalMode()) return lesson.summary;
  if (lesson.group === "vowels") return ui("pathCopy", lesson.summary);
  if (lesson.group === "marks") return ui("chartCopy", lesson.summary);
  return ui("practice", "Practice this lesson");
}

function displayLessonIntroduction(lesson) {
  if (!regionalMode()) return lesson.introduction;
  return `${displayLessonTitle(lesson)}. ${ui("oneAtATime", "Learn one cell at a time")}. ${ui("practice", "Practice this lesson")}.`;
}

function displayObjectives(lesson) {
  if (!regionalMode()) return lesson.objectives;
  return [ui("oneAtATime", "Learn one cell at a time"), ui("practice", "Practice this lesson"), ui("chartCopy", "Bharati Braille writes vowels as full braille letters after the consonant sound.")];
}

function displayPracticeTitle(set, index) {
  return regionalMode() ? `${ui("practiceSets", "Practice sets")} ${index + 1}` : set.title;
}

function displayPracticeInstruction(set) {
  return regionalMode() ? ui("practice", "Practice this lesson") : set.instruction;
}

function displayMeta(lesson) {
  return regionalMode() ? `${lesson.practiceSets.length} ${ui("practiceSets", "Practice sets")}` : `${lesson.practiceSets.length} sets`;
}

function displayTime(lesson) {
  return regionalMode() ? lesson.time.match(/\d+/)?.[0] || lesson.time : lesson.time;
}

function displayChartLabel(label, group) {
  if (!regionalMode()) return label;
  if (group === "vowel") return ui("vowels", "Vowels");
  if (group === "consonant") return ui("consonants", "Consonants");
  return ui("marks", "Marks");
}

function displayDotLabel(dots) {
  return regionalMode() ? `• ${dots}` : `dots ${dots}`;
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
    if (button.dataset.textMode === "en") button.textContent = textMode === "kn" ? "A" : "English";
    if (button.dataset.textMode === "kn") button.textContent = "ಕನ್ನಡ";
    button.classList.toggle("active", button.dataset.textMode === textMode);
    button.setAttribute("aria-pressed", String(button.dataset.textMode === textMode));
  });
}

function setupPageText() {
  document.querySelectorAll("nav a").forEach((link) => {
    if (link.getAttribute("href") === "#lessons") link.textContent = ui("lessons", "Lessons");
    if (link.getAttribute("href") === "#chart") link.textContent = ui("chart", "Chart");
    if (link.getAttribute("href") === "#sandbox") link.textContent = ui("sandbox", "Sandbox");
  });
  const brandText = document.querySelector(".brand > span:not(.brand-mark)");
  if (brandText) brandText.textContent = regionalMode() ? "ಕನ್ನಡ" : "Kannada Braille by Sight";
  document.querySelector(".hero .eyebrow").textContent = regionalMode() ? "ಭಾರತೀ ಬ್ರೈಲ್ ಆರಂಭಿಕ ಪಾಠ" : "Bharati Braille starter course";
  document.querySelector("#hero-title").textContent = ui("hero", "Learn Kannada Braille by sight or touch");
  document.querySelector(".hero-copy p:last-child").textContent = ui("heroCopy", "Lessons for recognizing Kannada Bharati Braille visually or on a refreshable Braille display.");
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
  document.querySelector("#series .eyebrow").textContent = regionalMode() ? "ಕಾರ್ಯಾಗಾರ ಸರಣಿ" : "Lesson series";
  document.querySelector("#series h2").textContent = regionalMode() ? "ಸಣ್ಣ ಗುಂಪುಗಳಲ್ಲಿ ಗುರುತಿಸುವಿಕೆಯನ್ನು ಬೆಳೆಸಿರಿ" : "Build recognition in small lessons";
  document.querySelector("#lessons .eyebrow").textContent = regionalMode() ? "ಪೂರ್ಣ ಕಾರ್ಯಾಗಾರಗಳು" : "Full lessons";
  document.querySelector("#lessons-title").textContent = ui("lessons", "Lessons");
  document.querySelector("#lessons .section-heading p:not(.eyebrow)").textContent = regionalMode() ? "ಪ್ರತಿ ಕಾರ್ಯಾಗಾರದಲ್ಲಿ ಒಂದು ಸೆಲ್ ಕಲಿದು, ನಂತರ ಅದೇ ವಿಭಾಗವನ್ನು ಅಭ್ಯಾಸ ಮಾಡಿ." : "Each lesson is organized for sighted reading: first notice the cell shape, then name the Kannada print, then read short sequences with increasing confidence.";
  document.querySelector("#chart .eyebrow").textContent = regionalMode() ? "ಪಟ್ಟಿ" : "Reference chart";
  document.querySelector("#sandbox .eyebrow").textContent = regionalMode() ? "ಅಭ್ಯಾಸ ಪೆಟ್ಟಿಗೆ" : "Sandbox";
  document.querySelector("#sandbox .section-heading h2").textContent = ui("sandbox", "Explore print-to-braille order");
  const statItems = document.querySelectorAll(".stats span");
  if (regionalMode() && statItems.length >= 3) {
    statItems[0].innerHTML = `<strong>${lessons.length}</strong> ${ui("lessons", "Lessons")}`;
    statItems[1].innerHTML = `<strong>6</strong>`;
    statItems[2].innerHTML = `<strong>1</strong>`;
  } else if (statItems.length >= 3) {
    statItems[0].innerHTML = `<strong>${lessons.length}</strong> lessons`;
    statItems[1].innerHTML = `<strong>6-dot</strong> cells`;
    statItems[2].innerHTML = `<strong>Grade 1</strong> Kannada`;
  }
  document.querySelector("#notes-title").textContent = regionalMode() ? "ಶಿಕ್ಷಕರ ಟಿಪ್ಪಣಿಗಳು" : "Teacher notes";
  const noteArticles = document.querySelectorAll(".note-grid article");
  if (noteArticles.length >= 3) {
    noteArticles[0].querySelector("h3").textContent = regionalMode() ? "ಈ ಮಾದರಿ" : "What this prototype does";
    noteArticles[0].querySelector("p").textContent = regionalMode() ? "ಕಾರ್ಯಾಗಾರಗಳು, ಪಟ್ಟಿ, ಅಭ್ಯಾಸ ಮತ್ತು ಪ್ರಯೋಗ ಪೆಟ್ಟಿಗೆಯನ್ನು ಒದಗಿಸುತ್ತದೆ." : "Presents a complete public-facing course shell, usable chart, random recognition practice, and a simple Kannada braille exploration tool.";
    noteArticles[1].querySelector("h3").textContent = regionalMode() ? "ಪರಿಶೀಲನೆ ಬೇಕು" : "What to verify";
    noteArticles[1].querySelector("p").textContent = regionalMode() ? "ಉತ್ಪಾದನಾ ಬಳಕೆಗೆ ಮೊದಲು ಅರ್ಹ ಬ್ರೈಲ್ ಶಿಕ್ಷಕರಿಂದ ಪರಿಶೀಲಿಸಬೇಕು." : "The starter data follows publicly described Kannada/Bharati Braille conventions and should be reviewed by a qualified Kannada Braille educator before production use.";
    noteArticles[2].querySelector("h3").textContent = regionalMode() ? "ಆಧಾರ" : "Source basis";
    noteArticles[2].querySelector("p").textContent = regionalMode() ? "ದೃಷ್ಟಿ-ಓದು ಕಾರ್ಯಾಗಾರ ರಚನೆ ಮತ್ತು ಸಾರ್ವಜನಿಕ ಬ್ರೈಲ್ ಉಲ್ಲೇಖಗಳ ಆಧಾರ." : "Structure inspired by Hadley's sight-reading lesson page. Braille conventions are based on public Kannada and Bharati Braille references.";
  }
  document.querySelector(".site-footer span").textContent = regionalMode() ? "ಕನ್ನಡ" : "Kannada Braille by Sight prototype";
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
  const dots = activeDots.length ? activeDots.join(", ") : "none";
  return `
    <span class="braille-accessible-cell">
      <span class="visual-braille-cell" aria-hidden="true">
        ${[1, 2, 3, 4, 5, 6].map((dot) => `
          <span class="visual-braille-dot${activeDots.includes(dot) ? " active" : ""}" data-dot="${dot}"></span>
        `).join("")}
      </span>
      <span class="sr-only" translate="no">Braille ${escapeHtml(char)}, dots ${dots}.</span>
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
    <article class="lesson-card" id="card-${lesson.slug}">
      <span class="lesson-icon" aria-hidden="true">${lesson.icon}</span>
      <div>
        <h3>${displayLessonTitle(lesson)}</h3>
        <p>${displayLessonSummary(lesson)}</p>
      </div>
      <div class="lesson-meta">
        <a href="#${lesson.slug}">${ui("practice", "Practice")}</a>
        <span>${displayMeta(lesson)}</span>
      </div>
    </article>
  `).join("");
}

function renderLessonDetails() {
  lessonDetails.innerHTML = lessons.map((lesson, index) => `
    <article class="lesson-detail" id="${lesson.slug}">
      <div class="lesson-detail-header">
        <div>
          <p class="eyebrow">${ui("lessons", "Lesson")} ${index + 1}</p>
          <h3>${displayLessonTitle(lesson)}</h3>
          <p>${displayLessonIntroduction(lesson)}</p>
        </div>
        <div class="lesson-badge" aria-hidden="true">
          <span>${lesson.icon}</span>
          <strong>${displayTime(lesson)}</strong>
        </div>
      </div>

      <div class="lesson-two-column">
        <section aria-label="${lesson.title} objectives">
          <h4>${ui("goals", "Learning goals")}</h4>
          <ul class="objective-list">
            ${displayObjectives(lesson).map((objective) => `<li>${objective}</li>`).join("")}
          </ul>
        </section>
        <section class="cell-stepper" data-cell-stepper="${lesson.slug}" aria-label="${lesson.title} cell lesson">
          <div class="cell-stepper-heading">
            <h4>${ui("oneAtATime", "Learn one cell at a time")}</h4>
            <span class="cell-step-count"></span>
          </div>
          <div class="cell-step-card" role="status" aria-live="polite" aria-atomic="true">
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

      <button class="button summary-button" type="button" data-summary="${lesson.slug}">${ui("summary", "Lesson summary")}</button>

      <section class="section-quiz single-practice" data-lesson-quiz="${lesson.slug}" aria-label="${lesson.title} practice">
        <div class="section-quiz-copy">
          <h4>${ui("practice", "Practice this lesson")}</h4>
          <p>${ui("quizCopy", "Questions appear one at a time as reading, writing, or proof reading.")}</p>
        </div>
        <div class="section-quiz-panel">
          <p class="practice-type-label"></p>
          <div class="single-practice-body" role="group" aria-live="polite" aria-atomic="true"></div>
          <div class="section-quiz-footer">
            <p class="section-quiz-position"></p>
            <div class="step-controls">
              <button class="button secondary dark-text" type="button" data-prev-lesson="${lesson.slug}">${ui("prev", "Previous")}</button>
              <button class="button primary" type="button" data-next-lesson="${lesson.slug}">${ui("next", "Next")}</button>
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
        <span class="chart-braille" aria-label="${displayDotLabel(dots)}">${renderBrailleCells(braille)}</span>
        <div>
          <h3>${print}</h3>
          <p>${displayChartLabel(label, group)}</p>
          <p>${displayDotLabel(dots)}</p>
        </div>
      </article>
    `).join("");
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function renderCellStep(slug) {
  const lesson = lessons.find((item) => item.slug === slug);
  const stepper = lessonDetails.querySelector(`[data-cell-stepper="${slug}"]`);
  const index = cellState.get(slug) || 0;
  if (!lesson || !stepper) return;

  const item = lesson.focus[index];
  stepper.querySelector(".cell-step-count").textContent = regionalMode() ? `${index + 1} / ${lesson.focus.length}` : `${index + 1} of ${lesson.focus.length}`;
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

function getLessonPool(lesson) {
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

function getBrailleCells(value) {
  return [...String(value)].filter(isBrailleChar);
}

function emptyWriting(cells) {
  return cells.map(() => []);
}

function renderWritingCells(slug, cells, selections) {
  return cells.map((cell, cellIndex) => `
    <div class="writing-cell" role="group" aria-label="Braille cell ${cellIndex + 1} dot selector">
      ${[1, 2, 3, 4, 5, 6].map((dot) => {
        const active = selections[cellIndex]?.includes(dot);
        return `<button type="button" class="writing-dot${active ? " active" : ""}" data-writing-dot="${slug}" data-cell-index="${cellIndex}" data-dot="${dot}" aria-label="Cell ${cellIndex + 1}, dot ${dot}" aria-pressed="${active ? "true" : "false"}">${dot}</button>`;
      }).join("")}
    </div>
  `).join("");
}

function makeProofItem(answer, index) {
  const chars = [...answer.braille];
  const brailleIndexes = chars.map((char, sourceIndex) => isBrailleChar(char) ? sourceIndex : -1).filter((sourceIndex) => sourceIndex >= 0);
  if (!brailleIndexes.length) return { html: renderBrailleCells(answer.braille), errorCell: -1 };
  const errorCell = index % brailleIndexes.length;
  const sourceIndex = brailleIndexes[errorCell];
  const mask = chars[sourceIndex].codePointAt(0) - 0x2800;
  const dot = (index % 6) + 1;
  chars[sourceIndex] = String.fromCodePoint(0x2800 + (mask ^ (1 << (dot - 1))));
  let cellIndex = 0;
  const html = chars.map((char) => {
    if (!isBrailleChar(char)) return char === " " ? `<span class="visual-braille-space" aria-hidden="true"></span>` : escapeHtml(char);
    const current = cellIndex;
    cellIndex += 1;
    const dots = brailleDotNumbers(char).join(", ") || "none";
    return `<button type="button" class="proof-cell" data-proof-cell="${answer.slug}" data-proof-index="${current}" aria-label="Braille cell ${current + 1}: ${escapeHtml(char)}, dots ${dots}">${renderBrailleCell(char)}</button>`;
  }).join("");
  return { html, errorCell };
}

function renderProofDotChoices(slug) {
  return `<div class="proof-dot-choices">${[1, 2, 3, 4, 5, 6].map((dot) => `<label><input type="checkbox" data-proof-dot="${slug}" value="${dot}"> ${dot}</label>`).join("")}</div><button class="button secondary dark-text" type="button" data-check-proof-dots="${slug}">Check dots</button>`;
}

function renderSinglePracticeQuestion(lesson, quiz, state, answer, options) {
  const type = ["reading", "writing", "proof"][state.index % 3];
  const body = quiz.querySelector(".single-practice-body");
  quiz.querySelector(".practice-type-label").textContent = type === "reading" ? "Reading" : type === "writing" ? "Writing" : "Proof reading";
  quiz.querySelector(".section-quiz-position").textContent = `${state.index + 1} of ${state.pool.length}`;

  if (type === "reading") {
    body.innerHTML = `<div class="section-quiz-prompt"><span class="section-quiz-braille">${renderBrailleCells(answer.braille)}</span><span class="section-quiz-help">${regionalMode() ? `${ui("question", "Question")} ${state.index + 1} / ${state.pool.length}` : `${ui("question", "Question")} ${state.index + 1} of ${state.pool.length}`}</span></div><div class="section-quiz-choices" role="group" aria-label="Answer choices">${options.map((item) => `<button type="button" data-lesson-answer="${lesson.slug}" data-answer="${item.print}">${item.print}</button>`).join("")}</div><p class="section-quiz-feedback" role="status" aria-live="polite" aria-atomic="true">${ui("choose", "Choose an answer to begin.")}</p>`;
    return;
  }

  if (type === "writing") {
    const cells = getBrailleCells(answer.braille);
    body.innerHTML = `<p class="practice-prompt writing-prompt">Write: ${answer.print}</p><div class="writing-cells">${renderWritingCells(lesson.slug, cells, state.writing)}</div><button class="button secondary dark-text" type="button" data-check-writing="${lesson.slug}">Check writing</button><p class="writing-feedback" role="status" aria-live="polite" aria-atomic="true">Select dots, then check writing.</p>`;
    return;
  }

  const proof = makeProofItem(answer, state.index);
  state.proofError = proof.errorCell;
  const cells = getBrailleCells(answer.braille);
  state.proofErrorDots = cells[proof.errorCell] ? [((state.index % 6) + 1)] : [];
  const isSingleCell = cells.length === 1;
  body.innerHTML = `<p class="practice-prompt proof-prompt">Proof read: ${answer.print}</p><div class="proof-cells">${proof.html}</div>${isSingleCell ? `<p class="practice-prompt">Which dot has the error?</p>${renderProofDotChoices(lesson.slug)}<p class="proof-feedback">Select the wrong dot number.</p>` : `<p class="proof-feedback">Choose the cell that contains the error.</p>`}`;
}

function renderLessonQuestion(slug) {
  const lesson = lessons.find((item) => item.slug === slug);
  const quiz = lessonDetails.querySelector(`[data-lesson-quiz="${slug}"]`);
  if (!lesson || !quiz) return;

  let state = quizState.get(slug);
  if (!state) {
    state = {
      pool: getLessonPool(lesson),
      index: 0
    };
    quizState.set(slug, state);
  }

  const answer = state.pool[state.index];
  answer.slug = slug;
  const cells = getBrailleCells(answer.braille);
  if (!state.writing || state.writingKey !== state.index) {
    state.writing = emptyWriting(cells);
    state.writingKey = state.index;
  }
  const options = buildOptions(state.pool, answer, state.index);

  renderSinglePracticeQuestion(lesson, quiz, state, answer, options);
  quiz.querySelector("[data-prev-lesson]").disabled = state.index === 0;
  quiz.querySelector("[data-next-lesson]").disabled = state.index === state.pool.length - 1;
}

function moveLessonQuestion(slug, direction) {
  const lesson = lessons.find((item) => item.slug === slug);
  if (!lesson) return;

  let state = quizState.get(slug);
  if (!state) {
    state = {
      pool: getLessonPool(lesson),
      index: 0
    };
  }

  state.index = Math.min(Math.max(state.index + direction, 0), state.pool.length - 1);
  state.writing = null;
  state.answered = false;
  quizState.set(slug, state);
  renderLessonQuestion(slug);
}

function answerLessonQuestion(button) {
  const slug = button.dataset.lessonAnswer;
  const state = quizState.get(slug);
  const quiz = button.closest(".section-quiz");
  if (!state || !quiz) return;

  const answer = state.pool[state.index];
  if (state.answered) return;
  state.answered = true;
  const isCorrect = button.dataset.answer === answer.print;
  [...quiz.querySelectorAll("[data-lesson-answer]")].forEach((choice) => {
    choice.setAttribute("aria-disabled", "true");
    if (choice.dataset.answer === answer.print) choice.classList.add("correct");
  });
  if (!isCorrect) button.classList.add("incorrect");
  quiz.querySelector(".section-quiz-feedback").textContent = isCorrect
    ? `${ui("correct", "Correct")}: ${answer.print}.`
    : `${ui("notQuite", "Not quite")}. ${answer.print}.`;
}

function toggleWritingDot(button) {
  const slug = button.dataset.writingDot;
  const state = quizState.get(slug);
  if (!state) return;
  const cellIndex = Number(button.dataset.cellIndex);
  const dot = Number(button.dataset.dot);
  const selected = new Set(state.writing[cellIndex] || []);
  if (selected.has(dot)) selected.delete(dot);
  else selected.add(dot);
  state.writing[cellIndex] = [...selected].sort((a, b) => a - b);
  quizState.set(slug, state);
  const active = selected.has(dot);
  button.classList.toggle("active", active);
  button.setAttribute("aria-pressed", String(active));
}

function checkWriting(button) {
  const slug = button.dataset.checkWriting;
  const state = quizState.get(slug);
  const quiz = button.closest(".section-quiz");
  if (!state || !quiz) return;
  const answer = state.pool[state.index];
  const correct = getBrailleCells(answer.braille).every((cell, index) => {
    const expected = brailleDotNumbers(cell).join("");
    const selected = (state.writing[index] || []).join("");
    return expected === selected;
  });
  quiz.querySelector(".writing-feedback").textContent = correct ? "Correct writing." : "Check the selected dots and try again.";
}

function answerProofCell(button) {
  const slug = button.dataset.proofCell;
  const state = quizState.get(slug);
  const quiz = button.closest(".section-quiz");
  if (!state || !quiz) return;
  if (quiz.querySelectorAll("[data-proof-cell]").length === 1) return;
  const selected = Number(button.dataset.proofIndex);
  [...quiz.querySelectorAll("[data-proof-cell]")].forEach((cell) => cell.classList.remove("correct", "incorrect"));
  button.classList.add(selected === state.proofError ? "correct" : "incorrect");
  quiz.querySelector(".proof-feedback").textContent = selected === state.proofError ? "Correct. That cell has the error." : "Not quite. Try another cell.";
}

function checkProofDots(button) {
  const slug = button.dataset.checkProofDots;
  const state = quizState.get(slug);
  const quiz = button.closest(".section-quiz");
  if (!state || !quiz) return;
  const selected = [...quiz.querySelectorAll("[data-proof-dot]:checked")].map((input) => Number(input.value)).sort((a, b) => a - b);
  const expected = [...(state.proofErrorDots || [])].sort((a, b) => a - b);
  const correct = selected.length === expected.length && selected.every((dot, index) => dot === expected[index]);
  quiz.querySelector(".proof-feedback").textContent = correct ? "Correct. That dot has the error." : "Not quite. Check the dot numbers again.";
}

function setupLessonQuizzes() {
  lessons.forEach((lesson) => renderLessonQuestion(lesson.slug));
}

function renderSummary(lesson) {
  summaryTitle.textContent = displayLessonTitle(lesson);
  document.querySelector(".summary-modal-header .eyebrow").textContent = ui("summary", "Lesson summary");
  summaryBody.innerHTML = `
    <section>
      <h3>${ui("goals", "Learning goals")}</h3>
      <ul class="objective-list">
        ${displayObjectives(lesson).map((objective) => `<li>${objective}</li>`).join("")}
      </ul>
    </section>
    <section>
      <h3>${ui("practiceSets", "Practice sets")}</h3>
      <div class="practice-set-grid">
        ${lesson.practiceSets.map((set, index) => `
          <section class="practice-set" aria-label="${set.title}">
            <h4>${displayPracticeTitle(set, index)}</h4>
            <p>${displayPracticeInstruction(set)}</p>
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
  renderLessonDetails();
  renderStaticBraille();
  setupCellSteppers();
  setupLessonQuizzes();
  renderChart(document.querySelector("[data-chart-filter].active")?.dataset.chartFilter || "all");
  updateSandbox();
}

chartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    chartButtons.forEach((item) => {
      item.classList.remove("active");
      item.setAttribute("aria-selected", "false");
      item.setAttribute("tabindex", "-1");
    });
    button.classList.add("active");
    button.setAttribute("aria-selected", "true");
    button.setAttribute("tabindex", "0");
    renderChart(button.dataset.chartFilter);
  });
});

lessonDetails.addEventListener("click", (event) => {
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

  const answerButton = event.target.closest("[data-lesson-answer]");
  if (answerButton) {
    answerLessonQuestion(answerButton);
    return;
  }

  const writingDot = event.target.closest("[data-writing-dot]");
  if (writingDot) {
    toggleWritingDot(writingDot);
    return;
  }

  const checkWritingButton = event.target.closest("[data-check-writing]");
  if (checkWritingButton) {
    checkWriting(checkWritingButton);
    return;
  }

  const checkProofDotsButton = event.target.closest("[data-check-proof-dots]");
  if (checkProofDotsButton) {
    checkProofDots(checkProofDotsButton);
    return;
  }

  const proofCell = event.target.closest("[data-proof-cell]");
  if (proofCell) {
    answerProofCell(proofCell);
    return;
  }

  const prevButton = event.target.closest("[data-prev-lesson]");
  if (prevButton) {
    moveLessonQuestion(prevButton.dataset.prevLesson, -1);
    return;
  }

  const nextButton = event.target.closest("[data-next-lesson]");
  if (nextButton) moveLessonQuestion(nextButton.dataset.nextLesson, 1);
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
