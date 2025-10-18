"use client"
import DashboardNav from "components/Navbar/DashboardNav"
import Footer from "components/Footer/Footer"
import { motion } from "framer-motion"
import ProjectCard from "components/ProjectCards/ProjectCards"
import ContactSection from "components/ContactSection/ContactSection"

export default function Dashboard() {
  // Faster container variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Reduced from 0.2
      },
    },
  }

  // Faster child item animation variants
  const itemVariants = {
    hidden: { opacity: 0, y: 20 }, // Reduced y distance
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3, // Reduced from 0.5
        ease: "easeOut",
      },
    },
  }

  // Quick fade-in variants for main content
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  }

  const buttonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.02,
      transition: { type: "spring", stiffness: 300, damping: 15 },
    },
    tap: { scale: 0.98 },
  }

  return (
    <section className="flex size-full items-center justify-center max-md:mb-40  md:mb-24">
      <div className="flex min-h-screen flex-col max-sm:w-full max-sm:p-4 md:max-w-[800px]">
        <DashboardNav />
        <div className="mt-16 flex grow">
          <div className="w-full gap-6 max-md:flex-col max-md:px-0 md:mb-16">
            <motion.div
              className="mt-20 w-full"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={containerVariants}
            >
              <motion.div variants={itemVariants}>
                <h5 className="text-3xl font-bold">Projects</h5>
                <p className="clash small-text mb-3">Some of my recent work.</p>
              </motion.div>
              <div className="-z-10 grid w-full gap-6 max-sm:grid-cols-1 md:grid-cols-2">
                <ProjectCard />
              </div>

              <ContactSection
                containerVariants={containerVariants}
                itemVariants={itemVariants}
                buttonVariants={buttonVariants}
              />
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  )
}
