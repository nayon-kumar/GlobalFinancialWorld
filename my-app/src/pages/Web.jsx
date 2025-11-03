import React from 'react'
import Faq from '../components/Faq'
import faqData from '../data/WebData/faqWeb.json';
import DigitalFuture from '../components/DigitalFuture';
import ClientsSay from '../components/ClientsSay';
import clientsData from '../data/WebData/clientsDataWeb.json';
import Plan from '../components/Plan';
import plansData from '../data/WebData/plansWeb.json'
import Why from '../components/Why';
import featuresData from '../data/WebData/featuresDataWeb.json'
import BusinessPartner from '../components/BusinessPartner';
import BannerArea from '../components/BannerArea';
import webBanner from '../assets/webBanner.png'
import Project from '../components/Project';
import projectData from '../data/WebData/projectDataWeb.json'
import Process from '../components/Process';
import WebServices from '../components/WebServices';

const web = () => {
  return (
    <>
      <BannerArea
        title={
          <>
            Professional{" "}
            <span className="text-blue-600">Web Design</span> {" "}
            That Drives Results
          </>
        }
        description="We build responsive, high-performing websites that convert visitors into customers."
        primaryBtn="View Plans"
        secondaryBtn="Book free Meeting"
        image={webBanner}
      />
      <WebServices 
        title="Our Web Design Services" 
        description="From concept to launch, we deliver every stage of your site build."
      />
      <BusinessPartner />
      <Project
        title="Recent Projects"
        description="See how we've brought brands online."
        data={projectData}
      />
      <Process/>
      <Why
        features={featuresData.features}
        bannerImage={featuresData.banner}
        sectionTitle="Why Businesses Choose RR Tech's Web Design Services"
      />
      <Plan
        plans={plansData}
        sectionTitle="Web Design Packages"
        sectionSubtitle="Transparent pricing. Tailored scope."
        button1Text="Add to Cart"
        button2Text="Get Started"
        bgColor="#EFF6FF"
      />
      <ClientsSay
        title="What Our Clients Say"
        subtitle="Don't just take our word for it — hear from businesses we've helped grow."
        bgColor="#F0F9FF"
        textColor="#111827"
        gridCols="md:grid-cols-3"
        clients={clientsData}
      />
      <DigitalFuture
        title="Need Help Choosing the Right Plan?"
        subtitle="Book a free consultation with our marketing experts to find the perfect Web Design strategy for your business."
        bgColor="#1E40AF"
        textColor="#FFFFFF"
        button1Text="Book free Meeting"
        button1Link="/contact"
        button2Text="Get Free Quote"
        button2Link="/quote"
        button2Visible={false}
      />
      <Faq
        title="Frequently Asked Questions"
        subtitle="Got questions? We've got answers."
        faqs={faqData}
        containerPadding="px-6 md:px-16 lg:px-20 py-8"
      />
    </>
  )
}

export default web
