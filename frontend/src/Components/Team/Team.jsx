import React from "react";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import "./Team.css";

const Team = () => {
  const teamMembers = [
    {
      name: "Alice Smith",
      role: "Project Manager",
      description:
        "Passionate about connecting communities and making a difference through innovative solutions.",
    },
    {
      name: "John Doe",
      role: "Tech Lead",
      description:
        "Expert in building user-friendly applications that empower users and enhance experiences.",
    },
    {
      name: "Emily Johnson",
      role: "Marketing Specialist",
      description:
        "Focused on spreading awareness and engaging the community in our mission.",
    },
    {
      name: "Michael Brown",
      role: "Design Expert",
      description:
        "Creating visually appealing designs that resonate with our users and promote usability.",
    },
    {
      name: "Sarah Davis",
      role: "Community Manager",
      description:
        "Building relationships and fostering a sense of belonging among our users.",
    },
    {
      name: "David Wilson",
      role: "Data Analyst",
      description:
        "Analyzing trends and metrics to improve our platform’s impact and user experience.",
    },
  ];

  return (
    <section className="team-section">
      <div className="team-container">
        <div className="text-center ">
          <h5 className="team-tagline">Together</h5>
          <h4 className="team-heading">Our Team</h4>
          <p className="team-description">
            A dedicated group committed to social impact.
          </p>
        </div>

        {/* Team Cards */}
        <div className="row">
          {teamMembers.map((member, index) => (
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={index}>
              <div className="team-card">
                <div className="team-image-placeholder"></div>
                <h5 className="team-name">{member.name}</h5>
                <p className="team-role">{member.role}</p>
                <p className="team-description">{member.description}</p>
                <div className="team-icons">
                  <FaLinkedin className="team-icon" />
                  <FaTwitter className="team-icon" />
                  <FaGithub className="team-icon" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;

