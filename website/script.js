console.log("Site carregado com sucesso!");

// Seleciona o elemento h1
const headerName = document.querySelector('header h1');

// Variável para armazenar o estado da cor original
const originalColor = getComputedStyle(headerName).color;

// Função para alternar a cor do nome
function toggleColor() {
    // Verifica a cor atual e alterna entre preto e a cor original
    if (headerName.style.color === 'black') {
        headerName.style.color = originalColor;  // Volta para a cor original
    } else {
        headerName.style.color = 'black';  // Muda para preto
    }
}

// Adiciona o evento de clique no h1
headerName.addEventListener('click', toggleColor);
