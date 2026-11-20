var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && Symbol.iterator && o[Symbol.iterator];
    var i;
    if (m) i = m.call(o);
    else if (o && typeof o.next === "function") i = o;
    else return o;
    var r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && i["return"]) i["return"]();
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.next === "function") return o;
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var _a, _b, _c, _d;
var _this = this;
var catalog = [
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
        cast: ['Helena Teixeira', 'Miguel Costa', 'Rita Freire'],
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
var artworkAssets = {
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
var demoVideo = 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4';
catalog.forEach(function (item) {
    var assets = artworkAssets[item.id];
    if (!assets)
        return;
    item.poster = "https://image.tmdb.org/t/p/w780/".concat(assets[0]);
    item.backdrop = "https://image.tmdb.org/t/p/original/".concat(assets[1]);
    item.video = demoVideo;
});
var fallbackArtwork = "data:image/svg+xml;charset=utf-8,".concat(encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 600"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#2b2b2b"/><stop offset="1" stop-color="#0d0d0d"/></linearGradient></defs><rect width="400" height="600" fill="url(#g)"/><text x="200" y="320" fill="#e50914" font-family="Inter,Arial,sans-serif" font-size="76" font-weight="900" text-anchor="middle">N</text></svg>'));
var defaultProgress = {
    'a-cidade-do-eco': { percent: 38, seconds: 1280 },
    'orbita-vermelha': { percent: 67, seconds: 4960 },
    'herois-do-quarteirao': { percent: 19, seconds: 510 },
    'ultimo-trem': { percent: 82, seconds: 5520 }
};
var storage = {
    get: function (key, fallback) {
        try {
            var value = localStorage.getItem(key);
            return value ? JSON.parse(value) : fallback;
        }
        catch (_a) {
            return fallback;
        }
    },
    set: function (key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        }
        catch (_a) {
            return false;
        }
        return true;
    }
};
var PROFILE_COLORS = ['#e50914', '#f5a623', '#4f9cf9', '#39c07c', '#b06ef5', '#f06292', '#00bcd4', '#ff7043'];
var KIDS_MATURITY = new Set(['L', '10+', '12+']);
var PROFILES_KEY = 'nexa-profiles';
var ACTIVE_PROFILE_KEY = 'nexa-active-profile';
function profileInitials(name) {
    var parts = String(name || '').trim().split(/\s+/).filter(Boolean);
    if (!parts.length)
        return 'N';
    if (parts.length === 1)
        return parts[0].slice(0, 2).toUpperCase();
    return "".concat(parts[0][0]).concat(parts[parts.length - 1][0]).toUpperCase();
}
function normalizeProfile(raw, index) {
    if (index === void 0) { index = 0; }
    var source = raw && typeof raw === 'object' ? raw : {};
    var pin = String(source.pin || '').replace(/\D/g, '').slice(0, 4);
    var safeId = String(source.id || '').replace(/[^a-zA-Z0-9_-]/g, '').slice(0, 64);
    return {
        id: safeId || "perfil-".concat(Date.now(), "-").concat(index),
        name: String(source.name || 'Perfil').trim().slice(0, 32) || 'Perfil',
        kids: Boolean(source.kids),
        pin: pin.length === 4 ? pin : '',
        color: /^#[0-9a-f]{6}$/i.test(source.color || '') ? source.color : PROFILE_COLORS[index % PROFILE_COLORS.length],
        list: Array.isArray(source.list) ? source.list.filter(function (id) { return typeof id === 'string'; }) : [],
        liked: Array.isArray(source.liked) ? source.liked.filter(function (id) { return typeof id === 'string'; }) : [],
        progress: source.progress && typeof source.progress === 'object' && !Array.isArray(source.progress) ? __assign({}, source.progress) : {}
    };
}
function loadProfiles() {
    var saved = storage.get(PROFILES_KEY, null);
    if (Array.isArray(saved) && saved.length)
        return saved.map(normalizeProfile);
    var legacyList = storage.get('nexa-list', []);
    var legacyLiked = storage.get('nexa-liked', []);
    var legacyProgress = storage.get('nexa-progress', null);
    var progress = legacyProgress && typeof legacyProgress === 'object' && !Array.isArray(legacyProgress)
        ? __assign(__assign({}, defaultProgress), legacyProgress) : __assign({}, defaultProgress);
    return [normalizeProfile({
            id: 'principal',
            name: 'Cleber Leonheart',
            color: PROFILE_COLORS[0],
            list: legacyList,
            liked: legacyLiked,
            progress: progress
        })];
}
var profiles = loadProfiles();
var activeProfileId = storage.get(ACTIVE_PROFILE_KEY, profiles[0].id);
if (!profiles.some(function (profile) { return profile.id === activeProfileId; }))
    activeProfileId = profiles[0].id;
function activeProfile() {
    return profiles.find(function (profile) { return profile.id === activeProfileId; }) || profiles[0];
}
function saveProfiles() {
    storage.set(PROFILES_KEY, profiles);
    storage.set(ACTIVE_PROFILE_KEY, activeProfileId);
}
var state = {
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
    progress: __assign({}, activeProfile().progress),
    activeItem: null,
    activeSeason: 0,
    activeEpisode: 0,
    activeVideo: null,
    driveConfig: null,
    localConfig: null,
    musicAlbums: [],
    audioBoost: Number(storage.get('nexa-audio-boost', 1)) || 1,
    playbackRate: Number(storage.get('nexa-playback-rate', 1)) || 1,
    activeAlbum: null,
    activeTrackIndex: -1,
    hideControlsTimer: null
};
function persistActiveProfile() {
    var profile = activeProfile();
    if (!profile)
        return;
    profile.list = __spreadArray([], __read(state.list), false);
    profile.liked = __spreadArray([], __read(state.liked), false);
    profile.progress = __assign({}, state.progress);
    saveProfiles();
}
var subtitleStore = new Map();
var activeSubtitleId = null;
var subtitleObjectUrls = [];
var subtitleCounter = 0;
function currentCatalog() {
    var _a;
    if (!((_a = activeProfile()) === null || _a === void 0 ? void 0 : _a.kids))
        return catalog;
    return catalog.filter(function (item) { return KIDS_MATURITY.has(item.maturity); });
}
function isAllowedItem(item) {
    var _a;
    if (!item)
        return false;
    if (!((_a = activeProfile()) === null || _a === void 0 ? void 0 : _a.kids))
        return true;
    return KIDS_MATURITY.has(item.maturity);
}
var icons = {
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
var mainContent = document.getElementById('main-content');
var detailsDialog = document.getElementById('details-dialog');
var playerDialog = document.getElementById('player-dialog');
var videoPlayer = document.getElementById('video-player');
var subtitleMenu = document.getElementById('subtitle-menu');
var subtitleMenuList = document.getElementById('subtitle-menu-list');
var subtitleButton = document.getElementById('player-subtitles');
var subtitleFileInput = document.getElementById('subtitle-file');
var subtitleSearchDialog = document.getElementById('subtitle-search-dialog');
var subtitleSearchInput = document.getElementById('subtitle-search-query');
var subtitleResults = document.getElementById('subtitle-results');
var subtitleSearchOpen = document.getElementById('subtitle-search-open');
var subtitleSaveHd = document.getElementById('subtitle-save-hd');
var playerBoostButton = document.getElementById('player-boost');
var playerBoostLabel = document.getElementById('player-boost-label');
var playerSpeedButton = document.getElementById('player-speed');
var playerSpeedLabel = document.getElementById('player-speed-label');
var playerPipButton = document.getElementById('player-pip');
var shortcutsDialog = document.getElementById('shortcuts-dialog');
var searchInput = document.getElementById('search-input');
var searchBox = document.querySelector('.search-box');
var toastRegion = document.getElementById('toast-region');
var musicPlayerBar = document.getElementById('music-player-bar');
var musicAudio = document.getElementById('music-audio');
var musicCover = document.getElementById('music-cover');
var musicTitle = document.getElementById('music-title');
var musicArtist = document.getElementById('music-artist');
var typeLabel = {
    filme: 'Filme',
    serie: 'Série',
    documentario: 'Documentário'
};
var DRIVE_API = 'https://www.googleapis.com/drive/v3/files';
var DRIVE_FOLDER_MIME = 'application/vnd.google-apps.folder';
var DRIVE_VIDEO_EXTENSIONS = new Set(['mp4', 'm4v', 'webm', 'ogv', 'ogg', 'mov', 'mkv', 'avi', 'wmv', 'flv', 'ts', 'm2ts']);
var DRIVE_BROWSER_EXTENSIONS = new Set(['mp4', 'm4v', 'webm', 'ogv', 'ogg']);
var DRIVE_SUBTITLE_EXTENSIONS = new Set(['srt', 'vtt']);
var DRIVE_IMAGE_EXTENSIONS = new Set(['jpg', 'jpeg', 'png', 'webp', 'avif', 'gif']);
var DRIVE_GENERIC_FOLDER = /^(filmes?|movies?|s[ée]ries?|series|shows?|tv|televis[aã]o|v[ií]deos?|videos?|m[ií]dia|media|meu drive|my drive|google drive|animes?|anima[cç][aã]o|document[aá]rios?|a[cç][aã]o|com[eé]dia|drama|terror|suspense|fic[cç][aã]o|romance|infantil|fam[ií]lia|familia)$/i;
var DRIVE_SERIES_HINT = /\b(s[ée]ries?|series|shows?|tv|televis[aã]o|animes?|novelas?)\b/i;
var driveLoading = false;
function driveFileExtension(name) {
    var match = String(name || '').match(/\.([a-z0-9]{2,5})$/i);
    return match ? match[1].toLowerCase() : '';
}
function isDriveFolder(file) {
    return (file === null || file === void 0 ? void 0 : file.mimeType) === DRIVE_FOLDER_MIME;
}
function isDriveVideo(file) {
    if (!file)
        return false;
    return String(file.mimeType || '').startsWith('video/') || DRIVE_VIDEO_EXTENSIONS.has(driveFileExtension(file.name));
}
function isDriveImage(file) {
    if (!file)
        return false;
    return String(file.mimeType || '').startsWith('image/') || DRIVE_IMAGE_EXTENSIONS.has(driveFileExtension(file.name));
}
function isDriveSubtitle(file) {
    if (!file)
        return false;
    return DRIVE_SUBTITLE_EXTENSIONS.has(driveFileExtension(file.name));
}
function subtitleLanguage(name) {
    var text = String(name || '').toLowerCase();
    if (/(^|[^a-z])(pt[- ]?br|ptbr)([^a-z]|$)/.test(text))
        return { code: 'pt-BR', label: 'Português (BR)' };
    if (/(^|[^a-z])(pt|por|portug[uê]es|portuguese)([^a-z]|$)/.test(text))
        return { code: 'pt', label: 'Português' };
    if (/(^|[^a-z])(en|eng|english|ingl[eê]s)([^a-z]|$)/.test(text))
        return { code: 'en', label: 'Inglês' };
    if (/(^|[^a-z])(es|spa|spanish|espanhol)([^a-z]|$)/.test(text))
        return { code: 'es', label: 'Espanhol' };
    if (/(^|[^a-z])(fr|fre|french|franc[eê]s)([^a-z]|$)/.test(text))
        return { code: 'fr', label: 'Francês' };
    if (/(^|[^a-z])(de|ger|german|alem[aã]o)([^a-z]|$)/.test(text))
        return { code: 'de', label: 'Alemão' };
    if (/(^|[^a-z])(it|ita|italian|italiano)([^a-z]|$)/.test(text))
        return { code: 'it', label: 'Italiano' };
    if (/(^|[^a-z])(ja|jp|japanese|japon[eê]s)([^a-z]|$)/.test(text))
        return { code: 'ja', label: 'Japonês' };
    return { code: '', label: '' };
}
function subtitleDisplayLabel(name) {
    var language = subtitleLanguage(name);
    var forced = /\bforced\b/i.test(name) ? ' forçada' : '';
    var sdh = /\b(sdh|cc)\b/i.test(name) ? ' SDH' : '';
    if (language.label)
        return "".concat(language.label).concat(forced).concat(sdh);
    return "".concat(splitDriveTitle(name).title || String(name || 'Legenda')).concat(forced).concat(sdh).trim();
}
function driveSubtitleCore(name) {
    var base = String(name || '').replace(/\.[a-z0-9]{2,5}$/i, '');
    var core = base
        .replace(/\[[^\]]*\]/g, ' ')
        .replace(/\b(2160p|1080p|720p|480p|4k|uhd|bluray|blu ray|brrip|bdrip|webrip|web dl|webdl|hdrip|dvdrip|remux|proper|repack|x264|x265|h264|h265|hevc|av1|aac|ac3|eac3|dts|dual audio|dublado|legendado)\b.*$/i, ' ');
    return normalizeDriveKey(core).replace(/-(?:pt-?br|ptbr|pt|por|portugues|portuguese|eng|en|english|ingles|spa|es|espanhol|spanish|fre|fr|french|frances|ger|de|german|alemao|ita|it|italian|italiano|ja|jp|japanese|japones)(?:-.*)?$/, '');
}
function findDriveSubtitles(videoFile, subtitles, apiKey) {
    var _a, _b;
    if (!videoFile || !subtitles.length)
        return [];
    var core = driveSubtitleCore(videoFile.name);
    if (!core)
        return [];
    var parentId = ((_b = (_a = videoFile.ancestors) === null || _a === void 0 ? void 0 : _a[videoFile.ancestors.length - 1]) === null || _b === void 0 ? void 0 : _b.id) || null;
    var matches = subtitles.filter(function (file) {
        var subCore = driveSubtitleCore(file.name);
        return subCore && (subCore === core || core.startsWith("".concat(subCore, "-")) || subCore.startsWith("".concat(core, "-")));
    });
    var sameFolder = matches.filter(function (file) { var _a, _b; return (((_b = (_a = file.ancestors) === null || _a === void 0 ? void 0 : _a[file.ancestors.length - 1]) === null || _b === void 0 ? void 0 : _b.id) || null) === parentId; });
    var chosen = sameFolder.length ? sameFolder : matches;
    return chosen.map(function (file) {
        var language = subtitleLanguage(file.name);
        return {
            id: "drive-sub-".concat(file.id),
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
    var normalized = String(text || '').replace(/^\uFEFF/, '').replace(/\r\n?/g, '\n').trim();
    if (!normalized)
        return '';
    if (/^WEBVTT/i.test(normalized))
        return "".concat(normalized, "\n");
    var cueText = normalized
        .replace(/(\d{2}:\d{2}:\d{2}),(\d{1,3})/g, function (_match, stamp, millis) { return "".concat(stamp, ".").concat(millis.padEnd(3, '0')); })
        .replace(/(\d{2}:\d{2}),(\d{1,3})/g, function (_match, stamp, millis) { return "00:".concat(stamp, ".").concat(millis.padEnd(3, '0')); });
    return "WEBVTT\n\n".concat(cueText, "\n");
}
function isBrowserVideo(file) {
    return DRIVE_BROWSER_EXTENSIONS.has(driveFileExtension(file === null || file === void 0 ? void 0 : file.name)) || ['video/mp4', 'video/webm', 'video/ogg'].includes(file === null || file === void 0 ? void 0 : file.mimeType);
}
function parseDriveFolderId(value) {
    var text = String(value || '').trim();
    if (!text)
        return null;
    var folderMatch = text.match(/(?:\/folders\/|\/drive\/u\/\d+\/folders\/)([A-Za-z0-9_-]{8,})/);
    if (folderMatch)
        return folderMatch[1];
    var idMatch = text.match(/[?&]id=([A-Za-z0-9_-]{8,})/);
    if (idMatch)
        return idMatch[1];
    if (/^[A-Za-z0-9_-]{8,}$/.test(text))
        return text;
    return null;
}
function splitDriveTitle(raw) {
    var name = String(raw || '').replace(/\.[a-z0-9]{2,5}$/i, '').replace(/[._]+/g, ' ').replace(/\s+/g, ' ').trim();
    var yearMatch = name.match(/\b(19\d{2}|20\d{2})\b/);
    var year = yearMatch ? Number(yearMatch[1]) : null;
    var title = name
        .replace(/\b(19\d{2}|20\d{2})\b/g, ' ')
        .replace(/\b(2160p|1080p|720p|480p|4k|uhd|bluray|blu ray|brrip|bdrip|webrip|web dl|webdl|hdrip|dvdrip|remux|proper|repack|x264|x265|h264|h265|hevc|av1|aac|ac3|eac3|dts|dual audio|dublado|legendado)\b.*$/i, ' ')
        .replace(/\[[^\]]*\]/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
    title = title.replace(/^[-–—\s]+|[-–—\s]+$/g, '');
    return { title: title || name || String(raw || ''), year: year };
}
function parseSeasonNumber(name) {
    var text = String(name || '').replace(/[._]+/g, ' ').trim();
    var match = text.match(/\b(?:temporada|season|temp)\s*(\d{1,2})\b/i);
    if (match)
        return Number(match[1]);
    match = text.match(/^\s*(\d{1,2})\s*[ªa]?\s*temporada\b/i);
    if (match)
        return Number(match[1]);
    match = text.match(/^\s*(?:t|s)(\d{1,2})\s*$/i);
    return match ? Number(match[1]) : null;
}
function parseEpisodeInfo(name) {
    var text = String(name || '').replace(/[._]+/g, ' ');
    var match = text.match(/\b(?:s|t)(\d{1,2})\s*[\s-]*e(\d{1,3})\b/i) || text.match(/\b(\d{1,2})x(\d{1,3})\b/i);
    if (match)
        return { season: Number(match[1]), episode: Number(match[2]), explicit: true };
    match = text.match(/\b(?:epis[oó]dio|episode|ep|cap[ií]tulo)\s*(\d{1,3})\b/i);
    if (match)
        return { season: null, episode: Number(match[1]), explicit: true };
    match = text.match(/\bE(\d{1,3})\b/i);
    if (match)
        return { season: null, episode: Number(match[1]), explicit: true };
    return { season: null, episode: null, explicit: false };
}
function parseLooseEpisodeNumber(name) {
    var e_1, _a;
    var strict = parseEpisodeInfo(name);
    if (strict.episode !== null)
        return strict.episode;
    var text = String(name || '').replace(/\.[a-z0-9]{2,5}$/i, '').replace(/[._]+/g, ' ');
    var matches = text.matchAll(/(?:^|[-–—\s(])(\d{1,3})(?=\s|[-–—.)\]]|$)/g);
    try {
        for (var matches_1 = __values(matches), matches_1_1 = matches_1.next(); !matches_1_1.done; matches_1_1 = matches_1.next()) {
            var match = matches_1_1.value;
            var number = Number(match[1]);
            if (number < 1)
                continue;
            if (number >= 1900 && number <= 2099)
                continue;
            if ([264, 265, 480, 576, 720, 1080, 2160].includes(number))
                continue;
            return number;
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (matches_1_1 && !matches_1_1.done && (_a = matches_1.return)) _a.call(matches_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return null;
}
function cleanEpisodeTitle(raw, episodeNumber) {
    var base = splitDriveTitle(raw).title;
    var title = base
        .replace(/\b(?:s|t)\d{1,2}\s*[\s-]*e\d{1,3}\b/ig, ' ')
        .replace(/\b\d{1,2}x\d{1,3}\b/ig, ' ')
        .replace(/\b(?:epis[oó]dio|episode|ep|cap[ií]tulo)\s*\d{1,3}\b/ig, ' ')
        .replace(/\b(?:t|s)\d{1,2}\b/ig, ' ')
        .replace(/\bE\d{1,3}\b/ig, ' ')
        .replace(/^\s*\d{1,3}\s*[-–—.)]\s*/, ' ');
    if (episodeNumber !== null && episodeNumber !== undefined) {
        title = title.replace(new RegExp("(?:^|[-\u2013\u2014\\s])0*".concat(episodeNumber, "(?=\\s|[-\u2013\u2014.)]|$)")), ' ');
    }
    title = title.replace(/\s+/g, ' ').trim();
    return title || "Epis\u00F3dio ".concat(episodeNumber || '').trim();
}
function formatDriveDuration(seconds) {
    if (!Number.isFinite(seconds) || seconds <= 0)
        return '';
    var total = Math.round(seconds);
    var hours = Math.floor(total / 3600);
    var minutes = Math.round((total % 3600) / 60);
    return hours ? "".concat(hours, "h ").concat(String(minutes).padStart(2, '0'), "min") : "".concat(Math.max(1, minutes), "min");
}
function driveThumbnail(fileId, size) {
    if (size === void 0) { size = 780; }
    return "https://drive.google.com/thumbnail?id=".concat(encodeURIComponent(fileId), "&sz=w").concat(size);
}
function driveMediaUrl(fileId, apiKey) {
    return "https://www.googleapis.com/drive/v3/files/".concat(encodeURIComponent(fileId), "?alt=media&key=").concat(encodeURIComponent(apiKey), "&supportsAllDrives=true");
}
function driveDownloadUrl(fileId) {
    return "https://drive.google.com/uc?export=download&id=".concat(encodeURIComponent(fileId));
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
    var inFolder = images.filter(function (image) { var _a; return (_a = image.ancestors) === null || _a === void 0 ? void 0 : _a.some(function (ancestor) { return ancestor.id === folderId; }); });
    var artwork = inFolder.find(function (image) { return /^(poster|folder|cover|fanart|backdrop)/i.test(image.name); }) || inFolder[0];
    var imageId = (artwork === null || artwork === void 0 ? void 0 : artwork.id) || fallbackFileId;
    return {
        poster: driveThumbnail(imageId, 780),
        backdrop: driveThumbnail(imageId, 1280)
    };
}
function buildDriveCatalog(files, rootName, apiKey) {
    var videos = files.filter(isDriveVideo);
    var images = files.filter(isDriveImage);
    var subtitles = files.filter(isDriveSubtitle);
    var movieItems = [];
    var seriesMap = new Map();
    var rootIsSeries = DRIVE_SERIES_HINT.test(rootName || '');
    videos.forEach(function (file) {
        var _a, _b, _c, _d;
        var ancestors = file.ancestors || [];
        var names = ancestors.map(function (ancestor) { return ancestor.name; });
        var seasonFolderIndex = -1;
        names.forEach(function (name, index) {
            if (parseSeasonNumber(name) !== null)
                seasonFolderIndex = index;
        });
        var episodeInfo = parseEpisodeInfo(file.name);
        var pathText = __spreadArray(__spreadArray([], __read(names), false), [file.name], false).join('/');
        var isSeries = rootIsSeries || DRIVE_SERIES_HINT.test(pathText) || seasonFolderIndex >= 0 || episodeInfo.explicit;
        if (!isSeries) {
            var parent_1 = ancestors[ancestors.length - 1] || null;
            var usableParent = parent_1 && !DRIVE_GENERIC_FOLDER.test(parent_1.name) ? parent_1 : null;
            var folderTitle = usableParent ? splitDriveTitle(usableParent.name) : { title: null, year: null };
            var fileTitle = splitDriveTitle(file.name);
            var title = folderTitle.title || fileTitle.title;
            var modifiedYear = file.modifiedTime ? new Date(file.modifiedTime).getFullYear() : null;
            var year = folderTitle.year || fileTitle.year || modifiedYear || new Date().getFullYear();
            var durationSeconds = ((_a = file.videoMediaMetadata) === null || _a === void 0 ? void 0 : _a.durationMillis) ? Number(file.videoMediaMetadata.durationMillis) / 1000 : null;
            var art = pickDriveArtwork(images, (parent_1 === null || parent_1 === void 0 ? void 0 : parent_1.id) || file.id, file.id);
            movieItems.push({
                id: "drive-file-".concat(file.id),
                title: title,
                type: 'filme',
                year: year,
                duration: formatDriveDuration(durationSeconds) || 'Duração não informada',
                maturity: 'L',
                match: 95,
                rating: '—',
                genres: ['Google Drive'],
                description: "\u201C".concat(title, "\u201D est\u00E1 na sua biblioteca do Google Drive."),
                cast: [],
                director: 'Biblioteca pessoal',
                poster: art.poster,
                backdrop: art.backdrop,
                video: driveMediaUrl(file.id, apiKey || ''),
                drive: true,
                driveFileId: file.id,
                driveName: file.name,
                driveFolderId: (parent_1 === null || parent_1 === void 0 ? void 0 : parent_1.id) || null,
                playable: isBrowserVideo(file),
                subtitles: findDriveSubtitles(file, subtitles, apiKey),
                new: true
            });
            return;
        }
        var seriesRoot = null;
        var hintIndex = names.findIndex(function (name) { return DRIVE_SERIES_HINT.test(name); });
        if (hintIndex >= 0)
            seriesRoot = ancestors[hintIndex + 1] || null;
        if (!seriesRoot && seasonFolderIndex > 0)
            seriesRoot = ancestors[seasonFolderIndex - 1];
        if (!seriesRoot && seasonFolderIndex < 0 && episodeInfo.explicit && ancestors.length)
            seriesRoot = ancestors[0];
        if (!seriesRoot && seasonFolderIndex < 0)
            seriesRoot = ancestors[ancestors.length - 1] || null;
        var rawSeriesName = (seriesRoot === null || seriesRoot === void 0 ? void 0 : seriesRoot.name) || splitDriveTitle(file.name).title || rootName || 'Série';
        var key = (seriesRoot === null || seriesRoot === void 0 ? void 0 : seriesRoot.id) || "name:".concat(normalizeDriveKey(rawSeriesName));
        if (!seriesMap.has(key)) {
            var seriesMeta = splitDriveTitle(rawSeriesName);
            seriesMap.set(key, {
                root: seriesRoot,
                name: seriesMeta.title,
                year: seriesMeta.year,
                seasons: new Map()
            });
        }
        var entry = seriesMap.get(key);
        var seasonNumber = (_c = (_b = episodeInfo.season) !== null && _b !== void 0 ? _b : (seasonFolderIndex >= 0 ? parseSeasonNumber(names[seasonFolderIndex]) : null)) !== null && _c !== void 0 ? _c : 1;
        var episodeNumber = (_d = episodeInfo.episode) !== null && _d !== void 0 ? _d : parseLooseEpisodeNumber(file.name);
        if (!entry.seasons.has(seasonNumber))
            entry.seasons.set(seasonNumber, []);
        entry.seasons.get(seasonNumber).push({ file: file, episodeNumber: episodeNumber, title: null });
    });
    var seriesItems = __spreadArray([], __read(seriesMap.values()), false).map(function (entry) {
        var _a, _b, _c;
        var seasons = __spreadArray([], __read(entry.seasons.entries()), false).sort(function (_a, _b) {
            var _c = __read(_a, 1), a = _c[0];
            var _d = __read(_b, 1), b = _d[0];
            return a - b;
        })
            .map(function (_a) {
            var _b = __read(_a, 2), seasonNumber = _b[0], rawEpisodes = _b[1];
            var episodes = __spreadArray([], __read(rawEpisodes), false).sort(function (a, b) {
                if (a.episodeNumber == null && b.episodeNumber == null)
                    return a.file.name.localeCompare(b.file.name, 'pt-BR');
                if (a.episodeNumber == null)
                    return 1;
                if (b.episodeNumber == null)
                    return -1;
                return a.episodeNumber - b.episodeNumber || a.file.name.localeCompare(b.file.name, 'pt-BR');
            });
            var nextNumber = 1;
            episodes.forEach(function (episode) {
                if (episode.episodeNumber == null) {
                    while (episodes.some(function (candidate) { return candidate.episodeNumber === nextNumber; }))
                        nextNumber += 1;
                    episode.episodeNumber = nextNumber;
                }
                nextNumber = Math.max(nextNumber, episode.episodeNumber + 1);
                episode.title = cleanEpisodeTitle(episode.file.name, episode.episodeNumber);
            });
            var episodeFiles = episodes.map(function (episode) {
                var _a;
                var durationSeconds = ((_a = episode.file.videoMediaMetadata) === null || _a === void 0 ? void 0 : _a.durationMillis) ? Number(episode.file.videoMediaMetadata.durationMillis) / 1000 : null;
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
                name: "Temporada ".concat(seasonNumber),
                episodes: episodeFiles.map(function (episode) { return episode.title; }),
                episodeFiles: episodeFiles
            };
        });
        var allEpisodes = seasons.flatMap(function (season) { return season.episodeFiles; });
        var firstEpisode = allEpisodes[0];
        var art = pickDriveArtwork(images, ((_a = entry.root) === null || _a === void 0 ? void 0 : _a.id) || (firstEpisode === null || firstEpisode === void 0 ? void 0 : firstEpisode.fileId), firstEpisode === null || firstEpisode === void 0 ? void 0 : firstEpisode.fileId);
        var year = entry.year || ((firstEpisode === null || firstEpisode === void 0 ? void 0 : firstEpisode.modifiedTime) ? new Date(firstEpisode.modifiedTime).getFullYear() : null) || new Date().getFullYear();
        return {
            id: "drive-series-".concat(((_b = entry.root) === null || _b === void 0 ? void 0 : _b.id) || normalizeDriveKey(entry.name)),
            title: entry.name,
            type: 'serie',
            year: year,
            duration: "".concat(seasons.length, " temporada").concat(seasons.length === 1 ? '' : 's'),
            maturity: 'L',
            match: 96,
            rating: '—',
            genres: ['Google Drive'],
            description: "S\u00E9rie com ".concat(allEpisodes.length, " epis\u00F3dio").concat(allEpisodes.length === 1 ? '' : 's', " na sua biblioteca do Google Drive."),
            cast: [],
            director: 'Biblioteca pessoal',
            poster: art.poster,
            backdrop: art.backdrop,
            video: (firstEpisode === null || firstEpisode === void 0 ? void 0 : firstEpisode.video) || '',
            seasons: seasons,
            drive: true,
            driveFolderId: ((_c = entry.root) === null || _c === void 0 ? void 0 : _c.id) || null,
            playable: allEpisodes.some(function (episode) { return episode.playable; }),
            new: true
        };
    });
    return __spreadArray(__spreadArray([], __read(seriesItems), false), __read(movieItems), false);
}
function listDriveFolder(folderId, apiKey) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var files, pageToken, url, safeFolderId, response, payload, error, data;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    files = [];
                    pageToken = null;
                    _b.label = 1;
                case 1:
                    url = new URL(DRIVE_API);
                    safeFolderId = String(folderId).replace(/'/g, "\\'");
                    url.searchParams.set('q', "'".concat(safeFolderId, "' in parents and trashed = false"));
                    url.searchParams.set('key', apiKey);
                    url.searchParams.set('fields', 'nextPageToken,files(id,name,mimeType,size,modifiedTime,videoMediaMetadata(durationMillis,width,height))');
                    url.searchParams.set('pageSize', '1000');
                    url.searchParams.set('supportsAllDrives', 'true');
                    url.searchParams.set('includeItemsFromAllDrives', 'true');
                    if (pageToken)
                        url.searchParams.set('pageToken', pageToken);
                    return [4 /*yield*/, fetch(url.toString(), { cache: 'no-store' })];
                case 2:
                    response = _b.sent();
                    if (!!response.ok) return [3 /*break*/, 4];
                    return [4 /*yield*/, response.json().catch(function () { return null; })];
                case 3:
                    payload = _b.sent();
                    error = new Error(((_a = payload === null || payload === void 0 ? void 0 : payload.error) === null || _a === void 0 ? void 0 : _a.message) || "HTTP ".concat(response.status));
                    error.status = response.status;
                    throw error;
                case 4: return [4 /*yield*/, response.json()];
                case 5:
                    data = _b.sent();
                    files.push.apply(files, __spreadArray([], __read((data.files || [])), false));
                    pageToken = data.nextPageToken || null;
                    _b.label = 6;
                case 6:
                    if (pageToken) return [3 /*break*/, 1];
                    _b.label = 7;
                case 7: return [2 /*return*/, files];
            }
        });
    });
}
function getDriveFolderMeta(folderId, apiKey) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var url, response, payload, error;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    url = new URL("".concat(DRIVE_API, "/").concat(encodeURIComponent(folderId)));
                    url.searchParams.set('key', apiKey);
                    url.searchParams.set('fields', 'id,name');
                    url.searchParams.set('supportsAllDrives', 'true');
                    return [4 /*yield*/, fetch(url.toString(), { cache: 'no-store' })];
                case 1:
                    response = _b.sent();
                    if (!!response.ok) return [3 /*break*/, 3];
                    return [4 /*yield*/, response.json().catch(function () { return null; })];
                case 2:
                    payload = _b.sent();
                    error = new Error(((_a = payload === null || payload === void 0 ? void 0 : payload.error) === null || _a === void 0 ? void 0 : _a.message) || "HTTP ".concat(response.status));
                    error.status = response.status;
                    throw error;
                case 3: return [2 /*return*/, response.json()];
            }
        });
    });
}
function walkDriveFolder(folderId, ancestors, account, config) {
    return __awaiter(this, void 0, void 0, function () {
        var children, children_1, children_1_1, child, e_2_1;
        var e_2, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (account.folders >= 120 || account.files.length >= 2000)
                        return [2 /*return*/];
                    return [4 /*yield*/, listDriveFolder(folderId, config.apiKey)];
                case 1:
                    children = _b.sent();
                    _b.label = 2;
                case 2:
                    _b.trys.push([2, 8, 9, 10]);
                    children_1 = __values(children), children_1_1 = children_1.next();
                    _b.label = 3;
                case 3:
                    if (!!children_1_1.done) return [3 /*break*/, 7];
                    child = children_1_1.value;
                    if (!isDriveFolder(child)) return [3 /*break*/, 5];
                    if (account.folders >= 120)
                        return [3 /*break*/, 6];
                    account.folders += 1;
                    return [4 /*yield*/, walkDriveFolder(child.id, __spreadArray(__spreadArray([], __read(ancestors), false), [{ id: child.id, name: child.name }], false), account, config)];
                case 4:
                    _b.sent();
                    if (account.files.length >= 2000)
                        return [3 /*break*/, 7];
                    return [3 /*break*/, 6];
                case 5:
                    if (isDriveVideo(child) || isDriveImage(child) || isDriveSubtitle(child)) {
                        account.files.push(__assign(__assign({}, child), { ancestors: ancestors }));
                        if (account.files.length >= 2000)
                            return [3 /*break*/, 7];
                    }
                    _b.label = 6;
                case 6:
                    children_1_1 = children_1.next();
                    return [3 /*break*/, 3];
                case 7: return [3 /*break*/, 10];
                case 8:
                    e_2_1 = _b.sent();
                    e_2 = { error: e_2_1 };
                    return [3 /*break*/, 10];
                case 9:
                    try {
                        if (children_1_1 && !children_1_1.done && (_a = children_1.return)) _a.call(children_1);
                    }
                    finally { if (e_2) throw e_2.error; }
                    return [7 /*endfinally*/];
                case 10: return [2 /*return*/];
            }
        });
    });
}
function driveErrorMessage(error) {
    if (!navigator.onLine)
        return 'Você está offline. Conecte-se para atualizar a pasta do Drive.';
    if (/expired|invalid/i.test((error === null || error === void 0 ? void 0 : error.message) || ''))
        return 'A chave da API expirou ou é inválida. Gere uma nova chave no Google Cloud.';
    if ((error === null || error === void 0 ? void 0 : error.status) === 400 || (error === null || error === void 0 ? void 0 : error.status) === 403)
        return 'A chave da API foi recusada. Confira a chave e as restrições de domínio no Google Cloud.';
    if ((error === null || error === void 0 ? void 0 : error.status) === 404)
        return 'Pasta não encontrada. Verifique se o link está correto e se a pasta está pública.';
    if ((error === null || error === void 0 ? void 0 : error.status) === 429)
        return 'O limite de consultas do Google foi atingido. Tente novamente mais tarde.';
    return "N\u00E3o foi poss\u00EDvel ler a pasta do Drive: ".concat((error === null || error === void 0 ? void 0 : error.message) || 'erro desconhecido');
}
function setDriveStatus(message, type) {
    if (type === void 0) { type = ''; }
    var status = document.getElementById('drive-status');
    if (!status)
        return;
    status.textContent = message;
    status.classList.toggle('is-error', type === 'error');
    status.classList.toggle('is-success', type === 'success');
}
function updateDriveNavCount() {
    var count = catalog.filter(function (item) { return item.drive; }).length;
    var badge = document.getElementById('drive-count');
    if (!badge)
        return;
    badge.textContent = count;
    badge.hidden = !count;
}
function applyDriveItems(items) {
    for (var index = catalog.length - 1; index >= 0; index -= 1) {
        if (catalog[index].drive)
            catalog.splice(index, 1);
    }
    catalog.push.apply(catalog, __spreadArray([], __read(items), false));
    updateDriveNavCount();
}
function updateDriveSettingsUI() {
    var folderInput = document.getElementById('drive-folder');
    var keyInput = document.getElementById('drive-key');
    var disconnectButton = document.getElementById('drive-disconnect');
    var connectButton = document.getElementById('drive-connect');
    if (!folderInput || !keyInput || !disconnectButton || !connectButton)
        return;
    var config = state.driveConfig;
    folderInput.value = (config === null || config === void 0 ? void 0 : config.folderId) || '';
    keyInput.value = (config === null || config === void 0 ? void 0 : config.apiKey) || '';
    disconnectButton.hidden = !config;
    connectButton.textContent = config ? 'Atualizar pasta' : 'Conectar pasta';
    var sync = storage.get('nexa-drive-sync', null);
    if (config && (sync === null || sync === void 0 ? void 0 : sync.items)) {
        var date = new Date(sync.at).toLocaleString('pt-BR', { dateStyle: 'short', timeStyle: 'short' });
        var episodes = Number.isFinite(sync.episodes) ? ", ".concat(sync.episodes, " epis\u00F3dios") : '';
        setDriveStatus("".concat(sync.items, " t\u00EDtulos encontrados, ").concat(sync.folders, " pastas lidas").concat(episodes, ". Atualizado em ").concat(date, "."), 'success');
    }
    else if (config) {
        setDriveStatus('Pasta conectada. Sincronizando...');
    }
    else {
        setDriveStatus('Nenhuma pasta conectada.');
    }
}
function loadDriveLibrary(config, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var connectButton, meta, resolvedConfig, account, items, episodeCount, sync, movieCount, seriesCount, episodeLabel, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (driveLoading)
                        return [2 /*return*/];
                    driveLoading = true;
                    connectButton = document.getElementById('drive-connect');
                    if (connectButton)
                        connectButton.disabled = true;
                    setDriveStatus('Lendo a pasta do Drive... Isso pode levar alguns segundos.');
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, 5, 6]);
                    return [4 /*yield*/, getDriveFolderMeta(config.folderId, config.apiKey).catch(function () { return null; })];
                case 2:
                    meta = _a.sent();
                    resolvedConfig = {
                        folderId: config.folderId,
                        apiKey: config.apiKey,
                        folderName: (meta === null || meta === void 0 ? void 0 : meta.name) || config.folderName || ''
                    };
                    account = { folders: 0, files: [] };
                    return [4 /*yield*/, walkDriveFolder(resolvedConfig.folderId, [], account, resolvedConfig)];
                case 3:
                    _a.sent();
                    items = buildDriveCatalog(account.files, resolvedConfig.folderName, resolvedConfig.apiKey);
                    applyDriveItems(items);
                    state.driveConfig = resolvedConfig;
                    episodeCount = items.reduce(function (total, item) { var _a; return total + (((_a = item.seasons) === null || _a === void 0 ? void 0 : _a.reduce(function (sum, season) { return sum + season.episodes.length; }, 0)) || 0); }, 0);
                    sync = { at: Date.now(), items: items.length, files: account.files.length, folders: account.folders, episodes: episodeCount };
                    storage.set('nexa-drive', resolvedConfig);
                    storage.set('nexa-drive-cache', items);
                    storage.set('nexa-drive-sync', sync);
                    updateDriveSettingsUI();
                    movieCount = items.filter(function (item) { return item.type === 'filme'; }).length;
                    seriesCount = items.filter(function (item) { return item.type === 'serie'; }).length;
                    episodeLabel = episodeCount ? " \u2022 ".concat(episodeCount, " epis\u00F3dio").concat(episodeCount === 1 ? '' : 's', " em ").concat(account.files.length, " arquivos") : '';
                    setDriveStatus("".concat(items.length, " t\u00EDtulos encontrados: ").concat(movieCount, " filme").concat(movieCount === 1 ? '' : 's', " e ").concat(seriesCount, " s\u00E9rie").concat(seriesCount === 1 ? '' : 's').concat(episodeLabel, "."), 'success');
                    if (state.view === 'busca')
                        handleSearch(state.query);
                    else
                        refreshCurrentView();
                    if (!options.silent)
                        showToast("Google Drive conectado: ".concat(items.length, " t\u00EDtulos encontrados"), 'success');
                    return [3 /*break*/, 6];
                case 4:
                    error_1 = _a.sent();
                    setDriveStatus(driveErrorMessage(error_1), 'error');
                    if (!options.silent)
                        showToast(driveErrorMessage(error_1), 'error');
                    return [3 /*break*/, 6];
                case 5:
                    driveLoading = false;
                    if (connectButton)
                        connectButton.disabled = false;
                    return [7 /*endfinally*/];
                case 6: return [2 /*return*/];
            }
        });
    });
}
function connectDrive() {
    var _a, _b, _c, _d;
    return __awaiter(this, void 0, void 0, function () {
        var folderId, apiKey;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    folderId = parseDriveFolderId((_a = document.getElementById('drive-folder')) === null || _a === void 0 ? void 0 : _a.value);
                    apiKey = (_b = document.getElementById('drive-key')) === null || _b === void 0 ? void 0 : _b.value.trim();
                    if (!folderId) {
                        setDriveStatus('Informe um link ou ID válido de uma pasta do Google Drive.', 'error');
                        (_c = document.getElementById('drive-folder')) === null || _c === void 0 ? void 0 : _c.focus();
                        return [2 /*return*/];
                    }
                    if (!apiKey) {
                        setDriveStatus('Informe a chave da API do Google.', 'error');
                        (_d = document.getElementById('drive-key')) === null || _d === void 0 ? void 0 : _d.focus();
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, loadDriveLibrary({ folderId: folderId, apiKey: apiKey })];
                case 1:
                    _e.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function disconnectDrive() {
    state.driveConfig = null;
    applyDriveItems([]);
    storage.set('nexa-drive', null);
    storage.set('nexa-drive-cache', []);
    storage.set('nexa-drive-sync', null);
    updateDriveSettingsUI();
    if (state.view === 'busca')
        handleSearch(state.query);
    else
        refreshCurrentView();
    showToast('Google Drive desconectado', 'success');
}
function restoreDriveLibrary() {
    var config = storage.get('nexa-drive', null);
    var cached = storage.get('nexa-drive-cache', null);
    state.driveConfig = (config === null || config === void 0 ? void 0 : config.folderId) && (config === null || config === void 0 ? void 0 : config.apiKey) ? config : null;
    if (Array.isArray(cached) && cached.length && state.driveConfig) {
        applyDriveItems(cached);
        if (state.view === 'home')
            renderHome();
    }
    updateDriveSettingsUI();
    if (state.driveConfig)
        loadDriveLibrary(state.driveConfig, { silent: true });
}
var localLoading = false;
function setLocalStatus(message, type) {
    if (type === void 0) { type = ''; }
    var status = document.getElementById('local-status');
    if (!status)
        return;
    status.textContent = message;
    status.classList.toggle('is-error', type === 'error');
    status.classList.toggle('is-success', type === 'success');
}
function updateLocalNavCount() {
    var count = catalog.filter(function (item) { return item.local; }).length;
    var badge = document.getElementById('local-count');
    if (!badge)
        return;
    badge.textContent = count;
    badge.hidden = !count;
}
function resolveLocalServerBase(_a) {
    var _b = _a === void 0 ? {} : _a, protocol = _b.protocol, host = _b.host, configured = _b.configured;
    if (protocol === 'http:')
        return "".concat(protocol, "//").concat(host);
    var value = String(configured || '').trim();
    if (value)
        return value.replace(/\/+$/, '');
    return 'http://127.0.0.1:8090';
}
function localServerBase() {
    return resolveLocalServerBase({
        protocol: window.location.protocol,
        host: window.location.host,
        configured: storage.get('nexa-local-server', '')
    });
}
function localServerHint() {
    return "Servidor local: ".concat(localServerBase());
}
function localFetchSignal(timeout) {
    if (timeout === void 0) { timeout = 30000; }
    if (typeof AbortController === 'undefined')
        return undefined;
    var controller = new AbortController();
    window.setTimeout(function () { return controller.abort(); }, timeout);
    return controller.signal;
}
function localApi(path) {
    return "".concat(localServerBase()).concat(path);
}
function localUrl(url) {
    if (!url || typeof url !== 'string')
        return url;
    if (!url.startsWith('/api/local/'))
        return url;
    return "".concat(localServerBase()).concat(url);
}
function localizeItem(item) {
    if (!(item === null || item === void 0 ? void 0 : item.local))
        return item;
    var copy = __assign({}, item);
    copy.video = localUrl(copy.video);
    copy.transcodeUrl = localUrl(copy.transcodeUrl);
    copy.poster = localUrl(copy.poster);
    copy.backdrop = localUrl(copy.backdrop);
    if (Array.isArray(copy.subtitles)) {
        copy.subtitles = copy.subtitles.map(function (subtitle) { return (__assign(__assign({}, subtitle), { url: localUrl(subtitle.url) })); });
    }
    if (Array.isArray(copy.seasons)) {
        copy.seasons = copy.seasons.map(function (season) { return (__assign(__assign({}, season), { episodeFiles: (season.episodeFiles || []).map(function (episode) { return (__assign(__assign({}, episode), { video: localUrl(episode.video), transcodeUrl: localUrl(episode.transcodeUrl), thumbnail: localUrl(episode.thumbnail), subtitles: (episode.subtitles || []).map(function (subtitle) { return (__assign(__assign({}, subtitle), { url: localUrl(subtitle.url) })); }) })); }) })); });
    }
    return copy;
}
function localizeAlbums(albums) {
    return (albums || []).map(function (album) { return (__assign(__assign({}, album), { cover: localUrl(album.cover), tracks: (album.tracks || []).map(function (track) { return (__assign(__assign({}, track), { url: localUrl(track.url) })); }) })); });
}
function applyLocalItems(items) {
    for (var index = catalog.length - 1; index >= 0; index -= 1) {
        if (catalog[index].local)
            catalog.splice(index, 1);
    }
    catalog.push.apply(catalog, __spreadArray([], __read(items.map(localizeItem)), false));
    updateLocalNavCount();
}
function updateLocalSettingsUI() {
    var _a, _b, _c, _d, _e;
    var input = document.getElementById('local-root');
    var serverInput = document.getElementById('local-server');
    if (serverInput && document.activeElement !== serverInput) {
        serverInput.value = storage.get('nexa-local-server', '') || localServerBase();
    }
    var scanButton = document.getElementById('local-scan');
    var clearButton = document.getElementById('local-clear');
    if (!input || !scanButton || !clearButton)
        return;
    if (document.activeElement !== input)
        input.value = ((_a = state.localConfig) === null || _a === void 0 ? void 0 : _a.root) || storage.get('nexa-local-root', '') || '';
    var sync = storage.get('nexa-local-sync', null);
    var subtitleStatus = document.getElementById('subtitle-settings-status');
    if (subtitleStatus && ((_b = state.localConfig) === null || _b === void 0 ? void 0 : _b.hasSubtitleKey)) {
        subtitleStatus.textContent = 'Chave da API configurada no servidor local: a busca de legendas online está ativa.';
    }
    var omdbStatus = document.getElementById('omdb-settings-status');
    if (omdbStatus && ((_c = state.localConfig) === null || _c === void 0 ? void 0 : _c.hasOmdbKey)) {
        omdbStatus.textContent = 'Chave do OMDb configurada no servidor local: os metadados dos filmes são atualizados no scan.';
    }
    var enrichButton = document.getElementById('local-omdb-enrich');
    if (enrichButton)
        enrichButton.hidden = !((_d = state.localConfig) === null || _d === void 0 ? void 0 : _d.hasOmdbKey);
    var hasItems = catalog.some(function (item) { return item.local; });
    clearButton.hidden = !hasItems;
    var fullScanButton = document.getElementById('local-scan-full');
    if (fullScanButton)
        fullScanButton.hidden = !((_e = state.localConfig) === null || _e === void 0 ? void 0 : _e.hasLibrary) || localLoading;
    if (localLoading) {
        scanButton.disabled = true;
        setLocalStatus('Lendo o HD... isso pode levar alguns minutos na primeira vez.');
    }
    else {
        scanButton.disabled = false;
        if (sync === null || sync === void 0 ? void 0 : sync.items) {
            var date = new Date(sync.at).toLocaleString('pt-BR', { dateStyle: 'short', timeStyle: 'short' });
            var music = sync.tracks ? ", ".concat(sync.albums, " \u00E1lbuns e ").concat(sync.tracks, " faixas") : '';
            setLocalStatus("".concat(sync.items, " t\u00EDtulos no HD: ").concat(sync.movies, " filmes, ").concat(sync.series, " s\u00E9ries (").concat(sync.episodes, " epis\u00F3dios)").concat(music, ". Atualizado em ").concat(date, "."), 'success');
        }
        else if (state.localConfig) {
            setLocalStatus('Servidor local conectado. Clique em “Escanear HD” para atualizar a biblioteca.');
        }
        else {
            setLocalStatus('Servidor local não conectado.');
        }
    }
}
function localDelay(ms) {
    return new Promise(function (resolve) { window.setTimeout(resolve, ms); });
}
function loadLocalLibrary(options) {
    var _a, _b;
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var response, data, tries, items, albums, configResponse, configData, error_2, stats, sync, error_3, httpsPage, message;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    if (localLoading)
                        return [2 /*return*/];
                    localLoading = true;
                    updateLocalSettingsUI();
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 15, 16, 17]);
                    return [4 /*yield*/, fetch(localApi('/api/local/library'), { cache: 'no-store' })];
                case 2:
                    response = _c.sent();
                    if (!response.ok)
                        throw new Error("HTTP ".concat(response.status));
                    return [4 /*yield*/, response.json()];
                case 3:
                    data = _c.sent();
                    tries = 0;
                    _c.label = 4;
                case 4:
                    if (!(data.scanning && tries < 80)) return [3 /*break*/, 8];
                    if (!options.silent)
                        setLocalStatus('Escaneando o HD... isso pode levar alguns minutos.');
                    return [4 /*yield*/, localDelay(3000)];
                case 5:
                    _c.sent();
                    return [4 /*yield*/, fetch(localApi('/api/local/library'), { cache: 'no-store' })];
                case 6:
                    response = _c.sent();
                    if (!response.ok)
                        throw new Error("HTTP ".concat(response.status));
                    return [4 /*yield*/, response.json()];
                case 7:
                    data = _c.sent();
                    tries += 1;
                    return [3 /*break*/, 4];
                case 8:
                    items = Array.isArray(data.items) ? data.items : [];
                    albums = localizeAlbums(Array.isArray((_a = data.music) === null || _a === void 0 ? void 0 : _a.albums) ? data.music.albums : []);
                    applyLocalItems(items);
                    state.musicAlbums = albums;
                    state.localConfig = { root: data.root || '', stats: data.stats || {}, at: data.at || 0, accessible: data.accessible !== false };
                    if (data.accessible === false) {
                        setLocalStatus('HD externo não está montado. Reconecte o pen drive e reinicie o servidor local.', 'error');
                        showToast('HD externo não está montado (EIO). Reconecte o drive.', 'error');
                    }
                    _c.label = 9;
                case 9:
                    _c.trys.push([9, 13, , 14]);
                    return [4 /*yield*/, fetch(localApi('/api/local/config'), { cache: 'no-store' })];
                case 10:
                    configResponse = _c.sent();
                    if (!configResponse.ok) return [3 /*break*/, 12];
                    return [4 /*yield*/, configResponse.json()];
                case 11:
                    configData = _c.sent();
                    state.localConfig.hasSubtitleKey = Boolean(configData.hasSubtitleKey);
                    state.localConfig.hasOmdbKey = Boolean(configData.hasOmdbKey);
                    _c.label = 12;
                case 12: return [3 /*break*/, 14];
                case 13:
                    error_2 = _c.sent();
                    state.localConfig.hasSubtitleKey = false;
                    return [3 /*break*/, 14];
                case 14:
                    stats = data.stats || {};
                    sync = {
                        at: data.at || Date.now(),
                        items: items.length,
                        movies: stats.movies || items.filter(function (item) { return item.type === 'filme'; }).length,
                        series: stats.series || items.filter(function (item) { return item.type === 'serie'; }).length,
                        episodes: stats.episodes || 0,
                        albums: stats.albums || albums.length,
                        tracks: stats.tracks || 0
                    };
                    storage.set('nexa-local-cache', items);
                    storage.set('nexa-local-sync', sync);
                    storage.set('nexa-local-root', data.root || '');
                    if (data.root)
                        storage.set('nexa-local-config', { root: data.root });
                    updateLocalSettingsUI();
                    if (state.view === 'busca')
                        handleSearch(state.query);
                    else if (state.view === 'musica')
                        renderMusicView();
                    else
                        refreshCurrentView();
                    if (!options.silent)
                        showToast("HD local: ".concat(items.length, " t\u00EDtulos encontrados"), 'success');
                    return [3 /*break*/, 17];
                case 15:
                    error_3 = _c.sent();
                    httpsPage = window.location.protocol === 'https:';
                    message = httpsPage
                        ? "P\u00E1ginas https bloqueiam o servidor local. Abra o NEXA em ".concat(localServerBase(), ".")
                        : "Servidor local indispon\u00EDvel em ".concat(localServerBase(), ". Rode python3 local_server.py e recarregue.");
                    if (!options.silent) {
                        setLocalStatus(message, 'error');
                        showToast(message, 'error');
                    }
                    else if ((_b = document.getElementById('settings-dialog')) === null || _b === void 0 ? void 0 : _b.open) {
                        setLocalStatus(message, 'error');
                    }
                    return [3 /*break*/, 17];
                case 16:
                    localLoading = false;
                    updateLocalSettingsUI();
                    return [7 /*endfinally*/];
                case 17: return [2 /*return*/];
            }
        });
    });
}
function scanLocalLibrary() {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var input, root, response, data, error_4;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    input = document.getElementById('local-root');
                    root = (input === null || input === void 0 ? void 0 : input.value.trim()) || ((_a = state.localConfig) === null || _a === void 0 ? void 0 : _a.root) || '';
                    if (!root) {
                        setLocalStatus('Informe a pasta do HD.', 'error');
                        input === null || input === void 0 ? void 0 : input.focus();
                        return [2 /*return*/];
                    }
                    if (localLoading)
                        return [2 /*return*/];
                    localLoading = true;
                    updateLocalSettingsUI();
                    setLocalStatus('Escaneando o HD... isso pode levar alguns minutos.');
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 5, 6, 7]);
                    return [4 /*yield*/, fetch(localApi('/api/local/config'), {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ root: root })
                        })];
                case 2:
                    response = _b.sent();
                    return [4 /*yield*/, response.json().catch(function () { return ({}); })];
                case 3:
                    data = _b.sent();
                    if (!response.ok)
                        throw new Error(data.error || "HTTP ".concat(response.status));
                    storage.set('nexa-local-root', data.root || root);
                    storage.set('nexa-local-config', { root: data.root || root });
                    localLoading = false;
                    return [4 /*yield*/, loadLocalLibrary()];
                case 4:
                    _b.sent();
                    return [3 /*break*/, 7];
                case 5:
                    error_4 = _b.sent();
                    setLocalStatus(error_4.message || 'Falha ao escanear o HD.', 'error');
                    showToast('Falha ao escanear o HD local.', 'error');
                    return [3 /*break*/, 7];
                case 6:
                    localLoading = false;
                    updateLocalSettingsUI();
                    return [7 /*endfinally*/];
                case 7: return [2 /*return*/];
            }
        });
    });
}
function rescanLocalLibrary() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (localLoading)
                        return [2 /*return*/];
                    localLoading = true;
                    updateLocalSettingsUI();
                    setLocalStatus('Reanalisando tudo no HD... no 9p isso pode demorar bastante.');
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 5, 6, 7]);
                    return [4 /*yield*/, fetch(localApi('/api/local/scan'), {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ full: true })
                        })];
                case 2:
                    response = _a.sent();
                    return [4 /*yield*/, response.json().catch(function () { return ({}); })];
                case 3:
                    data = _a.sent();
                    if (!response.ok)
                        throw new Error(data.error || "HTTP ".concat(response.status));
                    setLocalStatus('Reanálise iniciada no servidor local.');
                    return [4 /*yield*/, loadLocalLibrary()];
                case 4:
                    _a.sent();
                    return [3 /*break*/, 7];
                case 5:
                    error_5 = _a.sent();
                    setLocalStatus(error_5.message || 'Falha ao reanlisar o HD.', 'error');
                    showToast('Falha ao reanlisar o HD local.', 'error');
                    return [3 /*break*/, 7];
                case 6:
                    localLoading = false;
                    updateLocalSettingsUI();
                    return [7 /*endfinally*/];
                case 7: return [2 /*return*/];
            }
        });
    });
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
    if (state.view === 'busca')
        handleSearch(state.query);
    else if (state.view === 'musica')
        renderMusicView();
    else
        refreshCurrentView();
    showToast('Biblioteca do HD removida deste navegador', 'success');
}
function restoreLocalLibrary() {
    var config = storage.get('nexa-local-config', null);
    var cached = storage.get('nexa-local-cache', null);
    state.localConfig = (config === null || config === void 0 ? void 0 : config.root) ? config : null;
    if (Array.isArray(cached) && cached.length) {
        applyLocalItems(cached);
        if (state.view === 'home')
            renderHome();
    }
    updateLocalSettingsUI();
    loadLocalLibrary({ silent: true });
}
function icon(name) {
    return "<svg aria-hidden=\"true\"><use href=\"#".concat(icons[name] || name, "\"></use></svg>");
}
function escapeHtml(value) {
    return String(value !== null && value !== void 0 ? value : '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}
function getItem(id) {
    return catalog.find(function (item) { return item.id === id; });
}
function getGenres() {
    return __spreadArray(['Todos'], __read(new Set(currentCatalog().flatMap(function (item) { return item.genres; }))), false);
}
function numericValue(value, fallback) {
    if (fallback === void 0) { fallback = -1; }
    var number = Number(value);
    return Number.isFinite(number) ? number : fallback;
}
function sortItems(items) {
    var sorted = __spreadArray([], __read(items), false);
    if (state.sort === 'relevancia')
        return sorted;
    if (state.sort === 'recentes')
        return sorted.sort(function (a, b) { return numericValue(b.year) - numericValue(a.year); });
    if (state.sort === 'avaliacao')
        return sorted.sort(function (a, b) { return numericValue(b.rating) - numericValue(a.rating); });
    if (state.sort === 'a-z')
        return sorted.sort(function (a, b) { return String(a.title).localeCompare(String(b.title), 'pt-BR'); });
    return sorted;
}
function filteredCatalog(view) {
    if (view === void 0) { view = state.view; }
    var items = __spreadArray([], __read(currentCatalog()), false);
    if (view === 'filmes')
        items = items.filter(function (item) { return item.type === 'filme'; });
    if (view === 'series')
        items = items.filter(function (item) { return item.type === 'serie'; });
    if (view === 'filmes' || view === 'series')
        items.sort(function (a, b) { return Number(Boolean(b.drive)) - Number(Boolean(a.drive)); });
    if (view === 'originais')
        items = items.filter(function (item) { return item.original; });
    if (view === 'novidades')
        items = items.filter(function (item) { return item.new; });
    if (view === 'lista')
        items = items.filter(function (item) { return state.list.has(item.id); });
    if (view === 'busca') {
        var filters_1 = state.searchFilters;
        if (filters_1.type !== 'todos')
            items = items.filter(function (item) { return item.type === filters_1.type; });
        if (filters_1.genre !== 'Todos')
            items = items.filter(function (item) { return item.genres.includes(filters_1.genre); });
        if (filters_1.year !== 'todos')
            items = items.filter(function (item) { return String(item.year) === filters_1.year; });
        if (Number(filters_1.rating) > 0)
            items = items.filter(function (item) { return Number(item.rating) >= Number(filters_1.rating); });
    }
    else if (state.genre !== 'Todos') {
        items = items.filter(function (item) { return item.genres.includes(state.genre); });
    }
    if (state.query) {
        var query_1 = state.query.toLocaleLowerCase('pt-BR');
        items = items.filter(function (item) { return [item.title, item.description, item.cast.join(' '), item.genres.join(' ')]
            .join(' ')
            .toLocaleLowerCase('pt-BR')
            .includes(query_1); });
    }
    return sortItems(items);
}
function posterCard(item, options) {
    if (options === void 0) { options = {}; }
    var progress = state.progress[item.id];
    var isTop = options.top;
    var badge = item.original ? '<span class="card-badge original">Original</span>' : item.new ? '<span class="card-badge">Novo</span>' : '';
    var showProgress = progress && progress.percent > 0 && progress.percent < 100;
    var progressBar = showProgress ? "<span class=\"card-progress\" role=\"progressbar\" aria-label=\"Progresso de ".concat(escapeHtml(item.title), "\" aria-valuemin=\"0\" aria-valuemax=\"100\" aria-valuenow=\"").concat(progress.percent, "\"><span aria-hidden=\"true\" style=\"width:").concat(progress.percent, "%\"></span></span>") : '';
    var poster = "\n    <div class=\"poster-wrap\">\n      <img src=\"".concat(escapeHtml(item.poster), "\" alt=\"P\u00F4ster de ").concat(escapeHtml(item.title), "\" loading=\"lazy\">\n      ").concat(badge, "\n      <button class=\"poster-open\" type=\"button\" data-action=\"details\" data-id=\"").concat(item.id, "\" aria-label=\"Ver detalhes de ").concat(escapeHtml(item.title), "\"></button>\n      <div class=\"card-overlay\">\n        <button class=\"card-play\" type=\"button\" data-action=\"play\" data-id=\"").concat(item.id, "\" aria-label=\"Assistir ").concat(escapeHtml(item.title), "\">").concat(icon('play'), "</button>\n        <button class=\"card-info\" type=\"button\" data-action=\"details\" data-id=\"").concat(item.id, "\" aria-label=\"Ver detalhes de ").concat(escapeHtml(item.title), "\">").concat(icon('info'), "</button>\n        <button class=\"card-list ").concat(state.list.has(item.id) ? 'in-list' : '', "\" type=\"button\" data-action=\"toggle-list\" data-id=\"").concat(item.id, "\" aria-label=\"").concat(state.list.has(item.id) ? 'Remover' : 'Adicionar', " ").concat(escapeHtml(item.title), " ").concat(state.list.has(item.id) ? 'da' : 'à', " lista\">").concat(state.list.has(item.id) ? icon('check') : icon('plus'), "</button>\n      </div>\n      ").concat(progressBar, "\n    </div>");
    var inner = "\n    ".concat(poster, "\n    <h3 class=\"poster-title\">").concat(escapeHtml(item.title), "</h3>\n    <div class=\"poster-meta\"><span class=\"match-score\">").concat(escapeHtml(item.match), "%</span><span>\u2022</span><span>").concat(escapeHtml(item.year), "</span><span>\u2022</span><span>").concat(escapeHtml(typeLabel[item.type]), "</span></div>");
    if (isTop) {
        return "<article class=\"media-card rank-wrap\" data-id=\"".concat(item.id, "\"><span class=\"rank-number\">").concat(options.rank, "</span><div class=\"poster-button\">").concat(inner, "</div></article>");
    }
    return "<article class=\"media-card\" data-id=\"".concat(item.id, "\"><div class=\"poster-button\">").concat(inner, "</div></article>");
}
function sectionRow(title, items, options) {
    if (options === void 0) { options = {}; }
    if (!items.length)
        return '';
    var cards = items.map(function (item, index) { return posterCard(item, { top: options.top, rank: index + 1 }); }).join('');
    return "\n    <section class=\"content-section\" data-section>\n      <div class=\"section-heading\">\n        <div><h2>".concat(title, "</h2>").concat(options.subtitle ? "<p>".concat(options.subtitle, "</p>") : '', "</div>\n        ").concat(options.link ? "<button class=\"section-link\" type=\"button\" data-view-link=\"".concat(options.link.view, "\">Explorar tudo ").concat(icon('chevron'), "</button>") : '', "\n      </div>\n      <div class=\"carousel\" role=\"group\" aria-roledescription=\"carrossel\" aria-label=\"").concat(escapeHtml(title), "\"><div class=\"media-row\">").concat(cards, "</div></div>\n    </section>");
}
function homeHero(item) {
    return "\n    <section class=\"hero\" aria-labelledby=\"hero-title\">\n      <div class=\"hero-backdrop\" style=\"background-image:url('".concat(escapeHtml(item.backdrop), "')\"></div>\n      <div class=\"hero-content\">\n        <span class=\"hero-badge\">").concat(item.original ? 'NEXA Original' : 'Em destaque', "</span>\n        <h1 id=\"hero-title\">").concat(escapeHtml(item.title), "</h1>\n        <div class=\"hero-meta\">\n          <span class=\"match-score\">").concat(escapeHtml(item.match), "% de escolha</span>\n          <span class=\"meta-divider\"></span><span>").concat(escapeHtml(item.year), "</span>\n          <span class=\"meta-divider\"></span><span>").concat(escapeHtml(item.maturity), "</span>\n          <span class=\"meta-divider\"></span><span>").concat(escapeHtml(item.duration), "</span>\n          <span class=\"meta-divider\"></span><span>").concat(escapeHtml(item.genres.join(' • ')), "</span>\n        </div>\n        <p class=\"hero-description\">").concat(escapeHtml(item.description), "</p>\n        <div class=\"hero-actions\">\n          <button class=\"button button-red\" type=\"button\" data-action=\"play\" data-id=\"").concat(item.id, "\">").concat(icon('play'), " Assistir</button>\n          <button class=\"button button-ghost\" type=\"button\" data-action=\"details\" data-id=\"").concat(item.id, "\">").concat(icon('info'), " Mais informa\u00E7\u00F5es</button>\n        </div>\n      </div>\n    </section>");
}
function renderHome() {
    var visible = currentCatalog();
    var continueItems = visible.filter(function (item) { return isItemInProgress(item); }).sort(function (a, b) { var _a, _b; return (((_a = state.progress[b.id]) === null || _a === void 0 ? void 0 : _a.percent) || 0) - (((_b = state.progress[a.id]) === null || _b === void 0 ? void 0 : _b.percent) || 0); });
    var trending = visible.filter(function (item) { return item.trending; });
    var top = visible.filter(function (item) { return item.top; }).slice(0, 10);
    var originals = visible.filter(function (item) { return item.original; });
    var movies = visible.filter(function (item) { return item.type === 'filme'; }).sort(function (a, b) { return Number(Boolean(b.drive)) - Number(Boolean(a.drive)); });
    var series = visible.filter(function (item) { return item.type === 'serie'; }).sort(function (a, b) { return Number(Boolean(b.drive)) - Number(Boolean(a.drive)); });
    var documentaries = visible.filter(function (item) { return item.type === 'documentario'; });
    var fresh = visible.filter(function (item) { return item.new; });
    var drive = visible.filter(function (item) { return item.drive; });
    var local = visible.filter(function (item) { return item.local; });
    var hero = visible[0];
    var empty = "<div class=\"empty-state\"><div class=\"empty-state-inner\"><span class=\"empty-icon\">".concat(icon('film'), "</span><h2>Nenhum t\u00EDtulo dispon\u00EDvel</h2><p>N\u00E3o h\u00E1 t\u00EDtulos adequados para este perfil no momento.</p></div></div>");
    mainContent.innerHTML = "\n    <div class=\"content-view\">\n      ".concat(hero ? homeHero(hero) : '', "\n      <div class=\"content-sections\">\n        ").concat(visible.length ? "\n          ".concat(sectionRow('Continue assistindo', continueItems, { subtitle: 'Retome de onde parou' }), "\n          ").concat(sectionRow('Do seu Google Drive', drive, { subtitle: 'Filmes e séries da sua pasta conectada' }), "\n          ").concat(sectionRow('Do seu HD', local, { subtitle: 'Filmes e séries da biblioteca local' }), "\n          ").concat(sectionRow('Em alta agora', trending, { subtitle: 'O que todo mundo está assistindo', link: { view: 'filmes' } }), "\n          ").concat(sectionRow('Top 10 hoje', top, { top: true }), "\n          ").concat(sectionRow('Originais NEXA', originals, { subtitle: 'Histórias exclusivas para assistir' }), "\n          ").concat(sectionRow('Filmes populares', movies), "\n          ").concat(sectionRow('Séries que você precisa ver', series), "\n          ").concat(sectionRow('Documentários que inspiram', documentaries), "\n          ").concat(sectionRow('Novidades', fresh), "\n        ") : empty, "\n      </div>\n    </div>");
}
function currentMusicAlbums() {
    var _a;
    return ((_a = activeProfile()) === null || _a === void 0 ? void 0 : _a.kids) ? [] : state.musicAlbums;
}
function albumCard(album) {
    var _a;
    var tracks = ((_a = album.tracks) === null || _a === void 0 ? void 0 : _a.length) || 0;
    return "\n    <article class=\"album-card\">\n      <button class=\"album-cover-button\" type=\"button\" data-album=\"".concat(album.id, "\" aria-label=\"Abrir \u00E1lbum ").concat(escapeHtml(album.title), "\">\n        <img src=\"").concat(escapeHtml(album.cover || fallbackArtwork), "\" alt=\"Capa de ").concat(escapeHtml(album.title), "\" loading=\"lazy\">\n        <span class=\"album-play\">").concat(icon('play'), "</span>\n      </button>\n      <strong class=\"album-title\">").concat(escapeHtml(album.title), "</strong>\n      <small class=\"album-meta\">").concat(escapeHtml(album.artist || 'Vários artistas'), " \u2022 ").concat(tracks, " faixa").concat(tracks === 1 ? '' : 's', "</small>\n    </article>");
}
function renderMusicView() {
    state.view = 'musica';
    updateActiveNavigation();
    if (state.activeAlbum) {
        renderAlbumView(state.activeAlbum);
        return;
    }
    var albums = currentMusicAlbums();
    var trackCount = albums.reduce(function (total, album) { var _a; return total + (((_a = album.tracks) === null || _a === void 0 ? void 0 : _a.length) || 0); }, 0);
    mainContent.innerHTML = "\n    <section class=\"section-view\">\n      <header class=\"section-header\"><div><p class=\"eyebrow\">Sua biblioteca</p><h1>M\u00FAsica</h1><p>".concat(albums.length ? "".concat(albums.length, " \u00E1lbun").concat(albums.length === 1 ? 's' : 's', " e ").concat(trackCount, " faixas no HD local.") : 'Conecte o HD local para ouvir sua coleção.', "</p></div></header>\n      ").concat(albums.length
        ? "<div class=\"album-grid\">".concat(albums.map(albumCard).join(''), "</div>")
        : "<div class=\"empty-state\"><div class=\"empty-state-inner\"><span class=\"empty-icon\">".concat(icon('music'), "</span><h2>Nenhuma m\u00FAsica ainda</h2><p>Inicie o servidor local, escaneie o HD e suas m\u00FAsicas aparecer\u00E3o aqui.</p><button class=\"button button-red\" type=\"button\" data-local-settings>Escanear HD</button></div></div>"), "\n    </section>");
    window.scrollTo({ top: 0, behavior: 'instant' });
}
function renderAlbumView(album) {
    var _a, _b;
    state.view = 'musica';
    updateActiveNavigation();
    var trackIndex = state.activeTrackIndex;
    mainContent.innerHTML = "\n    <section class=\"section-view album-view\">\n      <button class=\"back-link\" type=\"button\" data-album-back>".concat(icon('chevron'), " Todos os \u00E1lbuns</button>\n      <header class=\"album-header\">\n        <img class=\"album-detail-cover\" src=\"").concat(escapeHtml(album.cover || fallbackArtwork), "\" alt=\"Capa de ").concat(escapeHtml(album.title), "\">\n        <div>\n          <p class=\"eyebrow\">\u00C1lbum</p>\n          <h1>").concat(escapeHtml(album.title), "</h1>\n          <p class=\"album-detail-meta\">").concat(escapeHtml(album.artist || 'Vários artistas')).concat(album.year ? " \u2022 ".concat(album.year) : '', " \u2022 ").concat(((_a = album.tracks) === null || _a === void 0 ? void 0 : _a.length) || 0, " faixa").concat(((_b = album.tracks) === null || _b === void 0 ? void 0 : _b.length) === 1 ? '' : 's', "</p>\n          <button class=\"button button-red\" type=\"button\" data-play-album=\"").concat(album.id, "\">").concat(icon('play'), " Tocar \u00E1lbum</button>\n        </div>\n      </header>\n      <ol class=\"track-list\">\n        ").concat((album.tracks || []).map(function (track, index) { return "\n          <li class=\"".concat(index === trackIndex ? 'playing' : '', "\">\n            <button type=\"button\" data-track=\"").concat(album.id, "\" data-track-index=\"").concat(index, "\">\n              <span class=\"track-number\">").concat(track.number || index + 1, "</span>\n              <span class=\"track-copy\"><strong>").concat(escapeHtml(track.title), "</strong><small>").concat(escapeHtml(track.artist || album.artist || ''), "</small></span>\n              <span class=\"track-action\">").concat(index === trackIndex ? icon('volume') : icon('play'), "</span>\n            </button>\n          </li>"); }).join(''), "\n      </ol>\n    </section>");
    window.scrollTo({ top: 0, behavior: 'instant' });
}
function showMusicBar(track, album) {
    if (!musicPlayerBar || !track)
        return;
    musicCover.src = album.cover || fallbackArtwork;
    musicCover.alt = "Capa de ".concat(album.title);
    musicTitle.textContent = track.title;
    musicArtist.textContent = "".concat(track.artist || album.artist || '').concat(album.title ? " \u2022 ".concat(album.title) : '');
    musicPlayerBar.hidden = false;
    document.body.classList.add('music-open');
}
function playAlbumTrack(albumId, index) {
    var _a;
    var album = state.musicAlbums.find(function (entry) { return entry.id === albumId; });
    var track = (_a = album === null || album === void 0 ? void 0 : album.tracks) === null || _a === void 0 ? void 0 : _a[index];
    if (!album || !track)
        return;
    state.activeAlbum = album;
    state.activeTrackIndex = index;
    musicAudio.src = track.url;
    musicAudio.dataset.albumId = album.id;
    musicAudio.dataset.trackIndex = String(index);
    showMusicBar(track, album);
    var promise = musicAudio.play();
    if (promise)
        promise.catch(function () { return showToast('Clique em reproduzir para ouvir a música', 'success'); });
    renderAlbumView(album);
}
function playNextTrack() {
    var album = state.musicAlbums.find(function (entry) { return entry.id === musicAudio.dataset.albumId; });
    if (!album)
        return;
    var next = Number(musicAudio.dataset.trackIndex || 0) + 1;
    if (next < album.tracks.length)
        playAlbumTrack(album.id, next);
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
        return "<div class=\"empty-state\"><div class=\"empty-state-inner\"><span class=\"empty-icon\">".concat(icon('film'), "</span><h2>Nenhum t\u00EDtulo em ").concat(escapeHtml(state.genre), "</h2><p>Experimente outro g\u00EAnero ou limpe os filtros para ver o cat\u00E1logo completo.</p><button class=\"button button-red\" type=\"button\" data-genre=\"Todos\">Limpar filtros</button></div></div>");
    }
    var copy = {
        filmes: ['Nenhum filme disponível', 'Novos filmes chegam em breve ao catálogo.', 'film'],
        series: ['Nenhuma série disponível', 'Novas séries chegam em breve ao catálogo.', 'tv'],
        originais: ['Nenhum original por aqui', 'Nossas produções exclusivas aparecerão aqui.', 'sparkle'],
        novidades: ['Nada novo por enquanto', 'Volte em breve para conferir as novidades.', 'plus'],
        lista: ['Sua lista está vazia', 'Adicione filmes e séries usando o botão <strong>+</strong> nos cards. Eles ficarão salvos neste navegador.', 'bookmark']
    };
    var _a = __read(copy[state.view] || ['Nada encontrado', 'Tente ajustar seus filtros.', 'search'], 3), title = _a[0], text = _a[1], iconName = _a[2];
    return "<div class=\"empty-state\"><div class=\"empty-state-inner\"><span class=\"empty-icon\">".concat(icon(iconName), "</span><h2>").concat(title, "</h2><p>").concat(text, "</p><button class=\"button button-red\" type=\"button\" data-view-link=\"home\">Descobrir t\u00EDtulos</button></div></div>");
}
function browseView() {
    var items = filteredCatalog(state.view);
    var titles = {
        filmes: ['Filmes', 'Histórias para todas as imaginações.'],
        series: ['Séries', 'Universos para se perder e encontrar.'],
        originais: ['Originais NEXA', 'Grandes histórias, exclusivas para você.'],
        novidades: ['Novidades', 'Acabaram de chegar. Não perca nenhuma.'],
        lista: ['Minha lista', 'Tudo o que você guardou para assistir depois.']
    };
    var _a = __read(titles[state.view] || ['Catálogo', 'Encontre sua próxima história.'], 2), title = _a[0], subtitle = _a[1];
    var chips = getGenres().map(function (genre) { return "<button class=\"filter-chip ".concat(state.genre === genre ? 'active' : '', "\" type=\"button\" data-genre=\"").concat(genre, "\">").concat(genre, "</button>"); }).join('');
    var content = items.length
        ? "<div class=\"media-grid\">".concat(items.map(function (item) { return posterCard(item); }).join(''), "</div>")
        : browseEmptyState();
    mainContent.innerHTML = "\n    <section class=\"section-view\">\n      <header class=\"section-header\"><div><p class=\"eyebrow\">NEXA cat\u00E1logo</p><h1>".concat(title, "</h1><p>").concat(subtitle, "</p></div></header>\n      <div class=\"filter-bar\">\n        ").concat(chips, "\n        <select class=\"sort-select\" id=\"sort-select\" aria-label=\"Ordenar cat\u00E1logo\">\n          <option value=\"relevancia\" ").concat(state.sort === 'relevancia' ? 'selected' : '', ">Mais relevantes</option>\n          <option value=\"recentes\" ").concat(state.sort === 'recentes' ? 'selected' : '', ">Mais recentes</option>\n          <option value=\"avaliacao\" ").concat(state.sort === 'avaliacao' ? 'selected' : '', ">Melhor avaliados</option>\n          <option value=\"a-z\" ").concat(state.sort === 'a-z' ? 'selected' : '', ">T\u00EDtulo (A\u2013Z)</option>\n        </select>\n      </div>\n      ").concat(content, "\n    </section>");
}
function renderView(view) {
    state.view = view;
    state.genre = 'Todos';
    if (view === 'musica')
        state.activeAlbum = null;
    updateActiveNavigation();
    if (view === 'home')
        renderHome();
    else if (view === 'musica')
        renderMusicView();
    else
        browseView();
    window.scrollTo({ top: 0, behavior: 'instant' });
}
function refreshCurrentView() {
    if (state.view === 'home')
        renderHome();
    else if (state.view === 'musica')
        renderMusicView();
    else if (state.view !== 'busca')
        browseView();
}
function focusCard(id) {
    var target = document.querySelector(".media-card[data-id=\"".concat(id, "\"] .poster-open"));
    if (target)
        target.focus();
    else
        document.getElementById('main-content').focus();
}
function openDetails(id) {
    var _a, _b;
    var item = getItem(id);
    if (!item)
        return;
    if (!isAllowedItem(item)) {
        showToast('Este título não está disponível no perfil infantil.', 'error');
        return;
    }
    state.activeItem = item;
    state.activeSeason = 0;
    var inList = state.list.has(item.id);
    var liked = state.liked.has(item.id);
    document.getElementById('detail-hero').style.backgroundImage = "url('".concat(item.backdrop, "')");
    document.getElementById('detail-eyebrow').textContent = item.original ? 'NEXA Original' : typeLabel[item.type];
    var detailHero = document.getElementById('detail-hero');
    detailHero.innerHTML = "<div class=\"detail-hero-copy\"><span class=\"detail-logo\">".concat(item.original ? 'NEXA' : typeLabel[item.type].toUpperCase(), "</span><h1 id=\"detail-hero-title\">").concat(escapeHtml(item.title), "</h1></div>");
    document.getElementById('detail-eyebrow').hidden = true;
    document.getElementById('detail-meta').innerHTML = "<span class=\"match-score\">".concat(item.match, "% de escolha</span><span class=\"meta-divider\"></span><span>").concat(escapeHtml(item.year), "</span><span class=\"meta-divider\"></span><span>").concat(escapeHtml(item.maturity), "</span><span class=\"meta-divider\"></span><span>").concat(escapeHtml(item.duration), "</span><span class=\"meta-divider\"></span><span>").concat(escapeHtml(item.genres.join(', ')), "</span>");
    document.getElementById('detail-description').textContent = item.description;
    document.getElementById('detail-genre').textContent = item.genres.join(', ');
    document.getElementById('detail-director').textContent = item.director;
    document.getElementById('detail-cast').textContent = item.cast.join(', ');
    document.getElementById('detail-rating').textContent = item.maturity;
    document.getElementById('detail-duration').textContent = item.duration;
    var listButton = document.getElementById('detail-list');
    listButton.innerHTML = "".concat(inList ? icon('check') : icon('plus'), "<span>").concat(inList ? 'Na minha lista' : 'Adicionar à lista', "</span>");
    listButton.dataset.id = item.id;
    var likeButton = document.getElementById('detail-like');
    likeButton.classList.toggle('liked', liked);
    likeButton.setAttribute('aria-pressed', String(liked));
    likeButton.dataset.id = item.id;
    var playButton = document.getElementById('detail-play');
    playButton.innerHTML = "".concat(icon('play'), "<span>").concat(isItemSeen(item) ? 'Assistir novamente' : (isItemInProgress(item) ? 'Continuar assistindo' : 'Assistir'), "</span>");
    playButton.dataset.id = item.id;
    updateSeenButton(item);
    document.getElementById('detail-share').dataset.id = item.id;
    var omdbButton = document.getElementById('detail-omdb');
    omdbButton.hidden = !(item.local && item.type === 'filme');
    omdbButton.dataset.id = item.id;
    var episodeSection = document.getElementById('episodes-section');
    episodeSection.hidden = !((_a = item.seasons) === null || _a === void 0 ? void 0 : _a.length);
    if ((_b = item.seasons) === null || _b === void 0 ? void 0 : _b.length) {
        var select = document.getElementById('season-select');
        select.innerHTML = item.seasons.map(function (season, index) { return "<option value=\"".concat(index, "\">").concat(season.name, "</option>"); }).join('');
        renderEpisodes(item, 0);
    }
    var related = currentCatalog().filter(function (candidate) { return candidate.id !== item.id && candidate.genres.some(function (genre) { return item.genres.includes(genre); }); }).slice(0, 4);
    document.getElementById('related-grid').innerHTML = related.map(function (candidate) { return posterCard(candidate); }).join('');
    if (detailsDialog.open)
        detailsDialog.close();
    detailsDialog.showModal();
    document.body.classList.add('modal-open');
    history.replaceState(null, '', "#/titulo/".concat(item.id));
}
function renderEpisodes(item, seasonIndex) {
    var season = item.seasons[seasonIndex];
    document.getElementById('episode-list').innerHTML = season.episodes.map(function (episode, index) {
        var _a, _b;
        var episodeFile = (_a = season.episodeFiles) === null || _a === void 0 ? void 0 : _a[index];
        var number = (_b = episodeFile === null || episodeFile === void 0 ? void 0 : episodeFile.number) !== null && _b !== void 0 ? _b : index + 1;
        var duration = (episodeFile === null || episodeFile === void 0 ? void 0 : episodeFile.duration) || "".concat(28 + index * 3, " min");
        var thumbnail = (episodeFile === null || episodeFile === void 0 ? void 0 : episodeFile.thumbnail) || item.backdrop;
        return "\n    <article class=\"episode-item\">\n      <div class=\"episode-image\">\n        <img src=\"".concat(escapeHtml(thumbnail), "\" alt=\"\" loading=\"lazy\">\n        <button class=\"episode-play\" type=\"button\" data-action=\"play-episode\" data-id=\"").concat(item.id, "\" data-season=\"").concat(seasonIndex, "\" data-episode=\"").concat(index, "\" aria-label=\"Assistir ").concat(escapeHtml(episode), "\">").concat(icon('play'), "</button>\n      </div>\n      <div class=\"episode-copy\">\n        <div class=\"episode-top\"><strong>").concat(number, ". ").concat(escapeHtml(episode), "</strong><span>").concat(escapeHtml(duration), "</span></div>\n        <p>").concat(escapeHtml(item.description), " Uma nova decis\u00E3o coloca os personagens diante das consequ\u00EAncias de suas escolhas.</p>\n      </div>\n    </article>");
    }).join('');
}
function nextEpisodeTarget(active) {
    var _a, _b, _c, _d;
    if (active === void 0) { active = state.activeVideo; }
    if (!active || active.episodeIndex === null || !((_a = active.item.seasons) === null || _a === void 0 ? void 0 : _a.length))
        return null;
    var item = active.item, seasonIndex = active.seasonIndex, episodeIndex = active.episodeIndex;
    var nextSeasonIndex = seasonIndex;
    var nextEpisodeIndex = episodeIndex + 1;
    var currentSeason = item.seasons[seasonIndex];
    var seasonLength = ((_b = currentSeason === null || currentSeason === void 0 ? void 0 : currentSeason.episodes) === null || _b === void 0 ? void 0 : _b.length) || ((_c = currentSeason === null || currentSeason === void 0 ? void 0 : currentSeason.episodeFiles) === null || _c === void 0 ? void 0 : _c.length) || 0;
    if (nextEpisodeIndex >= seasonLength) {
        nextSeasonIndex = seasonIndex + 1;
        nextEpisodeIndex = 0;
    }
    var nextSeason = item.seasons[nextSeasonIndex];
    if (!nextSeason || nextEpisodeIndex >= (((_d = nextSeason.episodes) === null || _d === void 0 ? void 0 : _d.length) || 0))
        return null;
    return { seasonIndex: nextSeasonIndex, episodeIndex: nextEpisodeIndex };
}
function updatePlayerNextButton() {
    var button = document.getElementById('player-next');
    if (button)
        button.hidden = !nextEpisodeTarget();
}
function playNextEpisode(target) {
    var _a, _b;
    if (target === void 0) { target = nextEpisodeTarget(); }
    var active = state.activeVideo;
    if (!active || !target)
        return false;
    var item = active.item;
    var nextSeason = (_a = item.seasons) === null || _a === void 0 ? void 0 : _a[target.seasonIndex];
    var nextFile = (_b = nextSeason === null || nextSeason === void 0 ? void 0 : nextSeason.episodeFiles) === null || _b === void 0 ? void 0 : _b[target.episodeIndex];
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
    if ((nextFile === null || nextFile === void 0 ? void 0 : nextFile.playable) === false)
        showToast('O próximo episódio pode não tocar neste navegador.', 'error');
    return true;
}
function openPlayer(id, episodeIndex, options) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    if (episodeIndex === void 0) { episodeIndex = null; }
    if (options === void 0) { options = {}; }
    var item = getItem(id);
    if (!item)
        return;
    if (!isAllowedItem(item)) {
        showToast('Este título não está disponível no perfil infantil.', 'error');
        return;
    }
    var fromDetails = (_a = options.fromDetails) !== null && _a !== void 0 ? _a : detailsDialog.open;
    var resolvedEpisode = episodeIndex;
    var resolvedSeason = state.activeSeason;
    if (resolvedEpisode === null && ((_b = item.seasons) === null || _b === void 0 ? void 0 : _b.length) && (item.drive || item.local)) {
        var last = state.progress[item.id];
        if (last && Number.isInteger(last.season) && Number.isInteger(last.episode)) {
            resolvedSeason = last.season;
            resolvedEpisode = last.episode;
        }
        else {
            resolvedSeason = 0;
            resolvedEpisode = 0;
        }
    }
    if (resolvedEpisode !== null && ((_c = item.seasons) === null || _c === void 0 ? void 0 : _c.length)) {
        if (!item.seasons[resolvedSeason])
            resolvedSeason = 0;
        var seasonEpisodes = ((_d = item.seasons[resolvedSeason]) === null || _d === void 0 ? void 0 : _d.episodes) || [];
        if (resolvedEpisode >= seasonEpisodes.length)
            resolvedEpisode = 0;
    }
    var season = (_e = item.seasons) === null || _e === void 0 ? void 0 : _e[resolvedSeason];
    var episodeFile = resolvedEpisode !== null ? (_f = season === null || season === void 0 ? void 0 : season.episodeFiles) === null || _f === void 0 ? void 0 : _f[resolvedEpisode] : null;
    var progressKey = resolvedEpisode !== null && (item.drive || item.local)
        ? "".concat(item.id, "::s").concat(resolvedSeason, "e").concat(resolvedEpisode)
        : item.id;
    state.activeVideo = { item: item, episodeIndex: resolvedEpisode, seasonIndex: resolvedSeason, episodeFile: episodeFile, progressKey: progressKey, fallbackTried: false, fromDetails: fromDetails };
    if (resolvedEpisode !== null && item.seasons)
        state.activeSeason = resolvedSeason;
    videoPlayer.poster = item.backdrop;
    var initialSource = (episodeFile === null || episodeFile === void 0 ? void 0 : episodeFile.video) || item.video;
    var boostSeparator = initialSource && initialSource.includes('?') ? '&' : '?';
    videoPlayer.src = state.audioBoost > 1 && typeof initialSource === 'string' && initialSource.includes('/api/local/media')
        ? "".concat(initialSource).concat(boostSeparator, "boost=").concat(state.audioBoost)
        : initialSource;
    document.getElementById('player-title').textContent = item.title;
    document.getElementById('player-episode').textContent = resolvedEpisode !== null && item.seasons
        ? "".concat(item.seasons[resolvedSeason].name, " \u2022 Epis\u00F3dio ").concat((_g = episodeFile === null || episodeFile === void 0 ? void 0 : episodeFile.number) !== null && _g !== void 0 ? _g : resolvedEpisode + 1)
        : item.duration;
    document.getElementById('player-quality').textContent = state.quality;
    resetSubtitles();
    var saved = state.progress[progressKey] || null;
    var activeVideo = state.activeVideo;
    videoPlayer.addEventListener('loadedmetadata', function resume() {
        if (state.activeVideo !== activeVideo)
            return;
        videoPlayer.playbackRate = state.playbackRate;
        if ((saved === null || saved === void 0 ? void 0 : saved.seconds) && saved.seconds < videoPlayer.duration - 10 && (saved.percent || 0) < 100)
            videoPlayer.currentTime = saved.seconds;
    }, { once: true });
    if ((episodeFile === null || episodeFile === void 0 ? void 0 : episodeFile.playable) === false)
        showToast('Este formato pode não tocar no navegador. Prefira MP4 ou WebM.', 'error');
    if (detailsDialog.open)
        detailsDialog.close();
    if (!playerDialog.open) {
        playerDialog.showModal();
        document.body.classList.add('modal-open');
    }
    updatePlayerNextButton();
    updateBoostButton();
    updateSpeedButton();
    updatePipButton();
    var shouldAutoplay = (_h = options.autoplay) !== null && _h !== void 0 ? _h : state.autoplay;
    if (shouldAutoplay) {
        var promise = videoPlayer.play();
        if (promise)
            promise.catch(function () { return showToast('Clique em reproduzir para iniciar o vídeo', 'success'); });
    }
}
var BOOST_STEPS = [1, 1.5, 2, 3];
function localMediaUrl(item, episodeFile) {
    var url = (episodeFile === null || episodeFile === void 0 ? void 0 : episodeFile.video) || (item === null || item === void 0 ? void 0 : item.video) || '';
    return typeof url === 'string' && url.includes('/api/local/media') ? url : '';
}
function updateBoostButton() {
    if (!playerBoostButton)
        return;
    var active = state.activeVideo;
    var isLocal = Boolean(localMediaUrl(active === null || active === void 0 ? void 0 : active.item, active === null || active === void 0 ? void 0 : active.episodeFile));
    playerBoostButton.hidden = !isLocal;
    playerBoostLabel.textContent = "".concat(state.audioBoost, "\u00D7");
    playerBoostButton.classList.toggle('active', state.audioBoost > 1);
    playerBoostButton.setAttribute('aria-label', "Amplificar \u00E1udio (".concat(state.audioBoost, "\u00D7)"));
}
function applyAudioBoost(factor) {
    var active = state.activeVideo;
    var mediaUrl = localMediaUrl(active === null || active === void 0 ? void 0 : active.item, active === null || active === void 0 ? void 0 : active.episodeFile);
    if (!mediaUrl) {
        showToast('Amplificação disponível apenas para filmes do HD local.', 'error');
        return;
    }
    var time = Number.isFinite(videoPlayer.currentTime) ? videoPlayer.currentTime : 0;
    var wasPlaying = !videoPlayer.paused;
    var separator = mediaUrl.includes('?') ? '&' : '?';
    var base = mediaUrl.split('&boost=')[0].split('&start=')[0];
    state.audioBoost = factor;
    storage.set('nexa-audio-boost', factor);
    videoPlayer.src = factor > 1 ? "".concat(base).concat(separator, "boost=").concat(factor, "&start=").concat(Math.floor(time)) : base;
    videoPlayer.load();
    var resume = function () {
        if (time > 1)
            videoPlayer.currentTime = time;
        if (wasPlaying)
            videoPlayer.play().catch(function () { });
    };
    videoPlayer.addEventListener('loadedmetadata', resume, { once: true });
    updateBoostButton();
    showToast(factor > 1 ? "\u00C1udio amplificado ".concat(factor, "\u00D7") : 'Áudio normal', 'success');
}
function cycleAudioBoost() {
    var index = BOOST_STEPS.indexOf(state.audioBoost);
    var next = BOOST_STEPS[(index + 1) % BOOST_STEPS.length] || 1;
    applyAudioBoost(next);
}
function closePlayer() {
    if (videoPlayer.paused === false)
        videoPlayer.pause();
    resetSubtitles();
    playerDialog.close();
    document.body.classList.remove('modal-open');
}
function currentPlaybackKey() {
    var active = state.activeVideo;
    if (!active)
        return null;
    return active.progressKey || active.item.id;
}
function collectSubtitles() {
    var _a;
    var active = state.activeVideo;
    if (!active)
        return [];
    var list = [];
    var add = function (subtitle) {
        if (subtitle && !list.some(function (candidate) { return candidate.id === subtitle.id; }))
            list.push(subtitle);
    };
    (active.item.subtitles || []).forEach(add);
    (((_a = active.episodeFile) === null || _a === void 0 ? void 0 : _a.subtitles) || []).forEach(add);
    (subtitleStore.get(currentPlaybackKey()) || []).forEach(add);
    return list;
}
function localSubtitleTarget() {
    var _a, _b;
    var active = state.activeVideo;
    if (!((_a = active === null || active === void 0 ? void 0 : active.item) === null || _a === void 0 ? void 0 : _a.local))
        return null;
    var fileRel = ((_b = active.episodeFile) === null || _b === void 0 ? void 0 : _b.fileRel) || active.item.fileRel;
    if (!fileRel)
        return null;
    return {
        rootKey: active.item.rootKey,
        path: fileRel,
        title: active.item.title,
        year: active.item.year
    };
}
function updateSubtitleActionButtons() {
    var target = localSubtitleTarget();
    subtitleSearchOpen.hidden = false;
    var activeSubtitle = collectSubtitles().find(function (candidate) { return candidate.id === activeSubtitleId; });
    subtitleSaveHd.hidden = !(target && activeSubtitle && activeSubtitle.source === 'local');
}
function resetSubtitles() {
    closeSubtitleMenu();
    subtitleButton.classList.remove('active');
    subtitleButton.setAttribute('aria-expanded', 'false');
    activeSubtitleId = null;
    Array.prototype.forEach.call(videoPlayer.querySelectorAll('track'), function (track) { return track.remove(); });
    subtitleObjectUrls.forEach(function (url) { return URL.revokeObjectURL(url); });
    subtitleObjectUrls = [];
    subtitleMenuList.innerHTML = '';
}
function renderSubtitleMenu() {
    var subtitles = collectSubtitles();
    var offSelected = !activeSubtitleId;
    subtitleMenuList.innerHTML = "\n    <button class=\"subtitle-option ".concat(offSelected ? 'selected' : '', "\" type=\"button\" role=\"menuitemradio\" aria-checked=\"").concat(offSelected, "\" data-subtitle=\"\">\n      <span>Desligado</span>\n    </button>\n    ").concat(subtitles.map(function (subtitle) {
        var selected = subtitle.id === activeSubtitleId;
        return "<button class=\"subtitle-option ".concat(selected ? 'selected' : '', "\" type=\"button\" role=\"menuitemradio\" aria-checked=\"").concat(selected, "\" data-subtitle=\"").concat(subtitle.id, "\">\n        <span>").concat(escapeHtml(subtitle.label), "</span>\n        <small>").concat(subtitle.source === 'drive' ? 'Google Drive' : subtitle.source === 'local-server' ? 'HD local' : 'Arquivo local', "</small>\n      </button>");
    }).join(''), "\n    ").concat(subtitles.length ? '' : '<p class="subtitle-empty">Nenhuma legenda encontrada. Carregue um arquivo .srt ou .vtt.</p>');
    updateSubtitleActionButtons();
}
function openSubtitleMenu() {
    renderSubtitleMenu();
    subtitleMenu.hidden = false;
    subtitleButton.setAttribute('aria-expanded', 'true');
    scheduleControlsHide();
}
function closeSubtitleMenu() {
    if (!subtitleMenu)
        return;
    subtitleMenu.hidden = true;
    if (subtitleButton)
        subtitleButton.setAttribute('aria-expanded', 'false');
}
function disableSubtitles() {
    var tracks = videoPlayer.textTracks;
    for (var index = 0; index < tracks.length; index += 1)
        tracks[index].mode = 'disabled';
    activeSubtitleId = null;
    subtitleButton.classList.remove('active');
    renderSubtitleMenu();
}
function activateSubtitle(id) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var subtitle, text, _b, vtt, url, track, showTrack, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    subtitle = collectSubtitles().find(function (candidate) { return candidate.id === id; });
                    if (!subtitle)
                        return [2 /*return*/];
                    _d.label = 1;
                case 1:
                    _d.trys.push([1, 5, , 6]);
                    if (!((_a = subtitle.text) !== null && _a !== void 0)) return [3 /*break*/, 2];
                    _b = _a;
                    return [3 /*break*/, 4];
                case 2: return [4 /*yield*/, fetchSubtitleText(subtitle)];
                case 3:
                    _b = _d.sent();
                    _d.label = 4;
                case 4:
                    text = _b;
                    vtt = srtToVtt(text);
                    if (!vtt.trim())
                        throw new Error('Legenda vazia');
                    url = URL.createObjectURL(new Blob([vtt], { type: 'text/vtt' }));
                    subtitleObjectUrls.push(url);
                    Array.prototype.forEach.call(videoPlayer.querySelectorAll('track'), function (track) { return track.remove(); });
                    track = document.createElement('track');
                    track.kind = 'subtitles';
                    track.label = subtitle.label || 'Legenda';
                    track.srclang = subtitle.lang || 'pt';
                    track.src = url;
                    track.default = true;
                    videoPlayer.append(track);
                    showTrack = function () {
                        var tracks = videoPlayer.textTracks;
                        for (var index = 0; index < tracks.length; index += 1)
                            tracks[index].mode = tracks[index] === tracks[tracks.length - 1] ? 'showing' : 'disabled';
                    };
                    showTrack();
                    track.addEventListener('load', showTrack);
                    activeSubtitleId = subtitle.id;
                    subtitleButton.classList.add('active');
                    renderSubtitleMenu();
                    showToast("Legenda: ".concat(subtitle.label), 'success');
                    return [3 /*break*/, 6];
                case 5:
                    _c = _d.sent();
                    showToast('Não foi possível carregar essa legenda.', 'error');
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
function fetchSubtitleText(subtitle) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var url, response;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    url = subtitle.url || (subtitle.fileId ? driveMediaUrl(subtitle.fileId, ((_a = state.driveConfig) === null || _a === void 0 ? void 0 : _a.apiKey) || '') : '');
                    if (!url)
                        throw new Error('Legenda sem origem');
                    return [4 /*yield*/, fetch(url, { cache: 'no-store' })];
                case 1:
                    response = _b.sent();
                    if (!response.ok)
                        throw new Error("HTTP ".concat(response.status));
                    return [2 /*return*/, response.text()];
            }
        });
    });
}
function readFileText(file) {
    if (typeof file.text === 'function')
        return file.text();
    return new Promise(function (resolve, reject) {
        var reader = new FileReader();
        reader.onload = function () { return resolve(String(reader.result || '')); };
        reader.onerror = function () { return reject(reader.error || new Error('Falha ao ler o arquivo')); };
        reader.readAsText(file);
    });
}
function loadSubtitleFile(file) {
    return __awaiter(this, void 0, void 0, function () {
        var text, language, subtitle, key, stored, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!file)
                        return [2 /*return*/];
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, readFileText(file)];
                case 2:
                    text = _b.sent();
                    if (!text.trim())
                        throw new Error('Arquivo vazio');
                    language = subtitleLanguage(file.name);
                    subtitle = {
                        id: "local-sub-".concat(Date.now(), "-").concat(subtitleCounter += 1),
                        label: subtitleDisplayLabel(file.name),
                        lang: language.code || 'pt',
                        source: 'local',
                        name: file.name,
                        text: text
                    };
                    key = currentPlaybackKey();
                    if (!key)
                        return [2 /*return*/];
                    stored = subtitleStore.get(key) || [];
                    stored.push(subtitle);
                    subtitleStore.set(key, stored);
                    closeSubtitleMenu();
                    return [4 /*yield*/, activateSubtitle(subtitle.id)];
                case 3:
                    _b.sent();
                    return [3 /*break*/, 5];
                case 4:
                    _a = _b.sent();
                    showToast('Não foi possível ler o arquivo de legenda.', 'error');
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function toggleList(id, silent) {
    if (silent === void 0) { silent = false; }
    var item = getItem(id);
    if (!item)
        return;
    var adding = !state.list.has(id);
    if (adding)
        state.list.add(id);
    else
        state.list.delete(id);
    persistActiveProfile();
    document.getElementById('list-count').textContent = state.list.size;
    document.querySelectorAll("[data-action=\"toggle-list\"][data-id=\"".concat(id, "\"]")).forEach(function (button) {
        button.classList.toggle('in-list', adding);
        button.innerHTML = adding ? icon('check') : icon('plus');
        button.setAttribute('aria-label', "".concat(adding ? 'Remover' : 'Adicionar', " ").concat(item.title, " ").concat(adding ? 'da' : 'à', " lista"));
    });
    var detailButton = document.getElementById('detail-list');
    if (detailButton.dataset.id === id) {
        detailButton.innerHTML = "".concat(adding ? icon('check') : icon('plus'), "<span>").concat(adding ? 'Na minha lista' : 'Adicionar à lista', "</span>");
    }
    if (!silent)
        showToast(adding ? "".concat(item.title, " adicionado \u00E0 sua lista") : "".concat(item.title, " removido da sua lista"), 'success');
    if (state.view === 'lista')
        browseView();
}
function toggleLike(id) {
    var item = getItem(id);
    if (!item)
        return;
    var liking = !state.liked.has(id);
    if (liking)
        state.liked.add(id);
    else
        state.liked.delete(id);
    persistActiveProfile();
    var likeButton = document.getElementById('detail-like');
    likeButton.classList.toggle('liked', liking);
    likeButton.setAttribute('aria-pressed', String(liking));
    showToast(liking ? 'Obrigado pelo feedback!' : 'Avaliação removida', 'success');
}
function getShareUrl(item) {
    var url = new URL(window.location.href);
    url.hash = "/titulo/".concat(item.id);
    return url.toString();
}
function shareItem(id) {
    return __awaiter(this, void 0, void 0, function () {
        var item, url, shareData, error_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    item = getItem(id);
                    if (!item)
                        return [2 /*return*/];
                    url = getShareUrl(item);
                    shareData = { title: "".concat(item.title, " \u2014 NEXA"), text: item.description, url: url };
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 6, , 7]);
                    if (!navigator.share) return [3 /*break*/, 3];
                    return [4 /*yield*/, navigator.share(shareData)];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 5];
                case 3: return [4 /*yield*/, navigator.clipboard.writeText(url)];
                case 4:
                    _a.sent();
                    showToast('Link copiado para a área de transferência', 'success');
                    _a.label = 5;
                case 5: return [3 /*break*/, 7];
                case 6:
                    error_6 = _a.sent();
                    if (error_6.name !== 'AbortError')
                        showToast('Não foi possível compartilhar agora', 'error');
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    });
}
function showToast(message, type) {
    if (type === void 0) { type = 'success'; }
    var toast = document.createElement('div');
    toast.className = "toast ".concat(type);
    toast.innerHTML = "".concat(type === 'error' ? icon('info') : icon('check'), "<span>").concat(escapeHtml(message), "</span>");
    toastRegion.append(toast);
    window.setTimeout(function () {
        toast.classList.add('hiding');
        window.setTimeout(function () { return toast.remove(); }, 240);
    }, 3200);
}
function updateActiveNavigation() {
    Array.prototype.forEach.call(document.querySelectorAll('[data-view]'), function (button) {
        var active = button.dataset.view === state.view;
        button.classList.toggle('active', active);
        if (active)
            button.setAttribute('aria-current', 'page');
        else
            button.removeAttribute('aria-current');
    });
}
function resetSearchFilters() {
    state.searchFilters = { type: 'todos', genre: 'Todos', year: 'todos', rating: 0 };
}
function getSearchYears() {
    return __spreadArray([], __read(new Set(currentCatalog().map(function (item) { return String(item.year); }))), false).sort(function (a, b) { return Number(b) - Number(a); });
}
function searchFiltersView() {
    var filters = state.searchFilters;
    var types = [['todos', 'Todos'], ['filme', 'Filmes'], ['serie', 'Séries'], ['documentario', 'Documentários']];
    var ratings = [[0, 'Qualquer nota'], [7, 'Nota 7+'], [8, 'Nota 8+'], [9, 'Nota 9+']];
    var sorts = [['relevancia', 'Mais relevantes'], ['recentes', 'Mais recentes'], ['avaliacao', 'Melhor avaliados'], ['a-z', 'Título (A–Z)']];
    var genres = getGenres();
    var years = getSearchYears();
    var active = filters.type !== 'todos' || filters.genre !== 'Todos' || filters.year !== 'todos' || Number(filters.rating) > 0;
    var options = function (values, selected) { return values.map(function (_a) {
        var _b = __read(_a, 2), value = _b[0], label = _b[1];
        return "<option value=\"".concat(value, "\" ").concat(String(selected) === String(value) ? 'selected' : '', ">").concat(label, "</option>");
    }).join(''); };
    return "\n    <div class=\"search-filters\" role=\"group\" aria-label=\"Filtros da busca\">\n      <label class=\"search-filter\"><span>Tipo</span><select class=\"sort-select\" data-search-filter=\"type\">".concat(options(types, filters.type), "</select></label>\n      <label class=\"search-filter\"><span>G\u00EAnero</span><select class=\"sort-select\" data-search-filter=\"genre\">").concat(options(genres.map(function (genre) { return [genre, genre]; }), filters.genre), "</select></label>\n      <label class=\"search-filter\"><span>Ano</span><select class=\"sort-select\" data-search-filter=\"year\">").concat(options(__spreadArray([['todos', 'Qualquer ano']], __read(years.map(function (year) { return [year, year]; })), false), filters.year), "</select></label>\n      <label class=\"search-filter\"><span>Nota</span><select class=\"sort-select\" data-search-filter=\"rating\">").concat(options(ratings, filters.rating), "</select></label>\n      <label class=\"search-filter\"><span>Ordenar</span><select class=\"sort-select\" data-search-sort>").concat(options(sorts, state.sort), "</select></label>\n      <button class=\"filter-reset\" type=\"button\" data-search-reset ").concat(active ? '' : 'disabled', ">Limpar filtros</button>\n    </div>");
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
        var items = filteredCatalog('busca');
        mainContent.innerHTML = "\n      <section class=\"section-view\">\n        <header class=\"section-header\"><div><p class=\"eyebrow\">Resultados</p><h1>".concat(state.query ? "Busca por \u201C".concat(escapeHtml(state.query), "\u201D") : 'Busca', "</h1><p>").concat(items.length, " ").concat(items.length === 1 ? 'resultado encontrado' : 'resultados encontrados', ".</p></div></header>\n        ").concat(searchFiltersView(), "\n        ").concat(items.length ? "<div class=\"media-grid\">".concat(items.map(function (item) { return posterCard(item); }).join(''), "</div>") : "<div class=\"empty-state\"><div class=\"empty-state-inner\"><span class=\"empty-icon\">".concat(icon('search'), "</span><h2>Nada encontrado</h2><p>Experimente outro t\u00EDtulo, g\u00EAnero ou pessoa do elenco.</p><button class=\"button button-red\" type=\"button\" data-search-reset>Limpar filtros</button></div></div>"), "\n      </section>");
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    else if (state.view === 'busca') {
        resetSearchFilters();
        renderView(state.previousView || 'home');
    }
}
function formatTime(seconds) {
    if (!Number.isFinite(seconds))
        return '0:00';
    var minutes = Math.floor(seconds / 60);
    var remainder = Math.floor(seconds % 60);
    return "".concat(minutes, ":").concat(String(remainder).padStart(2, '0'));
}
function updatePlayerProgress() {
    var duration = videoPlayer.duration || 0;
    var percent = duration ? (videoPlayer.currentTime / duration) * 100 : 0;
    document.getElementById('player-progress').value = percent;
    document.getElementById('player-current').textContent = formatTime(videoPlayer.currentTime);
    document.getElementById('player-duration').textContent = formatTime(duration);
    if (duration && videoPlayer.buffered.length) {
        var buffered = videoPlayer.buffered.end(videoPlayer.buffered.length - 1);
        document.getElementById('buffered-bar').style.width = "".concat((buffered / duration) * 100, "%");
    }
}
function progressKeyPrefix(itemId) {
    return "".concat(itemId, "::");
}
function isItemSeen(item) {
    var progress = state.progress[item === null || item === void 0 ? void 0 : item.id];
    return Boolean(progress && progress.percent >= 100);
}
function isItemInProgress(item) {
    var progress = state.progress[item === null || item === void 0 ? void 0 : item.id];
    return Boolean(progress && progress.percent > 0 && progress.percent < 100);
}
function clearItemProgress(item) {
    if (!item)
        return;
    delete state.progress[item.id];
    Object.keys(state.progress).forEach(function (key) {
        if (key.startsWith(progressKeyPrefix(item.id)))
            delete state.progress[key];
    });
}
function markItemSeen(item) {
    if (!item)
        return;
    clearItemProgress(item);
    state.progress[item.id] = { percent: 100, seconds: 0, updatedAt: Date.now() };
}
function updateSeenButton(item) {
    var button = document.getElementById('detail-seen');
    if (!button || !item)
        return;
    var seen = isItemSeen(item);
    button.innerHTML = "".concat(icon(seen ? 'eye-off' : 'eye'), "<span>").concat(seen ? 'Marcar como não visto' : 'Marcar como visto', "</span>");
    button.setAttribute('aria-pressed', String(seen));
    button.dataset.id = item.id;
}
function toggleSeen(id) {
    var item = getItem(id);
    if (!item)
        return;
    if (isItemSeen(item)) {
        clearItemProgress(item);
        showToast("".concat(item.title, " marcado como n\u00E3o visto"), 'success');
    }
    else {
        markItemSeen(item);
        showToast("".concat(item.title, " marcado como visto"), 'success');
    }
    persistActiveProfile();
    updateSeenButton(item);
    var playButton = document.getElementById('detail-play');
    if (playButton && playButton.dataset.id === item.id) {
        playButton.innerHTML = "".concat(icon('play'), "<span>").concat(isItemSeen(item) ? 'Assistir novamente' : (state.progress[item.id] ? 'Continuar assistindo' : 'Assistir'), "</span>");
    }
    refreshCurrentView();
}
function saveProgress() {
    if (!state.activeVideo || !Number.isFinite(videoPlayer.duration) || videoPlayer.duration <= 0)
        return;
    var _a = state.activeVideo, item = _a.item, seasonIndex = _a.seasonIndex, episodeIndex = _a.episodeIndex, progressKey = _a.progressKey;
    var rawPercent = (videoPlayer.currentTime / videoPlayer.duration) * 100;
    var ended = videoPlayer.ended || rawPercent >= 99.5;
    var percent = ended ? 100 : Math.min(99, Math.max(1, Math.round(rawPercent)));
    var entry = { percent: percent, seconds: Math.round(videoPlayer.currentTime), updatedAt: Date.now() };
    var hasSeries = episodeIndex !== null && (item.drive || item.local);
    if (hasSeries) {
        entry.season = seasonIndex;
        entry.episode = episodeIndex;
    }
    state.progress[progressKey || item.id] = entry;
    if (hasSeries) {
        if (percent >= 100) {
            state.progress[item.id] = { percent: 99, seconds: 0, season: seasonIndex, episode: episodeIndex, updatedAt: Date.now() };
        }
        else {
            state.progress[item.id] = entry;
        }
    }
    persistActiveProfile();
}
function setQuality(value) {
    state.quality = value;
    storage.set('nexa-quality', value);
    document.getElementById('player-quality').textContent = value;
    var select = document.getElementById('settings-quality');
    if (select)
        select.value = value;
}
function setPlayerPlaying(playing) {
    document.getElementById('player-shell').classList.toggle('playing', playing);
}
function togglePlay() {
    if (videoPlayer.paused)
        videoPlayer.play().catch(function () { });
    else
        videoPlayer.pause();
}
function skip(seconds) {
    videoPlayer.currentTime = Math.max(0, Math.min(videoPlayer.duration || 0, videoPlayer.currentTime + seconds));
}
function toggleMute() {
    videoPlayer.muted = !videoPlayer.muted;
    document.getElementById('player-mute').classList.toggle('muted', videoPlayer.muted);
}
function toggleFullscreen() {
    var _a, _b, _c;
    if (!document.fullscreenElement)
        (_b = (_a = document.getElementById('player-shell')).requestFullscreen) === null || _b === void 0 ? void 0 : _b.call(_a);
    else
        (_c = document.exitFullscreen) === null || _c === void 0 ? void 0 : _c.call(document);
}
function openShortcutsDialog() {
    if (!shortcutsDialog)
        return;
    if (!shortcutsDialog.open) {
        shortcutsDialog.showModal();
        document.body.classList.add('modal-open');
    }
}
function closeShortcutsDialog() {
    if (!(shortcutsDialog === null || shortcutsDialog === void 0 ? void 0 : shortcutsDialog.open))
        return;
    shortcutsDialog.close();
}
function scheduleControlsHide() {
    var shell = document.getElementById('player-shell');
    clearTimeout(state.hideControlsTimer);
    shell.classList.remove('controls-hidden');
    state.hideControlsTimer = window.setTimeout(function () {
        if (!videoPlayer.paused && subtitleMenu.hidden)
            shell.classList.add('controls-hidden');
    }, 2800);
}
document.addEventListener('click', function (event) {
    var albumTarget = event.target.closest('[data-album]');
    if (albumTarget) {
        var album = state.musicAlbums.find(function (entry) { return entry.id === albumTarget.dataset.album; });
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
    var trackTarget = event.target.closest('[data-track]');
    if (trackTarget) {
        playAlbumTrack(trackTarget.dataset.track, Number(trackTarget.dataset.trackIndex));
        return;
    }
    var albumPlayTarget = event.target.closest('[data-play-album]');
    if (albumPlayTarget) {
        playAlbumTrack(albumPlayTarget.dataset.playAlbum, 0);
        return;
    }
    if (event.target.closest('[data-local-settings]')) {
        openSettings();
        window.setTimeout(function () {
            var _a, _b;
            (_a = document.querySelector('.local-settings')) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ block: 'start' });
            (_b = document.getElementById('local-root')) === null || _b === void 0 ? void 0 : _b.focus({ preventScroll: true });
        }, 60);
        return;
    }
    var actionTarget = event.target.closest('[data-action]');
    if (actionTarget) {
        var _a = actionTarget.dataset, action = _a.action, id = _a.id;
        if (action === 'play')
            openPlayer(id);
        if (action === 'details')
            openDetails(id);
        if (action === 'toggle-list')
            toggleList(id);
        if (action === 'play-episode') {
            state.activeSeason = Number(actionTarget.dataset.season);
            state.activeEpisode = Number(actionTarget.dataset.episode);
            openPlayer(id, state.activeEpisode);
        }
        return;
    }
    var viewTarget = event.target.closest('[data-view], [data-view-link]');
    if (viewTarget) {
        event.preventDefault();
        var view = viewTarget.dataset.view || viewTarget.dataset.viewLink;
        state.query = '';
        searchInput.value = '';
        searchBox.classList.remove('has-value');
        renderView(view);
        closeSidebar();
    }
    var genreTarget = event.target.closest('[data-genre]');
    if (genreTarget) {
        state.genre = genreTarget.dataset.genre;
        browseView();
    }
});
document.addEventListener('keydown', function (event) {
    var keys = ['ArrowLeft', 'ArrowRight', 'Home', 'End'];
    if (!keys.includes(event.key))
        return;
    var card = event.target.closest('.media-card');
    var row = card === null || card === void 0 ? void 0 : card.closest('.media-row');
    if (!card || !row)
        return;
    var cards = __spreadArray([], __read(row.querySelectorAll('.media-card')), false);
    var index = cards.indexOf(card);
    if (index === -1)
        return;
    var next = index;
    if (event.key === 'ArrowRight')
        next = Math.min(cards.length - 1, index + 1);
    if (event.key === 'ArrowLeft')
        next = Math.max(0, index - 1);
    if (event.key === 'Home')
        next = 0;
    if (event.key === 'End')
        next = cards.length - 1;
    if (next === index)
        return;
    event.preventDefault();
    var target = cards[next].querySelector('.poster-open');
    target === null || target === void 0 ? void 0 : target.focus();
    target === null || target === void 0 ? void 0 : target.scrollIntoView({ block: 'nearest', inline: 'center' });
});
document.getElementById('detail-play').addEventListener('click', function (event) { return openPlayer(event.currentTarget.dataset.id); });
document.getElementById('detail-list').addEventListener('click', function (event) { return toggleList(event.currentTarget.dataset.id); });
document.getElementById('detail-seen').addEventListener('click', function (event) { return toggleSeen(event.currentTarget.dataset.id); });
document.getElementById('detail-like').addEventListener('click', function (event) { return toggleLike(event.currentTarget.dataset.id); });
document.getElementById('detail-share').addEventListener('click', function (event) { return shareItem(event.currentTarget.dataset.id); });
document.getElementById('season-select').addEventListener('change', function (event) {
    state.activeSeason = Number(event.target.value);
    if (state.activeItem)
        renderEpisodes(state.activeItem, state.activeSeason);
});
document.querySelector('[data-close-dialog]').addEventListener('click', function () { return detailsDialog.close(); });
detailsDialog.addEventListener('close', function () {
    document.body.classList.remove('modal-open');
    if (window.location.hash.startsWith('#/titulo/'))
        history.replaceState(null, '', window.location.pathname + window.location.search);
    if (!state.activeVideo && !playerDialog.open && !settingsDialog.open && !(shortcutsDialog === null || shortcutsDialog === void 0 ? void 0 : shortcutsDialog.open) && state.activeItem)
        focusCard(state.activeItem.id);
});
detailsDialog.addEventListener('click', function (event) {
    if (event.target === detailsDialog)
        detailsDialog.close();
});
playerDialog.addEventListener('cancel', function (event) {
    event.preventDefault();
    closePlayer();
});
playerDialog.addEventListener('close', function () {
    saveProgress();
    videoPlayer.pause();
    document.body.classList.remove('modal-open');
    var origin = state.activeVideo;
    state.activeVideo = null;
    refreshCurrentView();
    if ((origin === null || origin === void 0 ? void 0 : origin.fromDetails) && origin.item)
        openDetails(origin.item.id);
    else if (origin === null || origin === void 0 ? void 0 : origin.item)
        focusCard(origin.item.id);
});
document.getElementById('player-close').addEventListener('click', closePlayer);
document.getElementById('player-play').addEventListener('click', togglePlay);
document.getElementById('player-center-play').addEventListener('click', togglePlay);
document.getElementById('player-back').addEventListener('click', function () { return skip(-10); });
document.getElementById('player-forward').addEventListener('click', function () { return skip(10); });
document.getElementById('player-mute').addEventListener('click', toggleMute);
playerBoostButton.addEventListener('click', cycleAudioBoost);
playerSpeedButton === null || playerSpeedButton === void 0 ? void 0 : playerSpeedButton.addEventListener('click', cyclePlaybackRate);
playerPipButton === null || playerPipButton === void 0 ? void 0 : playerPipButton.addEventListener('click', togglePictureInPicture);
document.getElementById('player-fullscreen').addEventListener('click', toggleFullscreen);
videoPlayer.addEventListener('enterpictureinpicture', updatePipButton);
videoPlayer.addEventListener('leavepictureinpicture', updatePipButton);
videoPlayer.addEventListener('loadedmetadata', function () {
    videoPlayer.playbackRate = state.playbackRate;
});
document.getElementById('player-progress').addEventListener('input', function (event) {
    if (videoPlayer.duration)
        videoPlayer.currentTime = (Number(event.target.value) / 100) * videoPlayer.duration;
});
document.getElementById('player-volume').addEventListener('input', function (event) {
    videoPlayer.volume = Number(event.target.value);
    videoPlayer.muted = false;
});
document.getElementById('player-next').addEventListener('click', function () { return playNextEpisode(); });
document.getElementById('player-quality').addEventListener('click', function () {
    setQuality(state.quality === 'HD' ? '4K' : 'HD');
    showToast("Qualidade alterada para ".concat(state.quality), 'success');
});
subtitleButton.addEventListener('click', function (event) {
    event.stopPropagation();
    if (subtitleMenu.hidden)
        openSubtitleMenu();
    else
        closeSubtitleMenu();
});
document.getElementById('subtitle-close').addEventListener('click', closeSubtitleMenu);
document.getElementById('subtitle-upload').addEventListener('click', function () { return subtitleFileInput.click(); });
function saveActiveSubtitleToHd() {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var target, subtitle, text, _b, response, data, saved_1, owner, list, error_7;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    target = localSubtitleTarget();
                    subtitle = collectSubtitles().find(function (candidate) { return candidate.id === activeSubtitleId; });
                    if (!target || !subtitle) {
                        showToast('Carregue uma legenda antes de salvar no HD.', 'error');
                        return [2 /*return*/];
                    }
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 8, , 9]);
                    if (!((_a = subtitle.text) !== null && _a !== void 0)) return [3 /*break*/, 2];
                    _b = _a;
                    return [3 /*break*/, 4];
                case 2: return [4 /*yield*/, fetchSubtitleText(subtitle)];
                case 3:
                    _b = _c.sent();
                    _c.label = 4;
                case 4:
                    text = _b;
                    return [4 /*yield*/, fetch(localApi('/api/local/subtitle/upload'), {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ root: target.rootKey, path: target.path, lang: subtitle.lang || 'pt', content: text })
                        })];
                case 5:
                    response = _c.sent();
                    return [4 /*yield*/, response.json().catch(function () { return ({}); })];
                case 6:
                    data = _c.sent();
                    if (!response.ok)
                        throw new Error(data.error || "HTTP ".concat(response.status));
                    saved_1 = {
                        id: "local-sub-".concat(Date.now()),
                        label: subtitle.label || 'Legenda',
                        lang: subtitle.lang || 'pt',
                        source: 'local-server',
                        name: data.name,
                        url: data.url
                    };
                    owner = state.activeVideo.episodeFile || state.activeVideo.item;
                    list = owner.subtitles || (owner.subtitles = []);
                    if (!list.some(function (candidate) { return candidate.url === saved_1.url; }))
                        list.push(saved_1);
                    closeSubtitleMenu();
                    renderSubtitleMenu();
                    return [4 /*yield*/, activateSubtitle(saved_1.id)];
                case 7:
                    _c.sent();
                    showToast("Legenda salva no HD: ".concat(data.name), 'success');
                    return [3 /*break*/, 9];
                case 8:
                    error_7 = _c.sent();
                    showToast(error_7.message || 'Não foi possível salvar a legenda no HD.', 'error');
                    return [3 /*break*/, 9];
                case 9: return [2 /*return*/];
            }
        });
    });
}
subtitleSaveHd.addEventListener('click', saveActiveSubtitleToHd);
subtitleSearchOpen.addEventListener('click', function () {
    var _a;
    var target = localSubtitleTarget();
    var item = (_a = state.activeVideo) === null || _a === void 0 ? void 0 : _a.item;
    var title = (target === null || target === void 0 ? void 0 : target.title) || (item === null || item === void 0 ? void 0 : item.title) || '';
    if (!title) {
        showToast('Abra um filme ou episódio para buscar legendas.', 'error');
        return;
    }
    closeSubtitleMenu();
    subtitleSearchInput.value = title.replace(/\(\d{4}\)/, '').trim();
    subtitleResults.innerHTML = '';
    document.getElementById('subtitle-search-hint').textContent = "".concat(target
        ? "Buscando legendas para \u201C".concat(title, "\u201D. Escolha uma para baixar e salvar ao lado do filme no HD.")
        : "Buscando legendas para \u201C".concat(title, "\u201D. Escolha uma para usar agora (para salvar no HD, abra o filme do HD local)."), " ").concat(localServerHint());
    if (!subtitleSearchDialog.open)
        subtitleSearchDialog.showModal();
    document.body.classList.add('modal-open');
    window.setTimeout(function () { return subtitleSearchInput.focus(); }, 60);
});
var omdbDialog = document.getElementById('omdb-dialog');
var omdbResults = document.getElementById('omdb-results');
var omdbQuery = document.getElementById('omdb-dialog-query');
document.getElementById('detail-omdb').addEventListener('click', function () {
    var _a;
    var item = getItem((_a = state.activeItem) === null || _a === void 0 ? void 0 : _a.id);
    if (!(item === null || item === void 0 ? void 0 : item.local))
        return;
    omdbQuery.value = item.title.replace(/\(\d{4}\)/, '').trim();
    omdbResults.innerHTML = '';
    omdbDialog.showModal();
    document.body.classList.add('modal-open');
    window.setTimeout(function () { return omdbQuery.focus(); }, 60);
});
document.getElementById('omdb-dialog-close').addEventListener('click', function () { return omdbDialog.close(); });
omdbDialog.addEventListener('close', function () {
    document.body.classList.remove('modal-open');
});
document.getElementById('omdb-dialog-run').addEventListener('click', function () { return __awaiter(_this, void 0, void 0, function () {
    var title, response, data, candidates, error_8;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                title = omdbQuery.value.trim();
                if (!title)
                    return [2 /*return*/];
                omdbResults.innerHTML = '<li class="subtitle-result-empty">Buscando no OMDb...</li>';
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                return [4 /*yield*/, fetch(localApi("/api/local/omdb/candidates?title=".concat(encodeURIComponent(title))), { cache: 'no-store' })];
            case 2:
                response = _a.sent();
                return [4 /*yield*/, response.json().catch(function () { return ({}); })];
            case 3:
                data = _a.sent();
                if (!response.ok)
                    throw new Error(data.error || "HTTP ".concat(response.status));
                candidates = Array.isArray(data.candidates) ? data.candidates : [];
                if (!candidates.length) {
                    omdbResults.innerHTML = '<li class="subtitle-result-empty">Nada encontrado. Tente o título original.</li>';
                    return [2 /*return*/];
                }
                omdbResults.innerHTML = candidates.map(function (candidate) { return "\n      <li>\n        <button type=\"button\" data-omdb-choose=\"".concat(candidate.imdbId, "\">\n          <strong>").concat(escapeHtml(candidate.title), "</strong>\n          <small>").concat(escapeHtml(candidate.year || '')).concat(candidate.type ? " \u2022 ".concat(candidate.type) : '', "</small>\n        </button>\n      </li>"); }).join('');
                return [3 /*break*/, 5];
            case 4:
                error_8 = _a.sent();
                omdbResults.innerHTML = "<li class=\"subtitle-result-empty\">".concat(escapeHtml(error_8.message || 'Falha na busca.'), "</li>");
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); });
omdbResults.addEventListener('click', function (event) { return __awaiter(_this, void 0, void 0, function () {
    var button, item, response, data, updated, error_9;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                button = event.target.closest('[data-omdb-choose]');
                if (!button)
                    return [2 /*return*/];
                item = getItem((_a = state.activeItem) === null || _a === void 0 ? void 0 : _a.id);
                if (!(item === null || item === void 0 ? void 0 : item.local))
                    return [2 /*return*/];
                button.disabled = true;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 5, , 6]);
                return [4 /*yield*/, fetch(localApi('/api/local/omdb/choose'), {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ root: item.rootKey, path: item.fileRel, imdbId: button.dataset.omdbChoose })
                    })];
            case 2:
                response = _b.sent();
                return [4 /*yield*/, response.json().catch(function () { return ({}); })];
            case 3:
                data = _b.sent();
                if (!response.ok)
                    throw new Error(data.error || "HTTP ".concat(response.status));
                return [4 /*yield*/, loadLocalLibrary({ silent: true })];
            case 4:
                _b.sent();
                omdbDialog.close();
                updated = getItem(item.id);
                if (updated)
                    openDetails(updated.id);
                showToast('Filme identificado. Metadados atualizados.', 'success');
                return [3 /*break*/, 6];
            case 5:
                error_9 = _b.sent();
                showToast(error_9.message || 'Não foi possível salvar a escolha.', 'error');
                button.disabled = false;
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); });
document.getElementById('subtitle-search-close').addEventListener('click', function () { return subtitleSearchDialog.close(); });
subtitleSearchDialog.addEventListener('close', function () {
    document.body.classList.remove('modal-open');
});
document.getElementById('subtitle-search-run').addEventListener('click', function () { return __awaiter(_this, void 0, void 0, function () {
    var target, title, params, year, response, data, results, error_10, message, base;
    var _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                target = localSubtitleTarget();
                title = subtitleSearchInput.value.trim();
                if (!title) {
                    subtitleResults.innerHTML = '<li class="subtitle-result-empty">Digite o título do filme.</li>';
                    return [2 /*return*/];
                }
                subtitleResults.innerHTML = '<li class="subtitle-result-empty">Buscando no OpenSubtitles...</li>';
                params = new URLSearchParams({ title: title });
                year = (target === null || target === void 0 ? void 0 : target.year) || ((_b = (_a = state.activeVideo) === null || _a === void 0 ? void 0 : _a.item) === null || _b === void 0 ? void 0 : _b.year);
                if (year)
                    params.set('year', String(year));
                if (target === null || target === void 0 ? void 0 : target.rootKey)
                    params.set('root', target.rootKey);
                if (target === null || target === void 0 ? void 0 : target.path)
                    params.set('path', target.path);
                _c.label = 1;
            case 1:
                _c.trys.push([1, 4, , 5]);
                return [4 /*yield*/, fetch(localApi("/api/local/subtitle/search?".concat(params.toString())), { cache: 'no-store', signal: localFetchSignal() })];
            case 2:
                response = _c.sent();
                return [4 /*yield*/, response.json().catch(function () { return ({}); })];
            case 3:
                data = _c.sent();
                if (!response.ok)
                    throw new Error(data.error || "HTTP ".concat(response.status));
                results = Array.isArray(data.results) ? data.results : [];
                if (!results.length) {
                    subtitleResults.innerHTML = '<li class="subtitle-result-empty">Nenhuma legenda encontrada. Tente o título original em inglês.</li>';
                    return [2 /*return*/];
                }
                subtitleResults.innerHTML = results.map(function (result) { return "\n      <li>\n        <button type=\"button\" data-subtitle-download=\"".concat(result.id, "\" data-lang=\"").concat(result.lang || 'pt', "\" data-link=\"").concat(result.link || '', "\" data-api=\"").concat(result.api || '', "\">\n          <strong>").concat(escapeHtml(result.name || 'Legenda'), "</strong>\n          <small>").concat(escapeHtml(result.fileName || ''), "</small>\n          <span class=\"subtitle-result-meta\">").concat(escapeHtml(result.lang || 'pt')).concat(result.hearingImpaired ? ' • SDH' : '').concat(result.downloads ? " \u2022 ".concat(result.downloads, " downloads") : '', "</span>\n        </button>\n      </li>"); }).join('');
                return [3 /*break*/, 5];
            case 4:
                error_10 = _c.sent();
                message = error_10.name === 'AbortError'
                    ? 'Tempo esgotado ao falar com o servidor local.'
                    : (error_10.message || 'Falha na busca.');
                base = escapeHtml(localServerBase());
                subtitleResults.innerHTML = "<li class=\"subtitle-result-empty\">".concat(escapeHtml(message), "<br>").concat(escapeHtml(localServerHint()), "<br>Abra o NEXA em <code>").concat(base, "</code> e rode <code>python3 local_server.py</code>.</li>");
                showToast(message, 'error');
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); });
subtitleResults.addEventListener('click', function (event) { return __awaiter(_this, void 0, void 0, function () {
    var button, target, response, data, subtitle_1, owner, list, key, stored, error_11, message;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                button = event.target.closest('[data-subtitle-download]');
                if (!button)
                    return [2 /*return*/];
                target = localSubtitleTarget();
                button.disabled = true;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 5, , 6]);
                return [4 /*yield*/, fetch(localApi('/api/local/subtitle/download'), {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(__assign({ subtitleId: button.dataset.subtitleDownload, link: button.dataset.link || '', api: button.dataset.api || '', lang: button.dataset.lang || 'pt' }, (target ? { root: target.rootKey, path: target.path } : {}))),
                        signal: localFetchSignal()
                    })];
            case 2:
                response = _a.sent();
                return [4 /*yield*/, response.json().catch(function () { return ({}); })];
            case 3:
                data = _a.sent();
                if (!response.ok)
                    throw new Error(data.error || "HTTP ".concat(response.status));
                subtitle_1 = __assign({ id: "local-sub-".concat(Date.now()), label: 'Legenda (baixada)', lang: button.dataset.lang || 'pt', source: data.saved ? 'local-server' : 'local', name: data.name || 'legenda' }, (data.saved ? { url: data.url } : { text: data.content }));
                if (data.saved) {
                    owner = state.activeVideo.episodeFile || state.activeVideo.item;
                    list = owner.subtitles || (owner.subtitles = []);
                    if (!list.some(function (candidate) { return candidate.url === subtitle_1.url; }))
                        list.push(subtitle_1);
                }
                else {
                    key = currentPlaybackKey();
                    stored = subtitleStore.get(key) || [];
                    stored.push(subtitle_1);
                    subtitleStore.set(key, stored);
                }
                subtitleSearchDialog.close();
                renderSubtitleMenu();
                return [4 /*yield*/, activateSubtitle(subtitle_1.id)];
            case 4:
                _a.sent();
                showToast(data.saved ? "Legenda baixada e salva no HD: ".concat(data.name) : 'Legenda baixada e aplicada.', 'success');
                return [3 /*break*/, 6];
            case 5:
                error_11 = _a.sent();
                message = error_11.name === 'AbortError' ? 'Tempo esgotado ao baixar a legenda.' : (error_11.message || 'Não foi possível baixar a legenda.');
                subtitleResults.innerHTML = "<li class=\"subtitle-result-empty\">".concat(escapeHtml(message), "<br>").concat(escapeHtml(localServerHint()), "</li>");
                showToast(message, 'error');
                button.disabled = false;
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); });
subtitleFileInput.addEventListener('change', function () {
    var _a;
    var file = (_a = subtitleFileInput.files) === null || _a === void 0 ? void 0 : _a[0];
    subtitleFileInput.value = '';
    loadSubtitleFile(file);
});
subtitleMenuList.addEventListener('click', function (event) {
    var option = event.target.closest('[data-subtitle]');
    if (!option)
        return;
    var id = option.dataset.subtitle;
    if (id) {
        closeSubtitleMenu();
        activateSubtitle(id);
    }
    else {
        disableSubtitles();
    }
});
document.addEventListener('click', function (event) {
    if (subtitleMenu.hidden)
        return;
    if (event.target.closest('#subtitle-menu') || event.target.closest('#player-subtitles'))
        return;
    closeSubtitleMenu();
});
videoPlayer.addEventListener('error', function () {
    var _a, _b, _c, _d;
    var active = state.activeVideo;
    if (!active) {
        showToast('Não foi possível carregar o vídeo', 'error');
        return;
    }
    if (active.fallbackTried) {
        showToast('Não foi possível carregar o vídeo', 'error');
        return;
    }
    var localTranscode = ((_a = active.episodeFile) === null || _a === void 0 ? void 0 : _a.transcodeUrl) || ((_b = active.item) === null || _b === void 0 ? void 0 : _b.transcodeUrl);
    if (localTranscode) {
        active.fallbackTried = true;
        var saved = state.progress[currentPlaybackKey()];
        var start = (saved === null || saved === void 0 ? void 0 : saved.seconds) ? "&start=".concat(Math.floor(saved.seconds)) : '';
        videoPlayer.src = "".concat(localTranscode).concat(start);
        videoPlayer.load();
        if (state.autoplay)
            videoPlayer.play().catch(function () { });
        showToast('Transcodificando o vídeo do HD...', 'success');
        return;
    }
    var fileId = ((_c = active === null || active === void 0 ? void 0 : active.episodeFile) === null || _c === void 0 ? void 0 : _c.fileId) || ((_d = active === null || active === void 0 ? void 0 : active.item) === null || _d === void 0 ? void 0 : _d.driveFileId);
    if (!fileId) {
        showToast('Não foi possível carregar o vídeo', 'error');
        return;
    }
    active.fallbackTried = true;
    videoPlayer.src = driveDownloadUrl(fileId);
    videoPlayer.load();
    if (state.autoplay)
        videoPlayer.play().catch(function () { });
    showToast('Tentando um link alternativo do Drive...', 'success');
});
var boostSeeking = false;
videoPlayer.addEventListener('seeking', function () {
    if (boostSeeking || state.audioBoost <= 1)
        return;
    var active = state.activeVideo;
    var mediaUrl = localMediaUrl(active === null || active === void 0 ? void 0 : active.item, active === null || active === void 0 ? void 0 : active.episodeFile);
    if (!mediaUrl)
        return;
    boostSeeking = true;
    var base = mediaUrl.split('&boost=')[0].split('&start=')[0];
    videoPlayer.src = "".concat(base, "&boost=").concat(state.audioBoost, "&start=").concat(Math.floor(videoPlayer.currentTime || 0));
    videoPlayer.load();
    var release = function () {
        boostSeeking = false;
        videoPlayer.removeEventListener('seeked', release);
    };
    videoPlayer.addEventListener('seeked', release);
});
videoPlayer.addEventListener('play', function () { return setPlayerPlaying(true); });
videoPlayer.addEventListener('pause', function () { return setPlayerPlaying(false); });
videoPlayer.addEventListener('timeupdate', updatePlayerProgress);
videoPlayer.addEventListener('loadedmetadata', updatePlayerProgress);
videoPlayer.addEventListener('ended', function () {
    var _a;
    saveProgress();
    var active = state.activeVideo;
    if (!active || active.episodeIndex === null || !((_a = active.item.seasons) === null || _a === void 0 ? void 0 : _a.length))
        return;
    var target = nextEpisodeTarget(active);
    if (!target) {
        showToast('Você chegou ao último episódio disponível.', 'success');
        return;
    }
    if (state.autoplay) {
        playNextEpisode(target);
    }
    else {
        showToast('Próximo episódio disponível. Use o botão de próximo episódio no player.', 'success');
    }
});
document.getElementById('player-shell').addEventListener('mousemove', scheduleControlsHide);
document.getElementById('player-shell').addEventListener('mouseleave', function () {
    if (!videoPlayer.paused && subtitleMenu.hidden)
        document.getElementById('player-shell').classList.add('controls-hidden');
});
musicAudio.addEventListener('ended', playNextTrack);
musicAudio.addEventListener('error', function () {
    if (musicAudio.getAttribute('src'))
        showToast('Não foi possível tocar esta música.', 'error');
});
document.getElementById('music-close').addEventListener('click', stopMusic);
searchInput.addEventListener('input', function (event) { return handleSearch(event.target.value); });
document.getElementById('search-form').addEventListener('submit', function (event) {
    event.preventDefault();
    handleSearch(searchInput.value);
});
document.getElementById('search-clear').addEventListener('click', function () {
    searchInput.value = '';
    handleSearch('');
    searchInput.focus();
});
document.addEventListener('change', function (event) {
    if (event.target.id === 'sort-select') {
        state.sort = event.target.value;
        browseView();
        return;
    }
    var searchFilter = event.target.closest('[data-search-filter]');
    if (searchFilter) {
        var key = searchFilter.dataset.searchFilter;
        state.searchFilters[key] = key === 'rating' ? Number(searchFilter.value) : searchFilter.value;
        handleSearch(state.query);
        return;
    }
    if (event.target.closest('[data-search-sort]')) {
        state.sort = event.target.value;
        handleSearch(state.query);
    }
});
document.addEventListener('click', function (event) {
    if (!event.target.closest('[data-search-reset]'))
        return;
    resetSearchFilters();
    if (state.query)
        handleSearch(state.query);
});
function isTypingTarget(target) {
    if (!(target instanceof Element))
        return false;
    return Boolean(target.closest('input, textarea, select, [contenteditable="true"], [contenteditable=""]'));
}
function isTopDialog(dialog) {
    if (!dialog.open)
        return false;
    var openDialogs = document.querySelectorAll('dialog[open]');
    return openDialogs[openDialogs.length - 1] === dialog;
}
document.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        openSearch();
    }
    if (event.key === '/' && !isTypingTarget(event.target) && !document.querySelector('dialog[open]')) {
        event.preventDefault();
        openSearch();
    }
    var playerIsTop = isTopDialog(playerDialog);
    if (event.key === 'Escape' && playerIsTop) {
        event.preventDefault();
        if (!subtitleMenu.hidden)
            closeSubtitleMenu();
        else
            closePlayer();
    }
    if (playerIsTop && !isTypingTarget(event.target)) {
        if (event.code === 'Space' || event.key.toLowerCase() === 'k') {
            event.preventDefault();
            togglePlay();
        }
        if (event.key === 'ArrowRight' || event.key.toLowerCase() === 'l')
            skip(10);
        if (event.key === 'ArrowLeft' || event.key.toLowerCase() === 'j')
            skip(-10);
        if (event.key.toLowerCase() === 'm')
            toggleMute();
        if (event.key.toLowerCase() === 'f')
            toggleFullscreen();
        if (event.key.toLowerCase() === 'c') {
            event.preventDefault();
            if (subtitleMenu.hidden)
                openSubtitleMenu();
            else
                closeSubtitleMenu();
        }
        if (event.key.toLowerCase() === 'b' && !playerBoostButton.hidden) {
            event.preventDefault();
            cycleAudioBoost();
        }
    }
});
function closeSidebar() {
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('sidebar-scrim').classList.remove('visible');
    document.getElementById('menu-button').setAttribute('aria-expanded', 'false');
}
document.getElementById('menu-button').addEventListener('click', function () {
    document.getElementById('sidebar').classList.add('open');
    document.getElementById('sidebar-scrim').classList.add('visible');
    document.getElementById('menu-button').setAttribute('aria-expanded', 'true');
});
document.getElementById('sidebar-close').addEventListener('click', closeSidebar);
document.getElementById('sidebar-scrim').addEventListener('click', closeSidebar);
var themeToggle = document.getElementById('theme-toggle');
var settingsDialog = document.getElementById('settings-dialog');
var settingsQuality = document.getElementById('settings-quality');
var autoplaySwitch = document.getElementById('settings-autoplay');
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
themeToggle.addEventListener('click', function () { return setTheme(!document.body.classList.contains('light-theme')); });
document.getElementById('settings-theme').addEventListener('click', function () { return setTheme(!document.body.classList.contains('light-theme')); });
autoplaySwitch.addEventListener('click', function () { return setAutoplay(!state.autoplay); });
settingsQuality.addEventListener('change', function () { return setQuality(settingsQuality.value); });
document.getElementById('drive-nav').addEventListener('click', function () {
    closeSidebar();
    openSettings();
    window.setTimeout(function () {
        var _a, _b;
        (_a = document.querySelector('.drive-settings')) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ block: 'start' });
        (_b = document.getElementById('drive-folder')) === null || _b === void 0 ? void 0 : _b.focus({ preventScroll: true });
    }, 60);
});
document.getElementById('drive-connect').addEventListener('click', connectDrive);
document.getElementById('drive-disconnect').addEventListener('click', disconnectDrive);
document.getElementById('local-nav').addEventListener('click', function () {
    closeSidebar();
    openSettings();
    window.setTimeout(function () {
        var _a, _b;
        (_a = document.querySelector('.local-settings')) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ block: 'start' });
        (_b = document.getElementById('local-root')) === null || _b === void 0 ? void 0 : _b.focus({ preventScroll: true });
    }, 60);
});
document.getElementById('local-scan').addEventListener('click', scanLocalLibrary);
(_a = document.getElementById('local-scan-full')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', rescanLocalLibrary);
document.getElementById('local-server').addEventListener('change', function (event) {
    var value = String(event.target.value || '').trim().replace(/\/+$/, '');
    if (value)
        storage.set('nexa-local-server', value);
    else
        storage.set('nexa-local-server', '');
    updateLocalSettingsUI();
    showToast(value ? "Servidor local: ".concat(value) : 'Usando o endereço padrão do servidor local.', 'success');
});
document.getElementById('omdb-settings-save').addEventListener('click', function () { return __awaiter(_this, void 0, void 0, function () {
    var status, payload, response, data, error_12;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                status = document.getElementById('omdb-settings-status');
                payload = { omdbApiKey: document.getElementById('omdb-api-key').value.trim() };
                status.textContent = 'Salvando...';
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                return [4 /*yield*/, fetch(localApi('/api/local/omdb/settings'), {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(payload)
                    })];
            case 2:
                response = _a.sent();
                return [4 /*yield*/, response.json().catch(function () { return ({}); })];
            case 3:
                data = _a.sent();
                if (!response.ok)
                    throw new Error(data.error || "HTTP ".concat(response.status));
                status.textContent = data.hasOmdbKey
                    ? 'Chave salva no servidor local. Use “Atualizar metadados” para aplicar aos filmes.'
                    : 'Chave removida.';
                state.localConfig.hasOmdbKey = Boolean(data.hasOmdbKey);
                updateLocalSettingsUI();
                showToast('Chave do OMDb salva.', 'success');
                return [3 /*break*/, 5];
            case 4:
                error_12 = _a.sent();
                status.textContent = error_12.message || 'Não foi possível salvar a chave.';
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); });
document.getElementById('local-omdb-enrich').addEventListener('click', function () { return __awaiter(_this, void 0, void 0, function () {
    var button, response, data, error_13;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                button = document.getElementById('local-omdb-enrich');
                button.disabled = true;
                setLocalStatus('Atualizando metadados no OMDb...');
                _a.label = 1;
            case 1:
                _a.trys.push([1, 5, 6, 7]);
                return [4 /*yield*/, fetch(localApi('/api/local/omdb/enrich'), {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({})
                    })];
            case 2:
                response = _a.sent();
                return [4 /*yield*/, response.json().catch(function () { return ({}); })];
            case 3:
                data = _a.sent();
                if (!response.ok)
                    throw new Error(data.error || "HTTP ".concat(response.status));
                showToast("Metadados atualizados em ".concat(data.updated || 0, " filmes."), 'success');
                return [4 /*yield*/, loadLocalLibrary({ silent: true })];
            case 4:
                _a.sent();
                return [3 /*break*/, 7];
            case 5:
                error_13 = _a.sent();
                setLocalStatus(error_13.message || 'Falha ao atualizar metadados.', 'error');
                showToast('Não foi possível atualizar os metadados.', 'error');
                return [3 /*break*/, 7];
            case 6:
                button.disabled = false;
                return [7 /*endfinally*/];
            case 7: return [2 /*return*/];
        }
    });
}); });
document.getElementById('subtitle-settings-save').addEventListener('click', function () { return __awaiter(_this, void 0, void 0, function () {
    var status, payload, response, data, error_14;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                status = document.getElementById('subtitle-settings-status');
                payload = {
                    subtitleApiKey: document.getElementById('subtitle-api-key').value.trim(),
                    subtitleUser: document.getElementById('subtitle-user').value.trim(),
                    subtitlePassword: document.getElementById('subtitle-password').value
                };
                status.textContent = 'Salvando...';
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                return [4 /*yield*/, fetch(localApi('/api/local/subtitle/settings'), {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(payload)
                    })];
            case 2:
                response = _a.sent();
                return [4 /*yield*/, response.json().catch(function () { return ({}); })];
            case 3:
                data = _a.sent();
                if (!response.ok)
                    throw new Error(data.error || "HTTP ".concat(response.status));
                status.textContent = data.hasKey
                    ? (data.hasUser
                        ? 'Chave e login salvos no servidor local. A busca online usa a API nova (v1) do OpenSubtitles.'
                        : 'Chave salva no servidor local. A busca online usa a API antiga; informe usuário e senha para usar a API nova.')
                    : 'Chave removida. A busca online precisa da chave da API.';
                showToast('Credenciais de legendas salvas.', 'success');
                return [3 /*break*/, 5];
            case 4:
                error_14 = _a.sent();
                status.textContent = error_14.message || 'Não foi possível salvar as chaves.';
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); });
document.getElementById('local-clear').addEventListener('click', disconnectLocal);
document.getElementById('local-root').addEventListener('keydown', function (event) {
    if (event.key !== 'Enter')
        return;
    event.preventDefault();
    scanLocalLibrary();
});
['drive-folder', 'drive-key'].forEach(function (id) {
    document.getElementById(id).addEventListener('keydown', function (event) {
        if (event.key !== 'Enter')
            return;
        event.preventDefault();
        connectDrive();
    });
});
document.getElementById('settings-close').addEventListener('click', function () { return settingsDialog.close(); });
settingsDialog.addEventListener('close', function () {
    document.body.classList.remove('modal-open');
    document.getElementById('mini-profile-button').focus();
});
settingsDialog.addEventListener('click', function (event) {
    if (event.target === settingsDialog)
        settingsDialog.close();
});
(_b = document.getElementById('shortcuts-close')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', closeShortcutsDialog);
shortcutsDialog === null || shortcutsDialog === void 0 ? void 0 : shortcutsDialog.addEventListener('click', function (event) {
    if (event.target === shortcutsDialog)
        closeShortcutsDialog();
});
shortcutsDialog === null || shortcutsDialog === void 0 ? void 0 : shortcutsDialog.addEventListener('close', function () {
    if (!document.querySelector('dialog[open]'))
        document.body.classList.remove('modal-open');
});
var notificationButton = document.getElementById('notification-button');
var notificationsPopover = document.getElementById('notifications-popover');
notificationButton.addEventListener('click', function (event) {
    event.stopPropagation();
    notificationsPopover.hidden = !notificationsPopover.hidden;
    profilePopover.hidden = true;
    notificationButton.setAttribute('aria-expanded', String(!notificationsPopover.hidden));
    document.getElementById('profile-button').setAttribute('aria-expanded', 'false');
    document.getElementById('mini-profile-button').setAttribute('aria-expanded', 'false');
});
function applyNotificationsRead(read) {
    Array.prototype.forEach.call(document.querySelectorAll('[data-notification]'), function (item) { return item.classList.toggle('read', read); });
    var dot = document.querySelector('.notification-dot');
    if (dot)
        dot.style.display = read ? 'none' : '';
}
document.getElementById('mark-read').addEventListener('click', function () {
    applyNotificationsRead(true);
    storage.set('nexa-notifications-read', true);
    showToast('Notificações marcadas como lidas', 'success');
});
var profileButton = document.getElementById('mini-profile-button');
var profilePopover = document.getElementById('profile-popover');
var profilesDialog = document.getElementById('profiles-dialog');
var profilesManagerList = document.getElementById('profiles-manager-list');
var profileForm = document.getElementById('profile-form');
var profileNameInput = document.getElementById('profile-name-input');
var profilePinInput = document.getElementById('profile-pin-input');
var profileColorInput = document.getElementById('profile-color-input');
var profileKidsToggle = document.getElementById('profile-kids-toggle');
var profileSaveButton = document.getElementById('profile-save');
var profileCancelButton = document.getElementById('profile-cancel');
var profileFormNote = document.getElementById('profile-form-note');
var pinDialog = document.getElementById('pin-dialog');
var pinForm = document.getElementById('pin-form');
var pinInput = document.getElementById('pin-input');
var pinError = document.getElementById('pin-error');
var editingProfileId = null;
var formKids = false;
var pinRequest = null;
function profileMeta(profile) {
    var bits = [];
    if (profile.id === profiles[0].id)
        bits.push('Perfil principal');
    bits.push(profile.kids ? 'Infantil' : 'Adulto');
    if (profile.pin)
        bits.push('PIN ativo');
    return bits.join(' · ');
}
function updateProfileUI() {
    var profile = activeProfile();
    if (!profile)
        return;
    Array.prototype.forEach.call(document.querySelectorAll('[data-view="musica"]'), function (element) {
        element.hidden = Boolean(profile.kids);
    });
    var initials = profileInitials(profile.name);
    var meta = profile.kids ? 'Perfil infantil' : (profile.id === profiles[0].id ? 'Perfil principal' : 'Perfil');
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
    var list = document.getElementById('profile-switch-list');
    list.innerHTML = profiles.map(function (profile) {
        var active = profile.id === activeProfileId;
        return "<button class=\"profile-switch-item ".concat(active ? 'active' : '', "\" type=\"button\" data-profile-switch=\"").concat(profile.id, "\" aria-pressed=\"").concat(active, "\">\n      <span class=\"avatar small\" style=\"background:").concat(profile.color, "\">").concat(profileInitials(profile.name), "</span>\n      <span class=\"profile-switch-copy\"><strong>").concat(escapeHtml(profile.name), "</strong><small>").concat(profile.kids ? 'Infantil' : 'Perfil').concat(profile.pin ? ' · PIN' : '', "</small></span>\n      ").concat(active ? icon('check') : '', "\n    </button>");
    }).join('');
}
function loadProfileState(profile) {
    state.list = new Set(profile.list || []);
    state.liked = new Set(profile.liked || []);
    state.progress = __assign({}, (profile.progress || {}));
    document.getElementById('list-count').textContent = state.list.size;
}
function applyProfileSwitch(profile) {
    if (!profile)
        return;
    persistActiveProfile();
    activeProfileId = profile.id;
    loadProfileState(profile);
    state.genre = 'Todos';
    state.query = '';
    state.view = state.view === 'busca' ? (state.previousView || 'home') : state.view;
    if (profile.kids) {
        if (!musicPlayerBar.hidden)
            stopMusic();
        state.activeAlbum = null;
        if (state.view === 'musica')
            state.view = 'home';
    }
    searchInput.value = '';
    searchBox.classList.remove('has-value');
    if (detailsDialog.open)
        detailsDialog.close();
    if (playerDialog.open)
        closePlayer();
    saveProfiles();
    updateProfileUI();
    updateActiveNavigation();
    refreshCurrentView();
    showToast("Agora voc\u00EA est\u00E1 no perfil de ".concat(profile.name), 'success');
}
function switchProfile(id) {
    var target = profiles.find(function (profile) { return profile.id === id; });
    if (!target)
        return;
    profilePopover.hidden = true;
    if (target.id === activeProfileId)
        return;
    var current = activeProfile();
    if ((current === null || current === void 0 ? void 0 : current.kids) && current.pin) {
        requestPin('Digite o PIN do perfil infantil para trocar de perfil.', current.pin).then(function (ok) {
            if (ok)
                applyProfileSwitch(target);
        });
        return;
    }
    applyProfileSwitch(target);
}
function requestPin(message, expected) {
    return new Promise(function (resolve) {
        if (pinRequest) {
            pinRequest.resolve(false);
            pinRequest = null;
        }
        pinRequest = { resolve: resolve, expected: expected };
        document.getElementById('pin-message').textContent = message;
        pinInput.value = '';
        pinError.hidden = true;
        if (!pinDialog.open)
            pinDialog.showModal();
        document.body.classList.add('modal-open');
        window.setTimeout(function () { return pinInput.focus(); }, 40);
    });
}
function finishPin(result) {
    if (!pinRequest)
        return;
    var resolve = pinRequest.resolve;
    pinRequest = null;
    if (pinDialog.open)
        pinDialog.close();
    document.body.classList.remove('modal-open');
    resolve(result);
}
pinForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var value = pinInput.value.trim();
    if (value && value === (pinRequest === null || pinRequest === void 0 ? void 0 : pinRequest.expected)) {
        finishPin(true);
    }
    else {
        pinError.hidden = false;
        pinInput.value = '';
        pinInput.focus();
    }
});
pinInput.addEventListener('input', function () {
    pinInput.value = pinInput.value.replace(/\D/g, '').slice(0, 4);
});
document.getElementById('pin-cancel').addEventListener('click', function () { return finishPin(false); });
pinDialog.addEventListener('close', function () {
    document.body.classList.remove('modal-open');
    if (pinRequest) {
        var resolve = pinRequest.resolve;
        pinRequest = null;
        resolve(false);
    }
});
function setProfileFormNote(message, type) {
    if (type === void 0) { type = ''; }
    profileFormNote.textContent = message;
    profileFormNote.className = "settings-note".concat(type ? " is-".concat(type) : '');
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
    profilesManagerList.innerHTML = profiles.map(function (profile) {
        var active = profile.id === activeProfileId;
        return "<div class=\"profile-manage-row ".concat(active ? 'active' : '', "\">\n      <span class=\"avatar\" style=\"background:").concat(profile.color, "\">").concat(profileInitials(profile.name), "</span>\n      <div class=\"profile-manage-copy\"><strong>").concat(escapeHtml(profile.name)).concat(active ? ' <span class="profile-current">Em uso</span>' : '', "</strong><small>").concat(profileMeta(profile), "</small></div>\n      ").concat(profile.kids ? "<span class=\"profile-badge\">".concat(icon('lock'), " Infantil</span>") : '', "\n      <div class=\"profile-manage-actions\">\n        <button class=\"button button-secondary\" type=\"button\" data-profile-edit=\"").concat(profile.id, "\">Editar</button>\n        <button class=\"button button-ghost\" type=\"button\" data-profile-delete=\"").concat(profile.id, "\" ").concat(profiles.length === 1 ? 'disabled' : '', ">Excluir</button>\n      </div>\n    </div>");
    }).join('');
}
function showProfilesDialog() {
    profilePopover.hidden = true;
    resetProfileForm();
    renderProfilesManager();
    if (!profilesDialog.open)
        profilesDialog.showModal();
    document.body.classList.add('modal-open');
    window.setTimeout(function () { return profileNameInput.focus(); }, 60);
}
function openProfilesDialog() {
    var current = activeProfile();
    if ((current === null || current === void 0 ? void 0 : current.kids) && current.pin) {
        requestPin('Digite o PIN para gerenciar os perfis.', current.pin).then(function (ok) {
            if (ok)
                showProfilesDialog();
        });
        return;
    }
    showProfilesDialog();
}
function editProfile(id) {
    var profile = profiles.find(function (candidate) { return candidate.id === id; });
    if (!profile)
        return;
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
    if (profiles.length <= 1)
        return;
    var profile = profiles.find(function (candidate) { return candidate.id === id; });
    if (!profile)
        return;
    if (!window.confirm("Excluir o perfil \u201C".concat(profile.name, "\u201D? Listas, curtidas e progresso ser\u00E3o removidos.")))
        return;
    var index = profiles.findIndex(function (candidate) { return candidate.id === id; });
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
    if (editingProfileId === id)
        resetProfileForm();
    saveProfiles();
    updateProfileUI();
    renderProfilesManager();
    showToast("Perfil \u201C".concat(profile.name, "\u201D exclu\u00EDdo"), 'success');
}
profileKidsToggle.addEventListener('click', function () {
    formKids = !formKids;
    profileKidsToggle.setAttribute('aria-checked', String(formKids));
    if (!formKids)
        setProfileFormNote('');
});
profileForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = profileNameInput.value.trim();
    if (!name) {
        setProfileFormNote('Informe um nome para o perfil.', 'error');
        profileNameInput.focus();
        return;
    }
    var pin = profilePinInput.value.replace(/\D/g, '');
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
    var color = profileColorInput.value;
    if (editingProfileId) {
        var profile = profiles.find(function (candidate) { return candidate.id === editingProfileId; });
        if (!profile)
            return;
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
    var newProfile = normalizeProfile({
        id: "perfil-".concat(Date.now().toString(36), "-").concat(profiles.length),
        name: name,
        kids: formKids,
        pin: pin,
        color: color,
        progress: {}
    }, profiles.length);
    profiles.push(newProfile);
    saveProfiles();
    updateProfileUI();
    renderProfilesManager();
    resetProfileForm();
    showToast("Perfil de ".concat(newProfile.name, " criado"), 'success');
});
profileCancelButton.addEventListener('click', resetProfileForm);
profilesManagerList.addEventListener('click', function (event) {
    var editButton = event.target.closest('[data-profile-edit]');
    if (editButton) {
        editProfile(editButton.dataset.profileEdit);
        return;
    }
    var deleteButton = event.target.closest('[data-profile-delete]');
    if (deleteButton)
        deleteProfile(deleteButton.dataset.profileDelete);
});
document.getElementById('profile-switch-list').addEventListener('click', function (event) {
    var button = event.target.closest('[data-profile-switch]');
    if (button)
        switchProfile(button.dataset.profileSwitch);
});
document.getElementById('profile-manage').addEventListener('click', openProfilesDialog);
document.getElementById('profiles-close').addEventListener('click', function () { return profilesDialog.close(); });
profilesDialog.addEventListener('click', function (event) {
    if (event.target === profilesDialog)
        profilesDialog.close();
});
profilesDialog.addEventListener('close', function () {
    document.body.classList.remove('modal-open');
    resetProfileForm();
});
function toggleProfilePopover() {
    profilePopover.hidden = !profilePopover.hidden;
    notificationsPopover.hidden = true;
    var expanded = String(!profilePopover.hidden);
    profileButton.setAttribute('aria-expanded', expanded);
    document.getElementById('profile-button').setAttribute('aria-expanded', expanded);
    notificationButton.setAttribute('aria-expanded', 'false');
}
profileButton.addEventListener('click', function (event) {
    event.stopPropagation();
    toggleProfilePopover();
});
document.getElementById('profile-button').addEventListener('click', function (event) {
    event.stopPropagation();
    toggleProfilePopover();
});
document.getElementById('profile-preferences').addEventListener('click', openSettings);
document.getElementById('profile-logout').addEventListener('click', function () {
    profilePopover.hidden = true;
    showToast('Sessão encerrada. Este é um perfil de demonstração.', 'success');
});
document.addEventListener('click', function (event) {
    if (!event.target.closest('.popover') && !event.target.closest('#notification-button') && !event.target.closest('#mini-profile-button') && !event.target.closest('#profile-button')) {
        notificationsPopover.hidden = true;
        profilePopover.hidden = true;
        notificationButton.setAttribute('aria-expanded', 'false');
        profileButton.setAttribute('aria-expanded', 'false');
        document.getElementById('profile-button').setAttribute('aria-expanded', 'false');
    }
});
document.addEventListener('error', function (event) {
    var image = event.target;
    if (!(image instanceof HTMLImageElement) || image.dataset.fallback)
        return;
    image.dataset.fallback = 'true';
    image.src = fallbackArtwork;
}, true);
window.addEventListener('scroll', function () {
    var height = document.documentElement.scrollHeight - window.innerHeight;
    var percent = height > 0 ? (window.scrollY / height) * 100 : 0;
    document.getElementById('scroll-progress').style.width = "".concat(percent, "%");
});
var installButton = document.getElementById('install-button');
var deferredInstallPrompt = null;
var isStandalone = ((_d = (_c = window.matchMedia) === null || _c === void 0 ? void 0 : _c.call(window, '(display-mode: standalone)')) === null || _d === void 0 ? void 0 : _d.matches) || window.navigator.standalone;
if (isStandalone)
    installButton.hidden = true;
