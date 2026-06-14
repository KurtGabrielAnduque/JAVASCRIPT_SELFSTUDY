// In this part we are going to copy objects using javascript


// lets prepare the variable as well as their value
let point0 = {
    x : 10,
    y : 20,
};

//prepare a empty data variable which is the point2

let point2 = {};

// lets copy the value of point0 to point1 using copy reference
let point1 = point0;

// using object assign method we can copy the value of a variable
// without copying their reference

Object.assign(point2, point0);

// Object assign parameters
// Object.assign(target, source, source, source);

// lets check the value of each variable for now.
console.log(point0); // Output: { x: 10, y: 20 }
console.log(point1); // Output: { x: 10, y: 20 }
console.log(point2); // Output: { x: 10, y: 20 }

// therefore if we are going to compare every value of each variable
// we can observe this kind of output

console.log(point0 === point1); // Output : true
console.log(point0 === point2); // Ouput : false

// Why?
// The output of line 33 is true because point0 and point1 are referring to the exact same object reference.
// While line 34 has an output of false because they are pointing to two completely different objects in memory.


// lets create a new variable

let point3 = {};
Object.assign(point3, point0, {z: {w:50, q:100}});

console.log(point3);

console.log(point3.z.w);

// can we change the value of the z?
let point4 = {};

Object.assign(point4, point0, point3, {z:200});

console.log(point4); // Output: { x: 10, y: 20, z: 200 }
// Basically we can overwrite the value in same field.


// I think there are other ways that we can use to produce a same effect as the Object.assign
// using the spread operator (...)


let point5 = { x : 10, y : 20 };
let point6 = {...point5};

console.log(point5); // { x: 10, y: 20 }
console.log(point6); // { x: 10, y: 20 }
console.log(point5 === point6); // Output false

// lets try checking the difference between property with ... and without ...
let point7 = {...point5, z : {w : 50, q : 300}};
console.log(point7); // Output: { x: 10, y: 20, z: { w: 50, q: 300 } }

let point8 = {...point5, ...{z : {w : 50, q : 300}}};
console.log(point8); // Output: { x: 10, y: 20, z: { w: 50, q: 300 } }