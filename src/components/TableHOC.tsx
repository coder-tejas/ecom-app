import { getCoreRowModel, getFilteredRowModel, getSortedRowModel, useReactTable, getPaginationRowModel, flexRender, ColumnDef } from "@tanstack/react-table"





function TableHOC<T>({
  columns,
  data,
  containerClassname,
  heading,
}: {
  columns: ColumnDef<T>[];
  data: T[];
  containerClassname: string;
  heading: string;
}) {


  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    // state:{
    //     sorting:sorting,

    // }
  })

  return (
    <>
      <div className={containerClassname}>
        <h2>{heading}</h2>
        <table className="table">

          <thead>
            {table.getHeaderGroups().map(headerGroup => (

              <tr key={headerGroup.id}>{headerGroup.headers.map(header => (
                <th key={header.id} >{flexRender(header.column.columnDef.header, header.getContext())}</th>
              ))}</tr>

            ))}
          </thead>
          <tbody>

            {table.getRowModel().rows.map(row => (

              <tr key={row.id}>
                {row.getVisibleCells().map(cell => (
                  <td key={cell.id}>
                    {flexRender(
                      cell.column.columnDef.cell,
                      cell.getContext()
                    )}
                  </td>
                ))}
              </tr>

            ))}


          </tbody>
        </table>

      </div>



    </>
  )
}

export default TableHOC
