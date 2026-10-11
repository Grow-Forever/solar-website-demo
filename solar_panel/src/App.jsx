import Contact from './components/Contact'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Services from './components/Services'
import SolarCalculator from './components/SolarCalculator'
import Subsidy from './components/Subsidy'
import WhyChooseUs from './components/WhyChooseUs'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Services />
        <SolarCalculator />
        <Subsidy />
        <WhyChooseUs />
        <Contact />
        <Footer  />

      </main>
    </>
  )
}