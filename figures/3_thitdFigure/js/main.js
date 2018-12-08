// THIRD FIGURE v.1.0 - LLULLIAN FIGURES by BERNAT FERRGUT

// Vars
let w = window.innerWidth, h = window.innerHeight;
let diameter_2 = 535
const LETTERS = ['B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'K']
const COLORS = ['rgb(255,255,255)', 'rgb(0,0,0)', 'rgb(255,0,0)', 'rgb(0,255,43)', 'rgb(255,255,0)']
let multiplier = 1, pairs = [], letterPairs
let chamberW = 121, chamberH = 42, font = 10, scaleFactor = 1.3// the proportions of the king's chanmber in Giza Pyramid


// P5JS functions
function setup() {
  createCanvas(w, h, SVG) // using the SVG 
  background(0)
  noLoop()
  rectMode(CENTER)
}

function draw() {
  scale(scaleFactor)
  halfMatrix()
}

// functions ES6
const halfMatrix = () => {
  translate(w / 4.5, h / 9)
  noFill()
  stroke(COLORS[3])
  strokeWeight(0.5)

  // creatig PAIRS
  pairs = pairwiseA(LETTERS)
  console.table(pairs)
  
  // half matrix building
  let i = 0 // this index will allow us to go over the hole pairs list
  for(let h = 0; h < 8; h++) {
    for(let v = 0; v < 8 - h; v++) { // here we shrink the verical giving half matrix
    push()
      // Rectangle creation\
      rect(h * chamberW, v * chamberH, chamberW, chamberH)
      // Pairs creation
      letterPairs = new Word(h * chamberW, v * chamberH, font, CENTER, pairs[i][0] + pairs[i][1])
      letterPairs.build_regular(0)
      i++
    pop()
    }
  }
}

// COMBINATRONICS
function pairwiseA(list) {
  if (list.length < 2) { return []; }
  var first = list[0],
      rest  = list.slice(1),
      pairs = rest.map(function (x) { return [first, x]; });
  return pairs.concat(pairwiseA(rest));
}

function pairwiseB(list) {
  var pairs = [];
  list
    .slice(0, list.length - 1)
    .forEach(function (first, n) {
      var tail = list.slice(n + 1, list.length);
      tail.forEach(function (item) {
        pairs.push([first, item])
      });
    })
  return pairs;
}
