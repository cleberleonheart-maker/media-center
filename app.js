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

const state = {
  view: 'home',
  previousView: 'home',
  query: '',
  genre: 'Todos',
  sort: 'relevancia',
  quality: storage.get('nexa-quality', 'HD'),
  autoplay: storage.get('nexa-autoplay', true),
  list: new Set(storage.get('nexa-list', [])),
  liked: new Set(storage.get('nexa-liked', [])),
  progress: { ...defaultProgress, ...storage.get('nexa-progress', {}) },
  activeItem: null,
  activeSeason: 0,
  activeEpisode: 0,
  activeVideo: null,
  driveConfig: null,
  hideControlsTimer: null
};

const icons = {
  play: 'icon-play',
  info: 'icon-info',
  plus: 'icon-plus',
  check: 'icon-check',
  bookmark: 'icon-bookmark',
  chevron: 'icon-chevron'
};

const mainContent = document.getElementById('main-content');
const detailsDialog = document.getElementById('details-dialog');
const playerDialog = document.getElementById('player-dialog');
const videoPlayer = document.getElementById('video-player');
const searchInput = document.getElementById('search-input');
const searchBox = document.querySelector('.search-box');
const toastRegion = document.getElementById('toast-region');

const typeLabel = {
  filme: 'Filme',
  serie: 'Série',
  documentario: 'Documentário'
};

