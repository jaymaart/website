'use client';

import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useCallback } from 'react';

const projects = [
	{
		id: 1,
		title: 'Quick Deploy',
		description: 'A minimalistic dashboard for deploying discord bots through docker containers',
		image: '/quick-deploy.png',
		technologies: ['Next.js', 'React', 'Javascript'],
		liveUrl: 'https://deploy.jdev.services',
		githubUrl: '#',
		featured: true
	},
	{
		id: 2,
		title: 'Surge Sense',
		description: 'A rideshare app that notifies users of upcoming surges in their area',
		image: '/surge-sense.png',
		technologies: ['React', 'Javascript', 'Expo'],
		liveUrl: '#',
		githubUrl: '#',
		featured: false
	},
	{
		id: 3,
		title: 'Metered',
		description: 'A SaaS app that monitors API usage across providers, alerts on unusual spikes, and recommends cheaper alternatives',
		image: '/metered.png',
		technologies: ['Typescript', 'Next.js', 'Clerk', 'Supabase'],
		liveUrl: 'https://metered.us',
		githubUrl: '#',
		featured: false
	},
	{
		id: 4,
		title: 'Profit Pals',
		description: 'A discord bot where users serve as stocks and others can buy.',
		image: '/profit-pals.png',
		technologies: ['Python', 'React', 'Next.js'],
		liveUrl: 'https://profitpals.xyz',
		githubUrl: '#',
		featured: true
	},
];

interface ProjectCardProps {
	project: typeof projects[0];
	index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
	const [isHovered, setIsHovered] = useState(false);
	const x = useMotionValue(0);
	const y = useMotionValue(0);

	// Simplified tilt effect
	const rotateX = useTransform(y, [-50, 50], [15, -15]);
	const rotateY = useTransform(x, [-50, 50], [-15, 15]);

	const springConfig = { damping: 25, stiffness: 200 };
	const springRotateX = useSpring(rotateX, springConfig);
	const springRotateY = useSpring(rotateY, springConfig);

	const handleMouseMove = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
		if (!isHovered) return;
		
		const rect = event.currentTarget.getBoundingClientRect();
		const centerX = rect.left + rect.width / 2;
		const centerY = rect.top + rect.height / 2;
		const mouseX = event.clientX - centerX;
		const mouseY = event.clientY - centerY;
		
		// Limit the range for smoother effect
		x.set(Math.max(-50, Math.min(50, mouseX)));
		y.set(Math.max(-50, Math.min(50, mouseY)));
	}, [isHovered, x, y]);

	const handleMouseLeave = useCallback(() => {
		x.set(0);
		y.set(0);
		setIsHovered(false);
	}, [x, y]);

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5, delay: index * 0.1 }}
			className="group relative aspect-video"
			onMouseMove={handleMouseMove}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={handleMouseLeave}
		>
			<motion.div
				style={{
					rotateX: springRotateX,
					rotateY: springRotateY,
					transformStyle: "preserve-3d",
				}}
				className="w-full h-full relative"
			>
				{/* Background image with optimized overlay */}
				<div className="absolute inset-0 rounded-2xl overflow-hidden">
					<Image 
						src={project.image} 
						alt={project.title} 
						fill 
						className="object-cover transition-transform duration-500 group-hover:scale-105" 
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
				</div>

				{/* Glassmorphism card content */}
				<div className="absolute inset-0 p-6 flex flex-col justify-end">
					{/* Featured badge */}
					{project.featured && (
						<motion.div
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ delay: 0.1 }}
							className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs px-3 py-1 rounded-full font-medium"
						>
							⭐ Featured
						</motion.div>
					)}

					{/* Project info */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.05 }}
						className="space-y-3"
					>
						<h3 className="text-xl font-bold text-white">{project.title}</h3>
						<p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>
						
						{/* Technologies */}
						<div className="flex flex-wrap gap-2 mb-4">
							{project.technologies.map((tech) => (
								<span
									key={tech}
									className="text-xs bg-white/10 backdrop-blur-sm border border-white/20 text-white px-2 py-1 rounded-full"
								>
									{tech}
								</span>
							))}
						</div>

						{/* Action buttons */}
						<motion.div 
							className="flex gap-3"
							initial={{ opacity: 0 }}
							animate={{ opacity: isHovered ? 1 : 0 }}
							transition={{ duration: 0.2 }}
						>
							<Link 
								href={project.liveUrl} 
								className="flex-1 bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 text-white text-center py-2 px-4 rounded-lg transition-all duration-200 hover:scale-105"
							>
								Live Demo
							</Link>
							<Link 
								href={project.githubUrl} 
								className="flex-1 bg-black/40 backdrop-blur-sm border border-white/20 hover:bg-black/60 text-white text-center py-2 px-4 rounded-lg transition-all duration-200 hover:scale-105"
							>
								GitHub
							</Link>
						</motion.div>
					</motion.div>
				</div>

				{/* Simplified hover glow effect */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: isHovered ? 0.2 : 0 }}
					transition={{ duration: 0.2 }}
					className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 to-blue-500/20 pointer-events-none"
				/>
			</motion.div>
		</motion.div>
	);
}

export default function ProjectsSection() {
	return (
		<section id="projects" className="py-12 md:py-20 px-4 max-w-7xl mx-auto">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5 }}
				className="text-center mb-8 md:mb-12"
			>
				<h2 className="text-3xl md:text-4xl font-bold mb-4">
					Featured Projects
				</h2>
				<p className="text-gray-400 text-lg max-w-2xl mx-auto">
					Here are some of the projects I've built that showcase my skills and passion for creating exceptional digital experiences.
				</p>
			</motion.div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				{projects.map((project, index) => (
					<ProjectCard key={project.id} project={project} index={index} />
				))}
			</div>
		</section>
	);
}
