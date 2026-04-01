// DATA
let bgmiProducts = [
  {id:1,name:'110 UC Pack',desc:'Perfect for basic items',price:75,oldPrice:90,icon:'💎',img:'assets/uc-pack.png',color:'#fff3e0',cat:'uc',tag:'sale',priority:10,game:'bgmi'},
  {id:2,name:'325 UC Pack',desc:'Mid-range UC bundle',price:380,oldPrice:450,icon:'💎',img:'assets/uc-pack.png',color:'#e3f2fd',cat:'uc',tag:'hot',priority:9,game:'bgmi'},
  {id:3,name:'660 UC Pack',desc:'Best value UC deal',price:730,oldPrice:900,icon:'💎',img:'assets/uc-pack.png',color:'#f3e5f5',cat:'uc',tag:'sale',priority:8,game:'bgmi'},
  {id:4,name:'Royal Pass M21',desc:'All RP rewards unlocked',price:800,oldPrice:1000,icon:'👑',img:'assets/royal-pass.png',color:'#f3e5f5',cat:'royal',tag:'royal',priority:10,game:'bgmi'},
  {id:5,name:'1800 UC Pack',desc:'Premium UC for big buyers',price:1900,oldPrice:2200,icon:'💎',img:'assets/uc-pack.png',color:'#e8f5e9',cat:'uc',tag:'hot',priority:7,game:'bgmi'},
  // {id:6,name:'Legendary Bundle',desc:'Exclusive outfit + effects',price:1200,oldPrice:1600,icon:'🎁',img:'assets/bundle.png',color:'#fff3e0',cat:'bundle',tag:'new',priority:9,game:'bgmi'},
  {id:7,name:'Victory Dance Scene',desc:'Stylish victory animation',price:350,oldPrice:500,icon:'🎬',img:'assets/scene-pack.png',color:'#e3f2fd',cat:'scene',tag:'hot',priority:6,game:'bgmi'},
  {id:8,name:'M416 Glacier Skin',desc:'Ultra rare gun skin',price:600,oldPrice:800,icon:'🔫',img:'assets/gun-skin.png',color:'#fce4ec',cat:'gun',tag:'sale',priority:8,game:'bgmi'},
  {id:9,name:'3060 UC Pack',desc:'Maximum UC value pack',price:3200,oldPrice:3800,icon:'💎',img:'assets/uc-pack.png',color:'#e8f5e9',cat:'uc',tag:'hot',priority:7,game:'bgmi'},
  {id:10,name:'Pharaoh Set',desc:'Rare premium outfit bundle',price:950,oldPrice:1200,icon:'🎁',img:'assets/bundle.png',color:'#fff9c4',cat:'bundle',tag:'new',priority:6,game:'bgmi'},
  {id:11,name:'Kar98k Dragon Skin',desc:'Premium dragon gun skin',price:450,oldPrice:650,icon:'🔫',img:'assets/gun-skin.png',color:'#fce4ec',cat:'gun',tag:'hot',priority:5,game:'bgmi'},
  {id:12,name:'Killing Spree Scene',desc:'Epic kill scene effect',price:280,oldPrice:400,icon:'🎬',img:'assets/scene-pack.png',color:'#e3f2fd',cat:'scene',tag:'sale',priority:5,game:'bgmi'},
  {id:13,name:'M416 Glacier',desc:'Icy finish with clean frost glow.',price:201,oldPrice:260,icon:'🔫',img:'assets/c__Users_ommeh_AppData_Roaming_Cursor_User_workspaceStorage_99a42c47f0f35e00b5ab7b7de2e59838_images_image-0e6b82c6-18f1-4d45-9f73-31a066911a64.png',color:'#e0f2fe',cat:'gun',tag:'hot',priority:9,game:'bgmi'},
  {id:14,name:'AKM Glacier',desc:'Frozen AKM skin with sharp crystal style.',price:201,oldPrice:265,icon:'🔫',img:'assets/c__Users_ommeh_AppData_Roaming_Cursor_User_workspaceStorage_99a42c47f0f35e00b5ab7b7de2e59838_images_image-d4bd01b3-241f-4869-85c7-ea7e0ef277ab.png',color:'#e0f2fe',cat:'gun',tag:'sale',priority:9,game:'bgmi'},
  {id:15,name:'AWM Mauve Avenger',desc:'Purple sniper look with premium vibe.',price:201,oldPrice:270,icon:'🔫',img:'assets/c__Users_ommeh_AppData_Roaming_Cursor_User_workspaceStorage_99a42c47f0f35e00b5ab7b7de2e59838_images_image-bfc224d2-fa6b-4747-9adb-6180327870f3.png',color:'#ede9fe',cat:'gun',tag:'new',priority:8,game:'bgmi'},
  {id:16,name:'Gilded Jade Dragon DP-28',desc:'Gold jade dragon design for DP-28.',price:201,oldPrice:280,icon:'🔫',img:'assets/c__Users_ommeh_AppData_Roaming_Cursor_User_workspaceStorage_99a42c47f0f35e00b5ab7b7de2e59838_images_image-a8cd1f4c-a761-471d-a389-c854020fec30.png',color:'#dcfce7',cat:'gun',tag:'royal',priority:8,game:'bgmi'},
  {id:17,name:'Ryomen Sukuna Groza',desc:'Dark cursed Groza skin inspired by Sukuna.',price:201,oldPrice:290,icon:'🔫',img:'assets/c__Users_ommeh_AppData_Roaming_Cursor_User_workspaceStorage_99a42c47f0f35e00b5ab7b7de2e59838_images_image-57c9ae6f-6fb8-4e83-a95a-7a4e5914ceb1.png',color:'#fee2e2',cat:'gun',tag:'hot',priority:10,game:'bgmi'},
  {id:18,name:'Royal Pass M22',desc:'Complete RP rewards with exclusive items.',price:249,oldPrice:498,icon:'👑',img:'assets/royal-pass.png',color:'#ede9fe',cat:'royal',tag:'royal',priority:10,game:'bgmi'},
  {id:19,name:'Royal Pass M23',desc:'Season pass unlock with instant missions.',price:199,oldPrice:398,icon:'👑',img:'assets/royal-pass.png',color:'#ede9fe',cat:'royal',tag:'sale',priority:9,game:'bgmi'},
  {id:20,name:'Royal Pass M24',desc:'Premium RP track with bonus crate coupons.',price:299,oldPrice:598,icon:'👑',img:'assets/royal-pass.png',color:'#ede9fe',cat:'royal',tag:'hot',priority:9,game:'bgmi'},
  {id:21,name:'Royal Pass M25',desc:'Elite pass access plus extra upgrade rewards.',price:349,oldPrice:698,icon:'👑',img:'assets/royal-pass.png',color:'#ede9fe',cat:'royal',tag:'new',priority:8,game:'bgmi'},
  {id:22,name:'Royal Pass M26',desc:'Latest RP bundle at lowest 50% deal.',price:279,oldPrice:558,icon:'👑',img:'assets/royal-pass.png',color:'#ede9fe',cat:'royal',tag:'royal',priority:10,game:'bgmi'},
  {id:23,name:'245 UC Pack',desc:'Starter UC top-up at flat 50% discount.',price:120,oldPrice:240,icon:'💎',img:'assets/uc-pack.png',color:'#fff3e0',cat:'uc',tag:'sale',priority:10,game:'bgmi'},
  {id:24,name:'355 UC Pack',desc:'Popular UC bundle with 50% off deal.',price:175,oldPrice:350,icon:'💎',img:'assets/uc-pack.png',color:'#fff3e0',cat:'uc',tag:'hot',priority:10,game:'bgmi'},
  {id:25,name:'500 UC Pack',desc:'Mid UC refill at exact half price.',price:250,oldPrice:500,icon:'💎',img:'assets/uc-pack.png',color:'#fff3e0',cat:'uc',tag:'sale',priority:9,game:'bgmi'},
  {id:26,name:'720 UC Pack',desc:'More UC value with 50% instant discount.',price:360,oldPrice:720,icon:'💎',img:'assets/uc-pack.png',color:'#fff3e0',cat:'uc',tag:'hot',priority:9,game:'bgmi'},
  {id:27,name:'840 UC Pack',desc:'Higher UC stock-up at half price.',price:420,oldPrice:840,icon:'💎',img:'assets/uc-pack.png',color:'#fff3e0',cat:'uc',tag:'sale',priority:8,game:'bgmi'},
  {id:28,name:'960 UC Pack',desc:'Smart UC purchase with 50% savings.',price:480,oldPrice:960,icon:'💎',img:'assets/uc-pack.png',color:'#fff3e0',cat:'uc',tag:'hot',priority:8,game:'bgmi'},
  {id:29,name:'1200 UC Pack',desc:'Premium UC combo at 50% off.',price:600,oldPrice:1200,icon:'💎',img:'assets/uc-pack.png',color:'#fff3e0',cat:'uc',tag:'sale',priority:8,game:'bgmi'},
  {id:30,name:'1500 UC Pack',desc:'Big UC top-up with half-price cut.',price:750,oldPrice:1500,icon:'💎',img:'assets/uc-pack.png',color:'#fff3e0',cat:'uc',tag:'hot',priority:7,game:'bgmi'},
  {id:31,name:'1800 UC Pack',desc:'Heavy UC bundle at exact 50% discount.',price:900,oldPrice:1800,icon:'💎',img:'assets/uc-pack.png',color:'#fff3e0',cat:'uc',tag:'sale',priority:7,game:'bgmi'},
  {id:32,name:'2450 UC Pack',desc:'Mega UC offer with massive half-price deal.',price:1225,oldPrice:2450,icon:'💎',img:'assets/uc-pack.png',color:'#fff3e0',cat:'uc',tag:'hot',priority:7,game:'bgmi'},
];

