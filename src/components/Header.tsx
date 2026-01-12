import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  activeSection: string;
  scrollToSection: (section: string) => void;
}

export default function Header({ activeSection, scrollToSection }: HeaderProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold gradient-text">Portfolio</h1>
          <div className="hidden md:flex gap-6">
            {['home', 'portfolio', 'about', 'skills', 'blog', 'contact'].map(section => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === section ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {section === 'home' ? 'Главная' : 
                 section === 'portfolio' ? 'Портфолио' :
                 section === 'about' ? 'Обо мне' :
                 section === 'skills' ? 'Навыки' :
                 section === 'blog' ? 'Блог' : 'Контакты'}
              </button>
            ))}
          </div>
          <Button size="sm" className="bg-gradient-to-r from-primary to-secondary">
            Связаться
          </Button>
        </div>
      </div>
    </nav>
  );
}
