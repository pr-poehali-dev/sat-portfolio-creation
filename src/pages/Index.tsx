import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

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

const skills = [
  { name: 'React', level: 95, icon: 'Layers' },
  { name: 'TypeScript', level: 90, icon: 'Code' },
  { name: 'Node.js', level: 85, icon: 'Server' },
  { name: 'UI/UX Design', level: 88, icon: 'Palette' },
  { name: 'PostgreSQL', level: 80, icon: 'Database' },
  { name: 'Docker', level: 75, icon: 'Box' }
];

const blogPosts = [
  {
    id: 1,
    title: 'Современные подходы к архитектуре фронтенда',
    excerpt: 'Разбираем best practices проектирования масштабируемых React приложений',
    date: '15 янв 2026',
    readTime: '8 мин'
  },
  {
    id: 2,
    title: 'Оптимизация производительности веб-приложений',
    excerpt: 'Практические советы по ускорению загрузки и работы сайтов',
    date: '8 янв 2026',
    readTime: '12 мин'
  },
  {
    id: 3,
    title: 'Тренды веб-дизайна 2026',
    excerpt: 'Что будет актуально в дизайне интерфейсов в этом году',
    date: '2 янв 2026',
    readTime: '6 мин'
  }
];

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  const allTechnologies = Array.from(
    new Set(projects.flatMap(p => p.technologies))
  ).sort();

  const filteredProjects = projects.filter(project => {
    const categoryMatch = selectedCategory === 'all' || project.category === selectedCategory;
    const techMatch = !selectedTech || project.technologies.includes(selectedTech);
    return categoryMatch && techMatch;
  });

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
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

      <section id="about" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-5xl font-bold mb-4 gradient-text">Обо мне</h2>
              <p className="text-xl text-muted-foreground">Немного о моем пути в разработке</p>
            </div>

            <Card className="glass p-8 md:p-12 animate-scale-in">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <Icon name="User" size={120} className="text-primary/40" />
                  </div>
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-4">Алекс Иванов</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Более 7 лет разрабатываю веб и мобильные приложения для стартапов и крупных компаний. 
                    Специализируюсь на создании интуитивных интерфейсов и масштабируемых архитектур.
                  </p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Моя цель — создавать продукты, которые не только красиво выглядят, 
                    но и решают реальные задачи пользователей. Постоянно изучаю новые технологии 
                    и делюсь опытом с сообществом.
                  </p>
                  <div className="flex gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold gradient-text">50+</div>
                      <div className="text-sm text-muted-foreground">Проектов</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold gradient-text">7</div>
                      <div className="text-sm text-muted-foreground">Лет опыта</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold gradient-text">30+</div>
                      <div className="text-sm text-muted-foreground">Клиентов</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="skills" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-bold mb-4 gradient-text">Навыки</h2>
            <p className="text-xl text-muted-foreground">Технологии и инструменты, которыми владею</p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <Card 
                key={skill.name} 
                className="glass p-6 hover:scale-105 transition-all animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <Icon name={skill.icon as any} size={24} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-semibold">{skill.name}</h3>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-bold mb-4 gradient-text">Блог</h2>
            <p className="text-xl text-muted-foreground">Последние статьи и заметки</p>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <Card 
                key={post.id} 
                className="glass group cursor-pointer hover:scale-105 transition-all animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="mb-4">
                    <Badge variant="outline" className="mb-2">
                      <Icon name="Calendar" size={12} className="mr-1" />
                      {post.date}
                    </Badge>
                    <Badge variant="outline" className="ml-2">
                      <Icon name="Clock" size={12} className="mr-1" />
                      {post.readTime}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">{post.excerpt}</p>
                  <Button variant="ghost" size="sm" className="group-hover:text-primary">
                    Читать далее
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-5xl font-bold mb-4 gradient-text">Контакты</h2>
              <p className="text-xl text-muted-foreground">Свяжитесь со мной для обсуждения проекта</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <Card className="glass p-8 animate-scale-in">
                <h3 className="text-2xl font-bold mb-6">Напишите мне</h3>
                <form className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Имя</label>
                    <Input placeholder="Ваше имя" className="bg-background/50" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input type="email" placeholder="your@email.com" className="bg-background/50" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Сообщение</label>
                    <Textarea placeholder="Расскажите о вашем проекте..." rows={5} className="bg-background/50" />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-primary to-secondary">
                    <Icon name="Send" size={18} className="mr-2" />
                    Отправить сообщение
                  </Button>
                </form>
              </Card>

              <div className="space-y-6 animate-scale-in" style={{ animationDelay: '0.2s' }}>
                <Card className="glass p-6 hover:scale-105 transition-all cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <Icon name="Mail" size={24} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <p className="text-muted-foreground text-sm">alex@example.com</p>
                    </div>
                  </div>
                </Card>

                <Card className="glass p-6 hover:scale-105 transition-all cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <Icon name="Phone" size={24} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Телефон</h4>
                      <p className="text-muted-foreground text-sm">+7 (999) 123-45-67</p>
                    </div>
                  </div>
                </Card>

                <Card className="glass p-6 hover:scale-105 transition-all cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <Icon name="MapPin" size={24} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Локация</h4>
                      <p className="text-muted-foreground text-sm">Москва, Россия</p>
                    </div>
                  </div>
                </Card>

                <Card className="glass p-6">
                  <h4 className="font-semibold mb-4">Социальные сети</h4>
                  <div className="flex gap-3">
                    <Button size="icon" variant="outline" className="hover:bg-primary hover:text-white">
                      <Icon name="Github" size={20} />
                    </Button>
                    <Button size="icon" variant="outline" className="hover:bg-primary hover:text-white">
                      <Icon name="Linkedin" size={20} />
                    </Button>
                    <Button size="icon" variant="outline" className="hover:bg-primary hover:text-white">
                      <Icon name="Twitter" size={20} />
                    </Button>
                    <Button size="icon" variant="outline" className="hover:bg-primary hover:text-white">
                      <Icon name="Instagram" size={20} />
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © 2026 Alex Ivanov. Все права защищены.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
