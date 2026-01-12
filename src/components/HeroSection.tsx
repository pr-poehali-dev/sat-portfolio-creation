import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface HeroSectionProps {
  scrollToSection: (section: string) => void;
}

export default function HeroSection({ scrollToSection }: HeroSectionProps) {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 opacity-30" />
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="animate-fade-in">
          <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">
            <Icon name="Sparkles" size={14} className="mr-1" />
            Доступен для проектов
          </Badge>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text">
            Привет, я Алекс
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Fullstack разработчик и UI/UX дизайнер, создающий современные цифровые продукты
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" onClick={() => scrollToSection('portfolio')} className="bg-gradient-to-r from-primary to-secondary">
              <Icon name="Briefcase" size={20} className="mr-2" />
              Смотреть работы
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection('contact')}>
              <Icon name="Mail" size={20} className="mr-2" />
              Написать мне
            </Button>
          </div>
          <div className="flex gap-4 justify-center mt-8">
            <Button size="icon" variant="ghost" className="hover:text-primary">
              <Icon name="Github" size={20} />
            </Button>
            <Button size="icon" variant="ghost" className="hover:text-primary">
              <Icon name="Linkedin" size={20} />
            </Button>
            <Button size="icon" variant="ghost" className="hover:text-primary">
              <Icon name="Twitter" size={20} />
            </Button>
            <Button size="icon" variant="ghost" className="hover:text-primary">
              <Icon name="Instagram" size={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
