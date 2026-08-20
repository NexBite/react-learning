You've already learned:

useState()

and:

Lifting state up

But imagine a large application:

                   App
                    │
        ┌───────────┼───────────┐
        ↓           ↓           ↓
     Header      Products      Cart
        ↓                       ↓
      User                   Checkout

Many components may need:

user
cart
theme
authentication
products
notifications

Managing all of this with props can become difficult.

That's where state management comes in.