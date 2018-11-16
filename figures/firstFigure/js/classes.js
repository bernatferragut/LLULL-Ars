// CODE

let cols = ['rgb(255,255,255)', 'rgb(0,0,0)', 'rgb(255,0,0)', 'rgb(0,255,43)', 'rgb(255,255,0)']

class Word {
    constructor(x, y, s, align, text ) {
        this.x =  x;
        this.y = y;
        this.s = s;
        this.align = align;
        this.text = text;
    }

    build_main() {
        fill(0)
        ellipse(this.x, this.y, 90, 90);
        fill(cols[0]);
        textFont("IBM Plex Mono");
        textAlign(this.align, this.align);
        textSize(this.s);
        text(this.text, 0, 0);
    }

    build_regular() {
        fill(cols[0]);
        textFont("IBM Plex Mono");
        textAlign(this.align, this.align);
        textSize(this.s);
        text(this.text, this.x, this.y);
    }
}

