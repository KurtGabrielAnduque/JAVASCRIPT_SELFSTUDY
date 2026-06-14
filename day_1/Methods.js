// Since we all know that property can store value
// it is also capable in storing method
// why dont we store a method in a property called getType

let circle = {
    radius : 100,
    center : {
        x : 0,
        y : 0, 
    },
    getType : function ( ){
        return 'circle' ;
    },
};


// how do we called this method that we create in the property?
// we always use dot notation

console.log(circle.getType()); // Output: circle


// however we can also called it using bracket notation

console.log(circle['getType']());  // Output: circle

// Moving on, what if we want to modify other fields in our property using methods that we created?
// lets recreate the property where we use other field inside our method


let circle2 = {
    radius : 100,
    center : {
        x: 10,
        y: 20
    },
    getType(){
        return (typeof circle2.radius === 'number') ? 'circle' : 'not circle';
    }
}
console.log('-----------------')
console.log(circle2.getType()); // Output: circle

// However there is a drawback if we are going to this always
// what if there is a case that we copy the whole property into new variable????


let circle3 = {...circle2};
// and delete the circle2.radius
delete circle2.radius; // now theres now circle2.radius to be called
console.log(circle3.getType()); // Output: not circle

// now we are lock since we cant event change the logic of the getType method in circle3
// we cant change it to cirlcle3.radius to turn it back to circle


// the "this."  key word because handy in this situations

// with "this." keyword we are reffering solely to the property where the field is used

// lets recreate the whole property with this. keyword

console.log('----- applying this keyword -----');
let circle4 = {
    radius : 100,
    center : {
        x: 10,
        y: 20
    },
    getType(){
        return (typeof this.radius === 'number') ? 'circle' : 'not circle';
    }
}

console.log(circle4.getType()); // Output: circle

// now we copy the whole property into new variable and delete the getType method in circle 4


let circle5 = {...circle4};
// delete the radius in circle 4
delete circle4.radius;
// now call the same method using circle5 now

console.log(circle5.getType()); // Output: circle
// now we able to solve this kind of problem that can occur by hard coding calling of property variables in method.





// side quest about arrow since Im not familliar with them:
/**
 const archer = {
  name: "Robin Hood",
  arrows: 5,

  // MISSION 1: This method is broken because of the arrow function!
  // Fix it so it correctly accesses the archer's name and arrows.
  shootArrow: () => {
    if (this.arrows > 0) {
      this.arrows -= 1;
      return `${this.name} shot an arrow! Arrows left: ${this.arrows}`;
    }
    return `${this.name} is completely out of arrows!`;
  },

  // MISSION 2: This works, but it's the old ES5 syntax. 
  // Refactor it to the modern ES6 method shorthand we talked about.
  reload: function(amount) {
    this.arrows += amount;
    return `Reloaded ${amount} arrows! Total: ${this.arrows}`;
  }
};

// MISSION 3: This is a standard standalone function.
// Convert this into a modern arrow function on a SINGLE LINE using an "implicit return".
const calculateDamage = function(arrowsHit, damagePerArrow) {
  return arrowsHit * damagePerArrow;
};


// --- TEST YOUR CODE ---
// console.log(archer.shootArrow()); 
// console.log(archer.reload(5));
// console.log(calculateDamage(3, 10)); // Should output 30
 */


// MY ANSWER =======================================
const archer = {
  name: "Robin Hood",
  arrows: 5,

  // MISSION 1: This method is broken because of the arrow function!
  // Fix it so it correctly accesses the archer's name and arrows.
  shootArrow(){
    if (this.arrows > 0) {
      this.arrows -= 1;
      return `${this.name} shot an arrow! Arrows left: ${this.arrows}`;
    }
    return `${this.name} is completely out of arrows!`;
  },

  // MISSION 2: This works, but it's the old ES5 syntax. 
  // Refactor it to the modern ES6 method shorthand we talked about.
  reload(amount){
    this.arrows += amount;
    return `Reloaded ${amount} arrows! Total: ${this.arrows}`;
  }
};

// MISSION 3: This is a standard standalone function.
// Convert this into a modern arrow function on a SINGLE LINE using an "implicit return".


const calculateDamage = (arrowsHit, damagePerArrow) => arrowsHit * damagePerArrow;


console.log(archer.shootArrow()); // Output: Robin Hood shot an arrow! Arrows left: 4
console.log(archer.reload(5)); // Outut: Reloaded 5 arrows! Total: 9
console.log(calculateDamage(3, 10)); // Output : Should output 30


// Continue to main topic
// can we apply the "this." keyword into nested property?
// lets try

let circle10 = {
    radius : 200,
    center : {
        x: 0,
        y: 0,
        showCircleCenter(){
            return `the circle has X: ${this.x} and Y: ${this.y} in center equation `;
            // here we should keep in mind that this. keyword that is used in center property
            // is only capable of reading the x and y. But it doesnt know the radius 
        }
    }
}

console.log(circle10.center.showCircleCenter()); // Output: the circle has X: 0 and Y: 0 in center equation 

// also be mindfull of the two parent paradox
// here we create another property where we refernce the point property into the circle.center
// now the draw happens when we change the x in the test object
// changinging it will result to changing the element in the circle10 aswell since their are pointing to same element
let test  = {
    point : circle10.center
}

test.point.x = 99;

console.log(circle10.center.x); // Output : 99 where it change the value of circle10 object


// GETTERS AND SETTERS
// setter is the one that is capable of modifying the property value inside our obhect
// getter is the one that shows the output
// note: when creating they must have a same name but dont use a same name as the one that existing property inside the object


// lets create a setter and getter object

let nameShow = {
    firstName : "Kurt Gabriel",
    lastName : "Anduque",
    set showFullName(fullName){
        const splitName = fullName.split(' ');
        this.firstName = splitName.slice(0 , -1).join(' ');
        this.lastName = splitName[splitName.length - 1];
    },
    get showFullName(){
        return `Full Name: ${this.firstName} ${this.lastName}`;
    }
}

// when calling, call like it is a property not a method
console.log(nameShow.showFullName);

nameShow.showFullName = "Khent Randyll Chua"; // Output :

console.log(nameShow.showFullName);