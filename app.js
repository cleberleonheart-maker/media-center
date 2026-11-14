const catalog = [
  {
    id: 'orbita-vermelha',
    title: 'Órbita Vermelha',
    type: 'filme',
    year: 2025,
    duration: '2h 18min',
    maturity: '16+',
    match: 98,
    rating: '8.7',
    genres: ['Ficção científica', 'Thriller'],
    description: 'Quando uma estação espacial isolada recebe um sinal de origem desconhecida, a engenheira Maya Torres precisa decidir se está salvando sua tripulação ou condenando o futuro da humanidade.',
    cast: ['Helena Costa', 'Ravi Mendes', 'Sofia Almeida'],
    director: 'Bruno Salgado',
    poster: 'https://image.tmdb.org/t/p/w780/9Gtg2DzBhmUa6z8UWnVTewZ6DP2.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/56v2KjBlU4XaOv9rVYEQypROD7P.jpg',
    original: true,
    trending: true,
    top: true,
    new: true,
    video: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
  },
  {
    id: 'linha-de-fuga',
    title: 'Linha de Fuga',
    type: 'filme',
    year: 2024,
    duration: '1h 57min',
    maturity: '14+',
    match: 95,
    rating: '8.2',
    genres: ['Ação', 'Suspense'],
    description: 'Uma transportadora descobre que o cargamento mais importante de sua carreira contém uma prova capaz de derrubar um império inteiro.',
    cast: ['Lucas Prado', 'Nina Duarte', 'Caio Lemos'],
    director: 'Marina Vieira',
    poster: 'https://image.tmdb.org/t/p/w780/rktDFPbfHfUbArZ6OOOKs0mRk6Z.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/4mhKFeinp0JfEx8Vb1B9aeuA1FfK.jpg',
    trending: true,
    top: true,
    video: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4'
  },
  {
    id: 'a-cidade-do-eco',
    title: 'A Cidade do Eco',
    type: 'serie',
    year: 2025,
    duration: '2 temporadas',
    maturity: '16+',
    match: 97,
    rating: '9.1',
    genres: ['Mistério', 'Drama'],
    description: 'Em uma cidade costeira onde os ecos não permiten que os moradores revelem seus segredos, um agente policial investiga um desaparecimento.',
    cast: ['Mariana Alves', 'Tomás Rocha', 'Lúcia Faria'],
    director: 'André Sampaio',
    poster: 'https://image.tmdb.org/t/p/w780/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/psv7z16M3vlkB8vY1E1H4CZQO4V.jpg',
    original: true,
    trending: true,
    top: true,
    new: true,
    seasons: [
      { name: 'Temporada 1', episodes: ['O primeiro chamado', 'Vozes na névoa', 'A casa vazia', 'Marés baixas', 'Quem vigia a vigia', 'O último sino'] },
      { name: 'Temporada 2', episodes: ['O retorno', 'Arquivo morto', 'Fita 12', 'A outra margem', 'Sem testemunhas', 'O eco final'] }
    ],
    video: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4'
  },
  {
    id: 'barulhento',
    title: 'Barulhento',
    type: 'filme',
    year: 2024,
    duration: '1h 49min',
    maturity: '13+',
    match: 93,
    rating: '7.9',
    genres: ['Comédia', 'Romance'],
    description: 'Uma DJ que não fala durante shows e um produtor obsessivo por silêncio tentam criar a colaboração mais importante de suas vidas.',
    cast: ['Bia Torres', 'Gui Nunes', 'Nina Siqueira'],
    director: 'Paula Ribeiro',
    poster: 'https://image.tmdb.org/t/p/w780/4YNtCjmoCJOiQZ0iZ7S8bJ8Qf9P.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/pb1Ekq9W0Y9j8sD3sD1W9m5bG8.jpg',
    trending: true,
    new: true,
    video: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4'
  },
  {
    id: 'professor-de-nenhum-lugar',
    title: 'Professor de Nenhum Lugar',
    type: 'serie',
    year: 2023,
    duration: '3 temporadas',
    maturity: '12+',
    match: 91,
    rating: '8.4',
    genres: ['Comédia', 'Fantasia'],
    description: 'Um professor de história que pode viajar no tempo descobre que suas aulas estão alterando o passado — e não exatamente para melhorar.',
    cast: ['Fábio Azevedo', 'Clara Monteiro', 'Vitor Nascimento'],
    director: 'Carla Menezes',
    poster: 'https://image.tmdb.org/t/p/w780/1D4Z7fNNL6SSqBqkKN6X6x4hB2F.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/5xu7zxM8O4s2m9B8k4vK2Q1e1a.jpg',
    original: true,
    top: true,
    video: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4'
  },
  {
    id: 'terra-dos-ventos',
    title: 'Terra dos Ventos',
    type: 'documentario',
    year: 2024,
    duration: '1h 32min',
    maturity: 'L',
    match: 96,
    rating: '9.3',
    genres: ['Documentário', 'Natureza'],
    description: 'Uma jornada cinematográfica pelas paisagens do Pantanal e pelos desafios que enfrentam as comunidades que habitam suas fronteiras.',
    cast: ['Narrado por João Mendes'],
    director: 'Elisa Tavares',
    poster: 'https://image.tmdb.org/t/p/w780/3EPMoYZLztNq2x7L4j9w8w8bM6.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/4w6c7Y6Yq8H7wD6q8x8jv0n3rT.jpg',
    original: true,
    trending: true,
    new: true,
    video: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'
  },
  {
    id: 'noite-branca',
    title: 'Noite Branca',
    type: 'filme',
    year: 2023,
    duration: '2h 04min',
    maturity: '18+',
    match: 94,
    rating: '8.1',
    genres: ['Crime', 'Suspense'],
    description: 'Uma noite de inverno, um hotel vazio e quatro desconhecidos com a mesma missão: recuperar um documento antes do amanhecer.',
    cast: ['Igor Torres', 'Sabrina Lopes', 'Márcia Reis'],
    director: 'Renato Vilela',
    poster: 'https://image.tmdb.org/t/p/w780/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/psv7z16M3vlkB8vY1E1H4CZQO4V.jpg',
    top: true,
    video: 'https://storage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4'
  },
  {
    id: 'herois-do-quarteirao',
    title: 'Heróis do Quarteirão',
    type: 'serie',
    year: 2024,
    duration: '2 temporadas',
    maturity: '12+',
    match: 92,
    rating: '8.6',
    genres: ['Ação', 'Comédia'],
    description: 'Dois amigos decidem proteger seu bairro de um novo plano criminal usando habilidades improváveis e um senso de humor fora do lugar.',
    cast: ['Diego Souza', 'Pedro Henrique', 'Alice Martins'],
    director: 'Luiza Campos',
    poster: 'https://image.tmdb.org/t/p/w780/6UuCkbV4Y8R4S1T9n7s7xk3O8d.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/7WsyChQLEftFiDOVTGce3QaL2sV.jpg',
    trending: true,
    new: true,
    video: 'https://storage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4'
  },
  {
    id: 'mapa-dos-sonhos',
    title: 'Mapa dos Sonhos',
    type: 'filme',
    year: 2022,
    duration: '1h 45min',
    maturity: '10+',
    match: 90,
    rating: '7.8',
    genres: ['Infantil', 'Fantasia'],
    description: 'Uma criança encontra um mapa que mostra o caminho para lugares onde as pessoas podem viver seus sonhos — mas cada viagem cobra um preço.',
    cast:['Helena Teixeira', 'Miguel Costa', 'Rita Freire'],
    director: 'Nina Barros',
    poster: 'https://image.tmdb.org/t/p/w780/4YNtCjmoCJOiQZ0iZ7S8bJ8Qf9P.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/pb1Ekq9W0Y9j8sD3sD1W9m5bG8.jpg',
    video: 'https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4'
  },
  {
    id: 'setor-13',
    title: 'Setor 13',
    type: 'serie',
    year: 2025,
    duration: '1 temporada',
    maturity: '18+',
    match: 97,
    rating: '8.9',
    genres: ['Terror', 'Mistério'],
    description: 'Uma equipe de resgate entra em um complexo abandonado onde o tempo parou. Cada porta aberta leva a um pesadelo diferente.',
    cast: ['Felipe Cardoso', 'Marina Duarte', 'Otávio Ramos'],
    director: 'Joana Prado',
    poster: 'https://image.tmdb.org/t/p/w780/9Gtg2DzBhmUa6z8UWnVTewZ6DP2.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/56v2KjBlU4XaOv9rVYEQypROD7P.jpg',
    original: true,
    new: true,
    trending: true,
    top: true,
    video: 'https://storage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4'
  },
  {
    id: 'ultimo-trem',
    title: 'Último Trem',
    type: 'filme',
    year: 2024,
    duration: '1h 51min',
    maturity: '14+',
    match: 93,
    rating: '8.0',
    genres: ['Romance', 'Drama'],
    description: 'Dois desconhecidos embarcam no mesmo trem para o fim da linha e tentam não se despedir antes da última estação.',
    cast: ['Bianca Freitas', 'Otávio Lima', 'Maria Clara'],
    director: 'Leonardo Motta',
    poster: 'https://image.tmdb.org/t/p/w780/3EPMoYZLztNq2x7L4j9w8w8bM6.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/4w6c7Y6Yq8H7wD6q8x8jv0n3rT.jpg',
    trending: true,
    video: 'https://storage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4'
  },
  {
    id: 'café-na-neblina',
    title: 'Café na Neblina',
    type: 'serie',
    year: 2024,
    duration: '2 temporadas',
    maturity: '10+',
    match: 89,
    rating: '8.3',
    genres: ['Drama', 'Romance'],
    description: 'Um café popular no centro da cidade se torna o ponto de encontro de pessoas tentando recomeçar depois de perder tudo.',
    cast: ['Laura Moreira', 'Caio Bruno', 'Renata Luz'],
    director: 'Bianca Rocha',
    poster: 'https://image.tmdb.org/t/p/w780/6UuCkbV4Y8R4S1T9n7s7xk3O8d.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/7WsyChQLEftFiDOVTGce3QaL2sV.jpg',
    original: true,
    video: 'https://storage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4'
  },
  {
    id: 'ilha-som',
    title: 'Ilha Som',
    type: 'documentario',
    year: 2023,
    duration: '1h 26min',
    maturity: 'L',
    match: 91,
    rating: '8.8',
    genres: ['Documentário', 'Música'],
    description: 'Músicos de seis ilhas isoladas se reúnem para preservar e transformar os sons de suas comunidades.',
    cast: ['Participação de vários artistas'],
    director: 'Sérgio Leal',
    poster: 'https://image.tmdb.org/t/p/w780/1D4Z7fNNL6SSqBqkKN6X6x4hB2F.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/5xu7zxM8O4s2m9B8k4vK2Q1e1a.jpg',
    video: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
  },
  {
    id: 'heranca',
    title: 'Herança',
    type: 'filme',
    year: 2025,
    duration: '2h 11min',
    maturity: '16+',
    match: 95,
    rating: '8.4',
    genres: ['Drama', 'Suspense'],
    description: 'Após a morte do pai, três irmãos descobrem que a herança inclui uma empresa construída sobre mentiras e um segredo que muda tudo.',
    cast: ['Ana Clara', 'Miguel Arraes', 'Pedro Yves'],
    director: 'Sofia Vasconcelos',
    poster: 'https://image.tmdb.org/t/p/w780/rktDFPbfHfUbArZ6OOOKs0mRk6Z.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/4mhKFeinp0JfEx8Vb1B9aeuA1FfK.jpg',
    original: true,
    new: true,
    trending: true,
    top: true,
    video: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
  },
  {
    id: 'carroste',
    title: 'Carroste',
    type: 'filme',
    year: 2022,
    duration: '1h 38min',
    maturity: '10+',
    match: 87,
    rating: '7.5',
    genres: ['Infantil', 'Comédia'],
    description: 'Um garoto encontra um carro falante que transforma qualquer viagem em uma aventura improvável.',
    cast: ['Theo Martins', 'Laura Pires'],
    director: 'Bruno Cordeiro',
    poster: 'https://image.tmdb.org/t/p/w780/4YNtCjmoCJOiQZ0iZ7S8bJ8Qf9P.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/pb1Ekq9W0Y9j8sD3sD1W9m5bG8.jpg',
    video: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4'
  },
  {
    id: 'vigilia',
    title: 'Vigília',
    type: 'serie',
    year: 2023,
    duration: '3 temporadas',
    maturity: '16+',
    match: 94,
    rating: '8.7',
    genres: ['Thriller', 'Policial'],
    description: 'Uma unidade de elite recebe casos que obrigam seus investigadores a confrontar o que preferem não ver.',
    cast: ['Gustavo Nunes', 'Patrícia Leal', 'Fábio Aguiar'],
    director: 'Ricardo Salles',
    poster: 'https://image.tmdb.org/t/p/w780/9Gtg2DzBhmUa6z8UWnVTewZ6DP2.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/56v2KjBlU4XaOv9rVYEQypROD7P.jpg',
    original: true,
    top: true,
    video: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4'
  }
];

const artworkAssets = {
  'orbita-vermelha': ['xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg', 'xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg'],
  'linha-de-fuga': ['vZloFAK7NmvMGKE7VkF5UHaz0I.jpg', 'n6bUvigpRFqSwmPp1m2YADdbRBc.jpg'],
  'a-cidade-do-eco': ['apbrbWs8M9lyOpJYU5WXrpFbk1Z.jpg', 'tsRy63Mu5cu8etL1X7ZLyf7UP1M.jpg'],
  'barulhento': ['r2J02Z2OpNTctfOSN1Ydgii51I3.jpg', 'r2J02Z2OpNTctfOSN1Ydgii51I3.jpg'],
  'professor-de-nenhum-lugar': ['8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg', 'ilRyazdMJwN05exqhwK4tMKBYZs.jpg'],
  'terra-dos-ventos': ['TU9NIjwzjoKPwQHoHshkFcQUCG.jpg', 'suaEOtk1N1sgg2MTM7oZd2cfVp3.jpg'],
  'noite-branca': ['qJ2tW6WMUDux911r6m7haRef0WH.jpg', '4HodYYKEIsGOdinkGi2Ucz6X9i0.jpg'],
  'herois-do-quarteirao': ['2zmTngn1tYC1AvfnrFLhxeD82hz.jpg', '56v2KjBlU4XaOv9rVYEQypROD7P.jpg'],
  'mapa-dos-sonhos': ['f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg', '4HodYYKEIsGOdinkGi2Ucz6X9i0.jpg'],
  'setor-13': ['AnsSKR9LuK0T9bAOcPVA3PUvyWj.jpg', 'uDgy6hyPd82kOHh6I95FLtLnj6p.jpg'],
  'ultimo-trem': ['8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg', 'fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg'],
  'café-na-neblina': ['fqldf2t8ztc9aiwn3k6mlX3tvRT.jpg', 'rkB4LyZHo1NHXFEDHl9vSD9r1lI.jpg'],
  'ilha-som': ['9PFonBhy4cQy7Jz20NpMygczOkv.jpg', 'iHSwvRVsRyxpX7FE7GbviaDvgGZ.jpg'],
  'heranca': ['vZloFAK7NmvMGKE7VkF5UHaz0I.jpg', 'xJHokMbljvjADYdit5fK5VQsXEG.jpg'],
  'carroste': ['lFf6LLrQjYldcZItzOkGmMMigP7.jpg', 'b0PlSFdDwbyK0cf5RxwDpaOJQvQ.jpg'],
  'vigilia': ['sHFlbKS3WLqMnp9t2ghADIJFnuQ.jpg', '56v2KjBlU4XaOv9rVYEQypROD7P.jpg']
};

const demoVideo = 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4';

catalog.forEach((item) => {
  const assets = artworkAssets[item.id];
  if (!assets) return;
  item.poster = `https://image.tmdb.org/t/p/w780/${assets[0]}`;
  item.backdrop = `https://image.tmdb.org/t/p/original/${assets[1]}`;
  item.video = demoVideo;
});

const fallbackArtwork = `data:image/svg+xml;charset=utf-8,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 600"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#2b2b2b"/><stop offset="1" stop-color="#0d0d0d"/></linearGradient></defs><rect width="400" height="600" fill="url(#g)"/><text x="200" y="320" fill="#e50914" font-family="Inter,Arial,sans-serif" font-size="76" font-weight="900" text-anchor="middle">N</text></svg>')}`;

const defaultProgress = {
  'a-cidade-do-eco': { percent: 38, seconds: 1280 },
  'orbita-vermelha': { percent: 67, seconds: 4960 },
  'herois-do-quarteirao': { percent: 19, seconds: 510 },
  'ultimo-trem': { percent: 82, seconds: 5520 }
};

const storage = {
  get(key, fallback) {
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : fallback;
    } catch {
      return fallback;
    }
  },
  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      return false;
    }
    return true;
  }
};

const PROFILE_COLORS = ['#e50914', '#f5a623', '#4f9cf9', '#39c07c', '#b06ef5', '#f06292', '#00bcd4', '#ff7043'];
const KIDS_MATURITY = new Set(['L', '10+', '12+']);
const PROFILES_KEY = 'nexa-profiles';
const ACTIVE_PROFILE_KEY = 'nexa-active-profile';

function profileInitials(name) {
  const parts = String(name || '').trim().split(/\s+/).filter(Boolean);
  if (!parts.length) return 'N';
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
}

function normalizeProfile(raw, index = 0) {
  const source = raw && typeof raw === 'object' ? raw : {};
  const pin = String(source.pin || '').replace(/\D/g, '').slice(0, 4);
  const safeId = String(source.id || '').replace(/[^a-zA-Z0-9_-]/g, '').slice(0, 64);
  return {
    id: safeId || `perfil-${Date.now()}-${index}`,
    name: String(source.name || 'Perfil').trim().slice(0, 32) || 'Perfil',
    kids: Boolean(source.kids),
    pin: pin.length === 4 ? pin : '',
    color: /^#[0-9a-f]{6}$/i.test(source.color || '') ? source.color : PROFILE_COLORS[index % PROFILE_COLORS.length],
    list: Array.isArray(source.list) ? source.list.filter((id) => typeof id === 'string') : [],
    liked: Array.isArray(source.liked) ? source.liked.filter((id) => typeof id === 'string') : [],
    progress: source.progress && typeof source.progress === 'object' && !Array.isArray(source.progress) ? { ...source.progress } : {}
  };
}

