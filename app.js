var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = function(obj, key, value) {
  return key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
};
var __spreadValues = function(a, b) {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = function(a, b) {
  return __defProps(a, __getOwnPropDescs(b));
};
var __async = function(__this, __arguments, generator) {
  return new Promise(function(resolve, reject) {
    var fulfilled = function(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = function(value) {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = function(x) {
      return x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    };
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
var _a, _b, _c, _d;
const catalog = [
  {
    id: "orbita-vermelha",
    title: "\xD3rbita Vermelha",
    type: "filme",
    year: 2025,
    duration: "2h 18min",
    maturity: "16+",
    match: 98,
    rating: "8.7",
    genres: ["Fic\xE7\xE3o cient\xEDfica", "Thriller"],
    description: "Quando uma esta\xE7\xE3o espacial isolada recebe um sinal de origem desconhecida, a engenheira Maya Torres precisa decidir se est\xE1 salvando sua tripula\xE7\xE3o ou condenando o futuro da humanidade.",
    cast: ["Helena Costa", "Ravi Mendes", "Sofia Almeida"],
    director: "Bruno Salgado",
    poster: "https://image.tmdb.org/t/p/w780/9Gtg2DzBhmUa6z8UWnVTewZ6DP2.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/56v2KjBlU4XaOv9rVYEQypROD7P.jpg",
    original: true,
    trending: true,
    top: true,
    new: true,
    video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
  },
  {
    id: "linha-de-fuga",
    title: "Linha de Fuga",
    type: "filme",
    year: 2024,
    duration: "1h 57min",
    maturity: "14+",
    match: 95,
    rating: "8.2",
    genres: ["A\xE7\xE3o", "Suspense"],
    description: "Uma transportadora descobre que o cargamento mais importante de sua carreira cont\xE9m uma prova capaz de derrubar um imp\xE9rio inteiro.",
    cast: ["Lucas Prado", "Nina Duarte", "Caio Lemos"],
    director: "Marina Vieira",
    poster: "https://image.tmdb.org/t/p/w780/rktDFPbfHfUbArZ6OOOKs0mRk6Z.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/4mhKFeinp0JfEx8Vb1B9aeuA1FfK.jpg",
    trending: true,
    top: true,
    video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
  },
  {
    id: "a-cidade-do-eco",
    title: "A Cidade do Eco",
    type: "serie",
    year: 2025,
    duration: "2 temporadas",
    maturity: "16+",
    match: 97,
    rating: "9.1",
    genres: ["Mist\xE9rio", "Drama"],
    description: "Em uma cidade costeira onde os ecos n\xE3o permiten que os moradores revelem seus segredos, um agente policial investiga um desaparecimento.",
    cast: ["Mariana Alves", "Tom\xE1s Rocha", "L\xFAcia Faria"],
    director: "Andr\xE9 Sampaio",
    poster: "https://image.tmdb.org/t/p/w780/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/psv7z16M3vlkB8vY1E1H4CZQO4V.jpg",
    original: true,
    trending: true,
    top: true,
    new: true,
    seasons: [
      { name: "Temporada 1", episodes: ["O primeiro chamado", "Vozes na n\xE9voa", "A casa vazia", "Mar\xE9s baixas", "Quem vigia a vigia", "O \xFAltimo sino"] },
      { name: "Temporada 2", episodes: ["O retorno", "Arquivo morto", "Fita 12", "A outra margem", "Sem testemunhas", "O eco final"] }
    ],
    video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
  },
  {
    id: "barulhento",
    title: "Barulhento",
    type: "filme",
    year: 2024,
    duration: "1h 49min",
    maturity: "13+",
    match: 93,
    rating: "7.9",
    genres: ["Com\xE9dia", "Romance"],
    description: "Uma DJ que n\xE3o fala durante shows e um produtor obsessivo por sil\xEAncio tentam criar a colabora\xE7\xE3o mais importante de suas vidas.",
    cast: ["Bia Torres", "Gui Nunes", "Nina Siqueira"],
    director: "Paula Ribeiro",
    poster: "https://image.tmdb.org/t/p/w780/4YNtCjmoCJOiQZ0iZ7S8bJ8Qf9P.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/pb1Ekq9W0Y9j8sD3sD1W9m5bG8.jpg",
    trending: true,
    new: true,
    video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
  },
  {
    id: "professor-de-nenhum-lugar",
    title: "Professor de Nenhum Lugar",
    type: "serie",
    year: 2023,
    duration: "3 temporadas",
    maturity: "12+",
    match: 91,
    rating: "8.4",
    genres: ["Com\xE9dia", "Fantasia"],
    description: "Um professor de hist\xF3ria que pode viajar no tempo descobre que suas aulas est\xE3o alterando o passado \u2014 e n\xE3o exatamente para melhorar.",
    cast: ["F\xE1bio Azevedo", "Clara Monteiro", "Vitor Nascimento"],
    director: "Carla Menezes",
    poster: "https://image.tmdb.org/t/p/w780/1D4Z7fNNL6SSqBqkKN6X6x4hB2F.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/5xu7zxM8O4s2m9B8k4vK2Q1e1a.jpg",
    original: true,
    top: true,
    video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4"
  },
  {
    id: "terra-dos-ventos",
    title: "Terra dos Ventos",
    type: "documentario",
    year: 2024,
    duration: "1h 32min",
    maturity: "L",
    match: 96,
    rating: "9.3",
    genres: ["Document\xE1rio", "Natureza"],
    description: "Uma jornada cinematogr\xE1fica pelas paisagens do Pantanal e pelos desafios que enfrentam as comunidades que habitam suas fronteiras.",
    cast: ["Narrado por Jo\xE3o Mendes"],
    director: "Elisa Tavares",
    poster: "https://image.tmdb.org/t/p/w780/3EPMoYZLztNq2x7L4j9w8w8bM6.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/4w6c7Y6Yq8H7wD6q8x8jv0n3rT.jpg",
    original: true,
    trending: true,
    new: true,
    video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
  },
  {
    id: "noite-branca",
    title: "Noite Branca",
    type: "filme",
    year: 2023,
    duration: "2h 04min",
    maturity: "18+",
    match: 94,
    rating: "8.1",
    genres: ["Crime", "Suspense"],
    description: "Uma noite de inverno, um hotel vazio e quatro desconhecidos com a mesma miss\xE3o: recuperar um documento antes do amanhecer.",
    cast: ["Igor Torres", "Sabrina Lopes", "M\xE1rcia Reis"],
    director: "Renato Vilela",
    poster: "https://image.tmdb.org/t/p/w780/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/psv7z16M3vlkB8vY1E1H4CZQO4V.jpg",
    top: true,
    video: "https://storage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4"
  },
  {
    id: "herois-do-quarteirao",
    title: "Her\xF3is do Quarteir\xE3o",
    type: "serie",
    year: 2024,
    duration: "2 temporadas",
    maturity: "12+",
    match: 92,
    rating: "8.6",
    genres: ["A\xE7\xE3o", "Com\xE9dia"],
    description: "Dois amigos decidem proteger seu bairro de um novo plano criminal usando habilidades improv\xE1veis e um senso de humor fora do lugar.",
    cast: ["Diego Souza", "Pedro Henrique", "Alice Martins"],
    director: "Luiza Campos",
    poster: "https://image.tmdb.org/t/p/w780/6UuCkbV4Y8R4S1T9n7s7xk3O8d.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/7WsyChQLEftFiDOVTGce3QaL2sV.jpg",
    trending: true,
    new: true,
    video: "https://storage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4"
  },
  {
    id: "mapa-dos-sonhos",
    title: "Mapa dos Sonhos",
    type: "filme",
    year: 2022,
    duration: "1h 45min",
    maturity: "10+",
    match: 90,
    rating: "7.8",
    genres: ["Infantil", "Fantasia"],
    description: "Uma crian\xE7a encontra um mapa que mostra o caminho para lugares onde as pessoas podem viver seus sonhos \u2014 mas cada viagem cobra um pre\xE7o.",
    cast: ["Helena Teixeira", "Miguel Costa", "Rita Freire"],
    director: "Nina Barros",
    poster: "https://image.tmdb.org/t/p/w780/4YNtCjmoCJOiQZ0iZ7S8bJ8Qf9P.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/pb1Ekq9W0Y9j8sD3sD1W9m5bG8.jpg",
    video: "https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"
  },
  {
    id: "setor-13",
    title: "Setor 13",
    type: "serie",
    year: 2025,
    duration: "1 temporada",
    maturity: "18+",
    match: 97,
    rating: "8.9",
    genres: ["Terror", "Mist\xE9rio"],
    description: "Uma equipe de resgate entra em um complexo abandonado onde o tempo parou. Cada porta aberta leva a um pesadelo diferente.",
    cast: ["Felipe Cardoso", "Marina Duarte", "Ot\xE1vio Ramos"],
    director: "Joana Prado",
    poster: "https://image.tmdb.org/t/p/w780/9Gtg2DzBhmUa6z8UWnVTewZ6DP2.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/56v2KjBlU4XaOv9rVYEQypROD7P.jpg",
    original: true,
    new: true,
    trending: true,
    top: true,
    video: "https://storage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4"
  },
  {
    id: "ultimo-trem",
    title: "\xDAltimo Trem",
    type: "filme",
    year: 2024,
    duration: "1h 51min",
    maturity: "14+",
    match: 93,
    rating: "8.0",
    genres: ["Romance", "Drama"],
    description: "Dois desconhecidos embarcam no mesmo trem para o fim da linha e tentam n\xE3o se despedir antes da \xFAltima esta\xE7\xE3o.",
    cast: ["Bianca Freitas", "Ot\xE1vio Lima", "Maria Clara"],
    director: "Leonardo Motta",
    poster: "https://image.tmdb.org/t/p/w780/3EPMoYZLztNq2x7L4j9w8w8bM6.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/4w6c7Y6Yq8H7wD6q8x8jv0n3rT.jpg",
    trending: true,
    video: "https://storage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4"
  },
  {
    id: "caf\xE9-na-neblina",
    title: "Caf\xE9 na Neblina",
    type: "serie",
    year: 2024,
    duration: "2 temporadas",
    maturity: "10+",
    match: 89,
    rating: "8.3",
    genres: ["Drama", "Romance"],
    description: "Um caf\xE9 popular no centro da cidade se torna o ponto de encontro de pessoas tentando recome\xE7ar depois de perder tudo.",
    cast: ["Laura Moreira", "Caio Bruno", "Renata Luz"],
    director: "Bianca Rocha",
    poster: "https://image.tmdb.org/t/p/w780/6UuCkbV4Y8R4S1T9n7s7xk3O8d.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/7WsyChQLEftFiDOVTGce3QaL2sV.jpg",
    original: true,
    video: "https://storage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4"
  },
  {
    id: "ilha-som",
    title: "Ilha Som",
    type: "documentario",
    year: 2023,
    duration: "1h 26min",
    maturity: "L",
    match: 91,
    rating: "8.8",
    genres: ["Document\xE1rio", "M\xFAsica"],
    description: "M\xFAsicos de seis ilhas isoladas se re\xFAnem para preservar e transformar os sons de suas comunidades.",
    cast: ["Participa\xE7\xE3o de v\xE1rios artistas"],
    director: "S\xE9rgio Leal",
    poster: "https://image.tmdb.org/t/p/w780/1D4Z7fNNL6SSqBqkKN6X6x4hB2F.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/5xu7zxM8O4s2m9B8k4vK2Q1e1a.jpg",
    video: "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
  },
  {
    id: "heranca",
    title: "Heran\xE7a",
    type: "filme",
    year: 2025,
    duration: "2h 11min",
    maturity: "16+",
    match: 95,
    rating: "8.4",
    genres: ["Drama", "Suspense"],
    description: "Ap\xF3s a morte do pai, tr\xEAs irm\xE3os descobrem que a heran\xE7a inclui uma empresa constru\xEDda sobre mentiras e um segredo que muda tudo.",
    cast: ["Ana Clara", "Miguel Arraes", "Pedro Yves"],
    director: "Sofia Vasconcelos",
    poster: "https://image.tmdb.org/t/p/w780/rktDFPbfHfUbArZ6OOOKs0mRk6Z.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/4mhKFeinp0JfEx8Vb1B9aeuA1FfK.jpg",
    original: true,
    new: true,
    trending: true,
    top: true,
    video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
  },
  {
    id: "carroste",
    title: "Carroste",
    type: "filme",
    year: 2022,
    duration: "1h 38min",
    maturity: "10+",
    match: 87,
    rating: "7.5",
    genres: ["Infantil", "Com\xE9dia"],
    description: "Um garoto encontra um carro falante que transforma qualquer viagem em uma aventura improv\xE1vel.",
    cast: ["Theo Martins", "Laura Pires"],
    director: "Bruno Cordeiro",
    poster: "https://image.tmdb.org/t/p/w780/4YNtCjmoCJOiQZ0iZ7S8bJ8Qf9P.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/pb1Ekq9W0Y9j8sD3sD1W9m5bG8.jpg",
    video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
  },
  {
    id: "vigilia",
    title: "Vig\xEDlia",
    type: "serie",
    year: 2023,
    duration: "3 temporadas",
    maturity: "16+",
    match: 94,
    rating: "8.7",
    genres: ["Thriller", "Policial"],
    description: "Uma unidade de elite recebe casos que obrigam seus investigadores a confrontar o que preferem n\xE3o ver.",
    cast: ["Gustavo Nunes", "Patr\xEDcia Leal", "F\xE1bio Aguiar"],
    director: "Ricardo Salles",
    poster: "https://image.tmdb.org/t/p/w780/9Gtg2DzBhmUa6z8UWnVTewZ6DP2.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/56v2KjBlU4XaOv9rVYEQypROD7P.jpg",
    original: true,
    top: true,
    video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
  }
];
const artworkAssets = {
  "orbita-vermelha": ["xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg", "xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg"],
  "linha-de-fuga": ["vZloFAK7NmvMGKE7VkF5UHaz0I.jpg", "n6bUvigpRFqSwmPp1m2YADdbRBc.jpg"],
  "a-cidade-do-eco": ["apbrbWs8M9lyOpJYU5WXrpFbk1Z.jpg", "tsRy63Mu5cu8etL1X7ZLyf7UP1M.jpg"],
  "barulhento": ["r2J02Z2OpNTctfOSN1Ydgii51I3.jpg", "r2J02Z2OpNTctfOSN1Ydgii51I3.jpg"],
  "professor-de-nenhum-lugar": ["8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg", "ilRyazdMJwN05exqhwK4tMKBYZs.jpg"],
  "terra-dos-ventos": ["TU9NIjwzjoKPwQHoHshkFcQUCG.jpg", "suaEOtk1N1sgg2MTM7oZd2cfVp3.jpg"],
  "noite-branca": ["qJ2tW6WMUDux911r6m7haRef0WH.jpg", "4HodYYKEIsGOdinkGi2Ucz6X9i0.jpg"],
  "herois-do-quarteirao": ["2zmTngn1tYC1AvfnrFLhxeD82hz.jpg", "56v2KjBlU4XaOv9rVYEQypROD7P.jpg"],
  "mapa-dos-sonhos": ["f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg", "4HodYYKEIsGOdinkGi2Ucz6X9i0.jpg"],
  "setor-13": ["AnsSKR9LuK0T9bAOcPVA3PUvyWj.jpg", "uDgy6hyPd82kOHh6I95FLtLnj6p.jpg"],
  "ultimo-trem": ["8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg", "fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg"],
  "caf\xE9-na-neblina": ["fqldf2t8ztc9aiwn3k6mlX3tvRT.jpg", "rkB4LyZHo1NHXFEDHl9vSD9r1lI.jpg"],
  "ilha-som": ["9PFonBhy4cQy7Jz20NpMygczOkv.jpg", "iHSwvRVsRyxpX7FE7GbviaDvgGZ.jpg"],
  "heranca": ["vZloFAK7NmvMGKE7VkF5UHaz0I.jpg", "xJHokMbljvjADYdit5fK5VQsXEG.jpg"],
  "carroste": ["lFf6LLrQjYldcZItzOkGmMMigP7.jpg", "b0PlSFdDwbyK0cf5RxwDpaOJQvQ.jpg"],
  "vigilia": ["sHFlbKS3WLqMnp9t2ghADIJFnuQ.jpg", "56v2KjBlU4XaOv9rVYEQypROD7P.jpg"]
};
const demoVideo = "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4";
catalog.forEach(function(item) {
  const assets = artworkAssets[item.id];
  if (!assets) return;
  item.poster = `https://image.tmdb.org/t/p/w780/${assets[0]}`;
  item.backdrop = `https://image.tmdb.org/t/p/original/${assets[1]}`;
  item.video = demoVideo;
});
const fallbackArtwork = `data:image/svg+xml;charset=utf-8,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 600"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#2b2b2b"/><stop offset="1" stop-color="#0d0d0d"/></linearGradient></defs><rect width="400" height="600" fill="url(#g)"/><text x="200" y="320" fill="#e50914" font-family="Inter,Arial,sans-serif" font-size="76" font-weight="900" text-anchor="middle">N</text></svg>')}`;
const defaultProgress = {
  "a-cidade-do-eco": { percent: 38, seconds: 1280 },
  "orbita-vermelha": { percent: 67, seconds: 4960 },
  "herois-do-quarteirao": { percent: 19, seconds: 510 },
  "ultimo-trem": { percent: 82, seconds: 5520 }
};
const storage = {
  get(key, fallback) {
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : fallback;
    } catch (e) {
      return fallback;
    }
  },
  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      return false;
    }
    return true;
  }
};
const PROFILE_COLORS = ["#e50914", "#f5a623", "#4f9cf9", "#39c07c", "#b06ef5", "#f06292", "#00bcd4", "#ff7043"];
const KIDS_MATURITY = /* @__PURE__ */ new Set(["L", "10+", "12+"]);
const PROFILES_KEY = "nexa-profiles";
const ACTIVE_PROFILE_KEY = "nexa-active-profile";
function profileInitials(name) {
  const parts = String(name || "").trim().split(/\s+/).filter(Boolean);
  if (!parts.length) return "N";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
}
function normalizeProfile(raw, index = 0) {
  const source = raw && typeof raw === "object" ? raw : {};
  const pin = String(source.pin || "").replace(/\D/g, "").slice(0, 4);
  const safeId = String(source.id || "").replace(/[^a-zA-Z0-9_-]/g, "").slice(0, 64);
  return {
    id: safeId || `perfil-${Date.now()}-${index}`,
    name: String(source.name || "Perfil").trim().slice(0, 32) || "Perfil",
    kids: Boolean(source.kids),
    pin: pin.length === 4 ? pin : "",
    color: /^#[0-9a-f]{6}$/i.test(source.color || "") ? source.color : PROFILE_COLORS[index % PROFILE_COLORS.length],
    list: Array.isArray(source.list) ? source.list.filter(function(id) {
      return typeof id === "string";
    }) : [],
    liked: Array.isArray(source.liked) ? source.liked.filter(function(id) {
      return typeof id === "string";
    }) : [],
    progress: source.progress && typeof source.progress === "object" && !Array.isArray(source.progress) ? __spreadValues({}, source.progress) : {}
  };
}
function loadProfiles() {
  const saved = storage.get(PROFILES_KEY, null);
  if (Array.isArray(saved) && saved.length) return saved.map(normalizeProfile);
  const legacyList = storage.get("nexa-list", []);
  const legacyLiked = storage.get("nexa-liked", []);
  const legacyProgress = storage.get("nexa-progress", null);
  const progress = legacyProgress && typeof legacyProgress === "object" && !Array.isArray(legacyProgress) ? __spreadValues(__spreadValues({}, defaultProgress), legacyProgress) : __spreadValues({}, defaultProgress);
  return [normalizeProfile({
    id: "principal",
    name: "Cleber Leonheart",
    color: PROFILE_COLORS[0],
    list: legacyList,
    liked: legacyLiked,
    progress
  })];
}
const profiles = loadProfiles();
let activeProfileId = storage.get(ACTIVE_PROFILE_KEY, profiles[0].id);
if (!profiles.some(function(profile) {
  return profile.id === activeProfileId;
})) activeProfileId = profiles[0].id;
function activeProfile() {
  return profiles.find(function(profile) {
    return profile.id === activeProfileId;
  }) || profiles[0];
}
function saveProfiles() {
  storage.set(PROFILES_KEY, profiles);
  storage.set(ACTIVE_PROFILE_KEY, activeProfileId);
}
const state = {
  view: "home",
  previousView: "home",
  query: "",
  genre: "Todos",
  sort: "relevancia",
  searchFilters: { type: "todos", genre: "Todos", year: "todos", rating: 0 },
  quality: storage.get("nexa-quality", "HD"),
  autoplay: storage.get("nexa-autoplay", true),
  list: new Set(activeProfile().list),
  liked: new Set(activeProfile().liked),
  progress: __spreadValues({}, activeProfile().progress),
  activeItem: null,
  activeSeason: 0,
  activeEpisode: 0,
  activeVideo: null,
  driveConfig: null,
  localConfig: null,
  musicAlbums: [],
  audioBoost: Number(storage.get("nexa-audio-boost", 1)) || 1,
  playbackRate: Number(storage.get("nexa-playback-rate", 1)) || 1,
  activeAlbum: null,
  activeTrackIndex: -1,
  hideControlsTimer: null
};
function persistActiveProfile() {
  const profile = activeProfile();
  if (!profile) return;
  profile.list = [...state.list];
  profile.liked = [...state.liked];
  profile.progress = __spreadValues({}, state.progress);
  saveProfiles();
}
const subtitleStore = /* @__PURE__ */ new Map();
let activeSubtitleId = null;
let subtitleObjectUrls = [];
let subtitleCounter = 0;
function currentCatalog() {
  var _a2;
  if (!((_a2 = activeProfile()) == null ? void 0 : _a2.kids)) return catalog;
  return catalog.filter(function(item) {
    return KIDS_MATURITY.has(item.maturity);
  });
}
function isAllowedItem(item) {
  var _a2;
  if (!item) return false;
  if (!((_a2 = activeProfile()) == null ? void 0 : _a2.kids)) return true;
  return KIDS_MATURITY.has(item.maturity);
}
const icons = {
  play: "icon-play",
  info: "icon-info",
  plus: "icon-plus",
  check: "icon-check",
  bookmark: "icon-bookmark",
  chevron: "icon-chevron",
  film: "icon-film",
  tv: "icon-tv",
  sparkle: "icon-sparkle",
  search: "icon-search",
  lock: "icon-lock",
  user: "icon-user"
};
const mainContent = document.getElementById("main-content");
const detailsDialog = document.getElementById("details-dialog");
const playerDialog = document.getElementById("player-dialog");
const videoPlayer = document.getElementById("video-player");
const subtitleMenu = document.getElementById("subtitle-menu");
const subtitleMenuList = document.getElementById("subtitle-menu-list");
const subtitleButton = document.getElementById("player-subtitles");
const subtitleFileInput = document.getElementById("subtitle-file");
const subtitleSearchDialog = document.getElementById("subtitle-search-dialog");
const subtitleSearchInput = document.getElementById("subtitle-search-query");
const subtitleResults = document.getElementById("subtitle-results");
const subtitleSearchOpen = document.getElementById("subtitle-search-open");
const subtitleSaveHd = document.getElementById("subtitle-save-hd");
const playerBoostButton = document.getElementById("player-boost");
const playerBoostLabel = document.getElementById("player-boost-label");
const playerSpeedButton = document.getElementById("player-speed");
const playerSpeedLabel = document.getElementById("player-speed-label");
const playerPipButton = document.getElementById("player-pip");
const shortcutsDialog = document.getElementById("shortcuts-dialog");
const searchInput = document.getElementById("search-input");
const searchBox = document.querySelector(".search-box");
const toastRegion = document.getElementById("toast-region");
const musicPlayerBar = document.getElementById("music-player-bar");
const musicAudio = document.getElementById("music-audio");
const musicCover = document.getElementById("music-cover");
const musicTitle = document.getElementById("music-title");
const musicArtist = document.getElementById("music-artist");
const typeLabel = {
  filme: "Filme",
  serie: "S\xE9rie",
  documentario: "Document\xE1rio"
};
const DRIVE_API = "https://www.googleapis.com/drive/v3/files";
const DRIVE_FOLDER_MIME = "application/vnd.google-apps.folder";
const DRIVE_VIDEO_EXTENSIONS = /* @__PURE__ */ new Set(["mp4", "m4v", "webm", "ogv", "ogg", "mov", "mkv", "avi", "wmv", "flv", "ts", "m2ts"]);
const DRIVE_BROWSER_EXTENSIONS = /* @__PURE__ */ new Set(["mp4", "m4v", "webm", "ogv", "ogg"]);
const DRIVE_SUBTITLE_EXTENSIONS = /* @__PURE__ */ new Set(["srt", "vtt"]);
const DRIVE_IMAGE_EXTENSIONS = /* @__PURE__ */ new Set(["jpg", "jpeg", "png", "webp", "avif", "gif"]);
const DRIVE_GENERIC_FOLDER = /^(filmes?|movies?|s[ée]ries?|series|shows?|tv|televis[aã]o|v[ií]deos?|videos?|m[ií]dia|media|meu drive|my drive|google drive|animes?|anima[cç][aã]o|document[aá]rios?|a[cç][aã]o|com[eé]dia|drama|terror|suspense|fic[cç][aã]o|romance|infantil|fam[ií]lia|familia)$/i;
const DRIVE_SERIES_HINT = /\b(s[ée]ries?|series|shows?|tv|televis[aã]o|animes?|novelas?)\b/i;
let driveLoading = false;
function driveFileExtension(name) {
  const match = String(name || "").match(/\.([a-z0-9]{2,5})$/i);
  return match ? match[1].toLowerCase() : "";
}
function isDriveFolder(file) {
  return (file == null ? void 0 : file.mimeType) === DRIVE_FOLDER_MIME;
}
function isDriveVideo(file) {
  if (!file) return false;
  return String(file.mimeType || "").startsWith("video/") || DRIVE_VIDEO_EXTENSIONS.has(driveFileExtension(file.name));
}
function isDriveImage(file) {
  if (!file) return false;
  return String(file.mimeType || "").startsWith("image/") || DRIVE_IMAGE_EXTENSIONS.has(driveFileExtension(file.name));
}
function isDriveSubtitle(file) {
  if (!file) return false;
  return DRIVE_SUBTITLE_EXTENSIONS.has(driveFileExtension(file.name));
}
function subtitleLanguage(name) {
  const text = String(name || "").toLowerCase();
  if (/(^|[^a-z])(pt[- ]?br|ptbr)([^a-z]|$)/.test(text)) return { code: "pt-BR", label: "Portugu\xEAs (BR)" };
  if (/(^|[^a-z])(pt|por|portug[uê]es|portuguese)([^a-z]|$)/.test(text)) return { code: "pt", label: "Portugu\xEAs" };
  if (/(^|[^a-z])(en|eng|english|ingl[eê]s)([^a-z]|$)/.test(text)) return { code: "en", label: "Ingl\xEAs" };
  if (/(^|[^a-z])(es|spa|spanish|espanhol)([^a-z]|$)/.test(text)) return { code: "es", label: "Espanhol" };
  if (/(^|[^a-z])(fr|fre|french|franc[eê]s)([^a-z]|$)/.test(text)) return { code: "fr", label: "Franc\xEAs" };
  if (/(^|[^a-z])(de|ger|german|alem[aã]o)([^a-z]|$)/.test(text)) return { code: "de", label: "Alem\xE3o" };
  if (/(^|[^a-z])(it|ita|italian|italiano)([^a-z]|$)/.test(text)) return { code: "it", label: "Italiano" };
  if (/(^|[^a-z])(ja|jp|japanese|japon[eê]s)([^a-z]|$)/.test(text)) return { code: "ja", label: "Japon\xEAs" };
  return { code: "", label: "" };
}
function subtitleDisplayLabel(name) {
  const language = subtitleLanguage(name);
  const forced = /\bforced\b/i.test(name) ? " for\xE7ada" : "";
  const sdh = /\b(sdh|cc)\b/i.test(name) ? " SDH" : "";
  if (language.label) return `${language.label}${forced}${sdh}`;
  return `${splitDriveTitle(name).title || String(name || "Legenda")}${forced}${sdh}`.trim();
}
function driveSubtitleCore(name) {
  const base = String(name || "").replace(/\.[a-z0-9]{2,5}$/i, "");
  const core = base.replace(/\[[^\]]*\]/g, " ").replace(/\b(2160p|1080p|720p|480p|4k|uhd|bluray|blu ray|brrip|bdrip|webrip|web dl|webdl|hdrip|dvdrip|remux|proper|repack|x264|x265|h264|h265|hevc|av1|aac|ac3|eac3|dts|dual audio|dublado|legendado)\b.*$/i, " ");
  return normalizeDriveKey(core).replace(/-(?:pt-?br|ptbr|pt|por|portugues|portuguese|eng|en|english|ingles|spa|es|espanhol|spanish|fre|fr|french|frances|ger|de|german|alemao|ita|it|italian|italiano|ja|jp|japanese|japones)(?:-.*)?$/, "");
}
function findDriveSubtitles(videoFile, subtitles, apiKey) {
  var _a2, _b2;
  if (!videoFile || !subtitles.length) return [];
  const core = driveSubtitleCore(videoFile.name);
  if (!core) return [];
  const parentId = ((_b2 = (_a2 = videoFile.ancestors) == null ? void 0 : _a2[videoFile.ancestors.length - 1]) == null ? void 0 : _b2.id) || null;
  const matches = subtitles.filter(function(file) {
    const subCore = driveSubtitleCore(file.name);
    return subCore && (subCore === core || core.startsWith(`${subCore}-`) || subCore.startsWith(`${core}-`));
  });
  const sameFolder = matches.filter(function(file) {
    var _a3, _b3;
    return (((_b3 = (_a3 = file.ancestors) == null ? void 0 : _a3[file.ancestors.length - 1]) == null ? void 0 : _b3.id) || null) === parentId;
  });
  const chosen = sameFolder.length ? sameFolder : matches;
  return chosen.map(function(file) {
    const language = subtitleLanguage(file.name);
    return {
      id: `drive-sub-${file.id}`,
      label: subtitleDisplayLabel(file.name),
      lang: language.code || "pt",
      source: "drive",
      fileId: file.id,
      name: file.name,
      url: driveMediaUrl(file.id, apiKey || "")
    };
  });
}
function srtToVtt(text) {
  const normalized = String(text || "").replace(/^\uFEFF/, "").replace(/\r\n?/g, "\n").trim();
  if (!normalized) return "";
  if (/^WEBVTT/i.test(normalized)) return `${normalized}
`;
  const cueText = normalized.replace(/(\d{2}:\d{2}:\d{2}),(\d{1,3})/g, function(_match, stamp, millis) {
    return `${stamp}.${millis.padEnd(3, "0")}`;
  }).replace(/(\d{2}:\d{2}),(\d{1,3})/g, function(_match, stamp, millis) {
    return `00:${stamp}.${millis.padEnd(3, "0")}`;
  });
  return `WEBVTT

${cueText}
`;
}
function isBrowserVideo(file) {
  return DRIVE_BROWSER_EXTENSIONS.has(driveFileExtension(file == null ? void 0 : file.name)) || ["video/mp4", "video/webm", "video/ogg"].includes(file == null ? void 0 : file.mimeType);
}
function parseDriveFolderId(value) {
  const text = String(value || "").trim();
  if (!text) return null;
  const folderMatch = text.match(/(?:\/folders\/|\/drive\/u\/\d+\/folders\/)([A-Za-z0-9_-]{8,})/);
  if (folderMatch) return folderMatch[1];
  const idMatch = text.match(/[?&]id=([A-Za-z0-9_-]{8,})/);
  if (idMatch) return idMatch[1];
  if (/^[A-Za-z0-9_-]{8,}$/.test(text)) return text;
  return null;
}
function splitDriveTitle(raw) {
  let name = String(raw || "").replace(/\.[a-z0-9]{2,5}$/i, "").replace(/[._]+/g, " ").replace(/\s+/g, " ").trim();
  const yearMatch = name.match(/\b(19\d{2}|20\d{2})\b/);
  const year = yearMatch ? Number(yearMatch[1]) : null;
  let title = name.replace(/\b(19\d{2}|20\d{2})\b/g, " ").replace(/\b(2160p|1080p|720p|480p|4k|uhd|bluray|blu ray|brrip|bdrip|webrip|web dl|webdl|hdrip|dvdrip|remux|proper|repack|x264|x265|h264|h265|hevc|av1|aac|ac3|eac3|dts|dual audio|dublado|legendado)\b.*$/i, " ").replace(/\[[^\]]*\]/g, " ").replace(/\s+/g, " ").trim();
  title = title.replace(/^[-–—\s]+|[-–—\s]+$/g, "");
  return { title: title || name || String(raw || ""), year };
}
function parseSeasonNumber(name) {
  const text = String(name || "").replace(/[._]+/g, " ").trim();
  let match = text.match(/\b(?:temporada|season|temp)\s*(\d{1,2})\b/i);
  if (match) return Number(match[1]);
  match = text.match(/^\s*(\d{1,2})\s*[ªa]?\s*temporada\b/i);
  if (match) return Number(match[1]);
  match = text.match(/^\s*(?:t|s)(\d{1,2})\s*$/i);
  return match ? Number(match[1]) : null;
}
function parseEpisodeInfo(name) {
  const text = String(name || "").replace(/[._]+/g, " ");
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
  const text = String(name || "").replace(/\.[a-z0-9]{2,5}$/i, "").replace(/[._]+/g, " ");
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
  let title = base.replace(/\b(?:s|t)\d{1,2}\s*[\s-]*e\d{1,3}\b/ig, " ").replace(/\b\d{1,2}x\d{1,3}\b/ig, " ").replace(/\b(?:epis[oó]dio|episode|ep|cap[ií]tulo)\s*\d{1,3}\b/ig, " ").replace(/\b(?:t|s)\d{1,2}\b/ig, " ").replace(/\bE\d{1,3}\b/ig, " ").replace(/^\s*\d{1,3}\s*[-–—.)]\s*/, " ");
  if (episodeNumber !== null && episodeNumber !== void 0) {
    title = title.replace(new RegExp(`(?:^|[-\u2013\u2014\\s])0*${episodeNumber}(?=\\s|[-\u2013\u2014.)]|$)`), " ");
  }
  title = title.replace(/\s+/g, " ").trim();
  return title || `Epis\xF3dio ${episodeNumber || ""}`.trim();
}
function formatDriveDuration(seconds) {
  if (!Number.isFinite(seconds) || seconds <= 0) return "";
  const total = Math.round(seconds);
  const hours = Math.floor(total / 3600);
  const minutes = Math.round(total % 3600 / 60);
  return hours ? `${hours}h ${String(minutes).padStart(2, "0")}min` : `${Math.max(1, minutes)}min`;
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
  return String(value || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "") || "biblioteca";
}
function pickDriveArtwork(images, folderId, fallbackFileId) {
  const inFolder = images.filter(function(image) {
    var _a2;
    return (_a2 = image.ancestors) == null ? void 0 : _a2.some(function(ancestor) {
      return ancestor.id === folderId;
    });
  });
  const artwork = inFolder.find(function(image) {
    return /^(poster|folder|cover|fanart|backdrop)/i.test(image.name);
  }) || inFolder[0];
  const imageId = (artwork == null ? void 0 : artwork.id) || fallbackFileId;
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
  const seriesMap = /* @__PURE__ */ new Map();
  const rootIsSeries = DRIVE_SERIES_HINT.test(rootName || "");
  videos.forEach(function(file) {
    var _a2, _b2, _c2, _d2;
    const ancestors = file.ancestors || [];
    const names = ancestors.map(function(ancestor) {
      return ancestor.name;
    });
    let seasonFolderIndex = -1;
    names.forEach(function(name, index) {
      if (parseSeasonNumber(name) !== null) seasonFolderIndex = index;
    });
    const episodeInfo = parseEpisodeInfo(file.name);
    const pathText = [...names, file.name].join("/");
    const isSeries = rootIsSeries || DRIVE_SERIES_HINT.test(pathText) || seasonFolderIndex >= 0 || episodeInfo.explicit;
    if (!isSeries) {
      const parent = ancestors[ancestors.length - 1] || null;
      const usableParent = parent && !DRIVE_GENERIC_FOLDER.test(parent.name) ? parent : null;
      const folderTitle = usableParent ? splitDriveTitle(usableParent.name) : { title: null, year: null };
      const fileTitle = splitDriveTitle(file.name);
      const title = folderTitle.title || fileTitle.title;
      const modifiedYear = file.modifiedTime ? new Date(file.modifiedTime).getFullYear() : null;
      const year = folderTitle.year || fileTitle.year || modifiedYear || (/* @__PURE__ */ new Date()).getFullYear();
      const durationSeconds = ((_a2 = file.videoMediaMetadata) == null ? void 0 : _a2.durationMillis) ? Number(file.videoMediaMetadata.durationMillis) / 1e3 : null;
      const art = pickDriveArtwork(images, (parent == null ? void 0 : parent.id) || file.id, file.id);
      movieItems.push({
        id: `drive-file-${file.id}`,
        title,
        type: "filme",
        year,
        duration: formatDriveDuration(durationSeconds) || "Dura\xE7\xE3o n\xE3o informada",
        maturity: "L",
        match: 95,
        rating: "\u2014",
        genres: ["Google Drive"],
        description: `\u201C${title}\u201D est\xE1 na sua biblioteca do Google Drive.`,
        cast: [],
        director: "Biblioteca pessoal",
        poster: art.poster,
        backdrop: art.backdrop,
        video: driveMediaUrl(file.id, apiKey || ""),
        drive: true,
        driveFileId: file.id,
        driveName: file.name,
        driveFolderId: (parent == null ? void 0 : parent.id) || null,
        playable: isBrowserVideo(file),
        subtitles: findDriveSubtitles(file, subtitles, apiKey),
        new: true
      });
      return;
    }
    let seriesRoot = null;
    const hintIndex = names.findIndex(function(name) {
      return DRIVE_SERIES_HINT.test(name);
    });
    if (hintIndex >= 0) seriesRoot = ancestors[hintIndex + 1] || null;
    if (!seriesRoot && seasonFolderIndex > 0) seriesRoot = ancestors[seasonFolderIndex - 1];
    if (!seriesRoot && seasonFolderIndex < 0 && episodeInfo.explicit && ancestors.length) seriesRoot = ancestors[0];
    if (!seriesRoot && seasonFolderIndex < 0) seriesRoot = ancestors[ancestors.length - 1] || null;
    const rawSeriesName = (seriesRoot == null ? void 0 : seriesRoot.name) || splitDriveTitle(file.name).title || rootName || "S\xE9rie";
    const key = (seriesRoot == null ? void 0 : seriesRoot.id) || `name:${normalizeDriveKey(rawSeriesName)}`;
    if (!seriesMap.has(key)) {
      const seriesMeta = splitDriveTitle(rawSeriesName);
      seriesMap.set(key, {
        root: seriesRoot,
        name: seriesMeta.title,
        year: seriesMeta.year,
        seasons: /* @__PURE__ */ new Map()
      });
    }
    const entry = seriesMap.get(key);
    const seasonNumber = (_c2 = (_b2 = episodeInfo.season) != null ? _b2 : seasonFolderIndex >= 0 ? parseSeasonNumber(names[seasonFolderIndex]) : null) != null ? _c2 : 1;
    const episodeNumber = (_d2 = episodeInfo.episode) != null ? _d2 : parseLooseEpisodeNumber(file.name);
    if (!entry.seasons.has(seasonNumber)) entry.seasons.set(seasonNumber, []);
    entry.seasons.get(seasonNumber).push({ file, episodeNumber, title: null });
  });
  const seriesItems = [...seriesMap.values()].map(function(entry) {
    var _a2, _b2, _c2;
    const seasons = [...entry.seasons.entries()].sort(function([a], [b]) {
      return a - b;
    }).map(function([seasonNumber, rawEpisodes]) {
      const episodes = [...rawEpisodes].sort(function(a, b) {
        if (a.episodeNumber == null && b.episodeNumber == null) return a.file.name.localeCompare(b.file.name, "pt-BR");
        if (a.episodeNumber == null) return 1;
        if (b.episodeNumber == null) return -1;
        return a.episodeNumber - b.episodeNumber || a.file.name.localeCompare(b.file.name, "pt-BR");
      });
      let nextNumber = 1;
      episodes.forEach(function(episode) {
        if (episode.episodeNumber == null) {
          while (episodes.some(function(candidate) {
            return candidate.episodeNumber === nextNumber;
          })) nextNumber += 1;
          episode.episodeNumber = nextNumber;
        }
        nextNumber = Math.max(nextNumber, episode.episodeNumber + 1);
        episode.title = cleanEpisodeTitle(episode.file.name, episode.episodeNumber);
      });
      const episodeFiles = episodes.map(function(episode) {
        var _a3;
        const durationSeconds = ((_a3 = episode.file.videoMediaMetadata) == null ? void 0 : _a3.durationMillis) ? Number(episode.file.videoMediaMetadata.durationMillis) / 1e3 : null;
        return {
          number: episode.episodeNumber,
          title: episode.title,
          fileId: episode.file.id,
          video: driveMediaUrl(episode.file.id, apiKey || ""),
          duration: formatDriveDuration(durationSeconds),
          modifiedTime: episode.file.modifiedTime,
          thumbnail: driveThumbnail(episode.file.id, 780),
          playable: isBrowserVideo(episode.file),
          subtitles: findDriveSubtitles(episode.file, subtitles, apiKey)
        };
      });
      return {
        name: `Temporada ${seasonNumber}`,
        episodes: episodeFiles.map(function(episode) {
          return episode.title;
        }),
        episodeFiles
      };
    });
    const allEpisodes = seasons.flatMap(function(season) {
      return season.episodeFiles;
    });
    const firstEpisode = allEpisodes[0];
    const art = pickDriveArtwork(images, ((_a2 = entry.root) == null ? void 0 : _a2.id) || (firstEpisode == null ? void 0 : firstEpisode.fileId), firstEpisode == null ? void 0 : firstEpisode.fileId);
    const year = entry.year || ((firstEpisode == null ? void 0 : firstEpisode.modifiedTime) ? new Date(firstEpisode.modifiedTime).getFullYear() : null) || (/* @__PURE__ */ new Date()).getFullYear();
    return {
      id: `drive-series-${((_b2 = entry.root) == null ? void 0 : _b2.id) || normalizeDriveKey(entry.name)}`,
      title: entry.name,
      type: "serie",
      year,
      duration: `${seasons.length} temporada${seasons.length === 1 ? "" : "s"}`,
      maturity: "L",
      match: 96,
      rating: "\u2014",
      genres: ["Google Drive"],
      description: `S\xE9rie com ${allEpisodes.length} epis\xF3dio${allEpisodes.length === 1 ? "" : "s"} na sua biblioteca do Google Drive.`,
      cast: [],
      director: "Biblioteca pessoal",
      poster: art.poster,
      backdrop: art.backdrop,
      video: (firstEpisode == null ? void 0 : firstEpisode.video) || "",
      seasons,
      drive: true,
      driveFolderId: ((_c2 = entry.root) == null ? void 0 : _c2.id) || null,
      playable: allEpisodes.some(function(episode) {
        return episode.playable;
      }),
      new: true
    };
  });
  return [...seriesItems, ...movieItems];
}
function listDriveFolder(folderId, apiKey) {
  return __async(this, null, function* () {
    var _a2;
    const files = [];
    let pageToken = null;
    do {
      const url = new URL(DRIVE_API);
      const safeFolderId = String(folderId).replace(/'/g, "\\'");
      url.searchParams.set("q", `'${safeFolderId}' in parents and trashed = false`);
      url.searchParams.set("key", apiKey);
      url.searchParams.set("fields", "nextPageToken,files(id,name,mimeType,size,modifiedTime,videoMediaMetadata(durationMillis,width,height))");
      url.searchParams.set("pageSize", "1000");
      url.searchParams.set("supportsAllDrives", "true");
      url.searchParams.set("includeItemsFromAllDrives", "true");
      if (pageToken) url.searchParams.set("pageToken", pageToken);
      const response = yield fetch(url.toString(), { cache: "no-store" });
      if (!response.ok) {
        const payload = yield response.json().catch(function() {
          return null;
        });
        const error = new Error(((_a2 = payload == null ? void 0 : payload.error) == null ? void 0 : _a2.message) || `HTTP ${response.status}`);
        error.status = response.status;
        throw error;
      }
      const data = yield response.json();
      files.push(...data.files || []);
      pageToken = data.nextPageToken || null;
    } while (pageToken);
    return files;
  });
}
function getDriveFolderMeta(folderId, apiKey) {
  return __async(this, null, function* () {
    var _a2;
    const url = new URL(`${DRIVE_API}/${encodeURIComponent(folderId)}`);
    url.searchParams.set("key", apiKey);
    url.searchParams.set("fields", "id,name");
    url.searchParams.set("supportsAllDrives", "true");
    const response = yield fetch(url.toString(), { cache: "no-store" });
    if (!response.ok) {
      const payload = yield response.json().catch(function() {
        return null;
      });
      const error = new Error(((_a2 = payload == null ? void 0 : payload.error) == null ? void 0 : _a2.message) || `HTTP ${response.status}`);
      error.status = response.status;
      throw error;
    }
    return response.json();
  });
}
function walkDriveFolder(folderId, ancestors, account, config) {
  return __async(this, null, function* () {
    if (account.folders >= 120 || account.files.length >= 2e3) return;
    const children = yield listDriveFolder(folderId, config.apiKey);
    for (const child of children) {
      if (isDriveFolder(child)) {
        if (account.folders >= 120) continue;
        account.folders += 1;
        yield walkDriveFolder(child.id, [...ancestors, { id: child.id, name: child.name }], account, config);
        if (account.files.length >= 2e3) break;
      } else if (isDriveVideo(child) || isDriveImage(child) || isDriveSubtitle(child)) {
        account.files.push(__spreadProps(__spreadValues({}, child), { ancestors }));
        if (account.files.length >= 2e3) break;
      }
    }
  });
}
function driveErrorMessage(error) {
  if (!navigator.onLine) return "Voc\xEA est\xE1 offline. Conecte-se para atualizar a pasta do Drive.";
  if (/expired|invalid/i.test((error == null ? void 0 : error.message) || "")) return "A chave da API expirou ou \xE9 inv\xE1lida. Gere uma nova chave no Google Cloud.";
  if ((error == null ? void 0 : error.status) === 400 || (error == null ? void 0 : error.status) === 403) return "A chave da API foi recusada. Confira a chave e as restri\xE7\xF5es de dom\xEDnio no Google Cloud.";
  if ((error == null ? void 0 : error.status) === 404) return "Pasta n\xE3o encontrada. Verifique se o link est\xE1 correto e se a pasta est\xE1 p\xFAblica.";
  if ((error == null ? void 0 : error.status) === 429) return "O limite de consultas do Google foi atingido. Tente novamente mais tarde.";
  return `N\xE3o foi poss\xEDvel ler a pasta do Drive: ${(error == null ? void 0 : error.message) || "erro desconhecido"}`;
}
function setDriveStatus(message, type = "") {
  const status = document.getElementById("drive-status");
  if (!status) return;
  status.textContent = message;
  status.classList.toggle("is-error", type === "error");
  status.classList.toggle("is-success", type === "success");
}
function updateDriveNavCount() {
  const count = catalog.filter(function(item) {
    return item.drive;
  }).length;
  const badge = document.getElementById("drive-count");
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
  const folderInput = document.getElementById("drive-folder");
  const keyInput = document.getElementById("drive-key");
  const disconnectButton = document.getElementById("drive-disconnect");
  const connectButton = document.getElementById("drive-connect");
  if (!folderInput || !keyInput || !disconnectButton || !connectButton) return;
  const config = state.driveConfig;
  folderInput.value = (config == null ? void 0 : config.folderId) || "";
  keyInput.value = (config == null ? void 0 : config.apiKey) || "";
  disconnectButton.hidden = !config;
  connectButton.textContent = config ? "Atualizar pasta" : "Conectar pasta";
  const sync = storage.get("nexa-drive-sync", null);
  if (config && (sync == null ? void 0 : sync.items)) {
    const date = new Date(sync.at).toLocaleString("pt-BR", { dateStyle: "short", timeStyle: "short" });
    const episodes = Number.isFinite(sync.episodes) ? `, ${sync.episodes} epis\xF3dios` : "";
    setDriveStatus(`${sync.items} t\xEDtulos encontrados, ${sync.folders} pastas lidas${episodes}. Atualizado em ${date}.`, "success");
  } else if (config) {
    setDriveStatus("Pasta conectada. Sincronizando...");
  } else {
    setDriveStatus("Nenhuma pasta conectada.");
  }
}
function loadDriveLibrary(_0) {
  return __async(this, arguments, function* (config, options = {}) {
    if (driveLoading) return;
    driveLoading = true;
    const connectButton = document.getElementById("drive-connect");
    if (connectButton) connectButton.disabled = true;
    setDriveStatus("Lendo a pasta do Drive... Isso pode levar alguns segundos.");
    try {
      const meta = yield getDriveFolderMeta(config.folderId, config.apiKey).catch(function() {
        return null;
      });
      const resolvedConfig = {
        folderId: config.folderId,
        apiKey: config.apiKey,
        folderName: (meta == null ? void 0 : meta.name) || config.folderName || ""
      };
      const account = { folders: 0, files: [] };
      yield walkDriveFolder(resolvedConfig.folderId, [], account, resolvedConfig);
      const items = buildDriveCatalog(account.files, resolvedConfig.folderName, resolvedConfig.apiKey);
      applyDriveItems(items);
      state.driveConfig = resolvedConfig;
      const episodeCount = items.reduce(function(total, item) {
        var _a2;
        return total + (((_a2 = item.seasons) == null ? void 0 : _a2.reduce(function(sum, season) {
          return sum + season.episodes.length;
        }, 0)) || 0);
      }, 0);
      const sync = { at: Date.now(), items: items.length, files: account.files.length, folders: account.folders, episodes: episodeCount };
      storage.set("nexa-drive", resolvedConfig);
      storage.set("nexa-drive-cache", items);
      storage.set("nexa-drive-sync", sync);
      updateDriveSettingsUI();
      const movieCount = items.filter(function(item) {
        return item.type === "filme";
      }).length;
      const seriesCount = items.filter(function(item) {
        return item.type === "serie";
      }).length;
      const episodeLabel = episodeCount ? ` \u2022 ${episodeCount} epis\xF3dio${episodeCount === 1 ? "" : "s"} em ${account.files.length} arquivos` : "";
      setDriveStatus(`${items.length} t\xEDtulos encontrados: ${movieCount} filme${movieCount === 1 ? "" : "s"} e ${seriesCount} s\xE9rie${seriesCount === 1 ? "" : "s"}${episodeLabel}.`, "success");
      if (state.view === "busca") handleSearch(state.query);
      else refreshCurrentView();
      if (!options.silent) showToast(`Google Drive conectado: ${items.length} t\xEDtulos encontrados`, "success");
    } catch (error) {
      setDriveStatus(driveErrorMessage(error), "error");
      if (!options.silent) showToast(driveErrorMessage(error), "error");
    } finally {
      driveLoading = false;
      if (connectButton) connectButton.disabled = false;
    }
  });
}
function connectDrive() {
  return __async(this, null, function* () {
    var _a2, _b2, _c2, _d2;
    const folderId = parseDriveFolderId((_a2 = document.getElementById("drive-folder")) == null ? void 0 : _a2.value);
    const apiKey = (_b2 = document.getElementById("drive-key")) == null ? void 0 : _b2.value.trim();
    if (!folderId) {
      setDriveStatus("Informe um link ou ID v\xE1lido de uma pasta do Google Drive.", "error");
      (_c2 = document.getElementById("drive-folder")) == null ? void 0 : _c2.focus();
      return;
    }
    if (!apiKey) {
      setDriveStatus("Informe a chave da API do Google.", "error");
      (_d2 = document.getElementById("drive-key")) == null ? void 0 : _d2.focus();
      return;
    }
    yield loadDriveLibrary({ folderId, apiKey });
  });
}
function disconnectDrive() {
  state.driveConfig = null;
  applyDriveItems([]);
  storage.set("nexa-drive", null);
  storage.set("nexa-drive-cache", []);
  storage.set("nexa-drive-sync", null);
  updateDriveSettingsUI();
  if (state.view === "busca") handleSearch(state.query);
  else refreshCurrentView();
  showToast("Google Drive desconectado", "success");
}
function restoreDriveLibrary() {
  const config = storage.get("nexa-drive", null);
  const cached = storage.get("nexa-drive-cache", null);
  state.driveConfig = (config == null ? void 0 : config.folderId) && (config == null ? void 0 : config.apiKey) ? config : null;
  if (Array.isArray(cached) && cached.length && state.driveConfig) {
    applyDriveItems(cached);
    if (state.view === "home") renderHome();
  }
  updateDriveSettingsUI();
  if (state.driveConfig) loadDriveLibrary(state.driveConfig, { silent: true });
}
let localLoading = false;
function setLocalStatus(message, type = "") {
  const status = document.getElementById("local-status");
  if (!status) return;
  status.textContent = message;
  status.classList.toggle("is-error", type === "error");
  status.classList.toggle("is-success", type === "success");
}
function updateLocalNavCount() {
  const count = catalog.filter(function(item) {
    return item.local;
  }).length;
  const badge = document.getElementById("local-count");
  if (!badge) return;
  badge.textContent = count;
  badge.hidden = !count;
}
function resolveLocalServerBase({ protocol, host, configured } = {}) {
  if (protocol === "http:") return `${protocol}//${host}`;
  const value = String(configured || "").trim();
  if (value) return value.replace(/\/+$/, "");
  return "http://127.0.0.1:8090";
}
function localServerBase() {
  return resolveLocalServerBase({
    protocol: window.location.protocol,
    host: window.location.host,
    configured: storage.get("nexa-local-server", "")
  });
}
function localServerHint() {
  return `Servidor local: ${localServerBase()}`;
}
function localFetchSignal(timeout = 3e4) {
  if (typeof AbortController === "undefined") return void 0;
  const controller = new AbortController();
  window.setTimeout(function() {
    return controller.abort();
  }, timeout);
  return controller.signal;
}
function localApi(path) {
  return `${localServerBase()}${path}`;
}
function localUrl(url) {
  if (!url || typeof url !== "string") return url;
  if (!url.startsWith("/api/local/")) return url;
  return `${localServerBase()}${url}`;
}
function localizeItem(item) {
  if (!(item == null ? void 0 : item.local)) return item;
  const copy = __spreadValues({}, item);
  copy.video = localUrl(copy.video);
  copy.transcodeUrl = localUrl(copy.transcodeUrl);
  copy.poster = localUrl(copy.poster);
  copy.backdrop = localUrl(copy.backdrop);
  if (Array.isArray(copy.subtitles)) {
    copy.subtitles = copy.subtitles.map(function(subtitle) {
      return __spreadProps(__spreadValues({}, subtitle), { url: localUrl(subtitle.url) });
    });
  }
  if (Array.isArray(copy.seasons)) {
    copy.seasons = copy.seasons.map(function(season) {
      return __spreadProps(__spreadValues({}, season), {
        episodeFiles: (season.episodeFiles || []).map(function(episode) {
          return __spreadProps(__spreadValues({}, episode), {
            video: localUrl(episode.video),
            transcodeUrl: localUrl(episode.transcodeUrl),
            thumbnail: localUrl(episode.thumbnail),
            subtitles: (episode.subtitles || []).map(function(subtitle) {
              return __spreadProps(__spreadValues({}, subtitle), { url: localUrl(subtitle.url) });
            })
          });
        })
      });
    });
  }
  return copy;
}
function localizeAlbums(albums) {
  return (albums || []).map(function(album) {
    return __spreadProps(__spreadValues({}, album), {
      cover: localUrl(album.cover),
      tracks: (album.tracks || []).map(function(track) {
        return __spreadProps(__spreadValues({}, track), { url: localUrl(track.url) });
      })
    });
  });
}
function applyLocalItems(items) {
  for (let index = catalog.length - 1; index >= 0; index -= 1) {
    if (catalog[index].local) catalog.splice(index, 1);
  }
  catalog.push(...items.map(localizeItem));
  updateLocalNavCount();
}
function updateLocalSettingsUI() {
  var _a2, _b2, _c2, _d2, _e;
  const input = document.getElementById("local-root");
  const serverInput = document.getElementById("local-server");
  if (serverInput && document.activeElement !== serverInput) {
    serverInput.value = storage.get("nexa-local-server", "") || localServerBase();
  }
  const scanButton = document.getElementById("local-scan");
  const clearButton = document.getElementById("local-clear");
  if (!input || !scanButton || !clearButton) return;
  if (document.activeElement !== input) input.value = ((_a2 = state.localConfig) == null ? void 0 : _a2.root) || storage.get("nexa-local-root", "") || "";
  const sync = storage.get("nexa-local-sync", null);
  const subtitleStatus = document.getElementById("subtitle-settings-status");
  if (subtitleStatus && ((_b2 = state.localConfig) == null ? void 0 : _b2.hasSubtitleKey)) {
    subtitleStatus.textContent = "Chave da API configurada no servidor local: a busca de legendas online est\xE1 ativa.";
  }
  const omdbStatus = document.getElementById("omdb-settings-status");
  if (omdbStatus && ((_c2 = state.localConfig) == null ? void 0 : _c2.hasOmdbKey)) {
    omdbStatus.textContent = "Chave do OMDb configurada no servidor local: os metadados dos filmes s\xE3o atualizados no scan.";
  }
  const enrichButton = document.getElementById("local-omdb-enrich");
  if (enrichButton) enrichButton.hidden = !((_d2 = state.localConfig) == null ? void 0 : _d2.hasOmdbKey);
  const hasItems = catalog.some(function(item) {
    return item.local;
  });
  clearButton.hidden = !hasItems;
  const fullScanButton = document.getElementById("local-scan-full");
  if (fullScanButton) fullScanButton.hidden = !((_e = state.localConfig) == null ? void 0 : _e.hasLibrary) || localLoading;
  if (localLoading) {
    scanButton.disabled = true;
    setLocalStatus("Lendo o HD... isso pode levar alguns minutos na primeira vez.");
  } else {
    scanButton.disabled = false;
    if (sync == null ? void 0 : sync.items) {
      const date = new Date(sync.at).toLocaleString("pt-BR", { dateStyle: "short", timeStyle: "short" });
      const music = sync.tracks ? `, ${sync.albums} \xE1lbuns e ${sync.tracks} faixas` : "";
      setLocalStatus(`${sync.items} t\xEDtulos no HD: ${sync.movies} filmes, ${sync.series} s\xE9ries (${sync.episodes} epis\xF3dios)${music}. Atualizado em ${date}.`, "success");
    } else if (state.localConfig) {
      setLocalStatus("Servidor local conectado. Clique em \u201CEscanear HD\u201D para atualizar a biblioteca.");
    } else {
      setLocalStatus("Servidor local n\xE3o conectado.");
    }
  }
}
function localDelay(ms) {
  return new Promise(function(resolve) {
    window.setTimeout(resolve, ms);
  });
}
function loadLocalLibrary() {
  return __async(this, arguments, function* (options = {}) {
    var _a2, _b2;
    if (localLoading) return;
    localLoading = true;
    updateLocalSettingsUI();
    try {
      let response = yield fetch(localApi("/api/local/library"), { cache: "no-store" });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      let data = yield response.json();
      let tries = 0;
      while (data.scanning && tries < 80) {
        if (!options.silent) setLocalStatus("Escaneando o HD... isso pode levar alguns minutos.");
        yield localDelay(3e3);
        response = yield fetch(localApi("/api/local/library"), { cache: "no-store" });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        data = yield response.json();
        tries += 1;
      }
      const items = Array.isArray(data.items) ? data.items : [];
      const albums = localizeAlbums(Array.isArray((_a2 = data.music) == null ? void 0 : _a2.albums) ? data.music.albums : []);
      applyLocalItems(items);
      state.musicAlbums = albums;
      state.localConfig = { root: data.root || "", stats: data.stats || {}, at: data.at || 0, accessible: data.accessible !== false };
      if (data.accessible === false) {
        setLocalStatus("HD externo n\xE3o est\xE1 montado. Reconecte o pen drive e reinicie o servidor local.", "error");
        showToast("HD externo n\xE3o est\xE1 montado (EIO). Reconecte o drive.", "error");
      }
      try {
        const configResponse = yield fetch(localApi("/api/local/config"), { cache: "no-store" });
        if (configResponse.ok) {
          const configData = yield configResponse.json();
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
        movies: stats.movies || items.filter(function(item) {
          return item.type === "filme";
        }).length,
        series: stats.series || items.filter(function(item) {
          return item.type === "serie";
        }).length,
        episodes: stats.episodes || 0,
        albums: stats.albums || albums.length,
        tracks: stats.tracks || 0
      };
      storage.set("nexa-local-cache", items);
      storage.set("nexa-local-sync", sync);
      storage.set("nexa-local-root", data.root || "");
      if (data.root) storage.set("nexa-local-config", { root: data.root });
      updateLocalSettingsUI();
      if (state.view === "busca") handleSearch(state.query);
      else if (state.view === "musica") renderMusicView();
      else refreshCurrentView();
      if (!options.silent) showToast(`HD local: ${items.length} t\xEDtulos encontrados`, "success");
    } catch (error) {
      const httpsPage = window.location.protocol === "https:";
      const message = httpsPage ? `P\xE1ginas https bloqueiam o servidor local. Abra o NEXA em ${localServerBase()}.` : `Servidor local indispon\xEDvel em ${localServerBase()}. Rode python3 local_server.py e recarregue.`;
      if (!options.silent) {
        setLocalStatus(message, "error");
        showToast(message, "error");
      } else if ((_b2 = document.getElementById("settings-dialog")) == null ? void 0 : _b2.open) {
        setLocalStatus(message, "error");
      }
    } finally {
      localLoading = false;
      updateLocalSettingsUI();
    }
  });
}
function scanLocalLibrary() {
  return __async(this, null, function* () {
    var _a2;
    const input = document.getElementById("local-root");
    const root = (input == null ? void 0 : input.value.trim()) || ((_a2 = state.localConfig) == null ? void 0 : _a2.root) || "";
    if (!root) {
      setLocalStatus("Informe a pasta do HD.", "error");
      input == null ? void 0 : input.focus();
      return;
    }
    if (localLoading) return;
    localLoading = true;
    updateLocalSettingsUI();
    setLocalStatus("Escaneando o HD... isso pode levar alguns minutos.");
    try {
      const response = yield fetch(localApi("/api/local/config"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ root })
      });
      const data = yield response.json().catch(function() {
        return {};
      });
      if (!response.ok) throw new Error(data.error || `HTTP ${response.status}`);
      storage.set("nexa-local-root", data.root || root);
      storage.set("nexa-local-config", { root: data.root || root });
      localLoading = false;
      yield loadLocalLibrary();
    } catch (error) {
      setLocalStatus(error.message || "Falha ao escanear o HD.", "error");
      showToast("Falha ao escanear o HD local.", "error");
    } finally {
      localLoading = false;
      updateLocalSettingsUI();
    }
  });
}
function rescanLocalLibrary() {
  return __async(this, null, function* () {
    if (localLoading) return;
    localLoading = true;
    updateLocalSettingsUI();
    setLocalStatus("Reanalisando tudo no HD... no 9p isso pode demorar bastante.");
    try {
      const response = yield fetch(localApi("/api/local/scan"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ full: true })
      });
      const data = yield response.json().catch(function() {
        return {};
      });
      if (!response.ok) throw new Error(data.error || `HTTP ${response.status}`);
      setLocalStatus("Rean\xE1lise iniciada no servidor local.");
      yield loadLocalLibrary();
    } catch (error) {
      setLocalStatus(error.message || "Falha ao reanlisar o HD.", "error");
      showToast("Falha ao reanlisar o HD local.", "error");
    } finally {
      localLoading = false;
      updateLocalSettingsUI();
    }
  });
}
function disconnectLocal() {
  state.localConfig = null;
  state.musicAlbums = [];
  applyLocalItems([]);
  storage.set("nexa-local-cache", []);
  storage.set("nexa-local-sync", null);
  storage.set("nexa-local-root", "");
  storage.set("nexa-local-config", null);
  updateLocalSettingsUI();
  if (state.view === "busca") handleSearch(state.query);
  else if (state.view === "musica") renderMusicView();
  else refreshCurrentView();
  showToast("Biblioteca do HD removida deste navegador", "success");
}
function restoreLocalLibrary() {
  const config = storage.get("nexa-local-config", null);
  const cached = storage.get("nexa-local-cache", null);
  state.localConfig = (config == null ? void 0 : config.root) ? config : null;
  if (Array.isArray(cached) && cached.length) {
    applyLocalItems(cached);
    if (state.view === "home") renderHome();
  }
  updateLocalSettingsUI();
  loadLocalLibrary({ silent: true });
}
function icon(name) {
  return `<svg aria-hidden="true"><use href="#${icons[name] || name}"></use></svg>`;
}
function escapeHtml(value) {
  return String(value != null ? value : "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
function getItem(id) {
  return catalog.find(function(item) {
    return item.id === id;
  });
}
function getGenres() {
  return ["Todos", ...new Set(currentCatalog().flatMap(function(item) {
    return item.genres;
  }))];
}
function numericValue(value, fallback = -1) {
  const number = Number(value);
  return Number.isFinite(number) ? number : fallback;
}
function sortItems(items) {
  const sorted = [...items];
  if (state.sort === "relevancia") return sorted;
  if (state.sort === "recentes") return sorted.sort(function(a, b) {
    return numericValue(b.year) - numericValue(a.year);
  });
  if (state.sort === "avaliacao") return sorted.sort(function(a, b) {
    return numericValue(b.rating) - numericValue(a.rating);
  });
  if (state.sort === "a-z") return sorted.sort(function(a, b) {
    return String(a.title).localeCompare(String(b.title), "pt-BR");
  });
  return sorted;
}
function filteredCatalog(view = state.view) {
  let items = [...currentCatalog()];
  if (view === "filmes") items = items.filter(function(item) {
    return item.type === "filme";
  });
  if (view === "series") items = items.filter(function(item) {
    return item.type === "serie";
  });
  if (view === "filmes" || view === "series") items.sort(function(a, b) {
    return Number(Boolean(b.drive)) - Number(Boolean(a.drive));
  });
  if (view === "originais") items = items.filter(function(item) {
    return item.original;
  });
  if (view === "novidades") items = items.filter(function(item) {
    return item.new;
  });
  if (view === "lista") items = items.filter(function(item) {
    return state.list.has(item.id);
  });
  if (view === "busca") {
    const filters = state.searchFilters;
    if (filters.type !== "todos") items = items.filter(function(item) {
      return item.type === filters.type;
    });
    if (filters.genre !== "Todos") items = items.filter(function(item) {
      return item.genres.includes(filters.genre);
    });
    if (filters.year !== "todos") items = items.filter(function(item) {
      return String(item.year) === filters.year;
    });
    if (Number(filters.rating) > 0) items = items.filter(function(item) {
      return Number(item.rating) >= Number(filters.rating);
    });
  } else if (state.genre !== "Todos") {
    items = items.filter(function(item) {
      return item.genres.includes(state.genre);
    });
  }
  if (state.query) {
    const query = state.query.toLocaleLowerCase("pt-BR");
    items = items.filter(function(item) {
      return [item.title, item.description, item.cast.join(" "), item.genres.join(" ")].join(" ").toLocaleLowerCase("pt-BR").includes(query);
    });
  }
  return sortItems(items);
}
function posterCard(item, options = {}) {
  const progress = state.progress[item.id];
  const isTop = options.top;
  const badge = item.original ? '<span class="card-badge original">Original</span>' : item.new ? '<span class="card-badge">Novo</span>' : "";
  const showProgress = progress && progress.percent > 0 && progress.percent < 100;
  const progressBar = showProgress ? `<span class="card-progress" role="progressbar" aria-label="Progresso de ${escapeHtml(item.title)}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${progress.percent}"><span aria-hidden="true" style="width:${progress.percent}%"></span></span>` : "";
  const poster = `
    <div class="poster-wrap">
      <img src="${escapeHtml(item.poster)}" alt="P\xF4ster de ${escapeHtml(item.title)}" loading="lazy">
      ${badge}
      <button class="poster-open" type="button" data-action="details" data-id="${item.id}" aria-label="Ver detalhes de ${escapeHtml(item.title)}"></button>
      <div class="card-overlay">
        <button class="card-play" type="button" data-action="play" data-id="${item.id}" aria-label="Assistir ${escapeHtml(item.title)}">${icon("play")}</button>
        <button class="card-info" type="button" data-action="details" data-id="${item.id}" aria-label="Ver detalhes de ${escapeHtml(item.title)}">${icon("info")}</button>
        <button class="card-list ${state.list.has(item.id) ? "in-list" : ""}" type="button" data-action="toggle-list" data-id="${item.id}" aria-label="${state.list.has(item.id) ? "Remover" : "Adicionar"} ${escapeHtml(item.title)} ${state.list.has(item.id) ? "da" : "\xE0"} lista">${state.list.has(item.id) ? icon("check") : icon("plus")}</button>
      </div>
      ${progressBar}
    </div>`;
  const inner = `
    ${poster}
    <h3 class="poster-title">${escapeHtml(item.title)}</h3>
    <div class="poster-meta"><span class="match-score">${escapeHtml(item.match)}%</span><span>\u2022</span><span>${escapeHtml(item.year)}</span><span>\u2022</span><span>${escapeHtml(typeLabel[item.type])}</span></div>`;
  if (isTop) {
    return `<article class="media-card rank-wrap" data-id="${item.id}"><span class="rank-number">${options.rank}</span><div class="poster-button">${inner}</div></article>`;
  }
  return `<article class="media-card" data-id="${item.id}"><div class="poster-button">${inner}</div></article>`;
}
function sectionRow(title, items, options = {}) {
  if (!items.length) return "";
  const cards = items.map(function(item, index) {
    return posterCard(item, { top: options.top, rank: index + 1 });
  }).join("");
  return `
    <section class="content-section" data-section>
      <div class="section-heading">
        <div><h2>${title}</h2>${options.subtitle ? `<p>${options.subtitle}</p>` : ""}</div>
        ${options.link ? `<button class="section-link" type="button" data-view-link="${options.link.view}">Explorar tudo ${icon("chevron")}</button>` : ""}
      </div>
      <div class="carousel" role="group" aria-roledescription="carrossel" aria-label="${escapeHtml(title)}"><div class="media-row">${cards}</div></div>
    </section>`;
}
function homeHero(item) {
  return `
    <section class="hero" aria-labelledby="hero-title">
      <div class="hero-backdrop" style="background-image:url('${escapeHtml(item.backdrop)}')"></div>
      <div class="hero-content">
        <span class="hero-badge">${item.original ? "NEXA Original" : "Em destaque"}</span>
        <h1 id="hero-title">${escapeHtml(item.title)}</h1>
        <div class="hero-meta">
          <span class="match-score">${escapeHtml(item.match)}% de escolha</span>
          <span class="meta-divider"></span><span>${escapeHtml(item.year)}</span>
          <span class="meta-divider"></span><span>${escapeHtml(item.maturity)}</span>
          <span class="meta-divider"></span><span>${escapeHtml(item.duration)}</span>
          <span class="meta-divider"></span><span>${escapeHtml(item.genres.join(" \u2022 "))}</span>
        </div>
        <p class="hero-description">${escapeHtml(item.description)}</p>
        <div class="hero-actions">
          <button class="button button-red" type="button" data-action="play" data-id="${item.id}">${icon("play")} Assistir</button>
          <button class="button button-ghost" type="button" data-action="details" data-id="${item.id}">${icon("info")} Mais informa\xE7\xF5es</button>
        </div>
      </div>
    </section>`;
}
function renderHome() {
  const visible = currentCatalog();
  const continueItems = visible.filter(function(item) {
    return isItemInProgress(item);
  }).sort(function(a, b) {
    var _a2, _b2;
    return (((_a2 = state.progress[b.id]) == null ? void 0 : _a2.percent) || 0) - (((_b2 = state.progress[a.id]) == null ? void 0 : _b2.percent) || 0);
  });
  const trending = visible.filter(function(item) {
    return item.trending;
  });
  const top = visible.filter(function(item) {
    return item.top;
  }).slice(0, 10);
  const originals = visible.filter(function(item) {
    return item.original;
  });
  const movies = visible.filter(function(item) {
    return item.type === "filme";
  }).sort(function(a, b) {
    return Number(Boolean(b.drive)) - Number(Boolean(a.drive));
  });
  const series = visible.filter(function(item) {
    return item.type === "serie";
  }).sort(function(a, b) {
    return Number(Boolean(b.drive)) - Number(Boolean(a.drive));
  });
  const documentaries = visible.filter(function(item) {
    return item.type === "documentario";
  });
  const fresh = visible.filter(function(item) {
    return item.new;
  });
  const drive = visible.filter(function(item) {
    return item.drive;
  });
  const local = visible.filter(function(item) {
    return item.local;
  });
  const hero = visible[0];
  const empty = `<div class="empty-state"><div class="empty-state-inner"><span class="empty-icon">${icon("film")}</span><h2>Nenhum t\xEDtulo dispon\xEDvel</h2><p>N\xE3o h\xE1 t\xEDtulos adequados para este perfil no momento.</p></div></div>`;
  mainContent.innerHTML = `
    <div class="content-view">
      ${hero ? homeHero(hero) : ""}
      <div class="content-sections">
        ${visible.length ? `
          ${sectionRow("Continue assistindo", continueItems, { subtitle: "Retome de onde parou" })}
          ${sectionRow("Do seu Google Drive", drive, { subtitle: "Filmes e s\xE9ries da sua pasta conectada" })}
          ${sectionRow("Do seu HD", local, { subtitle: "Filmes e s\xE9ries da biblioteca local" })}
          ${sectionRow("Em alta agora", trending, { subtitle: "O que todo mundo est\xE1 assistindo", link: { view: "filmes" } })}
          ${sectionRow("Top 10 hoje", top, { top: true })}
          ${sectionRow("Originais NEXA", originals, { subtitle: "Hist\xF3rias exclusivas para assistir" })}
          ${sectionRow("Filmes populares", movies)}
          ${sectionRow("S\xE9ries que voc\xEA precisa ver", series)}
          ${sectionRow("Document\xE1rios que inspiram", documentaries)}
          ${sectionRow("Novidades", fresh)}
        ` : empty}
      </div>
    </div>`;
}
function currentMusicAlbums() {
  var _a2;
  return ((_a2 = activeProfile()) == null ? void 0 : _a2.kids) ? [] : state.musicAlbums;
}
function albumCard(album) {
  var _a2;
  const tracks = ((_a2 = album.tracks) == null ? void 0 : _a2.length) || 0;
  return `
    <article class="album-card">
      <button class="album-cover-button" type="button" data-album="${album.id}" aria-label="Abrir \xE1lbum ${escapeHtml(album.title)}">
        <img src="${escapeHtml(album.cover || fallbackArtwork)}" alt="Capa de ${escapeHtml(album.title)}" loading="lazy">
        <span class="album-play">${icon("play")}</span>
      </button>
      <strong class="album-title">${escapeHtml(album.title)}</strong>
      <small class="album-meta">${escapeHtml(album.artist || "V\xE1rios artistas")} \u2022 ${tracks} faixa${tracks === 1 ? "" : "s"}</small>
    </article>`;
}
function renderMusicView() {
  state.view = "musica";
  updateActiveNavigation();
  if (state.activeAlbum) {
    renderAlbumView(state.activeAlbum);
    return;
  }
  const albums = currentMusicAlbums();
  const trackCount = albums.reduce(function(total, album) {
    var _a2;
    return total + (((_a2 = album.tracks) == null ? void 0 : _a2.length) || 0);
  }, 0);
  mainContent.innerHTML = `
    <section class="section-view">
      <header class="section-header"><div><p class="eyebrow">Sua biblioteca</p><h1>M\xFAsica</h1><p>${albums.length ? `${albums.length} \xE1lbun${albums.length === 1 ? "s" : "s"} e ${trackCount} faixas no HD local.` : "Conecte o HD local para ouvir sua cole\xE7\xE3o."}</p></div></header>
      ${albums.length ? `<div class="album-grid">${albums.map(albumCard).join("")}</div>` : `<div class="empty-state"><div class="empty-state-inner"><span class="empty-icon">${icon("music")}</span><h2>Nenhuma m\xFAsica ainda</h2><p>Inicie o servidor local, escaneie o HD e suas m\xFAsicas aparecer\xE3o aqui.</p><button class="button button-red" type="button" data-local-settings>Escanear HD</button></div></div>`}
    </section>`;
  window.scrollTo({ top: 0, behavior: "instant" });
}
function renderAlbumView(album) {
  var _a2, _b2;
  state.view = "musica";
  updateActiveNavigation();
  const trackIndex = state.activeTrackIndex;
  mainContent.innerHTML = `
    <section class="section-view album-view">
      <button class="back-link" type="button" data-album-back>${icon("chevron")} Todos os \xE1lbuns</button>
      <header class="album-header">
        <img class="album-detail-cover" src="${escapeHtml(album.cover || fallbackArtwork)}" alt="Capa de ${escapeHtml(album.title)}">
        <div>
          <p class="eyebrow">\xC1lbum</p>
          <h1>${escapeHtml(album.title)}</h1>
          <p class="album-detail-meta">${escapeHtml(album.artist || "V\xE1rios artistas")}${album.year ? ` \u2022 ${album.year}` : ""} \u2022 ${((_a2 = album.tracks) == null ? void 0 : _a2.length) || 0} faixa${((_b2 = album.tracks) == null ? void 0 : _b2.length) === 1 ? "" : "s"}</p>
          <button class="button button-red" type="button" data-play-album="${album.id}">${icon("play")} Tocar \xE1lbum</button>
        </div>
      </header>
      <ol class="track-list">
        ${(album.tracks || []).map(function(track, index) {
    return `
          <li class="${index === trackIndex ? "playing" : ""}">
            <button type="button" data-track="${album.id}" data-track-index="${index}">
              <span class="track-number">${track.number || index + 1}</span>
              <span class="track-copy"><strong>${escapeHtml(track.title)}</strong><small>${escapeHtml(track.artist || album.artist || "")}</small></span>
              <span class="track-action">${index === trackIndex ? icon("volume") : icon("play")}</span>
            </button>
          </li>`;
  }).join("")}
      </ol>
    </section>`;
  window.scrollTo({ top: 0, behavior: "instant" });
}
function showMusicBar(track, album) {
  if (!musicPlayerBar || !track) return;
  musicCover.src = album.cover || fallbackArtwork;
  musicCover.alt = `Capa de ${album.title}`;
  musicTitle.textContent = track.title;
  musicArtist.textContent = `${track.artist || album.artist || ""}${album.title ? ` \u2022 ${album.title}` : ""}`;
  musicPlayerBar.hidden = false;
  document.body.classList.add("music-open");
}
function playAlbumTrack(albumId, index) {
  var _a2;
  const album = state.musicAlbums.find(function(entry) {
    return entry.id === albumId;
  });
  const track = (_a2 = album == null ? void 0 : album.tracks) == null ? void 0 : _a2[index];
  if (!album || !track) return;
  state.activeAlbum = album;
  state.activeTrackIndex = index;
  musicAudio.src = track.url;
  musicAudio.dataset.albumId = album.id;
  musicAudio.dataset.trackIndex = String(index);
  showMusicBar(track, album);
  const promise = musicAudio.play();
  if (promise) promise.catch(function() {
    return showToast("Clique em reproduzir para ouvir a m\xFAsica", "success");
  });
  renderAlbumView(album);
}
function playNextTrack() {
  const album = state.musicAlbums.find(function(entry) {
    return entry.id === musicAudio.dataset.albumId;
  });
  if (!album) return;
  const next = Number(musicAudio.dataset.trackIndex || 0) + 1;
  if (next < album.tracks.length) playAlbumTrack(album.id, next);
}
function stopMusic() {
  musicAudio.pause();
  musicAudio.removeAttribute("src");
  musicAudio.load();
  musicPlayerBar.hidden = true;
  document.body.classList.remove("music-open");
  state.activeTrackIndex = -1;
}
function browseEmptyState() {
  if (state.genre !== "Todos") {
    return `<div class="empty-state"><div class="empty-state-inner"><span class="empty-icon">${icon("film")}</span><h2>Nenhum t\xEDtulo em ${escapeHtml(state.genre)}</h2><p>Experimente outro g\xEAnero ou limpe os filtros para ver o cat\xE1logo completo.</p><button class="button button-red" type="button" data-genre="Todos">Limpar filtros</button></div></div>`;
  }
  const copy = {
    filmes: ["Nenhum filme dispon\xEDvel", "Novos filmes chegam em breve ao cat\xE1logo.", "film"],
    series: ["Nenhuma s\xE9rie dispon\xEDvel", "Novas s\xE9ries chegam em breve ao cat\xE1logo.", "tv"],
    originais: ["Nenhum original por aqui", "Nossas produ\xE7\xF5es exclusivas aparecer\xE3o aqui.", "sparkle"],
    novidades: ["Nada novo por enquanto", "Volte em breve para conferir as novidades.", "plus"],
    lista: ["Sua lista est\xE1 vazia", "Adicione filmes e s\xE9ries usando o bot\xE3o <strong>+</strong> nos cards. Eles ficar\xE3o salvos neste navegador.", "bookmark"]
  };
  const [title, text, iconName] = copy[state.view] || ["Nada encontrado", "Tente ajustar seus filtros.", "search"];
  return `<div class="empty-state"><div class="empty-state-inner"><span class="empty-icon">${icon(iconName)}</span><h2>${title}</h2><p>${text}</p><button class="button button-red" type="button" data-view-link="home">Descobrir t\xEDtulos</button></div></div>`;
}
function browseView() {
  const items = filteredCatalog(state.view);
  const titles = {
    filmes: ["Filmes", "Hist\xF3rias para todas as imagina\xE7\xF5es."],
    series: ["S\xE9ries", "Universos para se perder e encontrar."],
    originais: ["Originais NEXA", "Grandes hist\xF3rias, exclusivas para voc\xEA."],
    novidades: ["Novidades", "Acabaram de chegar. N\xE3o perca nenhuma."],
    lista: ["Minha lista", "Tudo o que voc\xEA guardou para assistir depois."]
  };
  const [title, subtitle] = titles[state.view] || ["Cat\xE1logo", "Encontre sua pr\xF3xima hist\xF3ria."];
  const chips = getGenres().map(function(genre) {
    return `<button class="filter-chip ${state.genre === genre ? "active" : ""}" type="button" data-genre="${genre}">${genre}</button>`;
  }).join("");
  const content = items.length ? `<div class="media-grid">${items.map(function(item) {
    return posterCard(item);
  }).join("")}</div>` : browseEmptyState();
  mainContent.innerHTML = `
    <section class="section-view">
      <header class="section-header"><div><p class="eyebrow">NEXA cat\xE1logo</p><h1>${title}</h1><p>${subtitle}</p></div></header>
      <div class="filter-bar">
        ${chips}
        <select class="sort-select" id="sort-select" aria-label="Ordenar cat\xE1logo">
          <option value="relevancia" ${state.sort === "relevancia" ? "selected" : ""}>Mais relevantes</option>
          <option value="recentes" ${state.sort === "recentes" ? "selected" : ""}>Mais recentes</option>
          <option value="avaliacao" ${state.sort === "avaliacao" ? "selected" : ""}>Melhor avaliados</option>
          <option value="a-z" ${state.sort === "a-z" ? "selected" : ""}>T\xEDtulo (A\u2013Z)</option>
        </select>
      </div>
      ${content}
    </section>`;
}
function renderView(view) {
  state.view = view;
  state.genre = "Todos";
  if (view === "musica") state.activeAlbum = null;
  updateActiveNavigation();
  if (view === "home") renderHome();
  else if (view === "musica") renderMusicView();
  else browseView();
  window.scrollTo({ top: 0, behavior: "instant" });
}
function refreshCurrentView() {
  if (state.view === "home") renderHome();
  else if (state.view === "musica") renderMusicView();
  else if (state.view !== "busca") browseView();
}
function focusCard(id) {
  const target = document.querySelector(`.media-card[data-id="${id}"] .poster-open`);
  if (target) target.focus();
  else document.getElementById("main-content").focus();
}
function openDetails(id) {
  var _a2, _b2;
  const item = getItem(id);
  if (!item) return;
  if (!isAllowedItem(item)) {
    showToast("Este t\xEDtulo n\xE3o est\xE1 dispon\xEDvel no perfil infantil.", "error");
    return;
  }
  state.activeItem = item;
  state.activeSeason = 0;
  const inList = state.list.has(item.id);
  const liked = state.liked.has(item.id);
  document.getElementById("detail-hero").style.backgroundImage = `url('${item.backdrop}')`;
  document.getElementById("detail-eyebrow").textContent = item.original ? "NEXA Original" : typeLabel[item.type];
  const detailHero = document.getElementById("detail-hero");
  detailHero.innerHTML = `<div class="detail-hero-copy"><span class="detail-logo">${item.original ? "NEXA" : typeLabel[item.type].toUpperCase()}</span><h1 id="detail-hero-title">${escapeHtml(item.title)}</h1></div>`;
  document.getElementById("detail-eyebrow").hidden = true;
  document.getElementById("detail-meta").innerHTML = `<span class="match-score">${item.match}% de escolha</span><span class="meta-divider"></span><span>${escapeHtml(item.year)}</span><span class="meta-divider"></span><span>${escapeHtml(item.maturity)}</span><span class="meta-divider"></span><span>${escapeHtml(item.duration)}</span><span class="meta-divider"></span><span>${escapeHtml(item.genres.join(", "))}</span>`;
  document.getElementById("detail-description").textContent = item.description;
  document.getElementById("detail-genre").textContent = item.genres.join(", ");
  document.getElementById("detail-director").textContent = item.director;
  document.getElementById("detail-cast").textContent = item.cast.join(", ");
  document.getElementById("detail-rating").textContent = item.maturity;
  document.getElementById("detail-duration").textContent = item.duration;
  const listButton = document.getElementById("detail-list");
  listButton.innerHTML = `${inList ? icon("check") : icon("plus")}<span>${inList ? "Na minha lista" : "Adicionar \xE0 lista"}</span>`;
  listButton.dataset.id = item.id;
  const likeButton = document.getElementById("detail-like");
  likeButton.classList.toggle("liked", liked);
  likeButton.setAttribute("aria-pressed", String(liked));
  likeButton.dataset.id = item.id;
  const playButton = document.getElementById("detail-play");
  playButton.innerHTML = `${icon("play")}<span>${isItemSeen(item) ? "Assistir novamente" : isItemInProgress(item) ? "Continuar assistindo" : "Assistir"}</span>`;
  playButton.dataset.id = item.id;
  updateSeenButton(item);
  document.getElementById("detail-share").dataset.id = item.id;
  const omdbButton = document.getElementById("detail-omdb");
  omdbButton.hidden = !(item.local && item.type === "filme");
  omdbButton.dataset.id = item.id;
  const episodeSection = document.getElementById("episodes-section");
  episodeSection.hidden = !((_a2 = item.seasons) == null ? void 0 : _a2.length);
  if ((_b2 = item.seasons) == null ? void 0 : _b2.length) {
    const select = document.getElementById("season-select");
    select.innerHTML = item.seasons.map(function(season, index) {
      return `<option value="${index}">${season.name}</option>`;
    }).join("");
    renderEpisodes(item, 0);
  }
  const related = currentCatalog().filter(function(candidate) {
    return candidate.id !== item.id && candidate.genres.some(function(genre) {
      return item.genres.includes(genre);
    });
  }).slice(0, 4);
  document.getElementById("related-grid").innerHTML = related.map(function(candidate) {
    return posterCard(candidate);
  }).join("");
  if (detailsDialog.open) detailsDialog.close();
  detailsDialog.showModal();
  document.body.classList.add("modal-open");
  history.replaceState(null, "", `#/titulo/${item.id}`);
}
function renderEpisodes(item, seasonIndex) {
  const season = item.seasons[seasonIndex];
  document.getElementById("episode-list").innerHTML = season.episodes.map(function(episode, index) {
    var _a2, _b2;
    const episodeFile = (_a2 = season.episodeFiles) == null ? void 0 : _a2[index];
    const number = (_b2 = episodeFile == null ? void 0 : episodeFile.number) != null ? _b2 : index + 1;
    const duration = (episodeFile == null ? void 0 : episodeFile.duration) || `${28 + index * 3} min`;
    const thumbnail = (episodeFile == null ? void 0 : episodeFile.thumbnail) || item.backdrop;
    return `
    <article class="episode-item">
      <div class="episode-image">
        <img src="${escapeHtml(thumbnail)}" alt="" loading="lazy">
        <button class="episode-play" type="button" data-action="play-episode" data-id="${item.id}" data-season="${seasonIndex}" data-episode="${index}" aria-label="Assistir ${escapeHtml(episode)}">${icon("play")}</button>
      </div>
      <div class="episode-copy">
        <div class="episode-top"><strong>${number}. ${escapeHtml(episode)}</strong><span>${escapeHtml(duration)}</span></div>
        <p>${escapeHtml(item.description)} Uma nova decis\xE3o coloca os personagens diante das consequ\xEAncias de suas escolhas.</p>
      </div>
    </article>`;
  }).join("");
}
function nextEpisodeTarget(active = state.activeVideo) {
  var _a2, _b2, _c2, _d2;
  if (!active || active.episodeIndex === null || !((_a2 = active.item.seasons) == null ? void 0 : _a2.length)) return null;
  const { item, seasonIndex, episodeIndex } = active;
  let nextSeasonIndex = seasonIndex;
  let nextEpisodeIndex = episodeIndex + 1;
  const currentSeason = item.seasons[seasonIndex];
  const seasonLength = ((_b2 = currentSeason == null ? void 0 : currentSeason.episodes) == null ? void 0 : _b2.length) || ((_c2 = currentSeason == null ? void 0 : currentSeason.episodeFiles) == null ? void 0 : _c2.length) || 0;
  if (nextEpisodeIndex >= seasonLength) {
    nextSeasonIndex = seasonIndex + 1;
    nextEpisodeIndex = 0;
  }
  const nextSeason = item.seasons[nextSeasonIndex];
  if (!nextSeason || nextEpisodeIndex >= (((_d2 = nextSeason.episodes) == null ? void 0 : _d2.length) || 0)) return null;
  return { seasonIndex: nextSeasonIndex, episodeIndex: nextEpisodeIndex };
}
function updatePlayerNextButton() {
  const button = document.getElementById("player-next");
  if (button) button.hidden = !nextEpisodeTarget();
}
function playNextEpisode(target = nextEpisodeTarget()) {
  var _a2, _b2;
  const active = state.activeVideo;
  if (!active || !target) return false;
  const { item } = active;
  const nextSeason = (_a2 = item.seasons) == null ? void 0 : _a2[target.seasonIndex];
  const nextFile = (_b2 = nextSeason == null ? void 0 : nextSeason.episodeFiles) == null ? void 0 : _b2[target.episodeIndex];
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
  if ((nextFile == null ? void 0 : nextFile.playable) === false) showToast("O pr\xF3ximo epis\xF3dio pode n\xE3o tocar neste navegador.", "error");
  return true;
}
function openPlayer(id, episodeIndex = null, options = {}) {
  var _a2, _b2, _c2, _d2, _e, _f, _g, _h;
  const item = getItem(id);
  if (!item) return;
  if (!isAllowedItem(item)) {
    showToast("Este t\xEDtulo n\xE3o est\xE1 dispon\xEDvel no perfil infantil.", "error");
    return;
  }
  const fromDetails = (_a2 = options.fromDetails) != null ? _a2 : detailsDialog.open;
  let resolvedEpisode = episodeIndex;
  let resolvedSeason = state.activeSeason;
  if (resolvedEpisode === null && ((_b2 = item.seasons) == null ? void 0 : _b2.length) && (item.drive || item.local)) {
    const last = state.progress[item.id];
    if (last && Number.isInteger(last.season) && Number.isInteger(last.episode)) {
      resolvedSeason = last.season;
      resolvedEpisode = last.episode;
    } else {
      resolvedSeason = 0;
      resolvedEpisode = 0;
    }
  }
  if (resolvedEpisode !== null && ((_c2 = item.seasons) == null ? void 0 : _c2.length)) {
    if (!item.seasons[resolvedSeason]) resolvedSeason = 0;
    const seasonEpisodes = ((_d2 = item.seasons[resolvedSeason]) == null ? void 0 : _d2.episodes) || [];
    if (resolvedEpisode >= seasonEpisodes.length) resolvedEpisode = 0;
  }
  const season = (_e = item.seasons) == null ? void 0 : _e[resolvedSeason];
  const episodeFile = resolvedEpisode !== null ? (_f = season == null ? void 0 : season.episodeFiles) == null ? void 0 : _f[resolvedEpisode] : null;
  const progressKey = resolvedEpisode !== null && (item.drive || item.local) ? `${item.id}::s${resolvedSeason}e${resolvedEpisode}` : item.id;
  state.activeVideo = { item, episodeIndex: resolvedEpisode, seasonIndex: resolvedSeason, episodeFile, progressKey, fallbackTried: false, fromDetails };
  if (resolvedEpisode !== null && item.seasons) state.activeSeason = resolvedSeason;
  videoPlayer.poster = item.backdrop;
  const initialSource = (episodeFile == null ? void 0 : episodeFile.video) || item.video;
  const boostSeparator = initialSource && initialSource.includes("?") ? "&" : "?";
  videoPlayer.src = state.audioBoost > 1 && typeof initialSource === "string" && initialSource.includes("/api/local/media") ? `${initialSource}${boostSeparator}boost=${state.audioBoost}` : initialSource;
  document.getElementById("player-title").textContent = item.title;
  document.getElementById("player-episode").textContent = resolvedEpisode !== null && item.seasons ? `${item.seasons[resolvedSeason].name} \u2022 Epis\xF3dio ${(_g = episodeFile == null ? void 0 : episodeFile.number) != null ? _g : resolvedEpisode + 1}` : item.duration;
  document.getElementById("player-quality").textContent = state.quality;
  resetSubtitles();
  const saved = state.progress[progressKey] || null;
  const activeVideo = state.activeVideo;
  videoPlayer.addEventListener("loadedmetadata", function resume() {
    if (state.activeVideo !== activeVideo) return;
    videoPlayer.playbackRate = state.playbackRate;
    if ((saved == null ? void 0 : saved.seconds) && saved.seconds < videoPlayer.duration - 10 && (saved.percent || 0) < 100) videoPlayer.currentTime = saved.seconds;
  }, { once: true });
  if ((episodeFile == null ? void 0 : episodeFile.playable) === false) showToast("Este formato pode n\xE3o tocar no navegador. Prefira MP4 ou WebM.", "error");
  if (detailsDialog.open) detailsDialog.close();
  if (!playerDialog.open) {
    playerDialog.showModal();
    document.body.classList.add("modal-open");
  }
  updatePlayerNextButton();
  updateBoostButton();
  updateSpeedButton();
  updatePipButton();
  const shouldAutoplay = (_h = options.autoplay) != null ? _h : state.autoplay;
  if (shouldAutoplay) {
    const promise = videoPlayer.play();
    if (promise) promise.catch(function() {
      return showToast("Clique em reproduzir para iniciar o v\xEDdeo", "success");
    });
  }
}
const BOOST_STEPS = [1, 1.5, 2, 3];
function localMediaUrl(item, episodeFile) {
  const url = (episodeFile == null ? void 0 : episodeFile.video) || (item == null ? void 0 : item.video) || "";
  return typeof url === "string" && url.includes("/api/local/media") ? url : "";
}
function updateBoostButton() {
  if (!playerBoostButton) return;
  const active = state.activeVideo;
  const isLocal = Boolean(localMediaUrl(active == null ? void 0 : active.item, active == null ? void 0 : active.episodeFile));
  playerBoostButton.hidden = !isLocal;
  playerBoostLabel.textContent = `${state.audioBoost}\xD7`;
  playerBoostButton.classList.toggle("active", state.audioBoost > 1);
  playerBoostButton.setAttribute("aria-label", `Amplificar \xE1udio (${state.audioBoost}\xD7)`);
}
function applyAudioBoost(factor) {
  const active = state.activeVideo;
  const mediaUrl = localMediaUrl(active == null ? void 0 : active.item, active == null ? void 0 : active.episodeFile);
  if (!mediaUrl) {
    showToast("Amplifica\xE7\xE3o dispon\xEDvel apenas para filmes do HD local.", "error");
    return;
  }
  const time = Number.isFinite(videoPlayer.currentTime) ? videoPlayer.currentTime : 0;
  const wasPlaying = !videoPlayer.paused;
  const separator = mediaUrl.includes("?") ? "&" : "?";
  const base = mediaUrl.split("&boost=")[0].split("&start=")[0];
  state.audioBoost = factor;
  storage.set("nexa-audio-boost", factor);
  videoPlayer.src = factor > 1 ? `${base}${separator}boost=${factor}&start=${Math.floor(time)}` : base;
  videoPlayer.load();
  const resume = function() {
    if (time > 1) videoPlayer.currentTime = time;
    if (wasPlaying) videoPlayer.play().catch(function() {
    });
  };
  videoPlayer.addEventListener("loadedmetadata", resume, { once: true });
  updateBoostButton();
  showToast(factor > 1 ? `\xC1udio amplificado ${factor}\xD7` : "\xC1udio normal", "success");
}
function cycleAudioBoost() {
  const index = BOOST_STEPS.indexOf(state.audioBoost);
  const next = BOOST_STEPS[(index + 1) % BOOST_STEPS.length] || 1;
  applyAudioBoost(next);
}
function closePlayer() {
  if (videoPlayer.paused === false) videoPlayer.pause();
  resetSubtitles();
  playerDialog.close();
  document.body.classList.remove("modal-open");
}
function currentPlaybackKey() {
  const active = state.activeVideo;
  if (!active) return null;
  return active.progressKey || active.item.id;
}
function collectSubtitles() {
  var _a2;
  const active = state.activeVideo;
  if (!active) return [];
  const list = [];
  const add = function(subtitle) {
    if (subtitle && !list.some(function(candidate) {
      return candidate.id === subtitle.id;
    })) list.push(subtitle);
  };
  (active.item.subtitles || []).forEach(add);
  (((_a2 = active.episodeFile) == null ? void 0 : _a2.subtitles) || []).forEach(add);
  (subtitleStore.get(currentPlaybackKey()) || []).forEach(add);
  return list;
}
function localSubtitleTarget() {
  var _a2, _b2;
  const active = state.activeVideo;
  if (!((_a2 = active == null ? void 0 : active.item) == null ? void 0 : _a2.local)) return null;
  const fileRel = ((_b2 = active.episodeFile) == null ? void 0 : _b2.fileRel) || active.item.fileRel;
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
  subtitleSearchOpen.hidden = false;
  const activeSubtitle = collectSubtitles().find(function(candidate) {
    return candidate.id === activeSubtitleId;
  });
  subtitleSaveHd.hidden = !(target && activeSubtitle && activeSubtitle.source === "local");
}
function resetSubtitles() {
  closeSubtitleMenu();
  subtitleButton.classList.remove("active");
  subtitleButton.setAttribute("aria-expanded", "false");
  activeSubtitleId = null;
  [...videoPlayer.querySelectorAll("track")].forEach(function(track) {
    return track.remove();
  });
  subtitleObjectUrls.forEach(function(url) {
    return URL.revokeObjectURL(url);
  });
  subtitleObjectUrls = [];
  subtitleMenuList.innerHTML = "";
}
function renderSubtitleMenu() {
  const subtitles = collectSubtitles();
  const offSelected = !activeSubtitleId;
  subtitleMenuList.innerHTML = `
    <button class="subtitle-option ${offSelected ? "selected" : ""}" type="button" role="menuitemradio" aria-checked="${offSelected}" data-subtitle="">
      <span>Desligado</span>
    </button>
    ${subtitles.map(function(subtitle) {
    const selected = subtitle.id === activeSubtitleId;
    return `<button class="subtitle-option ${selected ? "selected" : ""}" type="button" role="menuitemradio" aria-checked="${selected}" data-subtitle="${subtitle.id}">
        <span>${escapeHtml(subtitle.label)}</span>
        <small>${subtitle.source === "drive" ? "Google Drive" : subtitle.source === "local-server" ? "HD local" : "Arquivo local"}</small>
      </button>`;
  }).join("")}
    ${subtitles.length ? "" : '<p class="subtitle-empty">Nenhuma legenda encontrada. Carregue um arquivo .srt ou .vtt.</p>'}`;
  updateSubtitleActionButtons();
}
function openSubtitleMenu() {
  renderSubtitleMenu();
  subtitleMenu.hidden = false;
  subtitleButton.setAttribute("aria-expanded", "true");
  scheduleControlsHide();
}
function closeSubtitleMenu() {
  if (!subtitleMenu) return;
  subtitleMenu.hidden = true;
  if (subtitleButton) subtitleButton.setAttribute("aria-expanded", "false");
}
function disableSubtitles() {
  const tracks = videoPlayer.textTracks;
  for (let index = 0; index < tracks.length; index += 1) tracks[index].mode = "disabled";
  activeSubtitleId = null;
  subtitleButton.classList.remove("active");
  renderSubtitleMenu();
}
function activateSubtitle(id) {
  return __async(this, null, function* () {
    var _a2;
    const subtitle = collectSubtitles().find(function(candidate) {
      return candidate.id === id;
    });
    if (!subtitle) return;
    try {
      const text = (_a2 = subtitle.text) != null ? _a2 : yield fetchSubtitleText(subtitle);
      const vtt = srtToVtt(text);
      if (!vtt.trim()) throw new Error("Legenda vazia");
      const url = URL.createObjectURL(new Blob([vtt], { type: "text/vtt" }));
      subtitleObjectUrls.push(url);
      [...videoPlayer.querySelectorAll("track")].forEach(function(track2) {
        return track2.remove();
      });
      const track = document.createElement("track");
      track.kind = "subtitles";
      track.label = subtitle.label || "Legenda";
      track.srclang = subtitle.lang || "pt";
      track.src = url;
      track.default = true;
      videoPlayer.append(track);
      const showTrack = function() {
        const tracks = videoPlayer.textTracks;
        for (let index = 0; index < tracks.length; index += 1) tracks[index].mode = tracks[index] === tracks[tracks.length - 1] ? "showing" : "disabled";
      };
      showTrack();
      track.addEventListener("load", showTrack);
      activeSubtitleId = subtitle.id;
      subtitleButton.classList.add("active");
      renderSubtitleMenu();
      showToast(`Legenda: ${subtitle.label}`, "success");
    } catch (e) {
      showToast("N\xE3o foi poss\xEDvel carregar essa legenda.", "error");
    }
  });
}
function fetchSubtitleText(subtitle) {
  return __async(this, null, function* () {
    var _a2;
    const url = subtitle.url || (subtitle.fileId ? driveMediaUrl(subtitle.fileId, ((_a2 = state.driveConfig) == null ? void 0 : _a2.apiKey) || "") : "");
    if (!url) throw new Error("Legenda sem origem");
    const response = yield fetch(url, { cache: "no-store" });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return response.text();
  });
}
function readFileText(file) {
  if (typeof file.text === "function") return file.text();
  return new Promise(function(resolve, reject) {
    const reader = new FileReader();
    reader.onload = function() {
      return resolve(String(reader.result || ""));
    };
    reader.onerror = function() {
      return reject(reader.error || new Error("Falha ao ler o arquivo"));
    };
    reader.readAsText(file);
  });
}
function loadSubtitleFile(file) {
  return __async(this, null, function* () {
    if (!file) return;
    try {
      const text = yield readFileText(file);
      if (!text.trim()) throw new Error("Arquivo vazio");
      const language = subtitleLanguage(file.name);
      const subtitle = {
        id: `local-sub-${Date.now()}-${subtitleCounter += 1}`,
        label: subtitleDisplayLabel(file.name),
        lang: language.code || "pt",
        source: "local",
        name: file.name,
        text
      };
      const key = currentPlaybackKey();
      if (!key) return;
      const stored = subtitleStore.get(key) || [];
      stored.push(subtitle);
      subtitleStore.set(key, stored);
      closeSubtitleMenu();
      yield activateSubtitle(subtitle.id);
    } catch (e) {
      showToast("N\xE3o foi poss\xEDvel ler o arquivo de legenda.", "error");
    }
  });
}
function toggleList(id, silent = false) {
  const item = getItem(id);
  if (!item) return;
  const adding = !state.list.has(id);
  if (adding) state.list.add(id);
  else state.list.delete(id);
  persistActiveProfile();
  document.getElementById("list-count").textContent = state.list.size;
  document.querySelectorAll(`[data-action="toggle-list"][data-id="${id}"]`).forEach(function(button) {
    button.classList.toggle("in-list", adding);
    button.innerHTML = adding ? icon("check") : icon("plus");
    button.setAttribute("aria-label", `${adding ? "Remover" : "Adicionar"} ${item.title} ${adding ? "da" : "\xE0"} lista`);
  });
  const detailButton = document.getElementById("detail-list");
  if (detailButton.dataset.id === id) {
    detailButton.innerHTML = `${adding ? icon("check") : icon("plus")}<span>${adding ? "Na minha lista" : "Adicionar \xE0 lista"}</span>`;
  }
  if (!silent) showToast(adding ? `${item.title} adicionado \xE0 sua lista` : `${item.title} removido da sua lista`, "success");
  if (state.view === "lista") browseView();
}
function toggleLike(id) {
  const item = getItem(id);
  if (!item) return;
  const liking = !state.liked.has(id);
  if (liking) state.liked.add(id);
  else state.liked.delete(id);
  persistActiveProfile();
  const likeButton = document.getElementById("detail-like");
  likeButton.classList.toggle("liked", liking);
  likeButton.setAttribute("aria-pressed", String(liking));
  showToast(liking ? "Obrigado pelo feedback!" : "Avalia\xE7\xE3o removida", "success");
}
function getShareUrl(item) {
  const url = new URL(window.location.href);
  url.hash = `/titulo/${item.id}`;
  return url.toString();
}
function shareItem(id) {
  return __async(this, null, function* () {
    const item = getItem(id);
    if (!item) return;
    const url = getShareUrl(item);
    const shareData = { title: `${item.title} \u2014 NEXA`, text: item.description, url };
    try {
      if (navigator.share) yield navigator.share(shareData);
      else {
        yield navigator.clipboard.writeText(url);
        showToast("Link copiado para a \xE1rea de transfer\xEAncia", "success");
      }
    } catch (error) {
      if (error.name !== "AbortError") showToast("N\xE3o foi poss\xEDvel compartilhar agora", "error");
    }
  });
}
function showToast(message, type = "success") {
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.innerHTML = `${type === "error" ? icon("info") : icon("check")}<span>${escapeHtml(message)}</span>`;
  toastRegion.append(toast);
  window.setTimeout(function() {
    toast.classList.add("hiding");
    window.setTimeout(function() {
      return toast.remove();
    }, 240);
  }, 3200);
}
function updateActiveNavigation() {
  document.querySelectorAll("[data-view]").forEach(function(button) {
    const active = button.dataset.view === state.view;
    button.classList.toggle("active", active);
    if (active) button.setAttribute("aria-current", "page");
    else button.removeAttribute("aria-current");
  });
}
function resetSearchFilters() {
  state.searchFilters = { type: "todos", genre: "Todos", year: "todos", rating: 0 };
}
function getSearchYears() {
  return [...new Set(currentCatalog().map(function(item) {
    return String(item.year);
  }))].sort(function(a, b) {
    return Number(b) - Number(a);
  });
}
function searchFiltersView() {
  const filters = state.searchFilters;
  const types = [["todos", "Todos"], ["filme", "Filmes"], ["serie", "S\xE9ries"], ["documentario", "Document\xE1rios"]];
  const ratings = [[0, "Qualquer nota"], [7, "Nota 7+"], [8, "Nota 8+"], [9, "Nota 9+"]];
  const sorts = [["relevancia", "Mais relevantes"], ["recentes", "Mais recentes"], ["avaliacao", "Melhor avaliados"], ["a-z", "T\xEDtulo (A\u2013Z)"]];
  const genres = getGenres();
  const years = getSearchYears();
  const active = filters.type !== "todos" || filters.genre !== "Todos" || filters.year !== "todos" || Number(filters.rating) > 0;
  const options = function(values, selected) {
    return values.map(function([value, label]) {
      return `<option value="${value}" ${String(selected) === String(value) ? "selected" : ""}>${label}</option>`;
    }).join("");
  };
  return `
    <div class="search-filters" role="group" aria-label="Filtros da busca">
      <label class="search-filter"><span>Tipo</span><select class="sort-select" data-search-filter="type">${options(types, filters.type)}</select></label>
      <label class="search-filter"><span>G\xEAnero</span><select class="sort-select" data-search-filter="genre">${options(genres.map(function(genre) {
    return [genre, genre];
  }), filters.genre)}</select></label>
      <label class="search-filter"><span>Ano</span><select class="sort-select" data-search-filter="year">${options([["todos", "Qualquer ano"], ...years.map(function(year) {
    return [year, year];
  })], filters.year)}</select></label>
      <label class="search-filter"><span>Nota</span><select class="sort-select" data-search-filter="rating">${options(ratings, filters.rating)}</select></label>
      <label class="search-filter"><span>Ordenar</span><select class="sort-select" data-search-sort>${options(sorts, state.sort)}</select></label>
      <button class="filter-reset" type="button" data-search-reset ${active ? "" : "disabled"}>Limpar filtros</button>
    </div>`;
}
function openSearch() {
  searchInput.focus();
  searchInput.select();
}
function handleSearch(query) {
  state.query = query.trim();
  searchBox.classList.toggle("has-value", Boolean(state.query));
  if (state.query) {
    if (state.view !== "busca") {
      state.previousView = state.view;
      state.genre = "Todos";
      resetSearchFilters();
    }
    state.view = "busca";
    updateActiveNavigation();
    const items = filteredCatalog("busca");
    mainContent.innerHTML = `
      <section class="section-view">
        <header class="section-header"><div><p class="eyebrow">Resultados</p><h1>${state.query ? `Busca por \u201C${escapeHtml(state.query)}\u201D` : "Busca"}</h1><p>${items.length} ${items.length === 1 ? "resultado encontrado" : "resultados encontrados"}.</p></div></header>
        ${searchFiltersView()}
        ${items.length ? `<div class="media-grid">${items.map(function(item) {
      return posterCard(item);
    }).join("")}</div>` : `<div class="empty-state"><div class="empty-state-inner"><span class="empty-icon">${icon("search")}</span><h2>Nada encontrado</h2><p>Experimente outro t\xEDtulo, g\xEAnero ou pessoa do elenco.</p><button class="button button-red" type="button" data-search-reset>Limpar filtros</button></div></div>`}
      </section>`;
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else if (state.view === "busca") {
    resetSearchFilters();
    renderView(state.previousView || "home");
  }
}
function formatTime(seconds) {
  if (!Number.isFinite(seconds)) return "0:00";
  const minutes = Math.floor(seconds / 60);
  const remainder = Math.floor(seconds % 60);
  return `${minutes}:${String(remainder).padStart(2, "0")}`;
}
function updatePlayerProgress() {
  const duration = videoPlayer.duration || 0;
  const percent = duration ? videoPlayer.currentTime / duration * 100 : 0;
  document.getElementById("player-progress").value = percent;
  document.getElementById("player-current").textContent = formatTime(videoPlayer.currentTime);
  document.getElementById("player-duration").textContent = formatTime(duration);
  if (duration && videoPlayer.buffered.length) {
    const buffered = videoPlayer.buffered.end(videoPlayer.buffered.length - 1);
    document.getElementById("buffered-bar").style.width = `${buffered / duration * 100}%`;
  }
}
function progressKeyPrefix(itemId) {
  return `${itemId}::`;
}
function isItemSeen(item) {
  const progress = state.progress[item == null ? void 0 : item.id];
  return Boolean(progress && progress.percent >= 100);
}
function isItemInProgress(item) {
  const progress = state.progress[item == null ? void 0 : item.id];
  return Boolean(progress && progress.percent > 0 && progress.percent < 100);
}
function clearItemProgress(item) {
  if (!item) return;
  delete state.progress[item.id];
  Object.keys(state.progress).forEach(function(key) {
    if (key.startsWith(progressKeyPrefix(item.id))) delete state.progress[key];
  });
}
function markItemSeen(item) {
  if (!item) return;
  clearItemProgress(item);
  state.progress[item.id] = { percent: 100, seconds: 0, updatedAt: Date.now() };
}
function updateSeenButton(item) {
  const button = document.getElementById("detail-seen");
  if (!button || !item) return;
  const seen = isItemSeen(item);
  button.innerHTML = `${icon(seen ? "eye-off" : "eye")}<span>${seen ? "Marcar como n\xE3o visto" : "Marcar como visto"}</span>`;
  button.setAttribute("aria-pressed", String(seen));
  button.dataset.id = item.id;
}
function toggleSeen(id) {
  const item = getItem(id);
  if (!item) return;
  if (isItemSeen(item)) {
    clearItemProgress(item);
    showToast(`${item.title} marcado como n\xE3o visto`, "success");
  } else {
    markItemSeen(item);
    showToast(`${item.title} marcado como visto`, "success");
  }
  persistActiveProfile();
  updateSeenButton(item);
  const playButton = document.getElementById("detail-play");
  if (playButton && playButton.dataset.id === item.id) {
    playButton.innerHTML = `${icon("play")}<span>${isItemSeen(item) ? "Assistir novamente" : state.progress[item.id] ? "Continuar assistindo" : "Assistir"}</span>`;
  }
  refreshCurrentView();
}
function saveProgress() {
  if (!state.activeVideo || !Number.isFinite(videoPlayer.duration) || videoPlayer.duration <= 0) return;
  const { item, seasonIndex, episodeIndex, progressKey } = state.activeVideo;
  const rawPercent = videoPlayer.currentTime / videoPlayer.duration * 100;
  const ended = videoPlayer.ended || rawPercent >= 99.5;
  const percent = ended ? 100 : Math.min(99, Math.max(1, Math.round(rawPercent)));
  const entry = { percent, seconds: Math.round(videoPlayer.currentTime), updatedAt: Date.now() };
  const hasSeries = episodeIndex !== null && (item.drive || item.local);
  if (hasSeries) {
    entry.season = seasonIndex;
    entry.episode = episodeIndex;
  }
  state.progress[progressKey || item.id] = entry;
  if (hasSeries) {
    if (percent >= 100) {
      state.progress[item.id] = { percent: 99, seconds: 0, season: seasonIndex, episode: episodeIndex, updatedAt: Date.now() };
    } else {
      state.progress[item.id] = entry;
    }
  }
  persistActiveProfile();
}
function setQuality(value) {
  state.quality = value;
  storage.set("nexa-quality", value);
  document.getElementById("player-quality").textContent = value;
  const select = document.getElementById("settings-quality");
  if (select) select.value = value;
}
function setPlayerPlaying(playing) {
  document.getElementById("player-shell").classList.toggle("playing", playing);
}
function togglePlay() {
  if (videoPlayer.paused) videoPlayer.play().catch(function() {
  });
  else videoPlayer.pause();
}
function skip(seconds) {
  videoPlayer.currentTime = Math.max(0, Math.min(videoPlayer.duration || 0, videoPlayer.currentTime + seconds));
}
function toggleMute() {
  videoPlayer.muted = !videoPlayer.muted;
  document.getElementById("player-mute").classList.toggle("muted", videoPlayer.muted);
}
function toggleFullscreen() {
  var _a2, _b2, _c2;
  if (!document.fullscreenElement) (_b2 = (_a2 = document.getElementById("player-shell")).requestFullscreen) == null ? void 0 : _b2.call(_a2);
  else (_c2 = document.exitFullscreen) == null ? void 0 : _c2.call(document);
}
function openShortcutsDialog() {
  if (!shortcutsDialog) return;
  if (!shortcutsDialog.open) {
    shortcutsDialog.showModal();
    document.body.classList.add("modal-open");
  }
}
function closeShortcutsDialog() {
  if (!(shortcutsDialog == null ? void 0 : shortcutsDialog.open)) return;
  shortcutsDialog.close();
}
function scheduleControlsHide() {
  const shell = document.getElementById("player-shell");
  clearTimeout(state.hideControlsTimer);
  shell.classList.remove("controls-hidden");
  state.hideControlsTimer = window.setTimeout(function() {
    if (!videoPlayer.paused && subtitleMenu.hidden) shell.classList.add("controls-hidden");
  }, 2800);
}
document.addEventListener("click", function(event) {
  const albumTarget = event.target.closest("[data-album]");
  if (albumTarget) {
    const album = state.musicAlbums.find(function(entry) {
      return entry.id === albumTarget.dataset.album;
    });
    if (album) {
      state.activeAlbum = album;
      renderAlbumView(album);
    }
    return;
  }
  if (event.target.closest("[data-album-back]")) {
    state.activeAlbum = null;
    state.activeTrackIndex = -1;
    renderMusicView();
    return;
  }
  const trackTarget = event.target.closest("[data-track]");
  if (trackTarget) {
    playAlbumTrack(trackTarget.dataset.track, Number(trackTarget.dataset.trackIndex));
    return;
  }
  const albumPlayTarget = event.target.closest("[data-play-album]");
  if (albumPlayTarget) {
    playAlbumTrack(albumPlayTarget.dataset.playAlbum, 0);
    return;
  }
  if (event.target.closest("[data-local-settings]")) {
    openSettings();
    window.setTimeout(function() {
      var _a2, _b2;
      (_a2 = document.querySelector(".local-settings")) == null ? void 0 : _a2.scrollIntoView({ block: "start" });
      (_b2 = document.getElementById("local-root")) == null ? void 0 : _b2.focus({ preventScroll: true });
    }, 60);
    return;
  }
  const actionTarget = event.target.closest("[data-action]");
  if (actionTarget) {
    const { action, id } = actionTarget.dataset;
    if (action === "play") openPlayer(id);
    if (action === "details") openDetails(id);
    if (action === "toggle-list") toggleList(id);
    if (action === "play-episode") {
      state.activeSeason = Number(actionTarget.dataset.season);
      state.activeEpisode = Number(actionTarget.dataset.episode);
      openPlayer(id, state.activeEpisode);
    }
    return;
  }
  const viewTarget = event.target.closest("[data-view], [data-view-link]");
  if (viewTarget) {
    event.preventDefault();
    const view = viewTarget.dataset.view || viewTarget.dataset.viewLink;
    state.query = "";
    searchInput.value = "";
    searchBox.classList.remove("has-value");
    renderView(view);
    closeSidebar();
  }
  const genreTarget = event.target.closest("[data-genre]");
  if (genreTarget) {
    state.genre = genreTarget.dataset.genre;
    browseView();
  }
});
document.addEventListener("keydown", function(event) {
  const keys = ["ArrowLeft", "ArrowRight", "Home", "End"];
  if (!keys.includes(event.key)) return;
  const card = event.target.closest(".media-card");
  const row = card == null ? void 0 : card.closest(".media-row");
  if (!card || !row) return;
  const cards = [...row.querySelectorAll(".media-card")];
  const index = cards.indexOf(card);
  if (index === -1) return;
  let next = index;
  if (event.key === "ArrowRight") next = Math.min(cards.length - 1, index + 1);
  if (event.key === "ArrowLeft") next = Math.max(0, index - 1);
  if (event.key === "Home") next = 0;
  if (event.key === "End") next = cards.length - 1;
  if (next === index) return;
  event.preventDefault();
  const target = cards[next].querySelector(".poster-open");
  target == null ? void 0 : target.focus();
  target == null ? void 0 : target.scrollIntoView({ block: "nearest", inline: "center" });
});
document.getElementById("detail-play").addEventListener("click", function(event) {
  return openPlayer(event.currentTarget.dataset.id);
});
document.getElementById("detail-list").addEventListener("click", function(event) {
  return toggleList(event.currentTarget.dataset.id);
});
document.getElementById("detail-seen").addEventListener("click", function(event) {
  return toggleSeen(event.currentTarget.dataset.id);
});
document.getElementById("detail-like").addEventListener("click", function(event) {
  return toggleLike(event.currentTarget.dataset.id);
});
document.getElementById("detail-share").addEventListener("click", function(event) {
  return shareItem(event.currentTarget.dataset.id);
});
document.getElementById("season-select").addEventListener("change", function(event) {
  state.activeSeason = Number(event.target.value);
  if (state.activeItem) renderEpisodes(state.activeItem, state.activeSeason);
});
document.querySelector("[data-close-dialog]").addEventListener("click", function() {
  return detailsDialog.close();
});
detailsDialog.addEventListener("close", function() {
  document.body.classList.remove("modal-open");
  if (window.location.hash.startsWith("#/titulo/")) history.replaceState(null, "", window.location.pathname + window.location.search);
  if (!state.activeVideo && !playerDialog.open && !settingsDialog.open && !(shortcutsDialog == null ? void 0 : shortcutsDialog.open) && state.activeItem) focusCard(state.activeItem.id);
});
detailsDialog.addEventListener("click", function(event) {
  if (event.target === detailsDialog) detailsDialog.close();
});
playerDialog.addEventListener("cancel", function(event) {
  event.preventDefault();
  closePlayer();
});
playerDialog.addEventListener("close", function() {
  saveProgress();
  videoPlayer.pause();
  document.body.classList.remove("modal-open");
  const origin = state.activeVideo;
  state.activeVideo = null;
  refreshCurrentView();
  if ((origin == null ? void 0 : origin.fromDetails) && origin.item) openDetails(origin.item.id);
  else if (origin == null ? void 0 : origin.item) focusCard(origin.item.id);
});
document.getElementById("player-close").addEventListener("click", closePlayer);
document.getElementById("player-play").addEventListener("click", togglePlay);
document.getElementById("player-center-play").addEventListener("click", togglePlay);
document.getElementById("player-back").addEventListener("click", function() {
  return skip(-10);
});
document.getElementById("player-forward").addEventListener("click", function() {
  return skip(10);
});
document.getElementById("player-mute").addEventListener("click", toggleMute);
playerBoostButton.addEventListener("click", cycleAudioBoost);
playerSpeedButton == null ? void 0 : playerSpeedButton.addEventListener("click", cyclePlaybackRate);
playerPipButton == null ? void 0 : playerPipButton.addEventListener("click", togglePictureInPicture);
document.getElementById("player-fullscreen").addEventListener("click", toggleFullscreen);
videoPlayer.addEventListener("enterpictureinpicture", updatePipButton);
videoPlayer.addEventListener("leavepictureinpicture", updatePipButton);
videoPlayer.addEventListener("loadedmetadata", function() {
  videoPlayer.playbackRate = state.playbackRate;
});
document.getElementById("player-progress").addEventListener("input", function(event) {
  if (videoPlayer.duration) videoPlayer.currentTime = Number(event.target.value) / 100 * videoPlayer.duration;
});
document.getElementById("player-volume").addEventListener("input", function(event) {
  videoPlayer.volume = Number(event.target.value);
  videoPlayer.muted = false;
});
document.getElementById("player-next").addEventListener("click", function() {
  return playNextEpisode();
});
document.getElementById("player-quality").addEventListener("click", function() {
  setQuality(state.quality === "HD" ? "4K" : "HD");
  showToast(`Qualidade alterada para ${state.quality}`, "success");
});
subtitleButton.addEventListener("click", function(event) {
  event.stopPropagation();
  if (subtitleMenu.hidden) openSubtitleMenu();
  else closeSubtitleMenu();
});
document.getElementById("subtitle-close").addEventListener("click", closeSubtitleMenu);
document.getElementById("subtitle-upload").addEventListener("click", function() {
  return subtitleFileInput.click();
});
function saveActiveSubtitleToHd() {
  return __async(this, null, function* () {
    var _a2;
    const target = localSubtitleTarget();
    const subtitle = collectSubtitles().find(function(candidate) {
      return candidate.id === activeSubtitleId;
    });
    if (!target || !subtitle) {
      showToast("Carregue uma legenda antes de salvar no HD.", "error");
      return;
    }
    try {
      const text = (_a2 = subtitle.text) != null ? _a2 : yield fetchSubtitleText(subtitle);
      const response = yield fetch(localApi("/api/local/subtitle/upload"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ root: target.rootKey, path: target.path, lang: subtitle.lang || "pt", content: text })
      });
      const data = yield response.json().catch(function() {
        return {};
      });
      if (!response.ok) throw new Error(data.error || `HTTP ${response.status}`);
      const saved = {
        id: `local-sub-${Date.now()}`,
        label: subtitle.label || "Legenda",
        lang: subtitle.lang || "pt",
        source: "local-server",
        name: data.name,
        url: data.url
      };
      const owner = state.activeVideo.episodeFile || state.activeVideo.item;
      const list = owner.subtitles || (owner.subtitles = []);
      if (!list.some(function(candidate) {
        return candidate.url === saved.url;
      })) list.push(saved);
      closeSubtitleMenu();
      renderSubtitleMenu();
      yield activateSubtitle(saved.id);
      showToast(`Legenda salva no HD: ${data.name}`, "success");
    } catch (error) {
      showToast(error.message || "N\xE3o foi poss\xEDvel salvar a legenda no HD.", "error");
    }
  });
}
subtitleSaveHd.addEventListener("click", saveActiveSubtitleToHd);
subtitleSearchOpen.addEventListener("click", function() {
  var _a2;
  const target = localSubtitleTarget();
  const item = (_a2 = state.activeVideo) == null ? void 0 : _a2.item;
  const title = (target == null ? void 0 : target.title) || (item == null ? void 0 : item.title) || "";
  if (!title) {
    showToast("Abra um filme ou epis\xF3dio para buscar legendas.", "error");
    return;
  }
  closeSubtitleMenu();
  subtitleSearchInput.value = title.replace(/\(\d{4}\)/, "").trim();
  subtitleResults.innerHTML = "";
  document.getElementById("subtitle-search-hint").textContent = `${target ? `Buscando legendas para \u201C${title}\u201D. Escolha uma para baixar e salvar ao lado do filme no HD.` : `Buscando legendas para \u201C${title}\u201D. Escolha uma para usar agora (para salvar no HD, abra o filme do HD local).`} ${localServerHint()}`;
  if (!subtitleSearchDialog.open) subtitleSearchDialog.showModal();
  document.body.classList.add("modal-open");
  window.setTimeout(function() {
    return subtitleSearchInput.focus();
  }, 60);
});
const omdbDialog = document.getElementById("omdb-dialog");
const omdbResults = document.getElementById("omdb-results");
const omdbQuery = document.getElementById("omdb-dialog-query");
document.getElementById("detail-omdb").addEventListener("click", function() {
  var _a2;
  const item = getItem((_a2 = state.activeItem) == null ? void 0 : _a2.id);
  if (!(item == null ? void 0 : item.local)) return;
  omdbQuery.value = item.title.replace(/\(\d{4}\)/, "").trim();
  omdbResults.innerHTML = "";
  omdbDialog.showModal();
  document.body.classList.add("modal-open");
  window.setTimeout(function() {
    return omdbQuery.focus();
  }, 60);
});
document.getElementById("omdb-dialog-close").addEventListener("click", function() {
  return omdbDialog.close();
});
omdbDialog.addEventListener("close", function() {
  document.body.classList.remove("modal-open");
});
document.getElementById("omdb-dialog-run").addEventListener("click", function() {
  return __async(null, null, function* () {
    const title = omdbQuery.value.trim();
    if (!title) return;
    omdbResults.innerHTML = '<li class="subtitle-result-empty">Buscando no OMDb...</li>';
    try {
      const response = yield fetch(localApi(`/api/local/omdb/candidates?title=${encodeURIComponent(title)}`), { cache: "no-store" });
      const data = yield response.json().catch(function() {
        return {};
      });
      if (!response.ok) throw new Error(data.error || `HTTP ${response.status}`);
      const candidates = Array.isArray(data.candidates) ? data.candidates : [];
      if (!candidates.length) {
        omdbResults.innerHTML = '<li class="subtitle-result-empty">Nada encontrado. Tente o t\xEDtulo original.</li>';
        return;
      }
      omdbResults.innerHTML = candidates.map(function(candidate) {
        return `
      <li>
        <button type="button" data-omdb-choose="${candidate.imdbId}">
          <strong>${escapeHtml(candidate.title)}</strong>
          <small>${escapeHtml(candidate.year || "")}${candidate.type ? ` \u2022 ${candidate.type}` : ""}</small>
        </button>
      </li>`;
      }).join("");
    } catch (error) {
      omdbResults.innerHTML = `<li class="subtitle-result-empty">${escapeHtml(error.message || "Falha na busca.")}</li>`;
    }
  });
});
omdbResults.addEventListener("click", function(event) {
  return __async(null, null, function* () {
    var _a2;
    const button = event.target.closest("[data-omdb-choose]");
    if (!button) return;
    const item = getItem((_a2 = state.activeItem) == null ? void 0 : _a2.id);
    if (!(item == null ? void 0 : item.local)) return;
    button.disabled = true;
    try {
      const response = yield fetch(localApi("/api/local/omdb/choose"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ root: item.rootKey, path: item.fileRel, imdbId: button.dataset.omdbChoose })
      });
      const data = yield response.json().catch(function() {
        return {};
      });
      if (!response.ok) throw new Error(data.error || `HTTP ${response.status}`);
      yield loadLocalLibrary({ silent: true });
      omdbDialog.close();
      const updated = getItem(item.id);
      if (updated) openDetails(updated.id);
      showToast("Filme identificado. Metadados atualizados.", "success");
    } catch (error) {
      showToast(error.message || "N\xE3o foi poss\xEDvel salvar a escolha.", "error");
      button.disabled = false;
    }
  });
});
document.getElementById("subtitle-search-close").addEventListener("click", function() {
  return subtitleSearchDialog.close();
});
subtitleSearchDialog.addEventListener("close", function() {
  document.body.classList.remove("modal-open");
});
document.getElementById("subtitle-search-run").addEventListener("click", function() {
  return __async(null, null, function* () {
    var _a2, _b2;
    const target = localSubtitleTarget();
    const title = subtitleSearchInput.value.trim();
    if (!title) {
      subtitleResults.innerHTML = '<li class="subtitle-result-empty">Digite o t\xEDtulo do filme.</li>';
      return;
    }
    subtitleResults.innerHTML = '<li class="subtitle-result-empty">Buscando no OpenSubtitles...</li>';
    const params = new URLSearchParams({ title });
    const year = (target == null ? void 0 : target.year) || ((_b2 = (_a2 = state.activeVideo) == null ? void 0 : _a2.item) == null ? void 0 : _b2.year);
    if (year) params.set("year", String(year));
    if (target == null ? void 0 : target.rootKey) params.set("root", target.rootKey);
    if (target == null ? void 0 : target.path) params.set("path", target.path);
    try {
      const response = yield fetch(localApi(`/api/local/subtitle/search?${params.toString()}`), { cache: "no-store", signal: localFetchSignal() });
      const data = yield response.json().catch(function() {
        return {};
      });
      if (!response.ok) throw new Error(data.error || `HTTP ${response.status}`);
      const results = Array.isArray(data.results) ? data.results : [];
      if (!results.length) {
        subtitleResults.innerHTML = '<li class="subtitle-result-empty">Nenhuma legenda encontrada. Tente o t\xEDtulo original em ingl\xEAs.</li>';
        return;
      }
      subtitleResults.innerHTML = results.map(function(result) {
        return `
      <li>
        <button type="button" data-subtitle-download="${result.id}" data-lang="${result.lang || "pt"}" data-link="${result.link || ""}" data-api="${result.api || ""}">
          <strong>${escapeHtml(result.name || "Legenda")}</strong>
          <small>${escapeHtml(result.fileName || "")}</small>
          <span class="subtitle-result-meta">${escapeHtml(result.lang || "pt")}${result.hearingImpaired ? " \u2022 SDH" : ""}${result.downloads ? ` \u2022 ${result.downloads} downloads` : ""}</span>
        </button>
      </li>`;
      }).join("");
    } catch (error) {
      const message = error.name === "AbortError" ? "Tempo esgotado ao falar com o servidor local." : error.message || "Falha na busca.";
      const base = escapeHtml(localServerBase());
      subtitleResults.innerHTML = `<li class="subtitle-result-empty">${escapeHtml(message)}<br>${escapeHtml(localServerHint())}<br>Abra o NEXA em <code>${base}</code> e rode <code>python3 local_server.py</code>.</li>`;
      showToast(message, "error");
    }
  });
});
subtitleResults.addEventListener("click", function(event) {
  return __async(null, null, function* () {
    const button = event.target.closest("[data-subtitle-download]");
    if (!button) return;
    const target = localSubtitleTarget();
    button.disabled = true;
    try {
      const response = yield fetch(localApi("/api/local/subtitle/download"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(__spreadValues({
          subtitleId: button.dataset.subtitleDownload,
          link: button.dataset.link || "",
          api: button.dataset.api || "",
          lang: button.dataset.lang || "pt"
        }, target ? { root: target.rootKey, path: target.path } : {})),
        signal: localFetchSignal()
      });
      const data = yield response.json().catch(function() {
        return {};
      });
      if (!response.ok) throw new Error(data.error || `HTTP ${response.status}`);
      const subtitle = __spreadValues({
        id: `local-sub-${Date.now()}`,
        label: "Legenda (baixada)",
        lang: button.dataset.lang || "pt",
        source: data.saved ? "local-server" : "local",
        name: data.name || "legenda"
      }, data.saved ? { url: data.url } : { text: data.content });
      if (data.saved) {
        const owner = state.activeVideo.episodeFile || state.activeVideo.item;
        const list = owner.subtitles || (owner.subtitles = []);
        if (!list.some(function(candidate) {
          return candidate.url === subtitle.url;
        })) list.push(subtitle);
      } else {
        const key = currentPlaybackKey();
        const stored = subtitleStore.get(key) || [];
        stored.push(subtitle);
        subtitleStore.set(key, stored);
      }
      subtitleSearchDialog.close();
      renderSubtitleMenu();
      yield activateSubtitle(subtitle.id);
      showToast(data.saved ? `Legenda baixada e salva no HD: ${data.name}` : "Legenda baixada e aplicada.", "success");
    } catch (error) {
      const message = error.name === "AbortError" ? "Tempo esgotado ao baixar a legenda." : error.message || "N\xE3o foi poss\xEDvel baixar a legenda.";
      subtitleResults.innerHTML = `<li class="subtitle-result-empty">${escapeHtml(message)}<br>${escapeHtml(localServerHint())}</li>`;
      showToast(message, "error");
      button.disabled = false;
    }
  });
});
subtitleFileInput.addEventListener("change", function() {
  var _a2;
  const file = (_a2 = subtitleFileInput.files) == null ? void 0 : _a2[0];
  subtitleFileInput.value = "";
  loadSubtitleFile(file);
});
subtitleMenuList.addEventListener("click", function(event) {
  const option = event.target.closest("[data-subtitle]");
  if (!option) return;
  const id = option.dataset.subtitle;
  if (id) {
    closeSubtitleMenu();
    activateSubtitle(id);
  } else {
    disableSubtitles();
  }
});
document.addEventListener("click", function(event) {
  if (subtitleMenu.hidden) return;
  if (event.target.closest("#subtitle-menu") || event.target.closest("#player-subtitles")) return;
  closeSubtitleMenu();
});
videoPlayer.addEventListener("error", function() {
  var _a2, _b2, _c2, _d2;
  const active = state.activeVideo;
  if (!active) {
    showToast("N\xE3o foi poss\xEDvel carregar o v\xEDdeo", "error");
    return;
  }
  if (active.fallbackTried) {
    showToast("N\xE3o foi poss\xEDvel carregar o v\xEDdeo", "error");
    return;
  }
  const localTranscode = ((_a2 = active.episodeFile) == null ? void 0 : _a2.transcodeUrl) || ((_b2 = active.item) == null ? void 0 : _b2.transcodeUrl);
  if (localTranscode) {
    active.fallbackTried = true;
    const saved = state.progress[currentPlaybackKey()];
    const start = (saved == null ? void 0 : saved.seconds) ? `&start=${Math.floor(saved.seconds)}` : "";
    videoPlayer.src = `${localTranscode}${start}`;
    videoPlayer.load();
    if (state.autoplay) videoPlayer.play().catch(function() {
    });
    showToast("Transcodificando o v\xEDdeo do HD...", "success");
    return;
  }
  const fileId = ((_c2 = active == null ? void 0 : active.episodeFile) == null ? void 0 : _c2.fileId) || ((_d2 = active == null ? void 0 : active.item) == null ? void 0 : _d2.driveFileId);
  if (!fileId) {
    showToast("N\xE3o foi poss\xEDvel carregar o v\xEDdeo", "error");
    return;
  }
  active.fallbackTried = true;
  videoPlayer.src = driveDownloadUrl(fileId);
  videoPlayer.load();
  if (state.autoplay) videoPlayer.play().catch(function() {
  });
  showToast("Tentando um link alternativo do Drive...", "success");
});
let boostSeeking = false;
videoPlayer.addEventListener("seeking", function() {
  if (boostSeeking || state.audioBoost <= 1) return;
  const active = state.activeVideo;
  const mediaUrl = localMediaUrl(active == null ? void 0 : active.item, active == null ? void 0 : active.episodeFile);
  if (!mediaUrl) return;
  boostSeeking = true;
  const base = mediaUrl.split("&boost=")[0].split("&start=")[0];
  videoPlayer.src = `${base}&boost=${state.audioBoost}&start=${Math.floor(videoPlayer.currentTime || 0)}`;
  videoPlayer.load();
  const release = function() {
    boostSeeking = false;
    videoPlayer.removeEventListener("seeked", release);
  };
  videoPlayer.addEventListener("seeked", release);
});
videoPlayer.addEventListener("play", function() {
  return setPlayerPlaying(true);
});
videoPlayer.addEventListener("pause", function() {
  return setPlayerPlaying(false);
});
videoPlayer.addEventListener("timeupdate", updatePlayerProgress);
videoPlayer.addEventListener("loadedmetadata", updatePlayerProgress);
videoPlayer.addEventListener("ended", function() {
  var _a2;
  saveProgress();
  const active = state.activeVideo;
  if (!active || active.episodeIndex === null || !((_a2 = active.item.seasons) == null ? void 0 : _a2.length)) return;
  const target = nextEpisodeTarget(active);
  if (!target) {
    showToast("Voc\xEA chegou ao \xFAltimo epis\xF3dio dispon\xEDvel.", "success");
    return;
  }
  if (state.autoplay) {
    playNextEpisode(target);
  } else {
    showToast("Pr\xF3ximo epis\xF3dio dispon\xEDvel. Use o bot\xE3o de pr\xF3ximo epis\xF3dio no player.", "success");
  }
});
document.getElementById("player-shell").addEventListener("mousemove", scheduleControlsHide);
document.getElementById("player-shell").addEventListener("mouseleave", function() {
  if (!videoPlayer.paused && subtitleMenu.hidden) document.getElementById("player-shell").classList.add("controls-hidden");
});
musicAudio.addEventListener("ended", playNextTrack);
musicAudio.addEventListener("error", function() {
  if (musicAudio.getAttribute("src")) showToast("N\xE3o foi poss\xEDvel tocar esta m\xFAsica.", "error");
});
document.getElementById("music-close").addEventListener("click", stopMusic);
searchInput.addEventListener("input", function(event) {
  return handleSearch(event.target.value);
});
document.getElementById("search-form").addEventListener("submit", function(event) {
  event.preventDefault();
  handleSearch(searchInput.value);
});
document.getElementById("search-clear").addEventListener("click", function() {
  searchInput.value = "";
  handleSearch("");
  searchInput.focus();
});
document.addEventListener("change", function(event) {
  if (event.target.id === "sort-select") {
    state.sort = event.target.value;
    browseView();
    return;
  }
  const searchFilter = event.target.closest("[data-search-filter]");
  if (searchFilter) {
    const key = searchFilter.dataset.searchFilter;
    state.searchFilters[key] = key === "rating" ? Number(searchFilter.value) : searchFilter.value;
    handleSearch(state.query);
    return;
  }
  if (event.target.closest("[data-search-sort]")) {
    state.sort = event.target.value;
    handleSearch(state.query);
  }
});
document.addEventListener("click", function(event) {
  if (!event.target.closest("[data-search-reset]")) return;
  resetSearchFilters();
  if (state.query) handleSearch(state.query);
});
function isTypingTarget(target) {
  if (!(target instanceof Element)) return false;
  return Boolean(target.closest('input, textarea, select, [contenteditable="true"], [contenteditable=""]'));
}
function isTopDialog(dialog) {
  if (!dialog.open) return false;
  const openDialogs = document.querySelectorAll("dialog[open]");
  return openDialogs[openDialogs.length - 1] === dialog;
}
document.addEventListener("keydown", function(event) {
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    openSearch();
  }
  if (event.key === "/" && !isTypingTarget(event.target) && !document.querySelector("dialog[open]")) {
    event.preventDefault();
    openSearch();
  }
  const playerIsTop = isTopDialog(playerDialog);
  if (event.key === "Escape" && playerIsTop) {
    event.preventDefault();
    if (!subtitleMenu.hidden) closeSubtitleMenu();
    else closePlayer();
  }
  if (playerIsTop && !isTypingTarget(event.target)) {
    if (event.code === "Space" || event.key.toLowerCase() === "k") {
      event.preventDefault();
      togglePlay();
    }
    if (event.key === "ArrowRight" || event.key.toLowerCase() === "l") skip(10);
    if (event.key === "ArrowLeft" || event.key.toLowerCase() === "j") skip(-10);
    if (event.key.toLowerCase() === "m") toggleMute();
    if (event.key.toLowerCase() === "f") toggleFullscreen();
    if (event.key.toLowerCase() === "c") {
      event.preventDefault();
      if (subtitleMenu.hidden) openSubtitleMenu();
      else closeSubtitleMenu();
    }
    if (event.key.toLowerCase() === "b" && !playerBoostButton.hidden) {
      event.preventDefault();
      cycleAudioBoost();
    }
  }
});
function closeSidebar() {
  document.getElementById("sidebar").classList.remove("open");
  document.getElementById("sidebar-scrim").classList.remove("visible");
  document.getElementById("menu-button").setAttribute("aria-expanded", "false");
}
document.getElementById("menu-button").addEventListener("click", function() {
  document.getElementById("sidebar").classList.add("open");
  document.getElementById("sidebar-scrim").classList.add("visible");
  document.getElementById("menu-button").setAttribute("aria-expanded", "true");
});
document.getElementById("sidebar-close").addEventListener("click", closeSidebar);
document.getElementById("sidebar-scrim").addEventListener("click", closeSidebar);
const themeToggle = document.getElementById("theme-toggle");
const settingsDialog = document.getElementById("settings-dialog");
const settingsQuality = document.getElementById("settings-quality");
const autoplaySwitch = document.getElementById("settings-autoplay");
function setTheme(light) {
  document.body.classList.toggle("light-theme", light);
  storage.set("nexa-theme", light ? "light" : "dark");
  themeToggle.querySelector("span").textContent = light ? "Tema escuro" : "Tema claro";
  document.getElementById("settings-theme").textContent = light ? "Tema escuro" : "Tema claro";
}
function setAutoplay(value) {
  state.autoplay = value;
  storage.set("nexa-autoplay", value);
  autoplaySwitch.setAttribute("aria-checked", String(value));
}
function openSettings() {
  notificationsPopover.hidden = true;
  profilePopover.hidden = true;
  notificationButton.setAttribute("aria-expanded", "false");
  profileButton.setAttribute("aria-expanded", "false");
  document.getElementById("profile-button").setAttribute("aria-expanded", "false");
  settingsQuality.value = state.quality;
  autoplaySwitch.setAttribute("aria-checked", String(state.autoplay));
  document.getElementById("settings-theme").textContent = document.body.classList.contains("light-theme") ? "Tema escuro" : "Tema claro";
  updateDriveSettingsUI();
  updateLocalSettingsUI();
  settingsDialog.showModal();
  document.body.classList.add("modal-open");
}
themeToggle.addEventListener("click", function() {
  return setTheme(!document.body.classList.contains("light-theme"));
});
document.getElementById("settings-theme").addEventListener("click", function() {
  return setTheme(!document.body.classList.contains("light-theme"));
});
autoplaySwitch.addEventListener("click", function() {
  return setAutoplay(!state.autoplay);
});
settingsQuality.addEventListener("change", function() {
  return setQuality(settingsQuality.value);
});
document.getElementById("drive-nav").addEventListener("click", function() {
  closeSidebar();
  openSettings();
  window.setTimeout(function() {
    var _a2, _b2;
    (_a2 = document.querySelector(".drive-settings")) == null ? void 0 : _a2.scrollIntoView({ block: "start" });
    (_b2 = document.getElementById("drive-folder")) == null ? void 0 : _b2.focus({ preventScroll: true });
  }, 60);
});
document.getElementById("drive-connect").addEventListener("click", connectDrive);
document.getElementById("drive-disconnect").addEventListener("click", disconnectDrive);
document.getElementById("local-nav").addEventListener("click", function() {
  closeSidebar();
  openSettings();
  window.setTimeout(function() {
    var _a2, _b2;
    (_a2 = document.querySelector(".local-settings")) == null ? void 0 : _a2.scrollIntoView({ block: "start" });
    (_b2 = document.getElementById("local-root")) == null ? void 0 : _b2.focus({ preventScroll: true });
  }, 60);
});
document.getElementById("local-scan").addEventListener("click", scanLocalLibrary);
(_a = document.getElementById("local-scan-full")) == null ? void 0 : _a.addEventListener("click", rescanLocalLibrary);
document.getElementById("local-server").addEventListener("change", function(event) {
  const value = String(event.target.value || "").trim().replace(/\/+$/, "");
  if (value) storage.set("nexa-local-server", value);
  else storage.set("nexa-local-server", "");
  updateLocalSettingsUI();
  showToast(value ? `Servidor local: ${value}` : "Usando o endere\xE7o padr\xE3o do servidor local.", "success");
});
document.getElementById("omdb-settings-save").addEventListener("click", function() {
  return __async(null, null, function* () {
    const status = document.getElementById("omdb-settings-status");
    const payload = { omdbApiKey: document.getElementById("omdb-api-key").value.trim() };
    status.textContent = "Salvando...";
    try {
      const response = yield fetch(localApi("/api/local/omdb/settings"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const data = yield response.json().catch(function() {
        return {};
      });
      if (!response.ok) throw new Error(data.error || `HTTP ${response.status}`);
      status.textContent = data.hasOmdbKey ? "Chave salva no servidor local. Use \u201CAtualizar metadados\u201D para aplicar aos filmes." : "Chave removida.";
      state.localConfig.hasOmdbKey = Boolean(data.hasOmdbKey);
      updateLocalSettingsUI();
      showToast("Chave do OMDb salva.", "success");
    } catch (error) {
      status.textContent = error.message || "N\xE3o foi poss\xEDvel salvar a chave.";
    }
  });
});
document.getElementById("local-omdb-enrich").addEventListener("click", function() {
  return __async(null, null, function* () {
    const button = document.getElementById("local-omdb-enrich");
    button.disabled = true;
    setLocalStatus("Atualizando metadados no OMDb...");
    try {
      const response = yield fetch(localApi("/api/local/omdb/enrich"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({})
      });
      const data = yield response.json().catch(function() {
        return {};
      });
      if (!response.ok) throw new Error(data.error || `HTTP ${response.status}`);
      showToast(`Metadados atualizados em ${data.updated || 0} filmes.`, "success");
      yield loadLocalLibrary({ silent: true });
    } catch (error) {
      setLocalStatus(error.message || "Falha ao atualizar metadados.", "error");
      showToast("N\xE3o foi poss\xEDvel atualizar os metadados.", "error");
    } finally {
      button.disabled = false;
    }
  });
});
document.getElementById("subtitle-settings-save").addEventListener("click", function() {
  return __async(null, null, function* () {
    const status = document.getElementById("subtitle-settings-status");
    const payload = {
      subtitleApiKey: document.getElementById("subtitle-api-key").value.trim(),
      subtitleUser: document.getElementById("subtitle-user").value.trim(),
      subtitlePassword: document.getElementById("subtitle-password").value
    };
    status.textContent = "Salvando...";
    try {
      const response = yield fetch(localApi("/api/local/subtitle/settings"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const data = yield response.json().catch(function() {
        return {};
      });
      if (!response.ok) throw new Error(data.error || `HTTP ${response.status}`);
      status.textContent = data.hasKey ? data.hasUser ? "Chave e login salvos no servidor local. A busca online usa a API nova (v1) do OpenSubtitles." : "Chave salva no servidor local. A busca online usa a API antiga; informe usu\xE1rio e senha para usar a API nova." : "Chave removida. A busca online precisa da chave da API.";
      showToast("Credenciais de legendas salvas.", "success");
    } catch (error) {
      status.textContent = error.message || "N\xE3o foi poss\xEDvel salvar as chaves.";
    }
  });
});
document.getElementById("local-clear").addEventListener("click", disconnectLocal);
document.getElementById("local-root").addEventListener("keydown", function(event) {
  if (event.key !== "Enter") return;
  event.preventDefault();
  scanLocalLibrary();
});
["drive-folder", "drive-key"].forEach(function(id) {
  document.getElementById(id).addEventListener("keydown", function(event) {
    if (event.key !== "Enter") return;
    event.preventDefault();
    connectDrive();
  });
});
document.getElementById("settings-close").addEventListener("click", function() {
  return settingsDialog.close();
});
settingsDialog.addEventListener("close", function() {
  document.body.classList.remove("modal-open");
  document.getElementById("mini-profile-button").focus();
});
settingsDialog.addEventListener("click", function(event) {
  if (event.target === settingsDialog) settingsDialog.close();
});
(_b = document.getElementById("shortcuts-close")) == null ? void 0 : _b.addEventListener("click", closeShortcutsDialog);
shortcutsDialog == null ? void 0 : shortcutsDialog.addEventListener("click", function(event) {
  if (event.target === shortcutsDialog) closeShortcutsDialog();
});
shortcutsDialog == null ? void 0 : shortcutsDialog.addEventListener("close", function() {
  if (!document.querySelector("dialog[open]")) document.body.classList.remove("modal-open");
});
const notificationButton = document.getElementById("notification-button");
const notificationsPopover = document.getElementById("notifications-popover");
notificationButton.addEventListener("click", function(event) {
  event.stopPropagation();
  notificationsPopover.hidden = !notificationsPopover.hidden;
  profilePopover.hidden = true;
  notificationButton.setAttribute("aria-expanded", String(!notificationsPopover.hidden));
  document.getElementById("profile-button").setAttribute("aria-expanded", "false");
  document.getElementById("mini-profile-button").setAttribute("aria-expanded", "false");
});
function applyNotificationsRead(read) {
  document.querySelectorAll("[data-notification]").forEach(function(item) {
    return item.classList.toggle("read", read);
  });
  const dot = document.querySelector(".notification-dot");
  if (dot) dot.style.display = read ? "none" : "";
}
document.getElementById("mark-read").addEventListener("click", function() {
  applyNotificationsRead(true);
  storage.set("nexa-notifications-read", true);
  showToast("Notifica\xE7\xF5es marcadas como lidas", "success");
});
const profileButton = document.getElementById("mini-profile-button");
const profilePopover = document.getElementById("profile-popover");
const profilesDialog = document.getElementById("profiles-dialog");
const profilesManagerList = document.getElementById("profiles-manager-list");
const profileForm = document.getElementById("profile-form");
const profileNameInput = document.getElementById("profile-name-input");
const profilePinInput = document.getElementById("profile-pin-input");
const profileColorInput = document.getElementById("profile-color-input");
const profileKidsToggle = document.getElementById("profile-kids-toggle");
const profileSaveButton = document.getElementById("profile-save");
const profileCancelButton = document.getElementById("profile-cancel");
const profileFormNote = document.getElementById("profile-form-note");
const pinDialog = document.getElementById("pin-dialog");
const pinForm = document.getElementById("pin-form");
const pinInput = document.getElementById("pin-input");
const pinError = document.getElementById("pin-error");
let editingProfileId = null;
let formKids = false;
let pinRequest = null;
function profileMeta(profile) {
  const bits = [];
  if (profile.id === profiles[0].id) bits.push("Perfil principal");
  bits.push(profile.kids ? "Infantil" : "Adulto");
  if (profile.pin) bits.push("PIN ativo");
  return bits.join(" \xB7 ");
}
function updateProfileUI() {
  const profile = activeProfile();
  if (!profile) return;
  document.querySelectorAll('[data-view="musica"]').forEach(function(element) {
    element.hidden = Boolean(profile.kids);
  });
  const initials = profileInitials(profile.name);
  const meta = profile.kids ? "Perfil infantil" : profile.id === profiles[0].id ? "Perfil principal" : "Perfil";
  document.getElementById("profile-avatar").textContent = initials;
  document.getElementById("profile-avatar").style.background = profile.color;
  document.getElementById("profile-name").textContent = profile.name;
  document.getElementById("profile-subtitle").textContent = meta;
  profileButton.textContent = initials;
  profileButton.style.background = profile.color;
  document.getElementById("popover-avatar").textContent = initials;
  document.getElementById("popover-avatar").style.background = profile.color;
  document.getElementById("popover-name").textContent = profile.name;
  document.getElementById("popover-subtitle").textContent = meta;
  renderProfileSwitcher();
}
function renderProfileSwitcher() {
  const list = document.getElementById("profile-switch-list");
  list.innerHTML = profiles.map(function(profile) {
    const active = profile.id === activeProfileId;
    return `<button class="profile-switch-item ${active ? "active" : ""}" type="button" data-profile-switch="${profile.id}" aria-pressed="${active}">
      <span class="avatar small" style="background:${profile.color}">${profileInitials(profile.name)}</span>
      <span class="profile-switch-copy"><strong>${escapeHtml(profile.name)}</strong><small>${profile.kids ? "Infantil" : "Perfil"}${profile.pin ? " \xB7 PIN" : ""}</small></span>
      ${active ? icon("check") : ""}
    </button>`;
  }).join("");
}
function loadProfileState(profile) {
  state.list = new Set(profile.list || []);
  state.liked = new Set(profile.liked || []);
  state.progress = __spreadValues({}, profile.progress || {});
  document.getElementById("list-count").textContent = state.list.size;
}
function applyProfileSwitch(profile) {
  if (!profile) return;
  persistActiveProfile();
  activeProfileId = profile.id;
  loadProfileState(profile);
  state.genre = "Todos";
  state.query = "";
  state.view = state.view === "busca" ? state.previousView || "home" : state.view;
  if (profile.kids) {
    if (!musicPlayerBar.hidden) stopMusic();
    state.activeAlbum = null;
    if (state.view === "musica") state.view = "home";
  }
  searchInput.value = "";
  searchBox.classList.remove("has-value");
  if (detailsDialog.open) detailsDialog.close();
  if (playerDialog.open) closePlayer();
  saveProfiles();
  updateProfileUI();
  updateActiveNavigation();
  refreshCurrentView();
  showToast(`Agora voc\xEA est\xE1 no perfil de ${profile.name}`, "success");
}
function switchProfile(id) {
  const target = profiles.find(function(profile) {
    return profile.id === id;
  });
  if (!target) return;
  profilePopover.hidden = true;
  if (target.id === activeProfileId) return;
  const current = activeProfile();
  if ((current == null ? void 0 : current.kids) && current.pin) {
    requestPin("Digite o PIN do perfil infantil para trocar de perfil.", current.pin).then(function(ok) {
      if (ok) applyProfileSwitch(target);
    });
    return;
  }
  applyProfileSwitch(target);
}
function requestPin(message, expected) {
  return new Promise(function(resolve) {
    if (pinRequest) {
      pinRequest.resolve(false);
      pinRequest = null;
    }
    pinRequest = { resolve, expected };
    document.getElementById("pin-message").textContent = message;
    pinInput.value = "";
    pinError.hidden = true;
    if (!pinDialog.open) pinDialog.showModal();
    document.body.classList.add("modal-open");
    window.setTimeout(function() {
      return pinInput.focus();
    }, 40);
  });
}
function finishPin(result) {
  if (!pinRequest) return;
  const { resolve } = pinRequest;
  pinRequest = null;
  if (pinDialog.open) pinDialog.close();
  document.body.classList.remove("modal-open");
  resolve(result);
}
pinForm.addEventListener("submit", function(event) {
  event.preventDefault();
  const value = pinInput.value.trim();
  if (value && value === (pinRequest == null ? void 0 : pinRequest.expected)) {
    finishPin(true);
  } else {
    pinError.hidden = false;
    pinInput.value = "";
    pinInput.focus();
  }
});
pinInput.addEventListener("input", function() {
  pinInput.value = pinInput.value.replace(/\D/g, "").slice(0, 4);
});
document.getElementById("pin-cancel").addEventListener("click", function() {
  return finishPin(false);
});
pinDialog.addEventListener("close", function() {
  document.body.classList.remove("modal-open");
  if (pinRequest) {
    const { resolve } = pinRequest;
    pinRequest = null;
    resolve(false);
  }
});
function setProfileFormNote(message, type = "") {
  profileFormNote.textContent = message;
  profileFormNote.className = `settings-note${type ? ` is-${type}` : ""}`;
}
function resetProfileForm() {
  editingProfileId = null;
  formKids = false;
  profileForm.reset();
  profileColorInput.value = PROFILE_COLORS[profiles.length % PROFILE_COLORS.length];
  profileKidsToggle.setAttribute("aria-checked", "false");
  document.getElementById("profile-form-title").textContent = "Novo perfil";
  profileSaveButton.textContent = "Adicionar perfil";
  profileCancelButton.hidden = true;
  setProfileFormNote("");
}
function renderProfilesManager() {
  profilesManagerList.innerHTML = profiles.map(function(profile) {
    const active = profile.id === activeProfileId;
    return `<div class="profile-manage-row ${active ? "active" : ""}">
      <span class="avatar" style="background:${profile.color}">${profileInitials(profile.name)}</span>
      <div class="profile-manage-copy"><strong>${escapeHtml(profile.name)}${active ? ' <span class="profile-current">Em uso</span>' : ""}</strong><small>${profileMeta(profile)}</small></div>
      ${profile.kids ? `<span class="profile-badge">${icon("lock")} Infantil</span>` : ""}
      <div class="profile-manage-actions">
        <button class="button button-secondary" type="button" data-profile-edit="${profile.id}">Editar</button>
        <button class="button button-ghost" type="button" data-profile-delete="${profile.id}" ${profiles.length === 1 ? "disabled" : ""}>Excluir</button>
      </div>
    </div>`;
  }).join("");
}
function showProfilesDialog() {
  profilePopover.hidden = true;
  resetProfileForm();
  renderProfilesManager();
  if (!profilesDialog.open) profilesDialog.showModal();
  document.body.classList.add("modal-open");
  window.setTimeout(function() {
    return profileNameInput.focus();
  }, 60);
}
function openProfilesDialog() {
  const current = activeProfile();
  if ((current == null ? void 0 : current.kids) && current.pin) {
    requestPin("Digite o PIN para gerenciar os perfis.", current.pin).then(function(ok) {
      if (ok) showProfilesDialog();
    });
    return;
  }
  showProfilesDialog();
}
function editProfile(id) {
  const profile = profiles.find(function(candidate) {
    return candidate.id === id;
  });
  if (!profile) return;
  editingProfileId = id;
  formKids = profile.kids;
  profileNameInput.value = profile.name;
  profilePinInput.value = profile.pin;
  profileColorInput.value = profile.color;
  profileKidsToggle.setAttribute("aria-checked", String(profile.kids));
  document.getElementById("profile-form-title").textContent = "Editar perfil";
  profileSaveButton.textContent = "Salvar altera\xE7\xF5es";
  profileCancelButton.hidden = false;
  setProfileFormNote("");
  profileNameInput.focus();
}
function deleteProfile(id) {
  if (profiles.length <= 1) return;
  const profile = profiles.find(function(candidate) {
    return candidate.id === id;
  });
  if (!profile) return;
  if (!window.confirm(`Excluir o perfil \u201C${profile.name}\u201D? Listas, curtidas e progresso ser\xE3o removidos.`)) return;
  const index = profiles.findIndex(function(candidate) {
    return candidate.id === id;
  });
  profiles.splice(index, 1);
  if (activeProfileId === id) {
    activeProfileId = profiles[0].id;
    loadProfileState(activeProfile());
    state.genre = "Todos";
    state.query = "";
    state.view = state.view === "busca" ? "home" : state.view;
    searchInput.value = "";
    searchBox.classList.remove("has-value");
    updateActiveNavigation();
    refreshCurrentView();
  }
  if (editingProfileId === id) resetProfileForm();
  saveProfiles();
  updateProfileUI();
  renderProfilesManager();
  showToast(`Perfil \u201C${profile.name}\u201D exclu\xEDdo`, "success");
}
profileKidsToggle.addEventListener("click", function() {
  formKids = !formKids;
  profileKidsToggle.setAttribute("aria-checked", String(formKids));
  if (!formKids) setProfileFormNote("");
});
profileForm.addEventListener("submit", function(event) {
  event.preventDefault();
  const name = profileNameInput.value.trim();
  if (!name) {
    setProfileFormNote("Informe um nome para o perfil.", "error");
    profileNameInput.focus();
    return;
  }
  const pin = profilePinInput.value.replace(/\D/g, "");
  if (pin && pin.length !== 4) {
    setProfileFormNote("O PIN deve ter exatamente 4 d\xEDgitos.", "error");
    profilePinInput.focus();
    return;
  }
  if (formKids && pin.length !== 4) {
    setProfileFormNote("Defina um PIN de 4 d\xEDgitos para o perfil infantil.", "error");
    profilePinInput.focus();
    return;
  }
  const color = profileColorInput.value;
  if (editingProfileId) {
    const profile = profiles.find(function(candidate) {
      return candidate.id === editingProfileId;
    });
    if (!profile) return;
    profile.name = name.slice(0, 32);
    profile.kids = formKids;
    profile.pin = pin;
    profile.color = color;
    saveProfiles();
    updateProfileUI();
    renderProfilesManager();
    if (profile.id === activeProfileId) {
      state.genre = "Todos";
      refreshCurrentView();
    }
    resetProfileForm();
    showToast("Perfil atualizado", "success");
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
  showToast(`Perfil de ${newProfile.name} criado`, "success");
});
profileCancelButton.addEventListener("click", resetProfileForm);
profilesManagerList.addEventListener("click", function(event) {
  const editButton = event.target.closest("[data-profile-edit]");
  if (editButton) {
    editProfile(editButton.dataset.profileEdit);
    return;
  }
  const deleteButton = event.target.closest("[data-profile-delete]");
  if (deleteButton) deleteProfile(deleteButton.dataset.profileDelete);
});
document.getElementById("profile-switch-list").addEventListener("click", function(event) {
  const button = event.target.closest("[data-profile-switch]");
  if (button) switchProfile(button.dataset.profileSwitch);
});
document.getElementById("profile-manage").addEventListener("click", openProfilesDialog);
document.getElementById("profiles-close").addEventListener("click", function() {
  return profilesDialog.close();
});
profilesDialog.addEventListener("click", function(event) {
  if (event.target === profilesDialog) profilesDialog.close();
});
profilesDialog.addEventListener("close", function() {
  document.body.classList.remove("modal-open");
  resetProfileForm();
});
function toggleProfilePopover() {
  profilePopover.hidden = !profilePopover.hidden;
  notificationsPopover.hidden = true;
  const expanded = String(!profilePopover.hidden);
  profileButton.setAttribute("aria-expanded", expanded);
  document.getElementById("profile-button").setAttribute("aria-expanded", expanded);
  notificationButton.setAttribute("aria-expanded", "false");
}
profileButton.addEventListener("click", function(event) {
  event.stopPropagation();
  toggleProfilePopover();
});
document.getElementById("profile-button").addEventListener("click", function(event) {
  event.stopPropagation();
  toggleProfilePopover();
});
document.getElementById("profile-preferences").addEventListener("click", openSettings);
document.getElementById("profile-logout").addEventListener("click", function() {
  profilePopover.hidden = true;
  showToast("Sess\xE3o encerrada. Este \xE9 um perfil de demonstra\xE7\xE3o.", "success");
});
document.addEventListener("click", function(event) {
  if (!event.target.closest(".popover") && !event.target.closest("#notification-button") && !event.target.closest("#mini-profile-button") && !event.target.closest("#profile-button")) {
    notificationsPopover.hidden = true;
    profilePopover.hidden = true;
    notificationButton.setAttribute("aria-expanded", "false");
    profileButton.setAttribute("aria-expanded", "false");
    document.getElementById("profile-button").setAttribute("aria-expanded", "false");
  }
});
document.addEventListener("error", function(event) {
  const image = event.target;
  if (!(image instanceof HTMLImageElement) || image.dataset.fallback) return;
  image.dataset.fallback = "true";
  image.src = fallbackArtwork;
}, true);
window.addEventListener("scroll", function() {
  const height = document.documentElement.scrollHeight - window.innerHeight;
  const percent = height > 0 ? window.scrollY / height * 100 : 0;
  document.getElementById("scroll-progress").style.width = `${percent}%`;
});
const installButton = document.getElementById("install-button");
let deferredInstallPrompt = null;
const isStandalone = ((_d = (_c = window.matchMedia) == null ? void 0 : _c.call(window, "(display-mode: standalone)")) == null ? void 0 : _d.matches) || window.navigator.standalone;
if (isStandalone) installButton.hidden = true;
window.addEventListener("beforeinstallprompt", function(event) {
  event.preventDefault();
  deferredInstallPrompt = event;
  installButton.hidden = false;
});
installButton.addEventListener("click", function() {
  return __async(null, null, function* () {
    if (!deferredInstallPrompt) return;
    deferredInstallPrompt.prompt();
    const choice = yield deferredInstallPrompt.userChoice;
    if (choice.outcome === "accepted") installButton.hidden = true;
    deferredInstallPrompt = null;
  });
});
window.addEventListener("appinstalled", function() {
  installButton.hidden = true;
  deferredInstallPrompt = null;
  showToast("NEXA instalado com sucesso!", "success");
});
window.addEventListener("offline", function() {
  return showToast("Voc\xEA est\xE1 offline. O conte\xFAdo em cache continua dispon\xEDvel.", "error");
});
window.addEventListener("online", function() {
  return showToast("Conex\xE3o restabelecida.", "success");
});
function registerServiceWorker() {
  if (!("serviceWorker" in navigator) || !/^https?:$/.test(window.location.protocol)) return;
  window.addEventListener("load", function() {
    navigator.serviceWorker.register("service-worker.js", { updateViaCache: "none" }).then(function(registration) {
      registration.addEventListener("updatefound", function() {
        const worker = registration.installing;
        if (!worker) return;
        worker.addEventListener("statechange", function() {
          if (worker.state === "installed" && navigator.serviceWorker.controller) {
            showToast("Nova vers\xE3o dispon\xEDvel. Recarregue para atualizar.", "success");
          }
        });
      });
    }).catch(function() {
    });
  });
}
registerServiceWorker();
setTheme(storage.get("nexa-theme", "dark") === "light");
setAutoplay(state.autoplay);
applyNotificationsRead(storage.get("nexa-notifications-read", false));
saveProfiles();
updateProfileUI();
document.getElementById("list-count").textContent = state.list.size;
updateActiveNavigation();
renderHome();
restoreDriveLibrary();
restoreLocalLibrary();
const deepLink = window.location.hash.match(/^#\/titulo\/([^/]+)$/);
if (deepLink) {
  const deepLinkItem = getItem(decodeURIComponent(deepLink[1]));
  if (deepLinkItem) openDetails(deepLinkItem.id);
}
window.setTimeout(function() {
  return document.getElementById("loading-screen").classList.add("hidden");
}, 650);
