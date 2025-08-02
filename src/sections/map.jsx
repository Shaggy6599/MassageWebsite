import React from 'react'

const Map = () => {
	return (
		<section id='contact' className='py-20 px-4 bg-white'>
			<div className='max-w-7xl mx-auto'>
				<h2 className='text-3xl md:text-4xl font-serif font-semibold text-center mb-8'>
					Znajdź nas
				</h2>
				<div className='aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl'>
					{/* WAŻNE: Wejdź na Google Maps, znajdź swoją lokalizację, kliknij "Udostępnij",
            następnie "Umieść mapę" i skopiuj cały tag <iframe>. Wklej go poniżej,
            zastępując obecny. Pamiętaj, aby dodać loading="lazy".
          */}
					<iframe
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d153210.03116958853!2d17.873232090535343!3d53.12981846201027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47031386764ebd6f%3A0xe49ee48c4b65f30e!2sBydgoszcz!5e0!3m2!1spl!2spl!4v1754125384546!5m2!1spl!2spl'
						width='100%'
						height='450'
						style={{ border: 0 }}
						allowFullScreen=''
						loading='lazy'
						referrerPolicy='no-referrer-when-downgrade'
					></iframe>
				</div>
			</div>
		</section>
	)
}

export default Map
