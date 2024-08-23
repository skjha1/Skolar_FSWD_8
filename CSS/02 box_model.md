```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Edtech example</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header class="header">
        <h1>Edtech Plateform</h1>
    </header>
    <main>
        <section class="course-list">

            <div class="course">
                <h2>Course 1</h2>
                <p>Learn the basics of the web developement</p>
            </div>

            <div class="course">
                <h2>Course 2</h2>
                <p>Advanced Javascript techniques</p>
            </div>

            <div class="course">
                <h2>Course 3</h2>
                <p>Introduction to python programming</p>
            </div>

        </section>
    </main>
    
    <footer class="footer">
        <p>&copy; 2024 Edtech Plateform. All rights reserved</p>
    </footer>

</body>
</html>

```


```css
/* UNivarsal selector for box sizing  */

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

/* Body styling  */


body {
    font-family: Arial, Helvetica, sans-serif;
    background-color: #f5f5f5;
    color: #333;
    line-height: 1.6;
}


/* Header styling */


.header {
    background-color: #4caf50;
    color: white;
    padding: 20px;
    text-align: center;
    margin-bottom: 20px;
}


.course-list {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 20px;
    box-shadow: 0 0 10 rgba(0, 0, 0, 0.1);
}

.course {
    background-color: white;
    border: 1px solid #ccc;
    padding: 20px;
    margin: 10px;
    width: 300px;
    border-radius: 5px;
    box-shadow: 0 0 10 rgba(0, 0, 0, 0.1);
}

.course h2 {
    margin-bottom: 10px;
    color: #4caf50;
}

.footer {
    background-color: #4caf50;
    color: white;
    padding: 20px;
    text-align: center;
    margin-top: 20px;
}



```
