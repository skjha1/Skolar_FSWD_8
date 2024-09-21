```js
// Function that returns a promise simulating food order
function orderFood() {
    return new Promise((resolve, reject) => {
        console.log("Order placed");
        console.log("Waiting for the food to be prepared... ")

        // Simulate food being coocked asynchronosly after 5 sec
        setTimeout (() => {
            const x = Math.random();
            console.log(x);
            const foodIsReady = x > 0.7; 
            console.log(foodIsReady);
            if (foodIsReady) {
                console.log("Food is ready to be served");
                resolve("Food is Served");
            } else {
                console.log("Food can not be prepared");
                reject("Sorry we are out of the dish")
            }
        }, 3000); // 3 sec
    });
}
// Polling function to check if the food is ready
async function pollForFood (maxAttempts, interval){
    let attempts = 0;
    
    while (attempts < maxAttempts){
        attempts++;
        console.log(`Polling attempt ${attempts}....`);

        try{
            const message = await orderFood();
            console.log(message); 
            console.log('Customer starts eating....');
            return;
        } catch (error) {
            console.log(error); 

            if (attempts < maxAttempts) {
                console.log(`Food is not ready yet, retrying in ${interval / 1000 } seconds....`)
                // wait for the specified interval before retrying 
                await new Promise(resolve => setTimeout(resolve, interval));
            } else {
                // if max attempts reached , the customer leaves 
                console.log('Maxumum polling attempts reached. Customer decides to leave the restaurant....');
            }
        }    

    }
}

async function processOrder(){
    console.log("Customer arrives at the restaurant..");
    console.log("Customer placed an order");


    await pollForFood(30, 5000); // poll every 5 sec upto 30 times

    console.log("Customer's experience at the restaurant is complete");
}

processOrder();

console.log("Customer is waiting for the food to be prepared");


```
