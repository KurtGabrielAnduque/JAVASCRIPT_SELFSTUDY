/**
You are the hacker for a bank heist. You need to write three separate functions. Every single function must return a new Promise().

Step 1: Write the 3 Functions
disableLasers(passcode)

Set a timer for 1000ms.

Inside the timer: If the passcode is exactly the number 1234, resolve the string "Lasers disabled!".

If the passcode is anything else, reject the string "BEEP BEEP ALARM TRIGGERED! 🚨".

crackSafe(laserStatus)

Set a timer for 2000ms.

Inside the timer: First, console.log the laserStatus that you caught from Step 1.

Then, resolve the string "Safe is open, grabbed the Gold! 💰".

escape(safeStatus)

Set a timer for 1000ms.

Inside the timer: First, console.log the safeStatus you caught from Step 2.

Then, resolve the string "Escaped successfully in the van! 🚐".

 */



function disableLasers(passcode){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (passcode === 1234){
                resolve(`the ${passcode} is correct, lasers are disabled`);
            }else{
                reject("BEEP BEEP ALARM TRIGGERED! 🚨");
            }
        }, 1000)
    });
}

function crackSafe(laserStatus){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(laserStatus){
                console.log(laserStatus);
                resolve("Safe is open, grabbed the Gold! 💰");
            }else{
                reject('caught by police');
            }

        }, 2000);
    })
}

function escape(safeStatus){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(safeStatus){
                console.log(safeStatus);
                resolve("Escaped successfully in the van! 🚐");
            }else{
                reject('alaram is still triggered you got no gold and you got to hide');
            }

        }, 3000);
    })
}


// this is the normal way of calling promise
/** 
disableLasers(1234).then( data => { return crackSafe(data);})
                   .then( data => { return escape(data)})
                   .then( data => { console.log(data) ; console.log('escape successfully you are rich now :>')})
                   .catch( error => console.log(error));

Output:
the 1234 is correct, lasers are disabled
Safe is open, grabbed the Gold! 💰
Escaped successfully in the van! 🚐
escape successfully you are rich now :>

*/

// however we are going to apply a async/await function
// wherein the process of executing asynchronous function synchronously


async function robBank(passcode){
    try{
        let step1 = await disableLasers(passcode);
   
        let step2 = await crackSafe(step1);
        
        let step3 = await escape(step2);
        
        console.log(step3);
        console.log('escape successfully you are rich now :>');
    }catch (error){
        console.log(error);
    }
}
    

robBank(1234);