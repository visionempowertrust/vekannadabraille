const brailleMap = {
  a: "⠁", aa: "⠜", i: "⠊", ii: "⠔", u: "⠥", uu: "⠳", e: "⠢", ee: "⠑", ai: "⠌", o: "⠭", oo: "⠕", au: "⠪", rVowel: "⠐⠗",
  k: "⠅", kh: "⠨", g: "⠛", gh: "⠣", ng: "⠬", ch: "⠉", chh: "⠡", j: "⠚", jh: "⠴", ny: "⠒",
  tt: "⠾", tth: "⠺", dd: "⠫", ddh: "⠿", nn: "⠼", t: "⠞", th: "⠹", d: "⠙", dh: "⠮", n: "⠝",
  p: "⠏", ph: "⠖", b: "⠃", bh: "⠘", m: "⠍", y: "⠽", r: "⠗", l: "⠇", ll: "⠸", v: "⠧",
  sh: "⠩", ssh: "⠯", s: "⠎", h: "⠓", ksh: "⠟", tamilNn: "⠰", tamilRra: "⠻", tamilLlla: "⠷", virama: "⠈", anusvara: "⠰", visarga: "⠠"
};

const languageData = {
  tamil: {
    name: "Tamil", sample: "தமிழ் பிரெயில் கற்போம்", blank: "⠀", virama: "்", anusvara: "ஂ", visarga: "ஃ",
    vowels: [["அ", "a"], ["ஆ", "aa"], ["இ", "i"], ["ஈ", "ii"], ["உ", "u"], ["ஊ", "uu"], ["எ", "e"], ["ஏ", "ee"], ["ஐ", "ai"], ["ஒ", "o"], ["ஓ", "oo"], ["ஔ", "au"]],
    signs: [["ா", "aa"], ["ி", "i"], ["ீ", "ii"], ["ு", "u"], ["ூ", "uu"], ["ெ", "e"], ["ே", "ee"], ["ை", "ai"], ["ொ", "o"], ["ோ", "oo"], ["ௌ", "au"]],
    rows: [
      { title: "Consonants: க to ங", items: [["க", "k"], ["ங", "ng"]] },
      { title: "Consonants: ச to ஞ", items: [["ச", "ch"], ["ஜ", "j"], ["ஞ", "ny"]] },
      { title: "Consonants: ட to ண", items: [["ட", "tt"], ["ண", "nn"]] },
      { title: "Consonants: த to ன", items: [["த", "t"], ["ந", "n"], ["ன", "tamilNn"]] },
      { title: "Consonants: ப to ஹ", items: [["ப", "p"], ["ம", "m"], ["ய", "y"], ["ர", "r"], ["ல", "l"], ["ள", "ll"], ["ழ", "tamilLlla"], ["வ", "v"], ["ற", "tamilRra"], ["ஶ", "sh"], ["ஷ", "ssh"], ["ஸ", "s"], ["ஹ", "h"], ["க்ஷ", "ksh"]] }
    ]
  },
  hindi: {
    name: "Hindi", sample: "हिन्दी ब्रेल सीखें", virama: "्", anusvara: "ं", visarga: "ः",
    vowels: [["अ", "a"], ["आ", "aa"], ["इ", "i"], ["ई", "ii"], ["उ", "u"], ["ऊ", "uu"], ["ए", "ee"], ["ऐ", "ai"], ["ओ", "oo"], ["औ", "au"], ["ऋ", "rVowel"]],
    signs: [["ा", "aa"], ["ि", "i"], ["ी", "ii"], ["ु", "u"], ["ू", "uu"], ["े", "ee"], ["ै", "ai"], ["ो", "oo"], ["ौ", "au"], ["ृ", "rVowel"]],
    rows: standardRows("क ख ग घ ङ|च छ ज झ ञ|ट ठ ड ढ ण|त थ द ध न|प फ ब भ म य र ल व श ष स ह", ["क्ष"])
  },
  malayalam: {
    name: "Malayalam", sample: "മലയാളം ബ്രെയിൽ പഠനം", virama: "്", anusvara: "ം", visarga: "ഃ",
    vowels: [["അ", "a"], ["ആ", "aa"], ["ഇ", "i"], ["ഈ", "ii"], ["ഉ", "u"], ["ഊ", "uu"], ["എ", "e"], ["ഏ", "ee"], ["ഐ", "ai"], ["ഒ", "o"], ["ഓ", "oo"], ["ഔ", "au"], ["ഋ", "rVowel"]],
    signs: [["ാ", "aa"], ["ി", "i"], ["ീ", "ii"], ["ു", "u"], ["ൂ", "uu"], ["െ", "e"], ["േ", "ee"], ["ൈ", "ai"], ["ൊ", "o"], ["ോ", "oo"], ["ൗ", "au"], ["ൃ", "rVowel"]],
    rows: standardRows("ക ഖ ഗ ഘ ങ|ച ഛ ജ ഝ ഞ|ട ഠ ഡ ഢ ണ|ത ഥ ദ ധ ന|പ ഫ ബ ഭ മ യ ര ല ള വ ശ ഷ സ ഹ", ["ക്ഷ"])
  },
  telugu: {
    name: "Telugu", sample: "తెలుగు బ్రెయిల్ అభ్యాసం", virama: "్", anusvara: "ం", visarga: "ః",
    vowels: [["అ", "a"], ["ఆ", "aa"], ["ఇ", "i"], ["ఈ", "ii"], ["ఉ", "u"], ["ఊ", "uu"], ["ఎ", "e"], ["ఏ", "ee"], ["ఐ", "ai"], ["ఒ", "o"], ["ఓ", "oo"], ["ఔ", "au"], ["ఋ", "rVowel"]],
    signs: [["ా", "aa"], ["ి", "i"], ["ీ", "ii"], ["ు", "u"], ["ూ", "uu"], ["ె", "e"], ["ే", "ee"], ["ై", "ai"], ["ొ", "o"], ["ో", "oo"], ["ౌ", "au"], ["ృ", "rVowel"]],
    rows: standardRows("క ఖ గ ఘ ఙ|చ ఛ జ ఝ ఞ|ట ఠ డ ఢ ణ|త థ ద ధ న|ప ఫ బ భ మ య ర ల ళ వ శ ష స హ", ["క్ష"])
  },
  odia: {
    name: "Odia", sample: "ଓଡ଼ିଆ ବ୍ରେଲ ଶିକ୍ଷା", virama: "୍", anusvara: "ଂ", visarga: "ଃ",
    vowels: [["ଅ", "a"], ["ଆ", "aa"], ["ଇ", "i"], ["ଈ", "ii"], ["ଉ", "u"], ["ଊ", "uu"], ["ଏ", "ee"], ["ଐ", "ai"], ["ଓ", "oo"], ["ଔ", "au"], ["ଋ", "rVowel"]],
    signs: [["ା", "aa"], ["ି", "i"], ["ୀ", "ii"], ["ୁ", "u"], ["ୂ", "uu"], ["େ", "ee"], ["ୈ", "ai"], ["ୋ", "oo"], ["ୌ", "au"], ["ୃ", "rVowel"]],
    rows: standardRows("କ ଖ ଗ ଘ ଙ|ଚ ଛ ଜ ଝ ଞ|ଟ ଠ ଡ ଢ ଣ|ତ ଥ ଦ ଧ ନ|ପ ଫ ବ ଭ ମ ଯ ର ଲ ଳ ୱ ଶ ଷ ସ ହ", ["କ୍ଷ"])
  },
  bengali: {
    name: "Bengali", sample: "বাংলা ব্রেইল শেখা", virama: "্", anusvara: "ং", visarga: "ঃ",
    vowels: [["অ", "a"], ["আ", "aa"], ["ই", "i"], ["ঈ", "ii"], ["উ", "u"], ["ঊ", "uu"], ["এ", "ee"], ["ঐ", "ai"], ["ও", "oo"], ["ঔ", "au"], ["ঋ", "rVowel"]],
    signs: [["া", "aa"], ["ি", "i"], ["ী", "ii"], ["ু", "u"], ["ূ", "uu"], ["ে", "ee"], ["ৈ", "ai"], ["ো", "oo"], ["ৌ", "au"], ["ৃ", "rVowel"]],
    rows: standardRows("ক খ গ ঘ ঙ|চ ছ জ ঝ ঞ|ট ঠ ড ঢ ণ|ত থ দ ধ ন|প ফ ব ভ ম য র ল শ ষ স হ", ["ক্ষ"])
  },
  marathi: {
    name: "Marathi", sample: "मराठी ब्रेल शिकूया", virama: "्", anusvara: "ं", visarga: "ः",
    vowels: [["अ", "a"], ["आ", "aa"], ["इ", "i"], ["ई", "ii"], ["उ", "u"], ["ऊ", "uu"], ["ए", "ee"], ["ऐ", "ai"], ["ओ", "oo"], ["औ", "au"], ["ऋ", "rVowel"]],
    signs: [["ा", "aa"], ["ि", "i"], ["ी", "ii"], ["ु", "u"], ["ू", "uu"], ["े", "ee"], ["ै", "ai"], ["ो", "oo"], ["ौ", "au"], ["ृ", "rVowel"]],
    rows: standardRows("क ख ग घ ङ|च छ ज झ ञ|ट ठ ड ढ ण|त थ द ध न|प फ ब भ म य र ल ळ व श ष स ह", ["क्ष"])
  },
  gujarati: {
    name: "Gujarati", sample: "ગુજરાતી બ્રેઇલ શીખીએ", virama: "્", anusvara: "ં", visarga: "ઃ",
    vowels: [["અ", "a"], ["આ", "aa"], ["ઇ", "i"], ["ઈ", "ii"], ["ઉ", "u"], ["ઊ", "uu"], ["એ", "ee"], ["ઐ", "ai"], ["ઓ", "oo"], ["ઔ", "au"], ["ઋ", "rVowel"]],
    signs: [["ા", "aa"], ["િ", "i"], ["ી", "ii"], ["ુ", "u"], ["ૂ", "uu"], ["ે", "ee"], ["ૈ", "ai"], ["ો", "oo"], ["ૌ", "au"], ["ૃ", "rVowel"]],
    rows: standardRows("ક ખ ગ ઘ ઙ|ચ છ જ ઝ ઞ|ટ ઠ ડ ઢ ણ|ત થ દ ધ ન|પ ફ બ ભ મ ય ર લ ળ વ શ ષ સ હ", ["ક્ષ"])
  }
};

