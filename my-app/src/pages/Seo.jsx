import React from 'react'
import Faq from '../components/Faq'
import faqData from '../data/SEO/faqSEO.json'
import DigitalFuture from '../components/DigitalFuture'
import ClientsSay from '../components/ClientsSay'
import clientsData from '../data/SEO/clientDataSEO.json'
import PricingTable from '../components/PricingTable'
import pricingData from '../data/SEO/pricingTableDataSEO.json'
import Why from '../components/Why'
import featuresData from '../data/SEO/featuresDataSEO.json'
import CustomPlan from '../components/CustomPlan'
import customPlanData from '../data/SEO/customPlanDataSEO.json'
import BusinessPartner from '../components/BusinessPartner'
import Plan from '../components/Plan'
import plansData from '../data/SEO/planSEO.json'
import BannerArea from '../components/BannerArea'
import seoBanner from '../assets/seoBanner.png'


const seo = () => {
  return (
    <>
      <BannerArea
        title={
          <>
            Boost Your Rankings with Our Proven{" "}
            <span className="text-blue-600">SEO Packages</span>
          </>
        }
        description="Get more traffic, build authority, and convert visitors into customers with data-driven SEO strategies."
        primaryBtn="View Plans"
        secondaryBtn="Book free Meeting"
        image={seoBanner}
      />
      <Plan
        plans={plansData}
        sectionTitle="Choose Your SEO Plan"
        sectionSubtitle="Flexible packages tailored to grow your online presence"
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
        sectionTitle="Why Businesses Choose RR Tech's SEO Services"
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
        subtitle="Book a free consultation with our marketing experts to find the perfect PPC strategy for your business."
        bgColor="#1E40AF"
        textColor="#FFFFFF"
        button1Text="Book free Meeting"
        button1Link="/contact"
        button2Text="Get Free Quote"
        button2Link="/quote"
        button2Visible={false}
      />
      <Faq
        title="FAQs about SEO packages"
        subtitle="Learn more about SEO packages with these FAQs:"
        faqs={faqData}
        containerPadding="px-6 md:px-16 lg:px-20 py-8"
      />
    </>
  )
}

export default seo
