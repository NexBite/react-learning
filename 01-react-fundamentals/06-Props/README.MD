# -Props
# What are Props?
  Props = properties
  Props allow a parent component to send data to a child component.
Parent
   │
   │ props
   ↓
Child
function App() {
    return <User name="Aditya" />;
}

name="Aditya" is a prop.

The child receives it:

function User(props) {
    return <h2>Hello {props.name}</h2>;
}
# --Multiple Props
function App() {
    return (
        <User
            name="Aditya"
            age={30}
            city="Delhi"
        />
    );
}
# Child:
function User(props) {
    return (
        <div>
            <h2>{props.name}</h2>
            <p>Age: {props.age}</p>
            <p>City: {props.city}</p>
        </div>
    );
}
# -Props can contain different data types
# String
<User name="Aditya" />
Number

Use {}:

<User age={30} />

# Boolean
<User isAdmin={true} />
or:
<User isAdmin />
The second version means:
isAdmin={true}

# Array

<User skills={["JavaScript", "React", "Java"]} />
Object
<User
    user={{
        name: "Aditya",
        age: 30
    }}
/>

# Props are read-only
This is extremely important.
A child should not modify its props.
For example, don't do:

function User({ name }) {
    name = "Rahul"; // ❌ Don't do this
    return <h2>{name}</h2>;
}

Props flow:
Parent
   ↓
Child
The child receives the data.
Later, when we learn state, you'll see how a child can request a parent to update something.