const uiText = {
  tamil: {
    local: "தமிழ்", all: "அனைத்து மொழிகள்", lessons: "பயிற்சிப் பட்டறைகள்", chart: "அட்டவணை", sandbox: "முயற்சி பெட்டி",
    eyebrow: "பாரதி பிரெயில் தொடக்கப் பாடம்", hero: "தமிழ் பிரெயிலை பார்த்து கற்கவும்", heroCopy: "தமிழ் பாரதி பிரெயில் செல்களை பார்வையால் அறிய உதவும் பயிற்சி பக்கம்.",
    path: "பரிந்துரைக்கப்பட்ட பாதை", pathCopy: "உயிரெழுத்துகள், மெய்யெழுத்துகள், குறிகள், சொற்கள், குறும் வாசிப்பு பயிற்சிகள் என படிப்படியாக செல்லுங்கள்.",
    series: "பயிற்சி தொடர்", build: "சிறு தொகுதிகளாக அறிதலை வளர்க்கவும்", full: "முழு பட்டறைகள்", oneAtATime: "ஒரு செல்லை ஒவ்வொன்றாக கற்கவும்",
    goals: "கற்றல் இலக்குகள்", summary: "பட்டறை சுருக்கம்", practice: "இந்த பட்டறையைப் பயிற்சி செய்யவும்", choose: "பதில் ஒன்றைத் தேர்ந்தெடுக்கவும்.",
    prev: "முந்தையது", next: "அடுத்தது", chartTitle: "தமிழ் எழுத்துகள் மற்றும் பிரெயில் செல்கள்", chartCopy: "பாரதி பிரெயிலில் உயிர்குறிகள் மெய்யெழுத்துக்குப் பிறகு முழு உயிர் செல்களாக எழுதப்படுகின்றன.",
    vowels: "உயிரெழுத்துகள்", consonants: "மெய்யெழுத்துகள்", marks: "குறிகள்", allFilter: "அனைத்தும்", print: "தமிழ் எழுத்து", sandboxCopy: "தமிழ் உரையைத் தட்டச்சு செய்து கற்றல் நோக்கிலான பிரெயில் வடிவத்தைப் பாருங்கள்.",
    back: "மேலே செல்லவும்", practiceSets: "பயிற்சி தொகுதிகள்", question: "கேள்வி", correct: "சரி", notQuite: "மீண்டும் முயற்சிக்கவும்"
  },
  hindi: {
    local: "हिन्दी", all: "सभी भाषाएँ", lessons: "कार्यशालाएँ", chart: "तालिका", sandbox: "अभ्यास बॉक्स",
    eyebrow: "भारती ब्रेल प्रारंभिक पाठ", hero: "हिन्दी ब्रेल देखकर सीखें", heroCopy: "हिन्दी भारती ब्रेल कोशिकाओं को देखकर पहचानने के लिए अभ्यास पृष्ठ.",
    path: "सुझाया गया क्रम", pathCopy: "स्वर, व्यंजन, चिह्न, शब्द और छोटे पाठ अभ्यास क्रम से सीखें.", series: "कार्यशाला क्रम", build: "छोटे समूहों में पहचान विकसित करें", full: "पूर्ण कार्यशालाएँ", oneAtATime: "एक समय में एक सेल सीखें",
    goals: "सीखने के लक्ष्य", summary: "कार्यशाला सारांश", practice: "इस कार्यशाला का अभ्यास करें", choose: "उत्तर चुनें.", prev: "पिछला", next: "अगला",
    chartTitle: "हिन्दी अक्षर और ब्रेल सेल", chartCopy: "भारती ब्रेल में मात्रा को व्यंजन के बाद पूर्ण स्वर सेल के रूप में पढ़ा जाता है.", vowels: "स्वर", consonants: "व्यंजन", marks: "चिह्न", allFilter: "सभी", print: "हिन्दी पाठ", sandboxCopy: "हिन्दी पाठ टाइप करके सीखने योग्य ब्रेल रूप देखें.", back: "ऊपर जाएँ", practiceSets: "अभ्यास समूह", question: "प्रश्न", correct: "सही", notQuite: "पूरी तरह नहीं"
  },
  malayalam: {
    local: "മലയാളം", all: "എല്ലാ ഭാഷകളും", lessons: "വർക്ക്‌ഷോപ്പുകൾ", chart: "ചാർട്ട്", sandbox: "പരീക്ഷണ പെട്ടി",
    eyebrow: "ഭാരതി ബ്രെയിൽ ആരംഭ പാഠം", hero: "മലയാളം ബ്രെയിൽ കണ്ട് പഠിക്കുക", heroCopy: "മലയാളം ഭാരതി ബ്രെയിൽ സെല്ലുകൾ കണ്ട് തിരിച്ചറിയാൻ സഹായിക്കുന്ന പരിശീലന പേജ്.",
    path: "ശുപാർശ ചെയ്യുന്ന വഴി", pathCopy: "സ്വരങ്ങൾ, വ്യഞ്ജനങ്ങൾ, ചിഹ്നങ്ങൾ, വാക്കുകൾ, ചെറുവായനകൾ എന്ന ക്രമത്തിൽ പഠിക്കുക.", series: "വർക്ക്‌ഷോപ്പ് പരമ്പര", build: "ചെറിയ കൂട്ടങ്ങളിലൂടെ തിരിച്ചറിവ് വളർത്തുക", full: "മുഴുവൻ വർക്ക്‌ഷോപ്പുകൾ", oneAtATime: "ഒരു സെൽ വീതം പഠിക്കുക",
    goals: "പഠന ലക്ഷ്യങ്ങൾ", summary: "വർക്ക്‌ഷോപ്പ് സംഗ്രഹം", practice: "ഈ വർക്ക്‌ഷോപ്പ് പരിശീലിക്കുക", choose: "ഒരു ഉത്തരം തിരഞ്ഞെടുക്കുക.", prev: "മുമ്പത്തെത്", next: "അടുത്തത്",
    chartTitle: "മലയാളം അക്ഷരങ്ങളും ബ്രെയിൽ സെല്ലുകളും", chartCopy: "ഭാരതി ബ്രെയിലിൽ സ്വരചിഹ്നങ്ങൾ വ്യഞ്ജനത്തിന് ശേഷം പൂർണ്ണ സ്വര സെല്ലുകളായി വായിക്കുന്നു.", vowels: "സ്വരങ്ങൾ", consonants: "വ്യഞ്ജനങ്ങൾ", marks: "ചിഹ്നങ്ങൾ", allFilter: "എല്ലാം", print: "മലയാളം എഴുത്ത്", sandboxCopy: "മലയാളം പാഠം ടൈപ്പ് ചെയ്ത് ബ്രെയിൽ രൂപം കാണുക.", back: "മുകളിലേക്ക്", practiceSets: "പരിശീലന കൂട്ടങ്ങൾ", question: "ചോദ്യം", correct: "ശരി", notQuite: "ശരിയായില്ല"
  },
  telugu: {
    local: "తెలుగు", all: "అన్ని భాషలు", lessons: "వర్క్‌షాప్‌లు", chart: "చార్ట్", sandbox: "ప్రయోగ పెట్టె",
    eyebrow: "భారతి బ్రెయిల్ ప్రారంభ పాఠం", hero: "తెలుగు బ్రెయిల్‌ను చూసి నేర్చుకోండి", heroCopy: "తెలుగు భారతి బ్రెయిల్ సెల్‌లను చూసి గుర్తించడానికి అభ్యాస పేజీ.",
    path: "సూచించిన మార్గం", pathCopy: "అచ్చులు, హల్లులు, గుర్తులు, పదాలు, చిన్న పఠనాభ్యాసాలు వరుసగా నేర్చుకోండి.", series: "వర్క్‌షాప్ శ్రేణి", build: "చిన్న సమూహాలలో గుర్తింపును పెంచుకోండి", full: "పూర్తి వర్క్‌షాప్‌లు", oneAtATime: "ఒక్కసారి ఒక సెల్ నేర్చుకోండి",
    goals: "అభ్యాస లక్ష్యాలు", summary: "వర్క్‌షాప్ సారాంశం", practice: "ఈ వర్క్‌షాప్‌ను అభ్యాసం చేయండి", choose: "జవాబు ఎంచుకోండి.", prev: "మునుపటి", next: "తదుపరి",
    chartTitle: "తెలుగు అక్షరాలు మరియు బ్రెయిల్ సెల్‌లు", chartCopy: "భారతి బ్రెయిల్‌లో గుణింతాలు హల్లుకు తర్వాత పూర్తి అచ్చు సెల్‌లుగా చదవబడతాయి.", vowels: "అచ్చులు", consonants: "హల్లులు", marks: "గుర్తులు", allFilter: "అన్నీ", print: "తెలుగు పాఠ్యం", sandboxCopy: "తెలుగు పాఠ్యాన్ని టైప్ చేసి బ్రెయిల్ రూపాన్ని చూడండి.", back: "పైకి", practiceSets: "అభ్యాస సమూహాలు", question: "ప్రశ్న", correct: "సరైంది", notQuite: "సరిపోలలేదు"
  },
  odia: {
    local: "ଓଡ଼ିଆ", all: "ସମସ୍ତ ଭାଷା", lessons: "କର୍ମଶାଳା", chart: "ଚାର୍ଟ", sandbox: "ଅଭ୍ୟାସ ବକ୍ସ",
    eyebrow: "ଭାରତୀ ବ୍ରେଲ ଆରମ୍ଭ ପାଠ", hero: "ଓଡ଼ିଆ ବ୍ରେଲ ଦେଖି ଶିଖନ୍ତୁ", heroCopy: "ଓଡ଼ିଆ ଭାରତୀ ବ୍ରେଲ ସେଲ ଚିହ୍ନିବା ପାଇଁ ଅଭ୍ୟାସ ପୃଷ୍ଠା.",
    path: "ପ୍ରସ୍ତାବିତ ପଥ", pathCopy: "ସ୍ୱର, ବ୍ୟଞ୍ଜନ, ଚିହ୍ନ, ଶବ୍ଦ ଓ ଛୋଟ ପାଠ ଅଭ୍ୟାସ କରନ୍ତୁ.", series: "କର୍ମଶାଳା ଶୃଙ୍ଖଳା", build: "ଛୋଟ ଦଳରେ ପରିଚୟ ଗଢ଼ନ୍ତୁ", full: "ପୂର୍ଣ୍ଣ କର୍ମଶାଳା", oneAtATime: "ଏକ ସମୟରେ ଗୋଟିଏ ସେଲ ଶିଖନ୍ତୁ",
    goals: "ଶିକ୍ଷା ଲକ୍ଷ୍ୟ", summary: "କର୍ମଶାଳା ସାରାଂଶ", practice: "ଏହି କର୍ମଶାଳା ଅଭ୍ୟାସ କରନ୍ତୁ", choose: "ଉତ୍ତର ବାଛନ୍ତୁ.", prev: "ପୂର୍ବ", next: "ପରବର୍ତ୍ତୀ",
    chartTitle: "ଓଡ଼ିଆ ଅକ୍ଷର ଓ ବ୍ରେଲ ସେଲ", chartCopy: "ଭାରତୀ ବ୍ରେଲରେ ସ୍ୱରଚିହ୍ନକୁ ବ୍ୟଞ୍ଜନ ପରେ ପୂର୍ଣ୍ଣ ସ୍ୱର ସେଲ ଭାବେ ପଢ଼ାଯାଏ.", vowels: "ସ୍ୱର", consonants: "ବ୍ୟଞ୍ଜନ", marks: "ଚିହ୍ନ", allFilter: "ସମସ୍ତ", print: "ଓଡ଼ିଆ ପାଠ୍ୟ", sandboxCopy: "ଓଡ଼ିଆ ପାଠ୍ୟ ଟାଇପ କରି ବ୍ରେଲ ରୂପ ଦେଖନ୍ତୁ.", back: "ଉପରକୁ", practiceSets: "ଅଭ୍ୟାସ ଦଳ", question: "ପ୍ରଶ୍ନ", correct: "ଠିକ", notQuite: "ପୂରା ଠିକ ନୁହେଁ"
  },
  bengali: {
    local: "বাংলা", all: "সব ভাষা", lessons: "কর্মশালা", chart: "চার্ট", sandbox: "অনুশীলন বাক্স",
    eyebrow: "ভারতী ব্রেইল প্রাথমিক পাঠ", hero: "বাংলা ব্রেইল দেখে শিখুন", heroCopy: "বাংলা ভারতী ব্রেইল সেল দেখে চিনতে সাহায্য করার অনুশীলন পৃষ্ঠা.",
    path: "প্রস্তাবিত পথ", pathCopy: "স্বর, ব্যঞ্জন, চিহ্ন, শব্দ এবং ছোট পাঠ অনুশীলন করুন.", series: "কর্মশালা সিরিজ", build: "ছোট দলে পরিচিতি তৈরি করুন", full: "পূর্ণ কর্মশালা", oneAtATime: "একবারে একটি সেল শিখুন",
    goals: "শেখার লক্ষ্য", summary: "কর্মশালার সারাংশ", practice: "এই কর্মশালা অনুশীলন করুন", choose: "একটি উত্তর বেছে নিন.", prev: "আগের", next: "পরের",
    chartTitle: "বাংলা অক্ষর ও ব্রেইল সেল", chartCopy: "ভারতী ব্রেইলে স্বরচিহ্ন ব্যঞ্জনের পরে পূর্ণ স্বর সেল হিসেবে পড়া হয়.", vowels: "স্বর", consonants: "ব্যঞ্জন", marks: "চিহ্ন", allFilter: "সব", print: "বাংলা লেখা", sandboxCopy: "বাংলা লেখা টাইপ করে ব্রেইল রূপ দেখুন.", back: "উপরে যান", practiceSets: "অনুশীলন সেট", question: "প্রশ্ন", correct: "সঠিক", notQuite: "পুরো ঠিক নয়"
  },
  marathi: {
    local: "मराठी", all: "सर्व भाषा", lessons: "कार्यशाळा", chart: "तक्ता", sandbox: "सराव पेटी",
    eyebrow: "भारती ब्रेल प्रारंभिक धडा", hero: "मराठी ब्रेल पाहून शिका", heroCopy: "मराठी भारती ब्रेल सेल पाहून ओळखण्यासाठी सराव पान.",
    path: "सुचवलेला क्रम", pathCopy: "स्वर, व्यंजन, चिन्हे, शब्द आणि लहान वाचन सराव क्रमाने शिका.", series: "कार्यशाळा मालिका", build: "लहान गटांमध्ये ओळख वाढवा", full: "पूर्ण कार्यशाळा", oneAtATime: "एकावेळी एक सेल शिका",
    goals: "शिकण्याची उद्दिष्टे", summary: "कार्यशाळा सारांश", practice: "ही कार्यशाळा सराव करा", choose: "उत्तर निवडा.", prev: "मागील", next: "पुढील",
    chartTitle: "मराठी अक्षरे आणि ब्रेल सेल", chartCopy: "भारती ब्रेलमध्ये मात्रा व्यंजनानंतर पूर्ण स्वर सेल म्हणून वाचली जाते.", vowels: "स्वर", consonants: "व्यंजन", marks: "चिन्हे", allFilter: "सर्व", print: "मराठी मजकूर", sandboxCopy: "मराठी मजकूर टाइप करून ब्रेल रूप पाहा.", back: "वर जा", practiceSets: "सराव संच", question: "प्रश्न", correct: "बरोबर", notQuite: "पूर्ण बरोबर नाही"
  },
  gujarati: {
    local: "ગુજરાતી", all: "બધી ભાષાઓ", lessons: "વર્કશોપ", chart: "ચાર્ટ", sandbox: "અભ્યાસ બોક્સ",
    eyebrow: "ભારતી બ્રેઇલ પ્રારંભિક પાઠ", hero: "ગુજરાતી બ્રેઇલ જોઈને શીખો", heroCopy: "ગુજરાતી ભારતી બ્રેઇલ સેલ જોઈને ઓળખવા માટેનું અભ્યાસ પાનું.",
    path: "સૂચિત માર્ગ", pathCopy: "સ્વર, વ્યંજન, ચિહ્નો, શબ્દો અને ટૂંકા વાંચન અભ્યાસ શીખો.", series: "વર્કશોપ શ્રેણી", build: "નાના સમૂહોમાં ઓળખ વિકસાવો", full: "પૂર્ણ વર્કશોપ", oneAtATime: "એક સમયે એક સેલ શીખો",
    goals: "શીખવાના લક્ષ્યો", summary: "વર્કશોપ સારાંશ", practice: "આ વર્કશોપનો અભ્યાસ કરો", choose: "જવાબ પસંદ કરો.", prev: "પાછળ", next: "આગળ",
    chartTitle: "ગુજરાતી અક્ષરો અને બ્રેઇલ સેલ", chartCopy: "ભારતી બ્રેઇલમાં માત્રા વ્યંજન પછી સંપૂર્ણ સ્વર સેલ તરીકે વાંચાય છે.", vowels: "સ્વર", consonants: "વ્યંજન", marks: "ચિહ્નો", allFilter: "બધું", print: "ગુજરાતી લખાણ", sandboxCopy: "ગુજરાતી લખાણ ટાઇપ કરીને બ્રેઇલ રૂપ જુઓ.", back: "ઉપર જાઓ", practiceSets: "અભ્યાસ સમૂહ", question: "પ્રશ્ન", correct: "સાચું", notQuite: "પૂરું સાચું નથી"
  }
};