window.addEventListener('beforeinstallprompt', function (event) {
    event.preventDefault();
    deferredInstallPrompt = event;
    installButton.hidden = false;
});
installButton.addEventListener('click', function () { return __awaiter(_this, void 0, void 0, function () {
    var choice;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!deferredInstallPrompt)
                    return [2 /*return*/];
                deferredInstallPrompt.prompt();
                return [4 /*yield*/, deferredInstallPrompt.userChoice];
            case 1:
                choice = _a.sent();
                if (choice.outcome === 'accepted')
                    installButton.hidden = true;
                deferredInstallPrompt = null;
                return [2 /*return*/];
        }
    });
}); });
window.addEventListener('appinstalled', function () {
    installButton.hidden = true;
    deferredInstallPrompt = null;
    showToast('NEXA instalado com sucesso!', 'success');
});
window.addEventListener('offline', function () { return showToast('Você está offline. O conteúdo em cache continua disponível.', 'error'); });
window.addEventListener('online', function () { return showToast('Conexão restabelecida.', 'success'); });
function registerServiceWorker() {
    if (!('serviceWorker' in navigator) || !/^https?:$/.test(window.location.protocol))
        return;
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('service-worker.js', { updateViaCache: 'none' }).then(function (registration) {
            registration.addEventListener('updatefound', function () {
                var worker = registration.installing;
                if (!worker)
                    return;
                worker.addEventListener('statechange', function () {
                    if (worker.state === 'installed' && navigator.serviceWorker.controller) {
                        showToast('Nova versão disponível. Recarregue para atualizar.', 'success');
                    }
                });
            });
        }).catch(function () { });
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
var deepLink = window.location.hash.match(/^#\/titulo\/([^/]+)$/);
if (deepLink) {
    var deepLinkItem = getItem(decodeURIComponent(deepLink[1]));
    if (deepLinkItem)
        openDetails(deepLinkItem.id);
}
window.setTimeout(function () { return document.getElementById('loading-screen').classList.add('hidden'); }, 650);
