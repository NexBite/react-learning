# 1️ What is React?
React is a JavaScript library for building user interfaces.
The most important concept is:
React lets us build the UI using reusable components.
Think about a shopping website.
Without React, you might manually manipulate the DOM:
const title = document.createElement("h2");

title.innerText = "Laptop";

productList.appendChild(title);
You've already done this in your Todo project.
With React, you describe the UI:
function Product() {
    return <h2>Laptop</h2>;
}
React handles the process of rendering that component into the page.
The mental model
With traditional DOM manipulation:
JavaScript
    ↓
Find DOM element
    ↓
Modify DOM
    ↓
Browser UI

With React:

State / Data
     ↓
React Component
     ↓
UI
This becomes especially powerful when your application gets large.
