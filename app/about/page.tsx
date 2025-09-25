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
          <div className="w-full gap-6 max-md:flex-col max-md:px-0 md:mb-16">
            {/* Header Section */}
            <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
              <motion.h2
                className="mt-14 h-full text-[46px] font-bold max-sm:mt-24 max-sm:text-3xl md:leading-[60px]"
                variants={textVariants}
              >
                I&lsquo;m Ibrahim P. Muritala
              </motion.h2>

              <motion.div variants={staggerContainer}>
                <motion.p className="clash mt-4 font-normal md:text-lg" variants={paragraphVariants}>
                  A multidisciplinary designer with a background in finance. I&lsquo;m proficient in product, icon,
                  illustration, and interaction design, as well as Framer development (No-code).
                </motion.p>

                <motion.p className="clash mt-4 font-normal md:text-lg" variants={paragraphVariants}>
                  I love crafting human-centered products that shape the future of purposeful digital products and
                  designs that convert effectively.
                </motion.p>

                <motion.p className="clash mt-4 font-normal md:text-lg" variants={paragraphVariants}>
                  I have loved design since I was 11 years old. I can vividly remember how fascinated I would become
                  when looking at business logos and signage every time I stepped out in a moving vehicle.
                </motion.p>
              </motion.div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              className="mt-8 flex w-full gap-4 max-sm:flex-col"
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
                <p className="clash mb-3">Showcasing my professional work experiences.</p>
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
            <motion.div
              className="mt-20 flex flex-col items-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerVariants}
            >
              <motion.h5 className="text-center text-4xl font-bold" variants={itemVariants}>
                Let&apos;s work together
              </motion.h5>

              <motion.p className="clash my-4 text-center" variants={itemVariants}>
                I would love to hear from you, so feel free to reach out
              </motion.p>

              <motion.div
                className="mt-5 flex gap-4 max-sm:w-full max-sm:flex-col max-sm:items-center max-sm:justify-center"
                variants={itemVariants}
              >
                {/* CV Button */}
                <Link
                  href="https://drive.google.com/file/d/1_KNKhl8xPXh8wwSbAmQY6ORSSDsV6wnF/view?usp=sharing"
                  target="_blank"
                  className="cv cv-text relative flex w-36 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full p-3 transition-colors duration-300"
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

                {/* Email Button */}
                <motion.div variants={buttonVariants} initial="initial" whileHover="hover" whileTap="tap">
                  <div
                    className={`relative flex cursor-pointer items-center justify-center gap-2 rounded-full px-2 py-3 transition-all duration-500 ${
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
                        className="flex items-center gap-2 "
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

                {/* Phone Button */}
                <motion.div variants={buttonVariants} initial="initial" whileHover="hover" whileTap="tap">
                  <div
                    className={`relative flex cursor-pointer items-center justify-center gap-2 rounded-full p-3 transition-all duration-500 ${
                      callCopied ? "email-click" : hoverCall ? "email" : "email"
                    }`}
                    onMouseEnter={() => setHoverCall(true)}
                    onMouseLeave={() => setHoverCall(false)}
                    onClick={handleCallCopy}
                  >
                    {callCopied ? (
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="flex items-center gap-2"
                      >
                        <p className="font-semibold text-white">Phone no Copied!</p>
                        <FiCheckCircle className="ml-2 text-lg font-semibold text-white" />
                      </motion.div>
                    ) : (
                      <>
                        <LuPhoneCall
                          className={`email-text text-lg font-semibold transition-all duration-300 ${
                            hoverCall ? "-translate-x-full transform opacity-0" : "opacity-100"
                          }`}
                        />
                        <p
                          className={`email-text font-semibold transition-all duration-300 ${
                            hoverCall ? "-translate-x-6" : "translate-x-0"
                          }`}
                        >
                          +234-812-985-9405
                        </p>
                        <GoCopy
                          className={`email-text absolute right-2 text-lg font-semibold transition-all duration-300 ${
                            hoverCall ? "translate-x-0 transform opacity-100" : "translate-x-full transform opacity-0"
                          }`}
                        />
                      </>
                    )}
                  </div>
                </motion.div>
              </motion.div>

              {/* Social Media */}
              <motion.div variants={itemVariants}>
                <SocialsMedia />
              </motion.div>

              {/* Footer */}
              <motion.div className="mt-20" variants={itemVariants}>
                <p className="clash text-center font-semibold">© 2024 Ibrahim P. Muritala, All Rights Reserved</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </motion.section>
  )
}
