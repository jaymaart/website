'use client';

import { motion } from 'framer-motion';

const socialLinks = [
	{ 
		name: 'GitHub', 
		url: 'https://github.com/jaymaart', 
		icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z',
		color: 'hover:text-gray-300',
		bgColor: 'hover:bg-gray-800'
	},
	{ 
		name: 'LinkedIn', 
		url: 'https://www.linkedin.com/in/jason-martin-9608191a1/', 
		icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z',
		color: 'hover:text-blue-400',
		bgColor: 'hover:bg-blue-900/20'
	},
	{ 
		name: 'Twitter', 
		url: 'https://x.com/jaymaartt', 
		icon: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
		color: 'hover:text-blue-400',
		bgColor: 'hover:bg-blue-900/20'
	}
];

export default function ContactSection() {
	return (
		<section id="contact" className="py-12 md:py-20 px-4 relative overflow-hidden">
			{/* Background floating elements */}
			<motion.div
				animate={{ 
					y: [0, -30, 0],
					rotate: [0, 180, 360]
				}}
				transition={{ 
					duration: 20, 
					repeat: Infinity, 
					ease: "linear" 
				}}
				className="absolute top-20 left-10 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl"
			/>
			<motion.div
				animate={{ 
					y: [0, 30, 0],
					rotate: [360, 180, 0]
				}}
				transition={{ 
					duration: 25, 
					repeat: Infinity, 
					ease: "linear",
					delay: 5
				}}
				className="absolute bottom-20 right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"
			/>

			<div className="max-w-4xl mx-auto text-center relative z-10">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="mb-8"
				>
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						Let&apos;s Connect
					</h2>
					<p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
						Have a project in mind? Let&apos;s create something amazing together. I&apos;m always excited to discuss new opportunities and collaborate on innovative projects.
					</p>
				</motion.div>

				{/* Contact info cards */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
				>
					{/* Email */}
					<motion.div
						whileHover={{ scale: 1.05, y: -5 }}
						className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
					>
						<div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
							<svg className="w-6 h-6 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
								<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
								<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
							</svg>
						</div>
						<h3 className="text-lg font-semibold mb-2">Email</h3>
						<p className="text-gray-400 text-sm mb-3">Get in touch directly</p>
						<a href="mailto:jason@jdev.services" className="text-purple-400 hover:text-purple-300 transition-colors">
							jason@jdev.services
						</a>
					</motion.div>

					{/* Location */}
					<motion.div
						whileHover={{ scale: 1.05, y: -5 }}
						className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
					>
						<div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
							<svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
								<path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
							</svg>
						</div>
						<h3 className="text-lg font-semibold mb-2">Location</h3>
						<p className="text-gray-400 text-sm mb-3">Based in</p>
						<span className="text-blue-400">Huntington, WV</span>
					</motion.div>

					{/* Availability */}
					<motion.div
						whileHover={{ scale: 1.05, y: -5 }}
						className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
					>
						<div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
							<svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
							</svg>
						</div>
						<h3 className="text-lg font-semibold mb-2">Status</h3>
						<p className="text-gray-400 text-sm mb-3">Currently</p>
						<span className="text-green-400">Available for new opportunities</span>
					</motion.div>
				</motion.div>

				{/* Action buttons */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.4 }}
					className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
				>
					<motion.a
						href="mailto:jason@jdev.services"
						whileHover={{ scale: 1.05, y: -2 }}
						whileTap={{ scale: 0.95 }}
						className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
					>
						<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
							<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
							<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
						</svg>
						<span className="font-medium">Get in Touch</span>
					</motion.a>
				</motion.div>

				{/* Social media links */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.6 }}
					className="space-y-4"
				>
					<p className="text-gray-400">Connect with me on social media</p>
					<div className="flex justify-center gap-6">
						{socialLinks.map((social, index) => (
							<motion.a
								key={social.name}
								href={social.url}
								target="_blank"
								rel="noopener noreferrer"
								initial={{ opacity: 0, scale: 0.8 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								transition={{ duration: 0.3, delay: index * 0.1 }}
								whileHover={{ scale: 1.2, rotate: 5 }}
								whileTap={{ scale: 0.9 }}
								className={`p-4 bg-white/5 backdrop-blur-sm border border-white/20 rounded-full transition-all duration-300 ${social.bgColor} ${social.color}`}
							>
								<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
									<path d={social.icon} />
								</svg>
							</motion.a>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
}
