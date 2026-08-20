# 19. useEffect
       ↓
Run side effects after rendering

# 20. Effect cleanup
       ↓
Stop/remove side effects

# 21. Fetching API
       ↓
useEffect + fetch + state

# 22. useRef
       ↓
DOM reference / persistent mutable value
without re-render

# 23. useContext
       ↓
Share data across component tree

# 24. Custom Hooks
       ↓
Reuse React logic

# 25. useReducer
       ↓
Manage complex state transitions

# 26. useMemo
       ↓
Cache expensive calculations
for performance
# ============== The most important distinction
useState
   → "I need to store changing UI data."

useEffect
   → "I need to perform something after rendering."

useRef
   → "I need to remember something without re-rendering,
      or access a DOM element."

useContext
   → "Many components need the same data."

Custom Hook
   → "I want to reuse React logic."

useReducer
   → "My state logic has become complicated."

useMemo
   → "I need to optimize an expensive calculation."

                 Parent
                    │
              State lives here
                    │
          ┌─────────┴─────────┐
          ↓                   ↓
       Child A             Child B
          │                   │
      changes state        reads state