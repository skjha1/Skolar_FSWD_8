```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nested div example</title>

    <style>
        /* Outer container */
        .container{
           width: 80%; 
           margin: 20px auto;
           border: 1px solid #ccc;
           padding: 10px;
        }
        .section {
            margin: 10px 0;
            padding: 15px;
            border: 1px solid #333;
        }
        .section h2 {
            margin-bottom: 10px;
        }

        .section p {
            margin: 5px 0;
        }

    </style>
</head>
<body>
     <!-- Outer Division -->
    <div class="container">

        <!-- Section 1 -->
        
        <div class="section">
            <h2>About Us</h2>
            <p>We are a company dedicated to providing the best services to our Client</p>
        </div>

        <!-- Section 2 -->
        
        <div class="section">
            <h2>Our Services</h2>
            <p>We offer a variety of services including web develoment, design, and cousulting.</p>
        </div>


        <!-- Section 3 -->
        
        <div class="section">
            <h2>Our Team</h2>
            <p>Meet our team of experts who is passionate about their work.</p>
        </div>


        <!-- Section 4 -->
        
        <div class="section">
            <h2>Testimonials</h2>
            <p>Here is what our client have to say about us.</p>
        </div>


        <!-- Section 5 -->
        
        <div class="section">
            <h2>Contact Us</h2>
            <p>Get in touch with us via email or phone for any inquiries</p>
        </div>


    </div>
</body>
</html>

```
