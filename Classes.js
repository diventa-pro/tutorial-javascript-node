'use strict'

// class definition
class Rectangle {

    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    area() {
        return this.height * this.width;
    }

    toString() {
        return `a ${this.width} x ${this.height} rectangle`
    }

}

// using the class
let r = new Rectangle(10, 20);
console.info( r.area() );

// The name of the class is a pointer to the constructor function
function inspect(x) {
    console.info( x );
    console.info( Object.keys(x) );
    console.info(new x(12,13).toString() );

}

function sum(a, b){
    return a + b;
}

console.info(`Inspecting 'Rectangle'`);
inspect(Rectangle)

console.info(`Inspecting 'sum'`);
inspect(sum)
