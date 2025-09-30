"use client"
import React from "react"
import { motion } from "framer-motion"

const Skills = () => {
  const skills = [
    ["Visual Design", "UI Design", "UX Design"],
    ["Product Strategy", "Product Thinking"],
    ["Usability Testing", "UX Research", "Design Systems"],
    ["Icon Design", "Illustration Design"],
    ["Interaction Design", "Prototyping", "Tailwind CSS"],
    ["No-Code Development", "+More"],
  ]

  // Mobile-specific arrangement (2-1 pattern)
  const mobileSkills = [
    ["Visual Design", "UI Design"],
    ["UX Design"],
    ["Product Strategy", "Product Thinking"],
    ["Usability Testing"],
    ["UX Research", "Design Systems"],
    ["Icon Design"],
    ["Illustration Design", "Interaction Design"],
    ["Prototyping"],
    ["Tailwind CSS", "No-Code Development"],
    ["+More"],
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  const skillItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
    hover: {
      scale: 1.05,
      backgroundColor: "rgba(250, 250, 250, 0.1)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
      },
    },
  }

  return (
    <motion.div
      className="mt-20 w-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Header Section */}
      <motion.div variants={itemVariants} className="mb-12">
        <h3 className="text-3xl font-bold">Skills</h3>
        <p className="clash small-text mt-2">
          I&apos;ve showcased below my exceptional skill sets, setting me apart from others.
        </p>
      </motion.div>

      {/* Desktop Skills Grid (hidden on mobile) */}
      <motion.div className="hidden w-full flex-col gap-6 md:flex" variants={containerVariants}>
        {skills.map((skillRow, rowIndex) => (
          <motion.div key={rowIndex} className="flex w-full gap-4" variants={itemVariants}>
            {skillRow.map((skill, skillIndex) => (
              <motion.div key={skillIndex} className="flex-1" variants={skillItemVariants} whileHover="hover">
                <div className="skills-style flex h-full items-center  rounded-lg px-4 py-3 text-center transition-colors duration-300">
                  <p className="text-sm font-medium md:text-base">{skill}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ))}
      </motion.div>

      {/* Mobile Skills Grid (hidden on desktop) */}
      <motion.div className="flex w-full flex-col gap-3 md:hidden" variants={containerVariants}>
        {mobileSkills.map((skillRow, rowIndex) => (
          <motion.div
            key={rowIndex}
            className={`flex w-full gap-3 ${skillRow.length === 2 ? "flex-row" : "flex-row "}`}
            variants={itemVariants}
          >
            {skillRow.map((skill, skillIndex) => (
              <motion.div
                key={skillIndex}
                className={skillRow.length === 2 ? "flex-1" : "max-w-full flex-1"}
                variants={skillItemVariants}
                whileHover="hover"
              >
                <div className="skills-style flex h-full items-center  rounded-lg px-4 py-3 text-center transition-colors duration-300">
                  <p className="text-sm font-medium md:text-base">{skill}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Skills
