import React from 'react'
import { FaPhone, FaEnvelope, FaInstagram, FaFacebook } from 'react-icons/fa'

const Footer = () => {
	return (
		<footer className='bg-white text-brand-text pt-12 pb-8 px-4'>
			<div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left'>
				{/* Kontakt */}
				<div>
					<h4 className='font-semibold text-lg mb-3'>Kontakt</h4>
					<p className='flex items-center justify-center md:justify-start mb-2'>
						<FaPhone className='mr-2 text-brand-primary' /> +48 123 456 789
					</p>
					<p className='flex items-center justify-center md:justify-start'>
						<FaEnvelope className='mr-2 text-brand-primary' />{' '}
						kontakt@salondobrymasaz.pl
					</p>
					<p className='mt-2'>ul. Relaksu 12, 00-001 Warszawa</p>
				</div>

				{/* Social Media */}
				<div>
					<h4 className='font-semibold text-lg mb-3'>Znajdź nas</h4>
					<div className='flex justify-center md:justify-start space-x-4'>
						<a
							href='#'
							className='text-brand-text hover:text-brand-primary transition-colors'
						>
							<FaFacebook size={24} />
						</a>
						<a
							href='#'
							className='text-brand-text hover:text-brand-primary transition-colors'
						>
							<FaInstagram size={24} />
						</a>
					</div>
				</div>

				{/* Informacje */}
				<div>
					<h4 className='font-semibold text-lg mb-3'>Informacje</h4>
					<a
						href='#'
						className='block hover:text-brand-primary transition-colors'
					>
						Polityka Prywatności
					</a>
					<a
						href='#'
						className='block hover:text-brand-primary transition-colors mt-1'
					>
						Regulamin (RODO)
					</a>
				</div>
			</div>
			<div className='mt-12 text-center text-sm text-gray-500 border-t border-gray-200 pt-6'>
				<p>
					&copy; {new Date().getFullYear()} Twój Salon Masażu. Wszelkie prawa
					zastrzeżone.
				</p>
			</div>
		</footer>
	)
}

export default Footer
