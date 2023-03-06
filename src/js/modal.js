const receitas = [
    {
        id: 0,
        name: "Espetinho de Frango com Mostarda",
        preparationTime: 35,
        ingredients: [
            "250 ml de água quente",
            "1 sachê de caldo de frango sem gordura",
            "2 colheres de sopa de mostarda",
            "1 colher de chá de suco de limão",
            "1/2 dente de alho picado",
            "Folhas de tomilho a gosto",
            "4 peitos de frango cortados em cubos",
            "500 ml de leite desnatado",
            "1 colher de café de amido de milho",
        ],
        link: "https://www.receiteria.com.br/receita/espetinho-de-frango-com-mostarda/"
    },
    {
        id: 1,
        name: "Espetinho de camarão com abacaxi",
        preparationTime: 10,
        ingredients: [
            "1/2 abacaxi pérola",
            "1/2 cebola",
            "500 gramas de camarão limpo",
            "Azeite para untar",
            "Sal, pimenta-do-reino e páprica picante a gosto",
            "Espetos para churrasco"
        ],
        link: "https://www.receiteria.com.br/receita/espetinho-de-camarao-com-abacaxi/"
    },
    {
        id: 2,
        name: "Bolo gelado de abacaxi com coco",
        preparationTime: 60,
        ingredients: [
            "3 ovos",
            "1/2 xícara de chá de óleo",
            "1 xícara de chá de leite",
            "2 xícaras de chá de farinha de trigo",
            "1 xícara de chá de açúcar",
            "1 colher de chá de essência de baunilha",
            "1 colher de sopa de fermento químico em pó (fermento para bolo)",
            "<i>Recheio</i>",
            "1 abacaxi descascado e picado",
            "1/2 xícara de chá de açúcar",
            "395 gramas de leite condensado",
            "400 gramas de creme de leite",
            "5 colheres de sopa de leite em pó",
            "1 colher de sopa de margarina sem sal",
            "100 gramas de coco ralado",
        ],
        link: "https://www.receiteria.com.br/receita/bolo-gelado-de-abacaxi-com-coco"
    },
    {
        id: 3,
        name: "Salada de batata com bacon",
        preparationTime: 40,
        ingredients: [
            "3/4 de xícara de chá de bacon picado",
            "5 batatas cozidas e picadas",
            "1 cenoura grande ralada e cozida",
            "1 tomate picado",
            "1/2 lata ervilha",
            "1/2 lata milho",
            "Cheiro-verde a gosto",
            "Sal a gosto",
            "Maionese a gosto"
        ],
        link: "https://www.receiteria.com.br/salada-de-batata-com-bacon/"
    },
    {
        id: 4,
        name: "Empadinha de brócolis e palmito",
        preparationTime: 45,
        ingredients: [
            "1 e 1/4 xícara de farinha de amêndoas",
            "4 colheres de sopa de manteiga",
            "1 ovo",
            "Sal a gosto",
            "<i>Recheio</i>",
            "Brócolis assado a gosto",
            "Palmito picado a gosto",
            "Parmesão ralado a gosto",
            "Creme de leite a gosto"
        ],
        link: "https://www.receiteria.com.br/receita/empadinha-de-brocolis-e-palmito/"
    },
    {
        id: 5,
        name: "Trufa de morango saudável",
        preparationTime: 60,
        ingredients: [
            "1 bandeja de morangos já lavados e sem as folhas verdes",
            "1/3 xícara de chá de iogurte grego",
            "½ xícara de chá de chocolate 70% cacau picado",
            "2 colheres de sopa óleo de coco"
        ],
        link: "https://www.receiteria.com.br/receita/trufa-de-morango-saudavel/"
    },
    {
        id: 6,
        name: "Churrasco de acém",
        preparationTime: null,
        ingredients: [
            "2 kg de miolo de acém em peça",
            "200 g de bacon cortado em palito",
            "1 pacote de creme de cebola (em pó com 68 g)",
            "2 colheres (sopa rasas) de sal grosso"
        ],
        link: "https://www.seuchurrasco.com/receita/acem/"
    },
    {
        id: 7,
        name: "Strogonoff de frango na panela de arroz",
        preparationTime: 30,
        ingredients: [
            "1 peito de frango fervido e cortado em cubos",
            "2 colheres de sopa de manteiga (ou margarina)",
            "1/2 cebola picada",
            "5 dentes de alho picados",
            "Sal, colorau, tempero baiano e chimichurri a gosto",
            "3 colheres de sopa de ketchup",
            "3 colheres de sopa de mostarda",
            "1/2 sachê de molho de tomate",
            "1/2 lata de milho-verde (opcional)",
            "1 caixinha de creme de leite"
        ],
        link: "https://www.receiteria.com.br/receita/strogonoff-de-frango-na-panela-de-arroz/"
    },
    {
        id: 8,
        name: "Torta Raw de Chocolate",
        preparationTime: 60,
        ingredients: [
            "8 tâmaras",
            "Água para hidratar as tâmaras e as castanhas",
            "80 gramas de amêndoas torradas",
            "120 gramas de castanhas de caju cruas",
            "150 ml de leite de coco",
            "100 gramas de chocolate 70% cacau"
        ],
        link: "https://www.receiteria.com.br/receita/torta-raw-de-chocolate/"
    }
]


const modal = document.getElementById("modal");

function includeReceita(index) {
    modal.style.opacity = 1;
    modal.style.zIndex = 999;

    const searchRevenue = receitas.filter(i => i.id == index)[0];
    document.getElementById("modal").innerHTML = `
        <div>
            <div class="header">
                <h1 class="title">${searchRevenue.name}</h1>
                <p class="preparationTime">
                    <span class="material-symbols-outlined">schedule</span>
                    <span>${searchRevenue.preparationTime ? searchRevenue.preparationTime : "Tempo indefinido"} ${searchRevenue.preparationTime ? "Min" : ""}</span>
                </p>
            </div>

            <h1 class="title">Ingredientes</h1>
            <ul>
                ${searchRevenue.ingredients.map(k => `<li>${k},</li>`).join("")}
            <ul>

            <div class="actions">
                <a class="verMais" href="${searchRevenue.link}">Ver modo de preparo</a>
                <button class="close" onclick=(closeModal())>
                    <span class="material-symbols-outlined">close</span>
                </button>
            </div>
        </div>
    `
}


function closeModal() {
    modal.style.zIndex = -1;
    modal.style.opacity = 0;
}


