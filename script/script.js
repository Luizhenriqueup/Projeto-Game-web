document.addEventListener("DOMContentLoaded", () => {

    const pagina1 = document.getElementById("pagina1");
    const pagina2 = document.getElementById("pagina2");

    const nicknameInput = document.getElementById("Nick");
    const btnAvancar = document.getElementById("btnAvancar");
    const btnResponder = document.getElementById("btnResponder");
    const btnRecomecar = document.getElementById("btnRecomecar");

    const perguntaTitulo = document.getElementById("perguntaTitulo");
    const opcoesContainer = document.getElementById("opcoesContainer");
    const progresso = document.getElementById("progresso");

    const resultadoFinal = document.getElementById("resultadoFinal");
    const acertosFinal = document.getElementById("acertosFinal");
    const mensagemFinal = document.getElementById("mensagemFinal");

    let perguntaAtual = 0;
    let acertos = 0;
    let opcaoEscolhida = null;
    let nickname = "";

    const perguntas = [
        {
            pergunta: "Qual classe centraliza um texto no Bootstrap?",
            opcoes: ["text-middle", "align-center", "text-center", "center", "text-align"],
            correta: 2
        },
        {
            pergunta: "Qual classe cria um botão primário no Bootstrap?",
            opcoes: ["btn-main", "btn-primary", "btn-blue", "button-primary", "primary-btn"],
            correta: 1
        },
        {
            pergunta: "Qual classe deixa o texto em negrito?",
            opcoes: ["fw-bold", "text-strong", "bold-text", "text-bold", "fw-900"],
            correta: 0
        },
        {
            pergunta: "Qual classe cria um container centralizado?",
            opcoes: ["content-box", "box-center", "container", "page-center", "grid-container"],
            correta: 2
        },
        {
            pergunta: "Qual classe deixa o elemento oculto?",
            opcoes: ["display-none", "invisible", "d-none", "hidden", "d-hide"],
            correta: 2
        },
        {
            pergunta: "Qual classe deixa o botão ocupar a largura total?",
            opcoes: ["btn-block", "w-100", "full-btn", "btn-full", "wide-btn"],
            correta: 1
        },
        {
            pergunta: "Qual classe deixa o fundo escuro?",
            opcoes: ["bg-dark", "dark-bg", "bg-black", "dark-mode", "background-dark"],
            correta: 0
        },
        {
            pergunta: "Qual classe deixa o texto branco?",
            opcoes: ["text-white", "white-text", "font-white", "color-white", "txt-white"],
            correta: 0
        },
        {
            pergunta: "Qual classe transforma o texto em maiúsculas?",
            opcoes: ["text-big", "text-uppercase", "uppercase", "font-up", "txt-up"],
            correta: 1
        },
        {
            pergunta: "Qual classe deixa o conteúdo alinhado no centro?",
            opcoes: ["justify-middle", "content-center", "d-center", "justify-content-center", "center-flex"],
            correta: 3
        }
    ];

    btnAvancar.addEventListener("click", () => {
        const nome = nicknameInput.value.trim();

        if (nome.length < 4) {
            alert("O nickname precisa ter pelo menos 4 caracteres!");
            return;
        }

        nickname = nome;

        pagina1.style.display = "none";
        pagina2.style.display = "block";

        carregarPergunta();
    });

    function carregarPergunta() {
        const atual = perguntas[perguntaAtual];

        perguntaTitulo.textContent = atual.pergunta;
        progresso.textContent = `Pergunta ${perguntaAtual + 1} de ${perguntas.length}`;

        opcoesContainer.innerHTML = "";
        opcaoEscolhida = null;

        atual.opcoes.forEach((texto, id) => {
            const opc = document.createElement("div");
            opc.className = "opcao-item";
            opc.textContent = texto;

            opc.addEventListener("click", () => {
                document.querySelectorAll(".opcao-item")
                    .forEach(el => el.classList.remove("opcaoSelecionada"));

                opc.classList.add("opcaoSelecionada");
                opcaoEscolhida = id;
            });

            opcoesContainer.appendChild(opc);
        });
    }

    btnResponder.addEventListener("click", () => {

        if (opcaoEscolhida === null) {
            alert("Escolha uma alternativa!");
            return;
        }

        if (opcaoEscolhida === perguntas[perguntaAtual].correta) {
            acertos++;
        }

        perguntaAtual++;

        if (perguntaAtual >= perguntas.length) {
            mostrarResultado();
        } else {
            carregarPergunta();
        }
    });

    function mostrarResultado() {

        perguntaTitulo.style.display = "none";
        opcoesContainer.style.display = "none";
        btnResponder.style.display = "none";
        progresso.style.display = "none";

        acertosFinal.textContent = acertos;

        if (acertos >= 8) {
            mensagemFinal.textContent = `Parabéns, ${nickname}! Mandou muito bem!`;
        } else if (acertos >= 5) {
            mensagemFinal.textContent = `${nickname}, você foi bem! Dá pra melhorar ainda mais.`;
        } else {
            mensagemFinal.textContent = `${nickname}, continue praticando e tente outra vez!`;
        }

        resultadoFinal.style.display = "block";
        btnRecomecar.style.display = "block";
    }

    // RECOMEÇAR
    btnRecomecar.addEventListener("click", () => {

        perguntaAtual = 0;
        acertos = 0;

        resultadoFinal.style.display = "none";
        btnRecomecar.style.display = "none";

        perguntaTitulo.style.display = "block";
        opcoesContainer.style.display = "block";
        btnResponder.style.display = "block";
        progresso.style.display = "block";

        carregarPergunta();
    });

    const temaClaro = document.getElementById("temaClaro");
    const temaEscuro = document.getElementById("temaEscuro");

    temaClaro.addEventListener("change", () => {
        document.body.classList.remove("tema-escuro");
        document.body.classList.add("tema-claro");
    });

    temaEscuro.addEventListener("change", () => {
        document.body.classList.remove("tema-claro");
        document.body.classList.add("tema-escuro");
    });

});
