// ── DADOS ────────────────────────────────────────────────────
const CATS = [
  { id:'todos',       label:'Tudo',         emoji:'🏪', count:0  },
  { id:'doces',       label:'Doces',        emoji:'🍫', count:0  },
  { id:'festas',      label:'Festas',       emoji:'🎉', count:0  },
  { id:'salgadinhos', label:'Salgadinhos',  emoji:'🥨', count:0  },
  { id:'bebidas',     label:'Bebidas',      emoji:'🥤', count:0  },
];

const PB = {
  doces:'pb-doces', festas:'pb-festas',
  salgadinhos:'pb-salgados', bebidas:'pb-bebidas'
};

const products = [

  // ══════════════════════════════════════════════════════════════
  // DOCES
  // ══════════════════════════════════════════════════════════════

  // — Sonho de Valsa
  {id:1,  name:'Sonho de Valsa',          emoji:'💝', cat:'doces', badge:'Clássico',
   descUnit:'Bombom Lacta recheado — unidade',           priceUnit:3.20,
   descBox:'Caixa com 16 unidades (258g)',               priceBox:40.96, qtyBox:16},

  // — Ouro Branco
  {id:2,  name:'Ouro Branco',             emoji:'🤍', cat:'doces', badge:'Clássico',
   descUnit:'Bombom Lacta chocolate branco — unidade',   priceUnit:3.20,
   descBox:'Caixa com 16 unidades (258g)',               priceBox:40.96, qtyBox:16},

  // — Pirulito POP
  {id:3,  name:'Pirulito POP',            emoji:'🍭', cat:'doces',
   descUnit:'Pirulito POP sortido — unidade',            priceUnit:1.60,
   descBox:'Pote com 50 unidades',                       priceBox:64.00, qtyBox:50},

  // — Pirulito Coração
  {id:4,  name:'Pirulito Coração',        emoji:'💗', cat:'doces',
   descUnit:'Pirulito coração sortido — unidade',        priceUnit:2.40,
   descBox:'Pote com 30 unidades',                       priceBox:57.60, qtyBox:30},

  // — Balas de Goma
  {id:5,  name:'Bala de Goma Sortida',    emoji:'🍬', cat:'doces',
   descUnit:'Bala de goma sortida — unidade',            priceUnit:0.40,
   descBox:'Pacote com 100 unidades',                    priceBox:32.00, qtyBox:100},

  // — Bala 7 Belo
  {id:6,  name:'Bala 7 Belo',             emoji:'🟡', cat:'doces',
   descUnit:'Bala 7 Belo sortida — unidade',             priceUnit:0.40,
   descBox:'Pacote com 100 unidades',                    priceBox:32.00, qtyBox:100},

  // — Bala Iogurte 100
  {id:7,  name:'Bala Iogurte 100',        emoji:'🍬', cat:'doces',
   descUnit:'Bala iogurte 100 sortida — unidade',        priceUnit:0.40,
   descBox:'Pacote com 100 unidades',                    priceBox:32.00, qtyBox:100},

  // — Mentos por sabor
  {id:8,  name:'Mentos Frutas',           emoji:'🌈', cat:'doces',
   descUnit:'Mentos sabor frutas 37,5g — rolo',          priceUnit:3.20,
   descBox:'Caixa com 16 rolos',                         priceBox:41.60, qtyBox:16},

  {id:9,  name:'Mentos Menta',            emoji:'🟢', cat:'doces',
   descUnit:'Mentos sabor menta 37,5g — rolo',           priceUnit:3.20,
   descBox:'Caixa com 16 rolos',                         priceBox:41.60, qtyBox:16},

  {id:10, name:'Mentos Morango',          emoji:'🍓', cat:'doces',
   descUnit:'Mentos sabor morango 37,5g — rolo',         priceUnit:3.20,
   descBox:'Caixa com 16 rolos',                         priceBox:41.60, qtyBox:16},

  {id:11, name:'Mentos Tutti-Frutti',     emoji:'🌺', cat:'doces',
   descUnit:'Mentos tutti-frutti 37,5g — rolo',          priceUnit:3.20,
   descBox:'Caixa com 16 rolos',                         priceBox:41.60, qtyBox:16},


  {id:13, name:'Mentos Watermelon',       emoji:'🍉', cat:'doces',
   descUnit:'Mentos melancia 37,5g — rolo',              priceUnit:3.20,
   descBox:'Caixa com 16 rolos',                         priceBox:41.60, qtyBox:16},

  // — Bala Florestal
  {id:14, name:'Bala Florestal',          emoji:'🌿', cat:'doces',
   descUnit:'Bala florestal mel/eucalipto — unidade',    priceUnit:0.40,
   descBox:'Pacote com 100 unidades',                    priceBox:32.00, qtyBox:100},

  // — Butter Toffees
  {id:15, name:'Butter Toffees Original', emoji:'🧈', cat:'doces',
   descUnit:'Butter Toffees manteiga — unidade',         priceUnit:0.48,
   descBox:'Pacote com 100 unidades',                    priceBox:38.40, qtyBox:100},

  {id:16, name:'Butter Toffees Menta',    emoji:'🌀', cat:'doces',
   descUnit:'Butter Toffees sabor menta — unidade',      priceUnit:0.48,
   descBox:'Pacote com 100 unidades',                    priceBox:38.40, qtyBox:100},

  {id:17, name:'Butter Toffees Chocolate',emoji:'🍫', cat:'doces',
   descUnit:'Butter Toffees chocolate — unidade',        priceUnit:0.48,
   descBox:'Pacote com 100 unidades',                    priceBox:38.40, qtyBox:100},

  // — Moranguete
  {id:18, name:'Moranguete',              emoji:'🍓', cat:'doces',
   descUnit:'Bala Moranguete — unidade',                 priceUnit:0.40,
   descBox:'Pacote com 100 unidades',                    priceBox:32.00, qtyBox:100},

  // — Kit Kat
  {id:19, name:'Kit Kat Original',        emoji:'🍫', cat:'doces', badge:'Top',
   descUnit:'Kit Kat wafer leite 45g — unidade',         priceUnit:4.00,
   descBox:'Caixa com 24 unidades',                      priceBox:76.80, qtyBox:24},

  {id:20, name:'Kit Kat Dark',            emoji:'🟤', cat:'doces',
   descUnit:'Kit Kat chocolate amargo 45g — unidade',    priceUnit:4.80,
   descBox:'Caixa com 24 unidades',                      priceBox:92.16, qtyBox:24},

  {id:21, name:'Kit Kat Branco',          emoji:'🤍', cat:'doces',
   descUnit:'Kit Kat chocolate branco 45g — unidade',    priceUnit:4.80,
   descBox:'Caixa com 24 unidades',                      priceBox:92.16, qtyBox:24},

  // — Bis Lacta
  {id:22, name:'Bis Lacta Chocolate',     emoji:'🍪', cat:'doces',
   descUnit:'Bis wafer coberto chocolate — unidade',     priceUnit:2.00,
   descBox:'Caixa com 30 unidades',                      priceBox:48.00, qtyBox:30},

  {id:23, name:'Bis Lacta Branco',        emoji:'🍪', cat:'doces',
   descUnit:'Bis wafer coberto chocolate branco — unid.',priceUnit:2.00,
   descBox:'Caixa com 30 unidades',                      priceBox:48.00, qtyBox:30},

  {id:24, name:'Bis Lacta Dark',          emoji:'🍪', cat:'doces',
   descUnit:'Bis wafer coberto dark chocolate — unid.',  priceUnit:2.00,
   descBox:'Caixa com 30 unidades',                      priceBox:48.00, qtyBox:30},

  // — Caixas de bombom por marca
  {id:25, name:'Caixa Lacta Sortida',     emoji:'🎁', cat:'doces', badge:'Presente',
   descUnit:'Caixa bombom Lacta 300g — caixa',           priceUnit:28.00,
   descBox:'Caixa com 6 unidades',                       priceBox:134.40, qtyBox:6},

  {id:26, name:'Caixa Garoto Sortida',    emoji:'🎁', cat:'doces',
   descUnit:'Caixa bombom Garoto 300g — caixa',          priceUnit:28.00,
   descBox:'Caixa com 6 unidades',                       priceBox:134.40, qtyBox:6},

  {id:27, name:'Caixa Nestlé Sortida',    emoji:'🎁', cat:'doces',
   descUnit:'Caixa bombom Nestlé 251g — caixa',          priceUnit:28.00,
   descBox:'Caixa com 6 unidades',                       priceBox:134.40, qtyBox:6},

  {id:28, name:'Caixa Kopenhagen',        emoji:'🎁', cat:'doces', badge:'Premium',
   descUnit:'Caixa bombom Kopenhagen 200g — caixa',      priceUnit:64.00,
   descBox:'Caixa com 3 unidades',                       priceBox:153.60, qtyBox:3},


  // — Outros Doces (item especial com nota)
  {id:30, name:'Outros Doces — Especificar', emoji:'📝', cat:'doces', badge:'Personalizado',
   descUnit:'Não achou o que quer? Descreva no campo de obs ao finalizar o pedido.',
   priceUnit:0.00,
   descBox:'Consulte disponibilidade pelo WhatsApp.',
   priceBox:0.00, qtyBox:1},

  // ══════════════════════════════════════════════════════════════
  // FESTAS
  // ══════════════════════════════════════════════════════════════

  // Balões
  {id:31, name:'Balão Latex 9" Colorido', emoji:'🎈', cat:'festas', badge:'Mais vendido',
   descUnit:'Balão latex liso sortido — unidade',        priceUnit:0.48,
   descBox:'Pacote com 50 unidades',                     priceBox:12.00, qtyBox:50},

  {id:32, name:'Balão Latex 11" Grande',  emoji:'🎈', cat:'festas',
   descUnit:'Balão latex 11 pol. colorido — unidade',    priceUnit:0.80,
   descBox:'Pacote com 50 unidades',                     priceBox:20.00, qtyBox:50},

  {id:33, name:'Balão Metalizado Redondo',emoji:'🪩', cat:'festas',
   descUnit:'Balão metalizado 45cm — unidade',           priceUnit:4.80,
   descBox:'Pacote com 10 unidades',                     priceBox:36.00, qtyBox:10},

  {id:34, name:'Balão Metalizado Coração',emoji:'❤️', cat:'festas',
   descUnit:'Balão coração metalizado 45cm — unidade',   priceUnit:5.60,
   descBox:'Pacote com 10 unidades',                     priceBox:44.80, qtyBox:10},

  {id:35, name:'Balão Metalizado Estrela', emoji:'⭐', cat:'festas',
   descUnit:'Balão estrela metalizado 45cm — unidade',   priceUnit:5.60,
   descBox:'Pacote com 10 unidades',                     priceBox:44.80, qtyBox:10},

  {id:36, name:'Balão Temático Aniversário',emoji:'🎂',cat:'festas',
   descUnit:'Balão "Happy Birthday" impresso — unidade', priceUnit:6.40,
   descBox:'Pacote com 10 unidades',                     priceBox:51.20, qtyBox:10},

  // Confetes e Serpentinas
  {id:37, name:'Confete Colorido',        emoji:'🎊', cat:'festas',
   descUnit:'Confete papel colorido 25g — pacote',       priceUnit:2.40,
   descBox:'Caixa com 20 pacotes',                       priceBox:38.40, qtyBox:20},

  {id:38, name:'Serpentina Colorida',     emoji:'🎊', cat:'festas',
   descUnit:'Serpentina papel 4m — unidade',             priceUnit:1.60,
   descBox:'Caixa com 50 unidades',                      priceBox:64.00, qtyBox:50},

  {id:39, name:'Pistola de Confete',      emoji:'🎉', cat:'festas', badge:'Diversão',
   descUnit:'Pistola lança confete 30cm — unidade',      priceUnit:16.00,
   descBox:'Caixa com 6 unidades',                       priceBox:76.80, qtyBox:6},





  // Copos
  {id:47, name:'Copo Plástico 180ml',     emoji:'🥤', cat:'festas',
   descUnit:'Copo descartável 180ml — pacote 50un',      priceUnit:4.80,
   descBox:'Caixa com 10 pacotes (500un)',                priceBox:38.40, qtyBox:10},

  {id:48, name:'Copo Plástico 200ml Transparente',emoji:'🥤',cat:'festas',
   descUnit:'Copo 200ml transparente — pacote 50un',     priceUnit:5.60,
   descBox:'Caixa com 10 pacotes (500un)',                priceBox:44.80, qtyBox:10},

  {id:49, name:'Copo de Papel Estampado', emoji:'🎂', cat:'festas',
   descUnit:'Copo papel 180ml estampado — pacote 10un',  priceUnit:8.00,
   descBox:'Caixa com 10 pacotes (100un)',                priceBox:64.00, qtyBox:10},

  // Pratos
  {id:50, name:'Prato Descartável Branco',emoji:'🍽️',cat:'festas',
   descUnit:'Prato plástico branco — pacote 10un',       priceUnit:3.20,
   descBox:'Caixa com 20 pacotes (200un)',                priceBox:51.20, qtyBox:20},

  {id:51, name:'Prato Descartável Estampado',emoji:'🍽️',cat:'festas',
   descUnit:'Prato estampado festivo — pacote 10un',     priceUnit:4.80,
   descBox:'Caixa com 20 pacotes (200un)',                priceBox:76.80, qtyBox:20},

  // Velas
  {id:52, name:'Vela de Aniversário Colorida',emoji:'🕯️',cat:'festas',
   descUnit:'Kit 10 velinhas coloridas — kit',           priceUnit:3.20,
   descBox:'Caixa com 12 kits',                          priceBox:30.72, qtyBox:12},

  {id:53, name:'Vela Número (0-9)',       emoji:'🕯️', cat:'festas',
   descUnit:'Vela número avulsa — unidade',              priceUnit:4.00,
   descBox:'Caixa com 10 unidades',                      priceBox:32.00, qtyBox:10},

  {id:54, name:'Vela Sparkle Dourada',    emoji:'✨', cat:'festas',
   descUnit:'Vela sparkle brilhante — unidade',          priceUnit:6.40,
   descBox:'Caixa com 10 unidades',                      priceBox:51.20, qtyBox:10},

  {id:55, name:'Vela Tricks (não apaga)', emoji:'🔥', cat:'festas', badge:'Surpresa',
   descUnit:'Vela mágica que não apaga — unidade',       priceUnit:4.80,
   descBox:'Caixa com 10 unidades',                      priceBox:38.40, qtyBox:10},

  // Decoração
  {id:56, name:'Faixa Feliz Aniversário', emoji:'🎊', cat:'festas',
   descUnit:'Faixa decorativa plástica — unidade',       priceUnit:8.00,
   descBox:'Pacote com 5 unidades',                      priceBox:32.00, qtyBox:5},

  {id:57, name:'Chapéu de Festa Conical', emoji:'🎩', cat:'festas',
   descUnit:'Chapéu de festa colorido — unidade',        priceUnit:2.40,
   descBox:'Pacote com 10 unidades',                     priceBox:19.20, qtyBox:10},

  {id:58, name:'Guardanapo Estampado',    emoji:'🎀', cat:'festas',
   descUnit:'Guardanapo festivo — pacote 20un',          priceUnit:4.00,
   descBox:'Caixa com 10 pacotes (200un)',                priceBox:32.00, qtyBox:10},

  // ══════════════════════════════════════════════════════════════
  // SALGADINHOS
  // ══════════════════════════════════════════════════════════════

  // — Elma Chips / PepsiCo
  {id:61, name:'Elma Chips Onda Original',emoji:'🥔',cat:'salgadinhos',badge:'Top',
   descUnit:'Batata ondulada original 40g — unidade',    priceUnit:4.00,
   descBox:'Caixa com 20 unidades',                      priceBox:64.00, qtyBox:20},

  {id:62, name:'Elma Chips Onda Cheddar', emoji:'🧀',cat:'salgadinhos',
   descUnit:'Batata ondulada cheddar 40g — unidade',     priceUnit:4.00,
   descBox:'Caixa com 20 unidades',                      priceBox:64.00, qtyBox:20},

  {id:63, name:'Elma Chips Onda Picanha', emoji:'🥩',cat:'salgadinhos',
   descUnit:'Batata ondulada picanha 40g — unidade',     priceUnit:4.00,
   descBox:'Caixa com 20 unidades',                      priceBox:64.00, qtyBox:20},

  {id:64, name:'Elma Chips Forno Original',emoji:'🌾',cat:'salgadinhos',
   descUnit:'Elma Chips de forno original 35g — unidade',priceUnit:3.60,
   descBox:'Caixa com 20 unidades',                      priceBox:57.60, qtyBox:20},

  {id:65, name:'Elma Chips Forno Mostarda',emoji:'🌾',cat:'salgadinhos',
   descUnit:'Elma Chips forno mostarda 35g — unidade',   priceUnit:3.60,
   descBox:'Caixa com 20 unidades',                      priceBox:57.60, qtyBox:20},

  {id:66, name:'Ruffles Original',        emoji:'🥔',cat:'salgadinhos',
   descUnit:'Ruffles original 57g — unidade',            priceUnit:5.60,
   descBox:'Caixa com 15 unidades',                      priceBox:67.20, qtyBox:15},

  {id:67, name:'Ruffles Cheddar',         emoji:'🧀',cat:'salgadinhos',
   descUnit:'Ruffles cheddar & cebola 57g — unidade',    priceUnit:5.60,
   descBox:'Caixa com 15 unidades',                      priceBox:67.20, qtyBox:15},

  {id:68, name:'Ruffles Churrasco',       emoji:'🔥',cat:'salgadinhos',
   descUnit:'Ruffles churrasco 57g — unidade',           priceUnit:5.60,
   descBox:'Caixa com 15 unidades',                      priceBox:67.20, qtyBox:15},

  {id:69, name:'Cheetos Anel Requeijão',  emoji:'🧡',cat:'salgadinhos',badge:'Favorito',
   descUnit:'Cheetos anel requeijão 45g — unidade',      priceUnit:4.00,
   descBox:'Caixa com 20 unidades',                      priceBox:64.00, qtyBox:20},

  {id:70, name:'Cheetos Crunchy Queijo',  emoji:'🧡',cat:'salgadinhos',
   descUnit:'Cheetos crunchy queijo 45g — unidade',      priceUnit:4.00,
   descBox:'Caixa com 20 unidades',                      priceBox:64.00, qtyBox:20},

  {id:71, name:'Cheetos Crunchy Flamin Hot',emoji:'🌶️',cat:'salgadinhos',badge:'Ardido',
   descUnit:'Cheetos Flamin Hot 45g — unidade',          priceUnit:4.80,
   descBox:'Caixa com 20 unidades',                      priceBox:76.80, qtyBox:20},

  {id:72, name:'Doritos Nacho Cheese',    emoji:'🟡',cat:'salgadinhos',
   descUnit:'Doritos nacho cheese 54g — unidade',        priceUnit:5.60,
   descBox:'Caixa com 15 unidades',                      priceBox:67.20, qtyBox:15},

  {id:73, name:'Doritos Churrasco',       emoji:'🔴',cat:'salgadinhos',
   descUnit:'Doritos churrasco 54g — unidade',           priceUnit:5.60,
   descBox:'Caixa com 15 unidades',                      priceBox:67.20, qtyBox:15},

  {id:74, name:'Doritos Queijo Picante',  emoji:'🌶️',cat:'salgadinhos',
   descUnit:'Doritos queijo picante 54g — unidade',      priceUnit:5.60,
   descBox:'Caixa com 15 unidades',                      priceBox:67.20, qtyBox:15},

  // — Forno de Minas / Jangada
  {id:75, name:'Forno de Minas Palha Italiana',emoji:'🧀',cat:'salgadinhos',
   descUnit:'Palha italiana queijo 50g — unidade',       priceUnit:4.80,
   descBox:'Caixa com 18 unidades',                      priceBox:69.12, qtyBox:18},

  // — Yoki (Forno & Fogão)
  {id:76, name:'Lobito Original',         emoji:'🐺',cat:'salgadinhos',badge:'Clássico',
   descUnit:'Lobito salgadinho trigo 25g — unidade',     priceUnit:2.00,
   descBox:'Caixa com 30 unidades',                      priceBox:48.00, qtyBox:30},

  {id:77, name:'Fofura Milho',            emoji:'🌽',cat:'salgadinhos',
   descUnit:'Fofura salgadinho milho 30g — unidade',     priceUnit:2.00,
   descBox:'Caixa com 30 unidades',                      priceBox:48.00, qtyBox:30},

  {id:78, name:'Ebicem Camarão',          emoji:'🦐',cat:'salgadinhos',
   descUnit:'Ebicem sabor camarão 25g — unidade',        priceUnit:2.40,
   descBox:'Caixa com 25 unidades',                      priceBox:48.00, qtyBox:25},

  {id:79, name:'Pipoca Yoki Salgada',     emoji:'🍿',cat:'salgadinhos',
   descUnit:'Pipoca pronta salgada 50g — unidade',       priceUnit:2.80,
   descBox:'Caixa com 20 unidades',                      priceBox:44.80, qtyBox:20},

  {id:80, name:'Pipoca Yoki Manteiga',    emoji:'🍿',cat:'salgadinhos',
   descUnit:'Pipoca pronta manteiga 50g — unidade',      priceUnit:2.80,
   descBox:'Caixa com 20 unidades',                      priceBox:44.80, qtyBox:20},

  {id:81, name:'Pipoca Yoki Queijo',      emoji:'🍿',cat:'salgadinhos',
   descUnit:'Pipoca pronta queijo 50g — unidade',        priceUnit:2.80,
   descBox:'Caixa com 20 unidades',                      priceBox:44.80, qtyBox:20},

  {id:82, name:'Pipoca Microondas Yoki Manteiga',emoji:'🍿',cat:'salgadinhos',
   descUnit:'Pipoca microondas manteiga 100g — pacote',  priceUnit:3.60,
   descBox:'Caixa com 12 pacotes',                       priceBox:34.56, qtyBox:12},

  {id:83, name:'Pipoca Microondas Yoki Ervas',emoji:'🍿',cat:'salgadinhos',
   descUnit:'Pipoca microondas ervas 100g — pacote',     priceUnit:3.60,
   descBox:'Caixa com 12 pacotes',                       priceBox:34.56, qtyBox:12},

  // — Pepsico Mix
  {id:84, name:'Baconzitos',              emoji:'🥓',cat:'salgadinhos',
   descUnit:'Baconzitos snack bacon 67g — unidade',      priceUnit:4.80,
   descBox:'Caixa com 15 unidades',                      priceBox:57.60, qtyBox:15},

  {id:85, name:'Twistos Original',        emoji:'🌀',cat:'salgadinhos',
   descUnit:'Twistos original 55g — unidade',            priceUnit:4.00,
   descBox:'Caixa com 18 unidades',                      priceBox:57.60, qtyBox:18},

  {id:86, name:'Twistos Queijo',          emoji:'🧀',cat:'salgadinhos',
   descUnit:'Twistos queijo 55g — unidade',              priceUnit:4.00,
   descBox:'Caixa com 18 unidades',                      priceBox:57.60, qtyBox:18},

  // — Lucky / Marilan
  {id:87, name:'Lucky Churrasco',         emoji:'🔥',cat:'salgadinhos',
   descUnit:'Lucky churrasco 60g — unidade',             priceUnit:3.20,
   descBox:'Caixa com 20 unidades',                      priceBox:51.20, qtyBox:20},

  {id:88, name:'Lucky Queijo',            emoji:'🧀',cat:'salgadinhos',
   descUnit:'Lucky queijo 60g — unidade',                priceUnit:3.20,
   descBox:'Caixa com 20 unidades',                      priceBox:51.20, qtyBox:20},

  // — Pringles
  {id:89, name:'Pringles Original',       emoji:'🥫',cat:'salgadinhos',badge:'Premium',
   descUnit:'Pringles original 114g — lata',             priceUnit:14.40,
   descBox:'Caixa com 12 latas',                         priceBox:138.24,qtyBox:12},

  {id:90, name:'Pringles Creme & Cebola', emoji:'🥫',cat:'salgadinhos',
   descUnit:'Pringles cream & onion 114g — lata',        priceUnit:14.40,
   descBox:'Caixa com 12 latas',                         priceBox:138.24,qtyBox:12},

  {id:91, name:'Pringles Pizza',          emoji:'🍕',cat:'salgadinhos',
   descUnit:'Pringles pizza 114g — lata',                priceUnit:14.40,
   descBox:'Caixa com 12 latas',                         priceBox:138.24,qtyBox:12},

  {id:92, name:'Pringles BBQ',            emoji:'🔥',cat:'salgadinhos',
   descUnit:'Pringles BBQ 114g — lata',                  priceUnit:14.40,
   descBox:'Caixa com 12 latas',                         priceBox:138.24,qtyBox:12},

  // ══════════════════════════════════════════════════════════════
  // BEBIDAS
  // ══════════════════════════════════════════════════════════════

  // — Coca-Cola
  {id:93,  name:'Coca-Cola Original 350ml',  emoji:'🥤',cat:'bebidas',badge:'Clássico',
   descUnit:'Coca-Cola lata 350ml — unidade',            priceUnit:3.60,
   descBox:'Fardo com 12 latas',                         priceBox:34.56, qtyBox:12},

  {id:94,  name:'Coca-Cola Original 600ml',  emoji:'🥤',cat:'bebidas',
   descUnit:'Coca-Cola garrafa 600ml — unidade',         priceUnit:4.80,
   descBox:'Fardo com 12 garrafas',                      priceBox:46.08, qtyBox:12},

  {id:95,  name:'Coca-Cola Original 1L',     emoji:'🥤',cat:'bebidas',
   descUnit:'Coca-Cola garrafa 1L — unidade',            priceUnit:6.40,
   descBox:'Fardo com 6 garrafas',                       priceBox:30.72, qtyBox:6},

  {id:96,  name:'Coca-Cola Original 2L',     emoji:'🥤',cat:'bebidas',badge:'Família',
   descUnit:'Coca-Cola garrafa 2L — unidade',            priceUnit:7.90,
   descBox:'Fardo com 6 garrafas',                       priceBox:37.44, qtyBox:6},

  {id:97,  name:'Coca-Cola Zero 350ml',      emoji:'⚫',cat:'bebidas',
   descUnit:'Coca-Cola Zero lata 350ml — unidade',       priceUnit:3.60,
   descBox:'Fardo com 12 latas',                         priceBox:34.56, qtyBox:12},

  {id:98,  name:'Coca-Cola Zero 2L',         emoji:'⚫',cat:'bebidas',
   descUnit:'Coca-Cola Zero garrafa 2L — unidade',       priceUnit:7.90,
   descBox:'Fardo com 6 garrafas',                       priceBox:37.44, qtyBox:6},

  // — Guaraná Antarctica
  {id:99,  name:'Guaraná Antarctica 350ml',  emoji:'🟢',cat:'bebidas',
   descUnit:'Guaraná Antarctica lata 350ml — unidade',   priceUnit:3.20,
   descBox:'Fardo com 12 latas',                         priceBox:30.72, qtyBox:12},

  {id:100, name:'Guaraná Antarctica 2L',     emoji:'🟢',cat:'bebidas',badge:'Família',
   descUnit:'Guaraná Antarctica garrafa 2L — unidade',   priceUnit:7.20,
   descBox:'Fardo com 6 garrafas',                       priceBox:34.56, qtyBox:6},

  {id:101, name:'Guaraná Antarctica Zero 2L',emoji:'🟢',cat:'bebidas',
   descUnit:'Guaraná Zero garrafa 2L — unidade',         priceUnit:7.20,
   descBox:'Fardo com 6 garrafas',                       priceBox:34.56, qtyBox:6},

  // — Fanta
  {id:102, name:'Fanta Laranja 350ml',       emoji:'🟠',cat:'bebidas',
   descUnit:'Fanta laranja lata 350ml — unidade',        priceUnit:3.20,
   descBox:'Fardo com 12 latas',                         priceBox:30.72, qtyBox:12},

  {id:103, name:'Fanta Uva 350ml',           emoji:'🟣',cat:'bebidas',
   descUnit:'Fanta uva lata 350ml — unidade',            priceUnit:3.20,
   descBox:'Fardo com 12 latas',                         priceBox:30.72, qtyBox:12},

  {id:104, name:'Fanta Laranja 2L',          emoji:'🟠',cat:'bebidas',
   descUnit:'Fanta laranja garrafa 2L — unidade',        priceUnit:7.20,
   descBox:'Fardo com 6 garrafas',                       priceBox:34.56, qtyBox:6},

  // — Sprite
  {id:105, name:'Sprite Original 350ml',     emoji:'🟡',cat:'bebidas',
   descUnit:'Sprite lata 350ml — unidade',               priceUnit:3.20,
   descBox:'Fardo com 12 latas',                         priceBox:30.72, qtyBox:12},

  {id:106, name:'Sprite Original 2L',        emoji:'🟡',cat:'bebidas',
   descUnit:'Sprite garrafa 2L — unidade',               priceUnit:7.20,
   descBox:'Fardo com 6 garrafas',                       priceBox:34.56, qtyBox:6},

  // — Pepsi
  {id:107, name:'Pepsi Cola 350ml',          emoji:'🔵',cat:'bebidas',
   descUnit:'Pepsi lata 350ml — unidade',                priceUnit:3.20,
   descBox:'Fardo com 12 latas',                         priceBox:30.72, qtyBox:12},

  {id:108, name:'Pepsi Cola 2L',             emoji:'🔵',cat:'bebidas',
   descUnit:'Pepsi garrafa 2L — unidade',                priceUnit:7.20,
   descBox:'Fardo com 6 garrafas',                       priceBox:34.56, qtyBox:6},

  // — H2OH!
  {id:109, name:'H2OH! Limão 500ml',         emoji:'💧',cat:'bebidas',
   descUnit:'H2OH limão garrafa 500ml — unidade',        priceUnit:4.80,
   descBox:'Fardo com 12 garrafas',                      priceBox:46.08, qtyBox:12},

  {id:110, name:'H2OH! Tangerina 500ml',     emoji:'💧',cat:'bebidas',
   descUnit:'H2OH tangerina garrafa 500ml — unidade',    priceUnit:4.80,
   descBox:'Fardo com 12 garrafas',                      priceBox:46.08, qtyBox:12},

  // — Schweppes
  {id:111, name:'Schweppes Tônica 350ml',    emoji:'🫧',cat:'bebidas',
   descUnit:'Schweppes tônica lata 350ml — unidade',     priceUnit:4.00,
   descBox:'Fardo com 12 latas',                         priceBox:38.40, qtyBox:12},

  {id:112, name:'Schweppes Limão 350ml',     emoji:'🍋',cat:'bebidas',
   descUnit:'Schweppes citrus lata 350ml — unidade',     priceUnit:4.00,
   descBox:'Fardo com 12 latas',                         priceBox:38.40, qtyBox:12},

  {id:113, name:'Schweppes Grapefruit 350ml',emoji:'🩷',cat:'bebidas',
   descUnit:'Schweppes grapefruit lata 350ml — unidade', priceUnit:4.00,
   descBox:'Fardo com 12 latas',                         priceBox:38.40, qtyBox:12},

  // — Sucos Del Valle
  {id:114, name:'Del Valle Uva 1L',          emoji:'🍇',cat:'bebidas',
   descUnit:'Suco Del Valle uva 1L — unidade',           priceUnit:6.00,
   descBox:'Caixa com 6 unidades',                       priceBox:28.80, qtyBox:6},

  {id:115, name:'Del Valle Laranja 1L',      emoji:'🍊',cat:'bebidas',
   descUnit:'Suco Del Valle laranja 1L — unidade',       priceUnit:6.00,
   descBox:'Caixa com 6 unidades',                       priceBox:28.80, qtyBox:6},

  {id:116, name:'Del Valle Maracujá 1L',     emoji:'🟡',cat:'bebidas',
   descUnit:'Suco Del Valle maracujá 1L — unidade',      priceUnit:6.00,
   descBox:'Caixa com 6 unidades',                       priceBox:28.80, qtyBox:6},

  {id:117, name:'Del Valle Pêssego 200ml',   emoji:'🍑',cat:'bebidas',
   descUnit:'Del Valle pêssego caixinha 200ml — unidade',priceUnit:2.40,
   descBox:'Caixa com 24 unidades',                      priceBox:46.08, qtyBox:24},

  {id:118, name:'Del Valle Manga 200ml',     emoji:'🥭',cat:'bebidas',
   descUnit:'Del Valle manga caixinha 200ml — unidade',  priceUnit:2.40,
   descBox:'Caixa com 24 unidades',                      priceBox:46.08, qtyBox:24},

  // — Minute Maid
  {id:119, name:'Minute Maid Laranja 1L',    emoji:'🍊',cat:'bebidas',
   descUnit:'Minute Maid laranja 1L — unidade',          priceUnit:6.40,
   descBox:'Caixa com 6 unidades',                       priceBox:30.72, qtyBox:6},

  {id:120, name:'Minute Maid Limão 1L',      emoji:'🍋',cat:'bebidas',
   descUnit:'Minute Maid limonada 1L — unidade',         priceUnit:6.40,
   descBox:'Caixa com 6 unidades',                       priceBox:30.72, qtyBox:6},

  // — Água
  {id:121, name:'Água Crystal s/ Gás 500ml', emoji:'💧',cat:'bebidas',
   descUnit:'Água mineral Crystal 500ml — garrafa',      priceUnit:1.60,
   descBox:'Pack com 12 garrafas',                       priceBox:15.36, qtyBox:12},

  {id:122, name:'Água Crystal c/ Gás 500ml', emoji:'🫧',cat:'bebidas',
   descUnit:'Água com gás Crystal 500ml — garrafa',      priceUnit:2.40,
   descBox:'Pack com 12 garrafas',                       priceBox:23.04, qtyBox:12},

  {id:123, name:'Água Minalba 1,5L',         emoji:'💧',cat:'bebidas',
   descUnit:'Água Minalba s/ gás 1,5L — garrafa',        priceUnit:3.20,
   descBox:'Pack com 6 garrafas',                        priceBox:15.36, qtyBox:6},

  {id:124, name:'Água Ouro Fino 500ml',      emoji:'💧',cat:'bebidas',
   descUnit:'Água mineral Ouro Fino 500ml — garrafa',    priceUnit:1.60,
   descBox:'Pack com 12 garrafas',                       priceBox:15.36, qtyBox:12},

  // — Energéticos
  {id:125, name:'Red Bull Original 250ml',   emoji:'⚡',cat:'bebidas',badge:'Energia',
   descUnit:'Red Bull energético 250ml — lata',          priceUnit:9.60,
   descBox:'Caixa com 12 latas',                         priceBox:92.16, qtyBox:12},

  {id:126, name:'Red Bull Sugar Free 250ml', emoji:'⚡',cat:'bebidas',
   descUnit:'Red Bull sugar free 250ml — lata',          priceUnit:9.60,
   descBox:'Caixa com 12 latas',                         priceBox:92.16, qtyBox:12},

  {id:127, name:'Monster Energy Original',   emoji:'🟢',cat:'bebidas',badge:'Energia',
   descUnit:'Monster original 473ml — lata',             priceUnit:9.60,
   descBox:'Caixa com 12 latas',                         priceBox:92.16, qtyBox:12},

  {id:128, name:'Monster Energy Zero',       emoji:'⚫',cat:'bebidas',
   descUnit:'Monster zero açúcar 473ml — lata',          priceUnit:9.60,
   descBox:'Caixa com 12 latas',                         priceBox:92.16, qtyBox:12},

  {id:129, name:'TNT Energy 269ml',          emoji:'💥',cat:'bebidas',
   descUnit:'TNT energético 269ml — lata',               priceUnit:4.80,
   descBox:'Caixa com 12 latas',                         priceBox:46.08, qtyBox:12},

  {id:130, name:'Flash Power 2L',            emoji:'⚡',cat:'bebidas',
   descUnit:'Flash Power energético 2L — garrafa',       priceUnit:6.40,
   descBox:'Fardo com 6 garrafas',                       priceBox:30.72, qtyBox:6},

  // — Isotônicos
  {id:131, name:'Gatorade Limão 500ml',      emoji:'🟡',cat:'bebidas',
   descUnit:'Gatorade limão 500ml — garrafa',            priceUnit:5.60,
   descBox:'Fardo com 12 garrafas',                      priceBox:53.76, qtyBox:12},

  {id:132, name:'Gatorade Laranja 500ml',    emoji:'🟠',cat:'bebidas',
   descUnit:'Gatorade laranja 500ml — garrafa',          priceUnit:5.60,
   descBox:'Fardo com 12 garrafas',                      priceBox:53.76, qtyBox:12},

  {id:133, name:'Gatorade Uva 500ml',        emoji:'🟣',cat:'bebidas',
   descUnit:'Gatorade uva 500ml — garrafa',              priceUnit:5.60,
   descBox:'Fardo com 12 garrafas',                      priceBox:53.76, qtyBox:12},

  {id:134, name:'Powerade Limão 500ml',      emoji:'🔵',cat:'bebidas',
   descUnit:'Powerade limão 500ml — garrafa',            priceUnit:5.60,
   descBox:'Fardo com 12 garrafas',                      priceBox:53.76, qtyBox:12},

  // — Achocolatados / Lácteos
  {id:135, name:'Nescau 200ml',              emoji:'🍫',cat:'bebidas',
   descUnit:'Nescau achocolatado 200ml — caixinha',      priceUnit:2.40,
   descBox:'Caixa com 24 unidades',                      priceBox:46.08, qtyBox:24},

  {id:136, name:'Toddynho 200ml',            emoji:'🍫',cat:'bebidas',badge:'Kids',
   descUnit:'Toddynho achocolatado 200ml — caixinha',    priceUnit:2.40,
   descBox:'Caixa com 24 unidades',                      priceBox:46.08, qtyBox:24},

  {id:137, name:'Danoninho p/ Beber 100ml',  emoji:'🍓',cat:'bebidas',
   descUnit:'Danoninho bebida 100ml — unidade',          priceUnit:3.20,
   descBox:'Caixa com 12 unidades',                      priceBox:30.72, qtyBox:12},

  // — Leite
  {id:138, name:'Leite Integral Longa Vida 1L',emoji:'🥛',cat:'bebidas',
   descUnit:'Leite integral caixa 1L — unidade',         priceUnit:4.40,
   descBox:'Fardo com 12 caixas',                        priceBox:42.24, qtyBox:12},

  {id:139, name:'Leite Desnatado 1L',        emoji:'🥛',cat:'bebidas',
   descUnit:'Leite desnatado caixa 1L — unidade',        priceUnit:4.40,
   descBox:'Fardo com 12 caixas',                        priceBox:42.24, qtyBox:12},

  // — Chás / Iced Tea
  {id:140, name:'Lipton Ice Tea Limão 1,5L', emoji:'🫖',cat:'bebidas',
   descUnit:'Lipton ice tea limão 1,5L — garrafa',       priceUnit:7.20,
   descBox:'Fardo com 6 garrafas',                       priceBox:34.56, qtyBox:6},

  {id:141, name:'Lipton Ice Tea Pêssego 1,5L',emoji:'🫖',cat:'bebidas',
   descUnit:'Lipton ice tea pêssego 1,5L — garrafa',     priceUnit:7.20,
   descBox:'Fardo com 6 garrafas',                       priceBox:34.56, qtyBox:6},

  {id:142, name:'Matte Leão 1,5L',           emoji:'🫖',cat:'bebidas',
   descUnit:'Chá matte pronto Leão 1,5L — garrafa',      priceUnit:6.40,
   descBox:'Fardo com 6 garrafas',                       priceBox:30.72, qtyBox:6},

  // — Cervejas
  {id:143, name:'Brahma Lata 350ml',         emoji:'🍺',cat:'bebidas',badge:'Gelada',
   descUnit:'Brahma pilsen lata 350ml — unidade',        priceUnit:4.00,
   descBox:'Fardo com 12 latas',                         priceBox:38.40, qtyBox:12},

  {id:144, name:'Skol Lata 350ml',           emoji:'🍺',cat:'bebidas',
   descUnit:'Skol pilsen lata 350ml — unidade',          priceUnit:4.00,
   descBox:'Fardo com 12 latas',                         priceBox:38.40, qtyBox:12},

  {id:145, name:'Heineken Lata 350ml',       emoji:'🍺',cat:'bebidas',badge:'Premium',
   descUnit:'Heineken lager lata 350ml — unidade',       priceUnit:6.40,
   descBox:'Fardo com 12 latas',                         priceBox:61.44, qtyBox:12},

  {id:146, name:'Budweiser Lata 350ml',      emoji:'🍺',cat:'bebidas',
   descUnit:'Budweiser lager lata 350ml — unidade',      priceUnit:5.60,
   descBox:'Fardo com 12 latas',                         priceBox:53.76, qtyBox:12},

  {id:147, name:'Corona Extra Garrafa 330ml',emoji:'🍺',cat:'bebidas',badge:'Premium',
   descUnit:'Corona Extra garrafa 330ml — unidade',      priceUnit:7.20,
   descBox:'Caixa com 24 garrafas',                      priceBox:138.24,qtyBox:24},

  {id:148, name:'Stella Artois Lata 350ml',  emoji:'🍺',cat:'bebidas',
   descUnit:'Stella Artois lata 350ml — unidade',        priceUnit:6.40,
   descBox:'Fardo com 12 latas',                         priceBox:61.44, qtyBox:12},

  // — Drinks prontos
  {id:149, name:'Smirnoff Ice 275ml',        emoji:'🍸',cat:'bebidas',
   descUnit:'Smirnoff Ice garrafa 275ml — unidade',      priceUnit:7.20,
   descBox:'Caixa com 24 garrafas',                      priceBox:138.24,qtyBox:24},

  {id:150, name:'Bacardi Breezer Morango 275ml',emoji:'🍹',cat:'bebidas',
   descUnit:'Bacardi Breezer morango 275ml — unidade',   priceUnit:7.20,
   descBox:'Caixa com 24 garrafas',                      priceBox:138.24,qtyBox:24},

];

