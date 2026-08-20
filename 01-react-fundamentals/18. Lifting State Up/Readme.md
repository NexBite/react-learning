18. Lifting State Up is an important concept because it connects useState, props, events, and component communication.

18. Lifting State Up
🧠 The problem

Imagine you have two components:

App
├── Input
└── Display

The Input component changes some data, while Display needs to show that same data.

If the state is inside Input:

App
├── Input
│    └── state ❌
└── Display

Display cannot directly access Input's state.

Solution:

Move the state to their common parent.

App
├── state ✅
├── Input
└── Display

This is called:

Lifting State Up

Simple Example

Suppose we want an input and preview:

Name:
[ Aditya ]


Preview:
Hello Aditya

We could put the state inside App:

import { useState } from "react";


function App() {


  const [name, setName] = useState("");


  return (
    <div>
      <NameInput
        name={name}
        setName={setName}
      />


      <NameDisplay
        name={name}
      />
    </div>
  );
}


export default App;

Now:

                 App
                  │
            name / setName
             ┌────┴────┐
             ↓         ↓
        NameInput   NameDisplay
Child 1 — NameInput.jsx
function NameInput({ name, setName }) {


  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}


export default NameInput;

The child receives:

name
setName

as props.

Child 2 — NameDisplay.jsx
function NameDisplay({ name }) {


  return (
    <h2>
      Hello {name}
    </h2>
  );
}


export default NameDisplay;

It only needs:

name
🔥 What is actually happening?

The important part is:

User types
     ↓
NameInput
     ↓
setName()
     ↓
App's state changes
     ↓
App re-renders
     ↓
new name passed to NameDisplay
     ↓
Display updates

The state belongs to App, not NameInput.

Why not keep state in NameInput?

Because then:

NameInput
   ↓
state

and NameDisplay doesn't have access to it.

You could try passing data upward, but React's normal pattern is:

Put shared state in the closest common parent.

⭐ Very important pattern

You'll see this pattern everywhere:

function Parent() {


  const [value, setValue] = useState("");


  return (
    <>
      <ChildA
        value={value}
        setValue={setValue}
      />


      <ChildB
        value={value}
      />
    </>
  );
}

Think:

                 Parent
                    │
              State lives here
                    │
          ┌─────────┴─────────┐
          ↓                   ↓
       Child A             Child B
          │                   │
      changes state        reads state
🛒 Real-world example

This is especially important for the kind of projects you're going to build.

Imagine an e-commerce application:

App
│
├── ProductList
│
├── Cart
│
└── CartCount

Both Cart and CartCount need the same cart data.

Instead of:

ProductList
    ↓
cart state ❌

you can lift it:

             App
              │
          cart state
              │
      ┌───────┼────────┐
      ↓       ↓        ↓
 ProductList Cart   CartCount

Then:

ProductList
    ↓
add product
    ↓
setCart()
    ↓
App state updates
    ↓
Cart + CartCount update

This is exactly the kind of component communication you'll use in your restaurant ordering / e-commerce style applications.

🧠 Lifting State Up vs Props

These concepts are connected:

Props

Parent → Child

Parent
  ↓ props
Child
Lifting State Up

Move state:

Child
  ↑
  │ state update
Parent
  ↓
Other Child

So:

Lifting state up means moving shared state to a common parent and passing the state and/or update function down through props.