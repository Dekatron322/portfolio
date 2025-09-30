"use client"
import DashboardNav from "components/Navbar/DashboardNav"
import Footer from "components/Footer/Footer"
import { useEffect, useState } from "react"
import { HiOutlineMail } from "react-icons/hi"
import { GoCopy } from "react-icons/go"
import { CgFileDocument } from "react-icons/cg"
import { BsDownload } from "react-icons/bs"
import { LuPhoneCall } from "react-icons/lu"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import SocialsMedia from "components/Socials/SocialsMedia"
import ProjectCard from "components/ProjectCards/ProjectCards"
import { FiCheckCircle } from "react-icons/fi"

export default function Dashboard() {
  const [hover, setHover] = useState(false)
  const [hoverCall, setHoverCall] = useState(false)
  const [cvHover, setCvHover] = useState(false)
  const [hoverCard, setHoverCard] = useState(false)
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

  return (
    <section className="flex size-full items-center justify-center  md:mb-40">
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

              <motion.div className="mt-10 flex flex-col items-center" variants={itemVariants}>
                <motion.h5 className="text-4xl font-bold" variants={itemVariants}>
                  Let&apos;s work together
                </motion.h5>
                <motion.p className="clash my-4" variants={itemVariants}>
                  I would love to hear from you, so feel free to reach out
                </motion.p>
                <motion.div
                  className="mt-5 flex gap-4 max-sm:w-full max-sm:flex-col max-sm:items-center max-sm:justify-center"
                  variants={itemVariants}
                >
                  <Link
                    href="https://drive.google.com/file/d/1_KNKhl8xPXh8wwSbAmQY6ORSSDsV6wnF/view?usp=sharing"
                    target="_blank"
                    className="cv cv-text relative flex h-10 w-36 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full p-3 transition-colors duration-300"
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

                  <div
                    className={`relative flex cursor-pointer items-center justify-center gap-2 rounded-full px-2 py-3 transition-colors duration-500 ${
                      copied ? "email-click" : hover ? "email" : "email"
                    }`}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    onClick={handleCopy}
                  >
                    {copied ? (
                      <>
                        <p className="font-semibold text-white">Email Copied!</p>
                        <FiCheckCircle className="ml-2 text-lg font-semibold text-white" />
                      </>
                    ) : (
                      <>
                        <HiOutlineMail
                          className={`email-text text-lg font-semibold transition-transform duration-300 ${
                            hover ? "-translate-x-full transform opacity-0" : "opacity-100"
                          }`}
                        />
                        <p
                          className={`email-text font-semibold transition-transform duration-300 ${
                            hover ? "-translate-x-6" : "translate-x-0"
                          }`}
                        >
                          cygnux696@gmail.com
                        </p>
                        <GoCopy
                          className={`email-text absolute right-2 text-lg font-semibold transition-transform duration-300 ${
                            hover ? "translate-x-0 transform opacity-100" : "translate-x-full transform opacity-0"
                          }`}
                        />
                      </>
                    )}
                  </div>
                  <div
                    className={`relative flex cursor-pointer items-center justify-center gap-2 rounded-full p-3 transition-colors duration-500 ${
                      callCopied ? "email-click" : hoverCall ? "email" : "email"
                    }`}
                    onMouseEnter={() => setHoverCall(true)}
                    onMouseLeave={() => setHoverCall(false)}
                    onClick={handleCallCopy}
                  >
                    {callCopied ? (
                      <>
                        <p className="font-semibold text-white">Phone no Copied!</p>
                        <FiCheckCircle className="ml-2 text-lg font-semibold text-white" />
                      </>
                    ) : (
                      <>
                        <LuPhoneCall
                          className={`email-text text-lg font-semibold transition-transform duration-300 ${
                            hoverCall ? "-translate-x-full transform opacity-0" : "opacity-100"
                          }`}
                        />
                        <p
                          className={`email-text font-semibold transition-transform duration-300 ${
                            hoverCall ? "-translate-x-6" : "translate-x-0"
                          }`}
                        >
                          +234-812-985-9405
                        </p>
                        <GoCopy
                          className={`email-text absolute right-2 text-lg font-semibold transition-transform duration-300 ${
                            hoverCall ? "translate-x-0 transform opacity-100" : "translate-x-full transform opacity-0"
                          }`}
                        />
                      </>
                    )}
                  </div>
                </motion.div>
              </motion.div>

              <SocialsMedia />

              <motion.div className="mt-20" variants={itemVariants}>
                <motion.p variants={itemVariants} className="clash text-center font-semibold">
                  © 2024 Ibrahim P. Muritala, All Rights Reserved{" "}
                </motion.p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  )
}
