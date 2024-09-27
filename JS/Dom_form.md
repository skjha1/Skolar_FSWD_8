```js
// Access the form and the input element

const form = document.getElementById("myForm");
const input = document.getElementById("myInput");
const output = document.getElementById("output");


// Add the event listeners to the form submit event

form.addEventListener("submit", function(event) {
    event.preventDefault(); 

    // Get the value of the input field
    const inputValue = input.value;

    output.textContent = "Hello, " + inputValue + "!";
});

```


```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=\, initial-scale=1.0">
    <title>DOM forms example</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <form id="myForm">
        <label for="myInput">Enter your name:</label>
        <input type="text" id="myInput">
        <button type="submit" id="submitButton">Submit</button>
    </form>

    <div id="output"></div>

    <script src="script.js"></script>
</body>
</html>

```

```css
body{
    font-family: Arial, Helvetica, sans-serif;
    background-color: #f0f0f0;
    padding: 20px;
}
form {
    margin-bottom: 20px;
}

label {
    display: block;
    margin-bottom: 10px;
}

input[type="text"] {
    width: 200px;
    padding: 5px;
    margin-bottom: 10px;
}
button {
    padding: 5px 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    cursor: pointer;
}
button:hover {
    background-color: #005bff;
}

#output {
    margin-top: 20px;
    font-weight: bold;
}

```
