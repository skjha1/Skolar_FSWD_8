```css
body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f0f0f0;
    margin: 0;
}

.container {
    position: relative;
    width: 200px;
    height: 200px;
    border: 2px dashed #007bff;
    border-radius: 50%;
}

.rotating-element {
    position: absolute;
    top: 50%;
    left: 100%;
    transform: translate(-50%, -50%);
    width: 40px;
    height: 40px;
    background-color: #ff5722;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    transform: translate(-50%, -50%) translate(100px) rotate(0deg);

    animation: rotate-element 10s linear infinite;
}

@keyframes rotate-container {
    from {
        transform: translate(-50%, -50%) translate(100px) rotate(0deg);
    }
    to {
        transform: translate(-50%, -50%) translate(100px) rotate(360deg);
    }
}


```
