import React from 'react'
import Navbar from './components/navbar'
import Hero from './sections/hero'
import About from './sections/about'
import Services from './sections/services'
import Pricing from './sections/pricing'
import Reviews from './sections/reviews'
import Map from './sections/map'
import Booking from './sections/booking'
import Footer from './components/footer'

function App() {
	return (
		<div className='bg-brand-beige text-brand-text font-sans'>
			<Navbar />
			<main>
				<Hero />
				<About />
				<Services />
				<Pricing />
				<Reviews />
				<Map />
				<Booking />
			</main>
			<Footer />
		</div>
	)
}

export default App
