// FIRST FIGURE v.1.0 - LLULLIAN FIGURES by BERNAT FERRGUT

// Circles Golden Ratios radius: 65, 170, 342
// 2PI / 9 = 0.69813170079
let rad1 = 65;
let rad2 = 170;
let rad3 = 342;
let ang2 = 0.01;
// storing dots
let dotsRad2 = [];

// Alphabet object
let A = [
  {
    letter: "B",
    name: "Goodness",
    relationship: "Difference",
    question: "Whether?",
    subject: "God",
    virtue: "Justice",
    vice: "Avarice"
  },
  {
    letter: "C",
    name: "Greatness",
    relationship: "Concordance",
    question: "What?",
    subject: "Angel",
    virtue: "Prudence",
    vice: "Gluttony"
  },
  {
    letter: "D",
    name: "Eternity",
    relationship: "Contrariety",
    question: "Of what?",
    subject: "Heaven",
    virtue: "Fortitude",
    vice: "Lust"
  },
  {
    letter: "E",
    name: "Power",
    relationship: "Beginning",
    question: "Why?",
    subject: "Man",
    virtue: "Temperance",
    vice: "Pride"
  },
  {
    letter: "F",
    name: "Wisdom",
    relationship: "Middle",
    question: "How much?",
    subject: "Imaginative",
    virtue: "Faith",
    vice: "Accidie"
  },
  {
    letter: "G",
    name: "Will",
    relationship: "End",
    question: "Of what kind?",
    subject: "Sensitive",
    virtue: "Hope",
    vice: "Envy"
  },
  {
    letter: "H",
    name: "Virtue",
    relationship: "Majority",
    question: "When?",
    subject: "Vegetative",
    virtue: "Charity",
    vice: "Ire"
  },
  {
    letter: "I",
    name: "Truth",
    relationship: "Equality",
    question: "Where?",
    subject: "Elementative",
    virtue: "Patience",
    vice: "Lying"
  },
  {
    letter: "K",
    name: "Glory",
    relationship: "Minority",
    question: "How and with who?",
    subject: "Instrumentative",
    virtue: "Pity",
    vice: "Inconstancy"
  }
]

// Canvas vars
let w = window.innerWidth, h = window.innerHeight;
// Fonts
let ibmFont;
let firstWord;

// P5JS functions
function setup() {
  createCanvas(w, h);
  background(0);
}

function draw() {
  // background(0)
   // Lines
   translate(w/2, h/2);
   for ( ang2 = 0; ang2 < TWO_PI; ang2 += 0.69813170079) {
    let pX = rad2 * cos(ang2);
    let pY = rad2 * sin(ang2);
    strokeWeight(1);
    line(0, 0, pX, pY);
    // Points
    strokeWeight(8);
    point(pX, pY);
   }

  // A
  strokeWeight(1);
  firstWord = new Word(0, 0, 40, CENTER, 'A');
  firstWord.build();
  // Circles
  noFill();
  stroke(255)
  ellipse(0, 0, 340, 340);
  ellipse(0, 0, 400, 400);
  // move angle
  // ang2 += 0.69813170079;


}
