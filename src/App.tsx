import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import { lazy,Suspense } from "react";

const Dashboard = lazy(()=>import("./pages/Dashboard.tsx"));
const Products = lazy(()=>import("./pages/Products.tsx"));
const Customers = lazy(()=>import("./pages/Customers.tsx"));
const Transaction = lazy(()=>import("./pages/Transaction.tsx"));

function App():JSX.Element {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/Products" element={<Products />} />
          <Route path="/admin/Customers" element={<Customers />} />
          <Route path="/admin/Transaction" element={<Transaction />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
