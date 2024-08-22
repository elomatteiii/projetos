const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você acaba de descobrir um novo dispositivo de realidade aumentada que pode sobrepor informações digitais ao seu ambiente físico. Qual é a sua reação inicial?",
        alternativas: [
            {
                texto: "Incrível! Mal posso esperar para ver como isso pode transformar minha maneira de aprender e interagir com o mundo.",
                afirmacao: "Ficou animado com as possibilidades de aprendizado imersivo e interativo."
            },
            {
                texto: "Parece complicado e talvez até desnecessário. Prefiro a tecnologia que já conheço.",
                afirmacao: "Se mostrou cético sobre a utilidade e complexidade da nova tecnologia."
            }
        ]
    },
    {
        enunciado: "Durante uma aula sobre tecnologia avançada, sua professora pede para que você faça um projeto sobre como a realidade aumentada pode ser usada na educação. Qual abordagem você escolheria?",
        alternativas: [
            {
                texto: "Usaria uma plataforma de realidade aumentada para criar um projeto interativo que demonstre suas aplicações educacionais.",
                afirmacao: "Optou por criar um projeto prático e visual para mostrar o potencial da realidade aumentada na educação."
            },
            {
                texto: "Faria uma apresentação teórica sobre os benefícios da realidade aumentada na educação baseada em pesquisas e exemplos de uso.",
                afirmacao: "Preferiu focar em uma abordagem mais conceitual e informativa sobre a tecnologia."
            }
        ]
    },
    {
        enunciado: "Durante um debate em sala sobre o impacto da realidade aumentada no futuro das profissões, qual é a sua posição?",
        alternativas: [
            {
                texto: "Acredito que a realidade aumentada pode abrir novas oportunidades de carreira e criar novas formas de trabalho criativo.",
                afirmacao: "Vê a realidade aumentada como uma oportunidade para inovação e novas possibilidades profissionais."
            },
            {
                texto: "Estou preocupado com o potencial de substituição de empregos e a necessidade de preparar os trabalhadores para essa mudança.",
                afirmacao: "Sua preocupação com o impacto no emprego levou a defender uma preparação adequada para as mudanças no mercado de trabalho."
            }
        ]
    },
    {
        enunciado: "Ao final de uma atividade, você precisa criar uma representação visual das suas ideias sobre realidade aumentada. Qual ferramenta você utiliza?",
        alternativas: [
            {
                texto: "Usa um software de design gráfico para criar uma imagem detalhada e profissional.",
                afirmacao: "Escolheu uma abordagem tradicional e detalhada para criar uma representação visual."
            },
            {
                texto: "Utiliza um gerador de imagens em realidade aumentada para criar uma representação interativa.",
                afirmacao: "Optou por uma solução inovadora e interativa para ilustrar suas ideias sobre a realidade aumentada."
            }
        ]
    },
    {
        enunciado: "Você tem um projeto em grupo de história para entregar, e um dos membros do grupo usou um gerador de conteúdo digital para criar a maior parte do trabalho. O resultado é muito semelhante a outros trabalhos gerados por esse tipo de ferramenta. O que você faz?",
        alternativas: [
            {
                texto: "Considero que a utilização do gerador é válida e não vejo problemas em entregar o trabalho assim.",
                afirmacao: "Passou a utilizar geradores de conteúdo como uma ferramenta comum, embora tenha enfrentado problemas com a originalidade."
            },
            {
                texto: "Acredito que é importante revisar e personalizar o trabalho para refletir nossas próprias ideias e evitar plágio.",
                afirmacao: "Reconhece a importância de adicionar um toque pessoal e revisão ao usar ferramentas digitais para garantir originalidade."
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Seu Futuro em Tecnologia...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();

