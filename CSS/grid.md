```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard Layout</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="grid-container">
        <div class="header">Header</div>
        <div class="sidebar">Sidebar</div>
        <div class="main">Main Content</div>
        <div class="widget">Widget 1</div>
        <div class="widget">Widget 2</div>
        <div class="footer">Footer</div>
    </div>
</body>
</html>

```




```css
body {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
}

.grid-container {
    display: grid;
    max-width: var(--dynamic-max-width);
    grid-template-areas: 
    'header header header'
    'sidebar main main'
    'sidebar widget1 widget2'
    'footer footer footer';
    grid-gap: 10px;
    padding: 10px;
}

.grid-container > div {
    
    padding: 20px;
    border: 1px solid #ddd;
    text-align: center;
}

.header{
    grid-area: header;
    background-color: #6fa3ef;
}

.sidebar {
    grid-area: sidebar;
    background-color: #ffdb4d;
}

.main {
    grid-area: main;
     background-color: #ff704d;
}

.widget:nth-child(4){
    grid-area: widget1;
    background-color: #82e0aa;
}

.widget:nth-child(5){
    grid-area: widget2;
    background-color: #f9e79f;
}

.footer {
    grid-area: footer;
    background-color: #bfc9ca;
}


@media (max-width: 768px) {
    .grid-container{
        grid-template-areas: 
        'header'
        'sidebar'
        'main'
        'widget1'
        'widget2'
        'footer'
        ;
    }
    
}
```
