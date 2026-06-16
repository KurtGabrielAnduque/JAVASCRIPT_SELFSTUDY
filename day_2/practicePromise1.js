const value = 200;

let promise = new Promise((resolve, reject)=> {

    let request = new XMLHttpRequest();

    request.onload = () => {
    if (request.status === 200) {
        resolve(JSON.parse(request.responseText));
        
    }else{
        reject(new Error(`server is not responding`));
    }
    }
    request.open('GET', `http://localhost:3000/json?value=${value}`);
    request.send();
});




promise.then(serverResult => {
    console.log(`server: ${value} * ${value} = ${serverResult.square} (${serverResult.time}ms)`)
}).catch(error => console.error(error));



console.log(`browser: ${value} * ${value} = ${value * value}`);