function standardRows(serialized, clusters = []) {
  const keys = [
    ["k", "kh", "g", "gh", "ng"],
    ["ch", "chh", "j", "jh", "ny"],
    ["tt", "tth", "dd", "ddh", "nn"],
    ["t", "th", "d", "dh", "n"],
    ["p", "ph", "b", "bh", "m", "y", "r", "l", "ll", "v", "sh", "ssh", "s", "h"]
  ];
  return serialized.split("|").map((row, index) => ({
    title: index === 4 ? "Consonants: remaining common letters" : `Consonants: ${row.split(" ")[0]} to ${row.split(" ").slice(-1)[0]}`,
    items: row.split(" ").map((letter, letterIndex) => [letter, keys[index][letterIndex]])
  })).concat(clusters.map((cluster) => ({ title: `Conjunct: ${cluster}`, items: [[cluster, "ksh"]] })));
}

const courseKey = document.body.dataset.course;
const course = languageData[courseKey] || languageData.hindi;
let textMode = localStorage.getItem(`text-mode-${courseKey || "landing"}`) || "en";
const chart = buildChart(course);
const vowelSigns = Object.fromEntries(course.signs);
const directMap = Object.fromEntries(chart.map(([print, , braille]) => [print, braille]));
const consonants = new Set(chart.filter((item) => item[4] === "consonant").map(([print]) => print));
const digits = { "0": "⠼⠚", "1": "⠼⠁", "2": "⠼⠃", "3": "⠼⠉", "4": "⠼⠙", "5": "⠼⠑", "6": "⠼⠋", "7": "⠼⠛", "8": "⠼⠓", "9": "⠼⠊" };
const punctuation = { ",": "⠂", ";": "⠆", ":": "⠒", ".": "⠲", "?": "⠦", "!": "⠖", "-": "⠤" };
const lessons = buildLessons(course);
const quizState = new Map();
const cellState = new Map();

