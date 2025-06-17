"use client"

import Blog from "@/components/Blog";
import CalltoAction from "@/components/CalltoAction";
import CustomSoftware from "@/components/CustomSoftware";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import Recognition from "@/components/Recognition";
import ServiceModel from "@/components/ServiceModel";
import ServiceModelsTable from "@/components/ServiceModelsTable";
import SprintDelivery from "@/components/SprintDelivery";
import TechStack from "@/components/TechStack";
import Testimonial from "@/components/Testimonial";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
    >
      <Hero />
      <Recognition />
      <ServiceModel />
      <ServiceModelsTable
        title="Our Service Models"
        desc="Regardless of the service model you select, our mission remains
              the same: to equip you with top-tier talent, streamlined
              processes, and dedicated support for your success. We are
              committed to delivering exceptional results at every stage."
      />
      <CustomSoftware />
      <TechStack />
      <Testimonial />
      <SprintDelivery />
      <Blog />
      <FAQ />
      <CalltoAction />
    </motion.div>
  );
}
