// Modelo 01
// criando a url do base ou api
const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const catBtn = document.getElementById('change-cat');

// função assíncrona para carregar as imagens de gatos
const getCats = async () => {
    try {
        const data = await fetch(BASE_URL);
        const json = await data.json(); // transformando em json
        return json.webpurl;// webpur1, imagem comprimida
    } catch (error) {
        console.log(error.message);
    }
};

// passando a url da imagem
const loadImg = async () => {
    const catImg = document.getElementById('cat');
    catImg.src = await getCats();
};

// evento de lista ao botão
catBtn.addEventListener('click', loadImg);

// inicializando com uma imagem
loadImg();

// Modelo 02
// criando a url do base ou api
/*const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const catBtn = document.getElementById('change-cat');

// função assíncrona para carregar as imagens de gatos
const getCats = async () => {
        const data = await fetch(BASE_URL)
        .then(res=> res.json()) // transformando em json
        .catch(error => console.log(error))

        return data.webpurl;
};

// passando a url da imagem
const loadImg = async () => {
    const catImg = document.getElementById('cat');
    catImg.src = await getCats();
};

// evento de lista ao botão
catBtn.addEventListener('click', loadImg);

// inicializando com uma imagem
loadImg();*/