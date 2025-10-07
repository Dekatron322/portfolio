"use client"
import DashboardNav from "components/Navbar/DashboardNav"
import Footer from "components/Footer/Footer"
import { useState } from "react"
import { HiOutlineMail } from "react-icons/hi"
import { GoCopy } from "react-icons/go"
import { CgFileDocument } from "react-icons/cg"
import { BsDownload } from "react-icons/bs"
import { LuPhoneCall } from "react-icons/lu"
import { motion } from "framer-motion"
import Link from "next/link"
import { FiCheckCircle } from "react-icons/fi"
import Experience from "components/Experience/page"
import SocialsMedia from "components/Socials/SocialsMedia"
import Skills from "components/Skills/page"
import Tools from "components/Tools/page"
import Teams from "components/Teams/page"
import ContactSection from "components/ContactSection/ContactSection"

export default function Dashboard() {
  const [hover, setHover] = useState(false)
  const [hoverCall, setHoverCall] = useState(false)
  const [cvHover, setCvHover] = useState(false)
  const [copied, setCopied] = useState(false)
  const [callCopied, setCallCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText("cygnux696@gmail.com")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleCallCopy = () => {
    navigator.clipboard.writeText("08129859405")
    setCallCopied(true)
    setTimeout(() => setCallCopied(false), 2000)
  }

  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        duration: 0.8,
      },
    },
  }

  // Child item animation variants
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
        duration: 0.6,
      },
    },
  }

  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        duration: 0.8,
      },
    },
  }

  // Button hover animation variants
  const buttonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.02,
      transition: { type: "spring", stiffness: 300, damping: 15 },
    },
    tap: { scale: 0.98 },
  }

  // Stagger animation for paragraphs
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 100,
        duration: 0.7,
      },
    },
  }

  return (
    <motion.section
      className="mb-40 flex size-full items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex min-h-screen flex-col max-sm:w-full max-sm:p-4 md:max-w-[800px]">
        <DashboardNav />

        <div className="mt-16 flex grow">
          <div className="w-full gap-6 max-md:flex-col max-md:px-0 md:mb-0">
            {/* Header Section */}
            <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
              <motion.h2
                className="mt-14 h-full text-[46px] font-bold max-sm:mt-24 max-sm:text-3xl md:leading-[60px]"
                variants={textVariants}
              >
                I&lsquo;m Ibrahim P. Muritala
              </motion.h2>

              <motion.div variants={staggerContainer}>
                <motion.p className="clash small-text mt-4 font-normal md:text-lg" variants={paragraphVariants}>
                  A multidisciplinary designer with a background in finance, specializing in product, icon,
                  illustration, and interaction design. I leverage Framer for no-code development to build
                  human-centered digital products that are not only purposeful but are also crafted to convert
                  effectively.
                </motion.p>

                <motion.p className="clash small-text mt-4 font-normal md:text-lg" variants={paragraphVariants}>
                  My passion for design was sparked in childhood, observing the power of branding in everyday life, and
                  has evolved into a dedication for shaping the future of digital experiences.
                </motion.p>
              </motion.div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              className="mt-8 flex w-full gap-4 "
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.8 }}
            >
              {/* CV Button */}
              <motion.div variants={buttonVariants} initial="initial" whileHover="hover" whileTap="tap">
                <Link
                  href="https://drive.google.com/file/d/1_KNKhl8xPXh8wwSbAmQY6ORSSDsV6wnF/view?usp=sharing"
                  target="_blank"
                  className="cv cv-text relative flex h-10 w-36 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full p-3   transition-colors duration-300"
                  onMouseEnter={() => setCvHover(true)}
                  onMouseLeave={() => setCvHover(false)}
                >
                  <div
                    className={`absolute flex items-center gap-2 transition-transform duration-300 ${
                      cvHover ? "-translate-x-full transform opacity-0" : "translate-x-0 transform opacity-100"
                    }`}
                  >
                    <CgFileDocument className="cv-text" />
                    <p className="cv-text font-semibold">CV/Résumé</p>
                  </div>
                  <div
                    className={`absolute flex items-center gap-2 transition-transform duration-300 ${
                      cvHover ? "translate-x-0 transform opacity-100" : "translate-x-full transform opacity-0"
                    }`}
                  >
                    <p className="cv-text-hover font-semibold">Download</p>
                    <BsDownload className="cv-text-hover" />
                  </div>
                </Link>
              </motion.div>

              {/* Email Button */}
              <motion.div
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                className="flex-1 max-sm:w-full"
              >
                <div
                  className={`relative flex h-10 w-full cursor-pointer items-center justify-center gap-2 rounded-full px-3 py-2 transition-all duration-500 max-sm:text-xs md:w-56 ${
                    copied ? "email-click" : hover ? "email" : "email"
                  }`}
                  onMouseEnter={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}
                  onClick={handleCopy}
                >
                  {copied ? (
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="flex items-center gap-2"
                    >
                      <p className="font-semibold text-white">Email Copied!</p>
                      <FiCheckCircle className="ml-2 text-lg font-semibold text-white" />
                    </motion.div>
                  ) : (
                    <>
                      <HiOutlineMail
                        className={`email-text text-lg font-semibold transition-all duration-300 ${
                          hover ? "-translate-x-full transform opacity-0" : "opacity-100"
                        }`}
                      />
                      <p
                        className={`email-text font-semibold transition-all duration-300 ${
                          hover ? "-translate-x-6" : "translate-x-0"
                        }`}
                      >
                        cygnux696@gmail.com
                      </p>
                      <GoCopy
                        className={`email-text absolute right-2 text-lg font-semibold transition-all duration-300 ${
                          hover ? "translate-x-0 transform opacity-100" : "translate-x-full transform opacity-0"
                        }`}
                      />
                    </>
                  )}
                </div>
              </motion.div>
            </motion.div>

            {/* Experience Section */}
            <motion.div
              className="mt-20 w-full"
              initial="visible"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={containerVariants}
            >
              <motion.div variants={itemVariants}>
                <h5 className="text-3xl font-bold">Experiences</h5>
                <p className="small-text mb-3">Showcasing my professional work experiences.</p>
              </motion.div>

              <motion.div className="-z-10 w-full" variants={itemVariants}>
                <Experience />
              </motion.div>
              <motion.div className="-z-10 w-full" variants={itemVariants}>
                <Skills />
              </motion.div>
              <motion.div className="-z-10 w-full" variants={itemVariants}>
                <Tools />
              </motion.div>
              <motion.div className="-z-10 w-full" variants={itemVariants}>
                <Teams />
              </motion.div>
            </motion.div>

            {/* Contact Section */}
            <ContactSection
              containerVariants={containerVariants}
              itemVariants={itemVariants}
              buttonVariants={buttonVariants}
            />
          </div>
        </div>
      </div>

      <Footer />
    </motion.section>
  )
}
