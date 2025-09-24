import React from "react"
import { useEffect, useState } from "react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { AiFillInstagram } from "react-icons/ai"
import { FaDiscord } from "react-icons/fa"
import { FaTelegram } from "react-icons/fa"
import { FaTiktok } from "react-icons/fa"
import { FaGitlab } from "react-icons/fa"
import Link from "next/link"
import { motion } from "framer-motion"

const CustomArrow = () => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 17 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="new-arrow-right -rotate-45 text-[#f4b601]"
  >
    <path
      d="M9.1497 0.80204C9.26529 3.95101 13.2299 6.51557 16.1451 8.0308L16.1447 9.43036C13.2285 10.7142 9.37889 13.1647 9.37789 16.1971L7.27855 16.1978C7.16304 12.8156 10.6627 10.4818 13.1122 9.66462L0.049716 9.43565L0.0504065 7.33631L13.1129 7.56528C10.5473 6.86634 6.93261 4.18504 7.05036 0.80273L9.1497 0.80204Z"
      fill="#f4b601"
    ></path>
  </svg>
)

const SocialsMedia = () => {
  const [gitHover, setGitHover] = useState(false)
  const [twitterHover, setTwitterHover] = useState(false)
  const [discordHover, setDiscordHover] = useState(false)
  const [instagramHover, setInstagramHover] = useState(false)
  const [linkedInHover, setLinkedInHover] = useState(false)
  const [gitlabHover, setGitLabHover] = useState(false)
  const [tiktikHover, setTiktokHover] = useState(false)
  const [telegramHover, setTelegramHover] = useState(false)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.div className="mt-20 flex justify-center gap-10 max-sm:grid max-sm:grid-cols-2" variants={itemVariants}>
        <Link
          href="https://drive.google.com/file/d/1_KNKhl8xPXh8wwSbAmQY6ORSSDsV6wnF/view?usp=sharing"
          target="_blank"
          className=" relative flex h-10 w-36 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full px-3 py-3 transition-colors duration-300"
          onMouseEnter={() => setLinkedInHover(true)}
          onMouseLeave={() => setLinkedInHover(false)}
        >
          <div
            className={`absolute flex items-center gap-2 transition-transform duration-300 ${
              linkedInHover ? "-translate-x-full transform opacity-0" : "translate-x-0 transform opacity-100"
            }`}
          >
            <FaLinkedin className="size-5" />
            <p className=" font-semibold">LinkedIn</p>
          </div>
          <div
            className={`absolute flex items-center gap-2 transition-transform duration-300 ${
              linkedInHover ? "translate-x-0 transform opacity-100" : "translate-x-full transform opacity-0"
            }`}
          >
            <p className="font-semibold text-[#f4b601]">LinkedIn</p>
            <CustomArrow />
          </div>
        </Link>

        <Link
          href="https://drive.google.com/file/d/1_KNKhl8xPXh8wwSbAmQY6ORSSDsV6wnF/view?usp=sharing"
          target="_blank"
          className=" relative flex h-10 w-36 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full px-3 py-3 transition-colors duration-300"
          onMouseEnter={() => setGitHover(true)}
          onMouseLeave={() => setGitHover(false)}
        >
          <div
            className={`absolute flex items-center gap-2 transition-transform duration-300 ${
              gitHover ? "-translate-x-full transform opacity-0" : "translate-x-0 transform opacity-100"
            }`}
          >
            <FaGithub className="size-5" />
            <p className=" font-semibold">GitHub</p>
          </div>
          <div
            className={`absolute flex items-center gap-2 transition-transform duration-300 ${
              gitHover ? "translate-x-0 transform opacity-100" : "translate-x-full transform opacity-0"
            }`}
          >
            <p className="font-semibold text-[#f4b601]">GitHub</p>
            <CustomArrow />
          </div>
        </Link>
        <Link
          href="https://drive.google.com/file/d/1_KNKhl8xPXh8wwSbAmQY6ORSSDsV6wnF/view?usp=sharing"
          target="_blank"
          className=" relative flex h-10 w-36 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full px-3 py-3 transition-colors duration-300"
          onMouseEnter={() => setTwitterHover(true)}
          onMouseLeave={() => setTwitterHover(false)}
        >
          <div
            className={`absolute flex items-center gap-2 transition-transform duration-300 ${
              twitterHover ? "-translate-x-full transform opacity-0" : "translate-x-0 transform opacity-100"
            }`}
          >
            <FaXTwitter className="size-5" />
            <p className=" font-semibold">Twitter</p>
          </div>
          <div
            className={`absolute flex items-center gap-2 transition-transform duration-300 ${
              twitterHover ? "translate-x-0 transform opacity-100" : "translate-x-full transform opacity-0"
            }`}
          >
            <p className="font-semibold text-[#f4b601]">Twitter</p>
            <CustomArrow />
          </div>
        </Link>
        <Link
          href="https://drive.google.com/file/d/1_KNKhl8xPXh8wwSbAmQY6ORSSDsV6wnF/view?usp=sharing"
          target="_blank"
          className=" relative flex h-10 w-36 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full px-3 py-3 transition-colors duration-300"
          onMouseEnter={() => setDiscordHover(true)}
          onMouseLeave={() => setDiscordHover(false)}
        >
          <div
            className={`absolute flex items-center gap-2 transition-transform duration-300 ${
              discordHover ? "-translate-x-full transform opacity-0" : "translate-x-0 transform opacity-100"
            }`}
          >
            <FaDiscord className="size-5" />
            <p className=" font-semibold">Discord</p>
          </div>
          <div
            className={`absolute flex items-center gap-2 transition-transform duration-300 ${
              discordHover ? "translate-x-0 transform opacity-100" : "translate-x-full transform opacity-0"
            }`}
          >
            <p className="font-semibold text-[#f4b601]">Discord</p>
            <CustomArrow />
          </div>
        </Link>
      </motion.div>
      <motion.div
        className="flex justify-center gap-10 max-sm:mt-10 max-sm:grid max-sm:grid-cols-2 md:mt-10"
        variants={itemVariants}
      >
        <Link
          href="https://drive.google.com/file/d/1_KNKhl8xPXh8wwSbAmQY6ORSSDsV6wnF/view?usp=sharing"
          target="_blank"
          className=" relative flex h-10 w-36 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full px-3 py-3 transition-colors duration-300"
          onMouseEnter={() => setInstagramHover(true)}
          onMouseLeave={() => setInstagramHover(false)}
        >
          <div
            className={`absolute flex items-center gap-2 transition-transform duration-300 ${
              instagramHover ? "-translate-x-full transform opacity-0" : "translate-x-0 transform opacity-100"
            }`}
          >
            <AiFillInstagram className="size-5" />
            <p className=" font-semibold">Instagram</p>
          </div>
          <div
            className={`absolute flex items-center gap-2 transition-transform duration-300 ${
              instagramHover ? "translate-x-0 transform opacity-100" : "translate-x-full transform opacity-0"
            }`}
          >
            <p className="font-semibold text-[#f4b601]">Instagram</p>
            <CustomArrow />
          </div>
        </Link>

        <Link
          href="https://drive.google.com/file/d/1_KNKhl8xPXh8wwSbAmQY6ORSSDsV6wnF/view?usp=sharing"
          target="_blank"
          className=" relative flex h-10 w-36 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full px-3 py-3 transition-colors duration-300"
          onMouseEnter={() => setGitLabHover(true)}
          onMouseLeave={() => setGitLabHover(false)}
        >
          <div
            className={`absolute flex items-center gap-2 transition-transform duration-300 ${
              gitlabHover ? "-translate-x-full transform opacity-0" : "translate-x-0 transform opacity-100"
            }`}
          >
            <FaGitlab className="size-5" />
            <p className=" font-semibold">GitLab</p>
          </div>
          <div
            className={`absolute flex items-center gap-2 transition-transform duration-300 ${
              gitlabHover ? "translate-x-0 transform opacity-100" : "translate-x-full transform opacity-0"
            }`}
          >
            <p className="font-semibold text-[#f4b601]">GitLab</p>
            <CustomArrow />
          </div>
        </Link>
        <Link
          href="https://drive.google.com/file/d/1_KNKhl8xPXh8wwSbAmQY6ORSSDsV6wnF/view?usp=sharing"
          target="_blank"
          className=" relative flex h-10 w-36 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full px-3 py-3 transition-colors duration-300"
          onMouseEnter={() => setTelegramHover(true)}
          onMouseLeave={() => setTelegramHover(false)}
        >
          <div
            className={`absolute flex items-center gap-2 transition-transform duration-300 ${
              telegramHover ? "-translate-x-full transform opacity-0" : "translate-x-0 transform opacity-100"
            }`}
          >
            <FaTelegram className="size-5" />
            <p className=" font-semibold">Telegram</p>
          </div>
          <div
            className={`absolute flex items-center gap-2 transition-transform duration-300 ${
              telegramHover ? "translate-x-0 transform opacity-100" : "translate-x-full transform opacity-0"
            }`}
          >
            <p className="font-semibold text-[#f4b601]">Telegram</p>
            <CustomArrow />
          </div>
        </Link>
        <Link
          href="https://drive.google.com/file/d/1_KNKhl8xPXh8wwSbAmQY6ORSSDsV6wnF/view?usp=sharing"
          target="_blank"
          className=" relative flex h-10 w-36 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full px-3 py-3 transition-colors duration-300"
          onMouseEnter={() => setTiktokHover(true)}
          onMouseLeave={() => setTiktokHover(false)}
        >
          <div
            className={`absolute flex items-center gap-2 transition-transform duration-300 ${
              tiktikHover ? "-translate-x-full transform opacity-0" : "translate-x-0 transform opacity-100"
            }`}
          >
            <FaTiktok className="size-5" />
            <p className=" font-semibold">TikTok</p>
          </div>
          <div
            className={`absolute flex items-center gap-2 transition-transform duration-300 ${
              tiktikHover ? "translate-x-0 transform opacity-100" : "translate-x-full transform opacity-0"
            }`}
          >
            <p className="font-semibold text-[#f4b601]">TikTok</p>
            <CustomArrow />
          </div>
        </Link>
      </motion.div>
    </motion.div>
  )
}

export default SocialsMedia