let ffProducts = [
  {id:50,name:'100 Diamonds',desc:'Starter diamond pack',price:80,oldPrice:100,icon:'💎',img:'assets/ff-diamond.png',color:'#ffe4e6',cat:'ffdiamond',tag:'ff',priority:10,game:'ff'},
  {id:51,name:'310 Diamonds',desc:'Popular diamond bundle',price:240,oldPrice:280,icon:'💎',img:'assets/ff-diamond.png',color:'#ffe4e6',cat:'ffdiamond',tag:'hot',priority:9,game:'ff'},
  {id:52,name:'520 Diamonds',desc:'Mid-range diamond pack',price:390,oldPrice:450,icon:'💎',img:'assets/ff-diamond.png',color:'#fce7f3',cat:'ffdiamond',tag:'sale',priority:8,game:'ff'},
  {id:53,name:'1060 Diamonds',desc:'Best value FF diamonds',price:780,oldPrice:900,icon:'💎',img:'assets/ff-diamond.png',color:'#ffe4e6',cat:'ffdiamond',tag:'ff',priority:10,game:'ff'},
  {id:54,name:'2180 Diamonds',desc:'Premium diamond bundle',price:1580,oldPrice:1800,icon:'💎',img:'assets/ff-diamond.png',color:'#fce7f3',cat:'ffdiamond',tag:'hot',priority:8,game:'ff'},
  {id:55,name:'5600 Diamonds',desc:'Max diamond mega pack',price:3900,oldPrice:4500,icon:'💎',img:'assets/ff-diamond.png',color:'#ffe4e6',cat:'ffdiamond',tag:'sale',priority:7,game:'ff'},
  {id:56,name:'Elite Pass',desc:'FF Elite Pass full season',price:480,oldPrice:600,icon:'👑',img:'assets/ff-pass.png',color:'#fce7f3',cat:'ffpass',tag:'royal',priority:9,game:'ff'},
  {id:57,name:'Elite Pass Plus',desc:'Elite Pass + 60 levels',price:1200,oldPrice:1500,icon:'👑',img:'assets/ff-pass.png',color:'#ffe4e6',cat:'ffpass',tag:'hot',priority:8,game:'ff'},
  {id:58,name:'Alchemy Bundle',desc:'Exclusive FF outfit set',price:750,oldPrice:950,icon:'🎁',img:'assets/ff-bundle.png',color:'#fce7f3',cat:'ffbundle',tag:'new',priority:7,game:'ff'},
  {id:59,name:'Shinobi Bundle',desc:'Premium ninja outfit',price:900,oldPrice:1100,icon:'🎁',img:'assets/ff-bundle.png',color:'#ffe4e6',cat:'ffbundle',tag:'ff',priority:6,game:'ff'},
  {id:60,name:'MP40 Inferno Skin',desc:'Legendary FF gun skin',price:550,oldPrice:700,icon:'🔫',img:'assets/ff-gun.png',color:'#fce7f3',cat:'ffgun',tag:'hot',priority:7,game:'ff'},
  {id:61,name:'AWM Cupid Skin',desc:'Rare cupid gun skin',price:480,oldPrice:600,icon:'🔫',img:'assets/ff-gun.png',color:'#ffe4e6',cat:'ffgun',tag:'sale',priority:5,game:'ff'},
];

let nextId = 200;
let currentProduct = null;
let selectedColor = '#fff3e0';
let selectedTag = 'sale';
let currentCatBgmi = 'all';
let currentCatFf = 'all';
let currentGame = 'bgmi';
let adminGame = 'bgmi';
let uploadedImgData = '';
let uploadedImgFile = null;

const ORDERS_KEY = 'bgmi_orders';
const SPINNER_SETTINGS_KEY = 'bgmi_spinner_settings_v2';
const SPINNER_USER_KEY = 'bgmi_spinner_user_v2';
const PRODUCTS_KEY = 'bgmi_products_v2';
const UI_STATE_KEY = 'bgmi_ui_state_v2';
const ADMIN_PASSWORD_HASH_KEY = 'bgmi_admin_password_hash_v1';
const ADMIN_SESSION_KEY = 'bgmi_admin_session_v1';
const POLICY_CONSENT_KEY = 'bgmi_policy_consent_v1';
const CONTACT_REQUESTS_KEY = 'bgmi_contact_requests_v1';
const PAYMENT_SETTINGS_KEY = 'bgmi_payment_settings_v1';
const MIN_ADD_BALANCE_AMOUNT = 100;
const SPIN_COLORS = ['#fbbf24','#fdba74','#86efac','#67e8f9','#c4b5fd','#f9a8d4','#fca5a5','#d9f99d'];
const ORDER_STATUSES = ['pending', 'processing', 'approved', 'rejected'];
const ALLOWED_PAGES = ['home', 'spin', 'orders', 'support'];
const DEFAULT_ADMIN_PASSWORD_HASH = 'd8d1713dc581651249161742dc814f8368913d77c6f08041e79df7a7fe73750b';
const SETTINGS_TAP_TARGET = 4;
const SETTINGS_TAP_WINDOW_MS = 1600;

function defaultGameSpinner() {
  return {
    spinPrice: 10,
    firstSpinWin: 80,
    rewards: [10, 15, 20, 30, 40, 60, 80, 100],
    weights: [1, 1, 1, 1, 1, 1, 1, 1]
  };
}

function defaultSpinStats() {
  return {
    freeSpinUsed: false,
    totalSpins: 0,
    totalUcWon: 0,
    totalSpent: 0,
    ucBalance: 0,
    lastReward: 0
  };
}

const DEFAULT_SPINNER_SETTINGS = {
  games: {
    bgmi: defaultGameSpinner(),
    ff: {
      spinPrice: 10,
      firstSpinWin: 85,
      rewards: [10, 20, 25, 35, 45, 65, 85, 110],
      weights: [1, 1, 1, 1, 1, 1, 1, 1]
    }
  }
};

let activeSpinGame = 'bgmi';
let adminSpinGame = 'bgmi';
let spinnerSettings = loadSpinnerSettings();
let spinnerUser = loadSpinnerUser();
let spinWheelRotation = {bgmi: 0, ff: 0};
let spinInProgress = false;
let currentPage = 'home';
let settingsTapCount = 0;
let lastSettingsTapAt = 0;
let settingsTapResetTimer = null;
let settingsHintTimer = null;
let ordersCache = [];
let serverStoreReady = false;
let serverStoreMode = 'local';
let userSyncTimer = null;
let paymentSettings = loadPaymentSettings();
let adminQrFile = null;

// GAME CATEGORY MAPS
const bgmiCats = [
  {val:'uc',label:'💎 UC'},
  {val:'royal',label:'👑 Royal Pass'},
  {val:'bundle',label:'🎁 Bundle'},
  {val:'scene',label:'🎬 Scene'},
  {val:'gun',label:'🔫 Gun Skin'}
];

const ffCats = [
  {val:'ffdiamond',label:'💎 Diamonds'},
  {val:'ffpass',label:'👑 Elite Pass'},
  {val:'ffbundle',label:'🎁 FF Bundle'},
  {val:'ffgun',label:'🔫 FF Gun Skin'}
];

function clone(data) {
  return JSON.parse(JSON.stringify(data));
}

const DEFAULT_BGMI_PRODUCTS = clone(bgmiProducts);
const DEFAULT_FF_PRODUCTS = clone(ffProducts);

function randomUserId() {
  return 'U' + Math.random().toString(36).slice(2, 8).toUpperCase();
}

function safeParse(value, fallback) {
  try {
    return JSON.parse(value);
  } catch (e) {
    return fallback;
  }
}

function loadPaymentSettings() {
  const parsed = safeParse(localStorage.getItem(PAYMENT_SETTINGS_KEY) || '{}', {});
  const qrImage = typeof parsed.qrImage === 'string' && parsed.qrImage.trim() ? parsed.qrImage.trim() : 'assets/qr/pay_qr_20260330_140700_c62cccd3b793.jpg';
  return {qrImage};
}

function savePaymentSettings() {
  localStorage.setItem(PAYMENT_SETTINGS_KEY, JSON.stringify(paymentSettings));
  if (serverStoreReady) syncPaymentSettingsToServer();
}

function sanitizeProduct(raw, game, fallbackId) {
  const price = Number(raw?.price);
  const name = typeof raw?.name === 'string' ? raw.name.trim() : '';
  if (!name || !Number.isFinite(price) || price <= 0) return null;

  const id = Number(raw?.id);
  const oldPrice = Number(raw?.oldPrice);
  const priority = Number(raw?.priority);
  return {
    id: Number.isFinite(id) && id > 0 ? id : fallbackId,
    name,
    desc: typeof raw?.desc === 'string' ? raw.desc : '',
    price: Math.round(price),
    oldPrice: Number.isFinite(oldPrice) && oldPrice > 0 ? Math.round(oldPrice) : 0,
    icon: typeof raw?.icon === 'string' && raw.icon ? raw.icon : '💎',
    img: typeof raw?.img === 'string' ? raw.img : '',
    color: typeof raw?.color === 'string' && raw.color ? raw.color : (game === 'ff' ? '#ffe4e6' : '#fff3e0'),
    cat: typeof raw?.cat === 'string' && raw.cat ? raw.cat : (game === 'ff' ? 'ffdiamond' : 'uc'),
    tag: typeof raw?.tag === 'string' ? raw.tag : '',
    priority: Number.isFinite(priority) ? Math.max(1, Math.min(10, Math.round(priority))) : 5,
    game
  };
}

function sanitizeProductList(rawList, game, fallbackList) {
  if (!Array.isArray(rawList)) return clone(fallbackList);
  const out = [];
  let seq = 1;
  rawList.forEach((item) => {
    const clean = sanitizeProduct(item, game, Date.now() + seq);
    if (clean) {
      out.push(clean);
      seq += 1;
    }
  });
  return out.length ? out : clone(fallbackList);
}

function getNextProductId(bgmiList, ffList) {
  const maxId = [...bgmiList, ...ffList].reduce((max, item) => {
    const id = Number(item?.id);
    return Number.isFinite(id) && id > max ? id : max;
  }, 0);
  return maxId + 1;
}

function loadProductsState() {
  const fallback = {
    bgmi: clone(DEFAULT_BGMI_PRODUCTS),
    ff: clone(DEFAULT_FF_PRODUCTS),
    nextId: 200
  };

  const stored = safeParse(localStorage.getItem(PRODUCTS_KEY) || '{}', {});
  const bgmiList = sanitizeProductList(stored.bgmi, 'bgmi', fallback.bgmi);
  const ffList = sanitizeProductList(stored.ff, 'ff', fallback.ff);

  // If the user already has cached products in localStorage, older cached entries
  // might miss newly added defaults (or miss updated image paths). Override/merge
  // the newest BGMI gun products here by id so they always show on the UI.
  const BGMI_OVERRIDDEN_PRODUCT_IDS = new Set([1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32]);
  DEFAULT_BGMI_PRODUCTS.forEach((p) => {
    if (!BGMI_OVERRIDDEN_PRODUCT_IDS.has(p.id)) return;
    const idx = bgmiList.findIndex((x) => x.id === p.id);
    if (idx >= 0) bgmiList[idx] = clone(p);
    else bgmiList.push(clone(p));
  });

  // Also ensure any other default products missing in cache are present.
  const bgmiIds = new Set(bgmiList.map((p) => p.id));
  DEFAULT_BGMI_PRODUCTS.forEach((p) => {
    if (bgmiIds.has(p.id)) return;
    bgmiList.push(clone(p));
  });

  const FF_OVERRIDDEN_PRODUCT_IDS = new Set([50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61]);
  DEFAULT_FF_PRODUCTS.forEach((p) => {
    if (!FF_OVERRIDDEN_PRODUCT_IDS.has(p.id)) return;
    const idx = ffList.findIndex((x) => x.id === p.id);
    if (idx >= 0) ffList[idx] = clone(p);
    else ffList.push(clone(p));
  });

  const ffIds = new Set(ffList.map((p) => p.id));
  DEFAULT_FF_PRODUCTS.forEach((p) => {
    if (ffIds.has(p.id)) return;
    ffList.push(clone(p));
  });

  const computedNext = getNextProductId(bgmiList, ffList);
  const storedNext = Number(stored.nextId);

  return {
    bgmi: bgmiList,
    ff: ffList,
    nextId: Number.isFinite(storedNext) && storedNext >= computedNext ? Math.floor(storedNext) : computedNext
  };
}

