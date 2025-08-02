import React from 'react'
import { motion } from 'framer-motion'

const Booking = () => {
	return (
		<section id='booking' className='py-20 px-4 text-center'>
			<motion.div
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.8 }}
			>
				<h2 className='text-3xl md:text-4xl font-serif font-semibold mb-4'>
					Gotowa na chwilę dla siebie?
				</h2>
				<p className='text-lg mb-10 md:mb-8 max-w-2xl mx-auto'>
					Zarezerwuj termin online w kilka kliknięć. Szybko, łatwo i wygodnie o
					każdej porze.
				</p>
				<a
					// WAŻNE: Wklej tutaj swój link do rezerwacji na Booksy
					href='https://booksy.com/pl-pl/'
					target='_blank'
					rel='noopener noreferrer'
					className='bg-brand-primary text-black px-10 py-4 rounded-full hover:bg-opacity-90 transition-all duration-300 font-semibold text-md md:text-xl shadow-lg'
				>
					Zarezerwuj teraz przez Booksy
				</a>
			</motion.div>
		</section>
	)
}

export default Booking
