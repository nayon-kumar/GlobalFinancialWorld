import React from 'react'
import Faq from '../components/Faq';
import faqData from '../data/Graphics/faqGraphics.json';
import DigitalFuture from '../components/DigitalFuture';
import ClientsSay from '../components/ClientsSay';
import clientsData from '../data/Graphics/clientsDataGraphics.json';
import PricingTable from '../components/PricingTable';
import pricingData from '../data/Graphics/pricingTableDataGraphics.json'
import Why from '../components/Why';
import featuresData from '../data/Graphics/featuresDataGraphics.json'
import CustomPlan from '../components/CustomPlan';
import customPlanData from '../data/Graphics/customPlanDataGraphics.json'
import BusinessPartner from '../components/BusinessPartner';
import Plan from '../components/Plan';
import plansData from '../data/Graphics/plansGraphics.json'
import BannerArea from '../components/BannerArea';
import graphicsBanner from '../assets/graphicsBanner.png'

const graphics = () => {
  return (
    <>
      <BannerArea
        title={
          <>
            Professional & Impactful{" "}
            <span className="text-blue-600">Graphic Design</span> {" "}
            Packages
          </>
        }
        description="Build your brand's visual identity with creative designs that inspire trust and recognition."
        primaryBtn="View Plans"
        secondaryBtn="Book free Meeting"
        image={graphicsBanner}
      />
      <Plan
        plans={plansData}
        sectionTitle="Choose Your Graphics Design Plan"
        sectionSubtitle="Flexible packages crafted to suit every creative need."
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
        sectionTitle="Why Businesses Choose RR Tech's Graphics Services"
      />
      <PricingTable data={pricingData} />
      <ClientsSay
        title="What Our PPC Clients Say"
        subtitle="Don't just take our word for it — hear from businesses we've helped grow."
        bgColor="#F0F9FF"
        textColor="#111827"
        gridCols="md:grid-cols-3"
        clients={clientsData}
      />
      <DigitalFuture
        title="Need Help Choosing the Right Plan?"
        subtitle="Book a free consultation with our marketing experts to find the perfect Graphics Design strategy for your business."
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

export default graphics
