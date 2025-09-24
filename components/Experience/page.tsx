"use client"
import React from "react"
import { motion } from "framer-motion"

const Experience = () => {
  const experiences = [
    {
      company: "MinieMoney",
      location: "Lagos, Nigeria",
      position: "Lead Product Designer",
      period: "Jul. 2022 - Present",
      achievements: [
        "Leading the design and ideation of the product, resulting in undisclosed seed funding from Microtraction.",
        "Collaborating closely with stakeholders to ensure premium quality for a successful product launch.",
        "Iterated on the onboarding flow, resulting in a 65% increase in sign-ups and registrations.",
        "Improving design and overall performance of the product features, achieving an 80% improvement in user experience, thereby boosting product usage.",
      ],
    },
    {
      company: "Stacks Open Internet Foundation",
      location: "New York, United States",
      position: "Product Designer (Grantee)",
      period: "Apr. 2022 - Aug. 2022",
      achievements: [
        "Awarded a grant of $38,400 to lead the user interface and experience design for STALLET, a dApp Mobile Wallet aimed at onboarding millions of Non-Crypto Savvy Users into the world of web3 blockchain. Focused on providing intuitive guidance throughout wallet creation and connection processes, STALLET serves as a user-centered gateway to the blockchain ecosystem.",
        "Conducted comprehensive UX research, competitive analysis, developed user personas, user journeys, and empathy maps to inform the design and development of STALLET. Leveraged insights to create a seamless and user-friendly experience tailored to the needs of non-crypto savvy users.",
        "Contributed to the development of STALLET's design system, an open-source framework enabling easy reuse of design components for similar products. Empowered individuals, teams, and entrepreneurs to build user-centric dApp mobile wallets by leveraging the design system.",
        "The successful execution of this grant resulted in the building of STALLET, an all-in-one cross-chain decentralized mobile wallet built on the Stacks blockchain ecosystem. Designed to facilitate day-to-day crypto and blockchain activities including DeFi, Cross-Chain Exchange, NFT, GameFi, and Metaverse, with a primary focus on enhancing accessibility for non-crypto savvy users.",
      ],
    },
    {
      company: "Airfoil Studio",
      location: "California, United States",
      position: "Senior Product Designer",
      period: "Jan. 2022 - Jun. 2022",
      achievements: [
        "Worked on four innovative products: Aloe Capital, Lumen Energy, OpenGuild, and 101.xyz.",
        "Designed the v1 of Aloe Capital, reimagining decentralized lending by simplifying the experience and reducing complexity by 74%.",
        "Designed the v1 of Lumen Energy, unlocking the potential of clean energy technologies for millions of buildings, decarbonizing the future, and reducing the carbon footprint by 16%.",
        "Played a pivotal role in designing OpenGuild, resulting in a play-to-earn gaming yield of over 900%+ and securing a $1 million commitment to Pegaxy assets and games.",
        "Contributed to the design of 101.xyz, decentralizing the online course space and implementing a 'Learn-to-Earn' model, which has attracted over 500,000 unique users receiving crypto rewards.",
      ],
    },
    {
      company: "Songs To Radio",
      location: "Nebraska, United States",
      position: "Product Designer",
      period: "Jan. 2022 - Apr. 2022",
      achievements: [
        "Led a design initiative resulting in a 30% increase in user engagement metrics within three months. Intuitive navigation and visually appealing elements enhanced the user experience.",
        "Spearheaded efforts ensuring seamless compatibility across web, mobile, and tablet devices. Achieved a 34% boost in user retention, broadening audience reach.",
        "Implemented a feedback mechanism gathering user insights, leading to a 22% increase in satisfaction scores and reduced churn rate.",
        "Collaborated to optimize platform performance, resulting in a 40% decrease in page load times and a 28% improvement in system responsiveness, enhancing user satisfaction and stability.",
      ],
    },
    {
      company: "Brandable AI",
      location: "California, United States",
      position: "UI Designer",
      period: "Apr. 2021 - Dec. 2021",
      achievements: [
        "Contributed to the design of Brandable AI, an innovative AI-driven product, focusing on user-centric solutions that enhance customer experience, usage and engagement.",
        "Collaborated closely with cross-functional teams to conceptualize and iterate on product features, resulting in a seamless and intuitive user interface.",
        "Implemented user testing methodologies to gather feedback and iterate on designs, resulting in a 20% increase in user satisfaction.",
        "Successfully managed multiple design projects simultaneously, meeting tight deadlines, and delivering high-quality designs and developer-ready prototypes that exceeded stakeholder expectations.",
      ],
    },
    {
      company: "Agrific",
      location: "Lagos, Nigeria",
      position: "Product Designer",
      period: "Mar. 2020 - Mar. 2021",
      achievements: [
        "Led the design and ideation of the product, facilitating agro-commodity trading in Africa and giving global market access for smallholder farmers and agro-businesses, improving their income by at least 45%.",
        "Worked closely and collaborated with stakeholders to ensure premium quality for a successful product launch, resulting in onboarding over 10,000 farmers and over 30,000 registered buyers in the first 3 months.",
        "Championed the branding and visual design direction, creating branding assets, reusable components, pitch decks, and overall design assets.",
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
              <div className="w-[70%]">
                <h4 className="text-3xl font-semibold">{exp.company}</h4>
                <p className="">{exp.location}</p>
              </div>
              <div className="flex w-full flex-col gap-4">
                <div className="mt-2 md:mt-0">
                  <p className="font-medium">{exp.position}</p>
                  <p className="">{exp.period}</p>
                </div>
                <motion.div
                  className="space-y-4"
                  variants={listContainerVariants}
                >
                  {exp.achievements.map((achievement, achievementIndex) => (
                    <motion.div key={achievementIndex} className="flex items-start" variants={itemVariants}>
                      <div className="dot-color mr-3 mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full"></div>
                      <p className="leading-relaxed">{achievement}</p>
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
