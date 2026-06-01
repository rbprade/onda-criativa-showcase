import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/logo.asset.json";
import cupsLineup from "@/assets/cups-lineup.asset.json";
import cupMockup from "@/assets/cup-mockup.asset.json";
import printing from "@/assets/printing.asset.json";
import { useState } from "react";
import { toast } from "sonner";
import {
  Sparkles, Target, TrendingUp, Award, Leaf, Recycle,
  ShieldCheck, Printer, ArrowRight, MessageCircle, Send, User, Mail, Phone, FileText
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Print Onda Criativa — Copos Personalizados para sua Marca" },
      { name: "description", content: "Especialistas em personalização de copos de papel e plástico. Sua marca impressa em cada detalhe, em todo o Brasil." },
      { property: "og:title", content: "Print Onda Criativa — Copos Personalizados" },
      { property: "og:description", content: "Transformamos copos em uma extensão da identidade da sua marca." },
      { property: "og:image", content: logo.url },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-lg bg-background/70 border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <img src={logo.url} alt="Print Onda Criativa" className="h-12 w-auto" />
          <nav className="hidden md:flex gap-8 text-sm font-medium text-muted-foreground">
            <a href="#sobre" className="hover:text-primary transition">Quem Somos</a>
            <a href="#missao" className="hover:text-primary transition">Missão</a>
            <a href="#porque" className="hover:text-primary transition">Por que personalizar</a>
            <a href="#produtos" className="hover:text-primary transition">Produtos</a>
          </nav>
          <a href="#contato" className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-brand text-primary-foreground text-sm font-semibold shadow-soft hover:shadow-brand transition">
            Solicitar orçamento <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative pt-32 pb-24 px-6">
        <div className="absolute inset-0 -z-10 bg-gradient-soft" />
        <div className="absolute top-20 -right-32 w-[500px] h-[500px] rounded-full bg-gradient-brand opacity-20 blur-3xl animate-wave" />
        <div className="absolute bottom-0 -left-32 w-[400px] h-[400px] rounded-full bg-accent opacity-25 blur-3xl" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-border text-xs font-semibold tracking-wider uppercase text-primary shadow-soft">
              <Sparkles className="w-3.5 h-3.5" /> Catálogo · Portfólio
            </span>
            <h1 className="mt-6 text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight">
              Sua <span className="text-gradient-brand">marca</span>
              <br />
              em cada <span className="font-script text-secondary">gole.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              Personalização de copos de papel e plástico com qualidade gráfica, agilidade na produção e atendimento em todo o Brasil.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#produtos" className="px-7 py-3.5 rounded-full bg-gradient-brand text-primary-foreground font-semibold shadow-brand hover:scale-105 transition">
                Ver produtos
              </a>
              <a href="#sobre" className="px-7 py-3.5 rounded-full border-2 border-primary/20 font-semibold hover:bg-primary/5 transition">
                Conheça a Print
              </a>
            </div>
            <div className="mt-10 flex items-center gap-8 text-sm">
              <div><div className="text-2xl font-bold text-gradient-brand">+500</div><div className="text-muted-foreground">marcas atendidas</div></div>
              <div className="w-px h-10 bg-border" />
              <div><div className="text-2xl font-bold text-gradient-brand">100%</div><div className="text-muted-foreground">Brasil</div></div>
              <div className="w-px h-10 bg-border" />
              <div><div className="text-2xl font-bold text-gradient-brand">8</div><div className="text-muted-foreground">tamanhos</div></div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-wave opacity-20 blur-2xl rounded-3xl animate-wave" />
            <div className="relative rounded-3xl overflow-hidden shadow-brand bg-white">
              <img src={cupsLineup.url} alt="Linha de copos personalizados" className="w-full h-auto" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-brand px-5 py-4 flex items-center gap-3 animate-float">
              <div className="w-10 h-10 rounded-full bg-gradient-brand grid place-items-center text-primary-foreground">
                <Printer className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Impressão</div>
                <div className="text-sm font-bold">Alta definição</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUEM SOMOS */}
      <section id="sobre" className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-brand">
              <img src={printing.url} alt="Processo de impressão Print Onda Criativa" className="w-full h-[520px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-primary-foreground">
                <div className="text-xs uppercase tracking-widest opacity-80">Bastidores</div>
                <div className="text-xl font-bold">Tampografia artesanal, precisão industrial.</div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7">
            <span className="text-xs font-bold tracking-[0.3em] text-secondary uppercase">01 — Quem somos</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold leading-tight">
              Especialistas em <span className="text-gradient-brand">personalização</span> de copos.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              A <strong className="text-foreground">Print Onda Criativa</strong> é especialista em personalização de copos de papel e plástico, ajudando empresas a fortalecer sua marca de forma prática, criativa e acessível. Atendemos clientes em todo o Brasil com qualidade e agilidade.
            </p>
            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              {[
                { icon: ShieldCheck, label: "Qualidade" },
                { icon: Sparkles, label: "Criatividade" },
                { icon: TrendingUp, label: "Agilidade" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="rounded-2xl border border-border bg-card p-5 hover:shadow-soft transition">
                  <Icon className="w-6 h-6 text-primary" />
                  <div className="mt-3 font-semibold">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MISSÃO */}
      <section id="missao" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-[2.5rem] overflow-hidden bg-gradient-brand p-12 md:p-20 text-primary-foreground shadow-brand">
            <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-accent/30 blur-3xl" />
            <div className="relative">
              <span className="text-xs font-bold tracking-[0.3em] uppercase opacity-80">02 — Nossa missão</span>
              <h2 className="mt-4 text-4xl md:text-6xl font-bold leading-[1.1]">
                Transformar copos em uma <span className="font-script text-accent">extensão</span> da identidade da sua marca.
              </h2>
              <div className="mt-10 flex items-center gap-4">
                <Target className="w-12 h-12 opacity-80" />
                <p className="text-lg opacity-90 max-w-md">
                  Cada impressão é pensada para carregar o que torna a sua marca única.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* POR QUE PERSONALIZAR */}
      <section id="porque" className="py-24 px-6 bg-gradient-soft">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <span className="text-xs font-bold tracking-[0.3em] text-secondary uppercase">03 — Por que personalizar</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold leading-tight">
              Mais presença. Mais profissionalismo. <span className="text-gradient-brand">Mais reconhecimento.</span>
            </h2>
          </div>

          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {[
              {
                n: "01",
                title: "Mais presença",
                desc: "Sua marca circula em cada evento, balcão e mesa — gerando lembrança em pontos de contato reais.",
                icon: TrendingUp,
              },
              {
                n: "02",
                title: "Mais profissionalismo",
                desc: "Detalhes impressos comunicam cuidado e elevam a percepção de qualidade do seu negócio.",
                icon: Award,
              },
              {
                n: "03",
                title: "Mais reconhecimento",
                desc: "Identidade visual consistente transforma clientes em fãs que reconhecem você de longe.",
                icon: Sparkles,
              },
            ].map((item) => (
              <div key={item.n} className="group relative rounded-3xl bg-card border border-border p-8 hover:shadow-brand hover:-translate-y-1 transition-all">
                <div className="absolute top-6 right-6 text-6xl font-bold text-primary/5 group-hover:text-primary/10 transition">{item.n}</div>
                <div className="w-12 h-12 rounded-2xl bg-gradient-brand grid place-items-center text-primary-foreground shadow-soft">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="mt-6 text-2xl font-bold">{item.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUTOS */}
      <section id="produtos" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div className="max-w-2xl">
              <span className="text-xs font-bold tracking-[0.3em] text-secondary uppercase">04 — Produtos</span>
              <h2 className="mt-3 text-4xl md:text-5xl font-bold leading-tight">
                Catálogo de <span className="text-gradient-brand">copos personalizados</span>
              </h2>
              <p className="mt-4 text-muted-foreground text-lg">Plástico ou papel, do espresso ao long drink — sua marca em cada gole.</p>
            </div>
          </div>

          {/* Plásticos */}
          <div className="mt-14">
            <div className="flex items-center gap-3 mb-8">
              <span className="px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm font-bold tracking-wide">COPOS PLÁSTICOS</span>
              <span className="text-muted-foreground text-sm">Transparência que valoriza sua marca</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {["330 ml", "440 ml", "550 ml", "770 ml"].map((size, i) => (
                <div key={size} className="group relative rounded-3xl border border-border bg-gradient-to-b from-card to-muted p-6 text-center hover:shadow-brand hover:border-primary/30 transition-all">
                  <div className="aspect-[3/4] grid place-items-center">
                    <div
                      className="bg-gradient-to-b from-primary/10 to-primary/30 rounded-b-full rounded-t-lg border-2 border-primary/20 backdrop-blur"
                      style={{
                        width: `${55 + i * 10}%`,
                        height: `${55 + i * 10}%`,
                        clipPath: "polygon(15% 0, 85% 0, 95% 100%, 5% 100%)",
                      }}
                    />
                  </div>
                  <div className="mt-2 inline-block px-4 py-1.5 rounded-full border border-primary/30 text-primary font-bold text-sm">{size}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: ShieldCheck, label: "Alta qualidade e resistência" },
                { icon: Leaf, label: "Reutilizáveis" },
                { icon: Sparkles, label: "Transparência que valoriza" },
                { icon: Recycle, label: "Recicláveis" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Icon className="w-5 h-5 text-primary shrink-0" />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Papel */}
          <div className="mt-20">
            <div className="flex items-center gap-3 mb-8">
              <span className="px-5 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-bold tracking-wide">COPOS DE PAPEL</span>
              <span className="text-muted-foreground text-sm">Impressão de alta definição</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {["60 ml", "110 ml", "200 ml", "270 ml"].map((size, i) => (
                <div key={size} className="group relative rounded-3xl border border-border bg-gradient-to-b from-card to-muted p-6 text-center hover:shadow-brand hover:border-secondary/30 transition-all">
                  <div className="aspect-[3/4] grid place-items-center">
                    <div
                      className="bg-white border-2 border-secondary/30 shadow-soft rounded-b-full rounded-t-lg"
                      style={{
                        width: `${45 + i * 12}%`,
                        height: `${50 + i * 12}%`,
                        clipPath: "polygon(15% 0, 85% 0, 95% 100%, 5% 100%)",
                      }}
                    />
                  </div>
                  <div className="mt-2 inline-block px-4 py-1.5 rounded-full border border-secondary/30 text-secondary font-bold text-sm">{size}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: ShieldCheck, label: "Alta qualidade e resistência" },
                { icon: Leaf, label: "Sustentáveis" },
                { icon: Recycle, label: "Descartáveis" },
                { icon: Printer, label: "Impressão de alta definição" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Icon className="w-5 h-5 text-secondary shrink-0" />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Mockup destaque */}
          <div className="mt-20 rounded-3xl overflow-hidden border border-border bg-card shadow-soft">
            <img src={cupMockup.url} alt="Exemplo de arte personalizada — frente e verso" className="w-full h-auto" />
          </div>
        </div>
      </section>

      {/* CTA / FOOTER */}
      <section id="contato" className="py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Pronto para imprimir sua <span className="text-gradient-brand">marca</span>?
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Envie sua arte ou conte sua ideia. Cuidamos do resto, do layout ao copo na sua mão.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <a href="https://wa.me/" className="px-8 py-4 rounded-full bg-gradient-brand text-primary-foreground font-semibold shadow-brand hover:scale-105 transition">
              Falar no WhatsApp
            </a>
            <a href="mailto:contato@printondacriativa.com.br" className="px-8 py-4 rounded-full border-2 border-primary/20 font-semibold hover:bg-primary/5 transition">
              contato@printondacriativa.com.br
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <img src={logo.url} alt="Print Onda Criativa" className="h-12" />
          <p className="text-sm text-muted-foreground font-script text-lg">Sua ideia impressa em cada detalhe.</p>
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Print Onda Criativa</p>
        </div>
      </footer>
    </div>
  );
}
