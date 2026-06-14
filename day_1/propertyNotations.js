// Here we are going to explore different types of notation 
// that is used in property calling in the javascript


// lets create two kinds of properties

// string type field
let contact1 = {
    "first name" : 'Kurt'
}

// and the standard or type that we use in dot notation
let contact2 = {
    firstName : "Anduque"
}


// lets try call this different type of properties:

console.log(` This is the string type notation : ${contact1["first name"]}`);
console.log(` This is the dot type notation : ${contact2.firstName}`);


// I think there is an advantage if we are going to use the string type notation

// lets say that we have a kind of property that has a name of incrementing number


let contactList = {
    "email1" : 'user1@gmail.com',
    "email2" : 'user2@gmail.com',
    "email3" : 'user3@gmail.com',
    "email4" : 'user4@gmail.com',
    "email5" : 'user5@gmail.com',
}

// and we want to call all of this contact without doing redundant "console.log"
// we can just simply do this



for (i = 1; i <= 5; i++){
    let string = "email" + i;
    console.log(`the key that we build "${string}" : Output ${contactList[string]}`);
};

// CHALLENGE:
/**
 Below is an object representing a student. 
 Your mission, should you choose to accept it, 
 is to evaluate their grade and add a new property to the object using a ternary operator.
 */


// GIVEN property

let student = {
    firstName: "Kurt",
    subject: "JavaScript",
    score: 82
};

// WRITE YOUR CODE BELOW THIS LINE:
// Add the 'status' property to the student object using a ternary operator.

student.status = student.score >= 75 ? "Passed" : "Failed";

// TEST YOUR CODE:
// When you log this, it should print "Passed" because 82 is >= 75
console.log(student);
console.log(student.status);