function initProductsState() {
  const loaded = loadProductsState();
  bgmiProducts = loaded.bgmi;
  ffProducts = loaded.ff;
  nextId = loaded.nextId;
}

function saveProductsState() {
  localStorage.setItem(PRODUCTS_KEY, JSON.stringify({
    bgmi: bgmiProducts,
    ff: ffProducts,
    nextId
  }));
  if (serverStoreReady) syncProductsToServer();
}

function sanitizePageName(name) {
  return ALLOWED_PAGES.includes(name) ? name : 'home';
}

function loadUiState() {
  const stored = safeParse(localStorage.getItem(UI_STATE_KEY) || '{}', {});
  const bgmiAllowed = ['all', ...bgmiCats.map((item) => item.val)];
  const ffAllowed = ['all', ...ffCats.map((item) => item.val)];
  const bgmiCat = typeof stored.currentCatBgmi === 'string' ? stored.currentCatBgmi : 'all';
  const ffCat = typeof stored.currentCatFf === 'string' ? stored.currentCatFf : 'all';
  return {
    page: sanitizePageName(stored.page || 'home'),
    currentGame: stored.currentGame === 'ff' ? 'ff' : 'bgmi',
    currentCatBgmi: bgmiAllowed.includes(bgmiCat) ? bgmiCat : 'all',
    currentCatFf: ffAllowed.includes(ffCat) ? ffCat : 'all',
    activeSpinGame: stored.activeSpinGame === 'ff' ? 'ff' : 'bgmi',
    adminGame: stored.adminGame === 'ff' ? 'ff' : 'bgmi',
    adminSpinGame: stored.adminSpinGame === 'ff' ? 'ff' : 'bgmi'
  };
}

function saveUiState() {
  localStorage.setItem(UI_STATE_KEY, JSON.stringify({
    page: currentPage,
    currentGame,
    currentCatBgmi,
    currentCatFf,
    activeSpinGame,
    adminGame,
    adminSpinGame
  }));
}

function pageFromHash() {
  const raw = (window.location.hash || '').replace('#', '').trim();
  return ALLOWED_PAGES.includes(raw) ? raw : '';
}

function hasPolicyConsent() {
  const raw = localStorage.getItem(POLICY_CONSENT_KEY);
  if (!raw) return false;
  const parsed = safeParse(raw, {});
  return parsed?.agreed === true;
}

function openPolicyConsentIfNeeded() {
  const overlay = document.getElementById('policy-consent-overlay');
  if (!overlay) return;
  if (hasPolicyConsent()) {
    overlay.classList.remove('open');
    document.body.classList.remove('policy-lock');
    return;
  }
  overlay.classList.add('open');
  document.body.classList.add('policy-lock');
}

function agreePolicies() {
  localStorage.setItem(POLICY_CONSENT_KEY, JSON.stringify({
    agreed: true,
    date: new Date().toISOString()
  }));
  const overlay = document.getElementById('policy-consent-overlay');
  if (overlay) overlay.classList.remove('open');
  document.body.classList.remove('policy-lock');
}

function sanitizeGameSpinner(raw, fallback) {
  const rewards = Array.isArray(raw?.rewards) ? raw.rewards.map((x) => Number(x)).filter((x) => Number.isFinite(x) && x > 0) : [];
  const weights = Array.isArray(raw?.weights) ? raw.weights.map((x) => Number(x)).filter((x) => Number.isFinite(x) && x > 0) : [];
  const spinPrice = Number(raw?.spinPrice);
  const firstSpinWin = Number(raw?.firstSpinWin);

  return {
    spinPrice: Number.isFinite(spinPrice) && spinPrice > 0 ? spinPrice : fallback.spinPrice,
    firstSpinWin: Number.isFinite(firstSpinWin) && firstSpinWin > 0 ? firstSpinWin : fallback.firstSpinWin,
    rewards: rewards.length === 8 ? rewards : [...fallback.rewards],
    weights: weights.length === 8 ? weights : [...fallback.weights]
  };
}

function loadSpinnerSettings() {
  try {
    const stored = JSON.parse(localStorage.getItem(SPINNER_SETTINGS_KEY) || '{}');
    if (stored.games) {
      return {
        games: {
          bgmi: sanitizeGameSpinner(stored.games.bgmi, DEFAULT_SPINNER_SETTINGS.games.bgmi),
          ff: sanitizeGameSpinner(stored.games.ff, DEFAULT_SPINNER_SETTINGS.games.ff)
        }
      };
    }

    const bgmiMigrated = sanitizeGameSpinner(
      {
        spinPrice: stored.spinPrice,
        firstSpinWin: stored.firstSpinWin,
        rewards: stored.rewards,
        weights: stored.weights
      },
      DEFAULT_SPINNER_SETTINGS.games.bgmi
    );

    return {
      games: {
        bgmi: bgmiMigrated,
        ff: clone(DEFAULT_SPINNER_SETTINGS.games.ff)
      }
    };
  } catch (e) {
    return clone(DEFAULT_SPINNER_SETTINGS);
  }
}

function saveSpinnerSettingsToStorage() {
  localStorage.setItem(SPINNER_SETTINGS_KEY, JSON.stringify(spinnerSettings));
  if (serverStoreReady) syncSpinnerSettingsToServer();
}

function sanitizeSpinStats(raw, fallback) {
  return {
    freeSpinUsed: Boolean(raw?.freeSpinUsed),
    totalSpins: Number.isFinite(Number(raw?.totalSpins)) ? Number(raw.totalSpins) : fallback.totalSpins,
    totalUcWon: Number.isFinite(Number(raw?.totalUcWon)) ? Number(raw.totalUcWon) : fallback.totalUcWon,
    totalSpent: Number.isFinite(Number(raw?.totalSpent)) ? Number(raw.totalSpent) : fallback.totalSpent,
    ucBalance: Number.isFinite(Number(raw?.ucBalance)) ? Number(raw.ucBalance) : fallback.ucBalance,
    lastReward: Number.isFinite(Number(raw?.lastReward)) ? Number(raw.lastReward) : fallback.lastReward
  };
}

function loadSpinnerUser() {
  try {
    const stored = JSON.parse(localStorage.getItem(SPINNER_USER_KEY) || '{}');
    if (stored.stats) {
      return {
        accountId: typeof stored.accountId === 'string' && stored.accountId ? stored.accountId : randomUserId(),
        balance: Number.isFinite(Number(stored.balance)) ? Number(stored.balance) : 0,
        stats: {
          bgmi: sanitizeSpinStats(stored.stats.bgmi, defaultSpinStats()),
          ff: sanitizeSpinStats(stored.stats.ff, defaultSpinStats())
        }
      };
    }

    return {
      accountId: typeof stored.accountId === 'string' && stored.accountId ? stored.accountId : randomUserId(),
      balance: Number.isFinite(Number(stored.balance)) ? Number(stored.balance) : 0,
      stats: {
        bgmi: sanitizeSpinStats(
          {
            freeSpinUsed: stored.freeSpinUsed,
            totalSpins: stored.totalSpins,
            totalUcWon: stored.totalUcWon,
            totalSpent: stored.totalSpent,
            ucBalance: stored.ucBalance,
            lastReward: stored.lastReward
          },
          defaultSpinStats()
        ),
        ff: defaultSpinStats()
      }
    };
  } catch (e) {
    return {
      accountId: randomUserId(),
      balance: 0,
      stats: {
        bgmi: defaultSpinStats(),
        ff: defaultSpinStats()
      }
    };
  }
}

function saveSpinnerUser() {
  localStorage.setItem(SPINNER_USER_KEY, JSON.stringify(spinnerUser));
  if (serverStoreReady) scheduleUserSync();
}

function getSpinConfig(game = activeSpinGame) {
  return spinnerSettings.games[game];
}

function getSpinStats(game = activeSpinGame) {
  return spinnerUser.stats[game];
}

function spinCurrency(game = activeSpinGame) {
  return game === 'ff' ? 'Diamonds' : 'UC';
}

function spinCurrencySingle(game = activeSpinGame) {
  return game === 'ff' ? 'Diamond' : 'UC';
}

function formatSpinAmount(amount, game = activeSpinGame) {
  return `${amount} ${spinCurrency(game)}`;
}

function orderRewardCurrency(order) {
  return String(order?.game || '').toLowerCase().includes('free fire') ? 'Diamonds' : 'UC';
}

function ensureAdminPasswordHash() {
  const stored = localStorage.getItem(ADMIN_PASSWORD_HASH_KEY);
  if (!stored || !/^[a-f0-9]{64}$/i.test(stored)) {
    localStorage.setItem(ADMIN_PASSWORD_HASH_KEY, DEFAULT_ADMIN_PASSWORD_HASH);
  }
}

function getAdminPasswordHash() {
  ensureAdminPasswordHash();
  return localStorage.getItem(ADMIN_PASSWORD_HASH_KEY) || DEFAULT_ADMIN_PASSWORD_HASH;
}

async function sha256Hex(value) {
  const encoder = new TextEncoder();
  const buffer = await window.crypto.subtle.digest('SHA-256', encoder.encode(value));
  return Array.from(new Uint8Array(buffer)).map((b) => b.toString(16).padStart(2, '0')).join('');
}

function isAdminUnlocked() {
  return sessionStorage.getItem(ADMIN_SESSION_KEY) === '1';
}

function setAdminUnlocked(value) {
  if (value) sessionStorage.setItem(ADMIN_SESSION_KEY, '1');
  else sessionStorage.removeItem(ADMIN_SESSION_KEY);
}

function showSettingsHint(message) {
  const hint = document.getElementById('settings-hint');
  if (!hint) return;
  hint.textContent = message || '';
  hint.classList.toggle('show', Boolean(message));
  if (settingsHintTimer) clearTimeout(settingsHintTimer);
  if (message) {
    settingsHintTimer = setTimeout(() => {
      hint.classList.remove('show');
    }, 1300);
  }
}

function openAdminGate() {
  if (isAdminUnlocked()) {
    openAdmin();
    return;
  }
  openAdminLogin();
}

function handleSettingsTap() {
  const now = Date.now();
  if (now - lastSettingsTapAt > SETTINGS_TAP_WINDOW_MS) settingsTapCount = 0;
  lastSettingsTapAt = now;
  settingsTapCount += 1;

  if (settingsTapResetTimer) clearTimeout(settingsTapResetTimer);
  settingsTapResetTimer = setTimeout(() => {
    settingsTapCount = 0;
  }, SETTINGS_TAP_WINDOW_MS);

  if (settingsTapCount >= SETTINGS_TAP_TARGET) {
    settingsTapCount = 0;
    showSettingsHint('Opening settings...');
    openAdminGate();
    return;
  }
  const remaining = SETTINGS_TAP_TARGET - settingsTapCount;
  showSettingsHint(`Tap ${remaining} more time${remaining === 1 ? '' : 's'} to open settings`);
}

function openAdminLogin() {
  const pass = document.getElementById('admin-login-pass');
  const msg = document.getElementById('admin-login-msg');
  if (pass) pass.value = '';
  if (msg) msg.textContent = '';
  document.getElementById('admin-login-overlay').classList.add('open');
}

