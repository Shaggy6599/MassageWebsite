import React from 'react'
import { motion } from 'framer-motion'

const pricingData = [
	{
		title: 'Masaż Relaksacyjny',
		duration: '60 min',
		price: '180 zł',
	},
	{
		title: 'Masaż Gorącymi Kamieniami',
		duration: '75 min',
		price: '250 zł',
		popular: true,
	},
	{
		title: 'Masaż Leczniczy',
		duration: '60 min',
		price: '220 zł',
	},
	{
		title: 'Masaż Twarzy Kobido',
		duration: '90 min',
		price: '300 zł',
	},
]

const Pricing = () => {
	return (
		<section id='pricing' className='py-20 px-4 bg-white'>
			<div className='max-w-7xl mx-auto text-center'>
				<h2 className='text-3xl md:text-4xl font-serif font-semibold mb-12'>
					Cennik
				</h2>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
					{pricingData.map((item, index) => (
						<motion.div
							key={index}
							className={`relative bg-brand-beige p-6 rounded-lg shadow-md border-t-4 ${
								item.popular ? 'border-brand-primary' : 'border-transparent'
							}`}
							initial={{ opacity: 0, scale: 0.9 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
						>
							{item.popular && (
								<div className='absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-brand-primary text-white text-sm font-semibold px-3 py-1 rounded-full'>
									Najpopularniejszy
								</div>
							)}
							<h3 className='text-xl font-semibold mt-4 mb-2'>{item.title}</h3>
							<p className='text-brand-text mb-4'>{item.duration}</p>
							<p className='text-3xl font-bold text-brand-primary'>
								{item.price}
							</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Pricing
