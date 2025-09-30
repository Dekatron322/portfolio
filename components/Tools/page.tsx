"use client"
import React, { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

const Tools = () => {
  // Original arrangement for desktop
  const tools = [
    [
      { name: "VS Code", category: "Development", logo: "/tools/vscode.png" },
      { name: "XCode", category: "Development", logo: "/tools/xcode.png" },
      { name: "Postman", category: "API Testing", logo: "/tools/postman.webp" },
    ],
    [
      { name: "Figma", category: "Design", logo: "/tools/figma.webp" },
      { name: "Framer", category: "No-Code", logo: "/tools/framer.avif" },
    ],
    [
      { name: "Slack", category: "Communication", logo: "/tools/slack.webp" },
      { name: "Jira", category: "Management", logo: "/tools/jira.avif" },
      { name: "Notion", category: "Documentation", logo: "/tools/notion.avif" },
    ],
    [
      { name: "G-Suite", category: "Workspace", logo: "/tools/gsuite.avif" },
      { name: "Maze", category: "Research", logo: "/tools/maze.avif" },
    ],
    [
      { name: "Chrome", category: "Browser", logo: "/tools/chrome.webp" },
      { name: "Zoom", category: "Meeting", logo: "/tools/zoom.webp" },
      { name: "Meet", category: "Meeting", logo: "/tools/meet.webp" },
    ],
    [
      { name: "Notes", category: "Note", logo: "/tools/note.avif" },
      { name: "GitHub", category: "Development", logo: "/tools/github.avif" },
    ],
    [
      { name: "Expo", category: "Development", logo: "/tools/expo.png" },
      { name: "Chatgpt", category: "AI Chat", logo: "/tools/chatgpt.webp" },
      { name: "Firebase", category: "Database", logo: "/tools/firebase.png" },
    ],
  ]

  // Mobile-specific arrangement (2-1 pattern)
  const mobileTools = [
    [
      { name: "VS Code", category: "Development", logo: "/tools/vscode.png" },
      { name: "XCode", category: "Development", logo: "/tools/xcode.png" },
    ],
    [{ name: "Postman", category: "API Testing", logo: "/tools/postman.webp" }],
    [
      { name: "Figma", category: "Design", logo: "/tools/figma.webp" },
      { name: "Framer", category: "No-Code", logo: "/tools/framer.avif" },
    ],
    [{ name: "Slack", category: "Communication", logo: "/tools/slack.webp" }],
    [
      { name: "Jira", category: "Management", logo: "/tools/jira.avif" },
      { name: "Notion", category: "Documentation", logo: "/tools/notion.avif" },
    ],
    [{ name: "G-Suite", category: "Workspace", logo: "/tools/gsuite.avif" }],
    [
      { name: "Maze", category: "Research", logo: "/tools/maze.avif" },
      { name: "Chrome", category: "Browser", logo: "/tools/chrome.webp" },
    ],
    [{ name: "Zoom", category: "Meeting", logo: "/tools/zoom.webp" }],
    [
      { name: "Meet", category: "Meeting", logo: "/tools/meet.webp" },
      { name: "Notes", category: "Note", logo: "/tools/note.avif" },
    ],
    [{ name: "GitHub", category: "Development", logo: "/tools/github.avif" }],
    [
      { name: "Expo", category: "Development", logo: "/tools/expo.png" },
      { name: "Chatgpt", category: "AI Chat", logo: "/tools/chatgpt.webp" },
    ],
    [{ name: "Firebase", category: "Database", logo: "/tools/firebase.png" }],
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

  const toolItemVariants = {
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

  const [broken, setBroken] = useState<Record<string, boolean>>({})

  return (
    <motion.div
      className="mt-20 w-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.div variants={itemVariants} className="mb-12">
        <h3 className="text-3xl font-bold">Toolkit</h3>
        <p className="clash small-text mt-2">
          Here are my consistent toolkit of essential tools and software for work.
        </p>
      </motion.div>

      {/* Desktop Tools Grid (hidden on mobile) */}
      <motion.div className="hidden w-full flex-col gap-6 md:flex" variants={containerVariants}>
        {tools.map((toolRow, rowIndex) => (
          <motion.div key={rowIndex} className="flex w-full gap-4" variants={itemVariants}>
            {toolRow.map((tool, toolIndex) => (
              <motion.div key={toolIndex} className="flex-1" variants={toolItemVariants} whileHover="hover">
                <div className="skills-style flex h-full items-center gap-4 rounded-lg border px-4 py-3 transition-colors duration-300">
                  {(() => {
                    const key = `${tool.name}-${toolIndex}`
                    if (broken[key]) {
                      return (
                        <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded border border-[#292929] bg-[#0f0f0f]">
                          <span className="text-xs opacity-70">IMG</span>
                        </div>
                      )
                    }
                    return (
                      <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded border border-[#292929] bg-[#0f0f0f]">
                        <Image
                          src={tool.logo}
                          alt={tool.name}
                          width={40}
                          height={40}
                          className="h-8 w-8 object-contain"
                          onError={() => setBroken((prev) => ({ ...prev, [key]: true }))}
                        />
                      </div>
                    )
                  })()}

                  <div className="flex flex-col">
                    <p className="text-sm font-medium md:text-base">{tool.name}</p>
                    <p className="small-text text-xs">{tool.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ))}
      </motion.div>

      {/* Mobile Tools Grid (hidden on desktop) */}
      <motion.div className="flex w-full flex-col gap-3 md:hidden" variants={containerVariants}>
        {mobileTools.map((toolRow, rowIndex) => (
          <motion.div
            key={rowIndex}
            className={`flex w-full gap-3 ${toolRow.length === 2 ? "flex-row" : "flex-row justify-center"}`}
            variants={itemVariants}
          >
            {toolRow.map((tool, toolIndex) => (
              <motion.div
                key={toolIndex}
                className={toolRow.length === 2 ? "flex-1" : "w-full flex-1"}
                variants={toolItemVariants}
                whileHover="hover"
              >
                <div className="skills-style flex h-full items-center gap-2 rounded-lg border px-4 py-3 transition-colors duration-300">
                  {(() => {
                    const key = `${tool.name}-${toolIndex}`
                    if (broken[key]) {
                      return (
                        <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded border border-[#292929] bg-[#0f0f0f]">
                          <span className="text-xs opacity-70">IMG</span>
                        </div>
                      )
                    }
                    return (
                      <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded border border-[#292929] bg-[#0f0f0f]">
                        <Image
                          src={tool.logo}
                          alt={tool.name}
                          width={30}
                          height={30}
                          className="h-7 w-7 object-contain"
                          onError={() => setBroken((prev) => ({ ...prev, [key]: true }))}
                        />
                      </div>
                    )
                  })()}

                  <div className="flex flex-col">
                    <p className="text-sm font-medium md:text-base">{tool.name}</p>
                    <p className="small-text text-xs">{tool.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Tools
