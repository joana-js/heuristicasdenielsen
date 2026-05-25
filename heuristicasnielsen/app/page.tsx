"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Palette, 
  Type, 
  Search, 
  Frown, 
  Smile, 
  Menu, 
  X,
  Info,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

interface Heuristic {
  id: number;
  title: string;
  description: string;
}

const heuristics: Heuristic[] = [
  { id: 1, title: "Visibilidade do status do sistema", description: "O sistema deve sempre manter os usuários informados sobre o que está acontecendo, por meio de feedback apropriado em tempo razoável." },
  { id: 2, title: "Correspondência entre o sistema e o mundo real", description: "O sistema deve falar a língua do usuário, com palavras e conceitos familiares ao usuário, em vez de termos orientados ao sistema." },
  { id: 3, title: "Controle e liberdade do usuário", description: "Usuários muitas vezes escolhem funções do sistema por engano e precisarão de uma 'saída de emergência' claramente marcada para sair do estado indesejado." },
  { id: 4, title: "Consistência e padrões", description: "Os usuários não devem ter que se perguntar se diferentes palavras, situações ou ações significam a mesma coisa." },
  { id: 5, title: "Prevenção de erros", description: "Melhor do que boas mensagens de erro é um design cuidadoso que evita que um problema ocorra em primeiro lugar." },
  { id: 6, title: "Reconhecimento em vez de recordação", description: "Minimize a carga de memória do usuário tornando objetos, ações e opções visíveis." },
  { id: 7, title: "Flexibilidade e eficiência de uso", description: "Atalhos — invisíveis para o usuário novato — podem muitas vezes acelerar a interação para o usuário especialista." },
  { id: 8, title: "Design estético e minimalista", description: "Os diálogos não devem conter informações irrelevantes ou raramente necessárias." },
  { id: 9, title: "Ajude os usuários a reconhecer, diagnosticar e recuperar de erros", description: "Mensagens de erro devem ser expressas em linguagem clara, indicar precisamente o problema e sugerir construtivamente uma solução." },
  { id: 10, title: "Ajuda e documentação", description: "Mesmo que o sistema possa ser usado sem documentação, pode ser necessário fornecer ajuda e documentação fácil de pesquisar." },
];