function ui(key, fallback) {
  if (textMode === "regional" && courseKey) {
    const dictionary = uiText[courseKey] || {};
    if (dictionary[key]) return dictionary[key];
    const generic = {
      lessonCopy: `${dictionary.oneAtATime}. ${dictionary.practice}.`,
      quizCopy: `${dictionary.prev} / ${dictionary.next}.`,
      cellNote: dictionary.oneAtATime
    };
    if (generic[key]) return generic[key];
  }
  return fallback;
}

function makeLanguageToggle() {
  const nav = document.querySelector("nav");
  if (!nav) return;
  const toggle = document.createElement("div");
  toggle.className = "language-toggle";
  toggle.setAttribute("aria-label", "Text language");
  toggle.innerHTML = `
    <button type="button" data-text-mode="en">English</button>
    <button type="button" data-text-mode="regional">${courseKey ? uiText[courseKey].local : "Regional"}</button>
  `;
  nav.appendChild(toggle);
  toggle.addEventListener("click", (event) => {
    const button = event.target.closest("[data-text-mode]");
    if (!button) return;
    textMode = button.dataset.textMode;
    localStorage.setItem(`text-mode-${courseKey || "landing"}`, textMode);
    renderAll();
  });
  updateLanguageToggle();
}

function updateLanguageToggle() {
  document.querySelectorAll("[data-text-mode]").forEach((button) => {
    if (button.dataset.textMode === "en") button.textContent = textMode === "regional" ? "A" : "English";
    if (button.dataset.textMode === "regional") button.textContent = courseKey ? uiText[courseKey].local : "Regional";
    button.classList.toggle("active", button.dataset.textMode === textMode);
  });
}

