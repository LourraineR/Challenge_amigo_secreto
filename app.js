let amigos = []; // Array para armazenar os nomes

        function adicionarAmigo() {
            let input = document.querySelector("input"); // Captura o input
            let nome = input.value.trim(); // Remove espaços extras
            
            if (nome === "") {
                alert("Por favor, insira um nome."); // Validação do campo vazio
                return;
            }

            amigos.push(nome); // Adiciona o nome ao array
            
            atualizarLista(); // Atualiza a exibição da lista
            input.value = ""; // Limpa o campo de entrada
        }

        function atualizarLista() {
            let lista = document.querySelector("#listaAmigos");
            lista.innerHTML = ""; // Limpa a lista antes de recriá-la
            
            amigos.forEach(nome => {
                let item = document.createElement("li");
                item.textContent = nome;
                lista.appendChild(item);
            });
        }

        function sortearAmigo() {
    // Verifica se há amigos disponíveis
    if (amigos.length === 0) {
        document.getElementById("resultado").innerHTML = "Nenhum amigo disponível para o sorteio.";
        return;
    }
    
    // Gera um índice aleatório
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    // Obtém o nome sorteado
    const amigoSorteado = amigos[indiceAleatorio];
    
    // Mostra o resultado
    document.getElementById("resultado").innerHTML = `O amigo sorteado é: <strong>${amigoSorteado}</strong>`;
}