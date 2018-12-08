# 4.Figure four

[GO TO EDITOR](https://editor.p5js.org/bernatferragut/sketches/B1u1UOtkE)

<iframe 
frameborder="0" 
border="0" 
cellspacing="0"
style="
width: 732px; 
height: 500px; 
border: 4px solid #000000;
border-radius: 6px; 
overflow: hidden;
position: relative;"
src="https://editor.p5js.org/bernatferragut/embed/B1u1UOtkE"></iframe>



## 3.1 Coding Figure Four

```javascript
// FOURTH FIGURE v.1.0 - LLULLIAN FIGURES by BERNAT FERRGUT

// Vars
let w = window.innerWidth, h = window.innerHeight;
let diameter_1 = 90, diameter_2 = 235, diameter_3 = 300, diameter_4 = 365, diameter_5 = 430
let sides = 9, angle = 0.6981 // TWO_PI / 9 = 0.6981
const LETTERS_OUTSIDE = ['B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'K']
const LETTERS_MIDDLE = ['C', 'D', 'E', 'F', 'G', 'H', 'I', 'K', 'B']
const LETTERS_INSIDE = ['D', 'E', 'F', 'G', 'H', 'I', 'K', 'B', 'C']
let points = []
const COLORS = ['rgb(255,255,255)', 'rgb(0,0,0)', 'rgb(255,0,0)', 'rgb(0,255,43)', 'rgb(255,255,0)']
let printButton;

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
  ellipse(0, 0, diameter_4, diameter_4)
  ellipse(0, 0, diameter_5, diameter_5)
  // Lines + Letters + Triangles
  for (let n = 0; n < sides; n++) {
    // Lines
    strokeWeight(1)
    line(0, 0, 0, diameter_5 / 2)
    // Letters OUTER RING
    strokeWeight(0);
    LETTERS_OUTSIDE[n] = new Word(0, -diameter_4 / 2 - 17, 25, CENTER, LETTERS_OUTSIDE[n])
    LETTERS_MIDDLE[n] = new Word(0, -diameter_3 / 2 - 17, 25, CENTER, LETTERS_MIDDLE[n])
    LETTERS_INSIDE[n] = new Word(0, -diameter_2 / 2 - 17, 25, CENTER, LETTERS_INSIDE[n])
    if( n < 3) {
      LETTERS_OUTSIDE[n].build_regular(COLORS[3]);
      LETTERS_MIDDLE[n].build_regular(COLORS[3]);
      LETTERS_INSIDE[n].build_regular(COLORS[3]);
    }
    else if( n > 2 && n < 6) {
      LETTERS_OUTSIDE[n].build_regular(COLORS[2]);
      LETTERS_MIDDLE[n].build_regular(COLORS[2]);
      LETTERS_INSIDE[n].build_regular(COLORS[2]);
    }
    else{
      LETTERS_OUTSIDE[n].build_regular(COLORS[4]);
      LETTERS_MIDDLE[n].build_regular(COLORS[4]);
      LETTERS_INSIDE[n].build_regular(COLORS[4]);
    }
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
    p.x = diameter_1/2 * cos(angle * n + .525)
    p.y = diameter_1/2 * sin(angle * n + .525)
    strokeWeight(3)
    point(p.x, p.y);
    points.push(p)
  }
  console.table(points)
} 
```

**MIT Licensed | © 2018-2019 Bernat Ferragut All Right Reserved | [bernatferragut.com](http://bernatferragut.com/)**

