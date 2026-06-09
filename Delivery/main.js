// ── DADOS ────────────────────────────────────────────────────
const CATS = [
  { id:'todos',   label:'Tudo',    emoji:'🏪', count:0 },
  { id:'bebidas', label:'Bebidas', emoji:'🥤', count:0 },
  { id:'mercado', label:'Mercado', emoji:'🛒', count:0 },
];

const PB = {
  bebidas:'pb-bebidas', mercado:'pb-mercado'
};

const products = [

  // ══════════════════════════════════════════════════════════════
  // MERCADO
  // ══════════════════════════════════════════════════════════════

  {id:151, name:'Macarrão',              emoji:'🍝', cat:'mercado',
   descUnit:'Macarrão espaguete 500g — pacote',            priceUnit:3.90,
   descBox:'Caixa com 12 pacotes',                         priceBox:37.44, qtyBox:12},

  {id:152, name:'Óleo de Soja',          emoji:'🫙', cat:'mercado',
   descUnit:'Óleo de soja 900ml — garrafa',                priceUnit:8.90,
   descBox:'Fardo com 6 garrafas',                         priceBox:42.72, qtyBox:6},

  {id:153, name:'Vinagre',               emoji:'🍶', cat:'mercado',
   descUnit:'Vinagre de álcool 750ml — garrafa',           priceUnit:3.20,
   descBox:'Caixa com 12 garrafas',                        priceBox:30.72, qtyBox:12},

  {id:154, name:'Sal',                   emoji:'🧂', cat:'mercado',
   descUnit:'Sal refinado iodado 1kg — pacote',            priceUnit:2.40,
   descBox:'Fardo com 12 pacotes',                         priceBox:23.04, qtyBox:12},

  {id:155, name:'Tempero Completo',      emoji:'🌿', cat:'mercado',
   descUnit:'Tempero completo Sazon 60g — pacote',         priceUnit:4.80,
   descBox:'Caixa com 12 pacotes',                         priceBox:46.08, qtyBox:12},

  {id:156, name:'Lata de Milho',         emoji:'🌽', cat:'mercado',
   descUnit:'Milho verde em lata 200g — unidade',          priceUnit:3.90,
   descBox:'Caixa com 12 unidades',                        priceBox:37.44, qtyBox:12},

  {id:157, name:'Creme de Leite',        emoji:'🥛', cat:'mercado',
   descUnit:'Creme de leite 200g — caixinha',              priceUnit:4.50,
   descBox:'Caixa com 12 unidades',                        priceBox:43.20, qtyBox:12},

  {id:158, name:'Leite Condensado',      emoji:'🍮', cat:'mercado',
   descUnit:'Leite condensado 395g — caixinha',            priceUnit:5.90,
   descBox:'Caixa com 12 unidades',                        priceBox:56.64, qtyBox:12},

  {id:159, name:'Ketchup',               emoji:'🍅', cat:'mercado',
   descUnit:'Ketchup tradicional 397g — squeeze',          priceUnit:7.90,
   descBox:'Caixa com 12 unidades',                        priceBox:75.84, qtyBox:12},

  {id:160, name:'Mostarda',              emoji:'💛', cat:'mercado',
   descUnit:'Mostarda tradicional 260g — squeeze',         priceUnit:5.90,
   descBox:'Caixa com 12 unidades',                        priceBox:56.64, qtyBox:12},

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

const IMG = {

  // MERCADO
  151: 'images/produtos/151.jpg', // Macarrao
  152: 'images/produtos/152.jpg', // Oleo de Soja
  153: 'images/produtos/153.jpg', // Vinagre
  154: 'images/produtos/154.jpg', // Sal
  155: 'images/produtos/155.jpg', // Tempero Completo
  156: 'images/produtos/156.jpg', // Lata de Milho
  157: 'images/produtos/157.jpg', // Creme de Leite
  158: 'images/produtos/158.jpg', // Leite Condensado
  159: 'images/produtos/159.jpg', // Ketchup
  160: 'images/produtos/160.jpg', // Mostarda

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
