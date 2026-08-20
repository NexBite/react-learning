Until now, you've mostly had:

localhost:5173/

A real application needs multiple pages/routes:

/
 /products
 /products/1
 /cart
 /login
 /profile

React Router allows your React application to handle these routes.

Typical structure:

App
│
├── /
│    └── Home
│
├── /products
│    └── Products
│
├── /cart
│    └── Cart
│
└── /login
     └── Login

Modern React Router can be used with declarative routes such as:

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/products" element={<Products />} />
  <Route path="/cart" element={<Cart />} />
</Routes>

Navigation can use:

<Link to="/products">
  Products
</Link>

instead of manually manipulating URLs.