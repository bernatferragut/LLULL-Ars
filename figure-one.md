# The First Figure

[GO TO EDITOR](https://editor.p5js.org/bernatferragut/sketches/HkO4HfkAX)

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
src="https://editor.p5js.org/bernatferragut/embed/HkO4HfkAX"></iframe>


There are 4 Figures in this art, as shown, the first of which is called the circular figure, and it is designated by the letter A written in its center. And it consists in the first 9 principles of this art, but in a manner that is meant to signify that every one of its principles is included in all the other principles, in what is called a circular way. And such a mixture can be made by declining the correlatives of each principle, as for instance, by saying "active goodness, passive goodness and the act of doing good," which are the proper correlatives of goodness, and likewise with the other principles that all are mutually convertible through these correlatives. In this way, of themselves they compose substance, and show forth GOD and his Dignities so that the intellect can have true knowledge. This is because they actively inform every idea, and as the constituting parts of substance they are true, and necessary, and primordial to whatever else is derived from them.

## Coding Figure One

```javascript
// FIRST FIGURE v.1.0 - LLULLIAN FIGURES by BERNAT FERRGUT

// Vars
// let w = window.innerWidth, h = window.innerHeight;
let w = 732, h = 500;
let diameter_1 = 90, diameter_2 = 235, diameter_3 = 300, diameter_4 = 450
let sides = 9, angle = 0.6981 // TWO_PI / 9 = 0.6981
const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'K']
const DIVINITIES = ['Goodness', 'Greatness', 'Eternity', 'Power', 'Wisdom', 'Will', 'Virtue', 'Truth', 'Glory']
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
    // Divinities
    strokeWeight(0);
    LETTERS[n] = new Word(0, -diameter_2 / 2 - 17, 25, CENTER, LETTERS[n + 1])
    LETTERS[n].build_regular(COLORS[0]);
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
      stroke(COLORS[3])
      strokeWeight(0.25) 
      line(points[i].x, points[i].y, points[j].x, points[j].y);
      pop()
    }
  }
  // A
  strokeWeight(1);
  LETTERS[0] = new Word(0, 0, 50, CENTER, 'A')
  LETTERS[0].build_main(COLORS[1], COLORS[0])
} 
```

**MIT Licensed | © 2018-2019 Bernat Ferragut All Right Reserved | [bernatferragut.com](http://bernatferragut.com/)**

