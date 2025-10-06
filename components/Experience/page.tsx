"use client"
import React from "react"
import { motion } from "framer-motion"

const Experience = () => {
  const experiences = [
    {
      company: "Bluremit",
      location: "Abuja, Nigeria",
      position: "Lead Frontend Developer",
      period: "June. 2025 - Present",
      achievements: [
        "Architected and built a single, scalable mobile application serving three distinct user roles, End-User, BDC, and BDC-Agent—each with a customized and secure interface from a unified codebase.",
        "For the End-User, engineered an intuitive consumer interface for comparing real-time exchange rates, locating verified BDC offices, and securely booking currency buy/sell transactions.",
        "For the BDC role, developed the business management portal enabling BDC owners to update live rates, manage their agent workforce, oversee liquidity, and track overall branch performance.",
        "For the BDC-Agent, built the operational interface for frontline staff to efficiently process customer bookings, verify transactions, and manage in-person currency exchanges at the office.",
      ],
    },
    {
      company: "Ultra App - Dashboard - Website",
      location: "Lagos, Nigeria",
      position: "Lead Frontend Developer",
      period: "Apr. 2024 - Present",
      achievements: [
        "Tasked with refining and completing the in-progress cross-platform mobile application. Spearheaded the final development phase, enhancing performance, hardening the security of integrated Web2 (banking, bills) and Web3 (wallet, swap) features, and ensuring a seamless, unified user experience for managing both fiat and digital assets.",
        "Architected and built the comprehensive web-based admin dashboard from scratch. Developed a centralized command center for overseeing all platform activity, providing administrators with granular control over user management, fiat/crypto transaction monitoring, and financial operations within the hybrid ecosystem.",
        "Designed and developed the corporate marketing website from the ground up, creating a high-performance, responsive platform to effectively communicate the Ultra value proposition, drive user acquisition, and establish brand trust.",
      ],
    },
    {
      company: "Saffron Wellcare",
      location: "Mumbai, India",
      position: "Senior Frontend Developer",
      period: "March. 2025 - Present",
      achievements: [
        "Engineered the primary web application from scratch, collaborating closely with the UI/UX developer to build key modules for inventory, sales, purchases, and finance, ensuring a seamless and actionable user experience.",
        "Designed and built a modular dashboard from scratch using React and TypeScript, allowing pharmacy staff to customize their workspace based on their daily responsibilities (e.g., dispensary, inventory management, financial reporting).",
        "Developed real-time inventory tracking modules with automated low-stock alerts, batch number tracking, and expiry date management. This directly addressed critical pain points of stockouts and medication waste.",
        "Engineered the end-to-end purchase management system, including features to raise purchase orders, process supplier returns, and implement an intelligent reorder suggestion engine based on sales data, reducing manual oversight.",
        "Built centralized directories for customer profiles (including medication history) and supplier information, creating a single source of truth for all business relationships.",
      ],
    },
    {
      company: "OTech Microfinance Bank",
      location: "Abuja, Nigeria",
      position: "Lead Frontend Developer (Contract)",
      period: "April. 2025 - August. 2025",
      achievements: [
        "Engineered the primary administrative dashboard from scratch to serve as the central command center for all traditional banking operations. The platform provides real-time oversight into core metrics, including loan disbursements, savings account activity, transaction monitoring, and agent network performance.",
        "Architected and built the customer-facing virtual banking interface (OTech Plus), enabling end-users to manage accounts, perform transfers, pay bills, and access micro-loan services entirely online. Focused on creating an intuitive and accessible user experience to drive financial inclusion.",
        "Developed a comprehensive suite of interactive charts, graphs, and reporting modules for both dashboards, transforming complex financial data into actionable insights for both bank administrators and customers.",
        "Implemented a robust role-based access control (RBAC) system, ensuring that bank staff, agents, and customers only see relevant data and features, maintaining the highest standards of security and privacy.",
        "Engineered a real-time transaction monitoring system, providing instant alerts for suspicious activities and enabling quick intervention to prevent fraud and unauthorized access.",
      ],
    },
  ]

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
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  // Nested container for achievements to mirror SocialsMedia staggered animation
  const listContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <div>
      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          className="my-10 w-full rounded-lg transition-all duration-300"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.2 },
          }}
        >
          {/* Company Header */}
          <div className="mb-20">
            <div className="flex w-full flex-col gap-10 max-sm:mb-3 md:flex-row md:items-start">
              <div className="w-[70%] max-sm:w-full">
                <h4 className="text-3xl font-semibold">{exp.company}</h4>
                <p className="">{exp.location}</p>
              </div>
              <div className="flex w-full flex-col gap-4">
                <div className="mt-2 md:mt-0">
                  <p className="font-medium">{exp.position}</p>
                  <p className="small-text">{exp.period}</p>
                </div>
                <motion.div className="space-y-4" variants={listContainerVariants}>
                  {exp.achievements.map((achievement, achievementIndex) => (
                    <motion.div key={achievementIndex} className="flex items-start" variants={itemVariants}>
                      <div className="dot-color mr-3 mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full"></div>
                      <p className="small-text leading-relaxed">{achievement}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default Experience
