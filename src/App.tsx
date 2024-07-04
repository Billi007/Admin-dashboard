import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import { lazy,Suspense } from "react"
import Loader from "./component/Loader";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Products = lazy(() => import("./pages/Product"));
const Transactions = lazy(() => import("./pages/Trasactions"));
const Customers = lazy(() => import("./pages/Customers"));
const NewProduct = lazy(() => import("./pages/management/NewProduct"));
const ProductManagement = lazy(() => import("./pages/management/ProductManagement"));
const TransactionManagement = lazy(() => import("./pages/management/TransactionManagement"));
const BarChart = lazy(() => import("./pages/charts/BarChart"))
const PieChart = lazy(() => import("./pages/charts/PieChart"))
const LineChart = lazy(() => import("./pages/charts/LineChart"))
const Stopwatch = lazy(() => import("./pages/Apps/Stopwatch"))
const Coupon = lazy(() => import("./pages/Apps/Coupon"))
const Toss = lazy(() => import("./pages/Apps/Toss"))

function App() {

  return (
    <>
     <Router>
      <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path="/admin/dashboard" element={<Dashboard/>} />
        <Route path="/admin/products" element={<Products/>} />
        <Route path="/admin/transactions" element={<Transactions/>} />
        <Route path="/admin/customers" element={<Customers/>} />

        {/* charts */}
        <Route path="/admin/chart/bar" element={<BarChart/>} />
        <Route path="/admin/chart/pie" element={<PieChart/>} />
        <Route path="/admin/chart/line" element={<LineChart/>} />

        {/* apps */}
        <Route path="/admin/app/stopwatch" element={<Stopwatch/>} />
        <Route path="/admin/app/coupon" element={<Coupon/>} />
        <Route path="/admin/app/toss" element={<Toss/>} />

        {/* management */}
        <Route path="/admin/products/new" element={<NewProduct/>}/>
        <Route path="/admin/products/:id" element={<ProductManagement/>}/>
        <Route path="/admin/transactions/:id" element={<TransactionManagement/>}/>
      </Routes>
      </Suspense>
     </Router>
    </>
  )
}
  export default App
      
      
      

