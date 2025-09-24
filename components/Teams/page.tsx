"use client"
import React, { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

const Teams = () => {
  const teams = [
    { name: "Ultra", logo: "/teams/ultra.svg" },
    { name: "Susmo", logo: "/teams/susmo.svg" },
    { name: "Altima", logo: "/teams/altima.svg" },
    { name: "Bluremit", logo: "/teams/bluremit.svg" },
    { name: "Saffron", logo: "/teams/saffron.svg" },
    { name: "Otech", logo: "/teams/otech.svg" },
    { name: "Chats", logo: "/teams/chats.png" },
    { name: "Craft", logo: "/teams/craft.png" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
    hover: {
      scale: 1.05,
      transition: { type: "spring", stiffness: 300, damping: 15 },
    },
  }

  // Infinite scroll animation (seamless)
  const infiniteScrollVariants = {
    animate: {
      x: ["0%", "-50%"], // move half the width (since list is duplicated)
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
          ease: "linear",
        },
      },
    },
  }

  const [broken, setBroken] = useState<Record<string, boolean>>({})

  return (
    <motion.div
      className="mt-20 w-full overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Header Section */}
      <motion.div variants={itemVariants} className="mb-12 text-center">
        <h3 className="text-3xl font-bold">Teams</h3>
        <p className="clash mt-2">Some of the exceptional teams I&apos;ve worked with</p>
      </motion.div>

      {/* Infinite Scroll Container */}
      <div className="relative w-full">
        {/* Gradient Overlays */}
        <div className="teams-gradient-left" />
        <div className="teams-gradient-right" />

        {/* Scrolling Logos */}
        <motion.div className="flex w-max gap-20" variants={infiniteScrollVariants} animate="animate">
          {[...teams, ...teams].map((team, index) => {
            const key = `${team.name}-${index}`
            return (
              <motion.div key={key} className="flex-shrink-0" variants={logoVariants} whileHover="hover">
                <div className="flex h-16 w-40 items-center justify-center">
                  {broken[key] ? (
                    <div className="flex h-12 w-28 items-center justify-center rounded border border-[#292929] bg-[#0f0f0f]">
                      <span className="text-xs opacity-70">{team.name}</span>
                    </div>
                  ) : (
                    <Image
                      src={team.logo}
                      alt={team.name}
                      width={112}
                      height={44}
                      className="logo-mono h-11 w-28 object-contain"
                      onError={() => setBroken((prev) => ({ ...prev, [key]: true }))}
                    />
                  )}
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Teams
