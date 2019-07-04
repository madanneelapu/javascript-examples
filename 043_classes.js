// classes

class Artist{
    constructor(name){ // constructor is a reserved keyword
        this.name = name;
    }

    perform(){
        console.log(`${this.name} is perfroming on stage tonight`);
    }
}

const artist = new Artist('Madan');
console.log(artist);
artist.perform();


// Inheritance

class Dancer extends Artist{
    constructor(name, style){
        super(name);
        this.style = style;
    }

    dance(){
        console.log(`${this.name} does ${this.style}`);
    }
}

const dancer = new Dancer('John Doe','Hip-Hop');
dancer.perform();
dancer.dance();