function closeAdminLogin() {
  document.getElementById('admin-login-overlay').classList.remove('open');
}

async function submitAdminLogin() {
  const passInput = document.getElementById('admin-login-pass');
  const msg = document.getElementById('admin-login-msg');
  const password = passInput.value.trim();
  if (!password) {
    msg.textContent = 'Enter password.';
    return;
  }
  if (!window.crypto?.subtle) {
    msg.textContent = 'Secure login not supported in this browser.';
    return;
  }
  const hash = await sha256Hex(password);
  if (hash !== getAdminPasswordHash()) {
    msg.textContent = 'Invalid password.';
    return;
  }
  setAdminUnlocked(true);
  closeAdminLogin();
  openAdmin();
}

async function changeAdminPassword() {
  const msg = document.getElementById('admin-pass-msg');
  const current = document.getElementById('admin-current-pass').value.trim();
  const next = document.getElementById('admin-new-pass').value.trim();
  const confirmNext = document.getElementById('admin-confirm-pass').value.trim();
  msg.textContent = '';

  if (!current || !next || !confirmNext) {
    msg.textContent = 'Fill all password fields.';
    return;
  }
  if (next.length < 4) {
    msg.textContent = 'New password should be at least 4 characters.';
    return;
  }
  if (next !== confirmNext) {
    msg.textContent = 'New passwords do not match.';
    return;
  }
  if (!window.crypto?.subtle) {
    msg.textContent = 'Secure password update not supported in this browser.';
    return;
  }
  const currentHash = await sha256Hex(current);
  if (currentHash !== getAdminPasswordHash()) {
    msg.textContent = 'Current password is incorrect.';
    return;
  }
  const nextHash = await sha256Hex(next);
  localStorage.setItem(ADMIN_PASSWORD_HASH_KEY, nextHash);
  document.getElementById('admin-current-pass').value = '';
  document.getElementById('admin-new-pass').value = '';
  document.getElementById('admin-confirm-pass').value = '';
  msg.textContent = 'Password updated successfully.';
}

function lockAdminSession() {
  setAdminUnlocked(false);
  closeAdmin();
  showSettingsHint('Settings locked');
}

function normalizeStatus(status) {
  const s = String(status || '').toLowerCase();
  if (s === 'completed') return 'approved';
  if (ORDER_STATUSES.includes(s)) return s;
  return 'pending';
}

function statusLabel(status) {
  const s = normalizeStatus(status);
  if (s === 'processing') return 'Processing';
  if (s === 'approved') return 'Approved';
  if (s === 'rejected') return 'Rejected';
  return 'Pending';
}

function normalizeOrder(raw) {
  const type = raw.type === 'withdraw' || raw.type === 'add_balance' ? raw.type : 'purchase';
  const id = String(raw?.id ?? Date.now());
  const status = normalizeStatus(raw?.status);
  const accountId = String(raw?.accountId || spinnerUser?.accountId || '').trim();
  const createdAt = String(raw?.createdAt || new Date().toISOString());
  return {
    id,
    type,
    product: raw.product || (type === 'withdraw' ? 'Withdraw Request' : type === 'add_balance' ? 'Add Balance Request' : 'Product Order'),
    price: Number(raw.price) || 0,
    game: raw.game || 'BGMI',
    name: raw.name || '',
    email: raw.email || '',
    bgmi: raw.bgmi || '',
    utr: raw.utr || '',
    ucAmount: Number(raw.ucAmount) || 0,
    balanceAmount: Number(raw.balanceAmount) || 0,
    balanceApplied: Boolean(raw.balanceApplied),
    paymentMode: raw.paymentMode || '',
    date: raw.date || new Date().toLocaleDateString(),
    status,
    accountId,
    createdAt
  };
}

function loadOrdersState() {
  try {
    const parsed = JSON.parse(localStorage.getItem(ORDERS_KEY) || '[]');
    if (!Array.isArray(parsed)) return [];
    return parsed.map(normalizeOrder).sort((a, b) => b.createdAt.localeCompare(a.createdAt));
  } catch (e) {
    return [];
  }
}
ordersCache = loadOrdersState();

function getOrders() {
  return ordersCache
    .filter((order) => order.accountId === spinnerUser.accountId)
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

function getAllOrders() {
  return [...ordersCache].sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

function persistOrdersLocal() {
  localStorage.setItem(ORDERS_KEY, JSON.stringify(ordersCache.map(normalizeOrder)));
}

function saveOrders(orders) {
  ordersCache = Array.isArray(orders) ? orders.map(normalizeOrder) : [];
  persistOrdersLocal();
}

function addOrder(order) {
  const normalized = normalizeOrder({
    ...order,
    accountId: order?.accountId || spinnerUser.accountId,
    createdAt: order?.createdAt || new Date().toISOString()
  });
  const orders = getAllOrders();
  orders.unshift(normalized);
  saveOrders(orders);
  syncOrderCreateToServer(normalized);
}

function normalizeContactRequest(raw) {
  const id = String(raw?.id || Date.now());
  const status = String(raw?.status || 'new').toLowerCase();
  return {
    id,
    name: String(raw?.name || '').trim(),
    email: String(raw?.email || '').trim(),
    message: String(raw?.message || '').trim(),
    date: String(raw?.date || new Date().toLocaleDateString()),
    createdAt: String(raw?.createdAt || new Date().toISOString()),
    status: ['new', 'in_progress', 'resolved'].includes(status) ? status : 'new'
  };
}

function getLocalContactRequests() {
  const parsed = safeParse(localStorage.getItem(CONTACT_REQUESTS_KEY) || '[]', []);
  if (!Array.isArray(parsed)) return [];
  return parsed.map(normalizeContactRequest).sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

function saveLocalContactRequests(list) {
  localStorage.setItem(CONTACT_REQUESTS_KEY, JSON.stringify(list.map(normalizeContactRequest)));
}

function addLocalContactRequest(request) {
  const list = getLocalContactRequests();
  list.unshift(normalizeContactRequest(request));
  saveLocalContactRequests(list);
}

function contactStatusLabel(status) {
  if (status === 'resolved') return 'Resolved';
  if (status === 'in_progress') return 'In Progress';
  return 'New';
}

async function loadContactRequests() {
  return {items: getLocalContactRequests(), mode: 'local'};
}

function scheduleUserSync(delay = 350) {
  if (!serverStoreReady) return;
  if (userSyncTimer) clearTimeout(userSyncTimer);
  userSyncTimer = setTimeout(() => {}, delay);
}

async function syncProductsToServer() {
  serverStoreMode = 'local';
}

async function syncSpinnerSettingsToServer() {
  serverStoreMode = 'local';
}

async function syncPaymentSettingsToServer() {
  serverStoreMode = 'local';
}

async function syncUserToServer() {
  serverStoreMode = 'local';
}

async function syncOrderCreateToServer(order) {
  void order;
  serverStoreMode = 'local';
}

async function syncOrderStatusToServer(orderId, status) {
  void orderId;
  void status;
  serverStoreMode = 'local';
  return {
    ok: true
  };
}

async function refreshOrdersFromServer() {
  serverStoreReady = false;
  serverStoreMode = 'local';
  renderOrdersList();
  renderAdminOrders();
}

function mergeServerUserState(rawUser) {
  if (!rawUser || typeof rawUser !== 'object') return;
  if (Number.isFinite(Number(rawUser.balance))) {
    spinnerUser.balance = Number(rawUser.balance);
  }
  if (rawUser.stats && typeof rawUser.stats === 'object') {
    spinnerUser.stats = {
      bgmi: sanitizeSpinStats(rawUser.stats.bgmi, defaultSpinStats()),
      ff: sanitizeSpinStats(rawUser.stats.ff, defaultSpinStats())
    };
  }
}

async function bootstrapSharedStore() {
  serverStoreReady = false;
  serverStoreMode = 'local';
  renderBgmi(currentCatBgmi);
  renderFF(currentCatFf);
  renderOrdersList();
  renderAdminList();
  renderAdminOrders();
  renderSpinnerUI();
  syncWalletViews();
  applyPaymentQrImage();
}

function syncWalletViews() {
  const headerBalance = document.getElementById('header-balance');
  if (headerBalance) headerBalance.textContent = `₹${spinnerUser.balance}`;
  const payBalance = document.getElementById('pay-balance-view');
  if (payBalance) payBalance.textContent = `₹${spinnerUser.balance}`;
}

function applyPaymentQrImage() {
  const qrPath = paymentSettings?.qrImage || 'assets/test-qr.svg';
  const ids = ['qr-grid', 'ab-qr-grid', 'admin-qr-preview'];
  ids.forEach((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.src = qrPath;
    el.onerror = function onQrError() {
      this.onerror = null;
      this.src = 'assets/test-qr.svg';
    };
  });
}

function handleAdminQrUpload(input) {
  const file = input.files?.[0];
  const msg = document.getElementById('save-qr-msg');
  if (msg) msg.textContent = '';
  if (!file) return;
  if (file.size > 5 * 1024 * 1024) {
    alert('QR image too large! Max 5MB.');
    input.value = '';
    return;
  }
  if (!file.type || !file.type.startsWith('image/')) {
    alert('Only image files are allowed.');
    input.value = '';
    return;
  }
  adminQrFile = file;
  const preview = document.getElementById('admin-qr-preview');
  if (preview) {
    preview.src = URL.createObjectURL(file);
  }
}

async function savePaymentQrImage() {
  const btn = document.getElementById('save-qr-btn');
  const msg = document.getElementById('save-qr-msg');
  if (!adminQrFile) {
    if (msg) msg.textContent = 'Select a QR image first.';
    return;
  }
  const originalBtn = btn ? btn.textContent : '';
  try {
    if (btn) {
      btn.disabled = true;
      btn.textContent = '⏳ Saving QR...';
    }
    const dataUrl = await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = () => reject(new Error('qr_read_failed'));
      reader.readAsDataURL(adminQrFile);
    });
    if (typeof dataUrl !== 'string' || !dataUrl.trim()) {
      throw new Error('qr_read_failed');
    }
    paymentSettings.qrImage = dataUrl;
    savePaymentSettings();
    applyPaymentQrImage();
    adminQrFile = null;
    const input = document.getElementById('admin-qr-file');
    if (input) input.value = '';
    if (msg) msg.textContent = 'QR updated for all payment sections (local mode).';
  } catch (error) {
    console.warn('QR save failed:', error);
    if (msg) msg.textContent = 'QR save failed.';
  } finally {
    if (btn) {
      btn.disabled = false;
      btn.textContent = originalBtn || '💾 Save QR For All Payments';
    }
  }
}

// PRODUCT RENDER
function cardHTML(p) {
  const isFF = p.game === 'ff';
  const imgPart = p.img
    ? `<img style="width:100%;height:100%;object-fit:cover;display:block;" src="${p.img}" alt="${p.name}" />`
    : `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:48px;background:${p.color};">${p.icon || '🎮'}</div>`;

  const tagPart = p.tag ? `<div class="card-tag tag-${p.tag}">${tagLabel(p.tag)}</div>` : '';
  const gameBadge = `<div class="card-game-badge ${isFF ? 'badge-ff' : 'badge-bgmi'}">${isFF ? 'FREE FIRE' : 'BGMI'}</div>`;

  return `
    <div class="product-card${isFF ? ' ff-card' : ''}" onclick="openPayment(${p.id})">
      <div class="card-img-wrap">${imgPart}${tagPart}${gameBadge}</div>
      <div class="card-body">
        <div class="card-title">${p.name}</div>
        <div class="card-desc">${p.desc}</div>
        <div class="card-footer">
          <div>
            <div class="card-price${isFF ? ' ff-price' : ''}">₹${p.price}</div>
            ${p.oldPrice ? `<div class="card-price-old">₹${p.oldPrice}</div>` : ''}
          </div>
          <button class="buy-btn${isFF ? ' ff-btn' : ''}" onclick="event.stopPropagation();openPayment(${p.id})">Buy Now</button>
        </div>
      </div>
    </div>`;
}

function tagLabel(t) {
  return {sale:'SALE',hot:'HOT',new:'NEW',royal:'ROYAL',ff:'FF'}[t] || String(t || '').toUpperCase();
}

function renderBgmi(cat) {
  const list = cat === 'all' ? bgmiProducts : bgmiProducts.filter((p) => p.cat === cat);
  document.getElementById('bgmi-grid').innerHTML = [...list].sort((a, b) => b.priority - a.priority).map(cardHTML).join('');
}

function renderFF(cat) {
  const list = cat === 'all' ? ffProducts : ffProducts.filter((p) => p.cat === cat);
  document.getElementById('ff-grid').innerHTML = [...list].sort((a, b) => b.priority - a.priority).map(cardHTML).join('');
}

function setCategoryButtonState(game, cat) {
  const containerId = game === 'ff' ? 'ff-cats' : 'bgmi-cats';
  const container = document.getElementById(containerId);
  if (!container) return;
  container.querySelectorAll('.cat-btn').forEach((b) => {
    b.classList.remove('active', 'ff-active');
    if (game === 'ff') {
      b.style.background = '';
      b.style.color = '';
      b.style.borderColor = '';
    }
  });
  const target = container.querySelector(`.cat-btn[data-cat="${cat}"]`) || container.querySelector('.cat-btn[data-cat="all"]');
  if (!target) return;
  target.classList.add(game === 'ff' ? 'ff-active' : 'active');
  if (game === 'ff') {
    target.style.background = 'var(--ff)';
    target.style.color = '#fff';
    target.style.borderColor = 'var(--ff)';
  }
}

function filterCat(cat, btn, game) {
  const containerId = game === 'ff' ? 'ff-cats' : 'bgmi-cats';
  document.querySelectorAll('#' + containerId + ' .cat-btn').forEach((b) => {
    b.classList.remove('active', 'ff-active');
    if (game === 'ff') {
      b.style.background = '';
      b.style.color = '';
      b.style.borderColor = '';
    }
  });
  btn.classList.add(game === 'ff' ? 'ff-active' : 'active');

  if (game === 'ff') {
    btn.style.background = 'var(--ff)';
    btn.style.color = '#fff';
    btn.style.borderColor = 'var(--ff)';
    currentCatFf = cat;
    renderFF(cat);
  } else {
    currentCatBgmi = cat;
    renderBgmi(cat);
  }
  saveUiState();
}

function switchGame(g) {
  currentGame = g;
  document.getElementById('tab-bgmi').className = 'game-tab' + (g === 'bgmi' ? ' active-bgmi' : '');
  document.getElementById('tab-ff').className = 'game-tab' + (g === 'ff' ? ' active-ff' : '');
  document.getElementById('bgmi-section').style.display = g === 'bgmi' ? 'block' : 'none';
  document.getElementById('ff-section').style.display = g === 'ff' ? 'block' : 'none';
  document.getElementById('search-inp').placeholder = g === 'ff' ? '🔍 Search FF Diamonds, Bundles...' : '🔍 Search UC, Royal Pass, Bundles...';
  saveUiState();
}

function searchProducts(q) {
  q = q.toLowerCase().trim();
  if (currentGame === 'bgmi') {
    const r = bgmiProducts.filter((p) => p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q));
    document.getElementById('bgmi-grid').innerHTML = r.sort((a, b) => b.priority - a.priority).map(cardHTML).join('');
  } else {
    const r = ffProducts.filter((p) => p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q));
    document.getElementById('ff-grid').innerHTML = r.sort((a, b) => b.priority - a.priority).map(cardHTML).join('');
  }
}

