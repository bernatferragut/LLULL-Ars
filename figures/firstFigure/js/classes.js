// CODE

class Word {
    constructor(x, y, s, align, text ) {
        this.x =  x;
        this.y = y;
        this.s = s;
        this.align = align;
        this.text = text;
    }

    build() {
        fill(255);
        ellipse(this.x, this.y, 130, 130);
        fill(0);
        textFont("IBM Plex Mono");
        textAlign(this.align, this.align);
        textSize(this.s);
        text(this.text, 0, 0);
    }
}