function loadProfiles() {
  const saved = storage.get(PROFILES_KEY, null);
  if (Array.isArray(saved) && saved.length) return saved.map(normalizeProfile);
  const legacyList = storage.get('nexa-list', []);
  const legacyLiked = storage.get('nexa-liked', []);
  const legacyProgress = storage.get('nexa-progress', null);
  const progress = legacyProgress && typeof legacyProgress === 'object' && !Array.isArray(legacyProgress)
    ? { ...defaultProgress, ...legacyProgress }
    : { ...defaultProgress };
  return [normalizeProfile({
    id: 'principal',
    name: 'Cleber Leonheart',
    color: PROFILE_COLORS[0],
    list: legacyList,
    liked: legacyLiked,
    progress
  })];
}

const profiles = loadProfiles();
let activeProfileId = storage.get(ACTIVE_PROFILE_KEY, profiles[0].id);
if (!profiles.some((profile) => profile.id === activeProfileId)) activeProfileId = profiles[0].id;

function activeProfile() {
  return profiles.find((profile) => profile.id === activeProfileId) || profiles[0];
}

function saveProfiles() {
  storage.set(PROFILES_KEY, profiles);
  storage.set(ACTIVE_PROFILE_KEY, activeProfileId);
}

const state = {
  view: 'home',
  previousView: 'home',
  query: '',
  genre: 'Todos',
  sort: 'relevancia',
  searchFilters: { type: 'todos', genre: 'Todos', year: 'todos', rating: 0 },
  quality: storage.get('nexa-quality', 'HD'),
  autoplay: storage.get('nexa-autoplay', true),
  list: new Set(activeProfile().list),
  liked: new Set(activeProfile().liked),
  progress: { ...activeProfile().progress },
  activeItem: null,
  activeSeason: 0,
  activeEpisode: 0,
  activeVideo: null,
  driveConfig: null,
  localConfig: null,
  musicAlbums: [],
  activeAlbum: null,
  activeTrackIndex: -1,
  hideControlsTimer: null
};

function persistActiveProfile() {
  const profile = activeProfile();
  if (!profile) return;
  profile.list = [...state.list];
  profile.liked = [...state.liked];
  profile.progress = { ...state.progress };
  saveProfiles();
}

const subtitleStore = new Map();
let activeSubtitleId = null;
let subtitleObjectUrls = [];
let subtitleCounter = 0;

function currentCatalog() {
  if (!activeProfile()?.kids) return catalog;
  return catalog.filter((item) => KIDS_MATURITY.has(item.maturity));
}

function isAllowedItem(item) {
  if (!item) return false;
  if (!activeProfile()?.kids) return true;
  return KIDS_MATURITY.has(item.maturity);
}

const icons = {
  play: 'icon-play',
  info: 'icon-info',
  plus: 'icon-plus',
  check: 'icon-check',
  bookmark: 'icon-bookmark',
  chevron: 'icon-chevron',
  film: 'icon-film',
  tv: 'icon-tv',
  sparkle: 'icon-sparkle',
  search: 'icon-search',
  lock: 'icon-lock',
  user: 'icon-user'
};

const mainContent = document.getElementById('main-content');
const detailsDialog = document.getElementById('details-dialog');
const playerDialog = document.getElementById('player-dialog');
const videoPlayer = document.getElementById('video-player');
const subtitleMenu = document.getElementById('subtitle-menu');
const subtitleMenuList = document.getElementById('subtitle-menu-list');
const subtitleButton = document.getElementById('player-subtitles');
const subtitleFileInput = document.getElementById('subtitle-file');
const subtitleSearchDialog = document.getElementById('subtitle-search-dialog');
const subtitleSearchInput = document.getElementById('subtitle-search-query');
const subtitleResults = document.getElementById('subtitle-results');
const subtitleSearchOpen = document.getElementById('subtitle-search-open');
const subtitleSaveHd = document.getElementById('subtitle-save-hd');
const searchInput = document.getElementById('search-input');
const searchBox = document.querySelector('.search-box');
const toastRegion = document.getElementById('toast-region');
const musicPlayerBar = document.getElementById('music-player-bar');
const musicAudio = document.getElementById('music-audio');
const musicCover = document.getElementById('music-cover');
const musicTitle = document.getElementById('music-title');
const musicArtist = document.getElementById('music-artist');

const typeLabel = {
  filme: 'Filme',
  serie: 'Série',
  documentario: 'Documentário'
};

const DRIVE_API = 'https://www.googleapis.com/drive/v3/files';
const DRIVE_FOLDER_MIME = 'application/vnd.google-apps.folder';
const DRIVE_VIDEO_EXTENSIONS = new Set(['mp4', 'm4v', 'webm', 'ogv', 'ogg', 'mov', 'mkv', 'avi', 'wmv', 'flv', 'ts', 'm2ts']);
const DRIVE_BROWSER_EXTENSIONS = new Set(['mp4', 'm4v', 'webm', 'ogv', 'ogg']);
const DRIVE_SUBTITLE_EXTENSIONS = new Set(['srt', 'vtt']);
const DRIVE_IMAGE_EXTENSIONS = new Set(['jpg', 'jpeg', 'png', 'webp', 'avif', 'gif']);
const DRIVE_GENERIC_FOLDER = /^(filmes?|movies?|s[ée]ries?|series|shows?|tv|televis[aã]o|v[ií]deos?|videos?|m[ií]dia|media|meu drive|my drive|google drive|animes?|anima[cç][aã]o|document[aá]rios?|a[cç][aã]o|com[eé]dia|drama|terror|suspense|fic[cç][aã]o|romance|infantil|fam[ií]lia|familia)$/i;
const DRIVE_SERIES_HINT = /\b(s[ée]ries?|series|shows?|tv|televis[aã]o|animes?|novelas?)\b/i;
let driveLoading = false;

function driveFileExtension(name) {
  const match = String(name || '').match(/\.([a-z0-9]{2,5})$/i);
  return match ? match[1].toLowerCase() : '';
}

function isDriveFolder(file) {
  return file?.mimeType === DRIVE_FOLDER_MIME;
}

function isDriveVideo(file) {
  if (!file) return false;
  return String(file.mimeType || '').startsWith('video/') || DRIVE_VIDEO_EXTENSIONS.has(driveFileExtension(file.name));
}

function isDriveImage(file) {
  if (!file) return false;
  return String(file.mimeType || '').startsWith('image/') || DRIVE_IMAGE_EXTENSIONS.has(driveFileExtension(file.name));
}

function isDriveSubtitle(file) {
  if (!file) return false;
  return DRIVE_SUBTITLE_EXTENSIONS.has(driveFileExtension(file.name));
}

function subtitleLanguage(name) {
  const text = String(name || '').toLowerCase();
  if (/(^|[^a-z])(pt[- ]?br|ptbr)([^a-z]|$)/.test(text)) return { code: 'pt-BR', label: 'Português (BR)' };
  if (/(^|[^a-z])(pt|por|portug[uê]es|portuguese)([^a-z]|$)/.test(text)) return { code: 'pt', label: 'Português' };
  if (/(^|[^a-z])(en|eng|english|ingl[eê]s)([^a-z]|$)/.test(text)) return { code: 'en', label: 'Inglês' };
  if (/(^|[^a-z])(es|spa|spanish|espanhol)([^a-z]|$)/.test(text)) return { code: 'es', label: 'Espanhol' };
  if (/(^|[^a-z])(fr|fre|french|franc[eê]s)([^a-z]|$)/.test(text)) return { code: 'fr', label: 'Francês' };
  if (/(^|[^a-z])(de|ger|german|alem[aã]o)([^a-z]|$)/.test(text)) return { code: 'de', label: 'Alemão' };
  if (/(^|[^a-z])(it|ita|italian|italiano)([^a-z]|$)/.test(text)) return { code: 'it', label: 'Italiano' };
  if (/(^|[^a-z])(ja|jp|japanese|japon[eê]s)([^a-z]|$)/.test(text)) return { code: 'ja', label: 'Japonês' };
  return { code: '', label: '' };
}

function subtitleDisplayLabel(name) {
  const language = subtitleLanguage(name);
  const forced = /\bforced\b/i.test(name) ? ' forçada' : '';
  const sdh = /\b(sdh|cc)\b/i.test(name) ? ' SDH' : '';
  if (language.label) return `${language.label}${forced}${sdh}`;
  return `${splitDriveTitle(name).title || String(name || 'Legenda')}${forced}${sdh}`.trim();
}

function driveSubtitleCore(name) {
  const base = String(name || '').replace(/\.[a-z0-9]{2,5}$/i, '');
  const core = base
    .replace(/\[[^\]]*\]/g, ' ')
    .replace(/\b(2160p|1080p|720p|480p|4k|uhd|bluray|blu ray|brrip|bdrip|webrip|web dl|webdl|hdrip|dvdrip|remux|proper|repack|x264|x265|h264|h265|hevc|av1|aac|ac3|eac3|dts|dual audio|dublado|legendado)\b.*$/i, ' ');
  return normalizeDriveKey(core).replace(/-(?:pt-?br|ptbr|pt|por|portugues|portuguese|eng|en|english|ingles|spa|es|espanhol|spanish|fre|fr|french|frances|ger|de|german|alemao|ita|it|italian|italiano|ja|jp|japanese|japones)(?:-.*)?$/, '');
}

function findDriveSubtitles(videoFile, subtitles, apiKey) {
  if (!videoFile || !subtitles.length) return [];
  const core = driveSubtitleCore(videoFile.name);
  if (!core) return [];
  const parentId = videoFile.ancestors?.[videoFile.ancestors.length - 1]?.id || null;
  const matches = subtitles.filter((file) => {
    const subCore = driveSubtitleCore(file.name);
    return subCore && (subCore === core || core.startsWith(`${subCore}-`) || subCore.startsWith(`${core}-`));
  });
  const sameFolder = matches.filter((file) => (file.ancestors?.[file.ancestors.length - 1]?.id || null) === parentId);
  const chosen = sameFolder.length ? sameFolder : matches;
  return chosen.map((file) => {
    const language = subtitleLanguage(file.name);
    return {
      id: `drive-sub-${file.id}`,
      label: subtitleDisplayLabel(file.name),
      lang: language.code || 'pt',
      source: 'drive',
      fileId: file.id,
      name: file.name,
      url: driveMediaUrl(file.id, apiKey || '')
    };
  });
}

function srtToVtt(text) {
  const normalized = String(text || '').replace(/^\uFEFF/, '').replace(/\r\n?/g, '\n').trim();
  if (!normalized) return '';
  if (/^WEBVTT/i.test(normalized)) return `${normalized}\n`;
  const cueText = normalized
    .replace(/(\d{2}:\d{2}:\d{2}),(\d{1,3})/g, (_match, stamp, millis) => `${stamp}.${millis.padEnd(3, '0')}`)
    .replace(/(\d{2}:\d{2}),(\d{1,3})/g, (_match, stamp, millis) => `00:${stamp}.${millis.padEnd(3, '0')}`);
  return `WEBVTT\n\n${cueText}\n`;
}

function isBrowserVideo(file) {
  return DRIVE_BROWSER_EXTENSIONS.has(driveFileExtension(file?.name)) || ['video/mp4', 'video/webm', 'video/ogg'].includes(file?.mimeType);
}

function parseDriveFolderId(value) {
  const text = String(value || '').trim();
  if (!text) return null;
  const folderMatch = text.match(/(?:\/folders\/|\/drive\/u\/\d+\/folders\/)([A-Za-z0-9_-]{8,})/);
  if (folderMatch) return folderMatch[1];
  const idMatch = text.match(/[?&]id=([A-Za-z0-9_-]{8,})/);
  if (idMatch) return idMatch[1];
  if (/^[A-Za-z0-9_-]{8,}$/.test(text)) return text;
  return null;
}

function splitDriveTitle(raw) {
  let name = String(raw || '').replace(/\.[a-z0-9]{2,5}$/i, '').replace(/[._]+/g, ' ').replace(/\s+/g, ' ').trim();
  const yearMatch = name.match(/\b(19\d{2}|20\d{2})\b/);
  const year = yearMatch ? Number(yearMatch[1]) : null;
  let title = name
    .replace(/\b(19\d{2}|20\d{2})\b/g, ' ')
    .replace(/\b(2160p|1080p|720p|480p|4k|uhd|bluray|blu ray|brrip|bdrip|webrip|web dl|webdl|hdrip|dvdrip|remux|proper|repack|x264|x265|h264|h265|hevc|av1|aac|ac3|eac3|dts|dual audio|dublado|legendado)\b.*$/i, ' ')
    .replace(/\[[^\]]*\]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  title = title.replace(/^[-–—\s]+|[-–—\s]+$/g, '');
  return { title: title || name || String(raw || ''), year };
}

function parseSeasonNumber(name) {
  const text = String(name || '').replace(/[._]+/g, ' ').trim();
  let match = text.match(/\b(?:temporada|season|temp)\s*(\d{1,2})\b/i);
  if (match) return Number(match[1]);
  match = text.match(/^\s*(\d{1,2})\s*[ªa]?\s*temporada\b/i);
  if (match) return Number(match[1]);
  match = text.match(/^\s*(?:t|s)(\d{1,2})\s*$/i);
  return match ? Number(match[1]) : null;
}

function parseEpisodeInfo(name) {
  const text = String(name || '').replace(/[._]+/g, ' ');
  let match = text.match(/\b(?:s|t)(\d{1,2})\s*[\s-]*e(\d{1,3})\b/i) || text.match(/\b(\d{1,2})x(\d{1,3})\b/i);
  if (match) return { season: Number(match[1]), episode: Number(match[2]), explicit: true };
  match = text.match(/\b(?:epis[oó]dio|episode|ep|cap[ií]tulo)\s*(\d{1,3})\b/i);
  if (match) return { season: null, episode: Number(match[1]), explicit: true };
  match = text.match(/\bE(\d{1,3})\b/i);
  if (match) return { season: null, episode: Number(match[1]), explicit: true };
  return { season: null, episode: null, explicit: false };
}

function parseLooseEpisodeNumber(name) {
  const strict = parseEpisodeInfo(name);
  if (strict.episode !== null) return strict.episode;
  const text = String(name || '').replace(/\.[a-z0-9]{2,5}$/i, '').replace(/[._]+/g, ' ');
  const matches = text.matchAll(/(?:^|[-–—\s(])(\d{1,3})(?=\s|[-–—.)\]]|$)/g);
  for (const match of matches) {
    const number = Number(match[1]);
    if (number < 1) continue;
    if (number >= 1900 && number <= 2099) continue;
    if ([264, 265, 480, 576, 720, 1080, 2160].includes(number)) continue;
    return number;
  }
  return null;
}

function cleanEpisodeTitle(raw, episodeNumber) {
  const base = splitDriveTitle(raw).title;
  let title = base
    .replace(/\b(?:s|t)\d{1,2}\s*[\s-]*e\d{1,3}\b/ig, ' ')
    .replace(/\b\d{1,2}x\d{1,3}\b/ig, ' ')
    .replace(/\b(?:epis[oó]dio|episode|ep|cap[ií]tulo)\s*\d{1,3}\b/ig, ' ')
    .replace(/\b(?:t|s)\d{1,2}\b/ig, ' ')
    .replace(/\bE\d{1,3}\b/ig, ' ')
    .replace(/^\s*\d{1,3}\s*[-–—.)]\s*/, ' ');
  if (episodeNumber !== null && episodeNumber !== undefined) {
    title = title.replace(new RegExp(`(?:^|[-–—\\s])0*${episodeNumber}(?=\\s|[-–—.)]|$)`), ' ');
  }
  title = title.replace(/\s+/g, ' ').trim();
  return title || `Episódio ${episodeNumber || ''}`.trim();
}

function formatDriveDuration(seconds) {
  if (!Number.isFinite(seconds) || seconds <= 0) return '';
  const total = Math.round(seconds);
  const hours = Math.floor(total / 3600);
  const minutes = Math.round((total % 3600) / 60);
  return hours ? `${hours}h ${String(minutes).padStart(2, '0')}min` : `${Math.max(1, minutes)}min`;
}

function driveThumbnail(fileId, size = 780) {
  return `https://drive.google.com/thumbnail?id=${encodeURIComponent(fileId)}&sz=w${size}`;
}

function driveMediaUrl(fileId, apiKey) {
  return `https://www.googleapis.com/drive/v3/files/${encodeURIComponent(fileId)}?alt=media&key=${encodeURIComponent(apiKey)}&supportsAllDrives=true`;
}

function driveDownloadUrl(fileId) {
  return `https://drive.google.com/uc?export=download&id=${encodeURIComponent(fileId)}`;
}

function normalizeDriveKey(value) {
  return String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '') || 'biblioteca';
}

function pickDriveArtwork(images, folderId, fallbackFileId) {
  const inFolder = images.filter((image) => image.ancestors?.some((ancestor) => ancestor.id === folderId));
  const artwork = inFolder.find((image) => /^(poster|folder|cover|fanart|backdrop)/i.test(image.name)) || inFolder[0];
  const imageId = artwork?.id || fallbackFileId;
  return {
    poster: driveThumbnail(imageId, 780),
    backdrop: driveThumbnail(imageId, 1280)
  };
}

