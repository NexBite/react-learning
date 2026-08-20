# Redux is a state-management library.

Redux Toolkit (RTK) is the recommended modern way to write Redux logic.

Instead of:

Component
   ↓
props
   ↓
props
   ↓
props
   ↓
another component

you can have a central store:

                 Redux Store
                     │
       ┌─────────────┼─────────────┐
       ↓             ↓             ↓
     User           Cart         Products
       ↑             ↑             ↑
       └──────── Components ───────┘

Typical Redux Toolkit concepts:

Store
Slice
Action
Reducer
Dispatch
Selector

Example slice:

const counterSlice = createSlice({
  name: "counter",


  initialState: {
    value: 0
  },


  reducers: {
    increment: (state) => {
      state.value += 1;
    },


    decrement: (state) => {
      state.value -= 1;
    }
  }
});

Then a component can:

dispatch(increment());

and read:

const count = useSelector(
  state => state.counter.value
);

We'll do Redux as a separate hands-on exercise, because trying to learn all of Redux in one example would be confusing.