"use client"
import Image from "next/image"
import { projects } from "utils"
import ProjectsNav from "../../../../components/Navbar/ProjectsNav"
import { motion } from "framer-motion"
import { useEffect } from "react"

// Animation variants
const pageVariants = {
  initial: { opacity: 0 },
  in: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  out: {
    opacity: 0,
    transition: { duration: 0.4, ease: "easeIn" },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

const fadeInLeft = {
  hidden: {
    opacity: 0,
    x: -30,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

const fadeInRight = {
  hidden: {
    opacity: 0,
    x: 30,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

const scaleIn = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

const slideInUp = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
}

const hoverEffect = {
  scale: 1.02,
  transition: {
    type: "spring",
    stiffness: 400,
    damping: 10,
  },
}

const tapEffect = {
  scale: 0.98,
}

const ProjectDetail = ({ params }: { params: { projectsId: string } }) => {
  const projectId = parseInt(params.projectsId, 10)
  const project = projects.find((p) => p.id === projectId)

  // Smooth scroll function
  const smoothScrollTo = (targetId: string) => {
    const targetElement = document.getElementById(targetId.replace("#", ""))
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  // Handle click on table of contents items
  const handleTableOfContentsClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    smoothScrollTo(href)
  }

  useEffect(() => {
    // Add smooth scrolling behavior to the entire document
    const html = document.documentElement
    html.style.scrollBehavior = "smooth"

    return () => {
      html.style.scrollBehavior = "auto"
    }
  }, [])

  if (!project) {
    return (
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        className="flex min-h-screen items-center justify-center"
      >
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold text-gray-600">Project not found</h1>
        </motion.div>
      </motion.div>
    )
  }

  const members = project.teamMember ?? []
  const overview = project.overview ?? []
  const challenge = project.challenge ?? []
  const solution = project.solution ?? []
  const process = project.process ?? []
  const conclusion = project.conclusion ?? []

  return (
    <motion.section
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      className="mb-40 flex size-full items-start justify-center"
    >
      {/* Main Content Container */}
      <div className="flex min-h-screen max-w-[800px] flex-col max-sm:p-4">
        <ProjectsNav />

        <motion.div variants={staggerContainer} initial="hidden" animate="show" className="mt-20 flex grow">
          <div className="w-full gap-6 max-md:flex-col max-md:px-0 md:mb-16">
            <div>
              <div className="mx-auto max-w-4xl pt-6">
                {/* Overview Section */}
                <motion.div variants={fadeInUp} id="introduction" className="mb-6">
                  <motion.h1
                    className="mb-4 text-3xl font-bold"
                    whileInView="show"
                    initial="hidden"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                  >
                    {project.title}: {project.description}
                  </motion.h1>
                </motion.div>

                {/* Main Image */}
                <motion.div
                  variants={scaleIn}
                  whileInView="show"
                  initial="hidden"
                  viewport={{ once: true }}
                  whileHover={hoverEffect}
                  className="mb-6"
                >
                  <Image
                    src={project.imageSrc}
                    width={600}
                    height={400}
                    alt="project-image"
                    className="w-full rounded-lg shadow-lg"
                  />
                </motion.div>

                {/* Divider */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="border-style my-20 border-t"
                />

                {/* Introduction Section */}
                <motion.div
                  id="introduction"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-50px" }}
                  className="flex flex-col gap-6"
                >
                  {/* Company & Role Info */}
                  <motion.div variants={fadeInUp} className="flex gap-6 max-md:flex-col">
                    {/* Company Info Card */}
                    <motion.div
                      variants={fadeInLeft}
                      whileHover={hoverEffect}
                      whileTap={tapEffect}
                      className="containerbg w-[40%] rounded-xl p-4 max-md:w-full"
                    >
                      <motion.div className="space-y-4">
                        {[
                          { label: "Company", value: project.company },
                          { label: "Headquarters", value: project.headquarters },
                          { label: "Website", value: project.website },
                          { label: "Revenue", value: project.revenue },
                          { label: "Founded", value: project.founded },
                        ].map((item, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex "
                          >
                            <p className="small-text mb-4 w-1/2">{item.label}</p>
                            <p className="mb-4 flex w-1/2 items-end">{item.value}</p>
                          </motion.div>
                        ))}
                      </motion.div>
                    </motion.div>

                    {/* Role Info Card */}
                    <motion.div
                      variants={fadeInRight}
                      whileHover={hoverEffect}
                      whileTap={tapEffect}
                      className="containerbg w-[60%] rounded-xl p-4 max-md:w-full"
                    >
                      <motion.div className="space-y-4">
                        {[
                          { label: "Role", value: project.role },
                          { label: "Duration", value: project.duration },
                          { label: "Tools", value: project.tools },
                        ].map((item, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex-col"
                          >
                            <p className="small-text">{item.label}</p>
                            <p className="mb-4">{item.value}</p>
                          </motion.div>
                        ))}
                      </motion.div>
                    </motion.div>
                  </motion.div>

                  {/* Team Members */}
                  <motion.div
                    variants={fadeInUp}
                    whileHover={hoverEffect}
                    className="containerbg flex flex-col gap-4 rounded-xl p-4"
                  >
                    <motion.p
                      className="small-text"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                    >
                      Team Member
                    </motion.p>
                    <motion.div className="flex gap-24 max-md:gap-12 max-sm:flex-col" variants={staggerContainer}>
                      {members.map((member, index) => (
                        <motion.div
                          key={index}
                          variants={scaleIn}
                          whileHover={{
                            scale: 1.05,
                            rotateZ: 2,
                            transition: { type: "spring", stiffness: 300 },
                          }}
                          whileTap={tapEffect}
                          className="text-center"
                        >
                          <motion.div
                            whileHover={{
                              rotateY: 15,
                              transition: { duration: 0.3 },
                            }}
                            className="inline-block"
                          >
                            <Image
                              src={member.avatarSrc}
                              width={100}
                              height={100}
                              alt="team-member"
                              className="h-30 w-30 rounded-lg shadow-md"
                            />
                          </motion.div>
                          <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + 0.3 }}
                            className="mt-2 font-medium"
                          >
                            {member.name}
                          </motion.p>
                          <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + 0.4 }}
                            className="small-text text-sm text-gray-600"
                          >
                            {member.position}
                          </motion.p>
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>

                  {/* Details */}
                  <motion.p variants={fadeInUp} className="small-text my-4 leading-relaxed">
                    {project.details}
                  </motion.p>

                  {/* Highlights */}
                  {project.highlights && (
                    <div id="highlights" className="containerbg flex flex-col  rounded-xl p-6">
                      <motion.p
                        className="small-text font-semibold"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                      >
                        Highlights
                      </motion.p>
                      <motion.h4 variants={fadeInUp} className="mb-4 text-2xl font-semibold">
                        Some of the user interfaces and visual designs.
                      </motion.h4>
                      <motion.div variants={staggerContainer} className="space-y-10">
                        {project.highlights.map((highlight, index) => (
                          <motion.div key={index} variants={slideInUp} whileHover={{ y: -5 }} className="flex flex-col">
                            <motion.div whileHover={hoverEffect} className="overflow-hidden rounded-lg">
                              <Image
                                src={highlight.imgSrc}
                                width={100}
                                height={100}
                                alt="highlight-image"
                                className="w-full rounded-lg shadow-md"
                              />
                            </motion.div>
                            <motion.p
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.2 + 0.3 }}
                              className="small-text mt-4 text-center text-sm leading-relaxed"
                            >
                              {highlight.detail}
                            </motion.p>
                          </motion.div>
                        ))}
                      </motion.div>
                    </div>
                  )}
                </motion.div>
              </div>

              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="border-style my-20 border-t"
              />
              <motion.p
                className="small-text font-semibold"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                Overview
              </motion.p>
              <motion.h4 variants={fadeInUp} className="mb-4 text-2xl font-semibold">
                What is {project.title}
              </motion.h4>

              {/* Info Section */}
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="mt-4"
                id="overview"
              >
                {overview.map((overview, index) => (
                  <motion.p key={index} className="small-text mb-5 leading-relaxed">
                    {overview.detail}
                  </motion.p>
                ))}
              </motion.div>

              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="border-style my-20 border-t"
              />

              <motion.p
                className="small-text font-semibold"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                The Challenge
              </motion.p>
              <motion.h4 variants={fadeInUp} className="mb-4 text-2xl font-semibold">
                What Birthed {project.title}
              </motion.h4>

              {/* Info Section */}
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="mt-4"
                id="challenge"
              >
                {challenge.map((challenge, index) => (
                  <motion.p key={index} className="small-text mb-5 leading-relaxed">
                    {challenge.detail}
                  </motion.p>
                ))}
              </motion.div>

              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="border-style my-20 border-t"
              />

              <motion.p
                className="small-text font-semibold"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                The Solution
              </motion.p>
              <motion.h4 variants={fadeInUp} className="mb-4 text-2xl font-semibold">
                How {project.title} solves the problem
              </motion.h4>

              {/* Info Section */}
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="mt-4"
                id="solution"
              >
                {solution.map((solution, index) => (
                  <motion.p key={index} className="small-text mb-5 leading-relaxed">
                    {solution.detail}
                  </motion.p>
                ))}
              </motion.div>

              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="border-style my-20 border-t"
              />

              <motion.p
                className="small-text font-semibold"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                The Process
              </motion.p>
              <motion.h4 variants={fadeInUp} className="mb-4 text-2xl font-semibold">
                How this was Done
              </motion.h4>

              {/* Info Section */}
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="mt-4"
                id="process"
              >
                {process.map((process, index) => (
                  <motion.p key={index} className="small-text mb-5 leading-relaxed">
                    {process.detail}
                  </motion.p>
                ))}
              </motion.div>

              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="border-style my-20 border-t"
              />

              <motion.p
                className="small-text font-semibold"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                The Conclusion
              </motion.p>
              <motion.h4 variants={fadeInUp} className="mb-4 text-2xl font-semibold">
                Conclusions and Key takeaways
              </motion.h4>

              {/* Info Section */}
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="mt-4"
                id="result"
              >
                {conclusion.map((conclusion, index) => (
                  <motion.p key={index} className="small-text mb-5 leading-relaxed">
                    {conclusion.detail}
                  </motion.p>
                ))}
              </motion.div>

              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="border-style my-20 border-t"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Table of Contents - Fixed Position on the Right */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
        className="fixed right-20 top-20 max-md:hidden"
      >
        <motion.div whileHover={{ scale: 1.02 }} className="sticky top-20 rounded-lg  p-6 backdrop-blur-sm">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mb-4 text-xl font-bold"
          >
            Table of Contents
          </motion.h2>
          <motion.ul className="space-y-3" variants={staggerContainer} initial="hidden" animate="show">
            {[
              { href: "#introduction", text: "Introduction" },
              { href: "#highlights", text: "Highlights" },
              { href: "#overview", text: "Overview" },
              { href: "#challenge", text: "The Challenge" },
              { href: "#solution", text: "Solution" },
              { href: "#process", text: "Process" },
              { href: "#result", text: "Conclusion" },
            ].map((item, index) => (
              <motion.li key={index} variants={fadeInRight}>
                <motion.a
                  href={item.href}
                  onClick={(e) => handleTableOfContentsClick(e, item.href)}
                  className="small-text text-hover  block transition-colors duration-200"
                  whileHover={{
                    x: 8,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={tapEffect}
                >
                  {item.text}
                </motion.a>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}

export default ProjectDetail