const mode = {}; products.forEach(p => mode[p.id]='unit');
let cart        = [];
let activecat   = 'todos';
let selPay      = '';
let couponApplied = false;

const COUPON_CODE  = 'MANTOVANI1';
const COUPON_MAX   = 30;
const DELIVERY_FEE = 3.99;

// ── CUPOM ─────────────────────────────────────────────────────
function cpnUsedOnDevice(){ return localStorage.getItem('mant_cpn_used')==='1'; }
function cpnUsesLeft(){ return Math.max(0, COUPON_MAX - parseInt(localStorage.getItem('mant_cpn_count')||'0')); }
function consumeCoupon(){
  localStorage.setItem('mant_cpn_used','1');
  localStorage.setItem('mant_cpn_count', Math.min(parseInt(localStorage.getItem('mant_cpn_count')||'0')+1, COUPON_MAX).toString());
}
function applyCoupon(){
  const input = document.getElementById('couponInput');
  const fb    = document.getElementById('couponFeedback');
  const code  = (input?.value||'').trim().toUpperCase();
  if(code !== COUPON_CODE){
    fb.textContent='Cupom inválido.'; fb.className='cpn-feedback error'; return;
  }
  if(cpnUsedOnDevice()){
    fb.textContent='Este cupom já foi utilizado neste dispositivo.'; fb.className='cpn-feedback error'; return;
  }
  if(cpnUsesLeft()<=0){
    fb.textContent='Cupom esgotado — todas as 30 utilizações foram usadas.'; fb.className='cpn-feedback error'; return;
  }
  couponApplied=true;
  renderCartItems();
}
function removeCoupon(){
  couponApplied=false;
  renderCartItems();
}

