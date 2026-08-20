                    React Advanced
                         │
       ┌─────────────────┼──────────────────┐
       ↓                 ↓                  ↓
   Performance        Routing          State
       │                 │                  │
   useMemo          React Router       Context
   useCallback                          Redux
   React.memo
       │
       ↓
Optimization


Error handling
      ↓
Error Boundaries


Large applications
      ↓
Lazy Loading
      ↓
Suspense

# ----- The most important differences
| Concept                  | Main purpose                                            |
| ------------------------ | ------------------------------------------------------- |
| `useMemo`                | Cache a calculated value                                |
| `useCallback`            | Cache a function reference                              |
| `React.memo`             | Skip unnecessary child renders when props are unchanged |
| React Router             | Handle application routes/pages                         |
| State Management         | Organize shared application state                       |
| Context API              | Share values through a component tree                   |
| Redux Toolkit            | Structured global state management                      |
| Performance Optimization | Reduce unnecessary work/renders                         |
| Error Boundary           | Handle rendering errors with fallback UI                |
| `lazy()`                 | Load component code on demand                           |
| Suspense                 | Display fallback UI while something is loading          |
