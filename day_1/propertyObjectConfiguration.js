// for this topic we will learn how does property configuration work
// basically configuration allows as change individual properties as well as the whole object

// lets say that we have this object

let contact = {
    _age : 36,
    firstName : "Kurt Gabriel",
    lastNmae : "Anduque",
    getFullName(){
        return `Full name: ${this.firstName} ${this.lastNmae}`;
    },
    get age(){
        return `Age of Person: ${this._age}`;
    },
    set age(years){  
        this._age = years > 0 ? years : 'undefined';
    }

};

// lets verify first that the object is working before we check the object
contact.age = 37;
console.log(contact.age); // Output : Age of Person: 37


// lets check the list of properties that we have in our object

console.log(Object.keys(contact)); // Output : [ '_age', 'firstName', 'lastNmae', 'getFullName', 'age' ]


// Now we are going to use a new method called "Object.getOwnPropertyDescriptor"
// this method allows us to check the characteristics of a specific property in our object
// how to use? Object.getOwnPropertyDescriptor(object, "specific property")
let desc = Object.getOwnPropertyDescriptor(contact,"_age");
console.log(desc); // Output: { value: 37, writable: true, enumerable: true, configurable: true }
// basically we are capable to check the attributes of a single property in our object


// what if we try checking the getter and setter methods??

let descSet = Object.getOwnPropertyDescriptor(contact, "age");
console.log(descSet);
//Output
/**
{
  get: [Function: get age],
  set: [Function: set age],
  enumerable: true,
  configurable: true
}
 */


// since we are able to check the list of attributes of a single property of an object
// we are also able to modify the attributes of a single property of an object

//lets create a basic object

let sampleObject = {
    x : 10,
    y : 20,
    length : 20,
}

// now in modifying a property
// we are going to use Object.defineProperty
//                    name of object  property   attributes                   this prevent enurated
Object.defineProperty(sampleObject,   "width",   {value: 100, writable: true, enumerable: false, configurable: true});

console.log(Object.keys(sampleObject));// Output:  [ 'x', 'y', 'length' ]
// if you are wondering why "width" is not included in this output?
// because we prevent the enumeration of that property by setting the enumerable attribute to false

// However we can still see all property of the object regardless of their configuration
// by using Object.getOwnPropertyNames
console.log(Object.getOwnPropertyNames(sampleObject));