function fmt(v){return v.toFixed(2).replace('.',',')}

// ── CATEGORIAS SIDEBAR ───────────────────────────────────────
function buildCats(){
  const el = document.getElementById('catBar');
  // Calcula contagem real por categoria
  CATS.forEach(c => {
    c.count = c.id === 'todos' ? products.length : products.filter(p => p.cat === c.id).length;
  });
  el.innerHTML = CATS.map(c=>`
    <button class="cat-pill${c.id==='todos'?' active':''}" onclick="setCat('${c.id}',this)">
      <span class="cat-pill-emoji">${c.emoji}</span>
      ${c.label}
      <span class="cat-pill-count">${c.count}</span>
    </button>`).join('');
}

function setCat(id,el){
  activecat=id;
  document.querySelectorAll('.cat-pill').forEach(c=>c.classList.remove('active'));
  el.classList.add('active');
  const info = CATS.find(c=>c.id===id);
  document.getElementById('catalogTitle').textContent = id==='todos' ? 'Todos os Produtos' : `${info.emoji} ${info.label}`;
  applyFilters();
}

// ── FILTROS + RENDER ─────────────────────────────────────────
function applyFilters(){
  const q = document.getElementById('searchInput').value.toLowerCase();
  const sort = document.querySelector('.sort-wrap select').value;
  let list = products.filter(p=>{
    const catOk = activecat==='todos' || p.cat===activecat;
    const qOk   = !q || p.name.toLowerCase().includes(q) || p.descUnit.toLowerCase().includes(q);
    return catOk && qOk;
  });
  if(sort==='price_asc')  list.sort((a,b)=>a.priceUnit-b.priceUnit);
  if(sort==='price_desc') list.sort((a,b)=>b.priceUnit-a.priceUnit);
  if(sort==='name')       list.sort((a,b)=>a.name.localeCompare(b.name));
  document.getElementById('catalogSub').textContent = `${list.length} produto${list.length!==1?'s':''} encontrado${list.length!==1?'s':''}`;
  renderGrid(list);
}

