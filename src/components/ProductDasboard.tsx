import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
  } from "@tanstack/react-table";
  import { useState } from "react";
  import { products } from "./fakerdata";
  
  function ProductDashboard() {
    interface ProdProps {
      imgSrc: string; // URL of the image
      productName: string; // Name of the product
      price: number; // Price of the product
      stock: number; // Stock count
    }
  
    // Assuming `products` is an array of `ProdProps`
    const [data] = useState<ProdProps[]>(products);
  
    const columnHelper = createColumnHelper<ProdProps>();
  
    const columns = [
      columnHelper.accessor("imgSrc", {
        id: "imgSrc",
        cell: (info) => <img src={info.getValue()} alt="img" style={{ width: "50px", height: "50px" }} />,
        header: "Photo",
      }),
      columnHelper.accessor("productName", {
        cell: (info) => <span>{info.getValue()}</span>,
        header: "Name",
      }),
      columnHelper.accessor("price", {
        cell: (info) => <span>${info.getValue()}</span>,
        header: "Price",
      }),
      columnHelper.accessor("stock", {
        cell: (info) => <span>{info.getValue()}</span>,
        header: "Stock",
      }),
    ];
  
    const table = useReactTable({
      data,
      columns,
      getCoreRowModel: getCoreRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
      getSortedRowModel: getSortedRowModel(),
      getFilteredRowModel: getFilteredRowModel(),
    });
  
    return (
      <div className="dashboard-product-box">
        <h2>Product Info</h2>
        <table className="table">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
  export default ProductDashboard;
  