// PAGES
function setPageView(name, btn, pushHistory = true) {
  const page = sanitizePageName(name);
  document.querySelectorAll('.page').forEach((p) => p.classList.remove('active'));
  document.getElementById('page-' + page).classList.add('active');
  document.querySelectorAll('.bnav-item[data-page]').forEach((b) => b.classList.remove('active'));
  const targetBtn = btn || document.querySelector(`.bnav-item[data-page="${page}"]`);
  if (targetBtn) targetBtn.classList.add('active');
  currentPage = page;
  if (page === 'spin') renderSpinnerUI();
  if (page === 'orders') refreshOrdersFromServer();
  if (pushHistory && window.location.hash !== `#${page}`) {
    window.history.pushState({page}, '', `#${page}`);
  }
  saveUiState();
}

function showPage(name, btn) {
  setPageView(name, btn, true);
}

// SPINNER
function switchSpinGame(game) {
  if (spinInProgress) return;
  activeSpinGame = game === 'ff' ? 'ff' : 'bgmi';
  document.getElementById('spin-tab-bgmi').className = 'game-tab' + (activeSpinGame === 'bgmi' ? ' active-bgmi' : '');
  document.getElementById('spin-tab-ff').className = 'game-tab' + (activeSpinGame === 'ff' ? ' active-ff' : '');
  renderSpinnerUI();
  saveUiState();
}

function spinButtonLabel() {
  const cfg = getSpinConfig();
  const stats = getSpinStats();
  return stats.freeSpinUsed ? `🎯 Spin Now (₹${cfg.spinPrice})` : '🎯 Spin Free (1st Spin)';
}

function buildSpinGradient() {
  const cfg = getSpinConfig();
  const seg = 360 / cfg.rewards.length;
  const parts = cfg.rewards.map((_, i) => `${SPIN_COLORS[i % SPIN_COLORS.length]} ${i * seg}deg ${(i + 1) * seg}deg`);
  return `conic-gradient(${parts.join(',')})`;
}

function renderSpinLegend() {
  const cfg = getSpinConfig();
  const holder = document.getElementById('spin-legend');
  holder.innerHTML = cfg.rewards.map((r, i) => `<div class="spin-chip">${r} ${spinCurrency(activeSpinGame)} · P${cfg.weights[i]}</div>`).join('');
}

function renderSpinSectionLabels() {
  const cfg = getSpinConfig();
  const holder = document.getElementById('spin-segment-labels');
  const wheel = document.getElementById('spin-wheel');
  if (!holder || !wheel) return;

  const count = cfg.rewards.length;
  const seg = 360 / count;
  const radius = Math.max(58, Math.floor(wheel.clientWidth * 0.34));

  holder.innerHTML = cfg.rewards.map((reward, i) => {
    const angle = i * seg + seg / 2;
    return `<div class="spin-segment-label" style="transform:translate(-50%,-50%) rotate(${angle}deg) translateY(-${radius}px) rotate(-${angle}deg);">${reward} ${spinCurrency(activeSpinGame)}</div>`;
  }).join('');
}

function renderSpinnerUI() {
  const cfg = getSpinConfig();
  const stats = getSpinStats();
  const gameLabel = activeSpinGame === 'ff' ? 'Free Fire' : 'BGMI';
  const currency = spinCurrency(activeSpinGame);
  const currencySingle = spinCurrencySingle(activeSpinGame);

  document.getElementById('spin-title-text').textContent = activeSpinGame === 'ff' ? '🎰 Free Fire Diamond Spinner' : '🎰 BGMI UC Spinner';
  document.getElementById('spin-sub-text').textContent = `First spin is free. Next spins cost ₹${cfg.spinPrice}.`;
  document.getElementById('spin-account-id').textContent = spinnerUser.accountId;
  document.getElementById('spin-balance').textContent = `₹${spinnerUser.balance}`;
  document.getElementById('spin-currency-balance-label').textContent = `${currencySingle} Balance`;
  document.getElementById('spin-uc-balance').textContent = formatSpinAmount(stats.ucBalance, activeSpinGame);
  document.getElementById('free-spin-status').textContent = stats.freeSpinUsed ? 'Used' : 'Available';
  document.getElementById('spin-total-count').textContent = stats.totalSpins;
  document.getElementById('spin-total-currency-label').textContent = `Total ${currency} Won`;
  document.getElementById('spin-total-uc').textContent = formatSpinAmount(stats.totalUcWon, activeSpinGame);
  document.querySelector('#spin-wheel .spin-center').textContent = formatSpinAmount(stats.ucBalance, activeSpinGame);
  document.getElementById('spin-wheel').style.background = buildSpinGradient();

  renderSpinSectionLabels();
  renderSpinLegend();
  syncWalletViews();

  const btn = document.getElementById('spin-btn');
  btn.textContent = spinInProgress ? '⏳ Spinning...' : spinButtonLabel();
  const locked = stats.freeSpinUsed && spinnerUser.balance < cfg.spinPrice;
  btn.disabled = spinInProgress || locked;
  if (locked && !spinInProgress) {
    document.getElementById('spin-result').textContent = `Add balance to spin again. Need ₹${cfg.spinPrice}.`;
  } else if (!spinInProgress && stats.lastReward > 0) {
    document.getElementById('spin-result').textContent = `Last ${gameLabel} win: ${formatSpinAmount(stats.lastReward, activeSpinGame)}`;
  } else if (!spinInProgress && !stats.lastReward) {
    document.getElementById('spin-result').textContent = `Tap spin to win ${currency}.`;
  }

  const withdrawBtn = document.getElementById('spin-withdraw-btn');
  withdrawBtn.disabled = stats.ucBalance < 100;
  withdrawBtn.textContent = stats.ucBalance >= 100 ? `🏧 Withdraw ${currencySingle}` : `🏧 Withdraw ${currencySingle} (Min 100)`;
}

function switchAdminSpinnerGame(game) {
  adminSpinGame = game === 'ff' ? 'ff' : 'bgmi';
  document.getElementById('admin-spin-tab-bgmi').className = 'admin-game-tab' + (adminSpinGame === 'bgmi' ? ' sel-bgmi' : '');
  document.getElementById('admin-spin-tab-ff').className = 'admin-game-tab' + (adminSpinGame === 'ff' ? ' sel-ff' : '');
  updateAdminSpinnerLabelText();
  loadSpinnerSettingsToAdmin();
  saveUiState();
}

function updateAdminSpinnerLabelText() {
  const unit = spinCurrency(adminSpinGame);
  document.getElementById('spin-first-win-label').textContent = `First Spin Fixed Win (${unit})`;
  document.querySelectorAll('.spin-reward-label').forEach((label, index) => {
    label.textContent = `Section ${index + 1} (${unit})`;
  });
}

