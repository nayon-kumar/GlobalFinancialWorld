import React from 'react'
import Faq from '../components/Faq'
import faqData from '../data/Social/faqSocial.json'
import DigitalFuture from '../components/DigitalFuture'
import ClientsSay from '../components/ClientsSay'
import clientsData from '../data/Social/clientDataSocial.json'
import PricingTable from '../components/PricingTable'
import pricingData from '../data/Social/pricingTableDataSocial.json'
import Why from '../components/Why'
import featuresData from '../data/Social/featuresDataSocial.json'
import CustomPlan from '../components/CustomPlan'
import customPlanData from '../data/Social/customPlanDataSocial.json'
import BusinessPartner from '../components/BusinessPartner'
import Plan from '../components/Plan'
import plansData from '../data/Social/planSocial.json'
import BannerArea from '../components/BannerArea'
import socialBanner from '../assets/socialBanner.png'

const social = () => {
  return (
    <>
      <BannerArea
        title={
          <>
            Grow Your Brand with Our{" "}
            <span className="text-blue-600">Social Media Marketing</span>{" "}
            Packages
          </>
        }
        description="Get more traffic, build authority, and convert visitors into customers with data-driven SEO strategies."
        primaryBtn="View Plans"
        secondaryBtn="Book free Meeting"
        image={socialBanner}
      />
      <Plan
        plans={plansData}
        sectionTitle="Choose Your Social Media Plan"
        sectionSubtitle="Flexible options to fit your business goals and marketing scale."
        button1Text="Add to Cart"
        button2Text="Sign Up Now"
        bgColor="#EFF6FF"
      />
      <BusinessPartner />
      <CustomPlan
        data={customPlanData}
      />
      <Why
        features={featuresData.features}
        bannerImage={featuresData.banner}
        sectionTitle="Why Businesses Choose RR Tech's SMP Services"
      />
      <PricingTable data={pricingData} />
      <ClientsSay
        title="Our Clients Love the Results"
        subtitle="Don't just take our word for it - hear from businesses we've helped grow."
        bgColor="#F0F9FF"
        textColor="#111827"
        gridCols="md:grid-cols-3"
        clients={clientsData}
      />
      <DigitalFuture
        title="Need Help Choosing the Right Plan?"
        subtitle="Book a free consultation with our marketing experts to find the perfect Social Media  strategy for your business."
        bgColor="#1E40AF"
        textColor="#FFFFFF"
        button1Text="Book free Meeting"
        button1Link="/contact"
        button2Text="Get Free Quote"
        button2Link="/quote"
        button2Visible={false}
      />
      <Faq
        title="FAQs about Social Media packages"
        subtitle="Got questions? We've got answers."
        faqs={faqData}
        containerPadding="px-6 md:px-16 lg:px-20 py-8"
      />
    </>
  )
}

export default social
