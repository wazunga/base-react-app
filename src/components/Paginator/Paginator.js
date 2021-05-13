import React, {useState} from 'react'
import ReactPaginate from 'react-paginate'
import './Paginator.css'

export const Paginator = ({data, PER_PAGE, tableHeaders, keysData}) => {
	const [currentPage, setCurrentPage] = useState(0)
	const handlePageClick = ({selected:selectedPage}) => {
		setCurrentPage(selectedPage)
	}
	const offset = currentPage * PER_PAGE
	const currentPageData = data
		.slice(offset, offset + PER_PAGE)
		.map((register, id) => {
			return(
				<tr key={id}>
					{	
						keysData.map((Key, id) => (
							<td key={id} className='px-6 py-4 whitespace-nowrap'>{register[Key]}</td>
						))
					}		
				</tr>
			)
		})
	const pageCount = Math.ceil(data.length / PER_PAGE)
	return(
		<>
			<table className='min-w-full divide-y divide-gray-200'>
				<thead className='bg-gray-100'>
					<tr>
						{
							tableHeaders.map((title, id) => (
									<th scope='col' key={id} className='px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase'>{title}</th>
							))
						}
					</tr>
				</thead>
				<tbody className='bg-white divide-y divide-gray-200'>
					{currentPageData}
				</tbody>
			</table>		
			<ReactPaginate
				previousLabel={'\u2770 Previous'}
				nextLabel={'Next \u2771'}
				pageCount={pageCount}
				onPageChange={handlePageClick}
				containerClassName={'pagination my-5 w-1/2 text-xs flex flex-wrap flex-row md:text-md mx-auto'}
				previousLinkClassName={'pagination__link focus:outline-none hover:opacity-60'}
				nextLinkClassName={'pagination__link focus:outline-none hover:opacity-60'}
				disabledClassName={'pagination__link--disabled focus:outline-none'}
				activeClassName={'pagination__link--active focus:outline-none'}
			/>
		</>
	)
}
