# The third figure

[GO TO EDITOR](https://editor.p5js.org/bernatferragut/sketches/rk8EGuY1V)

<iframe 
frameborder="0" 
border="0" 
cellspacing="0"
style="
width: 732px; 
height: 350px; 
border: 4px solid #000000;
border-radius: 6px; 
overflow: hidden;
position: relative;"
src="https://editor.p5js.org/bernatferragut/embed/rk8EGuY1V"></iframe>


 The third figure is composed of the first and second figures, and it contains in itself thirty-six (36) cameras as shown. And each camera is universal for discovering all the particulars that are inquired about, as they are displayed in its light, following the practice of this art. And the investigation into particulars must be carried out by following the terms that are implicit in the question, or implied by it, as well as those that are explicitly or expressly found in it. This is done by evacuating any camera  to draw 12 propositions from it, and then to draw 24 questions from the propositions, while safeguarding the definitions and the rules that are implied in the said cameras through a scientific application of each principle to all the other principles, and each principle to each rule, and every rule to all the other rules.



## Coding Figure Three

```javascript
// THIRD FIGURE v.1.0 - LLULLIAN FIGURES by BERNAT FERRGUT

// Vars
let w = window.innerWidth, h = window.innerHeight;
let diameter_2 = 535
const LETTERS = ['B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'K']
const COLORS = ['rgb(255,255,255)', 'rgb(0,0,0)', 'rgb(255,0,0)', 'rgb(0,255,43)', 'rgb(255,255,0)']
let multiplier = 1, pairs = [], letterPairs
let chamberW = 84, chamberH = 42, font = 10, scaleFactor = 0.85// the proportions of the king's chanmber in Giza Pyramid


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
  translate(w / 5.25, h / 6)
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
```

**MIT Licensed | © 2018-2019 Bernat Ferragut All Right Reserved | [bernatferragut.com](http://bernatferragut.com/)**

