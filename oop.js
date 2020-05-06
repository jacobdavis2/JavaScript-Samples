// Object Oriented Porgramming in JavaScript example
// by Jacob Davis
// Revature 2020
// (work in progress)

// In this example we'll be going through how to achieve some
//  OOP concepts in basic JavaSript. The ideas we will cover include:
//   1. Ways to define a class
//   2. Ways to instantiate a class
//   3. Ways to inherit from a class

// The first lesson to consider in basic JS is that everything
// is an object: strings, numbers, and even functions. If you
// know about closures, then treating functions as full-
// fledged classes is only a small stretch.

// Here's an example class plus usage.
function Computer(name, ramSizeGb, cpuCores, cpuSpeedGhz) {
    this.name = name;
    this.ramSizeGb = ramSizeGb;
    this.cpuCores = cpuCores;
    this.cpuSpeedGhz = cpuSpeedGhz;

    this.printSpecs = function() {
        console.log("This computer is named " + name + ". It has " + ramSizeGb + " GB RAM, and a " + cpuCores + "-core, " + cpuSpeedGhz + "GHz processor.");
    }
}

var myComputer = new Computer("MyPC", 4, 4, 3.2);
myComputer.printSpecs();

// Things to note:
//  1. The function Computer is known as a constructor function. It 
//      may look quite familiar to Java programmers, as it takes
//      properties and sets them using 'this'. However, in JS,
//      functions are also properties to be set, so the constructor
//      doubles as a class definition, practically speaking.
//
//  2. The function is called with 'new', also reminiscent of Java.
//      Without 'new', nothing would happen, as Computer actually
//      doesn't ever use 'return'. New creates an empty object and
//      calls Constructor in the context of that object, thereby
//      attaching 'this' to the object and setting those properties.

// In regards to #2 above, we could rewrite the constructor like so:
function ComputerRewrite(name, ramSizeGb, cpuCores, cpuSpeedGhz) {
    var obj = {};

    obj.name = name;
    obj.ramSizeGb = ramSizeGb;
    obj.cpuCores = cpuCores;
    obj.cpuSpeedGhz = cpuSpeedGhz;

    obj.printSpecs = function() {
        console.log("This computer is named " + name + ". It has " + ramSizeGb + " GB RAM, and a " + cpuCores + "-core, " + cpuSpeedGhz + "GHz processor.");
    }

    return obj;
}

// And use it like so:
var myComputerRw = ComputerRewrite("MyBetterPC", 8, 8, 4.2);
myComputerRw.printSpecs();

// However, we prefer the first version. Its cleaner, less verbose,
//  and clearly shows we meant to write a constructor. In addition,
//  'new' clearly shows we meant to instantiate an object. These
//  are important considerations when writing easily understood
//  code.

// A major problem with the way we've constructed objects so far
//  is that we've put functions inside our constructors. This
//  is functionally OK, and will work, but it's bad style. Go
//  ahead and run the following line after the last example:
console.log(myComputerRw);

// It can be hard to see, but the function is defined inside 
//  the object; that is, in JSON form, we would see all 
//  properties defined, including the function. We don't
//  want to serialize the function definitions everytime
//  we send the object somewhere for instance, only the 
//  data, so we need to change how we define our objects.

// This is what the prototype property is for.