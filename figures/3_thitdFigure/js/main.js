// THIRD FIGURE v.1.0 - LLULLIAN FIGURES by BERNAT FERRGUT

// Vars
let w = window.innerWidth, h = window.innerHeight;
let diameter_2 = 535
const LETTERS = ['B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'K']
const COLORS = ['rgb(255,255,255)', 'rgb(0,0,0)', 'rgb(255,0,0)', 'rgb(0,255,43)', 'rgb(255,255,0)']
let multiplier = 1, pairs = [], letterPairs


// P5JS functions
function setup() {
  createCanvas(w, h, SVG) // using the SVG 
  background(0)
  noLoop()
  rectMode(CENTER)
}

function draw() {
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
  for(let h = 0; h < 8; h++) {
    for(let v = 0; v < 8 - h; v++) {
    push()
      // Rectangle creation\
      rect(h * 75, v * 50, 75, 50)
      // Pairs creation
      letterPairs = new Word(h * 75, v * 50, 10, CENTER, pairs[h][0] + pairs[v][1])
      letterPairs.build_regular(0)
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