function regionalMode() {
  return textMode === "regional" && courseKey;
}

function displayLessonTitle(lesson) {
  if (!regionalMode()) return lesson.title;
  if (lesson.group === "vowels") return ui("vowels", "Vowels");
  if (lesson.group === "marks") return ui("marks", "Marks");
  if (lesson.group === "words") return ui("practiceSets", "Practice sets");
  const letters = lesson.focus.filter((item) => !["1", "2", "3", ".", "?"].includes(item));
  return `${ui("consonants", "Consonants")}: ${letters[0]} - ${letters[letters.length - 1]}`;
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
  return [
    ui("oneAtATime", "Learn one cell at a time"),
    ui("practice", "Practice this lesson"),
    ui("chartCopy", "Bharati Braille writes vowel signs as full braille letters after the consonant sound.")
  ];
}

function displayPracticeTitle(set, index) {
  if (!regionalMode()) return set.title;
  return `${ui("practiceSets", "Practice sets")} ${index + 1}`;
}

function displayPracticeInstruction(set) {
  if (!regionalMode()) return set.instruction;
  return ui("practice", "Practice this lesson");
}

function displayMeta(lesson) {
  if (!regionalMode()) return `${lesson.practiceSets.length} sets`;
  return `${lesson.practiceSets.length} ${ui("practiceSets", "Practice sets")}`;
}

function displayTime(lesson) {
  if (!regionalMode()) return lesson.time;
  const minutes = lesson.time.match(/\d+/)?.[0] || lesson.time;
  return minutes;
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

function buildChart(data) {
  const vowels = data.vowels.map(([print, key]) => [print, key, brailleMap[key], dotsFor(brailleMap[key]), "vowel"]);
  const consonants = data.rows.flatMap((row) => row.items.map(([print, key]) => [print, key, brailleMap[key], dotsFor(brailleMap[key]), "consonant"]));
  const marks = [[data.virama, "halant", brailleMap.virama, "4", "mark"], [data.anusvara, "anusvara", brailleMap.anusvara, "56", "mark"], [data.visarga, "visarga", brailleMap.visarga, "6", "mark"]];
  return [...vowels, ...consonants, ...marks];
}

function buildLessons(data) {
  const firstConsonant = data.rows[0].items[0][0];
  const vowelLessons = chunkCells(data.vowels).map((chunk, index) => makeVowelLesson(data, chunk, index, firstConsonant));
  const consonantLessons = chunkCells(data.rows.flatMap((row) => row.items)).map((chunk, index) => makeConsonantLesson(data, chunk, index));
  return [
    ...vowelLessons,
    ...consonantLessons,
    makeMarksLesson(data),
    makeWordsLesson(data)
  ];
}

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

function makeVowelLesson(data, chunk, index, firstConsonant) {
  const letters = chunk.map(([letter]) => letter);
  const signs = chunk.map(([, key]) => data.signs.find(([, signKey]) => signKey === key)?.[0]).filter(Boolean);
  return {
    group: "vowels",
    slug: `vowels-${index + 1}`,
    title: `Vowels ${index + 1}: ${letters[0]} to ${letters[letters.length - 1]}`,
    summary: `Learn a small group of independent ${data.name} vowels and their Bharati Braille cells.`,
    icon: brailleMap[chunk[0][1]] || "\u2801",
    time: "20 min",
    introduction: `${data.name} print combines consonants with vowel signs. In Bharati Braille sight reading, learners read the consonant cell and then the vowel cell in spoken order.`,
    objectives: [`Recognize ${letters.join(", ")} by sight.`, "Read consonant plus vowel in spoken order.", "Use six-dot cells to compare similar vowel patterns."],
    focus: letters,
    practiceSets: [
      { title: "Vowel warm-up", instruction: "Read each vowel cell aloud.", items: letters },
      { title: "Vowel signs", instruction: "Read the base consonant first, then the vowel.", items: signs.map((sign) => `${firstConsonant}${sign}`) },
      { title: "Mixed review", instruction: "Read the print, then name the braille cell.", items: [...letters, ...signs.map((sign) => `${firstConsonant}${sign}`)] }
    ]
  };
}

function makeConsonantLesson(data, chunk, index) {
  const letters = chunk.map(([letter]) => letter);
  const signs = data.signs.slice(0, 5).map(([sign]) => sign);
  return {
    group: "consonants",
    slug: `consonants-${index + 1}`,
    title: `Consonants ${index + 1}: ${letters[0]} to ${letters[letters.length - 1]}`,
    summary: `Practice ${data.name} letters in this consonant group.`,
    icon: brailleMap[chunk[0][1]] || "\u2805",
    time: "25 min",
    introduction: `This lesson introduces ${letters.join(", ")}. Practice the group as a family, then mix the letters with vowels for sight reading.`,
    objectives: [`Recognize ${letters.join(", ")} by sight.`, "Compare nearby six-dot patterns.", "Read short syllables without pausing at every cell."],
    focus: letters,
    practiceSets: [
      { title: "Group read", instruction: "Read the group forward and backward.", items: [...letters, ...letters.slice().reverse()] },
      { title: "Pair contrast", instruction: "Compare nearby letters.", items: letters.slice(0, -1).map((letter, letterIndex) => `${letter} / ${letters[letterIndex + 1]}`) },
      { title: "Syllable builder", instruction: "Read consonant plus vowel.", items: letters.flatMap((letter) => signs.slice(0, 2).map((sign) => `${letter}${sign}`)) }
    ]
  };
}
function makeMarksLesson(data) {
  const sample = data.rows[0].items[0][0];
  return {
    group: "marks",
    slug: "marks",
    title: "Halant, Anusvara, Visarga",
    summary: "Practice common marks used with syllables.",
    icon: "⠈",
    time: "20 min",
    introduction: `This lesson introduces the ${data.name} halant, anusvara, and visarga signs as sight-reading signals.`,
    objectives: ["Identify common marks.", "Read a consonant with halant.", "Notice when a mark changes the syllable sound."],
    focus: [data.virama, data.anusvara, data.visarga, sample],
    practiceSets: [
      { title: "Mark recognition", instruction: "Name each mark.", items: [data.virama, data.anusvara, data.visarga] },
      { title: "Halant practice", instruction: "Read the halant signal with the consonant.", items: [`${sample}${data.virama}`, `${data.rows[3].items[0][0]}${data.virama}`, `${data.rows[4].items[0][0]}${data.virama}`] },
      { title: "Mixed marks", instruction: "Tell which mark appears.", items: [`${sample}${data.anusvara}`, `${sample}${data.visarga}`, `${sample}${data.virama}`] }
    ]
  };
}

function makeWordsLesson(data) {
  const sampleItems = data.sample.split(" ");
  return {
    group: "words",
    slug: "words-sentences",
    title: "Words and Sentences",
    summary: `Read short ${data.name} words, numbers, and punctuation.`,
    icon: "⠎",
    time: "40 min",
    introduction: `The final lesson moves from cells to short ${data.name} reading lines.`,
    objectives: ["Read short words using learned cells.", "Recognize numbers with the number sign.", "Practice punctuation in short lines."],
    focus: [...sampleItems.slice(0, 2), "1", ".", "?"],
    practiceSets: [
      { title: "Short words", instruction: "Read one word at a time.", items: sampleItems },
      { title: "Numbers", instruction: "Read the number sign before each digit.", items: ["1", "2", "3", "10", "25"] },
      { title: "Sentence lines", instruction: "Read slowly, then repeat.", items: [`${sampleItems[0]}.`, `${sampleItems.join(" ")}.`] }
    ]
  };
}

function dotsFor(braille) {
  return [...braille].filter(isBrailleChar).map((char) => brailleDotNumbers(char).join("")).join(", ");
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]));
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
  return `<span class="visual-braille-cell" role="img" aria-label="dots ${activeDots.join("-")}">${[1, 2, 3, 4, 5, 6].map((dot) => `<span class="visual-braille-dot${activeDots.includes(dot) ? " active" : ""}" data-dot="${dot}"></span>`).join("")}</span>`;
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

