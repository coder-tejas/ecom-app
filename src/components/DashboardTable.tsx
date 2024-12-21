import { useEffect, useState } from "react"
import TableHOC from "./TableHOC";
// import { ColumnDef } from "@tanstack/react-table";

interface DataProps{
  id:string,
  quantity:number,
  discount:number,
  amount:number,
  status:string
}


function DashTable() {

    const [data,setData] = useState<DataProps[]>([]);
    const colmns= [
      {
        header:"ID",
        accessorKey: "id",
      },
      {
        header:"Quantity",
        accessorKey: "quantity",
      },
      {
        header:"Discount",
        accessorKey: "discount",
      },
      {
        header:"Amount",
        accessorKey: "amount",
      },
      {
        header:"Status",
        accessorKey: "status",
      },
      
    ] 
    useEffect(()=>{
        fetch('/public/transaction.json')
        .then(res=>{return res.json()})
        .then(response=>setData(response))
    })

    return (
      <TableHOC<DataProps>
        columns={colmns}
        data={data}
        containerClassname="transaction-box"
        heading="Top Transaction"
      />
    );
    
    
}

export default DashTable
