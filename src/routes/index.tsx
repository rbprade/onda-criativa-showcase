import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/logo.asset.json";
import cupsLineup from "@/assets/cups-lineup.asset.json";
import cupMockup from "@/assets/cup-mockup.asset.json";
import printing from "@/assets/printing.asset.json";
import cup60 from "@/assets/cup-60ml.png.asset.json";
import cup110 from "@/assets/cup-110ml.png.asset.json";
import cup200 from "@/assets/cup-200ml.png.asset.json";
import cup270 from "@/assets/cup-270ml.png.asset.json";
import plastic330 from "@/assets/plastic-cup-330ml.png.asset.json";
import plastic440 from "@/assets/plastic-cup-440ml.png.asset.json";
import plastic550 from "@/assets/plastic-cup-550ml.png.asset.json";
import plastic770 from "@/assets/plastic-cup-770ml.png.asset.json";

const PLASTIC_CUPS = [
  { size: "330 ml", img: plastic330.url },
  { size: "440 ml", img: plastic440.url },
  { size: "550 ml", img: plastic550.url },
  { size: "770 ml", img: plastic770.url },
];

const PAPER_CUPS = [
  { size: "60 ml", img: cup60.url },
  { size: "110 ml", img: cup110.url },
  { size: "200 ml", img: cup200.url },
  { size: "270 ml", img: cup270.url },
];
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

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.521.074-.797.372-.275.297-1.05 1.027-1.05 2.503 0 1.476 1.075 2.901 1.223 3.103.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.053-1.388l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function ContactForm() {
  const [form, setForm] = useState({ nome: "", email: "", telefone: "", tipo: "", mensagem: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nome.trim() || !form.telefone.trim()) {
      toast.error("Por favor, preencha nome e telefone.");
      return;
    }
    setIsSubmitting(true);

    const msg = `Olá! Me chamo ${form.nome.trim()}.\n` +
      `Quero solicitar um orçamento para copos personalizados.\n` +
      `Tipo de copo: ${form.tipo || "A definir"}\n` +
      `E-mail: ${form.email || "Não informado"}\n` +
      `Telefone: ${form.telefone.trim()}\n\n` +
      `Mensagem: ${form.mensagem || "Sem mensagem adicional"}`;

    const url = `https://wa.me/47989264709?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
    toast.success("Redirecionando para o WhatsApp!");
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-border bg-card p-8 md:p-10 shadow-soft space-y-6">
      <div className="space-y-2">
        <Label htmlFor="nome" className="flex items-center gap-2">
          <User className="w-4 h-4 text-primary" /> Nome completo *
        </Label>
        <Input id="nome" name="nome" value={form.nome} onChange={handleChange} placeholder="Seu nome" required />
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="email" className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-primary" /> E-mail
          </Label>
          <Input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="seu@email.com" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="telefone" className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-primary" /> Telefone / WhatsApp *
          </Label>
          <Input id="telefone" name="telefone" value={form.telefone} onChange={handleChange} placeholder="(00) 00000-0000" required />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="tipo" className="flex items-center gap-2">
          <FileText className="w-4 h-4 text-primary" /> Tipo de copo desejado
        </Label>
        <select
          id="tipo"
          name="tipo"
          value={form.tipo}
          onChange={handleChange}
          className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        >
          <option value="">Selecione...</option>
          <option value="Copos plásticos">Copos plásticos</option>
          <option value="Copos de papel">Copos de papel</option>
          <option value="Ambos">Ambos (misto)</option>
          <option value="Ainda não sei">Ainda não sei — quero orientação</option>
        </select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="mensagem" className="flex items-center gap-2">
          <MessageCircle className="w-4 h-4 text-primary" /> Detalhes do pedido
        </Label>
        <Textarea
          id="mensagem"
          name="mensagem"
          value={form.mensagem}
          onChange={handleChange}
          placeholder="Quantidade, tamanho, cores da marca, prazo..."
          rows={4}
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-brand text-primary-foreground font-semibold shadow-brand hover:scale-[1.02] transition disabled:opacity-60 disabled:cursor-not-allowed"
      >
        <Send className="w-5 h-5" />
        {isSubmitting ? "Enviando..." : "Enviar solicitação de orçamento"}
      </button>

      <p className="text-center text-xs text-muted-foreground">
        Ao enviar, você será redirecionado para o WhatsApp com sua mensagem pré-preenchida.
      </p>
    </form>
  );
}

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
          <a href="https://wa.me/47989264709" target="_blank" rel="noopener noreferrer" className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-brand text-primary-foreground text-sm font-semibold shadow-soft hover:shadow-brand transition">
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
              <div><div className="text-2xl font-bold text-gradient-brand">+50</div><div className="text-muted-foreground">marcas atendidas</div></div>
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
                <div className="text-xl font-bold">A sua ideia impressa em cada detalhe.</div>
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 items-end">
              {PLASTIC_CUPS.map(({ size, img }, i) => (
                <div key={size} className="group relative rounded-3xl border border-border bg-gradient-to-b from-card to-muted p-6 text-center hover:shadow-brand hover:border-primary/30 transition-all">
                  <div className="aspect-[3/4] grid place-items-end justify-center">
                    <img
                      src={img}
                      alt={`Copo plástico personalizado ${size}`}
                      loading="lazy"
                      className="object-contain drop-shadow-md transition-transform group-hover:-translate-y-1"
                      style={{ height: `${60 + i * 12}%`, maxHeight: "100%" }}
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 items-end">
              {PAPER_CUPS.map(({ size, img }, i) => (
                <div key={size} className="group relative rounded-3xl border border-border bg-gradient-to-b from-card to-muted p-6 text-center hover:shadow-brand hover:border-secondary/30 transition-all">
                  <div className="aspect-[3/4] grid place-items-end justify-center">
                    <img
                      src={img}
                      alt={`Copo de papel kraft personalizado ${size}`}
                      loading="lazy"
                      className="object-contain drop-shadow-md transition-transform group-hover:-translate-y-1"
                      style={{ height: `${60 + i * 12}%`, maxHeight: "100%" }}
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


          {/* Sacos de Lanche */}
          <div id="sacos-lanche" className="mt-20 scroll-mt-24">
            <div className="flex items-center gap-3 mb-8 flex-wrap">
              <span className="px-5 py-2 rounded-full bg-accent text-accent-foreground text-sm font-bold tracking-wide">SACOS DE LANCHE</span>
              <span className="text-muted-foreground text-sm">Modelos prontos para lanchonetes, food trucks e delivery</span>
            </div>

            {/* Desktop table */}
            <div className="hidden md:block rounded-3xl border border-border bg-card shadow-soft overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-gradient-soft border-b border-border">
                  <tr className="text-xs uppercase tracking-widest text-muted-foreground">
                    <th className="py-4 px-6 font-bold">Modelo</th>
                    <th className="py-4 px-6 font-bold">Medidas (mm)</th>
                    <th className="py-4 px-6 font-bold">Medida industrial</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { m: "Pipoca 1", med: "A1 (A7,5 x B12,8 x C4)", ind: "25 x 14" },
                    { m: "Pipoca 2", med: "A2 (A7,5 x B15,8 x C4)", ind: "25 x 17" },
                    { m: "Fritas P", med: "XA1 (A7,5 x B12,8 x C5,5)", ind: "28 x 14" },
                    { m: "Fritas M", med: "XA2 (A7,5 x B15,8 x C5,5)", ind: "28 x 17" },
                    { m: "X-Salada", med: "C1 (A10 x B12,8 x C5,5)", ind: "34 x 14" },
                    { m: "X-Largo", med: "F1 (A13 x B12,8 x C5,5)", ind: "40 x 14" },
                    { m: "X-Tudo", med: "F2 (A13 x B15,8 x C5,5)", ind: "40 x 17" },
                    { m: "X-Aberto", med: "PH2 (A17 x B15,8 x C0)", ind: "34 x 14" },
                    { m: "Pastel Aberto", med: "XA1 (A7,5 x B12,8 x C5,5)", ind: "28 x 14" },
                    { m: "0,5 kg Baixo", med: "C3 (A10 x B17,8 x C6)", ind: "34 x 19" },
                    { m: "0,5 kg Alto", med: "C4 (A10 x B19 x C6)", ind: "34 x 21" },
                    { m: "01 kg", med: "C7 (A10 x B26,8 x C6)", ind: "34 x 28" },
                    { m: "02 kg Baixo", med: "F5 (A13 x B22,8 x C6)", ind: "40 x 24" },
                    { m: "02 kg Alto", med: "F7 (A13 x B26,8 x C6)", ind: "40 x 28" },
                  ].map((row, i) => (
                    <tr key={row.m} className={`border-b border-border/50 last:border-0 hover:bg-muted/40 transition ${i % 2 === 1 ? "bg-muted/20" : ""}`}>
                      <td className="py-4 px-6 font-bold text-foreground">{row.m}</td>
                      <td className="py-4 px-6 text-sm text-muted-foreground font-mono">{row.med}</td>
                      <td className="py-4 px-6">
                        <span className="inline-block px-3 py-1 rounded-full border border-accent/40 text-accent-foreground bg-accent/10 text-xs font-bold">{row.ind}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile cards */}
            <div className="md:hidden grid gap-3">
              {[
                { m: "Pipoca 1", med: "A1 (A7,5 x B12,8 x C4)", ind: "25 x 14" },
                { m: "Pipoca 2", med: "A2 (A7,5 x B15,8 x C4)", ind: "25 x 17" },
                { m: "Fritas P", med: "XA1 (A7,5 x B12,8 x C5,5)", ind: "28 x 14" },
                { m: "Fritas M", med: "XA2 (A7,5 x B15,8 x C5,5)", ind: "28 x 17" },
                { m: "X-Salada", med: "C1 (A10 x B12,8 x C5,5)", ind: "34 x 14" },
                { m: "X-Largo", med: "F1 (A13 x B12,8 x C5,5)", ind: "40 x 14" },
                { m: "X-Tudo", med: "F2 (A13 x B15,8 x C5,5)", ind: "40 x 17" },
                { m: "X-Aberto", med: "PH2 (A17 x B15,8 x C0)", ind: "34 x 14" },
                { m: "Pastel Aberto", med: "XA1 (A7,5 x B12,8 x C5,5)", ind: "28 x 14" },
                { m: "0,5 kg Baixo", med: "C3 (A10 x B17,8 x C6)", ind: "34 x 19" },
                { m: "0,5 kg Alto", med: "C4 (A10 x B19 x C6)", ind: "34 x 21" },
                { m: "01 kg", med: "C7 (A10 x B26,8 x C6)", ind: "34 x 28" },
                { m: "02 kg Baixo", med: "F5 (A13 x B22,8 x C6)", ind: "40 x 24" },
                { m: "02 kg Alto", med: "F7 (A13 x B26,8 x C6)", ind: "40 x 28" },
              ].map((row) => (
                <div key={row.m} className="rounded-2xl border border-border bg-card p-4 flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <div className="font-bold">{row.m}</div>
                    <div className="text-xs text-muted-foreground font-mono truncate">{row.med}</div>
                  </div>
                  <span className="shrink-0 inline-block px-3 py-1 rounded-full border border-accent/40 text-accent-foreground bg-accent/10 text-xs font-bold">{row.ind}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Sacos de Padaria */}
          <div id="sacos-padaria" className="mt-20 scroll-mt-24">
            <div className="flex items-center gap-3 mb-8 flex-wrap">
              <span className="px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm font-bold tracking-wide">SACOS DE PADARIA</span>
              <span className="text-muted-foreground text-sm">Capacidades de 0,5 kg a 25 kg</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {["0,5 kg", "01 kg", "02 kg", "03 kg", "05 kg", "7,5 kg", "10 kg", "15 kg", "20 kg", "25 kg"].map((cap) => (
                <div key={cap} className="group rounded-2xl border border-border bg-gradient-to-b from-card to-muted p-5 text-center hover:shadow-brand hover:border-primary/30 hover:-translate-y-0.5 transition-all">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Modelo</div>
                  <div className="mt-1 text-xl font-bold text-gradient-brand">{cap}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: ShieldCheck, label: "Resistência reforçada" },
                { icon: Printer, label: "Impressão personalizada" },
                { icon: Leaf, label: "Papel kraft natural" },
                { icon: Recycle, label: "Recicláveis" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Icon className="w-5 h-5 text-primary shrink-0" />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Guardanapos */}
          <div id="guardanapos" className="mt-20 scroll-mt-24">
            <div className="flex items-center gap-3 mb-8 flex-wrap">
              <span className="px-5 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-bold tracking-wide">GUARDANAPOS</span>
              <span className="text-muted-foreground text-sm">Linha Sachê — sua marca em cada mesa</span>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {/* Sizes */}
              <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { t: "P", med: "A20 x B20 cm" },
                  { t: "M", med: "A14 x B30 cm" },
                  { t: "G", med: "A16 x B30 cm" },
                  { t: "GG", med: "A20 x B30 cm" },
                ].map((s) => (
                  <div key={s.t} className="rounded-2xl border border-border bg-card p-6 text-center hover:shadow-brand hover:border-secondary/30 transition-all">
                    <div className="mx-auto w-16 h-16 rounded-xl bg-white border-2 border-secondary/30 shadow-soft grid place-items-center text-2xl font-bold text-secondary">
                      {s.t}
                    </div>
                    <div className="mt-3 text-sm text-muted-foreground font-mono">{s.med}</div>
                  </div>
                ))}
              </div>

              {/* Guia de medidas */}
              <div className="rounded-3xl border border-border bg-gradient-soft p-6 flex flex-col items-center justify-center text-center">
                <div className="text-xs font-bold tracking-[0.3em] text-secondary uppercase">Guia de medidas</div>
                <svg viewBox="0 0 120 120" className="w-32 h-32 mt-4 text-foreground" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="20" y="20" width="80" height="80" rx="4" className="text-border" />
                  <line x1="20" y1="20" x2="100" y2="100" strokeDasharray="3 3" className="text-secondary" />
                  <text x="108" y="62" fontSize="14" fill="currentColor" stroke="none" className="font-bold">A</text>
                  <text x="58" y="116" fontSize="14" fill="currentColor" stroke="none" className="font-bold">B</text>
                </svg>
                <p className="mt-3 text-xs text-muted-foreground max-w-[14rem]">A = altura · B = largura. Medidas em centímetros.</p>
              </div>
            </div>

            {/* Opções disponíveis */}
            <div className="mt-8 rounded-3xl border border-border bg-card p-6 md:p-8">
              <div className="text-xs font-bold tracking-[0.3em] text-secondary uppercase mb-4">Opções disponíveis</div>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-3 px-5 py-3 rounded-2xl border border-border" style={{ background: "linear-gradient(135deg, #c9a878 0%, #a07a4a 100%)" }}>
                  <span className="font-bold text-white drop-shadow">KRAFT</span>
                </div>
                <div className="flex items-center gap-3 px-5 py-3 rounded-2xl border border-border bg-white">
                  <span className="font-bold text-foreground">BRANCO MONOLÚCIDO</span>
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">Disponíveis para todas as medidas.</p>
            </div>
          </div>

          {/* Mockup destaque */}
          <div className="mt-20 rounded-3xl overflow-hidden border border-border bg-card shadow-soft">
            <img src={cupMockup.url} alt="Exemplo de arte personalizada — frente e verso" className="w-full h-auto" />
          </div>
        </div>
      </section>

      {/* CTA / CONTATO */}
      <section id="contato" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Texto + CTA rápido */}
            <div>
              <span className="text-xs font-bold tracking-[0.3em] text-secondary uppercase">05 — Contato</span>
              <h2 className="mt-3 text-4xl md:text-5xl font-bold leading-tight">
                Solicite seu <span className="text-gradient-brand">orçamento</span>
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-md">
                Preencha o formulário ao lado ou fale direto pelo WhatsApp. Respondemos rapidamente com opções e valores sob medida.
              </p>

              <div className="mt-10 flex flex-col gap-4">
                <a
                  href="https://wa.me/47989264709"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#25D366] text-white font-semibold shadow-lg hover:scale-105 transition"
                >
                  <MessageCircle className="w-5 h-5" />
                  Falar no WhatsApp
                </a>
                <a
                  href="mailto:copoprint.adm@gmail.com"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full border-2 border-primary/20 font-semibold hover:bg-primary/5 transition"
                >
                  <Mail className="w-5 h-5" />
                  copoprint.adm@gmail.com
                </a>
              </div>

              <div className="mt-10 rounded-3xl bg-gradient-soft border border-border p-8">
                <h3 className="font-semibold text-lg">Por que solicitar um orçamento?</h3>
                <ul className="mt-4 space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>Atendimento personalizado para sua marca</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>Entrega rápida em todo o Brasil</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>Arte inclusa e revisões sem custo</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Formulário */}
            <ContactForm />
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

      {/* Botão flutuante WhatsApp */}
      <a
        href="https://wa.me/47989264709"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg grid place-items-center hover:scale-110 transition animate-bounce-slow"
        style={{ animationDuration: "3s" }}
      >
        <WhatsAppIcon className="w-7 h-7" />
      </a>
    </div>
  );
}
