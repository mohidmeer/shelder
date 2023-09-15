import About from '@/components/About'
import Brochure from '@/components/Brochure'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Map from '@/components/Map'
import NavBar from '@/components/NavBar'
import News from '@/components/News'
import Partners from '@/components/Parteners'
import Process from '@/components/Process'
import Project from '@/components/Projects'
import Services from '@/components/Services'
import Teams from '@/components/Team'
import Testimonials from '@/components/Testimonials'
import TopBar from '@/components/TopBar'
import WhyWe from '@/components/WhyWe'
import AppLayout from '@/layouts/AppLayout'


export default function Home() {
  return (
    <AppLayout>
      <TopBar/>
      <Header/>
      <NavBar/>
      <Hero/>
      <About/>
      <Services/>
      <WhyWe/>
      <Project/>
      <Process/>
      <Teams/>
      <Testimonials/>
      <News/>
      <Brochure/>
      <Partners/>
      <Map/>
      <Footer/>
    

    </AppLayout>
  )
}
