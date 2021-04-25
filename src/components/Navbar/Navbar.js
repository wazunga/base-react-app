import React, {Fragment, useState} from 'react'
import { Link } from '@reach/router'
import menu from '../../assets/menu.svg'
import login from '../../assets/login.svg'
//TODO icono de bars y hacer que se vea
export const Navbar= ({logo, companyName}) => {
	const [navbarOpen, setNavbarOpen]= useState(false)
	return(
		<Fragment>
		  <nav className="relative flex relative block flex-wrap items-center justify-between px-4 py-3 bg-green-700">
			  <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
				<Link
					className="text-sm font-bold  inline-flex mr-4 py-2 whitespace-nowrap uppercase text-white"
				  to="/"
				>
				  <img
					src={logo}
					className='rounded-full w-8 mx-3'
					alt='logo'
				  />
					<span className='text-xl font-bold tracking-wide uppercase'>{companyName}</span>
				</Link>
				<button
				  className="text-black cursor-pointer text-xl w-12 leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
				  type="button"
				  onClick={() => setNavbarOpen(!navbarOpen)}
				>
					<img
						src={menu}
						alt='menu'
						className='w-8'
					/>
				</button>
			  </div>
			  <div
				className={
					"lg:flex flex-grow items-center " +
				  (navbarOpen ? " flex" : " hidden")
				}
				id="example-navbar-danger"
			  >
				<ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
				  <li className="nav-item">
					<Link
					  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
					  to="/"
					>
						<img src={login} className='w-6' alt='login-logo'/> <span className="ml-2">Registrarse</span>
					</Link>
				  </li>

				  <li className="nav-item">
					<Link
					  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
					  to="/"
					>
						<img src={login} className='w-6' alt='login-logo'/> <span className="ml-2">Registrarse</span>
					</Link>
				  </li>
				  <li className="nav-item">
					<Link
					  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
					  to="/"
					>
						<img src={login} className='w-6' alt='login-logo'/> <span className="ml-2">Registrarse</span>
					</Link>
				  </li>
				</ul>
			  </div>
		  </nav>
		</Fragment>
	)
}