const colors = [
  { hex: "#EF4444", name: "Vermelho", effect: "Urgência, paixão, erro. Ótimo para CTAs de exclusão ou alertas." },
  { hex: "#3B82F6", name: "Azul", effect: "Confiança, calma, profissionalismo. Padrão para bancos e tecnologia." },
  { hex: "#10B981", name: "Verde", effect: "Sucesso, natureza, crescimento. Usado para confirmações e saúde." },
  { hex: "#F59E0B", name: "Amarelo", effect: "Atenção, otimismo, cautela. Ideal para avisos preventivos." },
];

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen selection:bg-brand-accent selection:text-brand-paper">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-brand-paper/80 backdrop-blur-md border-b border-brand-ink/10 h-16 flex items-center">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-xl font-serif font-bold tracking-tight">
            Trabalho <span className="italic text-brand-accent">N2</span>
          </div>
          
          <div className="hidden md:flex gap-8 text-[11px] font-bold uppercase tracking-[0.2em]">
            <button onClick={() => scrollTo('teoria')} className="hover:text-brand-accent transition-colors cursor-pointer">A Base Teórica</button>
            <button onClick={() => scrollTo('estudo-ruim')} className="hover:text-brand-accent transition-colors cursor-pointer">Site Ruim</button>
            <button onClick={() => scrollTo('estudo-bom')} className="hover:text-brand-accent transition-colors cursor-pointer">Site Bom</button>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-brand-paper pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-8 text-2xl font-serif">
              <button onClick={() => scrollTo('teoria')}>A Base Teórica</button>
              <button onClick={() => scrollTo('estudo-ruim')}>Site Ruim</button>
              <button onClick={() => scrollTo('estudo-bom')}>Site Bom</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <header className="pt-32 pb-20 md:pt-48 md:pb-32 px-6">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block py-1 px-3 border border-brand-ink/20 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
              Dossiê Educativo
            </div>
            <p className="text-lg md:text-xl text-brand-ink/60 max-w-2xl leading-relaxed font-light">
              Este é um dossiê educativo focado em explicar as heurísticas de Nielsen e sua aplicação prática em design de interfaces. Através de uma análise comparativa, apresentaremos os princípios fundamentais de usabilidade e como eles impactam a experiência do usuário, com exemplos reais de sites bem e mal projetados.
            </p>
          </motion.div>
        </div>
      </header>

      <main>
        {/* Base Teórica */}
        <section id="teoria" className="py-24 bg-white/40 ring-1 ring-brand-ink/5 overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="mb-20">
              <h2 className="text-4xl md:text-5xl font-serif mb-4 italic"> A Base Teórica</h2>
              <div className="h-px w-24 bg-brand-accent"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
              {/* Psicologia das Cores */}
              <div>
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 mb-8"
                >
                  <div className="p-2 bg-brand-accent/10 rounded-lg"><Palette size={20} className="text-brand-accent" /></div>
                  <h3 className="text-2xl font-serif">Psicologia das Cores</h3>
                </motion.div>
                <p className="text-brand-ink/70 mb-8 leading-relaxed">
                  Cores não são apenas decoração ou detalhes colocados de qualquer jeito na página; elas são gatilhos cognitivos. Elas afetam a percepção do usuário sobre o tempo, a segurança e a hierarquia de um site.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {colors.map((color) => (
                    <div key={color.name} className="p-6 rounded-2xl bg-brand-paper shadow-sm border border-brand-ink/5">
                      <div className="w-8 h-8 rounded-full mb-4" style={{ backgroundColor: color.hex }}></div>
                      <h4 className="font-bold text-sm uppercase tracking-tighter mb-2">{color.name}</h4>
                      <p className="text-xs text-brand-ink/60 leading-normal">{color.effect}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tipografia */}
              <div>
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 mb-8"
                >
                  <div className="p-2 bg-brand-accent/10 rounded-lg"><Type size={20} className="text-brand-accent" /></div>
                  <h3 className="text-2xl font-serif">A Importância da Tipografia</h3>
                </motion.div>
                <p className="text-brand-ink/70 mb-10 leading-relaxed">
                  A tipografia é a voz da sua interface. Legibilidade é o básico, mas a escolha da fonte modifica a percepção e a experiência do usuário.
                </p>
                
                <div className="space-y-8">
                  <div className="group">
                    <p className="text-[10px] uppercase font-bold tracking-widest text-brand-accent mb-4">Com Serifa (Editorial & Clássico)</p>
                    <p className="font-serif text-4xl mb-2">Elegância e Autoridade</p>
                    <p className="text-sm text-brand-ink/60 italic">Ideal para longos blocos de texto impresso ou marcas de luxo.</p>
                  </div>
                  <div className="h-px w-full bg-brand-ink/5"></div>
                  <div className="group">
                    <p className="text-[10px] uppercase font-bold tracking-widest text-brand-accent mb-4">Sem Serifa (Moderno & Digital)</p>
                    <p className="font-sans font-bold text-4xl mb-2">Clareza e Eficiência</p>
                    <p className="text-sm text-brand-ink/60">Padrão para interfaces digitais devido à legibilidade em telas.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Heurísticas de Nielsen */}
            <div className="mt-32">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-brand-accent/10 rounded-lg"><Search size={20} className="text-brand-accent" /></div>
                    <h3 className="text-2xl font-serif">10 Heurísticas de Nielsen</h3>
                  </div>
                  <p className="text-brand-ink/70 max-w-xl">
                    Os princípios fundamentais de usabilidade para o design de interface, resumidos pela nossa equipe.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {heuristics.map((h) => (
                  <motion.div 
                    key={h.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    className="p-8 rounded-3xl bg-brand-paper border border-brand-ink/5 hover:border-brand-accent/20 transition-all group"
                  >
                    <div className="font-mono text-[10px] text-brand-accent mb-4 opacity-50 group-hover:opacity-100 transition-opacity">#{h.id.toString().padStart(2, '0')}</div>
                    <h4 className="text-lg font-serif mb-3 leading-tight font-medium underline decoration-brand-accent/20 underline-offset-4">{h.title}</h4>
                    <p className="text-sm text-brand-ink/60 leading-relaxed font-light">{h.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Estudo de Caso */}
        <section id="estudo-ruim" className="py-32 bg-brand-ink text-brand-paper overflow-hidden">
          <div className="container mx-auto px-6 text-center lg:text-left">
            <div className="flex flex-col lg:flex-row items-center lg:items-baseline gap-6 mb-20">
              <h2 className="text-6xl md:text-8xl font-serif italic text-brand-paper/90">Site Ruim</h2>
              <div className="text-[10px] uppercase tracking-[0.4em] text-red-400 font-bold">A experiência frustrante</div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div className="space-y-8">
                {/* Imagem */}
                <div className="aspect-video bg-red-400/10 rounded-3xl overflow-hidden ring-1 ring-red-400/20 group relative shadow-inner shadow-red-400/5">
                  <img 
                    src="/7zip.png" 
                    alt="Screenshot Site Ruim" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-red-400/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6 pointer-events-none">
                    <span className="bg-brand-ink text-brand-paper px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest backdrop-blur-md border border-red-400/20">
                       Exemplo: https://www.7-zip.org/
                    </span>
                  </div>
                </div>

                <div className="p-10 bg-white/[0.02] backdrop-blur-sm rounded-3xl border border-white/5">
                  <h4 className="flex items-center gap-2 text-red-400 font-bold uppercase text-[10px] tracking-[0.2em] mb-8">
                    <AlertCircle size={14} /> Auditoria de Heurísticas
                  </h4>
                  <ul className="space-y-8">
                    <li className="flex gap-6">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2.5 flex-shrink-0 animate-pulse"></div>
                      <div>
                        <p className="font-bold text-sm tracking-tight mb-2">Desorganização</p>
                        <p className="text-sm opacity-60 leading-relaxed font-light">Design extremamente bagunçado, onde nada chama a atenção de forma clara e intuitiva.</p>
                      </div>
                    </li>
                    <li className="flex gap-6">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2.5 flex-shrink-0 animate-pulse"></div>
                      <div>
                        <p className="font-bold text-sm tracking-tight mb-2">Falta de confiabilidade</p>
                        <p className="text-sm opacity-60 leading-relaxed font-light">Site com aparência nada confiável, com elementos desnecessários que distraem o usuário.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col">
                <div className="mb-10 text-red-400 opacity-30">
                  <Frown size={120} strokeWidth={0.5} />
                </div>
                <blockquote className="text-4xl md:text-5xl font-serif italic text-brand-paper/80 mb-10 leading-[1.1] tracking-tight">
                  "Sentimos que o site está extremamente desatualizado e não transmite confiança."
                </blockquote>
                <div className="flex items-center gap-6">
                  <div className="h-px flex-1 bg-white/20"></div>
                  <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/30 whitespace-nowrap">Análise da Equipe</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="estudo-bom" className="py-32 border-t border-brand-ink/10 relative overflow-hidden bg-white/20">
          <div className="container mx-auto px-6 text-center lg:text-left">
            <div className="flex flex-col lg:flex-row items-center lg:items-baseline gap-6 mb-20">
              <h2 className="text-6xl md:text-8xl font-serif italic tracking-tighter">Site Bom</h2>
              <div className="text-[10px] uppercase tracking-[0.4em] text-brand-accent font-bold">A Experiência Fluida</div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div className="flex flex-col order-2 lg:order-1">
                <div className="mb-10 text-brand-accent opacity-20">
                  <Smile size={120} strokeWidth={0.5} />
                </div>
                <blockquote className="text-4xl md:text-5xl font-serif italic text-brand-ink/80 mb-10 leading-[1.1] tracking-tight">
                  "O site é extremamente fluido, fácil de navegar e transmite uma sensação de segurança e profissionalismo."
                </blockquote>
                <div className="flex items-center gap-6">
                  <div className="h-px flex-1 bg-brand-ink/10"></div>
                  <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-ink/30 whitespace-nowrap">Análise da Equipe</p>
                </div>
              </div>

              <div className="space-y-8 order-1 lg:order-2">
                {/* Imagem Site Bom */}
                <div className="aspect-video bg-brand-accent/5 rounded-3xl overflow-hidden ring-1 ring-brand-ink/5 group relative shadow-2xl shadow-brand-accent/5">
                  <img 
                    src="/mercadolivre.png" 
                    alt="Screenshot Site Bom" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-brand-accent/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6 pointer-events-none">
                    <span className="bg-brand-paper text-brand-ink px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg">
                       Exemplo: https://www.mercadolivre.com.br/
                    </span>
                  </div>
                </div>

                <div className="p-10 backdrop-blur-md rounded-3xl border border-brand-ink/10 shadow-xl shadow-brand-ink/[0.02]">
                  <h4 className="flex items-center gap-2 text-brand-accent font-bold uppercase text-[10px] tracking-[0.2em] mb-8">
                    <CheckCircle size={14} /> Heurísticas Bem Aplicadas
                  </h4>
                  <ul className="space-y-8">
                    <li className="flex gap-6">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2.5 flex-shrink-0"></div>
                      <div>
                        <p className="font-bold text-sm tracking-tight mb-2 italic serif">Design Estético e Minimalista:</p>
                        <p className="text-sm text-brand-ink/60 leading-relaxed font-light">Uso generoso de espaços em branco e foco absoluto na tarefa central do usuário, com identidade visual marcada.</p>
                      </div>
                    </li>
                    <li className="flex gap-6">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2.5 flex-shrink-0"></div>
                      <div>
                        <p className="font-bold text-sm tracking-tight mb-2 italic serif">Consistência e Padrões:</p>
                        <p className="text-sm text-brand-ink/60 leading-relaxed font-light">Utiliza ícones universais e fluxos de pagamento que o usuário já reconhece intuitivamente.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-24 border-t border-brand-ink/10 bg-brand-paper relative z-10">
        <div className="container mx-auto px-6 text-center">
          <div className="text-[10px] uppercase tracking-[0.6em] font-bold text-brand-ink/20 mb-12">Equipe</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-20">
            <motion.div whileHover={{ y: -5 }}>
              <p className="font-serif italic text-2xl mb-1">Joana Jensen Schifter</p>
              <div className="h-px w-8 bg-brand-accent/30 mx-auto mb-2"></div>
            </motion.div>
            <motion.div whileHover={{ y: -5 }}>
              <p className="font-serif italic text-2xl mb-1">Alisson de Carvalho</p>
              <div className="h-px w-8 bg-brand-accent/30 mx-auto mb-2"></div>
            </motion.div>
            <motion.div whileHover={{ y: -5 }}>
              <p className="font-serif italic text-2xl mb-1">Mateus Guilherme Rosa</p>
              <div className="h-px w-8 bg-brand-accent/30 mx-auto mb-2"></div>
            </motion.div>
            <motion.div whileHover={{ y: -5 }}>
              <p className="font-serif italic text-2xl mb-1">Rafael Murta de Oliveira</p>
              <div className="h-px w-8 bg-brand-accent/30 mx-auto mb-2"></div>
            </motion.div>
          </div>
          
          <div className="pt-12 border-t border-brand-ink/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col md:flex-row gap-4 md:gap-10 text-[10px] font-bold uppercase tracking-[0.3em] text-brand-ink/30">
              <span className="hover:text-brand-accent transition-colors">Trabalho Acadêmico N2</span>
              <span className="hidden md:inline">•</span>
              <span>Ferramentas WEB e UX</span>
              <span className="hidden md:inline">•</span>
              <span>© {new Date().getFullYear()}</span>
            </div>
            <div className="flex items-center gap-3 px-4 py-2 bg-brand-ink/5 rounded-full text-brand-accent text-[10px] font-bold uppercase tracking-widest ring-1 ring-brand-ink/5">
              <Info size={14} className="opacity-50" /> Heurísticas de Nielsen
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}