import Image from "next/image"
import React, { useState } from "react"
import { FiCheckCircle, FiUser } from "react-icons/fi"
import { LuLayoutDashboard } from "react-icons/lu"
import { CgLaptop } from "react-icons/cg"
import { HiOutlineMail } from "react-icons/hi"
import { GoCopy } from "react-icons/go"
import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"

const Footer = () => {
  const [hover, setHover] = useState(false)
  const [copied, setCopied] = useState(false)
  const pathname = usePathname()

  const handleCopy = () => {
    navigator.clipboard.writeText("cygnux696@gmail.com")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // Function to check if a path is active
  const isActive = (path: string) => {
    return pathname === path
  }

  // Active link style
  const activeStyle = "text-[#fec212]" // Using your yellow token color
  const inactiveStyle = "footer_text"

  return (
    <motion.section
      transition={{ ease: "easeOut", duration: 1 }}
      animate={{ y: -40 }}
      className="fixed bottom-0 left-0 right-0 z-50 flex justify-center max-sm:px-3"
    >
      <div className="footer_bg flex h-16 w-full items-center justify-between whitespace-nowrap rounded-full px-2 font-semibold md:max-w-[800px]">
        <Link href="/" className="flex items-center gap-2">
          <Image className="rounded-full" src="/avatar.svg" width={50} height={50} alt="avatar" />
          <h5 className="footer_text text-2xl max-sm:hidden">IBMuri</h5>
        </Link>
        <div className="flex items-center gap-6">
          {/* About Link with Hover Animation */}
          <Link href="/about" className="relative flex h-6 items-center gap-2 overflow-hidden">
            <motion.div className="flex items-center gap-2" whileHover="hover" initial="initial">
              <motion.div
                variants={{
                  initial: { rotateX: 0, y: 0, opacity: 1 },
                  hover: { rotateX: -90, y: -20, opacity: 0 },
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute flex items-center gap-2"
              >
                <FiUser className={`text-lg font-semibold ${isActive("/about") ? activeStyle : inactiveStyle}`} />
                <p className={`max-sm:hidden ${isActive("/about") ? activeStyle : inactiveStyle}`}>About</p>
              </motion.div>
              <motion.div
                variants={{
                  initial: { rotateX: 90, y: 20, opacity: 0 },
                  hover: { rotateX: 0, y: 0, opacity: 1 },
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="flex items-center gap-2"
              >
                <FiUser className={`text-lg font-semibold ${isActive("/about") ? activeStyle : inactiveStyle}`} />
                <p className={`max-sm:hidden ${isActive("/about") ? activeStyle : inactiveStyle}`}>About</p>
              </motion.div>
            </motion.div>
          </Link>

          {/* Projects Link with Hover Animation */}
          <Link href="/projects" className="relative flex h-6 cursor-pointer items-center gap-2 overflow-hidden">
            <motion.div className="flex items-center gap-2" whileHover="hover" initial="initial">
              <motion.div
                variants={{
                  initial: { rotateX: 0, y: 0, opacity: 1 },
                  hover: { rotateX: -90, y: -20, opacity: 0 },
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute flex items-center gap-2"
              >
                <LuLayoutDashboard
                  className={`text-lg font-semibold ${isActive("/projects") ? activeStyle : inactiveStyle}`}
                />
                <p className={`max-sm:hidden ${isActive("/projects") ? activeStyle : inactiveStyle}`}>Projects</p>
              </motion.div>
              <motion.div
                variants={{
                  initial: { rotateX: 90, y: 20, opacity: 0 },
                  hover: { rotateX: 0, y: 0, opacity: 1 },
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="flex items-center gap-2"
              >
                <LuLayoutDashboard
                  className={`text-lg font-semibold ${isActive("/projects") ? activeStyle : inactiveStyle}`}
                />
                <p className={`max-sm:hidden ${isActive("/projects") ? activeStyle : inactiveStyle}`}>Projects</p>
              </motion.div>
            </motion.div>
          </Link>

          {/* Media Link with Hover Animation */}
          <Link href="/media" className="relative flex h-6 cursor-pointer items-center gap-2 overflow-hidden">
            <motion.div className="flex items-center gap-2" whileHover="hover" initial="initial">
              <motion.div
                variants={{
                  initial: { rotateX: 0, y: 0, opacity: 1 },
                  hover: { rotateX: -90, y: -20, opacity: 0 },
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute flex items-center gap-2"
              >
                <CgLaptop className={`text-lg font-semibold ${isActive("/media") ? activeStyle : inactiveStyle}`} />
                <p className={`max-sm:hidden ${isActive("/media") ? activeStyle : inactiveStyle}`}>Media</p>
              </motion.div>
              <motion.div
                variants={{
                  initial: { rotateX: 90, y: 20, opacity: 0 },
                  hover: { rotateX: 0, y: 0, opacity: 1 },
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="flex items-center gap-2"
              >
                <CgLaptop className={`text-lg font-semibold ${isActive("/media") ? activeStyle : inactiveStyle}`} />
                <p className={`max-sm:hidden ${isActive("/media") ? activeStyle : inactiveStyle}`}>Media</p>
              </motion.div>
            </motion.div>
          </Link>

          {/* Email Copy Button */}
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
                <p className="text-white max-sm:hidden">Email Copied!</p>
                <FiCheckCircle className="md:ml-2 text-lg font-semibold text-white" />
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