// ── URLs DAS IMAGENS DOS PRODUTOS ────────────────────────────
// Cole a URL da imagem entre as aspas de cada produto.
// Exemplo:  19: 'https://site.com/kitkat.jpg',
// Deixe '' para manter o fundo branco enquanto a foto nao estiver pronta.

const IMG = {
  // DOCES
  1:   'images/produtos/1.jpg',   // Sonho de Valsa
  2:   'images/produtos/2.jpg',   // Ouro Branco
  3:   'images/produtos/3.jpg',   // Pirulito POP
  4:   'images/produtos/4.jpg',   // Pirulito Coracao
  5:   'images/produtos/5.jpg',   // Bala de Goma Sortida
  6:   'images/produtos/6.jpg',   // Bala 7 Belo
  7:   'images/produtos/7.jpg',   // Bala Iogurte 100
  8:   'images/produtos/8.jpg',   // Mentos Frutas
  9:   'images/produtos/9.jpg',   // Mentos Menta
  10:  'images/produtos/10.jpg',  // Mentos Morango
  11:  'images/produtos/11.jpg',  // Mentos Tutti-Frutti
  13:  'images/produtos/13.jpg',  // Mentos Watermelon
  14:  'images/produtos/14.jpg',  // Bala Florestal
  15:  'images/produtos/15.jpg',  // Butter Toffees Original
  16:  'images/produtos/16.jpg',  // Butter Toffees Menta
  17:  'images/produtos/17.jpg',  // Butter Toffees Chocolate
  18:  'images/produtos/18.jpg',  // Moranguete
  19:  'images/produtos/19.jpg',  // Kit Kat Original
  20:  'images/produtos/20.jpg',  // Kit Kat Dark
  21:  'images/produtos/21.jpg',  // Kit Kat Branco
  22:  'images/produtos/22.jpg',  // Bis Lacta Chocolate
  23:  'images/produtos/23.jpg',  // Bis Lacta Branco
  24:  'images/produtos/24.jpg',  // Bis Lacta Dark
  25:  'images/produtos/25.jpg',  // Caixa Lacta Sortida
  26:  'images/produtos/26.jpg',  // Caixa Garoto Sortida
  27:  'images/produtos/27.jpg',  // Caixa Nestle Sortida
  28:  'images/produtos/28.jpg',  // Caixa Kopenhagen
  30:  'images/produtos/30.jpg',  // Outros Doces

  // FESTAS
  31:  'images/produtos/31.jpg',  // Balao Latex 9pol Colorido
  32:  'images/produtos/32.jpg',  // Balao Latex 11pol Grande
  33:  'images/produtos/33.jpg',  // Balao Metalizado Redondo
  34:  'images/produtos/34.jpg',  // Balao Metalizado Coracao
  35:  'images/produtos/35.jpg',  // Balao Metalizado Estrela
  36:  'images/produtos/36.jpg',  // Balao Tematico Aniversario
  37:  'images/produtos/37.jpg',  // Confete Colorido
  38:  'images/produtos/38.jpg',  // Serpentina Colorida
  39:  'images/produtos/39.jpg',  // Pistola de Confete
  47:  'images/produtos/47.jpg',  // Copo Plastico 180ml
  48:  'images/produtos/48.jpg',  // Copo Plastico 200ml Transparente
  49:  'images/produtos/49.jpg',  // Copo de Papel Estampado
  50:  'images/produtos/50.jpg',  // Prato Descartavel Branco
  51:  'images/produtos/51.jpg',  // Prato Descartavel Estampado
  52:  'images/produtos/52.jpg',  // Vela de Aniversario Colorida
  53:  'images/produtos/53.jpg',  // Vela Numero (0-9)
  54:  'images/produtos/54.jpg',  // Vela Sparkle Dourada
  55:  'images/produtos/55.jpg',  // Vela Tricks (nao apaga)
  56:  'images/produtos/56.jpg',  // Faixa Feliz Aniversario
  57:  'images/produtos/57.jpg',  // Chapeu de Festa Conical
  58:  'images/produtos/58.jpg',  // Guardanapo Estampado

  // SALGADINHOS
  61:  'images/produtos/61.jpg',  // Elma Chips Onda Original
  62:  'images/produtos/62.jpg',  // Elma Chips Onda Cheddar
  63:  'images/produtos/63.jpg',  // Elma Chips Onda Picanha
  64:  'images/produtos/64.jpg',  // Elma Chips Forno Original
  65:  'images/produtos/65.jpg',  // Elma Chips Forno Mostarda
  66:  'images/produtos/66.jpg',  // Ruffles Original
  67:  'images/produtos/67.jpg',  // Ruffles Cheddar
  68:  'images/produtos/68.jpg',  // Ruffles Churrasco
  69:  'images/produtos/69.jpg',  // Cheetos Anel Requeijao
  70:  'images/produtos/70.jpg',  // Cheetos Crunchy Queijo
  71:  'images/produtos/71.jpg',  // Cheetos Crunchy Flamin Hot
  72:  'images/produtos/72.jpg',  // Doritos Nacho Cheese
  73:  'images/produtos/73.jpg',  // Doritos Churrasco
  74:  'images/produtos/74.jpg',  // Doritos Queijo Picante
  75:  'images/produtos/75.jpg',  // Forno de Minas Palha Italiana
  76:  'images/produtos/76.jpg',  // Lobito Original
  77:  'images/produtos/77.jpg',  // Fofura Milho
  78:  'images/produtos/78.jpg',  // Ebicem Camarao
  79:  'images/produtos/79.jpg',  // Pipoca Yoki Salgada
  80:  'images/produtos/80.jpg',  // Pipoca Yoki Manteiga
  81:  'images/produtos/81.jpg',  // Pipoca Yoki Queijo
  82:  'images/produtos/82.jpg',  // Pipoca Microondas Yoki Manteiga
  83:  'images/produtos/83.jpg',  // Pipoca Microondas Yoki Ervas
  84:  'images/produtos/84.jpg',  // Baconzitos
  85:  'images/produtos/85.jpg',  // Twistos Original
  86:  'images/produtos/86.jpg',  // Twistos Queijo
  87:  'images/produtos/87.jpg',  // Lucky Churrasco
  88:  'images/produtos/88.jpg',  // Lucky Queijo
  89:  'images/produtos/89.jpg',  // Pringles Original
  90:  'images/produtos/90.jpg',  // Pringles Creme e Cebola
  91:  'images/produtos/91.jpg',  // Pringles Pizza
  92:  'images/produtos/92.jpg',  // Pringles BBQ

  // BEBIDAS
  93:  'images/produtos/93.jpg',  // Coca-Cola Original 350ml
  94:  'images/produtos/94.jpg',  // Coca-Cola Original 600ml
  95:  'images/produtos/95.jpg',  // Coca-Cola Original 1L
  96:  'images/produtos/96.jpg',  // Coca-Cola Original 2L
  97:  'images/produtos/97.jpg',  // Coca-Cola Zero 350ml
  98:  'images/produtos/98.jpg',  // Coca-Cola Zero 2L
  99:  'images/produtos/99.jpg',  // Guarana Antarctica 350ml
  100: 'images/produtos/100.jpg', // Guarana Antarctica 2L
  101: 'images/produtos/101.jpg', // Guarana Antarctica Zero 2L
  102: 'images/produtos/102.jpg', // Fanta Laranja 350ml
  103: 'images/produtos/103.jpg', // Fanta Uva 350ml
  104: 'images/produtos/104.jpg', // Fanta Laranja 2L
  105: 'images/produtos/105.jpg', // Sprite Original 350ml
  106: 'images/produtos/106.jpg', // Sprite Original 2L
  107: 'images/produtos/107.jpg', // Pepsi Cola 350ml
  108: 'images/produtos/108.jpg', // Pepsi Cola 2L
  109: 'images/produtos/109.jpg', // H2OH Limao 500ml
  110: 'images/produtos/110.jpg', // H2OH Tangerina 500ml
  111: 'images/produtos/111.jpg', // Schweppes Tonica 350ml
  112: 'images/produtos/112.jpg', // Schweppes Limao 350ml
  113: 'images/produtos/113.jpg', // Schweppes Grapefruit 350ml
  114: 'images/produtos/114.jpg', // Del Valle Uva 1L
  115: 'images/produtos/115.jpg', // Del Valle Laranja 1L
  116: 'images/produtos/116.jpg', // Del Valle Maracuja 1L
  117: 'images/produtos/117.jpg', // Del Valle Pessego 200ml
  118: 'images/produtos/118.jpg', // Del Valle Manga 200ml
  119: 'images/produtos/119.jpg', // Minute Maid Laranja 1L
  120: 'images/produtos/120.jpg', // Minute Maid Limao 1L
  121: 'images/produtos/121.jpg', // Agua Crystal sem Gas 500ml
  122: 'images/produtos/122.jpg', // Agua Crystal com Gas 500ml
  123: 'images/produtos/123.jpg', // Agua Minalba 1,5L
  124: 'images/produtos/124.jpg', // Agua Ouro Fino 500ml
  125: 'images/produtos/125.jpg', // Red Bull Original 250ml
  126: 'images/produtos/126.jpg', // Red Bull Sugar Free 250ml
  127: 'images/produtos/127.jpg', // Monster Energy Original
  128: 'images/produtos/128.jpg', // Monster Energy Zero
  129: 'images/produtos/129.jpg', // TNT Energy 269ml
  130: 'images/produtos/130.jpg', // Flash Power 2L
  131: 'images/produtos/131.jpg', // Gatorade Limao 500ml
  132: 'images/produtos/132.jpg', // Gatorade Laranja 500ml
  133: 'images/produtos/133.jpg', // Gatorade Uva 500ml
  134: 'images/produtos/134.jpg', // Powerade Limao 500ml
  135: 'images/produtos/135.jpg', // Nescau 200ml
  136: 'images/produtos/136.jpg', // Toddynho 200ml
  137: 'images/produtos/137.jpg', // Danoninho para Beber 100ml
  138: 'images/produtos/138.jpg', // Leite Integral Longa Vida 1L
  139: 'images/produtos/139.jpg', // Leite Desnatado 1L
  140: 'images/produtos/140.jpg', // Lipton Ice Tea Limao 1,5L
  141: 'images/produtos/141.jpg', // Lipton Ice Tea Pessego 1,5L
  142: 'images/produtos/142.jpg', // Matte Leao 1,5L
  143: 'images/produtos/143.jpg', // Brahma Lata 350ml
  144: 'images/produtos/144.jpg', // Skol Lata 350ml
  145: 'images/produtos/145.jpg', // Heineken Lata 350ml
  146: 'images/produtos/146.jpg', // Budweiser Lata 350ml
  147: 'images/produtos/147.jpg', // Corona Extra Garrafa 330ml
  148: 'images/produtos/148.jpg', // Stella Artois Lata 350ml
  149: 'images/produtos/149.jpg', // Smirnoff Ice 275ml
  150: 'images/produtos/150.jpg', // Bacardi Breezer Morango 275ml
};