function buildDriveCatalog(files, rootName, apiKey) {
  const videos = files.filter(isDriveVideo);
  const images = files.filter(isDriveImage);
  const subtitles = files.filter(isDriveSubtitle);
  const movieItems = [];
  const seriesMap = new Map();
  const rootIsSeries = DRIVE_SERIES_HINT.test(rootName || '');

  videos.forEach((file) => {
    const ancestors = file.ancestors || [];
    const names = ancestors.map((ancestor) => ancestor.name);
    let seasonFolderIndex = -1;
    names.forEach((name, index) => {
      if (parseSeasonNumber(name) !== null) seasonFolderIndex = index;
    });
    const episodeInfo = parseEpisodeInfo(file.name);
    const pathText = [...names, file.name].join('/');
    const isSeries = rootIsSeries || DRIVE_SERIES_HINT.test(pathText) || seasonFolderIndex >= 0 || episodeInfo.explicit;

    if (!isSeries) {
      const parent = ancestors[ancestors.length - 1] || null;
      const usableParent = parent && !DRIVE_GENERIC_FOLDER.test(parent.name) ? parent : null;
      const folderTitle = usableParent ? splitDriveTitle(usableParent.name) : { title: null, year: null };
      const fileTitle = splitDriveTitle(file.name);
      const title = folderTitle.title || fileTitle.title;
      const modifiedYear = file.modifiedTime ? new Date(file.modifiedTime).getFullYear() : null;
      const year = folderTitle.year || fileTitle.year || modifiedYear || new Date().getFullYear();
      const durationSeconds = file.videoMediaMetadata?.durationMillis ? Number(file.videoMediaMetadata.durationMillis) / 1000 : null;
      const art = pickDriveArtwork(images, parent?.id || file.id, file.id);
      movieItems.push({
        id: `drive-file-${file.id}`,
        title,
        type: 'filme',
        year,
        duration: formatDriveDuration(durationSeconds) || 'Duração não informada',
        maturity: 'L',
        match: 95,
        rating: '—',
        genres: ['Google Drive'],
        description: `“${title}” está na sua biblioteca do Google Drive.`,
        cast: [],
        director: 'Biblioteca pessoal',
        poster: art.poster,
        backdrop: art.backdrop,
        video: driveMediaUrl(file.id, apiKey || ''),
        drive: true,
        driveFileId: file.id,
        driveName: file.name,
        driveFolderId: parent?.id || null,
        playable: isBrowserVideo(file),
        subtitles: findDriveSubtitles(file, subtitles, apiKey),
        new: true
      });
      return;
    }

    let seriesRoot = null;
    const hintIndex = names.findIndex((name) => DRIVE_SERIES_HINT.test(name));
    if (hintIndex >= 0) seriesRoot = ancestors[hintIndex + 1] || null;
    if (!seriesRoot && seasonFolderIndex > 0) seriesRoot = ancestors[seasonFolderIndex - 1];
    if (!seriesRoot && seasonFolderIndex < 0 && episodeInfo.explicit && ancestors.length) seriesRoot = ancestors[0];
    if (!seriesRoot && seasonFolderIndex < 0) seriesRoot = ancestors[ancestors.length - 1] || null;

    const rawSeriesName = seriesRoot?.name || splitDriveTitle(file.name).title || rootName || 'Série';
    const key = seriesRoot?.id || `name:${normalizeDriveKey(rawSeriesName)}`;
    if (!seriesMap.has(key)) {
      const seriesMeta = splitDriveTitle(rawSeriesName);
      seriesMap.set(key, {
        root: seriesRoot,
        name: seriesMeta.title,
        year: seriesMeta.year,
        seasons: new Map()
      });
    }
    const entry = seriesMap.get(key);
    const seasonNumber = episodeInfo.season ?? (seasonFolderIndex >= 0 ? parseSeasonNumber(names[seasonFolderIndex]) : null) ?? 1;
    const episodeNumber = episodeInfo.episode ?? parseLooseEpisodeNumber(file.name);
    if (!entry.seasons.has(seasonNumber)) entry.seasons.set(seasonNumber, []);
    entry.seasons.get(seasonNumber).push({ file, episodeNumber, title: null });
  });

  const seriesItems = [...seriesMap.values()].map((entry) => {
    const seasons = [...entry.seasons.entries()]
      .sort(([a], [b]) => a - b)
      .map(([seasonNumber, rawEpisodes]) => {
        const episodes = [...rawEpisodes].sort((a, b) => {
          if (a.episodeNumber == null && b.episodeNumber == null) return a.file.name.localeCompare(b.file.name, 'pt-BR');
          if (a.episodeNumber == null) return 1;
          if (b.episodeNumber == null) return -1;
          return a.episodeNumber - b.episodeNumber || a.file.name.localeCompare(b.file.name, 'pt-BR');
        });
        let nextNumber = 1;
        episodes.forEach((episode) => {
          if (episode.episodeNumber == null) {
            while (episodes.some((candidate) => candidate.episodeNumber === nextNumber)) nextNumber += 1;
            episode.episodeNumber = nextNumber;
          }
          nextNumber = Math.max(nextNumber, episode.episodeNumber + 1);
          episode.title = cleanEpisodeTitle(episode.file.name, episode.episodeNumber);
        });
        const episodeFiles = episodes.map((episode) => {
          const durationSeconds = episode.file.videoMediaMetadata?.durationMillis ? Number(episode.file.videoMediaMetadata.durationMillis) / 1000 : null;
          return {
            number: episode.episodeNumber,
            title: episode.title,
            fileId: episode.file.id,
            video: driveMediaUrl(episode.file.id, apiKey || ''),
            duration: formatDriveDuration(durationSeconds),
            modifiedTime: episode.file.modifiedTime,
            thumbnail: driveThumbnail(episode.file.id, 780),
            playable: isBrowserVideo(episode.file),
            subtitles: findDriveSubtitles(episode.file, subtitles, apiKey)
          };
        });
        return {
          name: `Temporada ${seasonNumber}`,
          episodes: episodeFiles.map((episode) => episode.title),
          episodeFiles
        };
      });

    const allEpisodes = seasons.flatMap((season) => season.episodeFiles);
    const firstEpisode = allEpisodes[0];
    const art = pickDriveArtwork(images, entry.root?.id || firstEpisode?.fileId, firstEpisode?.fileId);
    const year = entry.year || (firstEpisode?.modifiedTime ? new Date(firstEpisode.modifiedTime).getFullYear() : null) || new Date().getFullYear();
    return {
      id: `drive-series-${entry.root?.id || normalizeDriveKey(entry.name)}`,
      title: entry.name,
      type: 'serie',
      year,
      duration: `${seasons.length} temporada${seasons.length === 1 ? '' : 's'}`,
      maturity: 'L',
      match: 96,
      rating: '—',
      genres: ['Google Drive'],
      description: `Série com ${allEpisodes.length} episódio${allEpisodes.length === 1 ? '' : 's'} na sua biblioteca do Google Drive.`,
      cast: [],
      director: 'Biblioteca pessoal',
      poster: art.poster,
      backdrop: art.backdrop,
      video: firstEpisode?.video || '',
      seasons,
      drive: true,
      driveFolderId: entry.root?.id || null,
      playable: allEpisodes.some((episode) => episode.playable),
      new: true
    };
  });

  return [...seriesItems, ...movieItems];
}

