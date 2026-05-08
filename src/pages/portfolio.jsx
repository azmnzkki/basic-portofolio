import { Box } from '@mui/material';

import { ThemeToggle } from '../components/theme-toggle';
import HeroSection from '../sections/portfolio/hero-section';
import AboutSection from '../sections/portfolio/about-section';
import SkillsSection from '../sections/portfolio/skills-section';
import ContactSection from '../sections/portfolio/contact-section';
import JourneyTimeline from '../sections/portfolio/journey-timeline';
import PersonalProjects from '../sections/portfolio/personal-projects';
import ProfessionalWork from '../sections/portfolio/professional-work';

export default function PortfolioPage() {
  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
      <ThemeToggle />
      <HeroSection />
      <JourneyTimeline />
      <ProfessionalWork />
      <PersonalProjects />
      <SkillsSection />
      <AboutSection />
      <ContactSection />
    </Box>
  );
}
