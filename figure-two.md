# The Second Figure

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


The second figure is made of three general triangles, and in the process of mixture it is subservient to the first figure, as in putting questions or drawing conclusions we look at the species of the principles of the triangles applied to the proposed question without destroying their relations. In this way, the triangles are instruments or subjects used for discovering any particular in its universal context, so that through the things that we know, we can arrive at a knowledge of the things we do not know.

* The Green Triangle 
* The Red Triangle 
* The Saffron Triangle

## The Green Triangle 
1. The second figure is called Figure T. This figure contains three Triangles, each of which is general to all things.

The first triangle is of Difference, Concordance and Contrariety, in which all and everything can be found, in various ways. For whatever exists, has either some Difference, or some Concordance, or some Contrariety, and outside of these principles, nothing at all can be found.

2 We must know, moreover, that each Angle of this Triangle has three species.

For there is Difference between some sensual things and others, as between a stone and a tree.
Also between sensual an intellectual things:as between the body, and the rational soul.
Moreover, between some intellectual beings and others, as between the soul, and GOD, or between one Angel and another, or between GOD, and angels.

And the same things can be said in their own way regarding Concordance and Contrariety.
3. And this difference which exists in each Angle of this Triangle, is a ladder, or scale for the intellect, on which it ascends and descends, so it can find the natural medium between the subject and the predicate, and with this medium it can reach a conclusion, and declare its propositions. And likewise with the scales of Concordance and of Contrariety, that can thus be treated each in its own way.

## The Red Triangle 
The second Triangle consists of Beginning, Middle and End, and it encompasses whatever exists. For whatever is in existence, is either in the Beginning, or in the Middle, or in the End; and without these principles, nothing at all can be found.

5. In the angle of the Beginning, Cause means the Efficient, Material, Formal and Final Causes. 
Quantity and Time, stand for the rest of the Nine Predicaments, and all the things that can be reduced to them. (Quantity, Quality, Time, Action, Passion, Relation, Situation, Place, and Habit.)

6. In the angle of the Middle, there are three species, namely the 
Medium of Conjunction existing between the subject, and the predicate: as when we say "man is animal", as between "man", and "animal" there is a medium or middle term, which is life, and the physical body, without which man cannot be an animal. 
7. There is also the Medium of Measurement, that exists through the act existing between the Active and the Passive, like loving between the lover and the beloved. 
8. And there is yet another Middle, between Extremities, like a line existing between two points And thus the Angle of the Middle is a general scale for the intellect.

9. The Angle of the End has three species. The first of these is the 
End of Privation, which signifies a privative habit, as well as things in time past, as death is an end to life. 
10. The second species is the End of Termination, which signifies the limits of a thing, like two points in which a line terminates, like loving in the lover and the beloved. 
11. The third species is the End of Perfection, which is the ultimate end of all ends, as man, who exists for the end of multiplying his species, and of understanding, loving and remembering GOD and things like these. And this Angle of the End is also a general scale for the intellect.

## The Saffron Triangle 
12. The Third Triangle consists of Majority, Equality and Minority. And it is General to all things in its own way, for whatever exists, is either in Majority, or in Equality, or in Minority.

13. Majority has three species. The first is when there is Majority between Substance and Substance, as for instance the substance of the heavens, which is greater than the substance of fire. 
The second species is when there is Majority between Substance and Accident: as a Substance that is greater in its quantity than another substance. Substance exists on its own, which is not at all the case for Accidents. 
The third species is when there is Majority between one accident and another accident, as understanding, which is an accident that is greater than seeing, and seeing than running. And the things said about Majority can equally be said about Minority, as the two are related.

14. The Angle of Equality has three species. 
The first is when things are substantially equal, as Peter and Martin, who are equally of human substance. 
The second species is when substance and accident are equal, as is the case with substance, and its quantity. 
15. The third species is when there is equality between one accident and another, as is the case with understanding and loving, which are equal in their object, and this Angle of Equality is a scale for the intellect, on which it ascends to General objects at which time it is General, and when it descends to particular objects, then it is particular. 
16. This Figure T. is subservient to the First Figure, and this is through the Difference between one Goodness and another Goodness, one Greatness and another greatness etc. And through this Figure joined to the First, the intellect acquires its science, and because this Figure is general, so the intellect is also general.

## Coding figure two

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

