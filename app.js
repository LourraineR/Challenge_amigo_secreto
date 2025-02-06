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