'use client';

import { motion } from 'framer-motion';

const skills = [
	{ 
		name: 'React', 
		level: 82, 
		icon: '⚛️',
		color: 'from-blue-500 to-cyan-500',
		description: 'Advanced React patterns, hooks, and performance optimization'
	},
	{ 
		name: 'Next.js', 
		level: 85, 
		icon: '⚡',
		color: 'from-black to-gray-800',
		description: 'Full-stack development with App Router and Server Components'
	},
	{ 
		name: 'TypeScript', 
		level: 88, 
		icon: '🔷',
		color: 'from-blue-600 to-blue-700',
		description: 'Type-safe development with advanced TypeScript features'
	},
	{ 
		name: 'Python', 
		level: 92, 
		icon: '🐍',
		color: 'from-yellow-400 to-orange-500',
		description: 'Data processing, automation, and backend services'
	},
];

export default function SkillsSection() {
	return (
		<section id="skills" className="py-12 md:py-20 bg-gradient-to-b from-black to-purple-900/20">
			<div className="max-w-7xl mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-center mb-8 md:mb-12"
				>
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						Skills & Technologies
					</h2>
					<p className="text-gray-400 text-lg max-w-2xl mx-auto">
						I've mastered a diverse set of technologies and continue to expand my skill set with emerging tools and frameworks.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
					{skills.map((skill, index) => (
						<motion.div
							key={skill.name}
							initial={{ opacity: 0, scale: 0.8 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 0.4, delay: index * 0.1 }}
							whileHover={{ scale: 1.05, y: -5 }}
							className="group relative"
						>
							<div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 h-full">
								{/* Skill icon and name */}
								<div className="text-center mb-4">
									<motion.div
										animate={{ 
											rotate: [0, 10, -10, 0],
											scale: [1, 1.1, 1]
										}}
										transition={{ 
											duration: 2, 
											repeat: Infinity, 
											delay: index * 0.2 
										}}
										className="text-4xl mb-3"
									>
										{skill.icon}
									</motion.div>
									<h3 className="text-lg font-semibold text-white mb-2">{skill.name}</h3>
								</div>

								{/* Progress bar */}
								<div className="mb-4">
									<div className="flex justify-between text-sm text-gray-400 mb-2">
										<span>Proficiency</span>
										<span>{skill.level}%</span>
									</div>
									<div className="w-full bg-white/10 rounded-full h-2">
										<motion.div
											initial={{ width: 0 }}
											whileInView={{ width: `${skill.level}%` }}
											viewport={{ once: true }}
											transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
											className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
										/>
									</div>
								</div>

								{/* Description */}
								<p className="text-gray-300 text-sm text-center leading-relaxed">
									{skill.description}
								</p>

								{/* Hover effect overlay */}
								<motion.div
									initial={{ opacity: 0 }}
									whileHover={{ opacity: 1 }}
									className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-xl pointer-events-none"
								/>
							</div>
						</motion.div>
					))}
				</div>

				{/* Additional skills section */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.5 }}
					className="mt-16 text-center"
				>
					<h3 className="text-2xl font-bold mb-6">Other Skills & Tools</h3>
					<div className="flex flex-wrap justify-center gap-3">
						{['Git', 'Docker', 'PostgreSQL', 'Redis', 'Cypress', 'Supabase', 'Clerk', 'RabbitMQ'].map((tool, index) => (
							<motion.span
								key={tool}
								initial={{ opacity: 0, scale: 0.8 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								transition={{ duration: 0.3, delay: index * 0.1 }}
								whileHover={{ scale: 1.1 }}
								className="bg-white/5 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full text-sm hover:bg-white/10 transition-colors cursor-default"
							>
								{tool}
							</motion.span>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
}
