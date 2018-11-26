// THIRD FIGURE v.1.0 - LLULLIAN FIGURES by BERNAT FERRGUT

// Vars
let w = window.innerWidth, h = window.innerHeight;
let diameter_1 = 90, diameter_2 = 235, diameter_3 = 300, diameter_4 = 450
let sides = 18, angle = 0.3450 // TWO_PI / 9 = 0.6981
const LETTERS = ['B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'K', 
                  '1', '2', '3', '4', '5', '6', '7', '8', '9']
const DIVINITIES = ['Goodness', 'Greatness', 'Eternity', 'Power', 'Wisdom', 'Will', 'Virtue', 'Truth', 'Glory',
                    'Goodness', 'Greatness', 'Eternity', 'Power', 'Wisdom', 'Will', 'Virtue', 'Truth', 'Glory']
let points = []
const COLORS = ['rgb(255,255,255)', 'rgb(0,0,0)', 'rgb(255,0,0)', 'rgb(0,255,43)', 'rgb(255,255,0)']

// P5JS functions
function setup() {
  createCanvas(w, h, SVG) // using the SVG 
  background(0)
  noLoop()
  // angleMode(DEGREES)
  rectMode(CENTER)
}

function draw() {
  figure_one()
}

// functions
function figure_one() {
  // Origin
  translate(w / 2, h / 2)
  // Circles
  noFill()
  stroke(COLORS[0])
  strokeWeight(.5)
  ellipse(0, 0, diameter_2, diameter_2)
  ellipse(0, 0, diameter_3, diameter_3)
  ellipse(0, 0, diameter_3 + 33, diameter_3 + 33)
  // Lines + Letters
  for (let n = 0; n < sides; n++) {
    strokeWeight(1)
    line(0, 0, 0, diameter_3 / 2 + 16 )
    // Letters
    strokeWeight(0);
    LETTERS[n] = new Word(0, -diameter_2 / 2 - 17, 25, CENTER, LETTERS[n])
    LETTERS[n].build_regular(COLORS[0]);
    // Divinities
    DIVINITIES[n] = new Word(0, -diameter_3 /2 - 8, 8, CENTER, DIVINITIES[n])
    DIVINITIES[n].build_regular(COLORS[0]);
    // Rotation
    rotate(angle)
  }
  // ellipse that covers some lines
  push()
  noStroke()
  fill(0)
  ellipse(0, 0, diameter_2-.5, diameter_2-.5)
  pop()
  // Points
  for (let n =0 ; n < sides; n++) {
    let p = {};
    p.x = diameter_2/2 * cos(angle * n + .75)
    p.y = diameter_2/2 * sin(angle * n + .75)
    strokeWeight(5)
    point(p.x, p.y);
    points.push(p)
  }
  console.table(points)
  // Connecting dots
  for(let i = 0; i < points.length; i++) {
    for ( let j =0; j < points.length; j++ ){
      push()
      stroke(COLORS[3])
      strokeWeight(0.25) 
      line(points[i].x, points[i].y, points[j].x, points[j].y);
      pop()
    }
  }
  // A
  strokeWeight(1);
  LETTERS[0] = new Word(0, 0, 50, CENTER, 'V')
  LETTERS[0].build_main(COLORS[1], COLORS[0])
} 