const lessonGrid = document.querySelector("#lessonGrid");
const lessonDetails = document.querySelector("#lessonDetails");
const summaryModal = document.querySelector("#summaryModal");
const summaryTitle = document.querySelector("#summaryTitle");
const summaryBody = document.querySelector("#summaryBody");
const closeSummary = document.querySelector("#closeSummary");
const chartGrid = document.querySelector("#chartGrid");
const chartButtons = document.querySelectorAll("[data-chart-filter]");
const textInput = document.querySelector("#kannadaInput");
const brailleOutput = document.querySelector("#brailleOutput");

function setupPageText() {
  document.title = `${course.name} Braille by Sight`;
  setText("#brandName", textMode === "regional" ? ui("local", course.name) : `${course.name} Braille by Sight`);
  setText("#courseEyebrow", ui("eyebrow", "Bharati Braille starter course"));
  setText("#hero-title", ui("hero", `Learn ${course.name} Braille by seeing`));
  setText("#heroCopy", ui("heroCopy", `A lesson-style page for sighted learners who want to recognize ${course.name} Bharati Braille cells.`));
  setText("#path-title", ui("path", "Suggested path"));
  setText("#pathCopy", ui("pathCopy", "Start with vowels and common consonants, then move to marks, words, and short reading drills."));
  setText("#lessonCopy", ui("lessonCopy", "Each lesson introduces one cell at a time, then gives focused practice for the same section."));
  setText("#chartTitle", ui("chartTitle", `${course.name} letters and braille cells`));
  setText("#chartCopy", ui("chartCopy", "Bharati Braille writes vowel signs as full braille letters after the consonant sound."));
  setText("#sandboxLabel", ui("print", `${course.name} print`));
  setText("#sandboxCopy", ui("sandboxCopy", `Type ${course.name} text to see a learning-oriented braille rendering.`));
  setText("#footerName", textMode === "regional" ? ui("local", course.name) : `${course.name} Braille by Sight`);
  document.querySelectorAll("nav a").forEach((link) => {
    if (link.getAttribute("href") === "index.html#languages") link.textContent = ui("all", "All languages");
    if (link.getAttribute("href") === "#lessons") link.textContent = ui("lessons", "Lessons");
    if (link.getAttribute("href") === "#chart") link.textContent = ui("chart", "Chart");
    if (link.getAttribute("href") === "#sandbox") link.textContent = ui("sandbox", "Sandbox");
  });
  document.querySelector("#series .eyebrow").textContent = ui("series", "Lesson series");
  document.querySelector("#lessons .eyebrow").textContent = ui("full", "Full lessons");
  document.querySelector("#chart .eyebrow").textContent = ui("chart", "Reference chart");
  document.querySelector("#sandbox .eyebrow").textContent = ui("sandbox", "Sandbox");
  document.querySelector("#series .eyebrow").textContent = ui("series", "Lesson series");
  document.querySelector("#series h2").textContent = ui("build", "Build recognition in small lessons");
  document.querySelector("#lessons .section-heading h2")?.replaceChildren(document.createTextNode(ui("lessons", "Lessons")));
  document.querySelector("#sandbox .section-heading h2")?.replaceChildren(document.createTextNode(ui("sandbox", "Explore print-to-braille order")));
  document.querySelectorAll("[data-chart-filter='all']").forEach((button) => { button.textContent = ui("allFilter", "All"); });
  document.querySelectorAll("[data-chart-filter='vowel']").forEach((button) => { button.textContent = ui("vowels", "Vowels"); });
  document.querySelectorAll("[data-chart-filter='consonant']").forEach((button) => { button.textContent = ui("consonants", "Consonants"); });
  document.querySelectorAll("[data-chart-filter='mark']").forEach((button) => { button.textContent = ui("marks", "Marks"); });
  document.querySelector(".site-footer a").textContent = ui("back", "Back to top");
  const lessonCount = document.querySelector(".stats strong");
  if (lessonCount) lessonCount.textContent = lessons.length;
  const statItems = document.querySelectorAll(".stats span");
  if (regionalMode() && statItems.length >= 3) {
    statItems[0].innerHTML = `<strong>${lessons.length}</strong> ${ui("lessons", "Lessons")}`;
    statItems[1].innerHTML = `<strong>6</strong>`;
    statItems[2].innerHTML = `<strong>1</strong>`;
  } else if (statItems.length >= 3) {
    statItems[0].innerHTML = `<strong>${lessons.length}</strong> lessons`;
    statItems[1].innerHTML = `<strong>6-dot</strong> cells`;
    statItems[2].innerHTML = `<strong>Grade 1</strong> starter`;
  }
  textInput.value = course.sample;
  updateLanguageToggle();
}

function setText(selector, value) {
  const element = document.querySelector(selector);
  if (element) element.textContent = value;
}

function renderLessons() {
  lessonGrid.innerHTML = lessons.map((lesson) => `
    <article class="lesson-card" id="card-${lesson.slug}">
      <span class="lesson-icon" aria-hidden="true">${renderBrailleCells(lesson.icon)}</span>
      <div><h3>${displayLessonTitle(lesson)}</h3><p>${displayLessonSummary(lesson)}</p></div>
      <div class="lesson-meta"><a href="#${lesson.slug}">${ui("practice", "Practice")}</a><span>${displayMeta(lesson)}</span></div>
    </article>
  `).join("");
}

