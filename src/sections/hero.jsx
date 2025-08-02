import React from 'react'
import { motion } from 'framer-motion'

// Zastąp ścieżkę do swojego zdjęcia tła
import heroBg from '../assets/hero-background.png'

const Hero = () => {
	return (
		<section
			id='home'
			className='relative h-screen flex items-center justify-center text-white text-center'
		>
			{/* Tło */}
			<div
				className='absolute inset-0 bg-cover bg-center'
				style={{ backgroundImage: `url(${heroBg})` }}
			></div>
			{/* Nakładka dla lepszej czytelności tekstu */}
			<div className='absolute inset-0 bg-black/40'></div>

			<motion.div
				className='relative z-10 p-4'
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
			>
				{/* Możesz tu wstawić swoje logo w formacie SVG lub PNG */}
				<h1 className='text-4xl md:text-6xl font-serif font-bold tracking-wider mb-4'>
					Twoja Chwila Relaksu
				</h1>
				<p className='text-lg md:text-xl mb-8 max-w-2xl mx-auto'>
					Odkryj harmonię ciała i umysłu w naszym salonie masażu.
				</p>
				<a
					href='https://booksy.com/pl-pl/'
					target='_blank'
					rel='noopener noreferrer'
					className='bg-brand-primary text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-all duration-300 font-semibold text-lg shadow-lg'
				>
					Umów wizytę
				</a>
			</motion.div>
		</section>
	)
}

export default Hero
