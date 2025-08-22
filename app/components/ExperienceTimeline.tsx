'use client';

import { motion } from 'framer-motion';

const experiences = [
  {
    id: 1,
    title: 'Vanity Roles',
    company: 'Freelance',
    period: '2022 - 2024',
    description: 'Created a discord bot that allows users to receive roles based on their custom statuses.',
    technologies: ['Python', 'React', 'Typescript',],
    achievements: ['Grew the bot to 20,000+ servers, with a staggering 20m+ users.']
  },
  {
    id: 2,
    title: 'Junior Software Engineer',
    company: 'PLAYA3ULL Games',
    period: '2022 - 2025',
    description: 'Worked on the development of the PLAYA3ULL Games, which is a Web3 Gaming platform.',
    technologies: ['React', 'Node.js', 'Typescript',],
    achievements: ['Managed their discord services', 'Created a comprehensive support center.']
  },
  {
    id: 3,
    title: 'Junior Software Engineer',
    company: 'Flux Interactive',
    period: '2024 - 2025',
    description: 'Briefly worked on a platform to Buy and Sell crypto directly from your bank account.',
    technologies: ['React', 'Node.js', 'Typescript',],
    achievements: ['Created authentication system', 'Integrated a customer support platform. ']
  }
];

export default function ExperienceTimeline() {
  return (
    <section className="py-12 md:py-20 px-4 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center"
      >
        Professional Experience
      </motion.h2>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-blue-500 transform -translate-x-1/2" />

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-black transform -translate-x-1/2 z-10" />

              {/* Content card */}
              <div className={`ml-12 md:ml-0 md:w-5/12 ${
                index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
              }`}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-white">{experience.title}</h3>
                    <span className="text-sm text-purple-400 bg-purple-400/10 px-3 py-1 rounded-full">
                      {experience.period}
                    </span>
                  </div>
                  
                  <p className="text-purple-300 font-medium mb-2">{experience.company}</p>
                  <p className="text-gray-300 mb-4">{experience.description}</p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {experience.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Achievements */}
                  <ul className="space-y-1">
                    {experience.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-sm text-gray-400 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
