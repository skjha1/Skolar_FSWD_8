```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Percentage Example</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <div class="box">
            <p class="text">This is some text</p>
        </div>
    </div>
</body>
</html>


```



```css
html {
    font-size: 16px; /* Base font size for calculation */
    /* 1rem = 16px */
}

body {
    font-size: 100%; /* 100% of 16px = 16px */
    /* This means body font size is 16px (as defined by html's font-size) */
}

.container {
    width: 50%; /* 50% of viewport width */
    /* Assuming viewport width is 1000px 
    50% of 1000 is = 500px  */
    height:  300px; /* fixed height */
    /* height remains the same constant i.e 300px */
    background-color: lightblue;
    padding: 10px; /* fixed padding */ 
     /* Padding remains the same constant i.e 10px on all sides */
    position: relative; 
    /* Establishing a postioning context for absoluetely poisitioned children */
}

.box {
    width: 80%; /* 80% of container's width */
    /* 80% of 500px (container's width) = 400px */
    height: 50%;  /* 50% of container's height */
     /* 50% of 300px (container's height) = 150px */
     background-color: lightcoral;
     margin: 5%; /* 5% of container's width */
     /* 5% of 500px (container's width) = 25px */
     position: absolute;
     /* poisitioned relative to container */
     top: 20%; /* 20% of container's height */
     /* 20% of 300px (container's height) = 60px */
     left: 10%; /* 10% of container's width */
      /* 10% of 500px (container's width) = 50px */
}

.text {
    font-size: 150%; /* 150% of container;s font size */
    margin: 2%;
}



```
