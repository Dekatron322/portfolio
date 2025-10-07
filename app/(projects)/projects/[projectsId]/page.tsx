"use client"
import Image from "next/image"
import { projects } from "utils" // Import the projects data
import ProjectsNav from "../../../../components/Navbar/ProjectsNav"

const ProjectDetail = ({ params }: { params: { projectsId: string } }) => {
  const projectId = parseInt(params.projectsId, 10) // Use projectsId here
  const project = projects.find((p) => p.id === projectId)

  if (!project) {
    return <div>Project not found</div>
  }

  // Safely handle optional team members
  const members = project.teamMember ?? []

  return (
    <section className="mb-40 flex size-full items-start justify-center">
      {/* Main Content Container */}
      <div className="flex min-h-screen max-w-[800px] flex-col max-sm:p-4">
        <ProjectsNav />
        <div className="mt-20 flex grow">
          <div className="w-full gap-6 max-md:flex-col max-md:px-0 md:mb-16">
            <div className="">
              <div className="mx-auto max-w-4xl pt-6">
                <h1 id="overview" className="mb-4 text-3xl font-bold">
                  {project.title}: {project.description}
                </h1>
                <Image
                  id="images"
                  src={project.imageSrc}
                  width={600}
                  height={400}
                  alt="project-image"
                  className="mb-6 w-full rounded-lg"
                />
                <div className="border-style my-20"></div>
                <div id="introduction" className=" flex flex-col gap-6">
                  <div className="flex gap-6">
                    <div className="containerbg w-[40%] rounded-xl p-4">
                      <div className="flex gap-10">
                        <p className="small-text mb-4">Company</p>
                        <p className="mb-4 ">{project.company}</p>
                      </div>
                      <div className="flex gap-10">
                        <p className="small-text mb-4">Headquarters</p>
                        <p className="mb-4 ">{project.headquarters}</p>
                      </div>
                      <div className="flex gap-10">
                        <p className="small-text mb-4">Website</p>
                        <p className="mb-4 ">{project.website}</p>
                      </div>
                      <div className="flex gap-10">
                        <p className="small-text mb-4">Revenue</p>
                        <p className="mb-4 ">{project.revenue}</p>
                      </div>
                      <div className="flex gap-10">
                        <p className="small-text mb-4">Founded</p>
                        <p className="mb-4 ">{project.founded}</p>
                      </div>
                    </div>
                    <div className="containerbg w-[60%] rounded-xl p-4">
                      <div className="flex-col ">
                        <p className="small-text ">Role</p>
                        <p className="mb-4 ">{project.role}</p>
                      </div>
                      <div className="flex-col ">
                        <p className="small-text ">Duration</p>
                        <p className="mb-4 ">{project.duration}</p>
                      </div>
                      <div className="flex-col ">
                        <p className="small-text ">Tools</p>
                        <p className="mb-4 ">{project.tools}</p>
                      </div>
                    </div>
                  </div>
                  <div className="containerbg flex flex-col gap-4 rounded-xl p-4">
                    <p className="small-text ">Team Member</p>
                    <div className="flex gap-24">
                      {members.map((member, index) => (
                        <div key={index}>
                          <Image
                            src={member.avatarSrc}
                            width={100}
                            height={100}
                            alt="project-image"
                            className="h-30 w-30  rounded-lg"
                          />
                          <p className=" mt-2 ">{member.name}</p>
                          <p className="small-text text-sm">{member.position}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <p className="small-text my-4 ">{project.details}</p>

                  {project.highlights && (
                    <div className="containerbg flex flex-col gap-4 rounded-xl p-4">
                      <p className="small-text ">Highlights</p>
                      <div className="flex-col gap-24">
                        {project.highlights.map((highlight, index) => (
                          <div key={index} className="mb-10 flex flex-col">
                            <Image
                              src={highlight.imgSrc}
                              width={100}
                              height={100}
                              alt="project-image"
                              className="w-full  rounded-lg"
                            />
                            <p className=" small-text mt-2 text-center text-sm">{highlight.detail}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <p id="info" className="small-text">
                  {project.info}
                </p>

                {/* Add more project details here */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Table of Contents - Fixed Position on the Right */}
      <div className="fixed right-20 top-20 max-md:hidden ">
        <div className="sticky top-20">
          <h2 className="mb-4 text-xl font-bold">Table of Contents</h2>
          <ul className="space-y-4 ">
            <li>
              <a href="#introduction" className="small-text text-hover">
                Introduction
              </a>
            </li>
            <li>
              <a href="#highlights" className="small-text text-hover">
                Highlights
              </a>
            </li>
            <li>
              <a href="#overview" className="small-text text-hover">
                Overview
              </a>
            </li>
            <li>
              <a href="#challenge" className="small-text text-hover">
                The Challenge
              </a>
            </li>
            <li>
              <a href="#solution" className="small-text text-hover">
                Solution
              </a>
            </li>
            <li>
              <a href="#process" className="small-text text-hover">
                Process
              </a>
            </li>
            <li>
              <a href="#result" className="small-text text-hover">
                Conclusion
              </a>
            </li>

            {/* Add more TOC links as needed */}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default ProjectDetail
