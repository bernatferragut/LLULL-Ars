// CODE

class Word {
    constructor(x, y, s, align, text ) {
        this.x =  x;
        this.y = y;
        this.s = s;
        this.align = align;
        this.text = text;
    }

    build_main(color1, color2) {
        fill(color1)
        ellipse(this.x, this.y, 90, 90);
        fill(color2);
        textFont("IBM Plex Mono");
        textAlign(this.align, this.align);
        textSize(this.s);
        text(this.text, 0, 0);
    }

    build_regular(color) {
        noStroke()
        fill(color)
        textFont("IBM Plex Mono");
        textAlign(this.align, this.align);
        textSize(this.s);
        text(this.text, this.x, this.y);
    }
}