function useSinglePracticePilot(lesson) {
  return true;
}

function renderPracticePanel(lesson) {
  return `<section class="section-quiz single-practice" data-lesson-quiz="${lesson.slug}" aria-live="polite"><div class="section-quiz-copy"><h4>${ui("practice", "Practice this lesson")}</h4><p>Questions appear one at a time as reading, writing, or proof reading.</p></div><div class="section-quiz-panel"><p class="practice-type-label"></p><div class="single-practice-body"></div><div class="section-quiz-footer"><p class="section-quiz-position"></p><div class="step-controls"><button class="button secondary dark-text" type="button" data-prev-lesson="${lesson.slug}">${ui("prev", "Previous")}</button><button class="button primary" type="button" data-next-lesson="${lesson.slug}">${ui("next", "Next")}</button></div></div></div></section>`;
}

function renderLessonDetails() {
  lessonDetails.innerHTML = lessons.map((lesson, index) => `
    <article class="lesson-detail" id="${lesson.slug}">
      <div class="lesson-detail-header"><div><p class="eyebrow">${ui("lessons", "Lesson")} ${index + 1}</p><h3>${displayLessonTitle(lesson)}</h3><p>${displayLessonIntroduction(lesson)}</p></div><div class="lesson-badge" aria-hidden="true"><span>${renderBrailleCells(lesson.icon)}</span><strong>${displayTime(lesson)}</strong></div></div>
      <div class="lesson-two-column"><section><h4>${ui("goals", "Learning goals")}</h4><ul class="objective-list">${displayObjectives(lesson).map((objective) => `<li>${objective}</li>`).join("")}</ul></section><section class="cell-stepper" data-cell-stepper="${lesson.slug}" aria-live="polite"><div class="cell-stepper-heading"><h4>${ui("oneAtATime", "Learn one cell at a time")}</h4><span class="cell-step-count"></span></div><div class="cell-step-card"><span class="cell-step-print"></span><span class="cell-step-braille"></span><span class="cell-step-note"></span></div><div class="step-controls"><button class="button secondary dark-text" type="button" data-prev-cell="${lesson.slug}">${ui("prev", "Previous")}</button><button class="button primary" type="button" data-next-cell="${lesson.slug}">${ui("next", "Next")}</button></div></section></div>
      <button class="button summary-button" type="button" data-summary="${lesson.slug}">${ui("summary", "Lesson summary")}</button>
      ${renderPracticePanel(lesson)}
    </article>
  `).join("");
}

function renderChart(filter = "all") {
  chartGrid.innerHTML = chart.filter((item) => filter === "all" || item[4] === filter).map(([print, label, braille, dots, group]) => `
    <article class="chart-card" data-group="${group}"><span class="chart-braille" aria-label="${displayDotLabel(dots)}">${renderBrailleCells(braille)}</span><div><h3>${print}</h3><p>${displayChartLabel(label, group)}</p><p>${displayDotLabel(dots)}</p></div></article>
  `).join("");
}

function renderCellStep(slug) {
  const lesson = lessons.find((item) => item.slug === slug);
  const stepper = lessonDetails.querySelector(`[data-cell-stepper="${slug}"]`);
  const index = cellState.get(slug) || 0;
  if (!lesson || !stepper) return;
  const item = lesson.focus[index];
  stepper.querySelector(".cell-step-count").textContent = regionalMode() ? `${index + 1} / ${lesson.focus.length}` : `${index + 1} of ${lesson.focus.length}`;
  stepper.querySelector(".cell-step-print").textContent = item;
  stepper.querySelector(".cell-step-braille").innerHTML = renderBrailleCells(translateText(item));
  stepper.querySelector(".cell-step-note").textContent = ui("cellNote", "Read the print, then name the braille cell.");
  stepper.querySelector("[data-prev-cell]").disabled = index === 0;
  stepper.querySelector("[data-next-cell]").disabled = index === lesson.focus.length - 1;
}

function moveCellStep(slug, direction) {
  const lesson = lessons.find((item) => item.slug === slug);
  const current = cellState.get(slug) || 0;
  cellState.set(slug, Math.min(Math.max(current + direction, 0), lesson.focus.length - 1));
  renderCellStep(slug);
}

function setupCellSteppers() {
  lessons.forEach((lesson) => {
    cellState.set(lesson.slug, 0);
    renderCellStep(lesson.slug);
  });
}

function getLessonPool(lesson) {
  const items = [...lesson.focus, ...lesson.practiceSets.flatMap((set) => set.items)];
  const unique = [...new Set(items)].filter((item) => !item.includes("/") && item.trim()).map((print) => ({ print, braille: translateText(print) })).filter((item) => item.braille !== item.print);
  return unique.length >= 4 ? unique : chart.filter((item) => item[4] !== "mark").map(([print, , braille]) => ({ print, braille }));
}

function buildOptions(pool, answer, index) {
  const distractors = pool.filter((item) => item.print !== answer.print);
  const rotated = [...distractors.slice(index), ...distractors.slice(0, index)];
  return [answer, ...rotated.slice(0, 3)].sort(() => Math.random() - 0.5);
}

function getBrailleCells(value) {
  return [...String(value)].filter(isBrailleChar);
}

function emptyWriting(cells) {
  return cells.map(() => []);
}

