import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

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

export default function Sections() {
  return (
    <>
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
    </>
  );
}