function loadSpinnerSettingsToAdmin() {
  const cfg = getSpinConfig(adminSpinGame);
  document.getElementById('spin-price-input').value = cfg.spinPrice;
  document.getElementById('spin-first-win-input').value = cfg.firstSpinWin;
  for (let i = 0; i < 8; i += 1) {
    document.getElementById(`spin-r-${i}`).value = cfg.rewards[i];
    document.getElementById(`spin-w-${i}`).value = cfg.weights[i];
  }
}

function saveSpinnerSettings() {
  const spinPrice = Number(document.getElementById('spin-price-input').value);
  const firstSpinWin = Number(document.getElementById('spin-first-win-input').value);
  const rewards = [];
  const weights = [];
  for (let i = 0; i < 8; i += 1) {
    rewards.push(Number(document.getElementById(`spin-r-${i}`).value));
    weights.push(Number(document.getElementById(`spin-w-${i}`).value));
  }

  if (!Number.isFinite(spinPrice) || spinPrice <= 0) {
    document.getElementById('spin-admin-msg').textContent = 'Enter valid spin price.';
    return;
  }
  if (!Number.isFinite(firstSpinWin) || firstSpinWin <= 0) {
    document.getElementById('spin-admin-msg').textContent = 'Enter valid first spin fixed win.';
    return;
  }
  if (rewards.some((r) => !Number.isFinite(r) || r <= 0)) {
    document.getElementById('spin-admin-msg').textContent = 'All 8 section rewards must be valid numbers.';
    return;
  }
  if (weights.some((w) => !Number.isFinite(w) || w <= 0)) {
    document.getElementById('spin-admin-msg').textContent = 'All 8 section priority weights must be valid numbers.';
    return;
  }
  if (!rewards.includes(firstSpinWin)) rewards[0] = firstSpinWin;

  spinnerSettings.games[adminSpinGame] = {
    spinPrice,
    firstSpinWin,
    rewards,
    weights
  };
  saveSpinnerSettingsToStorage();
  renderSpinnerUI();
  document.getElementById('spin-admin-msg').textContent = `${adminSpinGame === 'ff' ? 'Free Fire' : 'BGMI'} spinner settings saved successfully.`;
  saveUiState();
}

function weightedRandomIndex(weights) {
  const total = weights.reduce((sum, w) => sum + w, 0);
  if (!Number.isFinite(total) || total <= 0) return Math.floor(Math.random() * weights.length);
  let pick = Math.random() * total;
  for (let i = 0; i < weights.length; i += 1) {
    pick -= weights[i];
    if (pick <= 0) return i;
  }
  return weights.length - 1;
}

function spinWheel() {
  if (spinInProgress) return;
  const cfg = getSpinConfig();
  const stats = getSpinStats();
  const gameLabel = activeSpinGame === 'ff' ? 'Free Fire' : 'BGMI';
  const unit = spinCurrency(activeSpinGame);

  const paidSpin = stats.freeSpinUsed;
  if (paidSpin) {
    if (spinnerUser.balance < cfg.spinPrice) {
      document.getElementById('spin-result').textContent = `Insufficient balance. Add ₹${cfg.spinPrice} to spin.`;
      return;
    }
    const ok = confirm(`This ${gameLabel} spin costs ₹${cfg.spinPrice}. Continue?`);
    if (!ok) return;
    spinnerUser.balance -= cfg.spinPrice;
  }

  spinInProgress = true;
  saveSpinnerUser();
  renderSpinnerUI();
  document.getElementById('spin-result').textContent = paidSpin ? `Paid ${gameLabel} spin started...` : 'Free spin started...';

  let idx = weightedRandomIndex(cfg.weights);
  let reward = cfg.rewards[idx];
  if (!stats.freeSpinUsed) {
    reward = cfg.firstSpinWin;
    const exact = cfg.rewards.findIndex((x) => x === reward);
    if (exact >= 0) idx = exact;
  }

  const seg = 360 / cfg.rewards.length;
  const centerAngle = idx * seg + seg / 2;
  const targetMod = 360 - centerAngle;
  const currentRotation = spinWheelRotation[activeSpinGame];
  const currentMod = ((currentRotation % 360) + 360) % 360;
  const delta = (targetMod - currentMod + 360) % 360;
  spinWheelRotation[activeSpinGame] = currentRotation + (360 * 5) + delta;

  const wheel = document.getElementById('spin-wheel');
  wheel.style.transform = `rotate(${spinWheelRotation[activeSpinGame]}deg)`;

  let done = false;
  const finish = () => {
    if (done) return;
    done = true;
    spinInProgress = false;
    if (!stats.freeSpinUsed) stats.freeSpinUsed = true;
    else stats.totalSpent += cfg.spinPrice;

    stats.totalSpins += 1;
    stats.totalUcWon += reward;
    stats.ucBalance += reward;
    stats.lastReward = reward;
    saveSpinnerUser();
    renderSpinnerUI();
    document.getElementById('spin-result').textContent = `🎉 ${gameLabel} spin won ${reward} ${unit}!`;
  };

  const onEnd = (ev) => {
    if (ev.propertyName !== 'transform') return;
    wheel.removeEventListener('transitionend', onEnd);
    clearTimeout(fallback);
    finish();
  };
  wheel.addEventListener('transitionend', onEnd);
  const fallback = setTimeout(() => {
    wheel.removeEventListener('transitionend', onEnd);
    finish();
  }, 4500);
}

function openWithdrawForm() {
  const stats = getSpinStats();
  const unit = spinCurrency(activeSpinGame);
  const unitSingle = spinCurrencySingle(activeSpinGame);
  if (stats.ucBalance < 100) {
    document.getElementById('spin-result').textContent = `Minimum 100 ${unit} required for withdraw.`;
    return;
  }
  const isFF = activeSpinGame === 'ff';
  document.getElementById('w-gameid-label').textContent = isFF ? '🔴 Free Fire UID *' : '🎮 BGMI ID *';
  document.getElementById('w-bgmi').placeholder = isFF ? 'Enter your Free Fire UID' : 'Enter your BGMI ID';
  document.getElementById('withdraw-title').textContent = `Withdraw ${unitSingle} Request 🏧`;
  document.getElementById('withdraw-amount-label').textContent = `💎 Total Withdraw ${unit} *`;
  document.getElementById('w-uc').placeholder = `Enter ${unit} amount`;
  document.getElementById('withdraw-meta-text').innerHTML = `Minimum 100 ${unit}. Available: <strong id="withdraw-available-uc">${stats.ucBalance} ${unit}</strong>`;
  document.getElementById('w-bgmi').value = '';
  document.getElementById('w-email').value = '';
  document.getElementById('w-uc').value = 100;
  document.getElementById('withdraw-overlay').classList.add('open');
}

function closeWithdrawForm() {
  document.getElementById('withdraw-overlay').classList.remove('open');
}

function submitWithdrawRequest() {
  const stats = getSpinStats();
  const unit = spinCurrency(activeSpinGame);
  const unitSingle = spinCurrencySingle(activeSpinGame);
  const bgmiId = document.getElementById('w-bgmi').value.trim();
  const email = document.getElementById('w-email').value.trim();
  const ucAmount = Number(document.getElementById('w-uc').value);

  if (!bgmiId || !email || !Number.isFinite(ucAmount)) {
    alert('Please fill all required fields.');
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert('Please enter a valid email.');
    return;
  }
  if (ucAmount < 100 || ucAmount > stats.ucBalance) {
    alert(`Withdraw ${unit} should be between 100 and ${stats.ucBalance}.`);
    return;
  }

  stats.ucBalance -= ucAmount;
  saveSpinnerUser();
  addOrder({
    id: Date.now(),
    type: 'withdraw',
    product: `${unitSingle} Withdraw Request`,
    ucAmount,
    email,
    bgmi: bgmiId,
    game: activeSpinGame === 'ff' ? 'Free Fire' : 'BGMI',
    date: new Date().toLocaleDateString(),
    status: 'pending'
  });
  closeWithdrawForm();
  document.getElementById('spin-result').textContent = `Withdraw request submitted for ${ucAmount} ${unit}.`;
  renderSpinnerUI();
  renderOrdersList();
  renderAdminOrders();
}

// PAYMENT
function findProduct(id) {
  return bgmiProducts.find((x) => x.id === id) || ffProducts.find((x) => x.id === id);
}

function openPayment(id) {
  const p = findProduct(id);
  if (!p) return;
  currentProduct = p;
  const isFF = p.game === 'ff';

  document.getElementById('pay-name').textContent = p.name;
  document.getElementById('pay-price').textContent = '₹' + p.price;
  document.getElementById('pay-price').className = 'product-summary-price' + (isFF ? ' ff-price' : '');
  document.getElementById('qr-amount').textContent = '₹' + p.price;
  document.getElementById('pay-summary').className = 'product-summary' + (isFF ? ' ff-summary' : '');
  document.getElementById('pay-game-tag').innerHTML = `<span class="pay-game-tag ${isFF ? 'ff-tag' : 'bgmi-tag'}">${isFF ? '🔴 FREE FIRE' : '🎮 BGMI'}</span>`;
  document.getElementById('f-gameid-label').textContent = isFF ? '🔴 Free Fire UID *' : '🎮 BGMI Game ID *';
  document.getElementById('f-bgmi').placeholder = isFF ? 'Enter your Free Fire UID' : 'Enter your BGMI ID';
  document.getElementById('pay-submit-btn').className = 'submit-btn' + (isFF ? ' ff-submit' : '');
  document.getElementById('pay-balance-view').textContent = `₹${spinnerUser.balance}`;

  const walletBtn = document.getElementById('pay-balance-btn');
  walletBtn.textContent = spinnerUser.balance >= p.price ? `💼 Pay Using Balance (₹${p.price})` : `💼 Balance Low (Need ₹${p.price})`;
  walletBtn.disabled = spinnerUser.balance < p.price;

  const wrap = document.getElementById('pay-thumb-wrap');
  if (p.img) {
    wrap.innerHTML = `<img src="${p.img}" style="width:54px;height:54px;border-radius:10px;object-fit:cover;border:1.5px solid ${isFF ? '#fecdd3' : '#fed7aa'};flex-shrink:0;" />`;
  } else {
    wrap.innerHTML = `<div style="width:54px;height:54px;border-radius:10px;background:${p.color};display:flex;align-items:center;justify-content:center;font-size:28px;flex-shrink:0;border:1.5px solid ${isFF ? '#fecdd3' : '#fed7aa'};">${p.icon || '🎮'}</div>`;
  }

  document.getElementById('pay-overlay').classList.add('open');
  ['f-name','f-email','f-bgmi','f-utr'].forEach((itemId) => { document.getElementById(itemId).value = ''; });
}

function closePayment() {
  document.getElementById('pay-overlay').classList.remove('open');
}

