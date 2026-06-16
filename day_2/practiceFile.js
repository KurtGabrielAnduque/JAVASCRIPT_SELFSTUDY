// challenge in callback function
// with asynchronous programming
/**

Step 1: Write the 3 Async Functions
prepareDough(pizzaType, callback)

Instantly console.log -> "1. Preparing dough for [pizzaType]..."

Set a timer for 1000ms (1 second).

When the timer finishes, trigger the callback and pass it the string "Raw [pizzaType] Dough".

bakePizza(rawDough, callback)

Instantly console.log -> "2. Putting [rawDough] in the oven..."

Set a timer for 2000ms (2 seconds).

When the timer finishes, trigger the callback and pass it the string "Hot Baked Pizza".

deliverPizza(bakedPizza, callback)

Instantly console.log -> "3. Handing [bakedPizza] to the delivery driver..."

Set a timer for 1000ms (1 second).

When the timer finishes, trigger the callback and pass it the string "Delivery Complete! 🚀".

Step 2: The Execution (The Callback Chain)
Now that your kitchen is built, you need to actually order a pizza.

Call prepareDough and pass in "Pepperoni". You must use nested callbacks so that the dough goes to the oven, and the oven goes to the driver, in perfect order.

At the very bottom of your nested callbacks, console.log the final delivery message.

EXPECTED OUTPUT:

1. Preparing dough for Pepperoni...
(wait 1 second)
2. Putting Raw Pepperoni Dough in the oven...
(wait 2 seconds)
3. Handing Hot Baked Pizza to the delivery driver...
(wait 1 second)
Mission Accomplished: Delivery Complete! 🚀
*/


function prepareDough(pizzaType, callback){
    setTimeout(() =>{
        console.log(`Preparing dough for ${pizzaType}`);
        callback(`Raw ${pizzaType} Dough`);
    }, 1000);
}


function bakedPizza(rawDough, callback){
    setTimeout(() => {
        console.log(`Putting ${rawDough} in the oven`);
        callback(`Hot Baked ${rawDough.replace("Raw", "").replace("Dough", "")}`);
    }, 2000);
}


function deliverPizza(bakedPizza, callback){
    setTimeout(() =>{
        console.log(`Handing ${bakedPizza} Pizza to the delivery driver`);
        callback(bakedPizza);
    }, 1000);
}


prepareDough("Peperoni", (doughCaught) => {
    bakedPizza(doughCaught, (Pizza) => {
        deliverPizza(Pizza, () =>{
            console.log(`Mission accomplised: Delivery Complete`);
        })
    })
})
