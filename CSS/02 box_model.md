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

    <nav class="navbar">
        <a href="#">Home</a>
        <a href="#">Courses</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
    </nav>

    <main class="main-content">
        <section class="course">
            <h2>Course 1</h2>
            <p>Learn the basics of the web developement</p>
        </section>

        <section class="course">
            <h2>Course 2</h2>
            <p>Advanced Javascript techniques</p>
        </section>

        <section class="course">
            <h2>Course 3</h2>
            <p>Introduction to python programming</p>
        </section>
        
    </main>

    <aside class="sidebar">
        <h3>Upcoming Events</h3>
        <p>Webinar on CSS Grid - Aug 25</p>
        <p>Javascript workshop - Sept 15</p>
    </aside>
    
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
    display: grid;
    grid-template-rows: auto 1fr auto;
    grid-template-columns: 1fr 3f;
    grid-template-areas: 
    "header header"
    "nav main"
    "nav sidebar"
    "footer footer";
    height: 100vh;
    gap: 20px;
    padding: 20px;
}


/* Header styling */


.header {
    grid-area: header;
    background-color: #4caf50;
    color: white;
    padding: 20px;
    text-align: center;
    font-size: 1.8em;
    border-radius: 10px;
}

.navbar {
    grid-area: nav;
    background-color: #fff;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    border-radius: 10px;
    border: 10px solid #ddd;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 250px;
}

.navbar a {
    color: #333;
    text-decoration: none;
    padding: 10px 20px;
    background-color: #efe9eb;
    border-radius: 5px;
    transition: background-color 0.3s;
}

.navbar a:hover {
    background-color: #4caf50;
    color: white;
}


.main-content {
    grid-area: main;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    padding: 2px;
}


.course {
    background-color: white;
    border: 1px solid #ccc;
    padding: 20px;
    width: 300px;
    border-radius: 10px;
    box-shadow: 0 0 10 rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s;
}

.course:hover {
    transform: translateY(-5px);
}

.course h2 {
    margin-bottom: 10px;
    color: #4caf50;
}

.sidebar {
    grid-area: sidebar;
    background-color: #fff;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 10px;
    box-shadow: 0 0 10 rgba(0, 0, 0, 0.1);
}

.sidebar h3 {
    margin-bottom: 10px;
    color: #4caf50;
}



.footer {
    grid-area: footer;
    background-color: #4caf50;
    color: white;
    padding: 20px;
    text-align: center;
    margin-top: 20px;
}

```
