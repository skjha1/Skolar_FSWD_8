```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>em example</title>

    <style>
        /* Base size of the entire document */

        body {
            font-size: 16px;  /* This is our base font size (1em = 16px) */
            line-height: 1.5em;  /* 1.5 times the base font size = 24px */
        }

        .container {
            width: 50em;  /* 50 times the base font size = 800px */
            padding: 2em;  /* 2 times the base font size = 32px */
            background-color: #f0f0f0;
        }

        .header{
            font-size: 2em;  /* 2 times the base font size = 32px */
            padding: 1em; /* 1 times the header's font size = 32px */
            background-color: #b0c4de;
        }

        .section {
            font-size: 1.25em; /* 1.25 times the base font size = 20px */
            padding: 1em;   /* 1 times of the section's font size = 20px */
            background-color: #e6e6fa;
        }


        .section .content {
            font-size: 0.8em; /* 0.8 times the section's fomt size = 16px (20 * 0.8) */
            padding: 1em;   /* 1 times of the content's font size = 16px */
            background-color: #dcdcdc;
        }

        .footer {
            font-size: 0.75em;  /* 0.75 times of the base font size = 12px */
            padding: 2em; /* 2 times of footer's font size = 24px */
            background-color: #a9a9a9;
        }


    </style>
</head>
<body>
    <div class="container">

        <div class="header">
            This is a Header
        </div>

        <div class="section">
            This is a Section
            <div class="content">
                    This is a nested content inside the section
            </div>
        </div>

        <div class="footer">
            This is a Footer
        </div>

    </div>
</body>
</html>

```
