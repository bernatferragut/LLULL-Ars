// FIRST FIGURE v.1.0 - LLULLIAN FIGURES by BERNAT FERRGUT

// Vars
let w = window.innerWidth, h = window.innerHeight;
let diameter_1 = 90, diameter_2 = 235, diameter_3 = 300, diameter_4 = 450
let sides = 9, angle = 0.6981 //  TWO_PI / 9 = 0.6981
let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'K']
let divinities = ['Goodness', 'Greatness', 'Eternity', 'Power', 'Wisdom', 'Will', 'Virtue', 'Truth', 'Glory']
let points = []
let colors = ['rgb(255,255,255)', 'rgb(0,0,0)', 'rgb(255,0,0)', 'rgb(0,255,43)', 'rgb(255,255,0)']

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
  stroke(colors[0])
  strokeWeight(.5)
  ellipse(0, 0, diameter_2, diameter_2)
  ellipse(0, 0, diameter_3, diameter_3)
  ellipse(0, 0, diameter_3 + 9, diameter_3 + 9)
  // Lines + Letters
  for (let n = 0; n < sides; n++) {
    strokeWeight(1)
    line(0, 0, 0, diameter_3 / 2)
    // Divinities
    strokeWeight(0);
    letters[n] = new Word(0, -diameter_2 / 2 - 17, 25, CENTER, letters[n + 1])
    letters[n].build_regular();
      // divinities[n] = new Word(0, -diameter_3 /2 - 17, 8, CENTER, divinities[n])
      // divinities[n].build_regular();
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
  for (let n =0 ; n < 9; n++) {
    let p = {};
    p.x = diameter_2/2 * cos(angle * n + .525)
    p.y = diameter_2/2 * sin(angle * n + .525)
    strokeWeight(5)
    point(p.x, p.y);
    points.push(p)
  }
  // console.table(points)
  // Connecting dots
  for(let i = 0; i < points.length; i++) {
    for ( let j =0; j < points.length; j++ ){
      push()
      stroke(colors[3])
      strokeWeight(0.25) 
      line(points[i].x, points[i].y, points[j].x, points[j].y);
      pop()
    }
  }
  // A
  strokeWeight(1);
  letters[0] = new Word(0, 0, 50, CENTER, 'A')
  letters[0].build_main()
} 