function renderGrid(list){
  const g = document.getElementById('productsGrid');
  if(!list.length){
    g.innerHTML='<p style="color:var(--sub);font-weight:600;grid-column:1/-1;text-align:center;padding:48px 0;font-size:.9rem">Nenhum produto encontrado 😕</p>';
    return;
  }
  g.innerHTML = list.map(p=>{
    const isBox  = mode[p.id]==='box';
    const price  = isBox ? p.priceBox : p.priceUnit;
    const desc   = isBox ? p.descBox  : p.descUnit;
    const saving = isBox ? `Economize R$ ${fmt(p.priceUnit*p.qtyBox - p.priceBox)}` : '';
    const url     = IMG[p.id];
    const ph      = '<span class="pcard-img-ph"><svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="6" y="10" width="36" height="28" rx="4" stroke="#D1D5DB" stroke-width="2"/><circle cx="17" cy="20" r="3" stroke="#D1D5DB" stroke-width="2"/><path d="M6 32l10-8 8 7 6-5 12 9" stroke="#D1D5DB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span>';
    const imgHtml = url
      ? `<img
          src="${url}"
          alt="${p.name}"
          loading="lazy"
          onload="this.classList.add('loaded');this.closest('.pcard-img').classList.add('img-ok')"
          onerror="this.style.display='none';this.nextElementSibling.style.removeProperty('display');this.closest('.pcard-img').classList.add('img-err')"
          style="width:100%;height:100%;object-fit:contain;padding:10px;position:absolute;inset:0"
        >${ph}`
      : ph;
    return `<div class="pcard" id="pc-${p.id}">
      <div class="pcard-img ${PB[p.cat]||''}" style="position:relative;overflow:hidden">
        ${p.badge?`<div class="pcard-badge">${p.badge}</div>`:''}
        ${imgHtml}
      </div>
      <div class="pcard-body">
        <div class="pcard-name">${p.name}</div>
        <div class="toggle-wrap">
          <button class="${!isBox?'on':''}" onclick="setMode(${p.id},'unit')">🔹 Unidade</button>
          <button class="${isBox?'on':''}"  onclick="setMode(${p.id},'box')">📦 Caixa</button>
        </div>
        <div class="pcard-desc" id="desc-${p.id}">${desc}</div>
        <div class="pcard-foot">
          <div>
            <div class="price-main" id="price-${p.id}">R$ ${fmt(price)}</div>
            <div class="price-tag"  id="ptag-${p.id}">${isBox?'caixa fechada':'por unidade'}</div>
            <div class="price-save" id="psave-${p.id}" style="display:${saving?'inline-block':'none'}">${saving}</div>
          </div>
          <button class="add-btn" id="abtn-${p.id}" onclick="addItem(${p.id})">+</button>
        </div>
      </div>
    </div>`;
  }).join('');

}