const DRIVE_API = 'https://www.googleapis.com/drive/v3/files';
const DRIVE_FOLDER_MIME = 'application/vnd.google-apps.folder';
const DRIVE_VIDEO_EXTENSIONS = new Set(['mp4', 'm4v', 'webm', 'ogv', 'ogg', 'mov', 'mkv', 'avi', 'wmv', 'flv', 'ts', 'm2ts']);
const DRIVE_BROWSER_EXTENSIONS = new Set(['mp4', 'm4v', 'webm', 'ogv', 'ogg']);
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
            playable: isBrowserVideo(episode.file)
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
    } else if (isDriveVideo(child) || isDriveImage(child)) {
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
  return ['Todos', ...new Set(catalog.flatMap((item) => item.genres))];
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
  let items = catalog.slice();
  if (view === 'filmes') items = items.filter((item) => item.type === 'filme');
  if (view === 'series') items = items.filter((item) => item.type === 'serie');
  if (view === 'filmes' || view === 'series') items.sort((a, b) => Number(Boolean(b.drive)) - Number(Boolean(a.drive)));
  if (view === 'originais') items = items.filter((item) => item.original);
  if (view === 'novidades') items = items.filter((item) => item.new);
  if (view === 'lista') items = items.filter((item) => state.list.has(item.id));
  if (view === 'busca') items = items.slice();
  if (state.genre !== 'Todos') items = items.filter((item) => item.genres.includes(state.genre));
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

function homeHero() {
  const item = catalog[0];
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
  const continueItems = catalog.filter((item) => state.progress[item.id]).sort((a, b) => state.progress[b.id].percent - state.progress[a.id].percent);
  const trending = catalog.filter((item) => item.trending);
  const top = catalog.filter((item) => item.top).slice(0, 10);
  const originals = catalog.filter((item) => item.original);
  const movies = catalog.filter((item) => item.type === 'filme').sort((a, b) => Number(Boolean(b.drive)) - Number(Boolean(a.drive)));
  const series = catalog.filter((item) => item.type === 'serie').sort((a, b) => Number(Boolean(b.drive)) - Number(Boolean(a.drive)));
  const documentaries = catalog.filter((item) => item.type === 'documentario');
  const fresh = catalog.filter((item) => item.new);
  const drive = catalog.filter((item) => item.drive);
  mainContent.innerHTML = `
    <div class="content-view">
      ${homeHero()}
      <div class="content-sections">
        ${sectionRow('Continue assistindo', continueItems, { subtitle: 'Retome de onde parou' })}
        ${sectionRow('Do seu Google Drive', drive, { subtitle: 'Filmes e séries da sua pasta conectada' })}
        ${sectionRow('Em alta agora', trending, { subtitle: 'O que todo mundo está assistindo', link: { view: 'filmes' } })}
        ${sectionRow('Top 10 hoje', top, { top: true })}
        ${sectionRow('Originais NEXA', originals, { subtitle: 'Histórias exclusivas para assistir' })}
        ${sectionRow('Filmes populares', movies)}
        ${sectionRow('Séries que você precisa ver', series)}
        ${sectionRow('Documentários que inspiram', documentaries)}
        ${sectionRow('Novidades', fresh)}
      </div>
    </div>`;
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
  updateActiveNavigation();
  if (view === 'home') renderHome();
  else browseView();
  window.scrollTo({ top: 0, behavior: 'instant' });
}

function refreshCurrentView() {
  if (state.view === 'home') renderHome();
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
  const episodeSection = document.getElementById('episodes-section');
  episodeSection.hidden = !item.seasons?.length;
  if (item.seasons?.length) {
    const select = document.getElementById('season-select');
    select.innerHTML = item.seasons.map((season, index) => `<option value="${index}">${season.name}</option>`).join('');
    renderEpisodes(item, 0);
  }
  const related = catalog.filter((candidate) => candidate.id !== item.id && candidate.genres.some((genre) => item.genres.includes(genre))).slice(0, 4);
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

function openPlayer(id, episodeIndex = null) {
  const item = getItem(id);
  if (!item) return;
  const fromDetails = detailsDialog.open;
  let resolvedEpisode = episodeIndex;
  let resolvedSeason = state.activeSeason;
  if (resolvedEpisode === null && item.seasons?.length && item.drive) {
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
  const progressKey = resolvedEpisode !== null && item.drive
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
  const saved = state.progress[progressKey] || (progressKey !== item.id ? state.progress[item.id] : null);
  videoPlayer.addEventListener('loadedmetadata', function resume() {
    if (saved?.seconds && saved.seconds < videoPlayer.duration - 10) videoPlayer.currentTime = saved.seconds;
  }, { once: true });
  if (episodeFile?.playable === false) showToast('Este formato pode não tocar no navegador. Prefira MP4 ou WebM.', 'error');
  if (detailsDialog.open) detailsDialog.close();
  playerDialog.showModal();
  document.body.classList.add('modal-open');
  if (state.autoplay) {
    const promise = videoPlayer.play();
    if (promise) promise.catch(() => showToast('Clique em reproduzir para iniciar o vídeo', 'success'));
  }
}

function closePlayer() {
  if (videoPlayer.paused === false) videoPlayer.pause();
  playerDialog.close();
  document.body.classList.remove('modal-open');
}

function toggleList(id, silent = false) {
  const item = getItem(id);
  if (!item) return;
  const adding = !state.list.has(id);
  if (adding) state.list.add(id);
  else state.list.delete(id);
  storage.set('nexa-list', [...state.list]);
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
  storage.set('nexa-liked', [...state.liked]);
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
    }
    state.view = 'busca';
    updateActiveNavigation();
    const items = filteredCatalog('busca');
    mainContent.innerHTML = `
      <section class="section-view">
        <header class="section-header"><div><p class="eyebrow">Resultados</p><h1>${state.query ? `Busca por “${escapeHtml(state.query)}”` : 'Busca'}</h1><p>${items.length} ${items.length === 1 ? 'resultado encontrado' : 'resultados encontrados'}.</p></div></header>
        ${items.length ? `<div class="media-grid">${items.map((item) => posterCard(item)).join('')}</div>` : `<div class="empty-state"><div class="empty-state-inner"><span class="empty-icon">${icon('search')}</span><h2>Nada encontrado</h2><p>Experimente outro título, gênero ou pessoa do elenco.</p></div></div>`}
      </section>`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else if (state.view === 'busca') {
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
  storage.set('nexa-progress', state.progress);
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
    if (!videoPlayer.paused) shell.classList.add('controls-hidden');
  }, 2800);
}

document.addEventListener('click', (event) => {
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
document.getElementById('player-quality').addEventListener('click', () => {
  setQuality(state.quality === 'HD' ? '4K' : 'HD');
  showToast(`Qualidade alterada para ${state.quality}`, 'success');
});
videoPlayer.addEventListener('error', () => {
  const active = state.activeVideo;
  const fileId = active?.episodeFile?.fileId || active?.item?.driveFileId;
  if (!active || !fileId || active.fallbackTried) {
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
videoPlayer.addEventListener('ended', saveProgress);
document.getElementById('player-shell').addEventListener('mousemove', scheduleControlsHide);
document.getElementById('player-shell').addEventListener('mouseleave', () => {
  if (!videoPlayer.paused) document.getElementById('player-shell').classList.add('controls-hidden');
});

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
  if (event.target.id !== 'sort-select') return;
  state.sort = event.target.value;
  browseView();
});

document.addEventListener('keydown', (event) => {
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
    event.preventDefault();
    openSearch();
  }
  if (event.key === 'Escape' && playerDialog.open) {
    event.preventDefault();
    closePlayer();
  }
  if (playerDialog.open && !detailsDialog.open) {
    if (event.code === 'Space') {
      event.preventDefault();
      togglePlay();
    }
    if (event.key === 'ArrowRight') skip(10);
    if (event.key === 'ArrowLeft') skip(-10);
    if (event.key.toLowerCase() === 'm') toggleMute();
    if (event.key.toLowerCase() === 'f') toggleFullscreen();
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
document.getElementById('list-count').textContent = state.list.size;
updateActiveNavigation();
renderHome();
restoreDriveLibrary();

const deepLink = window.location.hash.match(/^#\/titulo\/([^/]+)$/);
if (deepLink) {
  const deepLinkItem = getItem(decodeURIComponent(deepLink[1]));
  if (deepLinkItem) openDetails(deepLinkItem.id);
}

window.setTimeout(() => document.getElementById('loading-screen').classList.add('hidden'), 650);
