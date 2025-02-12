function navegar(pagina) {
    fetch(pagina)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro ${response.status}: ${response.statusText}`);
            }
            return response.text();
        })
        .then(html => {
            document.getElementById("conteudo").innerHTML = html;
        })
        .catch(error => {
            document.getElementById("conteudo").innerHTML = `<h2>Erro</h2><p>Não foi possível carregar a página.</p>`;
            console.error("Erro ao carregar a página:", error);
        });
}


// Função para alternar o tema
function alternarTema() {
    let body = document.body;
    if (body.getAttribute("data-tema") === "dark") {
        body.setAttribute("data-tema", "light");
    } else {
        body.setAttribute("data-tema", "dark");
    }
}

// Iniciar na página Home
navegar("principal.html");
document.body.setAttribute("data-tema", "light");