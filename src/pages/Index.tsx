import { useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import PortfolioSection from '@/components/PortfolioSection';
import Sections from '@/components/Sections';

type ProjectCategory = 'all' | 'web' | 'mobile' | 'design';

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header activeSection={activeSection} scrollToSection={scrollToSection} />
      <HeroSection scrollToSection={scrollToSection} />
      <PortfolioSection 
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedTech={selectedTech}
        setSelectedTech={setSelectedTech}
      />
      <Sections />
    </div>
  );
}
