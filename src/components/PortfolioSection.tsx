import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

type ProjectCategory = 'all' | 'web' | 'mobile' | 'design';

interface Project {
  id: number;
  title: string;
  description: string;
  category: ProjectCategory;
  technologies: string[];
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Современная платформа для онлайн-продаж с интеграцией платежных систем',
    category: 'web',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop'
  },
  {
    id: 2,
    title: 'Mobile Banking App',
    description: 'Безопасное банковское приложение с биометрической аутентификацией',
    category: 'mobile',
    technologies: ['React Native', 'TypeScript', 'Firebase'],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop'
  },
  {
    id: 3,
    title: 'Brand Identity System',
    description: 'Комплексная система фирменного стиля для технологического стартапа',
    category: 'design',
    technologies: ['Figma', 'Illustrator', 'Photoshop'],
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop'
  },
  {
    id: 4,
    title: 'AI Dashboard',
    description: 'Интерактивная панель для визуализации данных машинного обучения',
    category: 'web',
    technologies: ['Vue.js', 'Python', 'TensorFlow', 'D3.js'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop'
  },
  {
    id: 5,
    title: 'Fitness Tracker',
    description: 'Приложение для отслеживания тренировок и питания',
    category: 'mobile',
    technologies: ['Flutter', 'Dart', 'HealthKit'],
    image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&h=600&fit=crop'
  },
  {
    id: 6,
    title: 'Portfolio Website',
    description: 'Минималистичный сайт-портфолио для фотографа',
    category: 'design',
    technologies: ['Webflow', 'CSS', 'GSAP'],
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop'
  }
];

interface PortfolioSectionProps {
  selectedCategory: ProjectCategory;
  setSelectedCategory: (category: ProjectCategory) => void;
  selectedTech: string | null;
  setSelectedTech: (tech: string | null) => void;
}

export default function PortfolioSection({ 
  selectedCategory, 
  setSelectedCategory, 
  selectedTech, 
  setSelectedTech 
}: PortfolioSectionProps) {
  const allTechnologies = Array.from(
    new Set(projects.flatMap(p => p.technologies))
  ).sort();

  const filteredProjects = projects.filter(project => {
    const categoryMatch = selectedCategory === 'all' || project.category === selectedCategory;
    const techMatch = !selectedTech || project.technologies.includes(selectedTech);
    return categoryMatch && techMatch;
  });

  return (
    <section id="portfolio" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-bold mb-4 gradient-text">Портфолио</h2>
          <p className="text-xl text-muted-foreground">Избранные проекты и кейсы</p>
        </div>

        <div className="mb-12">
          <div className="flex flex-wrap gap-3 justify-center mb-6">
            {(['all', 'web', 'mobile', 'design'] as ProjectCategory[]).map(cat => (
              <Button
                key={cat}
                variant={selectedCategory === cat ? 'default' : 'outline'}
                onClick={() => { setSelectedCategory(cat); setSelectedTech(null); }}
                className={selectedCategory === cat ? 'bg-gradient-to-r from-primary to-secondary' : ''}
              >
                {cat === 'all' ? 'Все' : cat === 'web' ? 'Web' : cat === 'mobile' ? 'Mobile' : 'Design'}
              </Button>
            ))}
          </div>

          <div className="mb-6">
            <p className="text-sm text-muted-foreground mb-3 text-center">Фильтр по технологиям:</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {allTechnologies.map(tech => (
                <Badge
                  key={tech}
                  variant={selectedTech === tech ? 'default' : 'outline'}
                  className={`cursor-pointer transition-all ${
                    selectedTech === tech ? 'bg-primary text-primary-foreground' : 'hover:bg-primary/10'
                  }`}
                  onClick={() => setSelectedTech(selectedTech === tech ? null : tech)}
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id} 
              className="glass overflow-hidden group cursor-pointer hover:scale-105 transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
                <Badge className="absolute top-4 right-4 bg-primary/90">
                  {project.category}
                </Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map(tech => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <Icon name="Search" size={48} className="mx-auto mb-4 text-muted-foreground" />
            <p className="text-muted-foreground">Проекты с такими параметрами не найдены</p>
          </div>
        )}
      </div>
    </section>
  );
}
