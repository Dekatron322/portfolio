"use client"
import Image from "next/image"
import React, { useEffect, useState } from "react"
import { FiCheckCircle, FiUser } from "react-icons/fi"
import { LuLayoutDashboard } from "react-icons/lu"
import { CgLaptop } from "react-icons/cg"
import { HiOutlineMail } from "react-icons/hi"
import { GoCopy } from "react-icons/go"

import { motion } from "framer-motion"

const Footer = () => {
  const [hover, setHover] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText("muritalaibrahim097@gmail.com")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000) // Reset copied state after 2 seconds
  }

  return (
    <motion.section
      transition={{ ease: "easeOut", duration: 1 }}
      animate={{ y: -40 }}
      className="fixed bottom-0 left-0 right-0 z-50 flex justify-center max-sm:px-3"
    >
      <div className="footer_bg flex h-16 w-full items-center justify-between whitespace-nowrap rounded-full px-2 font-semibold  md:max-w-[800px]">
        <div className="flex items-center gap-2">
          <Image className="rounded-full" src="/avatar.svg" width={50} height={50} alt="avatar" />
          <h5 className="footer_text text-2xl">IBMuri</h5>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <FiUser className="footer_text text-lg font-semibold" />
            <p className="footer_text max-sm:hidden">About</p>
          </div>
          <div className="flex items-center gap-2">
            <LuLayoutDashboard className="footer_text text-lg font-semibold" />
            <p className="footer_text max-sm:hidden">Projects</p>
          </div>
          <div className="flex items-center gap-2">
            <CgLaptop className="footer_text text-lg font-semibold" />
            <p className="footer_text max-sm:hidden">Media</p>
          </div>
          <div
            className={`relative flex cursor-pointer items-center justify-center gap-2 rounded-full py-3 transition-colors duration-500 max-sm:w-10 md:w-56 ${
              copied ? "bg-green-500" : hover ? "email_area__hover" : "email_area"
            }`}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={handleCopy}
          >
            {copied ? (
              <>
                <p className="text-white">Email Copied!</p>
                <FiCheckCircle className="ml-2 text-lg font-semibold text-white" />
              </>
            ) : (
              <>
                <HiOutlineMail
                  className={`text-lg font-semibold transition-transform duration-300 ${
                    hover ? "-translate-x-full transform opacity-0" : "opacity-100"
                  } email_area__text`}
                />
                <p
                  className={`transition-transform duration-300 max-sm:hidden ${
                    hover ? "email-text -translate-x-6" : "translate-x-0"
                  } email_area__text`}
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
        </div>
      </div>
    </motion.section>
  )
}

export default Footer
