import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-[hsl(var(--background))] relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-5 wood-grain"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.03) 3px, rgba(0,0,0,0.03) 6px)'
        }}
      />
      
      <div className="relative max-w-5xl mx-auto px-4 py-8 md:py-12">
        <div className="space-y-0">
          
          <section className="relative bg-gradient-to-br from-[#8B6F47] via-[#9B7F57] to-[#7A5F3F] rounded-2xl shadow-2xl p-8 md:p-16 text-center border-4 border-[#6B5437]/50 mb-4 overflow-hidden">
            <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(0,0,0,0.1) 0%, transparent 50%)'}} />
            <div className="absolute inset-0 opacity-30" style={{backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.05) 2px, rgba(0,0,0,0.05) 4px)'}} />
            <div className="absolute top-4 left-4 w-3 h-3 rounded-full bg-[hsl(var(--wood-dark))] shadow-inner" />
            <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-[hsl(var(--wood-dark))] shadow-inner" />
            <div className="absolute bottom-4 left-4 w-3 h-3 rounded-full bg-[hsl(var(--wood-dark))] shadow-inner" />
            <div className="absolute bottom-4 right-4 w-3 h-3 rounded-full bg-[hsl(var(--wood-dark))] shadow-inner" />
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-[hsl(var(--primary-foreground))] mb-4 text-shadow-strong uppercase tracking-wider">
              Ремесленная
            </h1>
            <p className="text-2xl md:text-3xl text-[hsl(var(--primary-foreground))]/90 mb-6 text-shadow-light">
              Детская мастерская
            </p>
            <p className="text-lg md:text-xl text-[hsl(var(--primary-foreground))]/85 max-w-2xl mx-auto mb-8 leading-relaxed">
              Дети делают руками и уносят готовое изделие
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-[hsl(var(--ochre))] hover:bg-[hsl(var(--ochre))]/90 text-[hsl(var(--wood-dark))] font-semibold px-8 py-6 text-lg rounded-lg shadow-lg hover-press wood-texture border-2 border-[hsl(var(--wood-dark))]/20"
              >
                Записаться на занятие
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="bg-[hsl(var(--wood-light))] hover:bg-[hsl(var(--wood-light))]/90 text-[hsl(var(--wood-dark))] font-semibold px-8 py-6 text-lg rounded-lg shadow-lg hover-press border-2 border-[hsl(var(--wood-dark))]/30"
              >
                Узнать расписание
              </Button>
            </div>
          </section>

          <section className="relative bg-gradient-to-br from-[#D4A574] via-[#C89F6A] to-[#B8946B] rounded-xl shadow-xl p-6 md:p-10 border-2 border-[#8B6F47]/30 mb-4 overflow-hidden">
            <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(139,111,71,0.08) 2px, rgba(139,111,71,0.08) 4px)'}} />
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--wood-dark))] mb-4 uppercase">
                  Пилят и собирают
                </h2>
                <ul className="space-y-3 text-[hsl(var(--foreground))]">
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">🪵</span>
                    <span className="text-lg">Работают с настоящим деревом и инструментами</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">🪚</span>
                    <span className="text-lg">Учатся пилить, строгать, собирать</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">🏠</span>
                    <span className="text-lg">Создают скворечники, домики, полочки</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">👦</span>
                    <span className="text-lg">Группы: 5-12 лет, 7-14 лет, смешанные</span>
                  </li>
                </ul>
              </div>
              <div className="order-1 md:order-2">
                <img 
                  src="https://cdn.poehali.dev/projects/8bf209e7-a4bf-44cf-a24a-b81de66bb646/files/cf22c6ce-6f4e-4ee6-9349-6e0f555da4d8.jpg"
                  alt="Ребёнок работает с деревом"
                  className="rounded-lg shadow-lg w-full h-64 md:h-80 object-cover border-4 border-[hsl(var(--wood-dark))]/20"
                />
              </div>
            </div>
          </section>

          <section className="relative bg-gradient-to-br from-[#7B9EA8] via-[#6A8E98] to-[#5B8090] rounded-xl shadow-xl p-6 md:p-10 border-2 border-[#8B6F47]/30 mb-4 overflow-hidden">
            <div className="absolute inset-0 opacity-25" style={{backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.08) 2px, rgba(255,255,255,0.08) 4px)'}} />
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img 
                  src="https://cdn.poehali.dev/projects/8bf209e7-a4bf-44cf-a24a-b81de66bb646/files/071acd89-a2ec-4495-84cb-1bce80c72158.jpg"
                  alt="Ребёнок шьёт на машинке"
                  className="rounded-lg shadow-lg w-full h-64 md:h-80 object-cover border-4 border-[hsl(var(--wood-dark))]/20"
                />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--primary-foreground))] mb-4 uppercase text-shadow-light">
                  Раскраивают и шьют
                </h2>
                <ul className="space-y-3 text-[hsl(var(--primary-foreground))]">
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">🧵</span>
                    <span className="text-lg">Осваивают швейную машинку</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">✂️</span>
                    <span className="text-lg">Кроят ткань, подбирают материалы</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">🧸</span>
                    <span className="text-lg">Шьют игрушки, сумочки, подушки</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">💡</span>
                    <span className="text-lg">Развивают мелкую моторику и терпение</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="relative bg-gradient-to-br from-[#8B9B7B] via-[#7A8A6B] to-[#6B7B5B] rounded-xl shadow-xl p-6 md:p-10 border-2 border-[#8B6F47]/30 mb-4 overflow-hidden">
            <div className="absolute inset-0 opacity-25" style={{backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.06) 2px, rgba(0,0,0,0.06) 4px)'}} />
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--primary-foreground))] mb-4 uppercase text-shadow-light">
                  Выжигают и раскрашивают
                </h2>
                <ul className="space-y-3 text-[hsl(var(--primary-foreground))]">
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">🔥</span>
                    <span className="text-lg">Учатся выжиганию по дереву</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">🎨</span>
                    <span className="text-lg">Раскрашивают изделия красками</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">🖌️</span>
                    <span className="text-lg">Создают уникальный декор</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">✨</span>
                    <span className="text-lg">Развивают художественный вкус</span>
                  </li>
                </ul>
              </div>
              <div className="order-1 md:order-2">
                <img 
                  src="https://cdn.poehali.dev/projects/8bf209e7-a4bf-44cf-a24a-b81de66bb646/files/9e6d3cd8-02cf-4d38-b7a1-539eab9adbad.jpg"
                  alt="Ребёнок выжигает и раскрашивает"
                  className="rounded-lg shadow-lg w-full h-64 md:h-80 object-cover border-4 border-[hsl(var(--wood-dark))]/20"
                />
              </div>
            </div>
          </section>

          <section className="relative bg-gradient-to-br from-[#C67B7B] via-[#D4A574] to-[#B86B6B] rounded-2xl shadow-2xl p-8 md:p-16 text-center border-4 border-[#8B6F47]/40 overflow-hidden">
            <div className="absolute inset-0 opacity-25" style={{backgroundImage: 'radial-gradient(circle at 30% 20%, rgba(255,255,255,0.15) 0%, transparent 40%), radial-gradient(circle at 70% 80%, rgba(0,0,0,0.1) 0%, transparent 40%)'}} />
            <div className="absolute inset-0 opacity-30" style={{backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.05) 2px, rgba(0,0,0,0.05) 4px)'}} />
            <div className="absolute top-6 left-6 w-4 h-4 rounded-full bg-[hsl(var(--wood-dark))] shadow-inner" />
            <div className="absolute top-6 right-6 w-4 h-4 rounded-full bg-[hsl(var(--wood-dark))] shadow-inner" />
            <div className="absolute bottom-6 left-6 w-4 h-4 rounded-full bg-[hsl(var(--wood-dark))] shadow-inner" />
            <div className="absolute bottom-6 right-6 w-4 h-4 rounded-full bg-[hsl(var(--wood-dark))] shadow-inner" />
            
            <h2 className="text-4xl md:text-5xl font-bold text-[hsl(var(--primary-foreground))] mb-6 uppercase text-shadow-strong">
              И уносят готовое изделие!
            </h2>
            
            <div className="mb-8">
              <img 
                src="https://cdn.poehali.dev/projects/8bf209e7-a4bf-44cf-a24a-b81de66bb646/files/11f0bb62-7a4e-46e0-bc42-37bca8e7b494.jpg"
                alt="Готовые изделия"
                className="rounded-lg shadow-2xl w-full max-w-2xl mx-auto h-56 md:h-72 object-cover border-4 border-[hsl(var(--wood-dark))]/30"
              />
            </div>

            <p className="text-xl md:text-2xl text-[hsl(var(--primary-foreground))]/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Каждое занятие — это законченный проект. Ребёнок приходит, мастерит и забирает своё творение домой!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-[hsl(var(--wood-dark))] hover:bg-[hsl(var(--wood-dark))]/90 text-[hsl(var(--primary-foreground))] font-semibold px-10 py-7 text-xl rounded-lg shadow-2xl hover-press border-2 border-[hsl(var(--primary-foreground))]/20"
              >
                Записаться сейчас
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="bg-[hsl(var(--primary-foreground))] hover:bg-[hsl(var(--primary-foreground))]/90 text-[hsl(var(--wood-dark))] font-semibold px-10 py-7 text-xl rounded-lg shadow-xl hover-press border-2 border-[hsl(var(--wood-dark))]/40"
              >
                Связаться с нами
              </Button>
            </div>
          </section>

        </div>
      </div>

      <footer className="relative mt-8 py-8 text-center text-[hsl(var(--muted-foreground))] bg-[hsl(var(--wood-dark))]/10 border-t-2 border-[hsl(var(--wood-dark))]/20">
        <p className="text-sm">© 2024 Ремесленная — детская мастерская настоящего ремесла</p>
      </footer>
    </div>
  );
};

export default Index;