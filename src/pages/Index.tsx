import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const categories = ['Все товары', 'Фаллоимитаторы', 'Вибраторы', 'Премиум', 'Реалистичные', 'Аксессуары'];

const products = [
  {
    id: 1,
    name: 'Фаллоимитатор Classic Pink',
    category: 'Фаллоимитаторы',
    price: 3500,
    image: 'https://cdn.poehali.dev/projects/da268cde-8e42-4b62-87e4-82b702c2f03d/files/b398d3a2-6f27-47c8-95be-95b18f8c3d09.jpg',
    badge: 'HIT',
    description: 'Классический фаллоимитатор из медицинского силикона',
  },
  {
    id: 2,
    name: 'Вибратор Purple Dream',
    category: 'Вибраторы',
    price: 4800,
    image: 'https://cdn.poehali.dev/projects/da268cde-8e42-4b62-87e4-82b702c2f03d/files/62d68411-4dc7-44db-9639-dc09b4d9912f.jpg',
    badge: 'NEW',
    description: '10 режимов вибрации, водонепроницаемый',
  },
  {
    id: 3,
    name: 'Реалистик Premium Beige',
    category: 'Реалистичные',
    price: 6200,
    image: 'https://cdn.poehali.dev/projects/da268cde-8e42-4b62-87e4-82b702c2f03d/files/53a2835f-6e23-479c-aafd-eff6b1dd5417.jpg',
    description: 'Ультра-реалистичная текстура, гипоаллергенный материал',
  },
  {
    id: 4,
    name: 'Черный Бриллиант Luxury',
    category: 'Премиум',
    price: 8900,
    image: 'https://cdn.poehali.dev/projects/da268cde-8e42-4b62-87e4-82b702c2f03d/files/ab8c77c8-4d38-40a0-9fc2-82a67c2a2922.jpg',
    badge: 'PREMIUM',
    description: 'Люксовая коллекция, бархатистое покрытие',
  },
  {
    id: 5,
    name: 'Дилдо Velvet Touch',
    category: 'Фаллоимитаторы',
    price: 4100,
    image: 'https://cdn.poehali.dev/projects/da268cde-8e42-4b62-87e4-82b702c2f03d/files/62d68411-4dc7-44db-9639-dc09b4d9912f.jpg',
    description: 'Мягкий силикон, присоска для крепления',
  },
  {
    id: 6,
    name: 'Вибратор Double Power',
    category: 'Вибраторы',
    price: 7500,
    image: 'https://cdn.poehali.dev/projects/da268cde-8e42-4b62-87e4-82b702c2f03d/files/ab8c77c8-4d38-40a0-9fc2-82a67c2a2922.jpg',
    badge: 'HOT',
    description: 'Двойная стимуляция, бесшумный мотор',
  },
  {
    id: 7,
    name: 'Реалистик King Size',
    category: 'Реалистичные',
    price: 5600,
    image: 'https://cdn.poehali.dev/projects/da268cde-8e42-4b62-87e4-82b702c2f03d/files/b398d3a2-6f27-47c8-95be-95b18f8c3d09.jpg',
    badge: 'NEW',
    description: 'Увеличенный размер, реалистичная текстура',
  },
  {
    id: 8,
    name: 'Смазка Premium 100мл',
    category: 'Аксессуары',
    price: 890,
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400',
    description: 'На водной основе, гипоаллергенная',
  },
  {
    id: 9,
    name: 'Вибратор Ocean Wave',
    category: 'Вибраторы',
    price: 5200,
    image: 'https://cdn.poehali.dev/projects/da268cde-8e42-4b62-87e4-82b702c2f03d/files/f3b6db74-5e98-4ebf-9795-ad57cbf09432.jpg',
    badge: 'NEW',
    description: 'Изогнутая форма для точечной стимуляции G-точки',
  },
  {
    id: 10,
    name: 'Вибратор Rose Gold Elite',
    category: 'Премиум',
    price: 9500,
    image: 'https://cdn.poehali.dev/projects/da268cde-8e42-4b62-87e4-82b702c2f03d/files/18bdd2c7-6c1e-4ea1-b202-278869fa354b.jpg',
    badge: 'PREMIUM',
    description: 'Элитная серия с золотым напылением, 12 режимов',
  },
  {
    id: 11,
    name: 'Фаллоимитатор Titanium',
    category: 'Фаллоимитаторы',
    price: 4300,
    image: 'https://cdn.poehali.dev/projects/da268cde-8e42-4b62-87e4-82b702c2f03d/files/ab8c77c8-4d38-40a0-9fc2-82a67c2a2922.jpg',
    description: 'Усиленный силикон, анатомическая форма',
  },
  {
    id: 12,
    name: 'Реалистик Natural Skin',
    category: 'Реалистичные',
    price: 5900,
    image: 'https://cdn.poehali.dev/projects/da268cde-8e42-4b62-87e4-82b702c2f03d/files/53a2835f-6e23-479c-aafd-eff6b1dd5417.jpg',
    badge: 'HIT',
    description: 'Имитация натуральной кожи, мультискоростной',
  },
  {
    id: 13,
    name: 'Дилдо Mini Pleasure',
    category: 'Фаллоимитаторы',
    price: 2800,
    image: 'https://cdn.poehali.dev/projects/da268cde-8e42-4b62-87e4-82b702c2f03d/files/62d68411-4dc7-44db-9639-dc09b4d9912f.jpg',
    description: 'Компактный размер, идеален для начинающих',
  },
  {
    id: 14,
    name: 'Вибратор Pulse Wave',
    category: 'Вибраторы',
    price: 6800,
    image: 'https://cdn.poehali.dev/projects/da268cde-8e42-4b62-87e4-82b702c2f03d/files/f3b6db74-5e98-4ebf-9795-ad57cbf09432.jpg',
    badge: 'HOT',
    description: 'Волновая пульсация, USB-зарядка',
  },
  {
    id: 15,
    name: 'Реалистик XL Power',
    category: 'Реалистичные',
    price: 7200,
    image: 'https://cdn.poehali.dev/projects/da268cde-8e42-4b62-87e4-82b702c2f03d/files/b398d3a2-6f27-47c8-95be-95b18f8c3d09.jpg',
    description: 'Максимальный размер, повышенная жесткость',
  },
  {
    id: 16,
    name: 'Набор Игрушек Starter Kit',
    category: 'Аксессуары',
    price: 3200,
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400',
    badge: 'NEW',
    description: 'Набор для начинающих: вибратор, смазка, очиститель',
  },
  {
    id: 17,
    name: 'Фаллоимитатор Flex Pro',
    category: 'Фаллоимитаторы',
    price: 3900,
    image: 'https://cdn.poehali.dev/projects/da268cde-8e42-4b62-87e4-82b702c2f03d/files/53a2835f-6e23-479c-aafd-eff6b1dd5417.jpg',
    description: 'Гибкая структура, регулируемый угол',
  },
  {
    id: 18,
    name: 'Вибратор Diamond Lux',
    category: 'Премиум',
    price: 11900,
    image: 'https://cdn.poehali.dev/projects/da268cde-8e42-4b62-87e4-82b702c2f03d/files/18bdd2c7-6c1e-4ea1-b202-278869fa354b.jpg',
    badge: 'PREMIUM',
    description: 'Инкрустация кристаллами Swarovski, люкс-коллекция',
  },
  {
    id: 19,
    name: 'Очиститель для игрушек',
    category: 'Аксессуары',
    price: 650,
    image: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400',
    description: 'Антибактериальный спрей 100мл',
  },
  {
    id: 20,
    name: 'Реалистик Duo Flex',
    category: 'Реалистичные',
    price: 6700,
    image: 'https://cdn.poehali.dev/projects/da268cde-8e42-4b62-87e4-82b702c2f03d/files/b398d3a2-6f27-47c8-95be-95b18f8c3d09.jpg',
    badge: 'HOT',
    description: 'Двойная плотность, сверхмягкий внешний слой',
  },
  {
    id: 21,
    name: 'Вибратор Turbo Charge',
    category: 'Вибраторы',
    price: 5500,
    image: 'https://cdn.poehali.dev/projects/da268cde-8e42-4b62-87e4-82b702c2f03d/files/f3b6db74-5e98-4ebf-9795-ad57cbf09432.jpg',
    description: 'Турбо-режим, влагозащита IPX7',
  },
  {
    id: 22,
    name: 'Смазка Silky Premium 250мл',
    category: 'Аксессуары',
    price: 1490,
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400',
    badge: 'HIT',
    description: 'Увеличенный объем, шелковая текстура',
  },
  {
    id: 23,
    name: 'Фаллоимитатор Rainbow',
    category: 'Фаллоимитаторы',
    price: 4600,
    image: 'https://cdn.poehali.dev/projects/da268cde-8e42-4b62-87e4-82b702c2f03d/files/62d68411-4dc7-44db-9639-dc09b4d9912f.jpg',
    badge: 'NEW',
    description: 'Радужный градиент, светится в темноте',
  },
  {
    id: 24,
    name: 'Вибратор Infinity Touch',
    category: 'Премиум',
    price: 10200,
    image: 'https://cdn.poehali.dev/projects/da268cde-8e42-4b62-87e4-82b702c2f03d/files/18bdd2c7-6c1e-4ea1-b202-278869fa354b.jpg',
    badge: 'PREMIUM',
    description: 'Управление с телефона, бесконечные настройки',
  },
];