async function listDriveFolder(folderId, apiKey) {
  const files = [];
  let pageToken = null;
  do {
    const url = new URL(DRIVE_API);
    const safeFolderId = String(folderId).replace(/'/g, "\\'");
    url.searchParams.set('q', `'${safeFolderId}' in parents and trashed = false`);
    url.searchParams.set('key', apiKey);
    url.searchParams.set('fields', 'nextPageToken,files(id,name,mimeType,size,modifiedTime,videoMediaMetadata(durationMillis,width,height))');
    url.searchParams.set('pageSize', '1000');
    url.searchParams.set('supportsAllDrives', 'true');
    url.searchParams.set('includeItemsFromAllDrives', 'true');
    if (pageToken) url.searchParams.set('pageToken', pageToken);
    const response = await fetch(url.toString(), { cache: 'no-store' });
    if (!response.ok) {
      const payload = await response.json().catch(() => null);
      const error = new Error(payload?.error?.message || `HTTP ${response.status}`);
      error.status = response.status;
      throw error;
    }
    const data = await response.json();
    files.push(...(data.files || []));
    pageToken = data.nextPageToken || null;
  } while (pageToken);
  return files;
}

async function getDriveFolderMeta(folderId, apiKey) {
  const url = new URL(`${DRIVE_API}/${encodeURIComponent(folderId)}`);
  url.searchParams.set('key', apiKey);
  url.searchParams.set('fields', 'id,name');
  url.searchParams.set('supportsAllDrives', 'true');
  const response = await fetch(url.toString(), { cache: 'no-store' });
  if (!response.ok) {
    const payload = await response.json().catch(() => null);
    const error = new Error(payload?.error?.message || `HTTP ${response.status}`);
    error.status = response.status;
    throw error;
  }
  return response.json();
}

async function walkDriveFolder(folderId, ancestors, account, config) {
  if (account.folders >= 120 || account.files.length >= 2000) return;
  const children = await listDriveFolder(folderId, config.apiKey);
  for (const child of children) {
    if (isDriveFolder(child)) {
      if (account.folders >= 120) continue;
      account.folders += 1;
      await walkDriveFolder(child.id, [...ancestors, { id: child.id, name: child.name }], account, config);
      if (account.files.length >= 2000) break;
    } else if (isDriveVideo(child) || isDriveImage(child) || isDriveSubtitle(child)) {
      account.files.push({ ...child, ancestors });
      if (account.files.length >= 2000) break;
    }
  }
}

function driveErrorMessage(error) {
  if (!navigator.onLine) return 'Você está offline. Conecte-se para atualizar a pasta do Drive.';
  if (/expired|invalid/i.test(error?.message || '')) return 'A chave da API expirou ou é inválida. Gere uma nova chave no Google Cloud.';
  if (error?.status === 400 || error?.status === 403) return 'A chave da API foi recusada. Confira a chave e as restrições de domínio no Google Cloud.';
  if (error?.status === 404) return 'Pasta não encontrada. Verifique se o link está correto e se a pasta está pública.';
  if (error?.status === 429) return 'O limite de consultas do Google foi atingido. Tente novamente mais tarde.';
  return `Não foi possível ler a pasta do Drive: ${error?.message || 'erro desconhecido'}`;
}

function setDriveStatus(message, type = '') {
  const status = document.getElementById('drive-status');
  if (!status) return;
  status.textContent = message;
  status.classList.toggle('is-error', type === 'error');
  status.classList.toggle('is-success', type === 'success');
}

function updateDriveNavCount() {
  const count = catalog.filter((item) => item.drive).length;
  const badge = document.getElementById('drive-count');
  if (!badge) return;
  badge.textContent = count;
  badge.hidden = !count;
}

function applyDriveItems(items) {
  for (let index = catalog.length - 1; index >= 0; index -= 1) {
    if (catalog[index].drive) catalog.splice(index, 1);
  }
  catalog.push(...items);
  updateDriveNavCount();
}

function updateDriveSettingsUI() {
  const folderInput = document.getElementById('drive-folder');
  const keyInput = document.getElementById('drive-key');
  const disconnectButton = document.getElementById('drive-disconnect');
  const connectButton = document.getElementById('drive-connect');
  if (!folderInput || !keyInput || !disconnectButton || !connectButton) return;
  const config = state.driveConfig;
  folderInput.value = config?.folderId || '';
  keyInput.value = config?.apiKey || '';
  disconnectButton.hidden = !config;
  connectButton.textContent = config ? 'Atualizar pasta' : 'Conectar pasta';
  const sync = storage.get('nexa-drive-sync', null);
  if (config && sync?.items) {
    const date = new Date(sync.at).toLocaleString('pt-BR', { dateStyle: 'short', timeStyle: 'short' });
    const episodes = Number.isFinite(sync.episodes) ? `, ${sync.episodes} episódios` : '';
    setDriveStatus(`${sync.items} títulos encontrados, ${sync.folders} pastas lidas${episodes}. Atualizado em ${date}.`, 'success');
  } else if (config) {
    setDriveStatus('Pasta conectada. Sincronizando...');
  } else {
    setDriveStatus('Nenhuma pasta conectada.');
  }
}

async function loadDriveLibrary(config, options = {}) {
  if (driveLoading) return;
  driveLoading = true;
  const connectButton = document.getElementById('drive-connect');
  if (connectButton) connectButton.disabled = true;
  setDriveStatus('Lendo a pasta do Drive... Isso pode levar alguns segundos.');
  try {
    const meta = await getDriveFolderMeta(config.folderId, config.apiKey).catch(() => null);
    const resolvedConfig = {
      folderId: config.folderId,
      apiKey: config.apiKey,
      folderName: meta?.name || config.folderName || ''
    };
    const account = { folders: 0, files: [] };
    await walkDriveFolder(resolvedConfig.folderId, [], account, resolvedConfig);
    const items = buildDriveCatalog(account.files, resolvedConfig.folderName, resolvedConfig.apiKey);
    applyDriveItems(items);
    state.driveConfig = resolvedConfig;
    const episodeCount = items.reduce((total, item) => total + (item.seasons?.reduce((sum, season) => sum + season.episodes.length, 0) || 0), 0);
    const sync = { at: Date.now(), items: items.length, files: account.files.length, folders: account.folders, episodes: episodeCount };
    storage.set('nexa-drive', resolvedConfig);
    storage.set('nexa-drive-cache', items);
    storage.set('nexa-drive-sync', sync);
    updateDriveSettingsUI();
    const movieCount = items.filter((item) => item.type === 'filme').length;
    const seriesCount = items.filter((item) => item.type === 'serie').length;
    const episodeLabel = episodeCount ? ` • ${episodeCount} episódio${episodeCount === 1 ? '' : 's'} em ${account.files.length} arquivos` : '';
    setDriveStatus(`${items.length} títulos encontrados: ${movieCount} filme${movieCount === 1 ? '' : 's'} e ${seriesCount} série${seriesCount === 1 ? '' : 's'}${episodeLabel}.`, 'success');
    if (state.view === 'busca') handleSearch(state.query);
    else refreshCurrentView();
    if (!options.silent) showToast(`Google Drive conectado: ${items.length} títulos encontrados`, 'success');
  } catch (error) {
    setDriveStatus(driveErrorMessage(error), 'error');
    if (!options.silent) showToast(driveErrorMessage(error), 'error');
  } finally {
    driveLoading = false;
    if (connectButton) connectButton.disabled = false;
  }
}

async function connectDrive() {
  const folderId = parseDriveFolderId(document.getElementById('drive-folder')?.value);
  const apiKey = document.getElementById('drive-key')?.value.trim();
  if (!folderId) {
    setDriveStatus('Informe um link ou ID válido de uma pasta do Google Drive.', 'error');
    document.getElementById('drive-folder')?.focus();
    return;
  }
  if (!apiKey) {
    setDriveStatus('Informe a chave da API do Google.', 'error');
    document.getElementById('drive-key')?.focus();
    return;
  }
  await loadDriveLibrary({ folderId, apiKey });
}

function disconnectDrive() {
  state.driveConfig = null;
  applyDriveItems([]);
  storage.set('nexa-drive', null);
  storage.set('nexa-drive-cache', []);
  storage.set('nexa-drive-sync', null);
  updateDriveSettingsUI();
  if (state.view === 'busca') handleSearch(state.query);
  else refreshCurrentView();
  showToast('Google Drive desconectado', 'success');
}

function restoreDriveLibrary() {
  const config = storage.get('nexa-drive', null);
  const cached = storage.get('nexa-drive-cache', null);
  state.driveConfig = config?.folderId && config?.apiKey ? config : null;
  if (Array.isArray(cached) && cached.length && state.driveConfig) {
    applyDriveItems(cached);
    if (state.view === 'home') renderHome();
  }
  updateDriveSettingsUI();
  if (state.driveConfig) loadDriveLibrary(state.driveConfig, { silent: true });
}

let localLoading = false;

function setLocalStatus(message, type = '') {
  const status = document.getElementById('local-status');
  if (!status) return;
  status.textContent = message;
  status.classList.toggle('is-error', type === 'error');
  status.classList.toggle('is-success', type === 'success');
}

function updateLocalNavCount() {
  const count = catalog.filter((item) => item.local).length;
  const badge = document.getElementById('local-count');
  if (!badge) return;
  badge.textContent = count;
  badge.hidden = !count;
}

function localServerBase() {
  const configured = String(storage.get('nexa-local-server', '') || '').trim();
  if (configured) return configured.replace(/\/+$/, '');
  const host = window.location.hostname;
  if (host === 'localhost' || host === '127.0.0.1' || host === '[::1]') {
    return `${window.location.protocol}//${window.location.host}`;
  }
  return 'http://127.0.0.1:8090';
}

function localApi(path) {
  return `${localServerBase()}${path}`;
}

function localUrl(url) {
  if (!url || typeof url !== 'string') return url;
  if (!url.startsWith('/api/local/')) return url;
  return `${localServerBase()}${url}`;
}

function localizeItem(item) {
  if (!item?.local) return item;
  const copy = { ...item };
  copy.video = localUrl(copy.video);
  copy.transcodeUrl = localUrl(copy.transcodeUrl);
  copy.poster = localUrl(copy.poster);
  copy.backdrop = localUrl(copy.backdrop);
  if (Array.isArray(copy.subtitles)) {
    copy.subtitles = copy.subtitles.map((subtitle) => ({ ...subtitle, url: localUrl(subtitle.url) }));
  }
  if (Array.isArray(copy.seasons)) {
    copy.seasons = copy.seasons.map((season) => ({
      ...season,
      episodeFiles: (season.episodeFiles || []).map((episode) => ({
        ...episode,
        video: localUrl(episode.video),
        transcodeUrl: localUrl(episode.transcodeUrl),
        thumbnail: localUrl(episode.thumbnail),
        subtitles: (episode.subtitles || []).map((subtitle) => ({ ...subtitle, url: localUrl(subtitle.url) }))
      }))
    }));
  }
  return copy;
}

function localizeAlbums(albums) {
  return (albums || []).map((album) => ({
    ...album,
    cover: localUrl(album.cover),
    tracks: (album.tracks || []).map((track) => ({ ...track, url: localUrl(track.url) }))
  }));
}

function applyLocalItems(items) {
  for (let index = catalog.length - 1; index >= 0; index -= 1) {
    if (catalog[index].local) catalog.splice(index, 1);
  }
  catalog.push(...items.map(localizeItem));
  updateLocalNavCount();
}

function updateLocalSettingsUI() {
  const input = document.getElementById('local-root');
  const serverInput = document.getElementById('local-server');
  if (serverInput && document.activeElement !== serverInput) {
    serverInput.value = storage.get('nexa-local-server', '') || localServerBase();
  }
  const scanButton = document.getElementById('local-scan');
  const clearButton = document.getElementById('local-clear');
  if (!input || !scanButton || !clearButton) return;
  if (document.activeElement !== input) input.value = state.localConfig?.root || storage.get('nexa-local-root', '') || '';
  const sync = storage.get('nexa-local-sync', null);
  const subtitleStatus = document.getElementById('subtitle-settings-status');
  if (subtitleStatus && state.localConfig?.hasSubtitleKey) {
    subtitleStatus.textContent = 'Chave da API configurada no servidor local: a busca de legendas online está ativa.';
  }
  const omdbStatus = document.getElementById('omdb-settings-status');
  if (omdbStatus && state.localConfig?.hasOmdbKey) {
    omdbStatus.textContent = 'Chave do OMDb configurada no servidor local: os metadados dos filmes são atualizados no scan.';
  }
  const enrichButton = document.getElementById('local-omdb-enrich');
  if (enrichButton) enrichButton.hidden = !state.localConfig?.hasOmdbKey;
  const hasItems = catalog.some((item) => item.local);
  clearButton.hidden = !hasItems;
  if (localLoading) {
    scanButton.disabled = true;
    setLocalStatus('Lendo o HD... isso pode levar alguns minutos na primeira vez.');
  } else {
    scanButton.disabled = false;
    if (sync?.items) {
      const date = new Date(sync.at).toLocaleString('pt-BR', { dateStyle: 'short', timeStyle: 'short' });
      const music = sync.tracks ? `, ${sync.albums} álbuns e ${sync.tracks} faixas` : '';
      setLocalStatus(`${sync.items} títulos no HD: ${sync.movies} filmes, ${sync.series} séries (${sync.episodes} episódios)${music}. Atualizado em ${date}.`, 'success');
    } else if (state.localConfig) {
      setLocalStatus('Servidor local conectado. Clique em “Escanear HD” para atualizar a biblioteca.');
    } else {
      setLocalStatus('Servidor local não conectado.');
    }
  }
}

function localDelay(ms) {
  return new Promise((resolve) => { window.setTimeout(resolve, ms); });
}

async function loadLocalLibrary(options = {}) {
  if (localLoading) return;
  localLoading = true;
  updateLocalSettingsUI();
  try {
    let response = await fetch(localApi('/api/local/library'), { cache: 'no-store' });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    let data = await response.json();
    let tries = 0;
    while (data.scanning && tries < 80) {
      if (!options.silent) setLocalStatus('Escaneando o HD... isso pode levar alguns minutos.');
      await localDelay(3000);
      response = await fetch(localApi('/api/local/library'), { cache: 'no-store' });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      data = await response.json();
      tries += 1;
    }
    const items = Array.isArray(data.items) ? data.items : [];
    const albums = localizeAlbums(Array.isArray(data.music?.albums) ? data.music.albums : []);
    applyLocalItems(items);
    state.musicAlbums = albums;
    state.localConfig = { root: data.root || '', stats: data.stats || {}, at: data.at || 0 };
    try {
      const configResponse = await fetch(localApi('/api/local/config'), { cache: 'no-store' });
      if (configResponse.ok) {
        const configData = await configResponse.json();
        state.localConfig.hasSubtitleKey = Boolean(configData.hasSubtitleKey);
        state.localConfig.hasOmdbKey = Boolean(configData.hasOmdbKey);
      }
    } catch (error) {
      state.localConfig.hasSubtitleKey = false;
    }
    const stats = data.stats || {};
    const sync = {
      at: data.at || Date.now(),
      items: items.length,
      movies: stats.movies || items.filter((item) => item.type === 'filme').length,
      series: stats.series || items.filter((item) => item.type === 'serie').length,
      episodes: stats.episodes || 0,
      albums: stats.albums || albums.length,
      tracks: stats.tracks || 0
    };
    storage.set('nexa-local-cache', items);
    storage.set('nexa-local-sync', sync);
    storage.set('nexa-local-root', data.root || '');
    if (data.root) storage.set('nexa-local-config', { root: data.root });
    updateLocalSettingsUI();
    if (state.view === 'busca') handleSearch(state.query);
    else if (state.view === 'musica') renderMusicView();
    else refreshCurrentView();
    if (!options.silent) showToast(`HD local: ${items.length} títulos encontrados`, 'success');
  } catch (error) {
    if (!options.silent) {
      setLocalStatus('Servidor local indisponível. Inicie com python3 local_server.py.', 'error');
      showToast('Não foi possível ler o HD local. O servidor está rodando?', 'error');
    } else if (document.getElementById('settings-dialog')?.open) {
      setLocalStatus('Servidor local indisponível. Inicie com python3 local_server.py.', 'error');
    }
  } finally {
    localLoading = false;
    updateLocalSettingsUI();
  }
}

async function scanLocalLibrary() {
  const input = document.getElementById('local-root');
  const root = input?.value.trim() || state.localConfig?.root || '';
  if (!root) {
    setLocalStatus('Informe a pasta do HD.', 'error');
    input?.focus();
    return;
  }
  if (localLoading) return;
  localLoading = true;
  updateLocalSettingsUI();
  setLocalStatus('Escaneando o HD... isso pode levar alguns minutos.');
  try {
    const response = await fetch(localApi('/api/local/config'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ root })
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(data.error || `HTTP ${response.status}`);
    storage.set('nexa-local-root', data.root || root);
    storage.set('nexa-local-config', { root: data.root || root });
    localLoading = false;
    await loadLocalLibrary();
  } catch (error) {
    setLocalStatus(error.message || 'Falha ao escanear o HD.', 'error');
    showToast('Falha ao escanear o HD local.', 'error');
  } finally {
    localLoading = false;
    updateLocalSettingsUI();
  }
}

function disconnectLocal() {
  state.localConfig = null;
  state.musicAlbums = [];
  applyLocalItems([]);
  storage.set('nexa-local-cache', []);
  storage.set('nexa-local-sync', null);
  storage.set('nexa-local-root', '');
  storage.set('nexa-local-config', null);
  updateLocalSettingsUI();
  if (state.view === 'busca') handleSearch(state.query);
  else if (state.view === 'musica') renderMusicView();
  else refreshCurrentView();
  showToast('Biblioteca do HD removida deste navegador', 'success');
}

function restoreLocalLibrary() {
  const config = storage.get('nexa-local-config', null);
  const cached = storage.get('nexa-local-cache', null);
  state.localConfig = config?.root ? config : null;
  if (Array.isArray(cached) && cached.length) {
    applyLocalItems(cached);
    if (state.view === 'home') renderHome();
  }
  updateLocalSettingsUI();
  loadLocalLibrary({ silent: true });
}

function icon(name) {
  return `<svg aria-hidden="true"><use href="#${icons[name] || name}"></use></svg>`;
}

function escapeHtml(value) {
  const element = document.createElement('div');
  element.textContent = String(value);
  return element.innerHTML;
}

function getItem(id) {
  return catalog.find((item) => item.id === id);
}

function getGenres() {
  return ['Todos', ...new Set(currentCatalog().flatMap((item) => item.genres))];
}

function sortItems(items) {
  const sorted = [...items];
  if (state.sort === 'relevancia') return sorted;
  if (state.sort === 'recentes') return sorted.sort((a, b) => b.year - a.year);
  if (state.sort === 'avaliacao') return sorted.sort((a, b) => b.rating - a.rating);
  if (state.sort === 'a-z') return sorted.sort((a, b) => a.title.localeCompare(b.title, 'pt-BR'));
  return sorted;
}

function filteredCatalog(view = state.view) {
  let items = currentCatalog();
  if (view === 'filmes') items = items.filter((item) => item.type === 'filme');
  if (view === 'series') items = items.filter((item) => item.type === 'serie');
  if (view === 'filmes' || view === 'series') items.sort((a, b) => Number(Boolean(b.drive)) - Number(Boolean(a.drive)));
  if (view === 'originais') items = items.filter((item) => item.original);
  if (view === 'novidades') items = items.filter((item) => item.new);
  if (view === 'lista') items = items.filter((item) => state.list.has(item.id));
  if (view === 'busca') {
    const filters = state.searchFilters;
    if (filters.type !== 'todos') items = items.filter((item) => item.type === filters.type);
    if (filters.genre !== 'Todos') items = items.filter((item) => item.genres.includes(filters.genre));
    if (filters.year !== 'todos') items = items.filter((item) => String(item.year) === filters.year);
    if (Number(filters.rating) > 0) items = items.filter((item) => Number(item.rating) >= Number(filters.rating));
  } else if (state.genre !== 'Todos') {
    items = items.filter((item) => item.genres.includes(state.genre));
  }
  if (state.query) {
    const query = state.query.toLocaleLowerCase('pt-BR');
    items = items.filter((item) => [item.title, item.description, item.cast.join(' '), item.genres.join(' ')]
      .join(' ')
      .toLocaleLowerCase('pt-BR')
      .includes(query));
  }
  return sortItems(items);
}

function posterCard(item, options = {}) {
  const progress = state.progress[item.id];
  const isTop = options.top;
  const badge = item.original ? '<span class="card-badge original">Original</span>' : item.new ? '<span class="card-badge">Novo</span>' : '';
  const progressBar = progress ? `<span class="card-progress" role="progressbar" aria-label="Progresso de ${escapeHtml(item.title)}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${progress.percent}"><span aria-hidden="true" style="width:${progress.percent}%"></span></span>` : '';
  const poster = `
    <div class="poster-wrap">
      <img src="${item.poster}" alt="Pôster de ${escapeHtml(item.title)}" loading="lazy">
      ${badge}
      <button class="poster-open" type="button" data-action="details" data-id="${item.id}" aria-label="Ver detalhes de ${escapeHtml(item.title)}"></button>
      <div class="card-overlay">
        <button class="card-play" type="button" data-action="play" data-id="${item.id}" aria-label="Assistir ${escapeHtml(item.title)}">${icon('play')}</button>
        <button class="card-info" type="button" data-action="details" data-id="${item.id}" aria-label="Ver detalhes de ${escapeHtml(item.title)}">${icon('info')}</button>
        <button class="card-list ${state.list.has(item.id) ? 'in-list' : ''}" type="button" data-action="toggle-list" data-id="${item.id}" aria-label="${state.list.has(item.id) ? 'Remover' : 'Adicionar'} ${escapeHtml(item.title)} ${state.list.has(item.id) ? 'da' : 'à'} lista">${state.list.has(item.id) ? icon('check') : icon('plus')}</button>
      </div>
      ${progressBar}
    </div>`;
  const inner = `
    ${poster}
    <h3 class="poster-title">${escapeHtml(item.title)}</h3>
    <div class="poster-meta"><span class="match-score">${item.match}%</span><span>•</span><span>${item.year}</span><span>•</span><span>${typeLabel[item.type]}</span></div>`;
  if (isTop) {
    return `<article class="media-card rank-wrap" data-id="${item.id}"><span class="rank-number">${options.rank}</span><div class="poster-button">${inner}</div></article>`;
  }
  return `<article class="media-card" data-id="${item.id}"><div class="poster-button">${inner}</div></article>`;
}

function sectionRow(title, items, options = {}) {
  if (!items.length) return '';
  const cards = items.map((item, index) => posterCard(item, { top: options.top, rank: index + 1 })).join('');
  return `
    <section class="content-section" data-section>
      <div class="section-heading">
        <div><h2>${title}</h2>${options.subtitle ? `<p>${options.subtitle}</p>` : ''}</div>
        ${options.link ? `<button class="section-link" type="button" data-view-link="${options.link.view}">Explorar tudo ${icon('chevron')}</button>` : ''}
      </div>
      <div class="carousel" role="group" aria-roledescription="carrossel" aria-label="${escapeHtml(title)}"><div class="media-row">${cards}</div></div>
    </section>`;
}

function homeHero(item) {
  return `
    <section class="hero" aria-labelledby="hero-title">
      <div class="hero-backdrop" style="background-image:url('${item.backdrop}')"></div>
      <div class="hero-content">
        <span class="hero-badge">${item.original ? 'NEXA Original' : 'Em destaque'}</span>
        <h1 id="hero-title">${escapeHtml(item.title)}</h1>
        <div class="hero-meta">
          <span class="match-score">${item.match}% de escolha</span>
          <span class="meta-divider"></span><span>${item.year}</span>
          <span class="meta-divider"></span><span>${item.maturity}</span>
          <span class="meta-divider"></span><span>${item.duration}</span>
          <span class="meta-divider"></span><span>${item.genres.join(' • ')}</span>
        </div>
        <p class="hero-description">${escapeHtml(item.description)}</p>
        <div class="hero-actions">
          <button class="button button-red" type="button" data-action="play" data-id="${item.id}">${icon('play')} Assistir</button>
          <button class="button button-ghost" type="button" data-action="details" data-id="${item.id}">${icon('info')} Mais informações</button>
        </div>
      </div>
    </section>`;
}

function renderHome() {
  const visible = currentCatalog();
  const continueItems = visible.filter((item) => state.progress[item.id]).sort((a, b) => state.progress[b.id].percent - state.progress[a.id].percent);
  const trending = visible.filter((item) => item.trending);
  const top = visible.filter((item) => item.top).slice(0, 10);
  const originals = visible.filter((item) => item.original);
  const movies = visible.filter((item) => item.type === 'filme').sort((a, b) => Number(Boolean(b.drive)) - Number(Boolean(a.drive)));
  const series = visible.filter((item) => item.type === 'serie').sort((a, b) => Number(Boolean(b.drive)) - Number(Boolean(a.drive)));
  const documentaries = visible.filter((item) => item.type === 'documentario');
  const fresh = visible.filter((item) => item.new);
  const drive = visible.filter((item) => item.drive);
  const local = visible.filter((item) => item.local);
  const hero = visible[0];
  const empty = `<div class="empty-state"><div class="empty-state-inner"><span class="empty-icon">${icon('film')}</span><h2>Nenhum título disponível</h2><p>Não há títulos adequados para este perfil no momento.</p></div></div>`;
  mainContent.innerHTML = `
    <div class="content-view">
      ${hero ? homeHero(hero) : ''}
      <div class="content-sections">
        ${visible.length ? `
          ${sectionRow('Continue assistindo', continueItems, { subtitle: 'Retome de onde parou' })}
          ${sectionRow('Do seu Google Drive', drive, { subtitle: 'Filmes e séries da sua pasta conectada' })}
          ${sectionRow('Do seu HD', local, { subtitle: 'Filmes e séries da biblioteca local' })}
          ${sectionRow('Em alta agora', trending, { subtitle: 'O que todo mundo está assistindo', link: { view: 'filmes' } })}
          ${sectionRow('Top 10 hoje', top, { top: true })}
          ${sectionRow('Originais NEXA', originals, { subtitle: 'Histórias exclusivas para assistir' })}
          ${sectionRow('Filmes populares', movies)}
          ${sectionRow('Séries que você precisa ver', series)}
          ${sectionRow('Documentários que inspiram', documentaries)}
          ${sectionRow('Novidades', fresh)}
        ` : empty}
      </div>
    </div>`;
}

function currentMusicAlbums() {
  return activeProfile()?.kids ? [] : state.musicAlbums;
}

function albumCard(album) {
  const tracks = album.tracks?.length || 0;
  return `
    <article class="album-card">
      <button class="album-cover-button" type="button" data-album="${album.id}" aria-label="Abrir álbum ${escapeHtml(album.title)}">
        <img src="${album.cover || fallbackArtwork}" alt="Capa de ${escapeHtml(album.title)}" loading="lazy">
        <span class="album-play">${icon('play')}</span>
      </button>
      <strong class="album-title">${escapeHtml(album.title)}</strong>
      <small class="album-meta">${escapeHtml(album.artist || 'Vários artistas')} • ${tracks} faixa${tracks === 1 ? '' : 's'}</small>
    </article>`;
}

function renderMusicView() {
  state.view = 'musica';
  updateActiveNavigation();
  if (state.activeAlbum) {
    renderAlbumView(state.activeAlbum);
    return;
  }
  const albums = currentMusicAlbums();
  const trackCount = albums.reduce((total, album) => total + (album.tracks?.length || 0), 0);
  mainContent.innerHTML = `
    <section class="section-view">
      <header class="section-header"><div><p class="eyebrow">Sua biblioteca</p><h1>Música</h1><p>${albums.length ? `${albums.length} álbun${albums.length === 1 ? 's' : 's'} e ${trackCount} faixas no HD local.` : 'Conecte o HD local para ouvir sua coleção.'}</p></div></header>
      ${albums.length
        ? `<div class="album-grid">${albums.map(albumCard).join('')}</div>`
        : `<div class="empty-state"><div class="empty-state-inner"><span class="empty-icon">${icon('music')}</span><h2>Nenhuma música ainda</h2><p>Inicie o servidor local, escaneie o HD e suas músicas aparecerão aqui.</p><button class="button button-red" type="button" data-local-settings>Escanear HD</button></div></div>`}
    </section>`;
  window.scrollTo({ top: 0, behavior: 'instant' });
}

function renderAlbumView(album) {
  state.view = 'musica';
  updateActiveNavigation();
  const trackIndex = state.activeTrackIndex;
  mainContent.innerHTML = `
    <section class="section-view album-view">
      <button class="back-link" type="button" data-album-back>${icon('chevron')} Todos os álbuns</button>
      <header class="album-header">
        <img class="album-detail-cover" src="${album.cover || fallbackArtwork}" alt="Capa de ${escapeHtml(album.title)}">
        <div>
          <p class="eyebrow">Álbum</p>
          <h1>${escapeHtml(album.title)}</h1>
          <p class="album-detail-meta">${escapeHtml(album.artist || 'Vários artistas')}${album.year ? ` • ${album.year}` : ''} • ${album.tracks?.length || 0} faixa${album.tracks?.length === 1 ? '' : 's'}</p>
          <button class="button button-red" type="button" data-play-album="${album.id}">${icon('play')} Tocar álbum</button>
        </div>
      </header>
      <ol class="track-list">
        ${(album.tracks || []).map((track, index) => `
          <li class="${index === trackIndex ? 'playing' : ''}">
            <button type="button" data-track="${album.id}" data-track-index="${index}">
              <span class="track-number">${track.number || index + 1}</span>
              <span class="track-copy"><strong>${escapeHtml(track.title)}</strong><small>${escapeHtml(track.artist || album.artist || '')}</small></span>
              <span class="track-action">${index === trackIndex ? icon('volume') : icon('play')}</span>
            </button>
          </li>`).join('')}
      </ol>
    </section>`;
  window.scrollTo({ top: 0, behavior: 'instant' });
}

function showMusicBar(track, album) {
  if (!musicPlayerBar || !track) return;
  musicCover.src = album.cover || fallbackArtwork;
  musicCover.alt = `Capa de ${album.title}`;
  musicTitle.textContent = track.title;
  musicArtist.textContent = `${track.artist || album.artist || ''}${album.title ? ` • ${album.title}` : ''}`;
  musicPlayerBar.hidden = false;
  document.body.classList.add('music-open');
}

function playAlbumTrack(albumId, index) {
  const album = state.musicAlbums.find((entry) => entry.id === albumId);
  const track = album?.tracks?.[index];
  if (!album || !track) return;
  state.activeAlbum = album;
  state.activeTrackIndex = index;
  musicAudio.src = track.url;
  musicAudio.dataset.albumId = album.id;
  musicAudio.dataset.trackIndex = String(index);
  showMusicBar(track, album);
  const promise = musicAudio.play();
  if (promise) promise.catch(() => showToast('Clique em reproduzir para ouvir a música', 'success'));
  renderAlbumView(album);
}

function playNextTrack() {
  const album = state.musicAlbums.find((entry) => entry.id === musicAudio.dataset.albumId);
  if (!album) return;
  const next = Number(musicAudio.dataset.trackIndex || 0) + 1;
  if (next < album.tracks.length) playAlbumTrack(album.id, next);
}

function stopMusic() {
  musicAudio.pause();
  musicAudio.removeAttribute('src');
  musicAudio.load();
  musicPlayerBar.hidden = true;
  document.body.classList.remove('music-open');
  state.activeTrackIndex = -1;
}

function browseEmptyState() {
  if (state.genre !== 'Todos') {
    return `<div class="empty-state"><div class="empty-state-inner"><span class="empty-icon">${icon('film')}</span><h2>Nenhum título em ${escapeHtml(state.genre)}</h2><p>Experimente outro gênero ou limpe os filtros para ver o catálogo completo.</p><button class="button button-red" type="button" data-genre="Todos">Limpar filtros</button></div></div>`;
  }
  const copy = {
    filmes: ['Nenhum filme disponível', 'Novos filmes chegam em breve ao catálogo.', 'film'],
    series: ['Nenhuma série disponível', 'Novas séries chegam em breve ao catálogo.', 'tv'],
    originais: ['Nenhum original por aqui', 'Nossas produções exclusivas aparecerão aqui.', 'sparkle'],
    novidades: ['Nada novo por enquanto', 'Volte em breve para conferir as novidades.', 'plus'],
    lista: ['Sua lista está vazia', 'Adicione filmes e séries usando o botão <strong>+</strong> nos cards. Eles ficarão salvos neste navegador.', 'bookmark']
  };
  const [title, text, iconName] = copy[state.view] || ['Nada encontrado', 'Tente ajustar seus filtros.', 'search'];
  return `<div class="empty-state"><div class="empty-state-inner"><span class="empty-icon">${icon(iconName)}</span><h2>${title}</h2><p>${text}</p><button class="button button-red" type="button" data-view-link="home">Descobrir títulos</button></div></div>`;
}

function browseView() {
  const items = filteredCatalog(state.view);
  const titles = {
    filmes: ['Filmes', 'Histórias para todas as imaginações.'],
    series: ['Séries', 'Universos para se perder e encontrar.'],
    originais: ['Originais NEXA', 'Grandes histórias, exclusivas para você.'],
    novidades: ['Novidades', 'Acabaram de chegar. Não perca nenhuma.'],
    lista: ['Minha lista', 'Tudo o que você guardou para assistir depois.']
  };
  const [title, subtitle] = titles[state.view] || ['Catálogo', 'Encontre sua próxima história.'];
  const chips = getGenres().map((genre) => `<button class="filter-chip ${state.genre === genre ? 'active' : ''}" type="button" data-genre="${genre}">${genre}</button>`).join('');
  const content = items.length
    ? `<div class="media-grid">${items.map((item) => posterCard(item)).join('')}</div>`
    : browseEmptyState();
  mainContent.innerHTML = `
    <section class="section-view">
      <header class="section-header"><div><p class="eyebrow">NEXA catálogo</p><h1>${title}</h1><p>${subtitle}</p></div></header>
      <div class="filter-bar">
        ${chips}
        <select class="sort-select" id="sort-select" aria-label="Ordenar catálogo">
          <option value="relevancia" ${state.sort === 'relevancia' ? 'selected' : ''}>Mais relevantes</option>
          <option value="recentes" ${state.sort === 'recentes' ? 'selected' : ''}>Mais recentes</option>
          <option value="avaliacao" ${state.sort === 'avaliacao' ? 'selected' : ''}>Melhor avaliados</option>
          <option value="a-z" ${state.sort === 'a-z' ? 'selected' : ''}>Título (A–Z)</option>
        </select>
      </div>
      ${content}
    </section>`;
}

function renderView(view) {
  state.view = view;
  state.genre = 'Todos';
  if (view === 'musica') state.activeAlbum = null;
  updateActiveNavigation();
  if (view === 'home') renderHome();
  else if (view === 'musica') renderMusicView();
  else browseView();
  window.scrollTo({ top: 0, behavior: 'instant' });
}

function refreshCurrentView() {
  if (state.view === 'home') renderHome();
  else if (state.view === 'musica') renderMusicView();
  else if (state.view !== 'busca') browseView();
}

function focusCard(id) {
  const target = document.querySelector(`.media-card[data-id="${id}"] .poster-open`);
  if (target) target.focus();
  else document.getElementById('main-content').focus();
}

function openDetails(id) {
  const item = getItem(id);
  if (!item) return;
  if (!isAllowedItem(item)) {
    showToast('Este título não está disponível no perfil infantil.', 'error');
    return;
  }
  state.activeItem = item;
  state.activeSeason = 0;
  const inList = state.list.has(item.id);
  const liked = state.liked.has(item.id);
  document.getElementById('detail-hero').style.backgroundImage = `url('${item.backdrop}')`;
  document.getElementById('detail-eyebrow').textContent = item.original ? 'NEXA Original' : typeLabel[item.type];
  const detailHero = document.getElementById('detail-hero');
  detailHero.innerHTML = `<div class="detail-hero-copy"><span class="detail-logo">${item.original ? 'NEXA' : typeLabel[item.type].toUpperCase()}</span><h1>${escapeHtml(item.title)}</h1></div>`;
  document.getElementById('detail-title').textContent = item.title;
  document.getElementById('detail-title').hidden = true;
  document.getElementById('detail-title').closest('.detail-main').querySelector('.eyebrow').hidden = true;
  document.getElementById('detail-meta').innerHTML = `<span class="match-score">${item.match}% de escolha</span><span class="meta-divider"></span><span>${item.year}</span><span class="meta-divider"></span><span>${item.maturity}</span><span class="meta-divider"></span><span>${item.duration}</span><span class="meta-divider"></span><span>${item.genres.join(', ')}</span>`;
  document.getElementById('detail-description').textContent = item.description;
  document.getElementById('detail-genre').textContent = item.genres.join(', ');
  document.getElementById('detail-director').textContent = item.director;
  document.getElementById('detail-cast').textContent = item.cast.join(', ');
  document.getElementById('detail-rating').textContent = item.maturity;
  document.getElementById('detail-duration').textContent = item.duration;
  const listButton = document.getElementById('detail-list');
  listButton.innerHTML = `${inList ? icon('check') : icon('plus')}<span>${inList ? 'Na minha lista' : 'Adicionar à lista'}</span>`;
  listButton.dataset.id = item.id;
  const likeButton = document.getElementById('detail-like');
  likeButton.classList.toggle('liked', liked);
  likeButton.setAttribute('aria-pressed', String(liked));
  likeButton.dataset.id = item.id;
  const playButton = document.getElementById('detail-play');
  playButton.innerHTML = `${icon('play')}<span>${state.progress[item.id] ? 'Continuar assistindo' : 'Assistir'}</span>`;
  playButton.dataset.id = item.id;
  document.getElementById('detail-share').dataset.id = item.id;
  const omdbButton = document.getElementById('detail-omdb');
  omdbButton.hidden = !(item.local && item.type === 'filme');
  omdbButton.dataset.id = item.id;
  const episodeSection = document.getElementById('episodes-section');
  episodeSection.hidden = !item.seasons?.length;
  if (item.seasons?.length) {
    const select = document.getElementById('season-select');
    select.innerHTML = item.seasons.map((season, index) => `<option value="${index}">${season.name}</option>`).join('');
    renderEpisodes(item, 0);
  }
  const related = currentCatalog().filter((candidate) => candidate.id !== item.id && candidate.genres.some((genre) => item.genres.includes(genre))).slice(0, 4);
  document.getElementById('related-grid').innerHTML = related.map((candidate) => posterCard(candidate)).join('');
  if (detailsDialog.open) detailsDialog.close();
  detailsDialog.showModal();
  document.body.classList.add('modal-open');
  history.replaceState(null, '', `#/titulo/${item.id}`);
}

function renderEpisodes(item, seasonIndex) {
  const season = item.seasons[seasonIndex];
  document.getElementById('episode-list').innerHTML = season.episodes.map((episode, index) => {
    const episodeFile = season.episodeFiles?.[index];
    const number = episodeFile?.number ?? index + 1;
    const duration = episodeFile?.duration || `${28 + index * 3} min`;
    const thumbnail = episodeFile?.thumbnail || item.backdrop;
    return `
    <article class="episode-item">
      <div class="episode-image">
        <img src="${thumbnail}" alt="" loading="lazy">
        <button class="episode-play" type="button" data-action="play-episode" data-id="${item.id}" data-season="${seasonIndex}" data-episode="${index}" aria-label="Assistir ${escapeHtml(episode)}">${icon('play')}</button>
      </div>
      <div class="episode-copy">
        <div class="episode-top"><strong>${number}. ${escapeHtml(episode)}</strong><span>${escapeHtml(duration)}</span></div>
        <p>${escapeHtml(item.description)} Uma nova decisão coloca os personagens diante das consequências de suas escolhas.</p>
      </div>
    </article>`;
  }).join('');
}

function nextEpisodeTarget(active = state.activeVideo) {
  if (!active || active.episodeIndex === null || !active.item.seasons?.length) return null;
  const { item, seasonIndex, episodeIndex } = active;
  let nextSeasonIndex = seasonIndex;
  let nextEpisodeIndex = episodeIndex + 1;
  const currentSeason = item.seasons[seasonIndex];
  const seasonLength = currentSeason?.episodes?.length || currentSeason?.episodeFiles?.length || 0;
  if (nextEpisodeIndex >= seasonLength) {
    nextSeasonIndex = seasonIndex + 1;
    nextEpisodeIndex = 0;
  }
  const nextSeason = item.seasons[nextSeasonIndex];
  if (!nextSeason || nextEpisodeIndex >= (nextSeason.episodes?.length || 0)) return null;
  return { seasonIndex: nextSeasonIndex, episodeIndex: nextEpisodeIndex };
}

function updatePlayerNextButton() {
  const button = document.getElementById('player-next');
  if (button) button.hidden = !nextEpisodeTarget();
}

function playNextEpisode(target = nextEpisodeTarget()) {
  const active = state.activeVideo;
  if (!active || !target) return false;
  const { item } = active;
  const nextSeason = item.seasons?.[target.seasonIndex];
  const nextFile = nextSeason?.episodeFiles?.[target.episodeIndex];
  state.activeSeason = target.seasonIndex;
  openPlayer(item.id, target.episodeIndex, { fromDetails: active.fromDetails, autoplay: true });
  state.progress[item.id] = {
    percent: 1,
    seconds: 0,
    season: target.seasonIndex,
    episode: target.episodeIndex,
    updatedAt: Date.now()
  };
  persistActiveProfile();
  if (nextFile?.playable === false) showToast('O próximo episódio pode não tocar neste navegador.', 'error');
  return true;
}

function openPlayer(id, episodeIndex = null, options = {}) {
  const item = getItem(id);
  if (!item) return;
  if (!isAllowedItem(item)) {
    showToast('Este título não está disponível no perfil infantil.', 'error');
    return;
  }
  const fromDetails = options.fromDetails ?? detailsDialog.open;
  let resolvedEpisode = episodeIndex;
  let resolvedSeason = state.activeSeason;
  if (resolvedEpisode === null && item.seasons?.length && (item.drive || item.local)) {
    const last = state.progress[item.id];
    if (last && Number.isInteger(last.season) && Number.isInteger(last.episode)) {
      resolvedSeason = last.season;
      resolvedEpisode = last.episode;
    } else {
      resolvedSeason = 0;
      resolvedEpisode = 0;
    }
  }
  if (resolvedEpisode !== null && item.seasons?.length) {
    if (!item.seasons[resolvedSeason]) resolvedSeason = 0;
    const seasonEpisodes = item.seasons[resolvedSeason]?.episodes || [];
    if (resolvedEpisode >= seasonEpisodes.length) resolvedEpisode = 0;
  }
  const season = item.seasons?.[resolvedSeason];
  const episodeFile = resolvedEpisode !== null ? season?.episodeFiles?.[resolvedEpisode] : null;
  const progressKey = resolvedEpisode !== null && (item.drive || item.local)
    ? `${item.id}::s${resolvedSeason}e${resolvedEpisode}`
    : item.id;
  state.activeVideo = { item, episodeIndex: resolvedEpisode, seasonIndex: resolvedSeason, episodeFile, progressKey, fallbackTried: false, fromDetails };
  if (resolvedEpisode !== null && item.seasons) state.activeSeason = resolvedSeason;
  videoPlayer.poster = item.backdrop;
  videoPlayer.src = episodeFile?.video || item.video;
  document.getElementById('player-title').textContent = item.title;
  document.getElementById('player-episode').textContent = resolvedEpisode !== null && item.seasons
    ? `${item.seasons[resolvedSeason].name} • Episódio ${episodeFile?.number ?? resolvedEpisode + 1}`
    : item.duration;
  document.getElementById('player-quality').textContent = state.quality;
  resetSubtitles();
  const saved = state.progress[progressKey] || null;
  const activeVideo = state.activeVideo;
  videoPlayer.addEventListener('loadedmetadata', function resume() {
    if (state.activeVideo !== activeVideo) return;
    if (saved?.seconds && saved.seconds < videoPlayer.duration - 10) videoPlayer.currentTime = saved.seconds;
  }, { once: true });
  if (episodeFile?.playable === false) showToast('Este formato pode não tocar no navegador. Prefira MP4 ou WebM.', 'error');
  if (detailsDialog.open) detailsDialog.close();
  if (!playerDialog.open) {
    playerDialog.showModal();
    document.body.classList.add('modal-open');
  }
  updatePlayerNextButton();
  const shouldAutoplay = options.autoplay ?? state.autoplay;
  if (shouldAutoplay) {
    const promise = videoPlayer.play();
    if (promise) promise.catch(() => showToast('Clique em reproduzir para iniciar o vídeo', 'success'));
  }
}

function closePlayer() {
  if (videoPlayer.paused === false) videoPlayer.pause();
  resetSubtitles();
  playerDialog.close();
  document.body.classList.remove('modal-open');
}

function currentPlaybackKey() {
  const active = state.activeVideo;
  if (!active) return null;
  return active.progressKey || active.item.id;
}

function collectSubtitles() {
  const active = state.activeVideo;
  if (!active) return [];
  const list = [];
  const add = (subtitle) => {
    if (subtitle && !list.some((candidate) => candidate.id === subtitle.id)) list.push(subtitle);
  };
  (active.item.subtitles || []).forEach(add);
  (active.episodeFile?.subtitles || []).forEach(add);
  (subtitleStore.get(currentPlaybackKey()) || []).forEach(add);
  return list;
}

function localSubtitleTarget() {
  const active = state.activeVideo;
  if (!active?.item?.local) return null;
  const fileRel = active.episodeFile?.fileRel || active.item.fileRel;
  if (!fileRel) return null;
  return {
    rootKey: active.item.rootKey,
    path: fileRel,
    title: active.item.title,
    year: active.item.year
  };
}

function updateSubtitleActionButtons() {
  const target = localSubtitleTarget();
  subtitleSearchOpen.hidden = !target;
  const activeSubtitle = collectSubtitles().find((candidate) => candidate.id === activeSubtitleId);
  subtitleSaveHd.hidden = !(target && activeSubtitle && activeSubtitle.source === 'local');
}

function resetSubtitles() {
  closeSubtitleMenu();
  subtitleButton.classList.remove('active');
  subtitleButton.setAttribute('aria-expanded', 'false');
  activeSubtitleId = null;
  [...videoPlayer.querySelectorAll('track')].forEach((track) => track.remove());
  subtitleObjectUrls.forEach((url) => URL.revokeObjectURL(url));
  subtitleObjectUrls = [];
  subtitleMenuList.innerHTML = '';
}

function renderSubtitleMenu() {
  const subtitles = collectSubtitles();
  const offSelected = !activeSubtitleId;
  subtitleMenuList.innerHTML = `
    <button class="subtitle-option ${offSelected ? 'selected' : ''}" type="button" role="menuitemradio" aria-checked="${offSelected}" data-subtitle="">
      <span>Desligado</span>
    </button>
    ${subtitles.map((subtitle) => {
      const selected = subtitle.id === activeSubtitleId;
      return `<button class="subtitle-option ${selected ? 'selected' : ''}" type="button" role="menuitemradio" aria-checked="${selected}" data-subtitle="${subtitle.id}">
        <span>${escapeHtml(subtitle.label)}</span>
        <small>${subtitle.source === 'drive' ? 'Google Drive' : subtitle.source === 'local-server' ? 'HD local' : 'Arquivo local'}</small>
      </button>`;
    }).join('')}
    ${subtitles.length ? '' : '<p class="subtitle-empty">Nenhuma legenda encontrada. Carregue um arquivo .srt ou .vtt.</p>'}`;
  updateSubtitleActionButtons();
}

function openSubtitleMenu() {
  renderSubtitleMenu();
  subtitleMenu.hidden = false;
  subtitleButton.setAttribute('aria-expanded', 'true');
  scheduleControlsHide();
}

function closeSubtitleMenu() {
  if (!subtitleMenu) return;
  subtitleMenu.hidden = true;
  if (subtitleButton) subtitleButton.setAttribute('aria-expanded', 'false');
}

function disableSubtitles() {
  const tracks = videoPlayer.textTracks;
  for (let index = 0; index < tracks.length; index += 1) tracks[index].mode = 'disabled';
  activeSubtitleId = null;
  subtitleButton.classList.remove('active');
  renderSubtitleMenu();
}

async function activateSubtitle(id) {
  const subtitle = collectSubtitles().find((candidate) => candidate.id === id);
  if (!subtitle) return;
  try {
    const text = subtitle.text ?? await fetchSubtitleText(subtitle);
    const vtt = srtToVtt(text);
    if (!vtt.trim()) throw new Error('Legenda vazia');
    const url = URL.createObjectURL(new Blob([vtt], { type: 'text/vtt' }));
    subtitleObjectUrls.push(url);
    [...videoPlayer.querySelectorAll('track')].forEach((track) => track.remove());
    const track = document.createElement('track');
    track.kind = 'subtitles';
    track.label = subtitle.label || 'Legenda';
    track.srclang = subtitle.lang || 'pt';
    track.src = url;
    track.default = true;
    videoPlayer.append(track);
    const showTrack = () => {
      const tracks = videoPlayer.textTracks;
      for (let index = 0; index < tracks.length; index += 1) tracks[index].mode = tracks[index] === tracks[tracks.length - 1] ? 'showing' : 'disabled';
    };
    showTrack();
    track.addEventListener('load', showTrack);
    activeSubtitleId = subtitle.id;
    subtitleButton.classList.add('active');
    renderSubtitleMenu();
    showToast(`Legenda: ${subtitle.label}`, 'success');
  } catch {
    showToast('Não foi possível carregar essa legenda.', 'error');
  }
}

async function fetchSubtitleText(subtitle) {
  const url = subtitle.url || (subtitle.fileId ? driveMediaUrl(subtitle.fileId, state.driveConfig?.apiKey || '') : '');
  if (!url) throw new Error('Legenda sem origem');
  const response = await fetch(url, { cache: 'no-store' });
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return response.text();
}

function readFileText(file) {
  if (typeof file.text === 'function') return file.text();
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ''));
    reader.onerror = () => reject(reader.error || new Error('Falha ao ler o arquivo'));
    reader.readAsText(file);
  });
}