function payByBalance() {
  if (!currentProduct) return;

  const name = document.getElementById('f-name').value.trim();
  const email = document.getElementById('f-email').value.trim();
  const gameId = document.getElementById('f-bgmi').value.trim();

  if (!name || !email || !gameId) {
    alert('Please fill Name, Email and Game ID first.');
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert('Please enter a valid email!');
    return;
  }
  if (spinnerUser.balance < currentProduct.price) {
    alert('Insufficient account balance.');
    return;
  }

  spinnerUser.balance -= currentProduct.price;
  saveSpinnerUser();

  addOrder({
    id: Date.now(),
    type: 'purchase',
    product: currentProduct.name,
    price: currentProduct.price,
    game: currentProduct.game === 'ff' ? 'Free Fire' : 'BGMI',
    name,
    email,
    bgmi: gameId,
    utr: 'WALLET',
    paymentMode: 'balance',
    date: new Date().toLocaleDateString(),
    status: 'pending'
  });

  closePayment();
  syncWalletViews();
  document.getElementById('success-msg').textContent = `Order placed using account balance for ${currentProduct.name}.`;
  document.getElementById('success-overlay').classList.add('open');
  renderOrdersList();
  renderAdminOrders();
  renderSpinnerUI();
}

function submitOrder() {
  if (!currentProduct) return;
  const name = document.getElementById('f-name').value.trim();
  const email = document.getElementById('f-email').value.trim();
  const gameId = document.getElementById('f-bgmi').value.trim();
  const utr = document.getElementById('f-utr').value.trim();

  if (!name || !email || !gameId || !utr) {
    alert('Please fill all required fields!');
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert('Please enter a valid email!');
    return;
  }
  if (gameId.length < 6) {
    alert('Please enter a valid Game ID!');
    return;
  }

  addOrder({
    id: Date.now(),
    type: 'purchase',
    product: currentProduct.name,
    price: currentProduct.price,
    game: currentProduct.game === 'ff' ? 'Free Fire' : 'BGMI',
    name,
    email,
    bgmi: gameId,
    utr,
    paymentMode: 'upi',
    date: new Date().toLocaleDateString(),
    status: 'pending'
  });

  closePayment();
  document.getElementById('success-msg').textContent = `Order placed for ${currentProduct.name}. Status is pending.`;
  document.getElementById('success-overlay').classList.add('open');
  renderOrdersList();
  renderAdminOrders();
}

function closeSuccess() {
  document.getElementById('success-overlay').classList.remove('open');
}

async function submitContactForm() {
  const name = document.getElementById('contact-name').value.trim();
  const email = document.getElementById('contact-email').value.trim();
  const message = document.getElementById('contact-message').value.trim();

  if (!name || !email || !message) {
    alert('Please fill all contact form fields.');
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert('Please enter a valid email.');
    return;
  }

  const contactRequest = {
    id: String(Date.now()),
    name,
    email,
    message,
    date: new Date().toLocaleDateString(),
    createdAt: new Date().toISOString(),
    status: 'new'
  };

  const savedItem = normalizeContactRequest(contactRequest);
  addLocalContactRequest(savedItem);

  document.getElementById('contact-name').value = '';
  document.getElementById('contact-email').value = '';
  document.getElementById('contact-message').value = '';

  document.getElementById('contact-popup-msg').textContent = 'We will response you within 7 days.';
  document.getElementById('contact-popup-overlay').classList.add('open');
  renderAdminContactRequests();
}

function closeContactPopup() {
  document.getElementById('contact-popup-overlay').classList.remove('open');
}

async function renderAdminContactRequests() {
  const holder = document.getElementById('admin-contact-list');
  const count = document.getElementById('admin-contact-count');
  const note = document.getElementById('admin-contact-note');
  if (!holder || !count || !note) return;

  holder.innerHTML = `<div style="font-size:12px;color:var(--text-muted);font-weight:700;">Loading contact requests...</div>`;
  const loaded = await loadContactRequests();
  const items = loaded.items;

  count.textContent = items.length;
  note.textContent = loaded.mode === 'server'
    ? 'Source: Server (all hosted users)'
    : 'Source: Local browser cache (server unavailable)';

  if (!items.length) {
    holder.innerHTML = `<div style="font-size:12px;color:var(--text-muted);font-weight:700;">No contact requests yet.</div>`;
    return;
  }

  holder.innerHTML = items.map((item) => `
    <div class="admin-contact-row">
      <div class="admin-contact-head">
        <div class="admin-contact-name">${item.name || 'Unknown User'}</div>
        <div class="admin-contact-status">${contactStatusLabel(item.status)}</div>
      </div>
      <div class="admin-contact-meta">${item.email || '-'} · ${item.date}</div>
      <div class="admin-contact-msg">${item.message || '-'}</div>
    </div>`).join('');
}

// ADD BALANCE REQUEST
function syncAddBalanceQrAmount() {
  const amount = Number(document.getElementById('ab-amount').value);
  document.getElementById('ab-qr-amount').textContent = `₹${Number.isFinite(amount) && amount >= MIN_ADD_BALANCE_AMOUNT ? amount : 0}`;
}

function openAddBalance(presetAmount = null) {
  document.getElementById('ab-name').value = '';
  document.getElementById('ab-email').value = '';
  document.getElementById('ab-utr').value = '';
  document.getElementById('ab-amount').value = Number.isFinite(Number(presetAmount)) && Number(presetAmount) >= MIN_ADD_BALANCE_AMOUNT ? Number(presetAmount) : MIN_ADD_BALANCE_AMOUNT;
  syncAddBalanceQrAmount();
  document.getElementById('add-balance-overlay').classList.add('open');
}

function openAddBalanceFromSpin() {
  const amount = Number(document.getElementById('spin-add-balance-input').value);
  const normalizedAmount = Number.isFinite(amount) && amount >= MIN_ADD_BALANCE_AMOUNT ? amount : MIN_ADD_BALANCE_AMOUNT;
  document.getElementById('spin-add-balance-input').value = normalizedAmount;
  openAddBalance(normalizedAmount);
}

function closeAddBalance() {
  document.getElementById('add-balance-overlay').classList.remove('open');
}

function submitAddBalanceRequest() {
  const name = document.getElementById('ab-name').value.trim();
  const email = document.getElementById('ab-email').value.trim();
  const amount = Number(document.getElementById('ab-amount').value);
  const utr = document.getElementById('ab-utr').value.trim();

  if (!name || !email || !Number.isFinite(amount) || !utr) {
    alert('Please fill all required fields.');
    return;
  }
  if (amount < MIN_ADD_BALANCE_AMOUNT) {
    alert(`Minimum add balance amount is ₹${MIN_ADD_BALANCE_AMOUNT}.`);
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert('Please enter a valid email.');
    return;
  }

  addOrder({
    id: Date.now(),
    type: 'add_balance',
    product: 'Add Balance Request',
    balanceAmount: amount,
    price: amount,
    game: 'Wallet',
    name,
    email,
    utr,
    date: new Date().toLocaleDateString(),
    status: 'pending',
    balanceApplied: false
  });

  closeAddBalance();
  document.getElementById('success-msg').textContent = `Add balance request of ₹${amount} submitted. It can take up to 1 hour after admin approval.`;
  document.getElementById('success-overlay').classList.add('open');
  renderOrdersList();
  renderAdminOrders();
}

// ORDERS VIEW
function renderOrdersList() {
  const orders = getOrders();
  const list = document.getElementById('orders-list');
  if (!orders.length) {
    list.innerHTML = `<div style="text-align:center;padding:60px 20px;color:var(--text-muted);"><div style="font-size:56px;margin-bottom:12px;">📭</div><div style="font-weight:700;font-size:16px;">No orders yet</div></div>`;
    return;
  }

  list.innerHTML = orders.map((o) => {
    const rewardUnit = orderRewardCurrency(o);
    const title = o.type === 'withdraw'
      ? `🏧 ${rewardUnit} Withdraw Request`
      : o.type === 'add_balance'
        ? '💰 Add Balance Request'
        : `🛒 ${o.product}`;
    const metaMain = o.type === 'withdraw'
      ? `Withdraw ${o.ucAmount} ${rewardUnit} · ${o.game}`
      : o.type === 'add_balance'
        ? `Add ₹${o.balanceAmount} · Wallet`
        : `${o.game} · ID: ${o.bgmi}`;
    const amountLine = o.type === 'withdraw'
      ? `${o.ucAmount} ${rewardUnit}`
      : o.type === 'add_balance'
        ? `₹${o.balanceAmount}`
        : `₹${o.price}`;
    return `
      <div style="background:#fff;border:1.5px solid var(--border);border-radius:12px;padding:14px;margin-bottom:10px;">
        <div style="display:flex;justify-content:space-between;align-items:center;gap:8px;">
          <div style="font-weight:800;font-size:14px;">${title}</div>
          <div style="background:#fef9c3;color:#854d0e;font-size:11px;font-weight:700;padding:3px 10px;border-radius:8px;white-space:nowrap;">${statusLabel(o.status)}</div>
        </div>
        <div style="font-size:12px;color:var(--text-muted);margin-top:4px;">${metaMain} · ${o.date}</div>
        <div style="font-size:12px;color:var(--text-muted);margin-top:2px;">${o.email || '-'}${o.utr ? ` · UTR: ${o.utr}` : ''}</div>
        <div style="font-weight:900;color:var(--primary);margin-top:6px;">${amountLine}</div>
      </div>`;
  }).join('');
}

// ADMIN
function openAdmin() {
  if (!isAdminUnlocked()) {
    openAdminLogin();
    return;
  }
  document.getElementById('admin-overlay').classList.add('open');
  renderAdminList();
  renderAdminOrders();
  renderAdminContactRequests();
  updateAdminCatSelect();
  switchAdminSpinnerGame(adminSpinGame);
  document.getElementById('spin-admin-msg').textContent = '';
  document.getElementById('admin-pass-msg').textContent = '';
  applyPaymentQrImage();
  refreshOrdersFromServer();
}

function closeAdmin() {
  document.getElementById('admin-overlay').classList.remove('open');
}

function switchAdminGame(g) {
  adminGame = g === 'ff' ? 'ff' : 'bgmi';
  document.getElementById('admin-tab-bgmi').className = 'admin-game-tab' + (adminGame === 'bgmi' ? ' sel-bgmi' : '');
  document.getElementById('admin-tab-ff').className = 'admin-game-tab' + (adminGame === 'ff' ? ' sel-ff' : '');
  document.getElementById('admin-form-title').textContent = adminGame === 'ff' ? '➕ Add Free Fire Product' : '➕ Add BGMI Product';
  document.getElementById('admin-add-btn').textContent = adminGame === 'ff' ? '➕ Add Free Fire Product' : '➕ Add BGMI Product';
  document.getElementById('a-name').placeholder = adminGame === 'ff' ? 'e.g. 310 Diamonds' : 'e.g. 60 UC Pack';
  document.getElementById('a-icon').placeholder = 'e.g. 💎 or 👑';
  updateAdminCatSelect();
  renderAdminList();
  saveUiState();
}

function updateAdminCatSelect() {
  const sel = document.getElementById('a-cat');
  const cats = adminGame === 'ff' ? ffCats : bgmiCats;
  sel.innerHTML = cats.map((c) => `<option value="${c.val}">${c.label}</option>`).join('');
}

function pickColor(el) {
  document.querySelectorAll('.color-opt').forEach((e) => e.classList.remove('selected'));
  el.classList.add('selected');
  selectedColor = el.dataset.color;
}

