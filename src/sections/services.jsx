import React from 'react'
import { motion } from 'framer-motion'
import { GiLotus, GiStoneStack } from 'react-icons/gi'
import { FaSpa } from 'react-icons/fa' // Dodajemy nową ikonę

const servicesData = [
	{
		icon: <GiLotus size={40} className='text-brand-primary' />,
		title: 'Masaż Relaksacyjny',
		description:
			'Delikatny masaż, który redukuje stres, napięcie mięśniowe i przywraca wewnętrzną równowagę.',
	},
	{
		icon: <GiStoneStack size={40} className='text-brand-primary' />,
		title: 'Masaż Gorącymi Kamieniami',
		description:
			'Terapia wykorzystująca gładkie, podgrzane kamienie do głębokiego rozluźnienia mięśni i ukojenia nerwów.',
	},
	{
		icon: <FaSpa size={40} className='text-brand-primary' />, // Zmieniona ikona
		title: 'Masaż Leczniczy',
		description:
			'Skupia się na konkretnych dolegliwościach bólowych, poprawiając elastyczność i funkcjonowanie aparatu ruchu.',
	},
]

const cardVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: (i) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: i * 0.2,
			duration: 0.5,
		},
	}),
}

const Services = () => {
	return (
		<section id='services' className='py-20 px-4'>
			<div className='max-w-7xl mx-auto text-center'>
				<h2 className='text-3xl md:text-4xl font-serif font-semibold mb-2'>
					Nasze Masaże
				</h2>
				<p className='text-lg mb-12 max-w-2xl mx-auto'>
					Wybierz zabieg idealny dla siebie.
				</p>

				<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
					{servicesData.map((service, index) => (
						<motion.div
							key={index}
							className='bg-white p-8 rounded-lg shadow-lg text-center'
							custom={index}
							initial='hidden'
							whileInView='visible'
							viewport={{ once: true }}
							variants={cardVariants}
						>
							<div className='flex justify-center mb-4'>{service.icon}</div>
							<h3 className='text-xl font-semibold mb-2'>{service.title}</h3>
							<p>{service.description}</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Services