async function loadSubtitleFile(file) {
  if (!file) return;
  try {
    const text = await readFileText(file);
    if (!text.trim()) throw new Error('Arquivo vazio');
    const language = subtitleLanguage(file.name);
    const subtitle = {
      id: `local-sub-${Date.now()}-${subtitleCounter += 1}`,
      label: subtitleDisplayLabel(file.name),
      lang: language.code || 'pt',
      source: 'local',
      name: file.name,
      text
    };
    const key = currentPlaybackKey();
    if (!key) return;
    const stored = subtitleStore.get(key) || [];
    stored.push(subtitle);
    subtitleStore.set(key, stored);
    closeSubtitleMenu();
    await activateSubtitle(subtitle.id);
  } catch {
    showToast('Não foi possível ler o arquivo de legenda.', 'error');
  }
}

function toggleList(id, silent = false) {
  const item = getItem(id);
  if (!item) return;
  const adding = !state.list.has(id);
  if (adding) state.list.add(id);
  else state.list.delete(id);
  persistActiveProfile();
  document.getElementById('list-count').textContent = state.list.size;
  document.querySelectorAll(`[data-action="toggle-list"][data-id="${id}"]`).forEach((button) => {
    button.classList.toggle('in-list', adding);
    button.innerHTML = adding ? icon('check') : icon('plus');
    button.setAttribute('aria-label', `${adding ? 'Remover' : 'Adicionar'} ${item.title} ${adding ? 'da' : 'à'} lista`);
  });
  const detailButton = document.getElementById('detail-list');
  if (detailButton.dataset.id === id) {
    detailButton.innerHTML = `${adding ? icon('check') : icon('plus')}<span>${adding ? 'Na minha lista' : 'Adicionar à lista'}</span>`;
  }
  if (!silent) showToast(adding ? `${item.title} adicionado à sua lista` : `${item.title} removido da sua lista`, 'success');
  if (state.view === 'lista') browseView();
}

