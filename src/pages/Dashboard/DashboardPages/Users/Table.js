import React, { useState } from 'react'
import { TableBody } from './TableBody'
import { TableHeaders } from './TableHeaders'
import { TableActions } from './TableActions'
import ReactPaginate from 'react-paginate'
import '../../../../components/Paginator/Paginator.css'

export const Table = ({ data, headers, keys, PER_PAGE = 5 }) => {
  const [currentPage, setCurrentPage] = useState(0)

  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage)
  }

  const offset = currentPage * PER_PAGE
  const currentPageData = data
    .slice(offset, offset + PER_PAGE)
    .map((row, key) => (
      <tr key={key} className="border-b border-gray-200 hover:bg-gray-100">
        {keys.map((key, keyValue) => {
          if (keyValue < 1)
            return (
              <td
                key={keyValue}
                className="px-6 py-3 text-left whitespace-nowrap"
              >
                <div className="flex items-center">
                  <span className="font-medium">{row[key]}</span>
                </div>
              </td>
            )
          return (
            <td
              key={keyValue}
              className="px-6 py-3 text-center whitespace-nowrap"
            >
              <div className="flex items-center justify-center">
                <span className="font-medium">{row[key]}</span>
              </div>
            </td>
          )
        })}
        <TableActions key={key} />
      </tr>
    ))

  const pageCount = Math.ceil(data.length / PER_PAGE)

  return (
    <>
      <div className="sm:overflow-x-scroll lg:overflow-x-hidden">
        <div className="flex justify-center font-sans bg-gray-100">
          <div className="w-full lg:w-5/6">
            <div className="my-6 bg-white rounded shadow-md">
              <table className="w-full table-auto min-w-max">
                <TableHeaders headers={headers} />
                <TableBody>
                  {currentPageData}
                </TableBody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <ReactPaginate
        previousLabel={'\u2770 Previous'}
        nextLabel={'Next \u2771'}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={
          'pagination my-5 w-1/2 text-xs flex flex-wrap flex-row md:text-md mx-auto'
        }
        previousLinkClassName={
          'pagination__link focus:outline-none hover:opacity-60'
        }
        nextLinkClassName={
          'pagination__link focus:outline-none hover:opacity-60'
        }
        disabledClassName={'pagination__link--disabled focus:outline-none'}
        activeClassName={'pagination__link--active focus:outline-none'}
      />
    </>
  )
}
