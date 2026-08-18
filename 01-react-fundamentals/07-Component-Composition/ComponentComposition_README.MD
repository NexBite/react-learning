# -Component Composition
Now let's combine multiple components.
App
│
├── Header
├── Product
│
└── Footer
Instead of putting everything into App.jsx, we create separate components.
# -Header.jsx
function Header() {
    return (
        <header>
            <h1>My Store</h1>
        </header>
    );
}
export default Header;
# Product.jsx
function Product() {
    return (
        <div>
            <h2>Laptop</h2>
            <p>₹60000</p>
        </div>
    );
}

export default Product;
# -Footer.jsx
function Footer() {
    return (
        <footer>
            <p>© 2026 My Store</p>
        </footer>
    );
}

export default Footer;

# - Then App.jsx:
import Header from "./Header";
import Product from "./Product";
import Footer from "./Footer";

function App() {

    return (
        <>
            <Header />
            <Product />
            <Footer />
        </>
    );
}

export default App;

# - Composition + Props
Instead of hardcoding the Product:
function Product() {
    return <h2>Laptop</h2>;
}
we can pass the product through props.
# -App.jsx
<Product
    name="Laptop"
    price={60000}
/>

# -Product.jsx
function Product({ name, price }) {

    return (
        <div>
            <h2>{name}</h2>
            <p>₹{price}</p>
        </div>
    );
}

# -Now we can reuse it:
<Product
    name="Laptop"
    price={60000}
/>

<Product
    name="Mobile"
    price={25000}
/>

<Product
    name="Keyboard"
    price={2000}
/>
This is one of the biggest advantages of React components.
