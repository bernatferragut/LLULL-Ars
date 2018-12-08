# 3.Figure Two

[GO TO EDITOR](https://editor.p5js.org/bernatferragut/sketches/By1Ng_KJE)

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
src="https://editor.p5js.org/bernatferragut/embed/By1Ng_KJE"></iframe>


## 3.1 Coding Figure Two

```javascript
/// SECOND FIGURE v.1.0 - LLULLIAN FIGURES by BERNAT FERRGUT

// Vars
let w = window.innerWidth, h = 500;
let diameter_1 = 90, diameter_2 = 235, diameter_3 = 285, diameter_4 = 335, diameter_5 = 385, diameter_6 = 450
let sides = 9, angle = 0.6981 // TWO_PI / 9 = 0.6981
const LETTERS = ['B', 'E', 'H', 'C', 'F', 'I', 'D', 'G', 'K']
const T_GREEN = ['intel & intel', 'cause', 'subst & subs', 
              'intel & intel', 'conjunction', 'subst & subst',
              'intel & intel', 'privation', 'subst & subst']
const T_RED = ['sensual & intel', 'quantity', 'subst & accid',
                'sensual & intel', 'mensuration', 'subst & accid',
                'sensual & intel', 'termination', 'subst & accid']
const T_YELLOW = [ 'sensual & sens', 'time', 'accid & accid',
              'sensual & sens', 'extremes', 'accid & accid',
              'sensual & sens', 'perfection', 'accid & accid',]
const T_INSIDE = ['diff', 'beg', 'maj', 'con', 'mid', 'equal', ' contra', 'end', 'min']
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
  ellipse(0, 0, diameter_6, diameter_6)
  // Lines + Letters + Triangles
  for (let n = 0; n < sides; n++) {
    // Lines
    strokeWeight(1)
    line(0, 0, 0, diameter_6 / 2)
    // Letters
    strokeWeight(0);
    LETTERS[n] = new Word(0, -diameter_5 / 2 - 17, 25, CENTER, LETTERS[n])
    if( n == 0 || n == 3 || n == 6) {
      LETTERS[n].build_regular(COLORS[3]);
    }
    else if( n == 1 || n == 4 || n == 7) {
      LETTERS[n].build_regular(COLORS[2]);
    }
    else{
      LETTERS[n].build_regular(COLORS[4]);
    }
    
    // Triangles content
    T_GREEN[n] = new Word(0, -diameter_4 / 2 - 12, 8, CENTER, T_GREEN[n])
    T_GREEN[n].build_regular(COLORS[0]);
    T_RED[n] = new Word(0, -diameter_3 / 2 - 12, 8, CENTER, T_RED[n])
    T_RED[n].build_regular(COLORS[0]);
    T_YELLOW[n] = new Word(0, -diameter_2 / 2 - 12, 8, CENTER, T_YELLOW[n])
    T_YELLOW[n].build_regular(COLORS[0]);
    // T_INSIDE[n] = new Word(0, -diameter_2 / 2 + 1, 8, CENTER, T_INSIDE[n])
    // T_INSIDE[n].build_regular(COLORS[0]);

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
  console.table(points)
  // Connecting dots triangles
    push()
    noFill()
    strokeWeight(0.5) 
    stroke(COLORS[3])
    triangle(points[6].x, points[6].y,points[0].x, points[0].y,points[3].x, points[3].y);
    stroke(COLORS[2])
    triangle(points[7].x, points[7].y,points[1].x, points[1].y,points[4].x, points[4].y);
    stroke(COLORS[4])
    triangle(points[8].x, points[8].y,points[2].x, points[2].y,points[5].x, points[5].y);
    pop()
      // Lines + Letters + Triangles
  for (let n = 0; n < sides; n++) {
    strokeWeight(0);
    T_INSIDE[n] = new Word(0, -diameter_2 / 2 + 33, 8, CENTER, T_INSIDE[n])
    if( n == 0 || n == 3 || n == 6) {
      T_INSIDE[n].build_regular(COLORS[3]);
    }
    else if( n == 1 || n == 4 || n == 7) {
      T_INSIDE[n].build_regular(COLORS[2]);
    }
    else{
      T_INSIDE[n].build_regular(COLORS[4]);
    }
    rotate(angle)
  }

  // A
  strokeWeight(1);
  LETTERS[0] = new Word(0, 0, 50, CENTER, 'T')
  LETTERS[0].build_main(COLORS[1], COLORS[0])
} 
```

**MIT Licensed | © 2018-2019 Bernat Ferragut All Right Reserved | [bernatferragut.com](http://bernatferragut.com/)**