function setMode(id,m){
  mode[id]=m;
  const p=products.find(x=>x.id===id);
  const isBox=m==='box';
  const price=isBox?p.priceBox:p.priceUnit;
  const desc =isBox?p.descBox :p.descUnit;
  const saving=isBox?`Economize R$ ${fmt(p.priceUnit*p.qtyBox - p.priceBox)}`:'';
  const card=document.getElementById(`pc-${id}`);
  if(!card)return;
  card.querySelectorAll('.toggle-wrap button').forEach((b,i)=>{b.classList.toggle('on',(i===0&&!isBox)||(i===1&&isBox))});
  document.getElementById(`desc-${id}`).textContent=desc;
  document.getElementById(`price-${id}`).textContent=`R$ ${fmt(price)}`;
  document.getElementById(`ptag-${id}`).textContent=isBox?'caixa fechada':'por unidade';
  const sv=document.getElementById(`psave-${id}`);
  sv.textContent=saving; sv.style.display=saving?'inline-block':'none';
}

// ── CARRINHO ─────────────────────────────────────────────────
function addItem(id){
  const p=products.find(x=>x.id===id);
  const isBox=mode[id]==='box';
  const price=isBox?p.priceBox:p.priceUnit;
  const label=isBox?`${p.name} (Caixa)`:p.name;
  const cid=`${id}-${isBox?'box':'unit'}`;
  const ex=cart.find(c=>c.cid===cid);
  if(ex)ex.qty++;
  else cart.push({...p,cid,name:label,price,qty:1});
  updateCount();
  toast(`${p.emoji} ${label} adicionado!`);
  const btn=document.getElementById(`abtn-${id}`);
  if(btn){btn.textContent='✓';btn.classList.add('ok');setTimeout(()=>{btn.textContent='+';btn.classList.remove('ok')},700)}
  const card=document.getElementById(`pc-${id}`);
  if(card){card.classList.add('popped');setTimeout(()=>card.classList.remove('popped'),220)}
}

