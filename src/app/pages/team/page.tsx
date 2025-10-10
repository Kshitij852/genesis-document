import {
  RiTeamLine,
  RiUser3Line,
  RiShieldUserLine,
  RiStarLine,
  RiMailLine,
  RiTwitterLine,
  RiLinkedinBoxLine,
  RiUserSmileLine,
} from "@remixicon/react";
import React from "react";

const TeamPage = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Product Manager",
      department: "Product",
      bio: "Leads product strategy and vision with 8+ years in tech.",
      skills: ["Product Strategy", "User Research", "Agile"],
    },
    {
      id: 2,
      name: "Alex Chen",
      role: "Lead Developer",
      department: "Engineering",
      bio: "Full-stack engineer focused on scalable, maintainable systems.",
      skills: ["React", "Node.js", "TypeScript"],
    },
    {
      id: 3,
      name: "Maria Rodriguez",
      role: "UX Designer",
      department: "Design",
      bio: "Designs intuitive user experiences with empathy and precision.",
      skills: ["Figma", "User Testing", "UI/UX"],
    },
    {
      id: 4,
      name: "David Kim",
      role: "DevOps Engineer",
      department: "Engineering",
      bio: "Automates infrastructure and CI/CD pipelines for smooth delivery.",
      skills: ["Docker", "Kubernetes", "CI/CD"],
    },
  ];

  const departments = [
    { name: "All", count: 4, icon: RiTeamLine },
    { name: "Engineering", count: 2, icon: RiUser3Line },
    { name: "Design", count: 1, icon: RiShieldUserLine },
    { name: "Product", count: 1, icon: RiStarLine },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="text-center py-12 bg-white border-b border-gray-100">
        <div className="flex justify-center mb-4">
          <div className="p-3 bg-blue-100 rounded-xl">
            <RiTeamLine size={28} className="text-blue-600" />
          </div>
        </div>
        <h1 className="text-3xl font-bold text-gray-900">Meet Our Team</h1>
        <p className="text-gray-600 max-w-xl mx-auto mt-2">
          A diverse group of creators, engineers, and strategists building
          meaningful experiences together.
        </p>
      </section>

      {/* Department Filter */}
      <section className="bg-white border-b border-gray-100 py-5">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-3">
          {departments.map((dept) => (
            <button
              key={dept.name}
              className="flex items-center gap-2 px-4 py-2 text-sm rounded-lg border border-gray-200 hover:border-blue-400 hover:bg-blue-50 transition-colors"
            >
              <dept.icon size={16} className="text-gray-600" />
              <span className="font-medium text-gray-700">{dept.name}</span>
              <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full text-xs font-medium">
                {dept.count}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* Team Grid */}
      <section className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-sm transition-shadow"
          >
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-blue-50 rounded-full">
                <RiUserSmileLine size={36} className="text-blue-600" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">
              {member.name}
            </h3>
            <p className="text-blue-600 text-sm font-medium mt-1">
              {member.role}
            </p>
            <p className="text-gray-500 text-sm mt-1">{member.department}</p>

            <p className="text-gray-600 text-sm mt-4 leading-relaxed">
              {member.bio}
            </p>

            <div className="flex flex-wrap justify-center gap-2 mt-4">
              {member.skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Social */}
            <div className="flex justify-center gap-3 mt-5">
              <button className="text-gray-400 hover:text-blue-600">
                <RiLinkedinBoxLine size={18} />
              </button>
              <button className="text-gray-400 hover:text-blue-400">
                <RiTwitterLine size={18} />
              </button>
              <button className="text-gray-400 hover:text-blue-600">
                <RiMailLine size={18} />
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-center py-14">
        <h2 className="text-2xl font-bold text-white mb-3">
          Want to Join Our Team?
        </h2>
        <p className="text-blue-100 mb-6 max-w-xl mx-auto">
          We’re always looking for passionate people to help us shape the
          future.
        </p>
        <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition">
          View Open Positions
        </button>
      </section>
    </div>
  );
};

export default TeamPage;
