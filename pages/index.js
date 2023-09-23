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
import Head from 'next/head'


export default function Home() {
  return (
    <>
    <Head>
                <title>{'Hostbuilding'}</title>
                <meta name="description" content={"New Jersey Trusted Roofing Contractor. Protecting what matters the most. Whether you're in need of a full roof replacement or a roof repair, you can coun"} />
                <meta property="og:description" content={"New Jersey Trusted Roofing Contractor. Protecting what matters the most. Whether you're in need of a full roof replacement or a roof repair, you can coun"} />
                {/* <meta property="og:image" content={ogimgurl} />
                 <meta property="og:image:width" content="400" />
                    <meta property="og:image:height" content="400" /> */}
                <meta property="og:title" content={'Hostbuilding'} />


                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={'Hostbuilding'} />
                <meta name="twitter:description" content={"New Jersey Trusted Roofing Contractor. Protecting what matters the most. Whether you're in need of a full roof replacement or a roof repair, you can coun"} />
                {/* <meta name="twitter:image" content={ogimgurl} /> */}
            </Head>
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
    

    </AppLayout>
    </>
  )
}
