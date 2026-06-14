let contact = {
    tel: '09687929730'
    // Notice there is no email object here
};

// in javascript we can call a single layer of field that is not existing
// however it will throw a undfined output
// example:

console.log(contact.notes); // Output: undefined

// while doing that, we can use it as a check and add instant that kind of field if we want to
// example

if (!contact.notes){
    contact.notes = "I have notes now";
};

console.log(contact.notes);

// however we if we are going to do the checking in nested field with same "empty value" it will lead to crashing the whole code

// try running this:
//  console.log(contact.name.lastname);
// that will result to error in javascript since javascript engine doesnt have an ability to read empty value inside an empty value field


// there is another method in checking a field is existing in the property:

if ("notes" in contact){
    console.log(true);
};

console.log('________')
for (x in contact){
    console.log(x);
    console.log(contact[x]);
};

// using keys to retrieve names from the property

let keys = Object.keys(contact);
console.log(keys);
// however, it will be in the array format Output: ['tel', 'notes']

