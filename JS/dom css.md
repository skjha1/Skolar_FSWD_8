```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=\, initial-scale=1.0">
    <title>DOM Animation CSS</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div id="myElement"> Click me to change my color!</div>
    <script src="script.js"></script>
</body>
</html>


```




```css
#myElement {
    width: 200px;
    height: 100px;
    background-color: #f0f0f0;
    text-align: center;
    line-height: 100px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

```


```js
const element = document.getElementById("myElement");



// Add event listener to change the color

element.addEventListener("click", function(){
    // Generate random color

    const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);

    console.log(randomColor);

    element.style.backgroundColor = randomColor;
})

```
