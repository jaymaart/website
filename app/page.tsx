'use client';

import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ExperienceTimeline from './components/ExperienceTimeline';
import ContactSection from './components/ContactSection';
import InteractiveCursor from './components/InteractiveCursor';
import FloatingActionButton from './components/FloatingActionButton';

export default function Home() {
	return (
		<main className="min-h-screen bg-black text-white">
			<InteractiveCursor />
			<HeroSection />
			<ProjectsSection />
			<SkillsSection />
			<ExperienceTimeline />
			<ContactSection />
			<FloatingActionButton />
		</main>
	);
}
