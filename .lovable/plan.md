## Objetivo

Expandir a seção **Produtos** do catálogo da Print Onda Criativa, adicionando três novas categorias além dos copos plásticos e de papel: **Sacos de Lanche**, **Sacos de Padaria** e **Guardanapos**, com as medidas extraídas das tabelas enviadas.

## O que será adicionado em `src/routes/index.tsx`

### 1. Sacos de Lanche (badge accent — laranja/quente)
Tabela de modelos mais utilizados:

| Modelo | Medidas (mm) | Industrial |
|---|---|---|
| Pipoca 1 | A7,5 x B12,8 x C4 | 25x14 |
| Pipoca 2 | A7,5 x B15,8 x C4 | 25x17 |
| Fritas P | XA1 (A7,5 x B12,8 x C5,5) | 28x14 |
| Fritas M | XA2 (A7,5 x B15,8 x C5,5) | 28x17 |
| X-Salada | C1 (A10 x B12,8 x C5,5) | 34x14 |
| X-Largo | F1 (A13 x B12,8 x C5,5) | 40x14 |
| X-Tudo | F2 (A13 x B15,8 x C5,5) | 40x17 |
| X-Aberto | PH2 (A17 x B15,8 x C0) | 34x14 |
| Pastel Aberto | XA1 (A7,5 x B12,8 x C5,5) | 28x14 |
| 0,5 kg Baixo | C3 (A10 x B17,8 x C6) | 34x19 |
| 0,5 kg Alto | C4 (A10 x B19 x C6) | 34x21 |
| 01 kg | C7 (A10 x B26,8 x C6) | 34x28 |
| 02 kg Baixo | F5 (A13 x B22,8 x C6) | 40x24 |
| 02 kg Alto | F7 (A13 x B26,8 x C6) | 40x28 |

### 2. Sacos de Padaria (badge primary)
Modelos por capacidade, exibidos como grid de cards:
0,5 kg · 01 kg · 02 kg · 03 kg · 05 kg · 7,5 kg · 10 kg · 15 kg · 20 kg · 25 kg

### 3. Guardanapos — Linha Sachê (badge secondary)
Grid de 4 cards com tamanhos:
- **P** — A20 x B20 cm
- **M** — A14 x B30 cm
- **G** — A16 x B30 cm
- **GG** — A20 x B30 cm

Bloco "Opções disponíveis": **Kraft** e **Branco Monolúcido** (chips coloridos), com a nota "Disponíveis para todas as medidas".

### Componentização (mantém o arquivo limpo)

Para evitar inflar o `index.tsx`, criar pequenos blocos de seção reutilizáveis dentro do mesmo arquivo:
- `ProductCategoryHeader` — badge + título da categoria + subtítulo curto
- `SizeChipsGrid` — grade de chips de tamanho (usada por padaria e cards de capacidade)
- `MeasurementTable` — tabela responsiva (mobile: cards empilhados; desktop: tabela) para os sacos de lanche

### Estilo / Design

- Reaproveitar os tokens já existentes (`bg-gradient-brand`, `text-gradient-brand`, `shadow-brand`, badges arredondados, cards com `border-border`).
- Acrescentar um mini "guia de medidas" ilustrativo (quadrado com lados A/B) ao lado da tabela de guardanapos, replicando o ícone do material original via SVG inline (sem nova imagem).
- Adicionar links âncora `#sacos-lanche`, `#sacos-padaria`, `#guardanapos` para futura navegação (sem alterar o menu agora — pode ser feito depois).

### Fora de escopo
- Não criar novas rotas (mantém tudo na home, como já está hoje).
- Não alterar formulário, WhatsApp, hero ou outras seções.
- Não adicionar novas imagens — usar SVG/CSS para ilustrações.

## Arquivo afetado
- `src/routes/index.tsx` (edição da seção `#produtos`, após o bloco de Copos de Papel e antes do "Mockup destaque").
