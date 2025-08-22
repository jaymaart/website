'use client';

import { motion } from 'framer-motion';
import ParticleBackground from './ParticleBackground';

export default function HeroSection() {
	return (
		<motion.section
			id="home"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.8 }}
			className="h-screen flex items-center justify-center relative overflow-hidden"
		>
			{/* Simplified background layers */}
			<div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-blue-900/20 to-indigo-900/30" />
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0.6),rgba(0,0,0,0.95))]" />
			</div>
			
			{/* Single optimized floating element */}
			<motion.div
				animate={{ 
					y: [0, -15, 0],
				}}
				transition={{ 
					duration: 8, 
					repeat: Infinity, 
					ease: "easeInOut" 
				}}
				className="absolute top-20 left-10 w-20 h-20 bg-purple-500/10 rounded-full blur-2xl"
			/>

			{/* Particle background */}
			<ParticleBackground />

			<div className="relative z-10 text-center">
				<motion.div
					initial={{ scale: 0.8, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className="mb-6"
				>
					<div className="inline-block p-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-4">
						<span className="text-sm text-purple-300">🚀 Available for new opportunities</span>
					</div>
				</motion.div>

				<motion.h1
					initial={{ y: 30, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.6, delay: 0.3 }}
					className="text-4xl md:text-7xl font-bold mb-6"
				>
					<span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
						Jason Martin
					</span>
				</motion.h1>
				
				<motion.div
					initial={{ y: 30, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.6, delay: 0.4 }}
					className="mb-8"
				>
					<p className="text-lg md:text-xl text-gray-300 mb-2">
						Full Stack Developer
					</p>
					<p className="text-md md:text-lg text-gray-400">
						Crafting digital experiences with modern technologies
					</p>
				</motion.div>

				<motion.div
					initial={{ y: 30, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.6, delay: 0.5 }}
					className="flex flex-col sm:flex-row gap-4 justify-center items-center"
				>
					<motion.button
						whileHover={{ scale: 1.02 }}
						whileTap={{ scale: 0.98 }}
						className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
					>
						View My Work
					</motion.button>
					<motion.button
						whileHover={{ scale: 1.02 }}
						whileTap={{ scale: 0.98 }}
						className="px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white rounded-full font-medium transition-all duration-200"
					>
						Download Resume
					</motion.button>
				</motion.div>
			</div>

			{/* Simplified scroll indicator */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.6, delay: 0.7 }}
				className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
			>
				<motion.div
					animate={{ y: [0, 8, 0] }}
					transition={{ duration: 2, repeat: Infinity }}
					className="flex flex-col items-center gap-2 text-gray-400"
				>
					<span className="text-sm">Scroll to explore</span>
					<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
					</svg>
				</motion.div>
			</motion.div>
		</motion.section>
	);
}
