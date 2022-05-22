# goit-js-hw-06
https://patrycjawiza.github.io/goit-js-hw-06/index.html

Code formatted with Prettier.

Task 1
In HTML list of categories: ul#categories.

<ul id="categories">
  <li class="item">
    <h2>Animals</h2>
    <ul>
      <li>Cat</li>
      <li>Hamster</li>
      <li>Horse</li>
      <li>Parrot</li>
    </ul>
  </li>
  <li class="item">
    <h2>Products</h2>
    <ul>
      <li>Bread</li>
      <li>Prasley</li>
      <li>Cheese</li>
    </ul>
  </li>
  <li class="item">
    <h2>Technologies</h2>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>React</li>
      <li>Node.js</li>
    </ul>
  </li>
</ul>

Script counts and enters values into console: 
-number of categories ul#categories.
-for each li.item element on ul#categories script finds and enters into console headline text (<h2> tag) and its categories elements count (each <li>)
The result should be like following: 

Number of categories: 3

Category: Animals
Elements: 4

Category: Products
Elements: 3

Category: Technologies
Elements: 5

  Task 2

In HTML there is already and empty list ul#ingredients:
<ul id="ingredients"></ul>

In JavaScript there is a string table:
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
Script for each element of ingredients table creates:
-separate <li> element with document.createElement().
-adds element name and its text conent
-adds classlist of the item
-nextly places all <li> on the il.ingredients list during one time operation 
  
  Task 3
Script creates image gallery with regard to data table. In HTNL there is a il.gallery list.
<ul class="gallery"></ul>
 <img> elements are created from images objects table and placed in <li>. Template strings are used and insertAdjacentHTML() method.
All DOM gallery elements are added during one time operation.
Gallery is imroved with flexbox CSS styles.
const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

  Task 4
Counter consists of span and buttons which after being clicked are increasing or decreasing its unit value.
<div id="counter">
  <button type="button" data-action="decrement">-1</button>
  <span id="value">0</span>
  <button type="button" data-action="increment">+1</button>
</div>
Const counterValue keeps the current value of the counter and is initialized with 0.
  Added click listeners to the buttons are decreasing or increasing counter value.
  Interface of the counter is updated.

  Task 5
Script during text entering into input field input#name-input (input event) places its current value into span#name-output. If the field input is empty then span shows "Anonymous".
<input type="text" id="name-input" placeholder="Please enter your name" />
<h1>Hello, <span id="name-output">Anonymous</span>!</h1>

  Task 6
  Once focus is lost script checks the value on input field (blur event) if symbol counter is correct.
<input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Please enter 6 symbols"
/>
  Information of the correct symbol number is placed in input field, shows in its attribute data-length.
  If the symbol counter is correct then input border takes green color, if number is incorrect then takes red color.
  To add color styles CSS classes are used - valid, invalid.
#validation-input {
  border: 3px solid #bdbdbd;
}

#validation-input.valid {
  border-color: #4caf50;
}

#validation-input.invalid {
  border-color: #f44336;
}

  Task 7
  Script answers on input#font-size-control value (input event) and changes inline style of the span#text updating the fint-size value.
  As a result when bar is moved font value changes.
 <input id="font-size-control" type="range" min="16" max="96" />
<br />
<span id="text">Abracadabra!</span>

  Task 8
  Script manages login form.
<form class="login-form">
  <label>
    Email
    <input type="email" name="email" />
  </label>
  <label>
    Password
    <input type="password" name="password" />
  </label>
  <button type="submit">Login</button>
</form>
  Form form.login-form sends data regarding submit event.
  While the form is being sent webpage is not restarting.
  All fields must be field otherwise alert is shown with proper information that all fields should be field.
 If the user field all the fields and sent the form the fields values are placed into console and form is cleared with reset method. 
  Form values are same as field names. In order to achieve that elements were put into elements property.
  
  Task 9
  Script changes background color of the <body> element with inline style after clicking on button.change-color and enters color value into span.color. 
<div class="widget">
  <p>Background color: <span class="color">-</span></p>
  <button type="button" class="change-color">Change color</button>
</div>
  To generate random color function getRandomHexColor is used.
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

  Task 10 (in progress)
  Script creates and removes elements collection. User enters element counter to input and clicks Utwórz button which initiates collection creation.
After clicking Usuń button, collection elements are being removed.  
 <div id="controls">
  <input type="number" min="1" max="100" step="1" />
  <button type="button" data-create>Create</button>
  <button type="button" data-destroy>Destroy</button>
</div>

<div id="boxes"></div>
  Function createBoxes(amount), takes 1 parameter - number. Function creates as many <div> as shown in amount and adds them to div#boxes.
  Dimensions of first <div> - 30px on 30px.
Every next element should be wider and higher than previous about 10px.
  All elements should have random background color in HEX format. Function getRandomHexColor is used to receive the color.
  function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
Function destroyBoxes() removes div#boxes content deleting all created elements in the same time.
