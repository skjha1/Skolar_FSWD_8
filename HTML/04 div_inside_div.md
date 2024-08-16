```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .container{
            border: 2px solid #333;
            padding: 20px;
            margin: 10px;
        }
        .container-1 {
            background-color: #f0f8ff;
        }
        .container-2 {
            background-color: #e6effa;
        }
        .container-3 {
            background-color: #d3d3d3;
        }
        .container-4 {
            background-color: #dcdcdc;
        }
        .container-4 {
            background-color: #c0c0c0;
        }
    </style>
</head>
<body>
    <div class="container container-1">
        <h1>Level 1 container</h1>
        <div class="container container-2">
            <h2>Level 2 container</h2>
            <div class="container container-3">
                <h3>Level 3 container</h3>
                <div class="container container-4">
                    <h4>Level 4 container</h4>
                    <div class="container container-5">
                        <h5>Level 5 container</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>

```
