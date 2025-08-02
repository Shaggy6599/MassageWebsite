import React from 'react'

const Reviews = () => {
	return (
		<section id='reviews' className='py-20 px-4 text-center bg-brand-pink/20'>
			<div className='max-w-4xl mx-auto'>
				<h2 className='text-3xl md:text-4xl font-serif font-semibold mb-4'>
					Opinie naszych Klientek
				</h2>
				<p className='text-lg mb-8'>
					Twoje zadowolenie jest dla nas najważniejsze. Zobacz, co mówią o nas
					osoby, które już nas odwiedziły.
				</p>
				<a
					// WAŻNE: Wklej tutaj swój link do opinii na Booksy
					href='https://booksy.com/pl-pl/p/twoj-salon'
					target='_blank'
					rel='noopener noreferrer'
					className='bg-white text-brand-primary px-8 py-3 rounded-full hover:bg-gray-100 transition-all duration-300 font-semibold text-lg shadow-md border border-brand-primary'
				>
					Zobacz opinie na Booksy
				</a>
			</div>
		</section>
	)
}

export default Reviews
