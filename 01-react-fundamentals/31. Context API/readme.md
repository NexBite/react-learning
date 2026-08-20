Context is built into React.

It helps share data across a component tree without passing props through every intermediate component.

Example:

             UserContext
                  │
       ┌──────────┼──────────┐
       ↓          ↓          ↓
    Header     Products    Profile

Create context:

import { createContext } from "react";


export const UserContext = createContext(null);

Provide data:

<UserContext.Provider value={user}>
  <App />
</UserContext.Provider>

Consume it:

const user = useContext(UserContext);
Good use cases

Context can be useful for relatively global values such as:

theme
current user
locale
authentication-related state

But Context isn't automatically the best solution for every piece of application state.
