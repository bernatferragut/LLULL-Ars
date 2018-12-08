// ALPHABET v.1.0 - LLULLIAN FIGURES by BERNAT FERRGUT

// Vars
let w = window.innerWidth, h = window.innerHeight;
let diameter_2 = 535
// const LETTERS = ['B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'K']
const COLORS = ['rgb(255,255,255)', 'rgb(0,0,0)', 'rgb(255,0,0)', 'rgb(0,255,43)', 'rgb(255,255,0)', 'rgb(126,249,255)', 'rgb(255,51,51)']
let multiplier = 1, pairs = [], letterPairs
let chamberW = 63, chamberH = 42, font = 10, scaleFactor = 1.3// the proportions of the king's chanmber in Giza Pyramid
const LETTERS = ['B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'K']
let alphabet

// Llullian Alphabet
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

// P5JS functions
function setup() {
  createCanvas(w, h, SVG) // using the SVG 
  background(0)
  noLoop()
  rectMode(CENTER)
}

function draw() {
  // scale(1.2)
  matrix()
  console.log()
}

// functions ES6
const matrix = () => {
  translate(w / 4.5, h / 9)
  noFill()
  stroke(COLORS[3])
  strokeWeight(0.5)

  // matrix building
  let i = 0 
  for (let h = 0; h < 7; h++) {
    for (let v = 0; v < 9; v++) { 
      push()
      // Rectangle creation
      // stroke(255)
      rect(h * chamberW, v * chamberH, chamberW, chamberH)
      // alphabet
      if ( i < 9) {
        alphabet = new Word(h * chamberW, v * chamberH, font, CENTER, A[i % 9].letter)
        if( i <3 ) {
          alphabet.build_regular(COLORS[2])
        } else if( i > 2 && i < 6) {
          alphabet.build_regular(COLORS[4])
        } else {
          alphabet.build_regular(COLORS[3])
        }

      } else if ( i > 8 && i <18 )  {
        alphabet = new Word(h * chamberW, v * chamberH, font, CENTER, A[i % 9].name)
        if( i <12 ) {
          alphabet.build_regular(COLORS[2])
        } else if( i > 11 && i < 15) {
          alphabet.build_regular(COLORS[4])
        } else {
          alphabet.build_regular(COLORS[3])
        }

      } else if ( i > 17 && i <27 ) {
        alphabet = new Word(h * chamberW, v * chamberH, font, CENTER, A[i % 9].question)
        if( i <21 ) {
          alphabet.build_regular(COLORS[2])
        } else if( i > 20 && i < 24) {
          alphabet.build_regular(COLORS[4])
        } else {
          alphabet.build_regular(COLORS[3])
        }
      }  else if ( i > 26 && i <36 ) {
        alphabet = new Word(h * chamberW, v * chamberH, font, CENTER, A[i % 9].relationship)
        if( i <30 ) {
          alphabet.build_regular(COLORS[2])
        } else if( i > 29 && i < 33) {
          alphabet.build_regular(COLORS[4])
        } else {
          alphabet.build_regular(COLORS[3])
        }
      } else if ( i > 35 && i <45 ) {
        alphabet = new Word(h * chamberW, v * chamberH, font, CENTER, A[i % 9].subject)
        alphabet.build_regular(COLORS[0]) 
      }  else if ( i > 44 && i <54 ) {
        alphabet = new Word(h * chamberW, v * chamberH, font, CENTER, A[i % 9].virtue)
        alphabet.build_regular(COLORS[5])
      } else {
        alphabet = new Word(h * chamberW, v * chamberH, font, CENTER, A[i % 9].vice)
        alphabet.build_regular(COLORS[6])
      }
      i++
      pop()
    }
  }
}










