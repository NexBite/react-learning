What happens if a component crashes?

Normally, an uncaught rendering error can break part of your React UI.

An Error Boundary lets you show fallback UI instead of leaving the user with a broken interface.

Conceptually:

Application
     │
 Error Boundary
     │
 ┌───┴────┐
 ↓        ↓
Normal   Error
 UI       ↓
          Fallback UI

For example:

Something went wrong.


[ Try Again ]

An important detail:

Traditional React Error Boundaries are implemented using a class component lifecycle API.

Conceptually:

class ErrorBoundary extends React.Component {


  state = {
    hasError: false
  };


  static getDerivedStateFromError() {
    return {
      hasError: true
    };
  }


  componentDidCatch(error, info) {
    console.error(error, info);
  }


  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong.</h2>;
    }


    return this.props.children;
  }
}

You don't need to memorize this yet. Understand the purpose first.