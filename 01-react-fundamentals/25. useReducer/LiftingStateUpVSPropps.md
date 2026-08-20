# -------- Lifting State Up vs Props
These concepts are connected:
# Props
Parent → Child

Parent
  ↓ props
Child
Lifting State Up

# Move state:

Child
  ↑
  │ state update
Parent
  ↓
Other Child

So:

Lifting state up means moving shared state to a common parent and passing the state and/or update function down through props.