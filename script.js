const videoInput = document.getElementById('videoInput');
const videoPlayer = document.getElementById('videoPlayer');
const videoError = document.getElementById('videoError');
const vttInput = document.getElementById('vttInput');
const librasImagesDiv = document.getElementById('librasImages');
const segmentoAtualDiv = document.getElementById('segmentoAtual');

let segmentos = [];
let tempos = [];
let palavrasPorSegmento = [];
let ultimoSegundoMostrado = -1;

if (videoInput && videoPlayer && videoError) {
    videoInput.addEventListener('change', function () {
        const file = this.files[0];
        const fileName = document.getElementById('videoFileName');
        videoError.textContent = '';
        videoError.hidden = true;
        videoPlayer.pause();
        videoPlayer.removeAttribute('src');
        videoPlayer.load();

        if (!file) {
            if (fileName) fileName.textContent = '';
            return;
        }

        if (fileName) fileName.textContent = file.name;
        const url = URL.createObjectURL(file);
        videoPlayer.src = url;
        videoPlayer.load();
        videoPlayer.onloadeddata = function () {
            videoError.textContent = '';
        };
        videoPlayer.onerror = function () {
            videoError.textContent = 'Erro ao carregar o vídeo. Formato não suportado ou arquivo corrompido.';
            videoError.hidden = false;
        };
    });
}

function limparSegmento(texto) {
    return texto
        .replace(/<c>|<\/c>/g, '')
        .replace(/<\d{2}:\d{2}:\d{2}\.\d{3}>/g, '')
        .replace(/[^\w\sÀ-ÿ]/g, '')
        .toLowerCase()
        .split(/\s+/)
        .filter(Boolean);
}

function tempoParaSegundos(tempo) {
    const [horas, minutos, segundosComMilissegundos] = tempo.split(':');
    const [segundos, milissegundos] = segundosComMilissegundos.split('.');
    return Number(horas) * 3600 + Number(minutos) * 60 + Number(segundos) + Number(milissegundos) / 1000;
}

if (vttInput) {
    vttInput.addEventListener('change', function () {
        const file = this.files[0];
        const fileName = document.getElementById('vttFileName');
        if (fileName) fileName.textContent = file ? file.name : '';
        if (!file) return;

        const reader = new FileReader();
        reader.onload = function (event) {
            const linhas = event.target.result.split(/\r?\n/);
            const reTempo = /^\d{2}:\d{2}:\d{2}\.\d{3} --> \d{2}:\d{2}:\d{2}\.\d{3}/;
            segmentos = [];
            tempos = [];
            palavrasPorSegmento = [];

            let i = 0;
            while (i < linhas.length) {
                const linha = linhas[i].trim();
                if (reTempo.test(linha)) {
                    const tempoIni = linha.split('-->')[0].trim();
                    i++;
                    let texto = '';
                    while (i < linhas.length && linhas[i].trim() !== '' && !reTempo.test(linhas[i].trim())) {
                        texto += `${linhas[i].trim()} `;
                        i++;
                    }
                    segmentos.push(texto.trim());
                    tempos.push(tempoParaSegundos(tempoIni));
                    palavrasPorSegmento.push(limparSegmento(texto));
                } else {
                    i++;
                }
            }
        };
        reader.readAsText(file, 'utf-8');
    });
}

function mostrarImagens(palavras) {
    if (!librasImagesDiv) return;
    librasImagesDiv.innerHTML = '';
    const container = document.createElement('div');
    container.className = 'libras-images-container';

    palavras.forEach((palavra) => {
        if (!palavra) return;
        const letra = palavra[0].toLowerCase();
        const nome = palavra.normalize('NFD').replace(/\p{Diacritic}/gu, '').replace(/[^a-zA-Z0-9]/g, '').toUpperCase();
        const imgPalavra = document.createElement('img');
        imgPalavra.src = `imagens/${letra}/${nome}.jpg`;
        imgPalavra.alt = palavra;
        let tentouLetra = false;

        imgPalavra.onerror = function () {
            if (!tentouLetra) {
                tentouLetra = true;
                for (const letraFallback of nome) {
                    if (!letraFallback.match(/[A-Z0-9]/)) continue;
                    const imgLetra = document.createElement('img');
                    imgLetra.src = `imagens/${letraFallback.toLowerCase()}/${letraFallback}.jpg`;
                    imgLetra.alt = letraFallback;
                    imgLetra.onerror = function () { this.style.display = 'none'; };
                    container.appendChild(imgLetra);
                }
            }
            this.style.display = 'none';
        };
        container.appendChild(imgPalavra);
    });
    librasImagesDiv.appendChild(container);
}

if (videoPlayer && segmentoAtualDiv) {
    videoPlayer.addEventListener('timeupdate', function () {
        if (!tempos.length) return;
        const segundoAtual = Math.floor(videoPlayer.currentTime);
        if (segundoAtual === ultimoSegundoMostrado) return;
        ultimoSegundoMostrado = segundoAtual;

        let indice = 0;
        for (let i = 0; i < tempos.length; i++) {
            if (segundoAtual >= Math.floor(tempos[i])) indice = i;
            else break;
        }

        const palavrasSegmento = palavrasPorSegmento[indice] || [];
        const palavrasAnterior = indice > 0 ? palavrasPorSegmento[indice - 1] || [] : [];
        const palavrasAnteriorDois = indice > 1 ? palavrasPorSegmento[indice - 2] || [] : [];
        const palavrasFiltradas = palavrasSegmento.filter((palavra) => {
            if (palavra === 'gtgt') return false;
            return !(palavrasAnterior.includes(palavra) && palavrasAnteriorDois.includes(palavra));
        });

        segmentoAtualDiv.textContent = palavrasFiltradas.join(' ').trim();
        mostrarImagens(palavrasFiltradas);
    });
}
