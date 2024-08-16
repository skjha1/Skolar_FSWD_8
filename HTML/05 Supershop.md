### Supershop
``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SuperShop</title>
    <style>
        body{
            font-family: Arial, Helvetica, sans-serif;
            margin: 0;
            padding: 0;
        }
        header, footer {
            background-color: #333;
            color: white;
            text-align: center;
            padding: 10px 0;
        }
        nav ul {
            list-style-type: none;
            padding: 0;
            display: flex;
            justify-content: center;
        }
        nav ul li {
            margin: 0 10px;
        }
        nav ul li a {
            color: white;
            text-decoration: none;
        }
        main {
            padding: 20px;
        }
        section {
            margin: 20 0px;
        }
        .product-list {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
        }
        .product {
            border: 1px solid #ddd;
            padding: 10px;
            width: calc(33% - 40px);
            box-sizing: border-box;
        }
        .product img {
            max-width: 100%;
            height: auto;
        }
        .product h3 {
            margin: 10px 0;
        }
        .product p {
            margin: 5px 0;
        }
        .product button {
            background-color: #28a745;
            color: white;
            border: none;
            cursor: pointer;
            padding: 10px;
        }
        .product button:hover {
            background-color: #218838;
        }
        form {
            margin-top: 20px;
        }
        form label, form input, form textarea, form button {
            display: block;
            margin: 10px 0;
        }
        .product-name{
            margin-right: 20px;
        }
        .price{
            font-size: 18px;
        }
        .rupees-symbol {
            margin-right: 10px;
        }
    </style>
