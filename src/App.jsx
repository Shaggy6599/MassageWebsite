import React from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Services from './sections/Services'
import Pricing from './sections/Pricing'
import Reviews from './sections/Reviews'
import Map from './sections/Map'
import Booking from './sections/Booking'
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
