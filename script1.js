// Lista de imagens
const imagems = [
    'dowload.png', 
    'foto2.jpg',
    'foto3.jpg',
    'foto4.jpg'
];

// Índice da imagem atual
let currentIndex = 0;

// Elemento da imagem de visualização
const imagePreview = document.getElementById('imagePreview');

// Função para atualizar a imagem exibida
function updateImage() {
    imagePreview.src = imagens[currentIndex];
}

// Função para passar para a próxima imagem
function nextImage() {
    currentIndex = (currentIndex + 1) % imagens.length;  // Avança para a próxima imagem
    updateImage();
}

// Função para voltar para a imagem anterior
function prevImage() {
    currentIndex = (currentIndex - 1 + imagens.length) % imagens.length;  // Volta para a imagem anterior
    updateImage();
}

// Eventos de clique nos botões
document.getElementById('nextBtn').addEventListener('click', nextImage);
document.getElementById('prevBtn').addEventListener('click', prevImage);

// Inicializa a imagem exibida
updateImage();
