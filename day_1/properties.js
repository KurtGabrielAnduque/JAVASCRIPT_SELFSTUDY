let contact = {
    tel : '09687929730',
    email : 'qkgaanduque@tip.edu.ph'
};


console.log(contact.tel);
console.log(contact.email);


// re writting the email field in contact property
contact.email = ['anduquekurt@gmail.com', 'kg.anduque@gmail.com'];


// printing the new email field
console.log(contact.email);


// How about we a nested property under the email field

contact.email = {
    private: 'user@gmail.com',
    business: 'business@gmail.com',
};


console.log(contact.email.private);
console.log('--------');
console.log(contact.email);


/**
I think it will look like this if we are going to redraw the whole property 

let contact = {
    tel : '09687929730',
    email : {
        private: 'user@gmail.com',
        business: 'business@gmail.com',
    };
};

as you can see the first array of email is gone since we overwrite it with nested it can be seen at line 21 of the code
 */

contact.email.private = ['anduquekurt@gmail.com', 'kg.anduque@gmail.com'];
console.log(contact.email.private[1]);



// lets try deleting specific properties


delete contact.tel;
console.log('================')
console.log(contact);