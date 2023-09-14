import About from '@/components/About'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import NavBar from '@/components/NavBar'
import Process from '@/components/Process'
import Project from '@/components/Projects'
import Services from '@/components/Services'
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
    

    </AppLayout>
  )
}
