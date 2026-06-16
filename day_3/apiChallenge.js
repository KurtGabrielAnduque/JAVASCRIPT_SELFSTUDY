// lets try the async/await and promise to the local server that we have



// lets build fetch api


const localServer = async (value) => {
   
    try{
        
        let response = await fetch(`http://localhost:3000/json?value=${value}`);

        if (!response.ok){
            throw new Error(`server doesnt respond Error Cauht: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        console.log(`server: ${value} * ${value} = ${data.square} (${data.time}ms)`)

    }catch (error){
        console.log(`Erro Caught : ${error}`);
    }
}

let value = 200;
localServer(200);
console.log(`browser: ${value} * ${value} = ${value * value}`);