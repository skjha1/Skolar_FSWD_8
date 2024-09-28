<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=\, initial-scale=1.0">
    <title>DOM Animation example</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
   <div id="container">
    <div id="myElement">Move me!</div>
   </div>
    <script src="script.js"></script>
</body>
</html>






-------------------------------



#container {
    position: relative;
    width: 400px;
    height: 400px;
    border: 2px solid #007bff;
    overflow: au;
}

#myElement {
    width: 100px;
    height: 100px;
    background-color: #007bff;
    color: #fff;
    text-align: center;
    line-height: 100px;
    cursor: pointer;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: transform 1s ease;
}


-------------------------------------------------

document.addEventListener('DOMContentLoaded', ()=> {
    const container = document.getElementById("container");
    const myElement = document.getElementById("myElement");

    const radius = 100;
    const centerX = container.clientWidth / 2;
    const centerY = container.clientHeight / 2;
    let angle = 0;
    const speed = 0.02;

    function rotateElement() {
        angle += speed;

        const x = centerX + radius * Math.cos(angle) - myElement.clientWidth / 2;
        const y = centerY + radius * Math.sin(angle) - myElement.clientHeight / 2;

        myElement.style.left = x + 'px';
        myElement.style.top = y + 'px';

        requestAnimationFrame(rotateElement)

    }

    rotateElement();

})
