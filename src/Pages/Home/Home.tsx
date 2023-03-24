import React from 'react'
import { About } from './Components/About'
import { Clients } from './Components/Clients'
import { Count } from './Components/Count'
import { Faq } from './Components/Faq'
import { Features } from './Components/Features'
import { MoreServices } from './Components/MoreServices'
import { Portfolio } from './Components/Portfolio'
import { Pricing } from './Components/Pricing'
import { Services } from './Components/Services'
import { Team } from './Components/Team'
import { Testimonials } from './Components/Testimonials'

export const Home = () => {
    return (
        <>


            <section id="hero" className="d-flex align-items-center">

                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                            <h1 data-aos="fade-up">Grow your business with Vesperr</h1>
                            <h2 data-aos="fade-up" data-aos-delay="400">We are team of talented designers making websites with Bootstrap</h2>
                            <div data-aos="fade-up" data-aos-delay="800">
                                <a href="#about" className="btn-get-started scrollto">Get Started</a>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="fade-left" data-aos-delay="200">
                            <img src="assets/img/hero-img.png" className="img-fluid animated" alt=""/>
                        </div>
                    </div>
                </div>

            </section>

            <main id="main">

<Clients/>
                <About/>

                <Count/>

                <Services/>

                <MoreServices/>

               <Features/>

                <Testimonials/>

                <Portfolio/>

                <Team/>

               <Pricing/>

                <Faq/>

            </main>


           
        </>
    )
}
