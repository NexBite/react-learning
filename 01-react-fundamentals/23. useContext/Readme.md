# Imagine this:
App
 ├── Header
 │    └── UserProfile
 │
 └── Dashboard
      └── UserProfile
Suppose both need:
user name
theme
language
authentication information
Without Context:
App
 ↓
Header
 ↓
UserProfile
 ↓
pass props
This can become prop drilling.
Context solves this
Conceptually:

          Context
             │
     ┌───────┼───────┐
     ↓       ↓       ↓
 Header   Dashboard  Profile

Components can access shared data without manually passing it through every intermediate component.
    import { createContext } from "react";
    const UserContext = createContext();
    export default UserContext;
Provider:
      <UserContext.Provider value={{ name: "Aditya" }}>
          <App />
        </UserContext.Provider>
   Modern React also has a simpler provider syntax in newer React versions, but the underlying concept is the same:
    Context provides shared values to a component subtree. 