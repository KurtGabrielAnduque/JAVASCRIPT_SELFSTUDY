
// for this topic
// it cover the asynchronous programming
// first of all, lets answer the question what is the difference between sync and async program
// the sync program follows the strict sequencial of code logic regardless of the time it takes to complete the logic
// while the async are able to change the execution of time specially if there is a logic that needs to be fully load before proceeding again

// lets create a sample function below

let showInfo = result => {
    let info = "the arguments are equal";
    if(result > 0) {
        info = "the first argument is greater";
    } else if (result < 0) {
        info = "the second argument is greater";
    }
    console.log(info);
}

let compareSync = (a, b, fn) => {
    let r = a - b;
    // fn(r); // Synchronous
    setTimeout(fn, 1000, r);   // Asynchronous
}

// Synchronous Output
console.log("start");
compareSync(10, 5, showInfo);
console.log("end");
/** OUTPUT: 
    start
    the first argument is greater
    end
*/

// Asynchronous Output
console.log("start");
compareSync(10, 5, showInfo);
console.log("end");
/** OUTPUT: 
    start
    end
    the first argument is greater
*/

// as you can see in the asynchronous we are able to switch the execution of the console.log();
// where we are able to execute end first before activating the function
// waiting for the time to finish before continuing the execution which is the 1000ms


