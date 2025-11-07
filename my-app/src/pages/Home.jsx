import React from 'react'
import BannerArea from '../components/BannerArea'
import About from '../components/About'
import Services from '../components/Services'
import Choose from '../components/Choose'
import ClientsSay from '../components/ClientsSay'
import OurBlog from '../components/OurBlog'
import DigitalFuture from '../components/DigitalFuture'
import clientsData from '../data/Home/clientsDataHome.json'
import homeBanner from '../assets/Home/banner.png'

const Home = () => {
  return (
    <div>
      <BannerArea
        title={
          <>
            Empowering Your Digital Transformation{" "}
            <span className="text-blue-600"></span>
          </>
        }
        description="We design, build, and optimize websites and marketing strategies that grow your business."
        primaryBtn="Get Started"
        secondaryBtn="Explore Services"
        image={homeBanner}
      />
      <About />
      <Services />
      <Choose />
      <ClientsSay
        title="What Our Clients Say"
        subtitle="Don't just take our word for it - hear from businesses we've helped grow."
        bgColor="#F0F9FF"
        textColor="#111827"
        gridCols="md:grid-cols-3"
        clients={clientsData}
      />
      <OurBlog />
      <DigitalFuture
        title="Let's Build Your Digital Future"
        subtitle="Contact our team today to discuss your next project."
        bgColor="#1E40AF"
        textColor="#FFFFFF"
        button1Text="Contact Us →"
        button1Link="/contact"
        button2Text="Get Free Quote"
        button2Link="/quote"
        button2Visible={true}
      />
    </div>
  )
}

export default Home
