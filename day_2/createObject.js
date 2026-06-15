//  For this topic we are going to introduce a factory
// basically factory is a function that return an object

// lets create a factory

let createPoint = function(x,y){
    let obj = {};
    obj.x = x;
    obj.y = y;

    return obj;
}

// with this we can have a same object and same properties 
// however we will have differ in element value based on our own desire.

// lets create two object using factory

let point1 = createPoint(1,1);
let point2 = createPoint(2,2);

// with this we can have an object with same properties but different value
// lets call it

console.log(point1.x); // Output: 1
console.log(point1.y); // Output: 1
console.log('========================');
console.log(point2.x); // Output : 2
console.log(point2.y); // Output : 2

// we can write this factory and make it simpler and simpler

createPoint1 = function (x,y){
    return{
        x: x,
        y: y
    };
};

createPoint2 = function (x,y){
    return{
        x,y
    };
};
// the arrow notation
createPoint3 = (x,y) => ({x,y});


// what if we create a factory with method inside?

let newFunction = function(x,y, color){
    let _color = color;
    obj = {
        x : x,
        y : y,
        getColor (){
            return `the color is: ${_color}`;
        }
    }

    return obj;
}

let point4 = newFunction(10, 10, 'red');
let point5 = newFunction(10, 10, 'yellow');

console.log(point4.getColor()); // Output : the color is: red 
console.log(point5.getColor()); // Output : the color is: yellow
// where we are able to create a different environment for different variable



// CONSTRUCTORS
// constructors are same function with factory however they are differ on how they
// created and
// called

// lets create a constructor

// also constructor always starts with a Capital first letter

let ConstructorTest = function (width, height, color){
    let _color = color;

    this.width = width;
    this.height = height;
    this.getColor = function(){
        return _color;
    };
};
// whats the difference of it from earlier? it doesnt return any object like we did earlier
// instead we use this key word to look for values that is only inside its room

// now, when it comes to calling the constructor
// we use the "new" keyword

let shape1 = new ConstructorTest(100, 200, 'red');
let shape2 = new ConstructorTest(200, 300, 'yellow');

console.log(shape1.getColor()); // Output: red
console.log(shape2.getColor()); // Output: yellow

// we can check what is the name of the constructor of the shape1 variable by performing the code below
console.log(shape1.constructor.name); // Output:  ConstrucorTest

// can we check the type of shape1 if it is holding a constructor?
console.log(typeof shape1.constructor); // Output: function


let a = {};
console.log(typeof a.constructor);
