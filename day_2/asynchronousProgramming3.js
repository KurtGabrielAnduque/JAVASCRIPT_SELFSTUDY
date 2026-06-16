// Promises
// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// it is the solution to the callback method drawback
// wherein drawback results to the pyramid of doom specially if the too many api calls to perform in the row.


// promise is a constructor;

let p =  new Promise((resolve, reject) =>{
    resolve('hi');
})

// how do we call resolved promise
p.then(value => console.log(value)); // Output: hi


// lets create a proper promise object


function calculateResult(x, y){
    return x + y;
}

function asynchronousCalculator(x, y){
    return new Promise((resolve, reject) => {
        if (typeof x === 'number' && typeof y === 'number'){
            setTimeout(() => {
                let result = calculateResult(x,y);
                resolve(result);
            }, 1000);
        }else{
            reject(`!!! warning the value input are not a number`);
        }
    })
}

asynchronousCalculator(10,20).then(value => {console.log(`Success Computation: ${value}`)}).catch(error => console.error(error)).finally(() => console.log('promised settled'));
console.log(`doing other math ${29+100}`);
console.log(`doing other math ${30+100}`);
console.log(`doing other math ${31+100}`);
console.log(`doing other math ${32+100}`);
console.log(`doing other math ${33+100}`);
console.log(`doing other math ${34+100}`);
console.log(`doing other math ${35+100}`);
console.log(`doing other math ${36+100}`);
console.log(`doing other math ${37+100}`);
console.log(`doing other math ${38+100}`);
console.log(`doing other math ${39+100}`);