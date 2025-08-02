import React from 'react'
import { motion } from 'framer-motion'
// Zastąp ścieżkę do swojego zdjęcia
import aboutImage from '../assets/about-us-image.png'

const About = () => {
	return (
		<section id='about' className='py-20 px-4 bg-white'>
			<div className='max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center'>
				<motion.div
					initial={{ opacity: 0, x: -50 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 1 }}
				>
					<img
						src={aboutImage}
						alt='Wnętrze salonu masażu'
						className='rounded-lg shadow-xl w-full'
					/>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, x: 50 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8, delay: 0.2 }}
				>
					<h2 className='text-3xl md:text-4xl font-serif font-semibold text-brand-text mb-4'>
						O nas
					</h2>
					<p className='mb-4 text-lg'>
						W naszym salonie wierzymy, że masaż to nie luksus, a klucz do
						zdrowia i dobrego samopoczucia. Naszą misją jest zapewnienie Ci
						głębokiego relaksu i odprężenia w przyjaznej, ciepłej atmosferze.
					</p>
					<p className='text-lg'>
						Każdy zabieg jest dostosowany do Twoich indywidualnych potrzeb, aby
						przynieść maksymalne korzyści dla ciała i ducha. Używamy tylko
						naturalnych olejków i kosmetyków najwyższej jakości.
					</p>
				</motion.div>
			</div>
		</section>
	)
}

export default About
