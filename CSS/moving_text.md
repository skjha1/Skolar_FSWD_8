```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>moving text in js</title>

    <style>
        .moving-text{
            position: absolute;
            font-size: 24px;
            color: #4caf50;
            white-space: nowrap;
        }
    </style>

</head>
<body>
    <div class="moving-text" id="text">
        This text is moving horizontally with js!
    </div>


    <script>
        const text = document.getElementById("text");
        let position = 0;

        function moveText() {
            position += 2; // speed of the movement
            text.style.top = position + 'px';
            if(position > window.innerWidth) {
                position = -text.offsetWidth; // Reseting the position off-screen
            }
            requestAnimationFrame(moveText)
        }

        moveText();

    </script>
</body>
</html>


```
