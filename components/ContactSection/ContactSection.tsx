"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { HiOutlineMail } from "react-icons/hi"
import { GoCopy } from "react-icons/go"
import { CgFileDocument } from "react-icons/cg"
import { BsDownload } from "react-icons/bs"
import { LuPhoneCall } from "react-icons/lu"
import { FiCheckCircle } from "react-icons/fi"
import SocialsMedia from "components/Socials/SocialsMedia"

interface ContactSectionProps {
  containerVariants?: any
  itemVariants?: any
  buttonVariants?: any
}

export default function ContactSection({ containerVariants, itemVariants, buttonVariants }: ContactSectionProps) {
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

  // Default variants if none provided
  const defaultContainerVariants = containerVariants || {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        duration: 0.8,
      },
    },
  }

  const defaultItemVariants = itemVariants || {
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

  const defaultButtonVariants = buttonVariants || {
    initial: { scale: 1 },
    hover: {
      scale: 1.02,
      transition: { type: "spring", stiffness: 300, damping: 15 },
    },
    tap: { scale: 0.98 },
  }

  return (
    <motion.div
      className="mt-20 flex flex-col items-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={defaultContainerVariants}
    >
      <motion.h5 className="text-center text-4xl font-bold" variants={defaultItemVariants}>
        Let&apos;s work together
      </motion.h5>

      <motion.p className="small-text clash my-4 text-center" variants={defaultItemVariants}>
        I would love to hear from you, so feel free to reach out
      </motion.p>

      <motion.div
        className="mt-5 flex gap-4 max-sm:w-full max-sm:flex-col max-sm:items-center max-sm:justify-center"
        variants={defaultItemVariants}
      >
        {/* CV Button */}
        <Link
          href="https://drive.google.com/file/d/1_KNKhl8xPXh8wwSbAmQY6ORSSDsV6wnF/view?usp=sharing"
          target="_blank"
          className="cv cv-text relative flex w-36 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full p-3 py-3 transition-colors duration-300 max-sm:h-10"
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
        <motion.div variants={defaultButtonVariants} initial="initial" whileHover="hover" whileTap="tap">
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
        <motion.div variants={defaultButtonVariants} initial="initial" whileHover="hover" whileTap="tap">
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
      <motion.div variants={defaultItemVariants}>
        <SocialsMedia />
      </motion.div>

      {/* Footer */}
      <motion.div className="mt-20" variants={defaultItemVariants}>
        <p className="clash text-center font-semibold">© 2024 Ibrahim P. Muritala, All Rights Reserved</p>
      </motion.div>
    </motion.div>
  )
}