function updateCount(){
  const n=cart.reduce((s,c)=>s+c.qty,0);
  document.getElementById('cartCount').textContent=n;
  document.getElementById('cartCountFab').textContent=n;
  document.getElementById('cartFab').style.display=n>0?'flex':'none';
}

function changeQty(cid,d){
  const i=cart.findIndex(c=>c.cid===cid);
  if(i<0)return;
  cart[i].qty+=d;
  if(cart[i].qty<=0)cart.splice(i,1);
  updateCount(); renderCartItems();
}

function renderCartItems(){
  const ci=document.getElementById('cartItems');
  const tb=document.getElementById('cartTotalBox');
  const bf=document.getElementById('btnFinalizar');
  if(!cart.length){
    ci.innerHTML='<div class="empty-cart"><span class="empty-cart-icon">🛒</span><p style="font-weight:600;color:var(--sub)">Carrinho vazio<br>Adicione produtos para continuar</p></div>';
    tb.style.display='none'; bf.style.display='none';
    couponApplied=false; return;
  }

  const itemsHtml = cart.map(item=>`
    <div class="cart-item">
      <div class="ci-em">${item.emoji}</div>
      <div class="ci-inf">
        <div class="ci-n">${item.name}</div>
        <div class="ci-p">R$ ${fmt(item.price)} cada</div>
      </div>
      <div class="ci-ctrl">
        <button class="q-btn" onclick="changeQty('${item.cid}',-1)">${item.qty===1?'🗑':'−'}</button>
        <span class="q-num">${item.qty}</span>
        <button class="q-btn" onclick="changeQty('${item.cid}',1)">+</button>
      </div>
    </div>`).join('');

  let couponHtml;
  if(couponApplied){
    couponHtml=`<div class="cpn-applied">
      <span>🎉 Cupom <strong>MANTOVANI1</strong> aplicado — Entrega grátis!</span>
      <button class="cpn-remove" onclick="removeCoupon()">Remover</button>
    </div>`;
  } else if(cpnUsedOnDevice()){
    couponHtml=`<div class="cpn-wrap"><p class="cpn-feedback error">Cupom já utilizado neste dispositivo.</p></div>`;
  } else if(cpnUsesLeft()<=0){
    couponHtml=`<div class="cpn-wrap"><p class="cpn-feedback error">Cupom esgotado (30/30 usos).</p></div>`;
  } else {
    couponHtml=`<div class="cpn-wrap">
      <p class="cpn-hint">🎟️ Tem cupom? Restam <strong>${cpnUsesLeft()}</strong> usos</p>
      <div class="cpn-row">
        <input id="couponInput" type="text" placeholder="Digite o cupom" maxlength="20"
               oninput="this.value=this.value.toUpperCase()"
               onkeydown="if(event.key==='Enter')applyCoupon()">
        <button onclick="applyCoupon()">Aplicar</button>
      </div>
      <p class="cpn-feedback" id="couponFeedback"></p>
    </div>`;
  }

  ci.innerHTML = itemsHtml + couponHtml;

  const sub      = cart.reduce((s,c)=>s+c.price*c.qty,0);
  const delivery = couponApplied ? 0 : DELIVERY_FEE;
  document.getElementById('subtotalVal').textContent  = `R$ ${fmt(sub)}`;
  document.getElementById('deliveryVal').textContent  = couponApplied ? '🎉 Grátis' : `R$ ${fmt(DELIVERY_FEE)}`;
  document.getElementById('totalVal').textContent     = `R$ ${fmt(sub+delivery)}`;
  tb.style.display='block'; bf.style.display='flex';
}

