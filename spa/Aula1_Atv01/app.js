function navegar(pagina) {
    let conteudo = document.getElementById("conteudo");
    if (pagina === "home") {
        conteudo.innerHTML = "<h2>Página Inicial</h2><p>Bem-vindo à nossa mini SPA!</p>";
    } else if (pagina === "sobre") {
        conteudo.innerHTML = "<h2>Sobre</h2><p>Esta é uma aplicação simples de SPA.</p>";
    }
}
navegar ("home");