function renderWritingCells(slug, cells, selections) {
  return cells.map((cell, cellIndex) => `<div class="writing-cell" aria-label="Braille cell ${cellIndex + 1}">${[1, 2, 3, 4, 5, 6].map((dot) => {
    const active = selections[cellIndex]?.includes(dot);
    return `<button type="button" class="writing-dot${active ? " active" : ""}" data-writing-dot="${slug}" data-cell-index="${cellIndex}" data-dot="${dot}" aria-pressed="${active ? "true" : "false"}">${dot}</button>`;
  }).join("")}</div>`).join("");
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
    return `<button type="button" class="proof-cell" data-proof-cell="${answer.slug}" data-proof-index="${current}" aria-label="Braille cell ${current + 1}">${renderBrailleCell(char)}</button>`;
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
    body.innerHTML = `<div class="section-quiz-prompt"><span class="section-quiz-braille">${renderBrailleCells(answer.braille)}</span><span class="section-quiz-help">${regionalMode() ? `${ui("question", "Question")} ${state.index + 1} / ${state.pool.length}` : `${ui("question", "Question")} ${state.index + 1} of ${state.pool.length}`}</span></div><div class="section-quiz-choices">${options.map((item) => `<button type="button" data-lesson-answer="${lesson.slug}" data-answer="${item.print}">${item.print}</button>`).join("")}</div><p class="section-quiz-feedback">${ui("choose", "Choose an answer to begin.")}</p>`;
    return;
  }

  if (type === "writing") {
    const cells = getBrailleCells(answer.braille);
    body.innerHTML = `<p class="practice-prompt writing-prompt">Write: ${answer.print}</p><div class="writing-cells">${renderWritingCells(lesson.slug, cells, state.writing)}</div><button class="button secondary dark-text" type="button" data-check-writing="${lesson.slug}">Check writing</button><p class="writing-feedback">Select dots, then check writing.</p>`;
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
  let state = quizState.get(slug);
  if (!state) {
    state = { pool: getLessonPool(lesson), index: 0 };
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
  if (useSinglePracticePilot(lesson)) {
    renderSinglePracticeQuestion(lesson, quiz, state, answer, options);
    quiz.querySelector("[data-prev-lesson]").disabled = state.index === 0;
    quiz.querySelector("[data-next-lesson]").disabled = state.index === state.pool.length - 1;
    return;
  }
  const proof = makeProofItem(answer, state.index);
  quiz.querySelector(".section-quiz-braille").innerHTML = renderBrailleCells(answer.braille);
  quiz.querySelector(".section-quiz-help").textContent = regionalMode() ? `${ui("question", "Question")} ${state.index + 1} / ${state.pool.length}` : `${ui("question", "Question")} ${state.index + 1} of ${state.pool.length}`;
  quiz.querySelector(".section-quiz-feedback").textContent = ui("choose", "Choose an answer to begin.");
  quiz.querySelector(".section-quiz-choices").innerHTML = options.map((item) => `<button type="button" data-lesson-answer="${slug}" data-answer="${item.print}">${item.print}</button>`).join("");
  quiz.querySelector(".writing-prompt").textContent = `Write: ${answer.print}`;
  quiz.querySelector(".writing-cells").innerHTML = renderWritingCells(slug, cells, state.writing);
  quiz.querySelector(".writing-feedback").textContent = "Select dots, then check writing.";
  quiz.querySelector(".proof-prompt").textContent = `Find the wrong braille cell for: ${answer.print}`;
  quiz.querySelector(".proof-cells").innerHTML = proof.html;
  quiz.querySelector(".proof-feedback").textContent = "Choose the cell that contains the error.";
  state.proofError = proof.errorCell;
  quiz.querySelector(".section-quiz-position").textContent = `${state.index + 1} of ${state.pool.length}`;
  quiz.querySelector("[data-prev-lesson]").disabled = state.index === 0;
  quiz.querySelector("[data-next-lesson]").disabled = state.index === state.pool.length - 1;
}

function moveLessonQuestion(slug, direction) {
  const state = quizState.get(slug);
  state.index = Math.min(Math.max(state.index + direction, 0), state.pool.length - 1);
  state.writing = null;
  renderLessonQuestion(slug);
}

function answerLessonQuestion(button) {
  const slug = button.dataset.lessonAnswer;
  const state = quizState.get(slug);
  const quiz = button.closest(".section-quiz");
  const answer = state.pool[state.index];
  const correct = button.dataset.answer === answer.print;
  [...quiz.querySelectorAll("[data-lesson-answer]")].forEach((choice) => {
    choice.disabled = true;
    if (choice.dataset.answer === answer.print) choice.classList.add("correct");
  });
  if (!correct) button.classList.add("incorrect");
  quiz.querySelector(".section-quiz-feedback").textContent = correct ? `${ui("correct", "Correct")}: ${answer.print}.` : `${ui("notQuite", "Not quite")}. ${answer.print}.`;
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
  renderLessonQuestion(slug);
}

function checkWriting(button) {
  const slug = button.dataset.checkWriting;
  const state = quizState.get(slug);
  const quiz = button.closest(".section-quiz");
  if (!state || !quiz) return;
  const answer = state.pool[state.index];
  const correct = getBrailleCells(answer.braille).every((cell, index) => brailleDotNumbers(cell).join("") === (state.writing[index] || []).join(""));
  quiz.querySelector(".writing-feedback").textContent = correct ? "Correct writing." : "Check the selected dots and try again.";
}

function answerProofCell(button) {
  const slug = button.dataset.proofCell;
  const state = quizState.get(slug);
  const quiz = button.closest(".section-quiz");
  if (!state || !quiz) return;
  if (quiz.classList.contains("single-practice") && quiz.querySelectorAll("[data-proof-cell]").length === 1) return;
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
  summaryBody.innerHTML = `<section><h3>${ui("goals", "Learning goals")}</h3><ul class="objective-list">${displayObjectives(lesson).map((objective) => `<li>${objective}</li>`).join("")}</ul></section><section><h3>${ui("practiceSets", "Practice sets")}</h3><div class="practice-set-grid">${lesson.practiceSets.map((set, index) => `<section class="practice-set"><h4>${displayPracticeTitle(set, index)}</h4><p>${displayPracticeInstruction(set)}</p><div class="drill-list">${set.items.map((item) => `<span class="drill-chip"><strong>${item}</strong><em>${renderBrailleCells(translateText(item))}</em></span>`).join("")}</div></section>`).join("")}</div></section>`;
}

function openSummary(slug) {
  const lesson = lessons.find((item) => item.slug === slug);
  renderSummary(lesson);
  summaryModal.hidden = false;
  closeSummary.focus();
}

function closeSummaryModal() {
  summaryModal.hidden = true;
}

function translateText(input) {
  let output = "";
  const chars = [...input];
  for (let index = 0; index < chars.length; index += 1) {
    const char = chars[index];
    const next = chars[index + 1];
    const next2 = chars[index + 2];
    const ksh = chart.find(([print, label]) => label === "ksh" && print === `${char}${next}${next2}`);
    if (ksh) {
      output += ksh[2];
      index += 2;
      continue;
    }
    if (consonants.has(char) && next === course.virama) {
      output += `${brailleMap.virama}${directMap[char]}`;
      index += 1;
      continue;
    }
    if (consonants.has(char) && vowelSigns[next]) {
      output += `${directMap[char]}${brailleMap[vowelSigns[next]]}`;
      index += 1;
      continue;
    }
    if (vowelSigns[char]) {
      output += brailleMap[vowelSigns[char]];
      continue;
    }
    output += directMap[char] || digits[char] || punctuation[char] || char;
  }
  return output;
}

function updateSandbox() {
  brailleOutput.innerHTML = renderBrailleCells(translateText(textInput.value));
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

if (courseKey) {
  chartButtons.forEach((button) => {
    button.addEventListener("click", () => {
      chartButtons.forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      renderChart(button.dataset.chartFilter);
    });
  });

  lessonDetails.addEventListener("click", (event) => {
    const summaryButton = event.target.closest("[data-summary]");
    if (summaryButton) return openSummary(summaryButton.dataset.summary);
    const prevCellButton = event.target.closest("[data-prev-cell]");
    if (prevCellButton) return moveCellStep(prevCellButton.dataset.prevCell, -1);
    const nextCellButton = event.target.closest("[data-next-cell]");
    if (nextCellButton) return moveCellStep(nextCellButton.dataset.nextCell, 1);
    const answerButton = event.target.closest("[data-lesson-answer]");
    if (answerButton) return answerLessonQuestion(answerButton);
    const writingDot = event.target.closest("[data-writing-dot]");
    if (writingDot) return toggleWritingDot(writingDot);
    const checkWritingButton = event.target.closest("[data-check-writing]");
    if (checkWritingButton) return checkWriting(checkWritingButton);
    const checkProofDotsButton = event.target.closest("[data-check-proof-dots]");
    if (checkProofDotsButton) return checkProofDots(checkProofDotsButton);
    const proofCell = event.target.closest("[data-proof-cell]");
    if (proofCell) return answerProofCell(proofCell);
    const prevButton = event.target.closest("[data-prev-lesson]");
    if (prevButton) return moveLessonQuestion(prevButton.dataset.prevLesson, -1);
    const nextButton = event.target.closest("[data-next-lesson]");
    if (nextButton) return moveLessonQuestion(nextButton.dataset.nextLesson, 1);
  });

  closeSummary.addEventListener("click", closeSummaryModal);
  summaryModal.addEventListener("click", (event) => {
    if (event.target === summaryModal) closeSummaryModal();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !summaryModal.hidden) closeSummaryModal();
  });
  textInput.addEventListener("input", updateSandbox);

  makeLanguageToggle();
  renderAll();
} else {
  renderStaticBraille();
}
