// instead of creating a promise from scratch we can do a fetch method
// which is the easiest way of obtaining api response from other server wihtout too much complexity in the code

value = 200;
fetch(`http://localhost:3000/json?value=${value}`)
.then(response => response.json())
.then(data => {console.log(`server: ${value} * ${value} = ${data.square} (${data.time}ms)`)})
.catch(error => console.error(console.log(`NO RESPONSE FROM SERVER ${error}`)));



console.log(`browser: ${value} * ${value} = ${value * value}`);


// im also wondering if we have a chain promises
// can we do a single line of catch that serve as error catch for all?



function walkDog(){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            let dog = true;
            if (dog){
                resolve(`you successfully take out the dog for walk`);
            }else{
                reject('how dare you? dog is sad -_-');
            };

        }, 1000);
    });
}

function cleanKitchen(){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            let clean = false;
            if (clean){
                resolve(`you have a dinner for tonight`);
            }else{
                reject('mom is angry, no dinner for tonight -_-');
            };

        }, 2000);
    });
}

function takeoutTrash(){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            let trash = false;
            if (trash){
                resolve(`the trash can is empty`);
            }else{
                reject('bro, your so dead to your mom -_-');
            };

        }, 3000);
    });
}


Promise.allSettled([walkDog(), cleanKitchen(), takeoutTrash()])
    .then(promiseStatus => {
        console.log("Here is your final chore report card:");
        console.log(promiseStatus);
    });