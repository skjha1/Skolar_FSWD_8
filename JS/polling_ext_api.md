```js
// Function that returns a promise simulating food order
function fetchData() {
    return new Promise((resolve, reject) => {
        
        // Simulate food being coocked asynchronosly after 5 sec
        fetch('https://jsonplaceholder.typicode.com/posts/10')
            .then(response => {
                if(!response.ok){
                    throw new Error("Network respose was not ok ");
                } 
                return response.json();    
            })
            .then (data => {
                console.log("Data fetched successfully");
                resolve(data);
            })
            .catch(error => {
                console.log("Failed to fetch Data:", error.message);
                reject(error)
            });
    });
}
// Polling function to check if the food is ready
async function pollForData (maxAttempts, interval){
    let attempts = 0;
    
    while (attempts < maxAttempts){
        attempts++;
        console.log(`Polling attempt ${attempts}....`);

        try{
            const data = await fetchData();
            console.log("Data received:", data); 
            console.log('Processing data');
            return;
        } catch (error) {
            console.log(error.message); 

            if (attempts < maxAttempts) {
                console.log(`data is not ready yet, retrying in ${interval / 1000 } seconds....`)
                // wait for the specified interval before retrying 
                await new Promise(resolve => setTimeout(resolve, interval));
            } else {
                // if max attempts reached , the customer leaves 
                console.log('Maxumum polling attempts reached. polling stoped');
            }
        }    

    }
}

async function processRequest(){
    
    console.log("Starting to poll the API....");

    await pollForData(30, 5000); // poll every 5 sec upto 30 times

    console.log("Polling process completed");
}

processRequest();

console.log("waiting for the data to be fetched........");


```