function toggleLike(id) {
  const item = getItem(id);
  if (!item) return;
  const liking = !state.liked.has(id);
  if (liking) state.liked.add(id);
  else state.liked.delete(id);
  persistActiveProfile();
  const likeButton = document.getElementById('detail-like');
  likeButton.classList.toggle('liked', liking);
  likeButton.setAttribute('aria-pressed', String(liking));
  showToast(liking ? 'Obrigado pelo feedback!' : 'Avaliação removida', 'success');
}

function getShareUrl(item) {
  const url = new URL(window.location.href);
  url.hash = `/titulo/${item.id}`;
  return url.toString();
}

async function shareItem(id) {
  const item = getItem(id);
  if (!item) return;
  const url = getShareUrl(item);
  const shareData = { title: `${item.title} — NEXA`, text: item.description, url };
  try {
    if (navigator.share) await navigator.share(shareData);
    else {
      await navigator.clipboard.writeText(url);
      showToast('Link copiado para a área de transferência', 'success');
    }
  } catch (error) {
    if (error.name !== 'AbortError') showToast('Não foi possível compartilhar agora', 'error');
  }
}

function showToast(message, type = 'success') {
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `${type === 'error' ? icon('info') : icon('check')}<span>${escapeHtml(message)}</span>`;
  toastRegion.append(toast);
  window.setTimeout(() => {
    toast.classList.add('hiding');
    window.setTimeout(() => toast.remove(), 240);
  }, 3200);
}

function updateActiveNavigation() {
  document.querySelectorAll('[data-view]').forEach((button) => {
    const active = button.dataset.view === state.view;
    button.classList.toggle('active', active);
    if (active) button.setAttribute('aria-current', 'page');
    else button.removeAttribute('aria-current');
  });
}

function resetSearchFilters() {
  state.searchFilters = { type: 'todos', genre: 'Todos', year: 'todos', rating: 0 };
}

function getSearchYears() {
  return [...new Set(currentCatalog().map((item) => String(item.year)))].sort((a, b) => Number(b) - Number(a));
}

function searchFiltersView() {
  const filters = state.searchFilters;
  const types = [['todos', 'Todos'], ['filme', 'Filmes'], ['serie', 'Séries'], ['documentario', 'Documentários']];
  const ratings = [[0, 'Qualquer nota'], [7, 'Nota 7+'], [8, 'Nota 8+'], [9, 'Nota 9+']];
  const sorts = [['relevancia', 'Mais relevantes'], ['recentes', 'Mais recentes'], ['avaliacao', 'Melhor avaliados'], ['a-z', 'Título (A–Z)']];
  const genres = getGenres();
  const years = getSearchYears();
  const active = filters.type !== 'todos' || filters.genre !== 'Todos' || filters.year !== 'todos' || Number(filters.rating) > 0;
  const options = (values, selected) => values.map(([value, label]) => `<option value="${value}" ${String(selected) === String(value) ? 'selected' : ''}>${label}</option>`).join('');
  return `
    <div class="search-filters" role="group" aria-label="Filtros da busca">
      <label class="search-filter"><span>Tipo</span><select class="sort-select" data-search-filter="type">${options(types, filters.type)}</select></label>
      <label class="search-filter"><span>Gênero</span><select class="sort-select" data-search-filter="genre">${options(genres.map((genre) => [genre, genre]), filters.genre)}</select></label>
      <label class="search-filter"><span>Ano</span><select class="sort-select" data-search-filter="year">${options([['todos', 'Qualquer ano'], ...years.map((year) => [year, year])], filters.year)}</select></label>
      <label class="search-filter"><span>Nota</span><select class="sort-select" data-search-filter="rating">${options(ratings, filters.rating)}</select></label>
      <label class="search-filter"><span>Ordenar</span><select class="sort-select" data-search-sort>${options(sorts, state.sort)}</select></label>
      <button class="filter-reset" type="button" data-search-reset ${active ? '' : 'disabled'}>Limpar filtros</button>
    </div>`;
}

function openSearch() {
  searchInput.focus();
  searchInput.select();
}

