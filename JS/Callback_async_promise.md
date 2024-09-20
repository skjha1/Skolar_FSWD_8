```js
function orderFood(callback) {
    console.log("Order placed..");
    setTimeout(() => {
        callback("Food is ready...");
    }, 10000); // Simulate food prep time
}


function serveFood(food) {
    console.log("waiter: here is your " + food);
}

orderFood(serveFood);


console.log("Start Cooking");


// Simulate pizza being coocked asynchronosly after 5 sec
setTimeout(() => {
    console.log("Pizza is ready!");
}, 5000);

console.log("continue watching TV");

function setTimeoutInMinutes (callback, minutes){
    setTimeout(callback, minutes * 1000);
}

function orderPizza() {
    return new Promise((resolve, reject) => {

        // Simulate pizza being coocked asynchronosly after 5 sec
        setTimeoutInMinutes (() => {
            const isDelivered = Math.random > 0.01; 
            console.log(isDelivered);
            if (isDelivered) {
                resolve("Pizza delivered successfully..");
            } else {
                reject("Pizza delivery failed..")
            }
        }, 1);
    });
}

orderPizza()
    .then(successMessage => console.log(successMessage))
    .catch(errorMessage => console.error(errorMessage));

```
