// GERNERAL TABLE v.1.0 - LLULLIAN FIGURES by BERNAT FERRGUT

// Vars
let w = window.innerWidth, h = window.innerHeight;
let diameter_2 = 535
// const LETTERS = ['B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'K']
const COLORS = ['rgb(255,255,255)', 'rgb(0,0,0)', 'rgb(255,0,0)', 'rgb(0,255,43)', 'rgb(255,255,0)']
let multiplier = 1, pairs = [], letterPairs
let chamberW = 63, chamberH = 21, font = 10, scaleFactor = 1.3// the proportions of the king's chanmber in Giza Pyramid
const LETTERS = ['B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'K']
let trios_A, trios_B


// P5JS functions
function setup() {
  createCanvas(w, h, SVG) // using the SVG 
  background(0)
  noLoop()
  rectMode(CENTER)
}

function draw() {
  // scale(scaleFactor)
  halfMatrix()
}

// functions ES6
const halfMatrix = () => {
  translate(w / 4.5, h / 9)
  noFill()
  stroke(COLORS[3])
  strokeWeight(0.5)

  // creatig TRIOS by HAND
  trios_A = [['B','C','D','T','E','F','G','H','I','K'],// 1
          ['B','C','T','B'],
          ['B','C','T','C'],
          ['B','C','T','D'],
          ['B','D','T','B'],
          ['B','D','T','C'],
          ['B','D','T','D'],
          ['B','T','B','C'],
          ['B','T','B','D'],
          ['B','T','C','D'],
          ['C','D','T','B'],
          ['C','D','T','C'],
          ['C','D','T','D'],
          ['C','T','B','C'],
          ['C','T','B','D'],
          ['C','T','C','D'],
          ['D','T','B','C'],
          ['D','T','B','D'],
          ['D','T','C','D'],
          ['T','B','C','D'],
          ['C','D','E','T'], // 2
          ['C','D','T','C'],
          ['C','D','T','D'],
          ['C','D','T','E'],
          ['C','E','T','C'],
          ['C','E','T','D'],
          ['C','E','T','E'],
          ['C','T','C','D'],
          ['C','T','C','E'],
          ['C','T','D','E'],
          ['D','E','T','C'],
          ['D','E','T','D'],
          ['D','E','T','E'],
          ['D','T','C','D'],
          ['D','T','C','E'],
          ['D','T','D','E'],
          ['E','T','C','D'],
          ['E','T','C','E'],
          ['E','T','D','E'],
          ['T','C','D','E'],
          ['D','E','F','T'], // 3
          ['D','E','T','D'],
          ['D','E','T','E'],
          ['D','E','T','F'],
          ['D','F','T','D'],
          ['D','F','T','E'],
          ['D','F','T','F'],
          ['D','T','D','E'],
          ['D','T','D','F'],
          ['D','T','E','F'],
          ['E','F','T','D'],
          ['E','F','T','E'],
          ['E','F','T','F'],
          ['E','T','D','E'],
          ['E','T','D','F'],
          ['E','T','E','F'],
          ['F','T','D','E'],
          ['F','T','D','F'],
          ['F','T','E','F'],
          ['T','D','E','F'],
          ['E','F','G','T'], // 4
          ['E','F','T','E'],
          ['E','F','T','F'],
          ['E','F','T','G'],
          ['E','G','T','E'],
          ['E','G','T','F'],
          ['E','G','T','G'],
          ['E','T','E','F'],
          ['E','T','E','G'],
          ['E','T','F','G'],
          ['F','G','T','E'],
          ['F','G','T','F'],
          ['F','G','T','G'],
          ['F','T','E','F'],
          ['F','T','E','G'],
          ['F','T','F','G'],
          ['G','T','G','F'],
          ['G','T','E','G'],
          ['G','T','F','G'],
          ['T','E','F','G'],
          ['F','G','H','T'], // 5
          ['F','G','T','F'],
          ['F','G','T','G'],
          ['F','G','T','H'],
          ['F','H','T','F'],
          ['F','H','T','H'],
          ['F','H','T','H'],
          ['F','T','F','G'],
          ['F','T','F','H'],
          ['F','T','G','H'],
          ['G','H','T','F'],
          ['G','H','T','G'],
          ['G','H','T','H'],
          ['G','T','F','G'],
          ['G','T','F','H'],
          ['G','T','G','H'],
          ['H','T','H','G'],
          ['H','T','F','H'],
          ['H','T','G','H'],
          ['T','F','G','H'],
          ['G','H','I','T'], // 6
          ['G','H','T','G'],
          ['G','H','T','H'],
          ['G','H','T','I'],
          ['G','I','T','G'],
          ['G','I','T','I'],
          ['G','I','T','I'],
          ['G','T','G','H'],
          ['G','T','G','I'],
          ['G','T','H','I'],
          ['H','I','T','G'],
          ['H','I','T','H'],
          ['H','I','T','I'],
          ['H','T','G','H'],
          ['H','T','G','I'],
          ['H','T','H','I'],
          ['I','T','I','H'],
          ['I','T','G','I'],
          ['I','T','H','I'],
          ['T','G','H','I'],
          ['H','I','K','T'], // 7
          ['H','I','T','H'],
          ['H','I','T','I'],
          ['H','I','T','K'],
          ['H','K','T','H'],
          ['H','K','T','K'],
          ['H','K','T','K'],
          ['H','T','H','I'],
          ['H','T','H','K'],
          ['H','T','I','K'],
          ['I','K','T','H'],
          ['I','K','T','I'],
          ['I','K','T','K'],
          ['I','T','H','I'],
          ['I','T','H','K'],
          ['I','T','I','K'],
          ['K','T','K','I'],
          ['K','T','H','K'],
          ['K','T','I','K'],
          ['T','H','I','K'],
          ]
          
  // creatig TRIOS by PROGRESSION
  trios_B = [LETTERS[0], LETTERS[1], LETTERS[2], LETTERS[3]]
  for (let i = 0; i < 120; i++) {
    console.log(LETTERS[i], LETTERS[i+1], LETTERS[i+2], LETTERS[i+3]) // modulo?
  }
  // console.log(trios_B)

  
  // half matrix building
  let i = 0 // this index will allow us to go over the hole pairs list
  for(let h = 0; h < 7; h++) {
    for(let v = 0; v < 20; v++) { // here we shrink the verical giving half matrix
    push()
      // Rectangle creation
      rect(h * chamberW, v * chamberH, chamberW, chamberH)
      // Trios caption
      trios = new Word(h * chamberW, v * chamberH, font, CENTER, trios_A[i][0] + trios_A[i][1] + trios_A[i][2] + trios_A[i][3])
      trios.build_regular(0)
      i++
    pop()
    }
  }
}




 