function pickTag(el) {
  document.querySelectorAll('.tag-opt').forEach((e) => e.classList.remove('selected'));
  el.classList.add('selected');
  selectedTag = el.dataset.tag;
}

async function uploadProductImage(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string' && reader.result.trim()) {
        resolve(reader.result);
        return;
      }
      reject(new Error('image_read_failed'));
    };
    reader.onerror = () => reject(new Error('image_read_failed'));
    reader.readAsDataURL(file);
  });
}

function handleImgUpload(input) {
  const file = input.files[0];
  if (!file) return;
  if (file.size > 5 * 1024 * 1024) {
    alert('Image too large! Max 5MB.');
    return;
  }
  if (!file.type || !file.type.startsWith('image/')) {
    alert('Only image files are allowed.');
    return;
  }
  uploadedImgFile = file;
  const reader = new FileReader();
  reader.onload = function(e) {
    uploadedImgData = typeof e.target?.result === 'string' ? e.target.result : '';
    document.getElementById('img-preview').src = uploadedImgData;
    document.getElementById('img-upload-placeholder').style.display = 'none';
    document.getElementById('img-preview-container').style.display = 'block';
    document.getElementById('img-remove-btn').style.display = 'inline-block';
  };
  reader.readAsDataURL(file);
}

function handleDrop(e) {
  e.preventDefault();
  document.getElementById('img-upload-area').classList.remove('drag');
  const file = e.dataTransfer.files[0];
  if (file && file.type.startsWith('image/')) handleImgUpload({files:[file]});
}

function removeImage() {
  uploadedImgData = '';
  uploadedImgFile = null;
  document.getElementById('img-preview').src = '';
  document.getElementById('img-upload-placeholder').style.display = 'block';
  document.getElementById('img-preview-container').style.display = 'none';
  document.getElementById('img-remove-btn').style.display = 'none';
  document.getElementById('a-img-file').value = '';
}

async function addProduct() {
  const name = document.getElementById('a-name').value.trim();
  const desc = document.getElementById('a-desc').value.trim();
  const price = parseInt(document.getElementById('a-price').value, 10);
  const oldPrice = parseInt(document.getElementById('a-oldprice').value, 10) || 0;
  const icon = document.getElementById('a-icon').value.trim() || '💎';
  const cat = document.getElementById('a-cat').value;
  const priority = parseInt(document.getElementById('a-priority').value, 10);
  const addBtn = document.getElementById('admin-add-btn');
  const initialBtnText = addBtn ? addBtn.textContent : '';

  if (!name || !price) {
    alert('Product name and price are required!');
    return;
  }

  try {
    if (addBtn) {
      addBtn.disabled = true;
      addBtn.textContent = uploadedImgFile ? '⏳ Uploading Image...' : initialBtnText;
    }

    let imagePath = '';
    if (uploadedImgFile) {
      imagePath = await uploadProductImage(uploadedImgFile);
    }

    const newProd = {id:nextId++,name,desc,price,oldPrice,icon,img:imagePath,color:selectedColor,cat,tag:selectedTag,priority,game:adminGame};
    if (adminGame === 'ff') ffProducts.push(newProd);
    else bgmiProducts.push(newProd);
    saveProductsState();

    renderBgmi(currentCatBgmi);
    renderFF(currentCatFf);
    renderAdminList();
    ['a-name','a-desc','a-price','a-oldprice','a-icon'].forEach((itemId) => { document.getElementById(itemId).value = ''; });
    removeImage();
    alert(uploadedImgFile ? 'Product added with uploaded image (saved in browser storage).' : 'Product added successfully!');
  } catch (error) {
    console.error('Product save failed:', error);
    if (uploadedImgFile) {
      alert('Image save failed. Product not added.');
    } else {
      alert('Unable to add product right now.');
    }
  } finally {
    if (addBtn) {
      addBtn.disabled = false;
      addBtn.textContent = initialBtnText || (adminGame === 'ff' ? '➕ Add Free Fire Product' : '➕ Add BGMI Product');
    }
  }
}

function deleteProduct(id, game) {
  if (!confirm('Delete this product?')) return;
  if (game === 'ff') ffProducts = ffProducts.filter((p) => p.id !== id);
  else bgmiProducts = bgmiProducts.filter((p) => p.id !== id);
  saveProductsState();

  renderBgmi(currentCatBgmi);
  renderFF(currentCatFf);
  renderAdminList();
}

function renderAdminList() {
  const all = [...bgmiProducts, ...ffProducts].sort((a, b) => b.priority - a.priority);
  const filtered = adminGame === 'ff'
    ? [...ffProducts].sort((a, b) => b.priority - a.priority)
    : [...bgmiProducts].sort((a, b) => b.priority - a.priority);

  document.getElementById('prod-count').textContent = all.length;
  document.getElementById('admin-prod-list').innerHTML = filtered.map((p) => `
    <div class="admin-product-row${p.game === 'ff' ? ' ff-row' : ''}">
      ${p.img
        ? `<img src="${p.img}" style="width:48px;height:48px;border-radius:10px;object-fit:cover;flex-shrink:0;border:1.5px solid var(--border);" />`
        : `<div style="width:48px;height:48px;border-radius:10px;background:${p.color};display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0;">${p.icon}</div>`
      }
      <div class="admin-product-info">
        <div class="admin-product-name">${p.name}</div>
        <div class="admin-product-meta">${p.game === 'ff' ? '🔴 FF' : '🎮 BGMI'} · ${p.cat} · P:${p.priority}${p.tag ? ' · #' + p.tag : ''}</div>
      </div>
      <div style="text-align:right;flex-shrink:0;">
        <div class="admin-product-price${p.game === 'ff' ? ' ff-pr' : ''}">₹${p.price}</div>
        <button class="admin-del-btn" onclick="deleteProduct(${p.id},'${p.game}')" style="margin-top:4px;">🗑</button>
      </div>
    </div>`).join('');
}

function adminUpdateOrderStatus(orderId, status) {
  const next = normalizeStatus(status);
  const localAll = getAllOrders();
  const localTarget = localAll.find((o) => String(o.id) === String(orderId));
  if (!localTarget) return;

  const previousStatus = localTarget.status;
  localTarget.status = next;
  if (localTarget.type === 'add_balance' && previousStatus !== 'approved' && next === 'approved' && !localTarget.balanceApplied) {
    localTarget.balanceApplied = true;
    if (localTarget.accountId === spinnerUser.accountId) {
      spinnerUser.balance += localTarget.balanceAmount;
      saveSpinnerUser();
    }
  }
  saveOrders(localAll);
  syncWalletViews();
  renderAdminOrders();
  renderOrdersList();

  serverStoreMode = 'local';
  syncWalletViews();
  renderSpinnerUI();
  renderAdminOrders();
  renderOrdersList();
}

function renderAdminOrders() {
  const orders = getAllOrders();
  const holder = document.getElementById('admin-order-list');
  const count = document.getElementById('admin-order-count');
  if (!holder || !count) return;

  count.textContent = orders.length;
  if (!orders.length) {
    holder.innerHTML = `<div style="font-size:12px;color:var(--text-muted);font-weight:700;">No transactions yet.</div>`;
    return;
  }

  holder.innerHTML = orders.map((o) => {
    const rewardUnit = orderRewardCurrency(o);
    const title = o.type === 'withdraw'
      ? `🏧 ${rewardUnit} Withdraw`
      : o.type === 'add_balance'
        ? '💰 Add Balance'
        : `🛒 ${o.product}`;
    const meta = o.type === 'withdraw'
      ? `${o.ucAmount} ${rewardUnit} · ${o.game}`
      : o.type === 'add_balance'
        ? `₹${o.balanceAmount} · Wallet${o.balanceApplied ? ' · Credited' : ''}`
        : `₹${o.price} · ${o.game} · ID: ${o.bgmi || '-'}`;

    return `
      <div class="admin-order-row">
        <div class="admin-order-info">
          <div class="admin-order-name">${title}</div>
          <div class="admin-order-meta">${meta}<br>${o.email || '-'}${o.utr ? ' · UTR: ' + o.utr : ''} · ${o.date}</div>
        </div>
        <select class="admin-order-select" onchange="adminUpdateOrderStatus('${o.id}', this.value)">
          <option value="pending" ${o.status === 'pending' ? 'selected' : ''}>Pending</option>
          <option value="processing" ${o.status === 'processing' ? 'selected' : ''}>Processing</option>
          <option value="approved" ${o.status === 'approved' ? 'selected' : ''}>Approved</option>
          <option value="rejected" ${o.status === 'rejected' ? 'selected' : ''}>Rejected</option>
        </select>
      </div>`;
  }).join('');
}

// INIT
ensureAdminPasswordHash();
initProductsState();

const uiState = loadUiState();
currentGame = uiState.currentGame;
currentCatBgmi = uiState.currentCatBgmi;
currentCatFf = uiState.currentCatFf;
activeSpinGame = uiState.activeSpinGame;
adminGame = uiState.adminGame;
adminSpinGame = uiState.adminSpinGame;
currentPage = uiState.page;

renderBgmi(currentCatBgmi);
renderFF(currentCatFf);
setCategoryButtonState('bgmi', currentCatBgmi);
setCategoryButtonState('ff', currentCatFf);
switchGame(currentGame);

renderOrdersList();
renderAdminOrders();
renderAdminContactRequests();
updateAdminCatSelect();
switchAdminGame(adminGame);
updateAdminSpinnerLabelText();
loadSpinnerSettingsToAdmin();
saveSpinnerSettingsToStorage();
saveSpinnerUser();
saveProductsState();
switchSpinGame(activeSpinGame);

syncWalletViews();
applyPaymentQrImage();

const hashPage = pageFromHash();
const initialPage = hashPage || currentPage;
setPageView(initialPage, null, false);
if (!hashPage) {
  window.history.replaceState({page: initialPage}, '', `#${initialPage}`);
}

document.getElementById('ab-amount').addEventListener('input', syncAddBalanceQrAmount);
document.getElementById('admin-login-pass').addEventListener('keydown', (event) => {
  if (event.key === 'Enter') submitAdminLogin();
});
window.addEventListener('resize', renderSpinSectionLabels);
window.addEventListener('hashchange', () => {
  const page = pageFromHash();
  if (page) setPageView(page, null, false);
});
window.addEventListener('storage', (event) => {
  if (!event.key) return;
  if (event.key === POLICY_CONSENT_KEY) {
    openPolicyConsentIfNeeded();
    return;
  }
  if (event.key === CONTACT_REQUESTS_KEY) {
    renderAdminContactRequests();
    return;
  }
  if ([SPINNER_SETTINGS_KEY, SPINNER_USER_KEY, ORDERS_KEY, PRODUCTS_KEY].includes(event.key)) {
    spinnerSettings = loadSpinnerSettings();
    spinnerUser = loadSpinnerUser();
    initProductsState();
    renderBgmi(currentCatBgmi);
    renderFF(currentCatFf);
    renderOrdersList();
    renderAdminList();
    renderAdminOrders();
    renderSpinnerUI();
    syncWalletViews();
  }
});
window.addEventListener('beforeunload', saveUiState);
openPolicyConsentIfNeeded();
bootstrapSharedStore();
