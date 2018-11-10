# 5.ARS GENERALIS ULTIMA
## 5.1 THEORY

## 5.2 CODE - LLULLIAN DIVINITIES

[GO TO EDITOR](https://editor.p5js.org/bernatferragut/sketches/BkqUfLnum)

<iframe 
frameborder="0" 
border="0" 
cellspacing="0"
style="
width: 732px; 
height: 250px; 
border: 4px solid #000000;
border-radius: 6px;
overflow: hidden;
position: relative;"
src="https://editor.p5js.org/embed/BkqUfLnum"></iframe>



```javascript
// LLULLIAN DIVINITIES - v.1.0 - by Bernat Ferragut

// DIVINITY OBJECT CREATION - 7 Params
class Divinity {
    constructor(letter, name, relationship, question, subject, virtue, vice ) {
        this.letter = letter;
        this.name = name;
        this.relationship = relationship;
        this.question = question;
        this.subject = subject;
        this.virtue = virtue;
        this.vice = vice;
    }

    divinityProps() {
        console.log(`
        #${this.letter}----------------------
        Divinity: ${this.name} 
        Relationship: ${this.relationship} 
        Question: ${this.question} 
        Subject: ${this.subject}
        Virtue: ${this.virtue} 
        Vice: ${this.vice}
        ------------------------
        `);
    }
}

// 9 DIVINITIES CREATION
let B = new Divinity('B','Goodness', 'Difference', 'Whether?', 'God', 'Justice', 'Avarice' );
let C = new Divinity('C','Greatness', 'Concordance', 'What?', 'Angel', 'Prudence', 'Gluttony' );
let D = new Divinity('D','Eternity', 'Contrariety', 'Of what?', 'Heaven', 'Fortitude', 'Lust' );
let E = new Divinity('E','Power', 'Beginning', 'Why?', 'Man', 'Temperance', 'Pride' );
let F = new Divinity('F','Wisdom', 'Middel', 'How much?', 'Imaginative', 'Faith', 'Accidie' )
let G = new Divinity('G','Will', 'End', 'Of what kind?', 'Sensitive', 'Hope', 'Envy' );
let H = new Divinity('H','Virtue', 'Majority', 'When?', 'Vegetative', 'Charity', 'Ire' );
let I = new Divinity('I','Truth', 'Equality', 'Where?', 'Elementative', 'Patience', 'Lying' );
let K = new Divinity('K','Glory', 'Minority', 'How?', 'Instrumentative', 'Pity', 'Inconstancy' );


// DIVINE OBJECT CREATION - CHAIN OF DIVINITIES CREATION
class Divine {
    constructor(){
        this.divineChain = [];
    }

    addDivinity(divinity) {
        this.divineChain.push(divinity);
    }

    randomNumber(){
        return Math.floor(Math.random()* 8) ;
    }
}

// CREATE The A Divine Chain made of 9 Divinities Objects
const A = new Divine();
A.addDivinity(B);
A.addDivinity(C);
A.addDivinity(D);

A.addDivinity(E);
A.addDivinity(F);
A.addDivinity(G);

A.addDivinity(H);
A.addDivinity(I);
A.addDivinity(K);

// LOGS
console.table(A);
console.table(JSON.stringify(A,null,2));
console.log(typeof(A));
console.log(A.divineChain[A.randomNumber()]);

// WE COULD INCORPORATE ASPECTS OF A BLCKCHAIN IN IT 

```

## 5.3 CODE - LLULLIAN ALPHABET

::: tip
Representation of the Llullian Alphabet as a list of Javascriot objects or divinities
:::


```javascript
// LLULLIAN ALPHABET - ARS BREVIS

let A = [
    {
      letter : "B",
      name : "Goodness",
      relationship : "Difference",
      question : "Whether?",
      subject : "God",
      virtue : "Justice",
      vice : "Avarice"
    },
    {
      letter : "C",
      name : "Greatness",
      relationship : "Concordance",
      question: "What?",
      subject: "Angel",
      virtue: "Prudence",
      vice: "Gluttony"
    },
    {
      letter: "D",
      name: "Eternity",
      relationship: "Contrariety",
      question: "Of what?",
      subject : "Heaven",
      virtue: "Fortitude",
      vice: "Lust"
    },
    {
      letter: "E",
      name: "Power",
      relationship: "Beginning",
      question: "Why?",
      subject: "Man",
      virtue: "Temperance",
      vice: "Pride"
    },
    {
      letter: "F",
      name: "Wisdom",
      relationship: "Middle",
      question: "How much?",
      subject: "Imaginative",
      virtue: "Faith",
      vice: "Accidie"
    },
    {
      letter: "G",
      name: "Will",
      relationship: "End",
      question: "Of what kind?",
      subject: "Sensitive",
      virtue: "Hope",
      vice: "Envy"
    },
    {
      letter: "H",
      name: "Virtue",
      relationship: "Majority",
      question: "When?",
      subject: "Vegetative",
      virtue: "Charity",
      vice: "Ire"
    },
    {
      letter: "I",
      name: "Truth",
      relationship: "Equality",
      question: "Where?",
      subject: "Elementative",
      virtue: "Patience",
      vice: "Lying"
    },
    {
      letter: "K",
      name: "Glory",
      relationship: "Minority",
      question: "How and with who?",
      subject: "Instrumentative",
      virtue: "Pity",
      vice: "Inconstancy"
    }
  ]

  // LLULLIAN ALPHABET

```





**MIT Licensed | © 2018-2019 Bernat Ferragut All Right Reserved | [bernatferragut.com](http://bernatferragut.com/)**