function handleSearch(query) {
  state.query = query.trim();
  searchBox.classList.toggle('has-value', Boolean(state.query));
  if (state.query) {
    if (state.view !== 'busca') {
      state.previousView = state.view;
      state.genre = 'Todos';
      resetSearchFilters();
    }
    state.view = 'busca';
    updateActiveNavigation();
    const items = filteredCatalog('busca');
    mainContent.innerHTML = `
      <section class="section-view">
        <header class="section-header"><div><p class="eyebrow">Resultados</p><h1>${state.query ? `Busca por “${escapeHtml(state.query)}”` : 'Busca'}</h1><p>${items.length} ${items.length === 1 ? 'resultado encontrado' : 'resultados encontrados'}.</p></div></header>
        ${searchFiltersView()}
        ${items.length ? `<div class="media-grid">${items.map((item) => posterCard(item)).join('')}</div>` : `<div class="empty-state"><div class="empty-state-inner"><span class="empty-icon">${icon('search')}</span><h2>Nada encontrado</h2><p>Experimente outro título, gênero ou pessoa do elenco.</p><button class="button button-red" type="button" data-search-reset>Limpar filtros</button></div></div>`}
      </section>`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else if (state.view === 'busca') {
    resetSearchFilters();
    renderView(state.previousView || 'home');
  }
}

function formatTime(seconds) {
  if (!Number.isFinite(seconds)) return '0:00';
  const minutes = Math.floor(seconds / 60);
  const remainder = Math.floor(seconds % 60);
  return `${minutes}:${String(remainder).padStart(2, '0')}`;
}

function updatePlayerProgress() {
  const duration = videoPlayer.duration || 0;
  const percent = duration ? (videoPlayer.currentTime / duration) * 100 : 0;
  document.getElementById('player-progress').value = percent;
  document.getElementById('player-current').textContent = formatTime(videoPlayer.currentTime);
  document.getElementById('player-duration').textContent = formatTime(duration);
  if (duration && videoPlayer.buffered.length) {
    const buffered = videoPlayer.buffered.end(videoPlayer.buffered.length - 1);
    document.getElementById('buffered-bar').style.width = `${(buffered / duration) * 100}%`;
  }
}

function saveProgress() {
  if (!state.activeVideo || !Number.isFinite(videoPlayer.duration) || videoPlayer.duration <= 0) return;
  const { item, seasonIndex, episodeIndex, progressKey } = state.activeVideo;
  const percent = Math.min(99, Math.max(1, (videoPlayer.currentTime / videoPlayer.duration) * 100));
  const entry = { percent: Math.round(percent), seconds: Math.round(videoPlayer.currentTime), updatedAt: Date.now() };
  if (episodeIndex !== null && item.drive) {
    entry.season = seasonIndex;
    entry.episode = episodeIndex;
  }
  state.progress[progressKey || item.id] = entry;
  if (episodeIndex !== null && item.drive) state.progress[item.id] = entry;
  persistActiveProfile();
}

function setQuality(value) {
  state.quality = value;
  storage.set('nexa-quality', value);
  document.getElementById('player-quality').textContent = value;
  const select = document.getElementById('settings-quality');
  if (select) select.value = value;
}

function setPlayerPlaying(playing) {
  document.getElementById('player-shell').classList.toggle('playing', playing);
}

function togglePlay() {
  if (videoPlayer.paused) videoPlayer.play().catch(() => {});
  else videoPlayer.pause();
}

function skip(seconds) {
  videoPlayer.currentTime = Math.max(0, Math.min(videoPlayer.duration || 0, videoPlayer.currentTime + seconds));
}

function toggleMute() {
  videoPlayer.muted = !videoPlayer.muted;
  document.getElementById('player-mute').classList.toggle('muted', videoPlayer.muted);
}

function toggleFullscreen() {
  if (!document.fullscreenElement) document.getElementById('player-shell').requestFullscreen?.();
  else document.exitFullscreen?.();
}

function scheduleControlsHide() {
  const shell = document.getElementById('player-shell');
  clearTimeout(state.hideControlsTimer);
  shell.classList.remove('controls-hidden');
  state.hideControlsTimer = window.setTimeout(() => {
    if (!videoPlayer.paused && subtitleMenu.hidden) shell.classList.add('controls-hidden');
  }, 2800);
}

document.addEventListener('click', (event) => {
  const albumTarget = event.target.closest('[data-album]');
  if (albumTarget) {
    const album = state.musicAlbums.find((entry) => entry.id === albumTarget.dataset.album);
    if (album) {
      state.activeAlbum = album;
      renderAlbumView(album);
    }
    return;
  }
  if (event.target.closest('[data-album-back]')) {
    state.activeAlbum = null;
    state.activeTrackIndex = -1;
    renderMusicView();
    return;
  }
  const trackTarget = event.target.closest('[data-track]');
  if (trackTarget) {
    playAlbumTrack(trackTarget.dataset.track, Number(trackTarget.dataset.trackIndex));
    return;
  }
  const albumPlayTarget = event.target.closest('[data-play-album]');
  if (albumPlayTarget) {
    playAlbumTrack(albumPlayTarget.dataset.playAlbum, 0);
    return;
  }
  if (event.target.closest('[data-local-settings]')) {
    openSettings();
    window.setTimeout(() => {
      document.querySelector('.local-settings')?.scrollIntoView({ block: 'start' });
      document.getElementById('local-root')?.focus({ preventScroll: true });
    }, 60);
    return;
  }
  const actionTarget = event.target.closest('[data-action]');
  if (actionTarget) {
    const { action, id } = actionTarget.dataset;
    if (action === 'play') openPlayer(id);
    if (action === 'details') openDetails(id);
    if (action === 'toggle-list') toggleList(id);
    if (action === 'play-episode') {
      state.activeSeason = Number(actionTarget.dataset.season);
      state.activeEpisode = Number(actionTarget.dataset.episode);
      openPlayer(id, state.activeEpisode);
    }
    return;
  }
  const viewTarget = event.target.closest('[data-view], [data-view-link]');
  if (viewTarget) {
    event.preventDefault();
    const view = viewTarget.dataset.view || viewTarget.dataset.viewLink;
    state.query = '';
    searchInput.value = '';
    searchBox.classList.remove('has-value');
    renderView(view);
    closeSidebar();
  }
  const genreTarget = event.target.closest('[data-genre]');
  if (genreTarget) {
    state.genre = genreTarget.dataset.genre;
    browseView();
  }
});

document.addEventListener('keydown', (event) => {
  const keys = ['ArrowLeft', 'ArrowRight', 'Home', 'End'];
  if (!keys.includes(event.key)) return;
  const card = event.target.closest('.media-card');
  const row = card?.closest('.media-row');
  if (!card || !row) return;
  const cards = [...row.querySelectorAll('.media-card')];
  const index = cards.indexOf(card);
  if (index === -1) return;
  let next = index;
  if (event.key === 'ArrowRight') next = Math.min(cards.length - 1, index + 1);
  if (event.key === 'ArrowLeft') next = Math.max(0, index - 1);
  if (event.key === 'Home') next = 0;
  if (event.key === 'End') next = cards.length - 1;
  if (next === index) return;
  event.preventDefault();
  const target = cards[next].querySelector('.poster-open');
  target?.focus();
  target?.scrollIntoView({ block: 'nearest', inline: 'center' });
});

document.getElementById('detail-play').addEventListener('click', (event) => openPlayer(event.currentTarget.dataset.id));
document.getElementById('detail-list').addEventListener('click', (event) => toggleList(event.currentTarget.dataset.id));
document.getElementById('detail-like').addEventListener('click', (event) => toggleLike(event.currentTarget.dataset.id));
document.getElementById('detail-share').addEventListener('click', (event) => shareItem(event.currentTarget.dataset.id));
document.getElementById('season-select').addEventListener('change', (event) => {
  state.activeSeason = Number(event.target.value);
  if (state.activeItem) renderEpisodes(state.activeItem, state.activeSeason);
});
document.querySelector('[data-close-dialog]').addEventListener('click', () => detailsDialog.close());

detailsDialog.addEventListener('close', () => {
  document.body.classList.remove('modal-open');
  if (window.location.hash.startsWith('#/titulo/')) history.replaceState(null, '', window.location.pathname + window.location.search);
  if (!state.activeVideo && !playerDialog.open && !settingsDialog.open && state.activeItem) focusCard(state.activeItem.id);
});

detailsDialog.addEventListener('click', (event) => {
  if (event.target === detailsDialog) detailsDialog.close();
});

playerDialog.addEventListener('cancel', (event) => {
  event.preventDefault();
  closePlayer();
});

playerDialog.addEventListener('close', () => {
  saveProgress();
  videoPlayer.pause();
  document.body.classList.remove('modal-open');
  const origin = state.activeVideo;
  state.activeVideo = null;
  refreshCurrentView();
  if (origin?.fromDetails && origin.item) openDetails(origin.item.id);
  else if (origin?.item) focusCard(origin.item.id);
});

document.getElementById('player-close').addEventListener('click', closePlayer);
document.getElementById('player-play').addEventListener('click', togglePlay);
document.getElementById('player-center-play').addEventListener('click', togglePlay);
document.getElementById('player-back').addEventListener('click', () => skip(-10));
document.getElementById('player-forward').addEventListener('click', () => skip(10));
document.getElementById('player-mute').addEventListener('click', toggleMute);
document.getElementById('player-fullscreen').addEventListener('click', toggleFullscreen);
document.getElementById('player-progress').addEventListener('input', (event) => {
  if (videoPlayer.duration) videoPlayer.currentTime = (Number(event.target.value) / 100) * videoPlayer.duration;
});
document.getElementById('player-volume').addEventListener('input', (event) => {
  videoPlayer.volume = Number(event.target.value);
  videoPlayer.muted = false;
});
document.getElementById('player-next').addEventListener('click', () => playNextEpisode());
document.getElementById('player-quality').addEventListener('click', () => {
  setQuality(state.quality === 'HD' ? '4K' : 'HD');
  showToast(`Qualidade alterada para ${state.quality}`, 'success');
});
subtitleButton.addEventListener('click', (event) => {
  event.stopPropagation();
  if (subtitleMenu.hidden) openSubtitleMenu();
  else closeSubtitleMenu();
});
document.getElementById('subtitle-close').addEventListener('click', closeSubtitleMenu);
document.getElementById('subtitle-upload').addEventListener('click', () => subtitleFileInput.click());

async function saveActiveSubtitleToHd() {
  const target = localSubtitleTarget();
  const subtitle = collectSubtitles().find((candidate) => candidate.id === activeSubtitleId);
  if (!target || !subtitle) {
    showToast('Carregue uma legenda antes de salvar no HD.', 'error');
    return;
  }
  try {
    const text = subtitle.text ?? await fetchSubtitleText(subtitle);
    const response = await fetch(localApi('/api/local/subtitle/upload'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ root: target.rootKey, path: target.path, lang: subtitle.lang || 'pt', content: text })
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(data.error || `HTTP ${response.status}`);
    const saved = {
      id: `local-sub-${Date.now()}`,
      label: subtitle.label || 'Legenda',
      lang: subtitle.lang || 'pt',
      source: 'local-server',
      name: data.name,
      url: data.url
    };
    const owner = state.activeVideo.episodeFile || state.activeVideo.item;
    const list = owner.subtitles || (owner.subtitles = []);
    if (!list.some((candidate) => candidate.url === saved.url)) list.push(saved);
    closeSubtitleMenu();
    renderSubtitleMenu();
    await activateSubtitle(saved.id);
    showToast(`Legenda salva no HD: ${data.name}`, 'success');
  } catch (error) {
    showToast(error.message || 'Não foi possível salvar a legenda no HD.', 'error');
  }
}

subtitleSaveHd.addEventListener('click', saveActiveSubtitleToHd);

subtitleSearchOpen.addEventListener('click', () => {
  const target = localSubtitleTarget();
  if (!target) return;
  closeSubtitleMenu();
  subtitleSearchInput.value = target.title || '';
  subtitleResults.innerHTML = '';
  document.getElementById('subtitle-search-hint').textContent = `Buscando legendas para “${target.title}”. Escolha uma para baixar e salvar ao lado do filme no HD.`;
  subtitleSearchDialog.showModal();
  document.body.classList.add('modal-open');
  window.setTimeout(() => subtitleSearchInput.focus(), 60);
});

const omdbDialog = document.getElementById('omdb-dialog');
const omdbResults = document.getElementById('omdb-results');
const omdbQuery = document.getElementById('omdb-dialog-query');

document.getElementById('detail-omdb').addEventListener('click', () => {
  const item = getItem(state.activeItem?.id);
  if (!item?.local) return;
  omdbQuery.value = item.title.replace(/\(\d{4}\)/, '').trim();
  omdbResults.innerHTML = '';
  omdbDialog.showModal();
  document.body.classList.add('modal-open');
  window.setTimeout(() => omdbQuery.focus(), 60);
});

document.getElementById('omdb-dialog-close').addEventListener('click', () => omdbDialog.close());
omdbDialog.addEventListener('close', () => {
  document.body.classList.remove('modal-open');
});

document.getElementById('omdb-dialog-run').addEventListener('click', async () => {
  const title = omdbQuery.value.trim();
  if (!title) return;
  omdbResults.innerHTML = '<li class="subtitle-result-empty">Buscando no OMDb...</li>';
  try {
    const response = await fetch(localApi(`/api/local/omdb/candidates?title=${encodeURIComponent(title)}`), { cache: 'no-store' });
    const data = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(data.error || `HTTP ${response.status}`);
    const candidates = Array.isArray(data.candidates) ? data.candidates : [];
    if (!candidates.length) {
      omdbResults.innerHTML = '<li class="subtitle-result-empty">Nada encontrado. Tente o título original.</li>';
      return;
    }
    omdbResults.innerHTML = candidates.map((candidate) => `
      <li>
        <button type="button" data-omdb-choose="${candidate.imdbId}">
          <strong>${escapeHtml(candidate.title)}</strong>
          <small>${escapeHtml(candidate.year || '')}${candidate.type ? ` • ${candidate.type}` : ''}</small>
        </button>
      </li>`).join('');
  } catch (error) {
    omdbResults.innerHTML = `<li class="subtitle-result-empty">${escapeHtml(error.message || 'Falha na busca.')}</li>`;
  }
});

omdbResults.addEventListener('click', async (event) => {
  const button = event.target.closest('[data-omdb-choose]');
  if (!button) return;
  const item = getItem(state.activeItem?.id);
  if (!item?.local) return;
  button.disabled = true;
  try {
    const response = await fetch(localApi('/api/local/omdb/choose'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ root: item.rootKey, path: item.fileRel, imdbId: button.dataset.omdbChoose })
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(data.error || `HTTP ${response.status}`);
    await loadLocalLibrary({ silent: true });
    omdbDialog.close();
    const updated = getItem(item.id);
    if (updated) openDetails(updated.id);
    showToast('Filme identificado. Metadados atualizados.', 'success');
  } catch (error) {
    showToast(error.message || 'Não foi possível salvar a escolha.', 'error');
    button.disabled = false;
  }
});

document.getElementById('subtitle-search-close').addEventListener('click', () => subtitleSearchDialog.close());
subtitleSearchDialog.addEventListener('close', () => {
  document.body.classList.remove('modal-open');
});

document.getElementById('subtitle-search-run').addEventListener('click', async () => {
  const target = localSubtitleTarget();
  const title = subtitleSearchInput.value.trim();
  if (!title) {
    subtitleResults.innerHTML = '<li class="subtitle-result-empty">Digite o título do filme.</li>';
    return;
  }
  subtitleResults.innerHTML = '<li class="subtitle-result-empty">Buscando no OpenSubtitles...</li>';
  const params = new URLSearchParams({ title });
  if (target?.year) params.set('year', String(target.year));
  if (target?.rootKey) params.set('root', target.rootKey);
  if (target?.path) params.set('path', target.path);
  try {
    const response = await fetch(localApi(`/api/local/subtitle/search?${params.toString()}`), { cache: 'no-store' });
    const data = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(data.error || `HTTP ${response.status}`);
    const results = Array.isArray(data.results) ? data.results : [];
    if (!results.length) {
      subtitleResults.innerHTML = '<li class="subtitle-result-empty">Nenhuma legenda encontrada. Tente o título original em inglês.</li>';
      return;
    }
    subtitleResults.innerHTML = results.map((result) => `
      <li>
        <button type="button" data-subtitle-download="${result.id}" data-lang="${result.lang || 'pt'}">
          <strong>${escapeHtml(result.name || 'Legenda')}</strong>
          <small>${escapeHtml(result.fileName || '')}</small>
          <span class="subtitle-result-meta">${escapeHtml(result.lang || 'pt')}${result.hearingImpaired ? ' • SDH' : ''}${result.downloads ? ` • ${result.downloads} downloads` : ''}</span>
        </button>
      </li>`).join('');
  } catch (error) {
    subtitleResults.innerHTML = `<li class="subtitle-result-empty">${escapeHtml(error.message || 'Falha na busca.')}</li>`;
  }
});

subtitleResults.addEventListener('click', async (event) => {
  const button = event.target.closest('[data-subtitle-download]');
  if (!button) return;
  const target = localSubtitleTarget();
  if (!target) return;
  button.disabled = true;
  try {
    const response = await fetch(localApi('/api/local/subtitle/download'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        subtitleId: button.dataset.subtitleDownload,
        link: button.dataset.link || '',
        lang: button.dataset.lang || 'pt',
        root: target.rootKey,
        path: target.path
      })
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(data.error || `HTTP ${response.status}`);
    const subtitle = {
      id: `local-sub-${Date.now()}`,
      label: 'Legenda (baixada)',
      lang: button.dataset.lang || 'pt',
      source: 'local-server',
      name: data.name,
      url: data.url
    };
    const owner = state.activeVideo.episodeFile || state.activeVideo.item;
    const list = owner.subtitles || (owner.subtitles = []);
    if (!list.some((candidate) => candidate.url === subtitle.url)) list.push(subtitle);
    subtitleSearchDialog.close();
    renderSubtitleMenu();
    await activateSubtitle(subtitle.id);
    showToast(`Legenda baixada e salva no HD: ${data.name}`, 'success');
  } catch (error) {
    showToast(error.message || 'Não foi possível baixar a legenda.', 'error');
    button.disabled = false;
  }
});
subtitleFileInput.addEventListener('change', () => {
  const file = subtitleFileInput.files?.[0];
  subtitleFileInput.value = '';
  loadSubtitleFile(file);
});
subtitleMenuList.addEventListener('click', (event) => {
  const option = event.target.closest('[data-subtitle]');
  if (!option) return;
  const id = option.dataset.subtitle;
  if (id) {
    closeSubtitleMenu();
    activateSubtitle(id);
  } else {
    disableSubtitles();
  }
});
document.addEventListener('click', (event) => {
  if (subtitleMenu.hidden) return;
  if (event.target.closest('#subtitle-menu') || event.target.closest('#player-subtitles')) return;
  closeSubtitleMenu();
});
videoPlayer.addEventListener('error', () => {
  const active = state.activeVideo;
  if (!active) {
    showToast('Não foi possível carregar o vídeo', 'error');
    return;
  }
  if (active.fallbackTried) {
    showToast('Não foi possível carregar o vídeo', 'error');
    return;
  }
  const localTranscode = active.episodeFile?.transcodeUrl || active.item?.transcodeUrl;
  if (localTranscode) {
    active.fallbackTried = true;
    const saved = state.progress[currentPlaybackKey()];
    const start = saved?.seconds ? `&start=${Math.floor(saved.seconds)}` : '';
    videoPlayer.src = `${localTranscode}${start}`;
    videoPlayer.load();
    if (state.autoplay) videoPlayer.play().catch(() => {});
    showToast('Transcodificando o vídeo do HD...', 'success');
    return;
  }
  const fileId = active?.episodeFile?.fileId || active?.item?.driveFileId;
  if (!fileId) {
    showToast('Não foi possível carregar o vídeo', 'error');
    return;
  }
  active.fallbackTried = true;
  videoPlayer.src = driveDownloadUrl(fileId);
  videoPlayer.load();
  if (state.autoplay) videoPlayer.play().catch(() => {});
  showToast('Tentando um link alternativo do Drive...', 'success');
});
videoPlayer.addEventListener('play', () => setPlayerPlaying(true));
videoPlayer.addEventListener('pause', () => setPlayerPlaying(false));
videoPlayer.addEventListener('timeupdate', updatePlayerProgress);
videoPlayer.addEventListener('loadedmetadata', updatePlayerProgress);
videoPlayer.addEventListener('ended', () => {
  saveProgress();
  const active = state.activeVideo;
  if (!active || active.episodeIndex === null || !active.item.seasons?.length) return;
  const target = nextEpisodeTarget(active);
  if (!target) {
    showToast('Você chegou ao último episódio disponível.', 'success');
    return;
  }
  if (state.autoplay) {
    playNextEpisode(target);
  } else {
    showToast('Próximo episódio disponível. Use o botão de próximo episódio no player.', 'success');
  }
});
document.getElementById('player-shell').addEventListener('mousemove', scheduleControlsHide);
document.getElementById('player-shell').addEventListener('mouseleave', () => {
  if (!videoPlayer.paused && subtitleMenu.hidden) document.getElementById('player-shell').classList.add('controls-hidden');
});

musicAudio.addEventListener('ended', playNextTrack);
musicAudio.addEventListener('error', () => {
  if (musicAudio.getAttribute('src')) showToast('Não foi possível tocar esta música.', 'error');
});
document.getElementById('music-close').addEventListener('click', stopMusic);

searchInput.addEventListener('input', (event) => handleSearch(event.target.value));
document.getElementById('search-form').addEventListener('submit', (event) => {
  event.preventDefault();
  handleSearch(searchInput.value);
});
document.getElementById('search-clear').addEventListener('click', () => {
  searchInput.value = '';
  handleSearch('');
  searchInput.focus();
});
document.addEventListener('change', (event) => {
  if (event.target.id === 'sort-select') {
    state.sort = event.target.value;
    browseView();
    return;
  }
  const searchFilter = event.target.closest('[data-search-filter]');
  if (searchFilter) {
    const key = searchFilter.dataset.searchFilter;
    state.searchFilters[key] = key === 'rating' ? Number(searchFilter.value) : searchFilter.value;
    handleSearch(state.query);
    return;
  }
  if (event.target.closest('[data-search-sort]')) {
    state.sort = event.target.value;
    handleSearch(state.query);
  }
});

document.addEventListener('click', (event) => {
  if (!event.target.closest('[data-search-reset]')) return;
  resetSearchFilters();
  if (state.query) handleSearch(state.query);
});

function isTypingTarget(target) {
  if (!(target instanceof Element)) return false;
  return Boolean(target.closest('input, textarea, select, [contenteditable="true"], [contenteditable=""]'));
}

document.addEventListener('keydown', (event) => {
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
    event.preventDefault();
    openSearch();
  }
  if (event.key === '/' && !isTypingTarget(event.target) && !document.querySelector('dialog[open]')) {
    event.preventDefault();
    openSearch();
  }
  if (event.key === 'Escape' && playerDialog.open) {
    event.preventDefault();
    if (!subtitleMenu.hidden) closeSubtitleMenu();
    else closePlayer();
  }
  if (playerDialog.open && !detailsDialog.open) {
    if (event.code === 'Space' || event.key.toLowerCase() === 'k') {
      event.preventDefault();
      togglePlay();
    }
    if (event.key === 'ArrowRight' || event.key.toLowerCase() === 'l') skip(10);
    if (event.key === 'ArrowLeft' || event.key.toLowerCase() === 'j') skip(-10);
    if (event.key.toLowerCase() === 'm') toggleMute();
    if (event.key.toLowerCase() === 'f') toggleFullscreen();
    if (event.key.toLowerCase() === 'c') {
      event.preventDefault();
      if (subtitleMenu.hidden) openSubtitleMenu();
      else closeSubtitleMenu();
    }
  }
});

function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebar-scrim').classList.remove('visible');
}

document.getElementById('menu-button').addEventListener('click', () => {
  document.getElementById('sidebar').classList.add('open');
  document.getElementById('sidebar-scrim').classList.add('visible');
});
document.getElementById('sidebar-close').addEventListener('click', closeSidebar);
document.getElementById('sidebar-scrim').addEventListener('click', closeSidebar);

const themeToggle = document.getElementById('theme-toggle');
const settingsDialog = document.getElementById('settings-dialog');
const settingsQuality = document.getElementById('settings-quality');
const autoplaySwitch = document.getElementById('settings-autoplay');

function setTheme(light) {
  document.body.classList.toggle('light-theme', light);
  storage.set('nexa-theme', light ? 'light' : 'dark');
  themeToggle.querySelector('span').textContent = light ? 'Tema escuro' : 'Tema claro';
  document.getElementById('settings-theme').textContent = light ? 'Tema escuro' : 'Tema claro';
}

function setAutoplay(value) {
  state.autoplay = value;
  storage.set('nexa-autoplay', value);
  autoplaySwitch.setAttribute('aria-checked', String(value));
}

function openSettings() {
  notificationsPopover.hidden = true;
  profilePopover.hidden = true;
  notificationButton.setAttribute('aria-expanded', 'false');
  profileButton.setAttribute('aria-expanded', 'false');
  document.getElementById('profile-button').setAttribute('aria-expanded', 'false');
  settingsQuality.value = state.quality;
  autoplaySwitch.setAttribute('aria-checked', String(state.autoplay));
  document.getElementById('settings-theme').textContent = document.body.classList.contains('light-theme') ? 'Tema escuro' : 'Tema claro';
  updateDriveSettingsUI();
  updateLocalSettingsUI();
  settingsDialog.showModal();
  document.body.classList.add('modal-open');
}

themeToggle.addEventListener('click', () => setTheme(!document.body.classList.contains('light-theme')));
document.getElementById('settings-theme').addEventListener('click', () => setTheme(!document.body.classList.contains('light-theme')));
autoplaySwitch.addEventListener('click', () => setAutoplay(!state.autoplay));
settingsQuality.addEventListener('change', () => setQuality(settingsQuality.value));
document.getElementById('drive-nav').addEventListener('click', () => {
  closeSidebar();
  openSettings();
  window.setTimeout(() => {
    document.querySelector('.drive-settings')?.scrollIntoView({ block: 'start' });
    document.getElementById('drive-folder')?.focus({ preventScroll: true });
  }, 60);
});
document.getElementById('drive-connect').addEventListener('click', connectDrive);
document.getElementById('drive-disconnect').addEventListener('click', disconnectDrive);
document.getElementById('local-nav').addEventListener('click', () => {
  closeSidebar();
  openSettings();
  window.setTimeout(() => {
    document.querySelector('.local-settings')?.scrollIntoView({ block: 'start' });
    document.getElementById('local-root')?.focus({ preventScroll: true });
  }, 60);
});
document.getElementById('local-scan').addEventListener('click', scanLocalLibrary);

document.getElementById('local-server').addEventListener('change', (event) => {
  const value = String(event.target.value || '').trim().replace(/\/+$/, '');
  if (value) storage.set('nexa-local-server', value);
  else storage.set('nexa-local-server', '');
  updateLocalSettingsUI();
  showToast(value ? `Servidor local: ${value}` : 'Usando o endereço padrão do servidor local.', 'success');
});