const faqItems = [
  {
    question: 'Как оформить заказ?',
    answer: 'Добавьте товары в корзину, заполните контактные данные и выберите способ доставки. Мы гарантируем конфиденциальность и анонимную упаковку.',
  },
  {
    question: 'Какие способы оплаты доступны?',
    answer: 'Принимаем банковские карты, электронные кошельки и наложенный платёж. Все платежи проходят через защищённые каналы.',
  },
  {
    question: 'Условия доставки',
    answer: 'Доставка по России от 1-3 дней. Курьерская доставка в крупных городах, почтой по всей стране. Упаковка не имеет опознавательных знаков.',
  },
  {
    question: 'Как работает программа лояльности?',
    answer: 'За каждую покупку начисляем бонусы - 5% от суммы заказа. Бонусами можно оплачивать до 50% следующих покупок.',
  },
  {
    question: 'Гарантия и возврат',
    answer: 'Гарантия на все товары - 1 год. Возврат возможен в течение 14 дней, если товар не использовался и сохранена целостность упаковки.',
  },
];

export default function Index() {
  const [activeCategory, setActiveCategory] = useState('Все товары');
  const [cart, setCart] = useState<Array<{ id: number; name: string; price: number; quantity: number }>>([]);
  const [email, setEmail] = useState('');

  const filteredProducts =
    activeCategory === 'Все товары'
      ? products
      : products.filter((p) => p.category === activeCategory);

  const addToCart = (product: typeof products[0]) => {
    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      setCart(cart.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)));
    } else {
      setCart([...cart, { id: product.id, name: product.name, price: product.price, quantity: 1 }]);
    }
  };

  const removeFromCart = (id: number) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
    } else {
      setCart(cart.map((item) => (item.id === id ? { ...item, quantity } : item)));
    }
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const cartItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert('Спасибо за подписку! Вы будете получать уведомления о новинках.');
      setEmail('');
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary via-accent to-secondary flex items-center justify-center">
              <span className="text-2xl">💜</span>
            </div>
            <h1 className="text-2xl font-heading font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Pleasure Shop
            </h1>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <a href="#catalog" className="text-foreground/80 hover:text-foreground transition-colors">
              Каталог
            </a>
            <a href="#faq" className="text-foreground/80 hover:text-foreground transition-colors">
              FAQ
            </a>
            <a href="#contact" className="text-foreground/80 hover:text-foreground transition-colors">
              Контакты
            </a>
          </nav>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="relative">
                <Icon name="ShoppingCart" size={20} />
                {cartItemsCount > 0 && (
                  <span className="absolute -top-2 -right-2 w-5 h-5 bg-accent rounded-full text-xs flex items-center justify-center">
                    {cartItemsCount}
                  </span>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent className="w-full sm:max-w-lg animate-slide-in-right">
              <SheetHeader>
                <SheetTitle className="font-heading">Корзина</SheetTitle>
              </SheetHeader>
              <div className="mt-8 space-y-4">
                {cart.length === 0 ? (
                  <p className="text-center text-muted-foreground py-8">Корзина пуста</p>
                ) : (
                  <>
                    {cart.map((item) => (
                      <div key={item.id} className="flex items-center gap-4 p-4 rounded-lg bg-card">
                        <div className="flex-1">
                          <h3 className="font-semibold">{item.name}</h3>
                          <p className="text-sm text-muted-foreground">{item.price.toLocaleString()} ₽</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button
                            size="icon"
                            variant="outline"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Icon name="Minus" size={16} />
                          </Button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <Button
                            size="icon"
                            variant="outline"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Icon name="Plus" size={16} />
                          </Button>
                        </div>
                        <Button
                          size="icon"
                          variant="ghost"
                          className="h-8 w-8"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <Icon name="X" size={16} />
                        </Button>
                      </div>
                    ))}
                    <div className="border-t border-border pt-4 mt-4">
                      <div className="flex justify-between text-lg font-semibold mb-4">
                        <span>Итого:</span>
                        <span>{cartTotal.toLocaleString()} ₽</span>
                      </div>
                      <Button className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90">
                        Оформить заказ
                      </Button>
                    </div>
                  </>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <section className="relative overflow-hidden py-20 md:py-32">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'url(https://cdn.poehali.dev/projects/da268cde-8e42-4b62-87e4-82b702c2f03d/files/d8d53cb8-07a9-487b-bbbc-392dc080d968.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="container mx-auto px-4 relative z-10 text-center animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-heading font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Pleasure Shop
          </h2>
          <p className="text-xl md:text-2xl text-foreground/90 mb-8 max-w-2xl mx-auto">
            Премиальные товары для взрослых. Конфиденциальная доставка и программа лояльности
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-lg px-8">
              <Icon name="ShoppingBag" size={20} className="mr-2" />
              Смотреть каталог
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              <Icon name="Gift" size={20} className="mr-2" />
              Программа лояльности
            </Button>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold mb-8 text-center">Каталог</h2>

          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={activeCategory === cat ? 'default' : 'outline'}
                onClick={() => setActiveCategory(cat)}
                className={
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-primary to-accent'
                    : 'hover:border-primary transition-all'
                }
              >
                {cat}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <Card
                key={product.id}
                className="group overflow-hidden hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 animate-scale-in"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {product.badge && (
                      <Badge className="absolute top-4 right-4 bg-accent text-white">
                        {product.badge}
                      </Badge>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{product.category}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary">{product.price.toLocaleString()} ₽</span>
                      <Button
                        onClick={() => addToCart(product)}
                        className="bg-gradient-to-r from-primary to-accent hover:opacity-90"
                      >
                        <Icon name="ShoppingCart" size={18} className="mr-2" />
                        В корзину
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-16 bg-card/30">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl font-heading font-bold mb-8 text-center">Частые вопросы</h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 bg-card"
              >
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contact" className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-heading font-bold mb-4">Подписка на новинки</h2>
            <p className="text-muted-foreground mb-6">
              Узнавайте первыми о поступлениях в избранных категориях
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Ваш email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1"
                required
              />
              <Button type="submit" className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
                <Icon name="Mail" size={18} className="mr-2" />
                Подписаться
              </Button>
            </form>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-6">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold mb-2">100% Конфиденциально</h3>
              <p className="text-sm text-muted-foreground">Анонимная упаковка и доставка</p>
            </div>
            <div className="p-6">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Gift" size={24} className="text-accent" />
              </div>
              <h3 className="font-semibold mb-2">Бонусная программа</h3>
              <p className="text-sm text-muted-foreground">5% кэшбэк с каждой покупки</p>
            </div>
            <div className="p-6">
              <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Truck" size={24} className="text-secondary" />
              </div>
              <h3 className="font-semibold mb-2">Быстрая доставка</h3>
              <p className="text-sm text-muted-foreground">От 1-3 дней по всей России</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2024 Pleasure Shop. Все права защищены.</p>
          <p className="text-sm mt-2">Продажа товаров лицам старше 18 лет</p>
        </div>
      </footer>
    </div>
  );
}