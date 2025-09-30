import Image from "next/image"
import { useState } from "react"
import { GoArrowRight } from "react-icons/go"
import { useRouter } from "next/navigation"
import { projects } from "utils"
import { motion } from "framer-motion"

export default function ProjectCard() {
  const [hoverIndex, setHoverIndex] = useState(-1)
  const [justHoverIndex, setJustHoverIndex] = useState(-1)
  const router = useRouter()

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
    <>
      {projects.map((project, index) => (
        <motion.div
          className="card-bg relative h-[450px] overflow-hidden rounded-xl border border-[#FFFFFF1A]"
          onMouseEnter={() => setHoverIndex(index)}
          onMouseLeave={() => setHoverIndex(-1)}
          key={index}
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div className={`transition-transform duration-500 ${hoverIndex === index ? "-translate-y-full" : ""}`}>
            <Image
              className="h-auto w-full overflow-hidden rounded-t-xl  "
              src={project.imageSrc}
              width={400}
              height={400}
              alt="project-thumbnail"
            />
          </div>
          <div
            className={`relative transition-transform duration-500 ${hoverIndex === index ? "-translate-y-60" : ""}`}
          >
            <div className="p-4">
              <div className="flex gap-2">
                <p className="containerbg rounded-full px-2 py-1 text-sm font-medium">{project.year}</p>
                <p className="containerbg rounded-full px-2 py-1 text-sm font-medium ">{project.category}</p>
                <p className="containerbg rounded-full px-2 py-1 text-sm font-medium">{project.industry}</p>
              </div>
              <p className="clash small-text mt-2">{project.title}</p>
              <h5 className="clash text-xl font-bold">{project.description}</h5>
            </div>
            <div
              className={`p-4 transition-opacity duration-500 ${
                hoverIndex === index ? "opacity-100" : "hidden opacity-0"
              }`}
            >
              <p className=" small-text">{project.info}</p>
            </div>
          </div>
          <div
            className={`absolute bottom-4 left-4 right-4 transition-opacity duration-500 ${
              hoverIndex === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <motion.button
              className="study_case group relative flex w-full items-center justify-between overflow-hidden rounded-full px-3 py-2 text-sm"
              onClick={() => router.push(`/projects/${project.id}`)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-20 transition-colors duration-300 group-hover:text-black">
                View Project Detail
              </span>
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="relative z-20 transition-colors duration-300 group-hover:text-black"
              >
                <path
                  d="M9.1497 0.80204C9.26529 3.95101 13.2299 6.51557 16.1451 8.0308L16.1447 9.43036C13.2285 10.7142 9.37889 13.1647 9.37789 16.1971L7.27855 16.1978C7.16304 12.8156 10.6627 10.4818 13.1122 9.66462L0.049716 9.43565L0.0504065 7.33631L13.1129 7.56528C10.5473 6.86634 6.93261 4.18504 7.05036 0.80273L9.1497 0.80204Z"
                  fill="currentColor"
                />
              </svg>
              <span className="absolute inset-0 -translate-x-full transform bg-gradient-to-r from-[#f4b601] to-[#f4b601] transition-transform duration-500 group-hover:translate-x-0" />
            </motion.button>
          </div>
        </motion.div>
      ))}
    </>
  )
}
