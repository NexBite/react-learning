Suppose your application has:

Home
Products
Admin
Reports
Settings

Why load every page's JavaScript immediately?

Instead, we can load some components only when needed.

That's lazy loading.

const Products = lazy(() => import("./Products"));

Then:

<Suspense fallback={<p>Loading...</p>}>
  <Products />
</Suspense>

Flow:

User opens application
        ↓
Products component not loaded yet
        ↓
User navigates to Products
        ↓
React loads Products chunk
        ↓
Suspense shows "Loading..."
        ↓
Products appears

This is called code splitting.

