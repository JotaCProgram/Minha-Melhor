const fraseElement = document.querySelector('.love-declaration');
let frasesDisponiveis = []; // Lista para armazenar as frases disponíveis

function carregarFraseAleatoria(frases) {
    // Verifica se ainda há frases disponíveis
    if (frasesDisponiveis.length === 0) {
        frasesDisponiveis = frases.slice(); // Se não houver, recarrega a lista
    }

    // Obter uma frase aleatória da lista
    const index = Math.floor(Math.random() * frasesDisponiveis.length);
    const fraseAleatoria = frasesDisponiveis[index];

    // Remove a frase selecionada da lista para evitar repetição
    frasesDisponiveis.splice(index, 1);

    // Aplica a animação de fade out, e em seguida, fade in
    fraseElement.classList.add('fade-out');
    fraseElement.addEventListener('animationend', function() {
        fraseElement.textContent = fraseAleatoria;
        fraseElement.classList.remove('fade-out');
        fraseElement.classList.add('fade-in');
    }, { once: true });
}

// Carrega todas as frases uma vez e as mantém em memória para evitar recarregar o JSON
fetch('https://jotacprogram.github.io/Minha-Melhor/Frases.json')
    .then(response => response.json())
    .then(frases => {
        // Inicializa a lista de frases disponíveis
        frasesDisponiveis = frases.slice();

        // Carregar uma frase imediatamente
        carregarFraseAleatoria(frases);

        // Carregar uma nova frase a cada 7 segundos
        setInterval(() => carregarFraseAleatoria(frases), 9000);
    })
    .catch(error => console.error('Erro ao carregar frases:', error));
