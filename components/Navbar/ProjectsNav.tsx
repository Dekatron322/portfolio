"use client"
import { useTheme } from "next-themes"
import React, { useEffect, useState } from "react"
import WbSunnyIcon from "@mui/icons-material/WbSunny"
import { GoMoon } from "react-icons/go"
import { motion } from "framer-motion"
import { MdArrowBack } from "react-icons/md"
import { useRouter } from "next/navigation"

const ProjectsNav = () => {
  const [loading, setLoading] = useState(true)
  const { theme, setTheme } = useTheme()
  const [isMoonIcon, setIsMoonIcon] = useState(true)
  const [currentTime, setCurrentTime] = useState(new Date())
  const router = useRouter()
  const isDarkMode = theme === "dark"

  const toggleIcon = () => {
    setIsMoonIcon(!isMoonIcon)
    setTheme(isMoonIcon ? "light" : "dark")
  }

  const handleBackClick = () => {
    router.back()
  }

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000)

    const intervalId = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  const toggleTheme = () => {
    setTheme(isDarkMode ? "light" : "dark")
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-NG", {
      timeZone: "Africa/Lagos",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    })
  }

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeOut", duration: 1 }}
      className="z-150 fixed left-0 right-0 top-0 z-20 flex  justify-center pt-7 backdrop-blur "
    >
      <div className="flex w-full max-w-[800px] justify-between backdrop-blur">
        <motion.div
          className="containerbg group flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-full px-5 py-3 text-center font-semibold backdrop-blur"
          onClick={handleBackClick}
          whileHover={{
            scale: 1.05,
            backgroundColor: isDarkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.05)",
          }}
          whileTap={{ scale: 0.95 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 17,
          }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="arrow-color relative z-20 scale-x-[-1] transform transition-colors duration-300"
          >
            <path
              d="M9.1497 0.80204C9.26529 3.95101 13.2299 6.51557 16.1451 8.0308L16.1447 9.43036C13.2285 10.7142 9.37889 13.1647 9.37789 16.1971L7.27855 16.1978C7.16304 12.8156 10.6627 10.4818 13.1122 9.66462L0.049716 9.43565L0.0504065 7.33631L13.1129 7.56528C10.5473 6.86634 6.93261 4.18504 7.05036 0.80273L9.1497 0.80204Z"
              fill="currentColor"
            />
          </svg>

          <motion.p
            whileHover={{
              x: 4,
              transition: {
                type: "spring",
                stiffness: 500,
                damping: 15,
              },
            }}
            animate={{
              x: 0,
              transition: {
                type: "spring",
                stiffness: 500,
                damping: 15,
              },
            }}
          >
            Back to previous
          </motion.p>
        </motion.div>

        <div
          className="containerbg flex cursor-pointer items-center rounded-full p-1 transition duration-300"
          onClick={toggleTheme}
          style={{
            position: "relative",
            width: "80px",
            height: "45px",
            borderRadius: "25px",
          }}
        >
          <div
            style={{
              position: "absolute",
              right: isDarkMode ? "calc(100% - 42px)" : "2px",
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              backgroundColor: isDarkMode ? "#000" : "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "right 0.5s ease",
            }}
          >
            {isDarkMode ? (
              <GoMoon style={{ color: "#fff", fontSize: "24px" }} />
            ) : (
              <WbSunnyIcon style={{ color: "#000", fontSize: "24px" }} />
            )}
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

export default ProjectsNav
