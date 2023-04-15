import Logo from '../../assets/logo.svg'

function Navbar() {

	return (

		<nav className="text-light-blue tracking-wider">
			<div className="flex flex-wrap items-center justify-between mx-auto p-4">
				<a href="./" className="flex items-center">
					<img src={Logo} className="h-13 mr-3" alt="Kalopsia Logo" />
				</a>
				<button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
					<span className="sr-only">Open main menu</span>
					<svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
				</button>
				<div className="hidden w-full md:block md:w-auto" id="navbar-default">
					<ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-white md:bg-transparent md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
						<li>
							<p className="block py-2 pl-3 pr-4 text-grey-900 rounded md:bg-transparent md:light-blue md:p-0 dark:text-white md:dark:text-blue-500">PORTFOLIO CONTAINS:</p>
						</li>
						<li>
							<a href="./work" className="block py-2 pl-3 pr-4 text-light-grey rounded hover:bg-gray-100 md:hover:bg-lightest-blue md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">WORK</a>
						</li>
						<li>
							<a href="./about" className="block py-2 pl-3 pr-4 text-light-grey rounded hover:bg-gray-100  md:border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">ABOUT</a>
						</li>
						<li>
							<a href="./contact" className="block py-2 pl-3 pr-4 text-light-grey rounded hover:bg-gray-100 md:border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">CONTACT</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>

	);
}

export default Navbar;