</head>
<body>
    <header>
        <h1>SuperShop</h1>
        <nav>
            <ul>
                <li><a href="#Home">Home</a></li>
                <li><a href="#Products">Products</a></li>
                <li><a href="#Contact">Contact</a></li>
                <li><a href="#Cart">Cart</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section id="home">
            <h2>Welcome to SuperShop</h2>
            <p>Find the best deals on your favorite products. Shop now and enjoy great discounts!</p>
        </section>

        <section id="products">
            <h2>Our Products</h2>
            <div class="product-list">
                <div class="product">
                    <img src="data:image/jpeg;base64,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" alt="Product-1">
                    <h3>Purse</h3>
                    <p>&#8377; 500</p>
                    <button>Add to cart</button>
                </div>
                <div class="product">
                    <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEBAPDw8PDw8PEA8QDw8QEBAQDQ8WFRUWFhURFRUYHSggGBolGxUVITEiJSkrMS4uFx8zODMsNygtLisBCgoKDg0OGRAQGisdHSArLi0rLSstLS0rKystLS4tLS0tLSstKy0rKy0tLS0tKy0tLS0tLSstLS0tLSstLS03K//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQIDBgcEBQj/xABSEAABAwECCgMKCgUKBwEAAAABAAIDBAURBgcSITEyQVFhsRNykSIlNVJUcXShstEUc4GEkpOztMHSFRcjM0IkRFNVYmNkgtPhJkODoqPw8Rb/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAgMEAQUG/8QAKBEBAAICAQIFBQADAAAAAAAAAAECAxEEEjEFITJBURQiIzOBEyRh/9oADAMBAAIRAxEAPwDcUIQgEISEoIZ6gNIbnc91+S0aTx4BQl8h0vazg0ZRTKfOHSHS+88Q0G4NCzXGBjSFFK6kpI2zzx5pXOcRBCbr8gAa7s+fOLlx1puUf6V30QjL/vX/AEQsQsHHLMJWtrYI+hcQHSwuflRDxix1+WOF4W00VSyaNsjCx7Xta9r2EFj2uALXtPikI6nyv71/0R7lIGOOiR3Y1c88rW5skuO4BOifocL7idukFcNJjG7+kd2NVcwpwsprPj6SpqjGDmY0MD5pN+QwczmXt2nVtjidI85LGMfJI7xWsaXOPYCsXwMs0WxVVNtV8fSwiUw0dM8F0AAAuzHMWtbdmuzk3qVazM6hC94pG5ek3G7Wzd1QWRUzx7JZS4g/JGzJ7CpP1lW7/UX2yufSOAuByQNDW9y0eYDMmmR3jO7StVeNv3efbmzHaFIq8adtQsdLLYgjjYL3Pd0wa0byV4/6/qvyGm+nKtHr4umhmgc65s0UkZJvIblC4OI89y+dbTwarqUvp5aOXKvzPbE97SBtY8C4jMqsmHoX8fkxl3vyaF+v6r8hpfpyo/X9V+Q0v05Vln6GqvJaj6mT3JP0NVeS1H1MnuVWmnqhqn6/qvyGm+nKnR4+61xDW0FMSSAAHy3knMAFlP6GqvJaj6mT3K14u8EKyWtgmfBJDT00sc0kssbmsIY68MblAZTjddm0LsVcm0RDRxjLt7+ovVMj9Zdvf1D6pldDI5xJvOck6SpGvd4zu0q2cUQzRyJn2UyjxzGJ7WWnZtRRBxu6QB7m8TkuAJAvGi/StOsa2IKyJs9NI2WJ4va9pvBu0jgRtBzheDVRMmYYqhjJ4nC50crQ9p7dHyLPsHsqw7cbQseTZ9pAOgY85o3m8Nu4hwLOIcFXaul9MkWbehI03596VRWBCEIBCEIBCEIBR1Go7qnkpFHUajuqeSDmA/Zsu05LLuxfJNY0isqWz35YqZekv1j3RvX1xFnay/a1l/0VnuMDFbDaMpqonup6o3ZbwA6OW4XZT26Q64DOErOp27MbYHaXRAAxB7Rcb8sguvv3jN2cF9GYpmvFl0WXtpwR1S45HqVNwfxKhsrZK6oNQ1jr+ijaY2P4Oc7OB5gtYkmhpYS+R7Io42gucSGRRtaLgBuaALgNK7a3VO3KxpPM12ll2nPfp0XJQ0gEnTds4aFR243LIL8j4RmvuyzDOI9Om/J0cVdKWsjmYHxua5r25TXNIc1wP8TSMxChpPbw8YbyLLtC7yKp9bbj6iVV8VUQFi0RH8Zqnu8/TPbyaFZcYfgu0fQ6jkF4GK0d5LP+dfeJVdh9TJyvQsTgo3KdwUTgt9ZeTaEJQJnAXBxA3A3JXBRlXR5qZPNS/wAd30ij4TJ47u0qFyYrOivwht1fC3+O7tKOnJuvJPn0LlShy5NI+EYtMeb0obiLxs07wpQ1ebFKQQRp3bwvVjcHAOGjbwO5YMtJrO3p4MnXGp7mXLN8cD+jqLFmbrsqDcd10kbh61plyzHHbrWT8e/2mLPfs14vU3Fvv5pUgSqprCEIQCEIQCEIQCjqNR3VdyUijqNR3VdyQc8Gqzqs9lLK9rRlOc1g2ucQ1vDOVG03NjOzIZfwzZkV9DFURmOZmXGSDde5pvGg3tIKiklJ/wDd6w/H7a8hqKaiDnNhyHTPaDc2RxdktLhtybs1+9biGXAAZgAABsCzjG7gJJaDI56YtFTTh4DCbhOx1xyL9jgRm35S77ksKdZ5LXOy23iHpyLjovAuv0ZWc5uBWl4hralJqqMuLo4wyeIEkiMlwY9rdwN4N3BZ7/8AnbTLzCKGp6TRd0br/NuW2YrMCjZsL3z3GpnLTLkm9jGtzshB2uvzkhSvMeyNd+73sYvgu0fQ6jkF4WKod47P+d/eZV7uMTNZdoA6fgU5PygLxsU47x0Hzv7zKmOfNRyfQsbmqJzV0uChctlLPMtDmcFE5dDgonBaqSotDncmKV4UZV8KZgiEIKlLmigrpo6jIdn1XZnfmXIi9U2ruNJUtNZ3Cwkf/d6y7HfrWT8e/wBpi0izJ8tmTfe6MAcck6Oy4hZzjw17J+Pf7TF5eWOncPawWi2rQ24JUg96VUtgQhCAQhCAQhCAUdTqO6ruSkUdRqO6ruSDng1GdRvy5gkEV2q67gc4CINRnUbyCkCikZc/xm9iMh/jDsUgSoOf4Of7PYpY4QM95JGi/ZwA2J6VBVMYx72WnxopbuzP+C8jFIL7CoPnX3mVevjI8G2j6FUcgvJxRDvFQfOvvMqlVn5Efas72rnc1dr2rnkCvpZ50w5HhRuCneFC9a6SptCB4ULlO9QuC1VUyYU0pxKaVajohKS9I4phcoaRh2UE+RI0/wAJ7l3mOb3KnY8hc+yfSH+0xWUlVTHNNltsV++U3+cOYD6wsHMprVno+H385q3IJUgSrA9YIQhAIQhAIQhAKKqPcP6p5KVQ1n7t/VdyQQw6rOozkE9Mh1GdRvIJ6ikUJUgSoAJUiVBU8Y3g20/QpuQWdYsMIH0lHTh2VJTO6XLjGd0f7V/7SP8AEbfOtFxjeDbS40UyyPBAfyCm8032r1dgiJmYlh59prjiY+W5xyte1r2OD2PGU14N4cOCikCoODtsupHEEF0DzfJHfeWHbIzjvG27er6yVr2texwcx4ymOBvDgp2p0SxVvF42geFA8LqcFBIFdSXLQ5XqBy6JAud620lntCMqMuQ5yic5XbRDnKMuTHvURkXdK5l0Zap+NN98dkjxaqQdrmH8VaOlVMxlS3mzR/iSfW1Z+ZT8W2jg21nj/r6IaeZ5pU1n4nmnLxn0AQhCAQhCAQhCAUNZ+7f1XclMoav92/qu5LkiGHUZ1Gck9Rw6jOo3knhRSKlSJV0CVIhBVcY/g20uFDN6wFlGBre91L5pvtXrV8Yvg20/QpVmOBMfeykPCf7Z6uwTqWLnxvH/AF6AavVsG13Uzsm4vheRlxDS07ZGDfvG1ee9ly8DCW1TC0wxm6V47tw0xMOzrH1Ba4jr8nmUrMT5NkimZIxskT2yRv1HsIcx2e7TvBF1yY8LFcCML32c/o35UlFI6+WEZ3RE6ZYuO9u3zrZmVDJGMkie2SKRodHI03seOChNJpOpabRExuEEq5JSuyVcFQVoxyzWhzyPXK+RJPIuGWdbKQpTvlULpVyvnURlV0Qqs7OlVTxg5zZx/wASR62r3+kXiYdt/YWW/wAatk/7Swe9Z+d5YZX8Cv8AsRL6LZ+J5pyaz8TzTl4EPoghCF0CEIQCEIQCjqdR3VdyUijqNR3VdyQc0OozqN5BPTIdRnUZyCeopFCEIQKlAvSKaMZkNqhjIaRZto8aKfkFnWArO9VGeFR9vItJxm+DLQ9CqOQWc4C+CKLzVP28itx92XlRuiS1KsQxulIvIzMb4zjoHm2ngFn8+U9znuJc55LnHeSrRhHIZJMgakeze86T8guHavGdTr2uPg1Tc95eLbNETp5JYrHgVhW+z39FIC+ilcTKwZ3xOIzzRcdF7doG9ea6mUTqQ7lPJhi0alOnIiG6slZIxssb2yRSNy45Gm9rwdv+2leXXyALPsEMIJaFxjeHS0cjr3xjO6AnTLGN+9u1WjCC0mNaHNe17HgOY9pGS8EaQsVcdqW1Kd5raN1c9VVcV58lUvGntPKOY5lGKzj61ti0Qz6ewZknTLy21KcJ1bFnJrt6XT3Z92dJjOpjFTWEw6ctzyOL3tefaTLGpTU1EFONEsjcs6clgzvPZf2r08eDr3WTdmHTvAG4ZTLgvP8AEcm4iv8AW/w/Hq02bgEqQe9KvKesEIQgEIQgEIQgFHUajuqeSkUdRqO6ruSDmg1GdRnIKRMg1GdRnIJ6ikEIQgVSxHNduUKUZkFZxmeDLQ9CqOQWbYFPusejO4VPy/t5Fo2Ml19m2h6FUcgs3wJbfZNEOFR9vItHHr1ZIhi5tunFMoTSk5zpN5J336U00XBe78HSimX0E3fNxCv/AKPv2KWOzBu5r3m0oXRHTBQtkd6XkU1ltGwLrtDB1lXD0Rd0UjbzBKNVpOlrgNLTtXqshXVC25Y82SZhyu8duqGIV0M1NK+CoYY5oz3TTnB3OadrTsKWOoWxYUYMRWjCGOPRzxg9BPmvbvjfvYfVpWMVtHLTyvgnYY5Y3XOafaB2tOwqnFl35S9Wk1y16q93ayZTNlXlsevTsSgkq546aLXlN2VdmjaM7pDwAvPYtPXqPNz/AB7nTQ8WFnm6atcLg6+np/kP7V/bktHmK87HYe6sn49/tMWg0dMyGKKCK8RQRtjjv0kAax4k3k+dZ3jnPdWT8e/2mLzc15vMzL0cMRWYrDdh70qQe9Ks7UEIQgEIQgEIQgFHUajuq7kpFHUajuq7kg54NRnUZyCemQajOozkE9RSCEJUAhCEFVxj+DbR9Cn5BUDF8y+yqPzVH28iv+MfwbaPoU/IKkYu296KL5x9vItfD/Zt5/iX6v69fo0oiXRkJwYvV28SKoWxKVrFI1ikaxQmVkVMaxPaxSNapGtWe8oXqlhC8jC/BSK0YgCRHUxh3QTkb/8AlP3sPqXsxhdDQsNpms7gx2mk7h841tHLTyvgmjeyZjg10dxLiTq5PjA7CNK2LAXBr4DCXTN/llQAZc2eBmltODvvzu4ngrFV2RBNNDUvja6op7+hkP8ADeNB33bL9Cc7NpvvVs5euNPWxZa3jcdyOcs3xxnurK+Pf7TFoj3LOMcB7qyvj3+0xQvH2rcVvvhvgSpAlVDaEIQgEIQgEIQgFHUajuq7kpFHUajuq7kg54NRnUZyCemQajOozkE8KKRUIQgEIQgquMfwbaPoU/IKmYuBfZFF85H/AJ5Fc8ZHg20PQqjkFTMWJvsikG41HrmkWvh+th58bxf1YslOa1PuSgL0nkRUAJwCAE4KKZQFI1MCkCqvCq6ZilaomKULFkhUkCbPDlDc4aDs8xTmp4VG5iU6Wms7h4st4JBFxGlZzjaPd2X8e/2mLWaylEg03PGq78DwWSY2WkSWY1wIcJ3Zj1mK+bRaj0eLfqyQ+gh70qQe9KqHrBCEIBCEIBCEIBR1Go7qnkpFHU6j+q7kg54NRnUZyT0yDUZ1G8k9RSKhIhAqEiEFWxj+DbR9CqOQVJxXHvbSN8ZlQR5xPIrtjH8G2h6FPyCoWLt+TZlA7d8Iv83TyX+pX8edWZOZG8a63IuTyE1erE7eORCELug5qlaoQVI0qu0K7J2lTNK5mlTNKx5aq5TNKeCogU4FZbQjtLestx3AZdlHb07hf/mYtPBWYY7j3dlfHu9pi5DdwZ/LDcQlSBKj3QhCEAhCEAhCEAoqnUf1XclKoqnUf1XckEFPqM6jOQT0yDUZ1GcgnqKQQhCAQhCCrYx/BtoehVHIKgYBDvTRHhUfbyK/4yPBloehT8gqJgA3vRQ+ap+8Sq3D3ZuT6Fts+XKZkk90zN5xsK6CvFp5+jeHaRocN4XtXggEG8EXg716eK2/J4141JpSJSkVyBQntKjTgVyYclM0qVjlztKkaVmyVVy6WlOBUDXJ4Kx2qrlKCsxx2a9l/Hu9pi0wFZnjq17K+Pd7TFXMabPD/wB8NzCVI1KovoAhCEAhCEAhCEAoqnUf1XclKoqnUf1XckEEGozqM5BPUdOe4jO0sYTv1QpFFIIQhAIQhBVsZHgy0PQp+QVJxfN7z0PmqfvEqu2MfwbaHoVRyB/BUzF04GxqK7Z8KafP08h5Edqtxd2fkel3yhdFmVoaejce5J7k+KTs8xUU7VwybVtpLyMi0uCYvKsu1QLo5TmzBkh2bmuP4r1y1aq22zmoS3IUpDmlSNUQTwVTdzSQFSNcoU4LNernSnDlmuOnXsr493tNWjArOccfdS2RGNZ05uG3XYFnvGoaeFH54bo33pU2M3jtTlU94IQhAIQhAIQhAJHC8EbxclQg82gf3GSdaIljhtzaPVcuhNqqQlwljIbIBcb9V48V3v4qPpyNeKRp/s3OHq/3UXUyFF8KZvd9XJ7kfCWb3fVye5BKhRfCWb3fVye5Hwlm931cnuQcWEFE2eCWF9+RNFLC8jYJGlhd8l9/yLJMWlWYDUWJU3MqqaaR8INwbKDdltafGPcuHBbNJOwjS4/9OX8qoOHOBdHaBbI500NTHkiOpihmLwBqtkbk90BsIIcNGddrOpRvXqjR1S27Mcx3FebMF5X6DwnhubBUU9oRjVdI6IPaOLZclwPylMdZOFh/mlJ9Kj/OtVc9Y7vOycO89pdsi7bOtl0VzJAZItl372PzeM3gV4DrEwrP8zpfp0X50w4P4VeR0306P86t+qopnw/J8w0WCRsjQ+Nwew6HA+ojYeCdkrO6axcLInB8dLA07bpKMB3Bw6TOF6V2GPklH20X5136ypHAyfMLncnAKlXYY+SUfbRf6iLsMfJKPtovzqM8qs+zv0GT5hdk4Kj34Y+SUnbRf6iX/jHyWj7aL86rnPDv0F/mF6YwnR8p2DieCzmWVtsYQU0cH7SksoB75BqPc1wcbiNhfkt/yldLsCcIrR7i0q1lNTO14YXNc4g6W5Mfc9rrlpWB2CNNZkAhp2nTlPe4gySO8ZxuznYBoAVV79XZq43F/wAU9U91gYLgBp47+KchCrbAhCEAhCEAhCEAhCEAhCFwNQUIXAiEIQKEqELsBpSoQuuBCELiQCVCEAgoQuhEFCF0KgIQuOFQhCAQhCAQhCD/2Q==" alt="Mobile">
                    <p class="product-name">PURSE</p>
                    <p class="price">
                        <span class="rupees-symbol">&#8377;</span> 5000</p>
                    <button>Add to cart</button>
                </div>
                <div class="product">
                    <img src="data:image/jpeg;base64,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" alt="Mobile">
                    <h3>Mobile phone</h3>
                    <p>&#8377; 5000</p>
                    <button>Add to cart</button>
                </div>
                <div class="product">
                    <img src="data:image/jpeg;base64,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" alt="Mobile">
                    <h3>Mobile phone</h3>
                    <p>&#8377; 5000</p>
                    <button>Add to cart</button>
                </div>
            </div>
        </section>

        <section id="contact">
            <h2>Contact Us</h2>
            <form action="/submit-form" method="post">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required>

                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>

                <label for="message">Message:</label>
                <textarea id="message" name="message"></textarea>

                <button type="submit">Submit</button>
            </form>
        </section>

        <aside>
            <h2>Customer Reviews</h2>
            <p>"SuperShop has the best products and amazing Customer service"</p>
            <p>"SuperShop has the best products and amazing Customer service"</p>
        </aside>
    </main>

    <footer>
        <p>&copy; 2024 SuperShop. All Rights reserved!</p>
        <p>Visit Us: Chennai </p>
        <p>Follow us on Social media </p>
        <nav>
            <ul>
                <li><a href="#facebook">Facebook</a></li>
                <li><a href="#twitter">Twitter</a></li>
                <li><a href="#facebook">Facebook</a></li>
            </ul>
        </nav>
    </footer>
</body>
</html>
```