document.getElementById('omdb-settings-save').addEventListener('click', async () => {
  const status = document.getElementById('omdb-settings-status');
  const payload = { omdbApiKey: document.getElementById('omdb-api-key').value.trim() };
  status.textContent = 'Salvando...';
  try {
    const response = await fetch(localApi('/api/local/omdb/settings'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(data.error || `HTTP ${response.status}`);
    status.textContent = data.hasOmdbKey
      ? 'Chave salva no servidor local. Use “Atualizar metadados” para aplicar aos filmes.'
      : 'Chave removida.';
    state.localConfig.hasOmdbKey = Boolean(data.hasOmdbKey);
    updateLocalSettingsUI();
    showToast('Chave do OMDb salva.', 'success');
  } catch (error) {
    status.textContent = error.message || 'Não foi possível salvar a chave.';
  }
});

document.getElementById('local-omdb-enrich').addEventListener('click', async () => {
  const button = document.getElementById('local-omdb-enrich');
  button.disabled = true;
  setLocalStatus('Atualizando metadados no OMDb...');
  try {
    const response = await fetch(localApi('/api/local/omdb/enrich'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({})
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(data.error || `HTTP ${response.status}`);
    showToast(`Metadados atualizados em ${data.updated || 0} filmes.`, 'success');
    await loadLocalLibrary({ silent: true });
  } catch (error) {
    setLocalStatus(error.message || 'Falha ao atualizar metadados.', 'error');
    showToast('Não foi possível atualizar os metadados.', 'error');
  } finally {
    button.disabled = false;
  }
});

document.getElementById('subtitle-settings-save').addEventListener('click', async () => {
  const status = document.getElementById('subtitle-settings-status');
  const payload = {
    subtitleApiKey: document.getElementById('subtitle-api-key').value.trim(),
    subtitleUser: document.getElementById('subtitle-user').value.trim(),
    subtitlePassword: document.getElementById('subtitle-password').value
  };
  status.textContent = 'Salvando...';
  try {
    const response = await fetch(localApi('/api/local/subtitle/settings'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(data.error || `HTTP ${response.status}`);
    status.textContent = data.hasKey
      ? 'Chave salva no servidor local. A busca online está ativa.'
      : 'Chave removida. A busca online precisa da chave da API.';
    showToast('Credenciais de legendas salvas.', 'success');
  } catch (error) {
    status.textContent = error.message || 'Não foi possível salvar as chaves.';
  }
});
document.getElementById('local-clear').addEventListener('click', disconnectLocal);
document.getElementById('local-root').addEventListener('keydown', (event) => {
  if (event.key !== 'Enter') return;
  event.preventDefault();
  scanLocalLibrary();
});
['drive-folder', 'drive-key'].forEach((id) => {
  document.getElementById(id).addEventListener('keydown', (event) => {
    if (event.key !== 'Enter') return;
    event.preventDefault();
    connectDrive();
  });
});
document.getElementById('settings-close').addEventListener('click', () => settingsDialog.close());
settingsDialog.addEventListener('close', () => {
  document.body.classList.remove('modal-open');
  document.getElementById('mini-profile-button').focus();
});
settingsDialog.addEventListener('click', (event) => {
  if (event.target === settingsDialog) settingsDialog.close();
});

const notificationButton = document.getElementById('notification-button');
const notificationsPopover = document.getElementById('notifications-popover');
notificationButton.addEventListener('click', (event) => {
  event.stopPropagation();
  notificationsPopover.hidden = !notificationsPopover.hidden;
  profilePopover.hidden = true;
  notificationButton.setAttribute('aria-expanded', String(!notificationsPopover.hidden));
  document.getElementById('profile-button').setAttribute('aria-expanded', 'false');
  document.getElementById('mini-profile-button').setAttribute('aria-expanded', 'false');
});

function applyNotificationsRead(read) {
  document.querySelectorAll('[data-notification]').forEach((item) => item.classList.toggle('read', read));
  const dot = document.querySelector('.notification-dot');
  if (dot) dot.style.display = read ? 'none' : '';
}

document.getElementById('mark-read').addEventListener('click', () => {
  applyNotificationsRead(true);
  storage.set('nexa-notifications-read', true);
  showToast('Notificações marcadas como lidas', 'success');
});

const profileButton = document.getElementById('mini-profile-button');
const profilePopover = document.getElementById('profile-popover');
const profilesDialog = document.getElementById('profiles-dialog');
const profilesManagerList = document.getElementById('profiles-manager-list');
const profileForm = document.getElementById('profile-form');
const profileNameInput = document.getElementById('profile-name-input');
const profilePinInput = document.getElementById('profile-pin-input');
const profileColorInput = document.getElementById('profile-color-input');
const profileKidsToggle = document.getElementById('profile-kids-toggle');
const profileSaveButton = document.getElementById('profile-save');
const profileCancelButton = document.getElementById('profile-cancel');
const profileFormNote = document.getElementById('profile-form-note');
const pinDialog = document.getElementById('pin-dialog');
const pinForm = document.getElementById('pin-form');
const pinInput = document.getElementById('pin-input');
const pinError = document.getElementById('pin-error');
let editingProfileId = null;
let formKids = false;
let pinRequest = null;

function profileMeta(profile) {
  const bits = [];
  if (profile.id === profiles[0].id) bits.push('Perfil principal');
  bits.push(profile.kids ? 'Infantil' : 'Adulto');
  if (profile.pin) bits.push('PIN ativo');
  return bits.join(' · ');
}

function updateProfileUI() {
  const profile = activeProfile();
  if (!profile) return;
  document.querySelectorAll('[data-view="musica"]').forEach((element) => {
    element.hidden = Boolean(profile.kids);
  });
  const initials = profileInitials(profile.name);
  const meta = profile.kids ? 'Perfil infantil' : (profile.id === profiles[0].id ? 'Perfil principal' : 'Perfil');
  document.getElementById('profile-avatar').textContent = initials;
  document.getElementById('profile-avatar').style.background = profile.color;
  document.getElementById('profile-name').textContent = profile.name;
  document.getElementById('profile-subtitle').textContent = meta;
  profileButton.textContent = initials;
  profileButton.style.background = profile.color;
  document.getElementById('popover-avatar').textContent = initials;
  document.getElementById('popover-avatar').style.background = profile.color;
  document.getElementById('popover-name').textContent = profile.name;
  document.getElementById('popover-subtitle').textContent = meta;
  renderProfileSwitcher();
}

function renderProfileSwitcher() {
  const list = document.getElementById('profile-switch-list');
  list.innerHTML = profiles.map((profile) => {
    const active = profile.id === activeProfileId;
    return `<button class="profile-switch-item ${active ? 'active' : ''}" type="button" data-profile-switch="${profile.id}" aria-pressed="${active}">
      <span class="avatar small" style="background:${profile.color}">${profileInitials(profile.name)}</span>
      <span class="profile-switch-copy"><strong>${escapeHtml(profile.name)}</strong><small>${profile.kids ? 'Infantil' : 'Perfil'}${profile.pin ? ' · PIN' : ''}</small></span>
      ${active ? icon('check') : ''}
    </button>`;
  }).join('');
}

function loadProfileState(profile) {
  state.list = new Set(profile.list || []);
  state.liked = new Set(profile.liked || []);
  state.progress = { ...(profile.progress || {}) };
  document.getElementById('list-count').textContent = state.list.size;
}

function applyProfileSwitch(profile) {
  if (!profile) return;
  persistActiveProfile();
  activeProfileId = profile.id;
  loadProfileState(profile);
  state.genre = 'Todos';
  state.query = '';
  state.view = state.view === 'busca' ? (state.previousView || 'home') : state.view;
  if (profile.kids) {
    if (!musicPlayerBar.hidden) stopMusic();
    state.activeAlbum = null;
    if (state.view === 'musica') state.view = 'home';
  }
  searchInput.value = '';
  searchBox.classList.remove('has-value');
  if (detailsDialog.open) detailsDialog.close();
  if (playerDialog.open) closePlayer();
  saveProfiles();
  updateProfileUI();
  updateActiveNavigation();
  refreshCurrentView();
  showToast(`Agora você está no perfil de ${profile.name}`, 'success');
}

function switchProfile(id) {
  const target = profiles.find((profile) => profile.id === id);
  if (!target) return;
  profilePopover.hidden = true;
  if (target.id === activeProfileId) return;
  const current = activeProfile();
  if (current?.kids && current.pin) {
    requestPin('Digite o PIN do perfil infantil para trocar de perfil.', current.pin).then((ok) => {
      if (ok) applyProfileSwitch(target);
    });
    return;
  }
  applyProfileSwitch(target);
}

function requestPin(message, expected) {
  return new Promise((resolve) => {
    if (pinRequest) {
      pinRequest.resolve(false);
      pinRequest = null;
    }
    pinRequest = { resolve, expected };
    document.getElementById('pin-message').textContent = message;
    pinInput.value = '';
    pinError.hidden = true;
    if (!pinDialog.open) pinDialog.showModal();
    document.body.classList.add('modal-open');
    window.setTimeout(() => pinInput.focus(), 40);
  });
}

function finishPin(result) {
  if (!pinRequest) return;
  const { resolve } = pinRequest;
  pinRequest = null;
  if (pinDialog.open) pinDialog.close();
  document.body.classList.remove('modal-open');
  resolve(result);
}

pinForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const value = pinInput.value.trim();
  if (value && value === pinRequest?.expected) {
    finishPin(true);
  } else {
    pinError.hidden = false;
    pinInput.value = '';
    pinInput.focus();
  }
});

pinInput.addEventListener('input', () => {
  pinInput.value = pinInput.value.replace(/\D/g, '').slice(0, 4);
});

document.getElementById('pin-cancel').addEventListener('click', () => finishPin(false));
pinDialog.addEventListener('close', () => {
  document.body.classList.remove('modal-open');
  if (pinRequest) {
    const { resolve } = pinRequest;
    pinRequest = null;
    resolve(false);
  }
});

function setProfileFormNote(message, type = '') {
  profileFormNote.textContent = message;
  profileFormNote.className = `settings-note${type ? ` is-${type}` : ''}`;
}

function resetProfileForm() {
  editingProfileId = null;
  formKids = false;
  profileForm.reset();
  profileColorInput.value = PROFILE_COLORS[profiles.length % PROFILE_COLORS.length];
  profileKidsToggle.setAttribute('aria-checked', 'false');
  document.getElementById('profile-form-title').textContent = 'Novo perfil';
  profileSaveButton.textContent = 'Adicionar perfil';
  profileCancelButton.hidden = true;
  setProfileFormNote('');
}

function renderProfilesManager() {
  profilesManagerList.innerHTML = profiles.map((profile) => {
    const active = profile.id === activeProfileId;
    return `<div class="profile-manage-row ${active ? 'active' : ''}">
      <span class="avatar" style="background:${profile.color}">${profileInitials(profile.name)}</span>
      <div class="profile-manage-copy"><strong>${escapeHtml(profile.name)}${active ? ' <span class="profile-current">Em uso</span>' : ''}</strong><small>${profileMeta(profile)}</small></div>
      ${profile.kids ? `<span class="profile-badge">${icon('lock')} Infantil</span>` : ''}
      <div class="profile-manage-actions">
        <button class="button button-secondary" type="button" data-profile-edit="${profile.id}">Editar</button>
        <button class="button button-ghost" type="button" data-profile-delete="${profile.id}" ${profiles.length === 1 ? 'disabled' : ''}>Excluir</button>
      </div>
    </div>`;
  }).join('');
}

function showProfilesDialog() {
  profilePopover.hidden = true;
  resetProfileForm();
  renderProfilesManager();
  if (!profilesDialog.open) profilesDialog.showModal();
  document.body.classList.add('modal-open');
  window.setTimeout(() => profileNameInput.focus(), 60);
}

function openProfilesDialog() {
  const current = activeProfile();
  if (current?.kids && current.pin) {
    requestPin('Digite o PIN para gerenciar os perfis.', current.pin).then((ok) => {
      if (ok) showProfilesDialog();
    });
    return;
  }
  showProfilesDialog();
}

function editProfile(id) {
  const profile = profiles.find((candidate) => candidate.id === id);
  if (!profile) return;
  editingProfileId = id;
  formKids = profile.kids;
  profileNameInput.value = profile.name;
  profilePinInput.value = profile.pin;
  profileColorInput.value = profile.color;
  profileKidsToggle.setAttribute('aria-checked', String(profile.kids));
  document.getElementById('profile-form-title').textContent = 'Editar perfil';
  profileSaveButton.textContent = 'Salvar alterações';
  profileCancelButton.hidden = false;
  setProfileFormNote('');
  profileNameInput.focus();
}

function deleteProfile(id) {
  if (profiles.length <= 1) return;
  const profile = profiles.find((candidate) => candidate.id === id);
  if (!profile) return;
  if (!window.confirm(`Excluir o perfil “${profile.name}”? Listas, curtidas e progresso serão removidos.`)) return;
  const index = profiles.findIndex((candidate) => candidate.id === id);
  profiles.splice(index, 1);
  if (activeProfileId === id) {
    activeProfileId = profiles[0].id;
    loadProfileState(activeProfile());
    state.genre = 'Todos';
    state.query = '';
    state.view = state.view === 'busca' ? 'home' : state.view;
    searchInput.value = '';
    searchBox.classList.remove('has-value');
    updateActiveNavigation();
    refreshCurrentView();
  }
  if (editingProfileId === id) resetProfileForm();
  saveProfiles();
  updateProfileUI();
  renderProfilesManager();
  showToast(`Perfil “${profile.name}” excluído`, 'success');
}

profileKidsToggle.addEventListener('click', () => {
  formKids = !formKids;
  profileKidsToggle.setAttribute('aria-checked', String(formKids));
  if (!formKids) setProfileFormNote('');
});

profileForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = profileNameInput.value.trim();
  if (!name) {
    setProfileFormNote('Informe um nome para o perfil.', 'error');
    profileNameInput.focus();
    return;
  }
  const pin = profilePinInput.value.replace(/\D/g, '');
  if (pin && pin.length !== 4) {
    setProfileFormNote('O PIN deve ter exatamente 4 dígitos.', 'error');
    profilePinInput.focus();
    return;
  }
  if (formKids && pin.length !== 4) {
    setProfileFormNote('Defina um PIN de 4 dígitos para o perfil infantil.', 'error');
    profilePinInput.focus();
    return;
  }
  const color = profileColorInput.value;
  if (editingProfileId) {
    const profile = profiles.find((candidate) => candidate.id === editingProfileId);
    if (!profile) return;
    profile.name = name.slice(0, 32);
    profile.kids = formKids;
    profile.pin = pin;
    profile.color = color;
    saveProfiles();
    updateProfileUI();
    renderProfilesManager();
    if (profile.id === activeProfileId) {
      state.genre = 'Todos';
      refreshCurrentView();
    }
    resetProfileForm();
    showToast('Perfil atualizado', 'success');
    return;
  }
  const newProfile = normalizeProfile({
    id: `perfil-${Date.now().toString(36)}-${profiles.length}`,
    name,
    kids: formKids,
    pin,
    color,
    progress: {}
  }, profiles.length);
  profiles.push(newProfile);
  saveProfiles();
  updateProfileUI();
  renderProfilesManager();
  resetProfileForm();
  showToast(`Perfil de ${newProfile.name} criado`, 'success');
});

profileCancelButton.addEventListener('click', resetProfileForm);
profilesManagerList.addEventListener('click', (event) => {
  const editButton = event.target.closest('[data-profile-edit]');
  if (editButton) {
    editProfile(editButton.dataset.profileEdit);
    return;
  }
  const deleteButton = event.target.closest('[data-profile-delete]');
  if (deleteButton) deleteProfile(deleteButton.dataset.profileDelete);
});
document.getElementById('profile-switch-list').addEventListener('click', (event) => {
  const button = event.target.closest('[data-profile-switch]');
  if (button) switchProfile(button.dataset.profileSwitch);
});
document.getElementById('profile-manage').addEventListener('click', openProfilesDialog);
document.getElementById('profiles-close').addEventListener('click', () => profilesDialog.close());
profilesDialog.addEventListener('click', (event) => {
  if (event.target === profilesDialog) profilesDialog.close();
});
profilesDialog.addEventListener('close', () => {
  document.body.classList.remove('modal-open');
  resetProfileForm();
});

function toggleProfilePopover() {
  profilePopover.hidden = !profilePopover.hidden;
  notificationsPopover.hidden = true;
  const expanded = String(!profilePopover.hidden);
  profileButton.setAttribute('aria-expanded', expanded);
  document.getElementById('profile-button').setAttribute('aria-expanded', expanded);
  notificationButton.setAttribute('aria-expanded', 'false');
}

profileButton.addEventListener('click', (event) => {
  event.stopPropagation();
  toggleProfilePopover();
});
document.getElementById('profile-button').addEventListener('click', (event) => {
  event.stopPropagation();
  toggleProfilePopover();
});
document.getElementById('profile-preferences').addEventListener('click', openSettings);
document.getElementById('profile-logout').addEventListener('click', () => {
  profilePopover.hidden = true;
  showToast('Sessão encerrada. Este é um perfil de demonstração.', 'success');
});

document.addEventListener('click', (event) => {
  if (!event.target.closest('.popover') && !event.target.closest('#notification-button') && !event.target.closest('#mini-profile-button') && !event.target.closest('#profile-button')) {
    notificationsPopover.hidden = true;
    profilePopover.hidden = true;
    notificationButton.setAttribute('aria-expanded', 'false');
    profileButton.setAttribute('aria-expanded', 'false');
    document.getElementById('profile-button').setAttribute('aria-expanded', 'false');
  }
});

document.addEventListener('error', (event) => {
  const image = event.target;
  if (!(image instanceof HTMLImageElement) || image.dataset.fallback) return;
  image.dataset.fallback = 'true';
  image.src = fallbackArtwork;
}, true);

window.addEventListener('scroll', () => {
  const height = document.documentElement.scrollHeight - window.innerHeight;
  const percent = height > 0 ? (window.scrollY / height) * 100 : 0;
  document.getElementById('scroll-progress').style.width = `${percent}%`;
});

const installButton = document.getElementById('install-button');
let deferredInstallPrompt = null;
const isStandalone = window.matchMedia?.('(display-mode: standalone)')?.matches || window.navigator.standalone;

if (isStandalone) installButton.hidden = true;

window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  deferredInstallPrompt = event;
  installButton.hidden = false;
});

installButton.addEventListener('click', async () => {
  if (!deferredInstallPrompt) return;
  deferredInstallPrompt.prompt();
  const choice = await deferredInstallPrompt.userChoice;
  if (choice.outcome === 'accepted') installButton.hidden = true;
  deferredInstallPrompt = null;
});

window.addEventListener('appinstalled', () => {
  installButton.hidden = true;
  deferredInstallPrompt = null;
  showToast('NEXA instalado com sucesso!', 'success');
});

window.addEventListener('offline', () => showToast('Você está offline. O conteúdo em cache continua disponível.', 'error'));
window.addEventListener('online', () => showToast('Conexão restabelecida.', 'success'));

function registerServiceWorker() {
  if (!('serviceWorker' in navigator) || !/^https?:$/.test(window.location.protocol)) return;
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('service-worker.js', { updateViaCache: 'none' }).then((registration) => {
      registration.addEventListener('updatefound', () => {
        const worker = registration.installing;
        if (!worker) return;
        worker.addEventListener('statechange', () => {
          if (worker.state === 'installed' && navigator.serviceWorker.controller) {
            showToast('Nova versão disponível. Recarregue para atualizar.', 'success');
          }
        });
      });
    }).catch(() => {});
  });
}

registerServiceWorker();
setTheme(storage.get('nexa-theme', 'dark') === 'light');
setAutoplay(state.autoplay);
applyNotificationsRead(storage.get('nexa-notifications-read', false));
saveProfiles();
updateProfileUI();
document.getElementById('list-count').textContent = state.list.size;
updateActiveNavigation();
renderHome();
restoreDriveLibrary();
restoreLocalLibrary();

const deepLink = window.location.hash.match(/^#\/titulo\/([^/]+)$/);
if (deepLink) {
  const deepLinkItem = getItem(decodeURIComponent(deepLink[1]));
  if (deepLinkItem) openDetails(deepLinkItem.id);
}

window.setTimeout(() => document.getElementById('loading-screen').classList.add('hidden'), 650);