// ── MODAL ────────────────────────────────────────────────────
function openCart(){
  document.getElementById('overlay').classList.add('open');
  goCart();
}
function closeCart(){document.getElementById('overlay').classList.remove('open')}
function closeOuter(e){if(e.target===document.getElementById('overlay'))closeCart()}

function goCart(){
  document.getElementById('cartView').style.display='block';
  document.getElementById('formView').classList.remove('vis');
  document.getElementById('successView').classList.remove('vis');
  renderCartItems();
}
function goForm(){
  document.getElementById('cartView').style.display='none';
  document.getElementById('formView').classList.add('vis');
  buildSummary();
}

function buildSummary(){
  const sub      = cart.reduce((s,c)=>s+c.price*c.qty,0);
  const delivery = couponApplied ? 0 : DELIVERY_FEE;
  const couponLine = couponApplied
    ? `<div style="display:flex;justify-content:space-between;font-size:.78rem;font-weight:700;color:#059669;margin-bottom:4px"><span>🎟️ Cupom MANTOVANI1</span><span>−R$ ${fmt(DELIVERY_FEE)}</span></div>`
    : '';
  document.getElementById('summaryBox').innerHTML=`
    <div style="font-size:.78rem;font-weight:700;color:var(--sub);letter-spacing:.05em;text-transform:uppercase;margin-bottom:8px">Resumo do pedido</div>
    ${cart.map(i=>`<div style="display:flex;justify-content:space-between;font-size:.8rem;font-weight:600;margin-bottom:4px"><span>${i.emoji} ${i.name} ×${i.qty}</span><span>R$ ${fmt(i.price*i.qty)}</span></div>`).join('')}
    ${couponLine}
    <div style="display:flex;justify-content:space-between;font-weight:800;font-size:.9rem;border-top:1.5px solid var(--border);margin-top:8px;padding-top:8px"><span>Total (c/ entrega)</span><span style="color:var(--red)">R$ ${fmt(sub+delivery)}</span></div>`;
}

function setPay(v,el){
  selPay=v;
  document.querySelectorAll('.pay-opt').forEach(o=>o.classList.remove('on'));
  el.classList.add('on');
}

function confirmar(){
  const nome=document.getElementById('fNome').value.trim();
  const tel =document.getElementById('fTel').value.trim();
  const end =document.getElementById('fEnd').value.trim();
  const obs =document.getElementById('fObs').value.trim();
  if(!nome||!tel||!end||!selPay){alert('Preencha todos os campos obrigatórios!');return}

  const delivery = couponApplied ? 0 : DELIVERY_FEE;
  const itens=cart.map(i=>`  • ${i.emoji} ${i.name} ×${i.qty} — R$ ${fmt(i.price*i.qty)}`).join('\n');
  const sub=cart.reduce((s,c)=>s+c.price*c.qty,0);
  const pagLabel={pix:'📱 PIX',dinheiro:'💵 Dinheiro',debito:'💳 Débito',credito:'💳 Crédito'};
  const hora=new Date().toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit'});

  const msg=[
    '🛵 *NOVO PEDIDO — Delivery Mantovani*','',
    `👤 *Cliente:* ${nome}`,
    `📱 *Telefone:* ${tel}`,
    `📍 *Endereço:* ${end}${document.getElementById('fComp').value?' — '+document.getElementById('fComp').value:''}`,
    `💳 *Pagamento:* ${pagLabel[selPay]||selPay}`,
    couponApplied ? `🎟️ *Cupom:* MANTOVANI1 — 1ª entrega grátis` : '',
    '','🛒 *Itens:*',itens,'',
    `💰 *Subtotal:* R$ ${fmt(sub)}`,
    couponApplied ? `🚚 *Entrega:* GRÁTIS (cupom MANTOVANI1)` : `🚚 *Entrega:* R$ ${fmt(DELIVERY_FEE)}`,
    `✅ *TOTAL: R$ ${fmt(sub+delivery)}*`,
    obs?`\n📝 *Obs:* ${obs}`:'',
    `\n⏰ *Pedido às ${hora}*`
  ].filter(l=>l!==undefined&&l!=='').join('\n').trim();

  if(couponApplied) consumeCoupon();

  window.open(`https://wa.me/5511988875328?text=${encodeURIComponent(msg)}`,'_blank');

  document.getElementById('formView').classList.remove('vis');
  document.getElementById('successView').classList.add('vis');
  cart=[]; couponApplied=false; updateCount(); selPay='';
}

function openWhatsApp(){
  window.open(`https://wa.me/5511988875328?text=${encodeURIComponent('Olá! Gostaria de fazer um pedido no Delivery Mantovani 🛵')}`,'_blank');
}

function toast(msg){
  const t=document.getElementById('toast');
  t.textContent=msg; t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'),2400);
}

// ── CHAT IA SUPORTE ──────────────────────────────────────────
const AI_ANSWERS = {
  default: [
    'Para dúvidas mais específicas, entre em contato pelo WhatsApp (11) 98887-5328.',
    'Boa pergunta! Posso te ajudar melhor se você chamar no WhatsApp: (11) 98887-5328.',
  ],
  pedido: 'Para fazer um pedido: adicione produtos ao carrinho, clique em "Finalizar Pedido", preencha seu endereço e forma de pagamento. O pedido chega automaticamente no WhatsApp do Mantovani!',
  entrega: 'A taxa de entrega é de R$ 3,99. O tempo médio é de 30 minutos após a confirmação. No primeiro pedido use o cupom MANTOVANI1 e ganhe frete grátis!',
  pagamento: 'Aceitamos PIX, dinheiro, cartão de débito e cartão de crédito. O pagamento é feito na entrega ao motoboy.',
  cancelar: 'Para cancelar, entre em contato pelo WhatsApp (11) 98887-5328 o mais rápido possível. Se o motoboy ainda não saiu, cancelamos sem problema.',
  horario: 'Atendemos de segunda a domingo, das 8h às 22h.',
  cupom: 'Use o cupom MANTOVANI1 no seu primeiro pedido e ganhe a taxa de entrega grátis!',
  whatsapp: 'Nosso WhatsApp é (11) 98887-5328. Você pode chamar direto ou usar o site para fazer o pedido automaticamente.',
};

function getAIAnswer(q){
  const ql = q.toLowerCase();
  if(/pedido|comprar|fazer|como|pedir/.test(ql)) return AI_ANSWERS.pedido;
  if(/entrega|taxa|frete|tempo|minuto|prazo/.test(ql)) return AI_ANSWERS.entrega;
  if(/pag|pix|cartão|dinheiro|forma/.test(ql)) return AI_ANSWERS.pagamento;
  if(/cancel|trocar|troca|devolver|devolução/.test(ql)) return AI_ANSWERS.cancelar;
  if(/hor[aá]rio|funciona|abre|fecha|domingo|sábado/.test(ql)) return AI_ANSWERS.horario;
  if(/cupom|desconto|promoção|grátis|frete/.test(ql)) return AI_ANSWERS.cupom;
  if(/whatsapp|zap|número|contato/.test(ql)) return AI_ANSWERS.whatsapp;
  const rand = AI_ANSWERS.default;
  return rand[Math.floor(Math.random()*rand.length)];
}

function addMsg(text, type){
  const msgs = document.getElementById('aiMessages');
  const typing = document.getElementById('aiTyping');
  const div = document.createElement('div');
  div.className = `ai-msg ${type}`;
  div.textContent = text;
  msgs.insertBefore(div, typing);
  msgs.scrollTop = msgs.scrollHeight;
}

function sendAI(){
  const inp = document.getElementById('aiInput');
  const q = inp.value.trim();
  if(!q) return;
  addMsg(q, 'user');
  inp.value = '';
  const typing = document.getElementById('aiTyping');
  typing.classList.add('show');
  document.getElementById('aiMessages').scrollTop = 9999;
  setTimeout(()=>{
    typing.classList.remove('show');
    addMsg(getAIAnswer(q), 'bot');
  }, 900 + Math.random()*600);
}

function setQuestion(q){
  document.getElementById('aiInput').value = q;
  document.getElementById('suporte').scrollIntoView({behavior:'smooth'});
  setTimeout(sendAI, 400);
}

// ── INIT ─────────────────────────────────────────────────────
buildCats();
applyFilters();
