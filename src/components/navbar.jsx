import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa' // Ikony hamburgera

// Zastąp ścieżkę do swojego logo
import logo from '../assets/logo.png'

const navLinks = [
	{ title: 'O nas', id: 'about' },
	{ title: 'Masaże', id: 'services' },
	{ title: 'Cennik', id: 'pricing' },
	{ title: 'Opinie', id: 'reviews' },
	{ title: 'Kontakt', id: 'contact' },
]

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const [isScrolled, setIsScrolled] = useState(false)
	const [lastYPos, setLastYPos] = useState(0)
	const [shouldShowNav, setShouldShowNav] = useState(true)

	useEffect(() => {
		const handleScroll = () => {
			const yPos = window.scrollY
			const isScrollingUp = yPos < lastYPos

			setIsScrolled(yPos > 50)
			setShouldShowNav(yPos < 50 || isScrollingUp)
			setLastYPos(yPos)
		}

		window.addEventListener('scroll', handleScroll, false)
		return () => window.removeEventListener('scroll', handleScroll, false)
	}, [lastYPos])

	return (
		<nav
			className={`sticky top-0 z-50 transition-transform duration-300 ${
				shouldShowNav ? 'translate-y-0' : '-translate-y-full'
			} ${
				isScrolled ? 'bg-white/80 backdrop-blur-sm shadow-md' : 'bg-transparent'
			}`}
		>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex items-center justify-between h-20'>
					{/* Logo */}
					<a href='#home' className='flex flex-shrink-0 items-center space-x-2'>
						<img className='h-12 w-auto' src={logo} alt='' />
						<span className=''>NaLeżysz</span>
					</a>

					{/* Menu na desktop */}
					<div className='hidden md:flex items-center space-x-8'>
						{navLinks.map((link) => (
							<a
								key={link.id}
								href={`#${link.id}`}
								className='text-brand-text hover:text-brand-primary font-medium transition-colors duration-300'
							>
								{link.title}
							</a>
						))}
						<a
							href='https://booksy.com/pl-pl/'
							target='_blank'
							rel='noopener noreferrer'
							className='bg-brand-primary text-black px-4 py-2 rounded-full hover:bg-opacity-90 transition-all duration-300 font-medium shadow-md border-1 border-brand-primary'
						>
							Umów wizytę
						</a>
					</div>

					{/* Przycisk hamburgera na mobile */}
					<div className='md:hidden'>
						<button
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className='text-brand-text focus:outline-none transition-all duration-800'
						>
							{isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
						</button>
					</div>
				</div>
			</div>

			{/* Menu na mobile */}
			{isMenuOpen && (
				<div className='md:hidden bg-white/95 backdrop-blur-sm shadow-lg transition-all	duration-800'>
					<div className='px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center'>
						{navLinks.map((link) => (
							<a
								key={link.id}
								href={`#${link.id}`}
								onClick={() => setIsMenuOpen(false)}
								className='block px-3 py-2 rounded-md text-base font-medium text-brand-text hover:bg-brand-pink'
							>
								{link.title}
							</a>
						))}
						<a
							href='https://booksy.com/pl-pl/'
							target='_blank'
							rel='noopener noreferrer'
							className='block w-3/4 mx-auto mt-4 bg-brand-primary text-black px-4 py-2 rounded-full hover:bg-opacity-90 transition-all duration-300 font-semibold shadow-sm'
						>
							Umów wizytę
						</a>
					</div>
				</div>
			)}
		</nav>
	)
}

export default Navbar
