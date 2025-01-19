### Understanding the Basics of HTML5: FORMS


#### The `<body>` Section
The `<body>` section holds the visible content of the webpage. 

```html
<body>
    <form action="" method="get" class="some-class">
        <!-- form attributes: action: For Backend, method: For Backend, class: CSS -->
```
The `<form>` tag is used to create a form for user input. Key attributes include:
- **`action`:** Specifies the URL(IGNORE FOR NOW) where form data will be sent (handled by the backend).
- **`method`:** Specifies the HTTP method to use (`GET` or `POST`) - Don't worry these are just random terms for you, right now!
- **`class`:** Used to apply CSS styling! Will learn in coming classes.

---

#### Input Fields and Labels
1. **Name Input Field**
```html
<div class="some-class">
    <label for="name">Enter your name: </label>
    <input type="text" name="name" id="name" required />
</div>
```
- **`<label>`:** Acts like a label maker for an input field, label and HTML elements are same after the `for` attribute. The `for` attribute links the label to the input field’s `id`.
- **`<input type="text">:`** A single-line text field for the user to input their name.
- **`required`:** Makes this field mandatory for user to provide.

2. **Email Input Field**
```html
<div class="some-class">
    <label for="email">Enter your email: </label>
    <input type="email" name="email" id="email" required />
</div>
```
- **`<input type="email">:`** A field specifically for email addresses. It validates the format automatically.
There are many types available visit👇🏻
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input

---

#### Submit Button
```html
<div class="some-class">
    <input type="submit" value="Subscribe!" />
</div>
```
The `<input type="submit">` creates a button that submits the form data to the server. The `value` attribute defines the text displayed on the button.

---

### Complete Example
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Document</title>
</head>

<body>
    <form action="" method="get" class="some-class">
        <div class="some-class">
            <label for="name">Enter your name: </label>
            <input type="text" name="name" id="name" required />
        </div>

        <div class="some-class">
            <label for="email">Enter your email: </label>
            <input type="email" name="email" id="email" required />
        </div>

        <div class="some-class">
            <input type="submit" value="Subscribe!" />
        </div>
    </form>
</body>

</html>
```

---