import { FaPlus } from "react-icons/fa"
import Adminsidebar from "../components/AdminSidebar"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import TableHOC from "../components/TableHOC"


interface ProductProps{
  id:number,
  photo:string,
  name:string,
  price:number,
  stock:number
}


const Products = () => {

  const [data,setData] = useState<ProductProps[]>([]);

  const columns = [
    {
      header:"Image",
      accessorKey:"image",
    },
    {
      header:"Product",
      accessorKey:"title"
    },
    {
      header:"Price",
      accessorKey:"price"
    },
    {
      header:"Stock",
      accessorKey:"stock"
    }
  ]
    
   useEffect(()=>{
    fetch("https://fakestoreapi.com/products")
    .then(res=>{return res.json()})
    .then(resp =>{
      resp.forEach((product) => {
        product.stock = Math.floor(Math.random() * 100) + 1;
        product.image =  (<img src={product.photo} alt="img" style={{width: 50, height:50}}/>) 

      });
       
      console.log(resp)
      setData(resp)})

    

   },[])
   

  return (
    <>
    <div className="admin-container">
    <Adminsidebar/>
    <main><TableHOC data={data} columns={columns} containerClassname="dashboard-product-box" heading="Products"/></main>
     <Link to={""} className="create-product-btn">
     <FaPlus/>
     </Link>  
    </div>
    </>
  )
}

export default Products
