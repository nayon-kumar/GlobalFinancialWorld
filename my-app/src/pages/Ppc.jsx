import React from 'react';
import BannerArea from '../components/BannerArea';
import DigitalFuture from '../components/DigitalFuture';
import ClientsSay from '../components/ClientsSay';
import ppcBanner from '../assets/ppcBanner.png';
import clientsData from '../data/PPC/clientsDataPPC.json';
import faqData from '../data/PPC/faqPPC.json';
import Faq from '../components/Faq';
import BusinessPartner from '../components/BusinessPartner'
import plansData from '../data/PPC/plansPPC.json'
import Plan from '../components/Plan'
import CustomPlan from '../components/CustomPlan'
import customPlanData from '../data/PPC/customPlanDataPPC.json'
import featuresData from '../data/PPC/featuresDataPPC.json'
import Why from '../components/Why'
import pricingData from '../data/PPC/pricingTableDataPPC.json'
import PricingTable from '../components/PricingTable'

const PPC = () => {
  return (
    <>
      <BannerArea
        title={
          <>
            Drive Results with Our Custom{" "}
            <span className="text-blue-600">PPC Packages</span>
          </>
        }
        description="Maximize your ad performance and ROI with data-driven PPC strategies tailored to your business."
        primaryBtn="View Plans"
        secondaryBtn="Book free Meeting"
        image={ppcBanner}
      />

      <Plan
        plans={plansData}
        sectionTitle="Choose Your PPC Plan"
        sectionSubtitle="Flexible options to match your marketing goals"
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
        sectionTitle="Why Clients Prefer Our PPC Services"
      />

      <PricingTable data={pricingData} />

      <ClientsSay
        title="What Our PPC Clients Say"
        subtitle="Hear directly from businesses we've helped skyrocket their ROI."
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
        title="FAQs about PPC Packages"
        subtitle=""
        faqs={faqData}
        containerPadding="px-6 md:px-16 lg:px-20 py-8"
      />
    </>
  );
};

export default PPC;
