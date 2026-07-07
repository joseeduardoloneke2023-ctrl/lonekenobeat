// produtos.js
const produtos = [
    // ==========================================
    // BLOCO 1: DRUMKITS
    // ==========================================
    
 {
        id: 100,
        uuid: null,
        slug: "plano-inicial-semanal",
        titulo: "Plano Inicial",
        categoria: "planos",
        descricao: "Ideal para quem quer começar a aprender as técnicas básicas de produção.",
        ciclo: "semana",
        precoAntigo: 5000,
        precoAtual: 2999,
        badge: null,
        destaque: false,
        features: [
            { texto: "Assistir vídeos na plataforma online", tipo: "check" },
            { texto: "Sem direito a baixar arquivos", tipo: "block" },
            { texto: "Aulas exclusivas de Produção de Beats", tipo: "check" },
            { texto: "Aulas exclusivas de Criação de Melodias", tipo: "check" },
            { texto: "Aulas exclusivas de Mix & Master de beats ", tipo: "check" },
    
        ]
    },
    {
        id: 101,
        uuid: null,
        slug: "plano-pro-mensal",
        titulo: "Plano Pro",
        categoria: "planos",
        descricao: "O plano perfeito para quem busca evolução rápida e acompanhamento.",
        ciclo: "mês",
        precoAntigo: 10000,
        precoAtual: 5500,
        badge: "Mais Popular",
        destaque: true, // Define se ganha a borda vermelha estilo Netflix
        features: [
            { texto: "Tudo do Plano Inicial +", tipo: "plus" },
            { texto: "Aulas personalizadas de criação de beats", tipo: "check" },
            { texto: "Análise e correção dos seus beats", tipo: "check" },
            { texto: "Canal direto para tirar dúvidas", tipo: "check" },
            { texto: "Receber Drumkits e Plugins de graça", tipo: "check" },
        ]
    },
    {
        id: 102,
        uuid: null,
        slug: "plano-master-trimestral",
        titulo: "Plano Master",
        categoria: "planos",
        descricao: "Para produtores focados em se profissionalizar e criar networking.",
        ciclo: "Mensal",
        precoAntigo: 35000,
        precoAtual: 52999,
        badge: null,
        destaque: false,
        features: [
            { texto: "Tudo do Plano Pro +", tipo: "plus" },
            { texto: "Fazer transmissões ao vivo (Live) comigo", tipo: "check" },
            { texto: "Acompanhamento individual via WhatsApp", tipo: "check" },
            { texto: "Acompanhamento individual Presencial", tipo: "check" },
            { texto: "Combo de plugins e drumkits no seu pc", tipo: "check" },
            { texto: "Visitas no teu estúdio (Se estiver em Luanda)", tipo: "check" },
            { texto: "Divulgação dos seus trabalhos nas minhas redes sociais", tipo: "check" },
            { texto: "Aulas Presenciais de Mix e master dos seus projectos musicais e beats", tipo: "check" }
      
        ]
    },
    {
        id: 103,
        uuid: null,
        slug: "plano-elite-anual",
        titulo: "Plano Elite Anual",
        categoria: "planos",
        descricao: "Acesso total definitivo com a melhor vantagem financeira a longo prazo.",
        ciclo: "ano",
        precoAntigo: 150000,
        precoAtual: 100000,
        badge: "PREMIUM",
        badgeClasse: "gold", 
        destaque: false,
        features: [
            { texto: "Tudo do Plano Master +", tipo: "crown" },
            { texto: "Acesso integral a 5 Cursos de graça", tipo: "check" },
            { texto: "Produzir comigo de forma presencial", tipo: "check" },
            { texto: "Mentorias e dicas de como ganhar dinheiro", tipo: "check" },
            { texto: "Acesso antecipado a bônus e atualizações", tipo: "check" }
        ]
    }
];