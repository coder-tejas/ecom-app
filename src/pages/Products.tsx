import { FaPlus } from "react-icons/fa"
import Adminsidebar from "../components/AdminSidebar"
import { Link } from "react-router-dom"
import ProductDashboard from "../components/ProductDasboard"




const Products = () => {

   return (
    <>
    <div className="admin-container">
    <Adminsidebar/>
    <main><ProductDashboard /></main>
     <Link to={"/admin/product/new"} className="create-product-btn">
     <FaPlus/>
     </Link>  
    </div>
    </>
  )
}

export default Products
