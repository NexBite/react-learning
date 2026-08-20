This topic brings several things together.

The goal is:
Avoid unnecessary work and unnecessary renders.
Common areas:

1. Component structure
2. Stable keys
3. Avoid unnecessary state
4. useMemo
5. useCallback
6. React.memo
7. Code splitting
8. Lazy loading
9. Efficient lists
10. Avoid unnecessary effects

For example:

const expensiveValue = useMemo(() => {
  return calculateSomething(data);
}, [data]);

and:

const handleClick = useCallback(() => {
  ...
}, []);

and:

const Product = memo(...);

These are tools, not rules that should be applied everywhere.