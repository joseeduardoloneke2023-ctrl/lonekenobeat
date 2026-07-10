// produtos.js
const produtos = [
    // ==========================================
    // BLOCO 1: DRUMKITS
    // ==========================================
   
    {
        id: 1,
        uuid: null,
        slug: "drumkit-3finer",
        titulo: "DRUMKIT 3FINER",
        categoria: "drumkits",
        descricao: "Sons de bateria premium totalmente processados e prontos para uso profissional.",
        imagem: "img/prontos/DRUMKIT 3FINER.jpg",
        precoAntigo: 3000,
        precoAtual: 1000,
        vendas: 12,
        linkCheckout: "https://checkout.lonekenobeat.com/pay/drumkit-3finer",
        videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        destaque: true
    },
    {
        id: 2,
        uuid: null,
        slug: "drumkit-anderson-mario",
        titulo: "DRUMKIT ANDERSON MÁRIO",
        categoria: "drumkits",
        descricao: "Kit exclusivo inspirado na sonoridade e grooves do artista Anderson Mário.",
        imagem: "img/prontos/DRUMKIT ANDERSON MÁRIO.jpg",
        precoAntigo: 3000,
        precoAtual: 1000,
        vendas: 10,
        linkCheckout: "https://checkout.lonekenobeat.com/pay/drumkit-anderson-mario",
        videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        destaque: false
    },
    {
        id: 3,
        uuid: null,
        slug: "drumkit-anna-joyce",
        titulo: "DRUMKIT ANNA JOYCE",
        categoria: "drumkits",
        descricao: "Elementos percussivos marcantes e melódicos baseados nos maiores sucessos de Anna Joyce.",
        imagem: "img/prontos/DRUMKIT ANNA JOYCE.jpg",
        precoAntigo: 3000,
        precoAtual: 1000,
        vendas: 10,
        linkCheckout: "https://checkout.lonekenobeat.com/pay/drumkit-anna-joyce",
        videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        destaque: true
    },

    // ==========================================
    // BLOCO 2: CURSOS
    // ==========================================
    {
        id: 4,
        uuid: null,
        slug: "curso-completo-como-criar-e-vender-drumkits-e-fazer-50000kz-por-semana",
        titulo: "CURSO COMPLETO COMO CRIAR E VENDER DRUMKITS E FAZER 50.000KZ POR SEMANA",
        categoria: "cursos",
        descricao: "O método definitivo para monetizar o seu conhecimento musical e faturar semanalmente.",
        imagem: "img/prontos/CURSO COMPLETO COMO CRIAR E VENDER DRUMKITS E FAZER 50.000KZ POR SEMANA.jpg",
        precoAntigo: 30000,
        precoAtual: 20000,
        vendas: 5,
        linkCheckout: "https://checkout.lonekenobeat.com/pay/curso-completo-como-criar-e-vender-drumkits-e-fazer-50000kz-por-semana",
        videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        destaque: true
    },
    {
        id: 5,
        uuid: null,
        slug: "curso-completo-como-distribuir-musicas-nas-plataformas-de-stream",
        titulo: "CURSO COMPLETO COMO DISTRIBUIR MÚSICAS NAS PLATAFORMAS DE STREAM",
        categoria: "cursos",
        descricao: "Aprenda a colocar as suas músicas no Spotify, Apple Music e Deezer de forma profissional.",
        imagem: "img/prontos/CURSO COMPLETO COMO DISTRIBUIR MÚSICAS NAS PLATAFORMAS DE STREAM.jpg",
        precoAntigo: 15000,
        precoAtual: 10000,
        vendas: 18,
        linkCheckout: "https://checkout.lonekenobeat.com/pay/curso-completo-como-distribuir-musicas-nas-plataformas-de-stream",
        videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        destaque: false
    },

    // ==========================================
    // BLOCO 3: FLP
    // ==========================================
    {
        id: 6,
        uuid: null,
        slug: "flp-afro-house-pra-matar-me-prod-loneke-no-beat",
        titulo: "FLP AFRO HOUSE - PRA MATAR - ME PROD.LONEKE NO BEAT",
        categoria: "flp",
        descricao: "Projeto aberto completo no FL Studio para você estudar arranjo, mixagem e estrutura.",
        imagem: "img/prontos/FLP AFRO HOUSE - PRA MATAR - ME PROD.LONEKE NO BEAT.jpg",
        precoAntigo: 3000,
        precoAtual: 1000,
        vendas: 30,
        linkCheckout: "https://checkout.lonekenobeat.com/pay/flp-afro-house-pra-matar-me-prod-loneke-no-beat",
        videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        destaque: true
    },
    {
        id: 7,
        uuid: null,
        slug: "flp-apanhou-tec-tec",
        titulo: "FLP APANHOU TEC TEC",
        categoria: "flp",
        descricao: "Estude o projeto de um dos maiores hits de Kuduro e domine o ritmo das pistas.",
        imagem: "img/prontos/FLP APANHOU TEC TEC.jpg",
        precoAntigo: 3000,
        precoAtual: 1000,
        vendas: 16,
        linkCheckout: "https://checkout.lonekenobeat.com/pay/flp-apanhou-tec-tec",
        videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        destaque: false
    },
    {
        id: 8,
        uuid: null,
        slug: "flp-banana",
        titulo: "FLP BANANA",
        categoria: "flp",
        descricao: "Projeto com timbragem agressiva e arranjo totalmente detalhado para produtores.",
        imagem: "img/prontos/FLP BANANA.jpg",
        precoAntigo: 3000,
        precoAtual: 1000,
        vendas: 8,
        linkCheckout: "https://checkout.lonekenobeat.com/pay/flp-banana",
        videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        destaque: false
    },

    // ==========================================
    // BLOCO 4: DRUMKITS
    // ==========================================
    {
        id: 9,
        uuid: null,
        slug: "drumkit-arieth-feijo",
        titulo: "DRUMKIT ARIETH FEIJÓ",
        categoria: "drumkits",
        descricao: "Elementos focados em Kizomba e Zouk com a assinatura de Arieth Feijó.",
        imagem: "img/prontos/DRUMKIT ARIETH FEIJÓ.jpg",
        precoAntigo: 3000,
        precoAtual: 1000,
        vendas: 11,
        linkCheckout: "https://checkout.lonekenobeat.com/pay/drumkit-arieth-feijo",
        videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        destaque: false
    },
    {
        id: 10,
        uuid: null,
        slug: "drumkit-button-rose",
        titulo: "DRUMKIT BUTTON ROSE",
        categoria: "drumkits",
        descricao: "Sons versáteis ideais para produções modernas do estilo único de Button Rose.",
        imagem: "img/prontos/DRUMKIT BUTTON ROSE.jpg",
        precoAntigo: 3000,
        precoAtual: 1000,
        vendas: 9,
        linkCheckout: "https://checkout.lonekenobeat.com/pay/drumkit-button-rose",
        videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        destaque: false
    },
    {
        id: 11,
        uuid: null,
        slug: "drumkit-cef",
        titulo: "DRUMKIT CEF",
        categoria: "drumkits",
        descricao: "Kicks profundos e percussões rítmicas com a vibe inconfundível do CEF.",
        imagem: "img/prontos/DRUMKIT CEF.jpg",
        precoAntigo: 3000,
        precoAtual: 1000,
        vendas: 10,
        linkCheckout: "https://checkout.lonekenobeat.com/pay/drumkit-cef",
        videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        destaque: true
    },

    // ==========================================
    // BLOCO 5: LOOPS
    // ==========================================
    {
        id: 12,
        uuid: null,
        slug: "loop-kit-tabua-mista-de-kizomba-volume-2",
        titulo: "LOOP KIT TABUA MISTA DE KIZOMBA VOLUME 2",
        categoria: "loops",
        descricao: "Melodias e texturas rítmicas de Kizomba prontas para arrastar e soltar no seu DAW.",
        imagem: "img/prontos/LOOP KIT TABUA MISTA DE KIZOMBA VOLUME 2.jpg",
        precoAntigo: 3000,
        precoAtual: 1000,
        vendas: 14,
        linkCheckout: "https://checkout.lonekenobeat.com/pay/loop-kit-tabua-mista-de-kizomba-volume-2",
        videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        destaque: false
    },
    {
        id: 13,
        uuid: null,
        slug: "loop-kit-tabua-mista-de-kizomba",
        titulo: "LOOP KIT TABUA MISTA DE KIZOMBA",
        categoria: "loops",
        descricao: "O volume clássico com loops de alta fidelidade para produções de Kizomba e Zouk.",
        imagem: "img/prontos/LOOP KIT TABUA MISTA DE KIZOMBA.jpg",
        precoAntigo: 3000,
        precoAtual: 1000,
        vendas: 26,
        linkCheckout: "https://checkout.lonekenobeat.com/pay/loop-kit-tabua-mista-de-kizomba",
        videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        destaque: true
    },

    // ==========================================
    // BLOCO 6: DRUMKITS
    // ==========================================
    {
        id: 14,
        uuid: null,
        slug: "drumkit-chelsea-dinorath",
        titulo: "DRUMKIT CHELSEA DINORATH",
        categoria: "drumkits",
        descricao: "Texturas acústicas e percussões suaves no estilo intimista da Chelsea Dinorath.",
        imagem: "img/prontos/DRUMKIT CHELSEA DINORATH.jpg",
        precoAntigo: 3000,
        precoAtual: 1000,
        vendas: 30,
        linkCheckout: "https://checkout.lonekenobeat.com/pay/drumkit-chelsea-dinorath",
        videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        destaque: true
    },
    {
        id: 15,
        uuid: null,
        slug: "drumkit-cleyton-david",
        titulo: "DRUMKIT CLEYTON DAVID",
        categoria: "drumkits",
        descricao: "Sons selecionados para criar ritmos contagiantes inspirados em Cleyton David.",
        imagem: "img/prontos/DRUMKIT CLEYTON DAVID.jpg",
        precoAntigo: 3000,
        precoAtual: 1000,
        vendas: 8,
        linkCheckout: "https://checkout.lonekenobeat.com/pay/drumkit-cleyton-david",
        videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        destaque: false
    },
    {
        id: 16,
        uuid: null,
        slug: "drumkit-cleyton-m",
        titulo: "DRUMKIT CLEYTON M",
        categoria: "drumkits",
        descricao: "Bateria explosiva e percussões ideais para Afro House e Kuduro moderno.",
        imagem: "img/prontos/DRUMKIT CLEYTON M.jpg",
        precoAntigo: 3000,
        precoAtual: 1000,
        vendas: 14,
        linkCheckout: "https://checkout.lonekenobeat.com/pay/drumkit-cleyton-m",
        videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        destaque: false
    },
    {
        id: 17,
        uuid: null,
        slug: "drumkit-cu-doce-de-guetho-zouk",
        titulo: "DRUMKIT CU DOCE DE GUETHO ZOUK",
        categoria: "drumkits",
        descricao: "Sons doces e cadenciados perfeitamente lapidados para produções de Guetho Zouk.",
        imagem: "img/prontos/DRUMKIT CU DOCE DE GUETHO ZOUK.jpg",
        precoAntigo: 3000,
        precoAtual: 1000,
        vendas: 17,
        linkCheckout: "https://checkout.lonekenobeat.com/pay/drumkit-cu-doce-de-guetho-zouk",
        videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        destaque: false
    },

    // ==========================================
    // BLOCO 7: PLUGINS
    // ==========================================
    {
        id: 18,
        uuid: null,
        slug: "packs-de-plugins-de-mix-e-master",
        titulo: "PACKS DE PLUGINS DE MIX E MASTER",
        categoria: "plugins",
        descricao: "A seleção de ferramentas essenciais para dar clareza, peso e volume comercial às suas tracks.",
        imagem: "img/prontos/PACKS DE PLUGINS DE MIX E MASTER.jpg",
        precoAntigo: 3000,
        precoAtual: 1000,
        vendas: 40,
        linkCheckout: "https://checkout.lonekenobeat.com/pay/packs-de-plugins-de-mix-e-master",
        videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        destaque: true
    },
    {
        id: 19,
        uuid: null,
        slug: "packs-de-plugins-de-instrumentos-virtuais-de-afrobeat",
        titulo: "PACKS DE PLUGINS DE INSTRUMENTOS VIRTUAIS DE AFROBEAT",
        categoria: "plugins",
        descricao: "Sintetizadores e instrumentos virtuais selecionados para timbragens autênticas de Afrobeat.",
        imagem: "img/prontos/PACKS DE PLUGINS DE INSTRUMENTOS VIRTUAIS DE AFROBEAT.jpg",
        precoAntigo: 3000,
        precoAtual: 1000,
        vendas: 28,
        linkCheckout: "https://checkout.lonekenobeat.com/pay/packs-de-plugins-de-instrumentos-virtuais-de-afrobeat",
        videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        destaque: false
    },

    // ==========================================
    // BLOCO 8: CURSOS
    // ==========================================
    {
        id: 20,
        uuid: null,
        slug: "curso-completo-de-como-baixar-e-instalar-qualquer-plugin-e-fazer-no-minimo-50000kz-por-semana",
        titulo: "CURSO COMPLETO DE COMO BAIXAR E  INSTALAR QUALQUER PLUGIN E FAZER NO MINIMO 50.000KZ POR SEMANA",
        categoria: "cursos",
        descricao: "Um guia prático com estratégias secretas de monetização técnica em estúdios de gravação.",
        imagem: "img/prontos/CURSO COMPLETO DE COMO BAIXAR E  INSTALAR QUALQUER PLUGIN E FAZER NO MINIMO 50.000KZ POR SEMANA.jpg",
        precoAntigo: 15000,
        precoAtual: 10000,
        vendas: 30,
        linkCheckout: "https://checkout.lonekenobeat.com/pay/curso-completo-de-como-baixar-e-instalar-qualquer-plugin-e-fazer-no-minimo-50000kz-por-semana",
        videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        destaque: true
    },
    {
        id: 21,
        uuid: null,
        slug: "curso-completo-de-como-baixar-e-instalar-qualquer-plugin",
        titulo: "CURSO COMPLETO DE COMO BAIXAR E INSTALAR QUALQUER PLUGIN",
        categoria: "cursos",
        descricao: "Esqueça os erros de instalação. Passo a passo para ter qualquer ferramenta rodando liso no seu DAW.",
        imagem: "img/prontos/CURSO COMPLETO DE COMO BAIXAR E  INSTALAR QUALQUER PLUGIN.jpg",
        precoAntigo: 5000,
        precoAtual: 2600,
        vendas: 19,
        linkCheckout: "https://checkout.lonekenobeat.com/pay/curso-completo-de-como-baixar-e-instalar-qualquer-plugin",
        videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        destaque: false
    },
    {
        id: 22,
        uuid: null,
        slug: "curso-completo-de-producao-de-beats-de-afro-house-huduro-mix-e-master-no-fl-studio",
        titulo: "CURSO COMPLETO DE PRODUÇÃO DE BEATS DE AFRO HOUSE KUDURO + MIX E MASTER NO FL STUDIO",
        categoria: "cursos",
        descricao: "Aprenda a fazer batidas profissionais de Afro House e Kuduro que dominam as pistas nacionais.",
        imagem: "img/prontos/CURSO COMPLETO DE PRODUÇÃO DE BEATS DE AFRO HOUSE KUDURO + MIX E MASTER NO FL STUDIO.jpg",
        precoAntigo: 15000,
        precoAtual: 10000,
        vendas: 10,
        linkCheckout: "https://checkout.lonekenobeat.com/pay/curso-completo-de-producao-de-beats-de-afro-house-huduro-mix-e-master-no-fl-studio",
        videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        destaque: true
    },

    // ==========================================
    // BLOCO 9: DRUMKITS
    // ==========================================
    {
        id: 23,
        uuid: null,
        slug: "drumkit-cu-doce-huduro-melodico",
        titulo: "DRUMKIT CU DOCE KUDURO MELODICO",
        categoria: "drumkits",
        descricao: "Loops e elementos focados no Kuduro Melódico comercial com excelente punch de mixagem.",
        imagem: "img/prontos/DRUMKIT CU DOCE KUDURO MELODICO.jpg",
        precoAntigo: 3000,
        precoAtual: 1000,
        vendas: 14,
        linkCheckout: "https://checkout.lonekenobeat.com/pay/drumkit-cu-doce-huduro-melodico",
        videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        destaque: false
    },
    {
        id: 24,
        uuid: null,
        slug: "drumkit-djodje",
        titulo: "DRUMKIT DJODJE",
        categoria: "drumkits",
        descricao: "Sons suaves de Afro Pop e Kizomba inspirados nas produções do músico Djodje.",
        imagem: "img/prontos/DRUMKIT DJODJE.jpg",
        precoAntigo: 3000,
        precoAtual: 1000,
        vendas: 19,
        linkCheckout: "https://checkout.lonekenobeat.com/pay/drumkit-djodje",
        videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        destaque: false
    },
    {
        id: 25,
        uuid: null,
        slug: "drumkit-doddy",
        titulo: "DRUMKIT DODDY",
        categoria: "drumkits",
        descricao: "Kits de percussão modernos ideais para flows urbanos e beats comerciais.",
        imagem: "img/prontos/DRUMKIT DODDY.jpg",
        precoAntigo: 3000,
        precoAtual: 1000,
        vendas: 18,
        linkCheckout: "https://checkout.lonekenobeat.com/pay/drumkit-doddy",
        videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        destaque: false
    },
    {
        id: 26,
        uuid: null,
        slug: "drumkit-dream-boyz",
        titulo: "DRUMKIT DREAM BOYZ",
        categoria: "drumkits",
        descricao: "Os timbres clássicos e futuristas que marcaram o estilo inconfundível dos Dream Boyz.",
        imagem: "img/prontos/DRUMKIT DREAM BOYZ.jpg",
        precoAntigo: 3000,
        precoAtual: 1000,
        vendas: 11,
        linkCheckout: "https://checkout.lonekenobeat.com/pay/drumkit-dream-boyz",
        videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        destaque: false
    },

    // ==========================================
    // BLOCO 10: FLP
    // ==========================================
    {
        id: 27,
        uuid: null,
        slug: "flp-drena-na-uk",
        titulo: "FLP DRENA NA UK",
        categoria: "flp",
        descricao: "Projeto aberto focado em sonoridades de Drill e texturas agressivas no padrão britânico.",
        imagem: "img/prontos/FLP DRENA NA UK.jpg",
        precoAntigo: 3000,
        precoAtual: 1000,
        vendas: 12,
        linkCheckout: "https://checkout.lonekenobeat.com/pay/flp-drena-na-uk",
        videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        destaque: false
    },
    {
        id: 28,
        uuid: null,
        slug: "flp-guetho-zouk-piano",
        titulo: "FLP GUETHO ZOUK PIANO",
        categoria: "flp",
        descricao: "Harmonias sofisticadas e linhas de piano prontas para serem dissecadas e aplicadas.",
        imagem: "img/prontos/FLP GUETHO ZOUK PIANO.jpg",
        precoAntigo: 3000,
        precoAtual: 1000,
        vendas: 4,
        linkCheckout: "https://checkout.lonekenobeat.com/pay/flp-guetho-zouk-piano",
        videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        destaque: true
    },
    {
        id: 29,
        uuid: null,
        slug: "flp-guetho-zouk-rijo",
        titulo: "FLP GUETHO ZOUK RIJO",
        categoria: "flp",
        descricao: "Projeto com groove pesado e focado no balanço rítmico do Zouk comercial moderno.",
        imagem: "img/prontos/FLP GUETHO ZOUK RIJO.jpg",
        precoAntigo: 3000,
        precoAtual: 1000,
        vendas: 17,
        linkCheckout: "https://checkout.lonekenobeat.com/pay/flp-guetho-zouk-rijo",
        videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        destaque: false
    },

    // ==========================================
    // BLOCO 11: DRUMKITS
    // ==========================================
    {
        id: 30,
        uuid: null,
        slug: "drumkit-dupla-gelado-de-mucua",
        titulo: "DRUMKIT DUPLA GELADO DE MÚCUA",
        categoria: "drumkits",
        descricao: "Grooves bem-humorados e percussão de altíssimo impacto rítmico para hits de rua.",
        imagem: "img/prontos/DRUMKIT DUPLA GELADO DE MÚCUA.jpg",
        precoAntigo: 3000,
        precoAtual: 1000,
        vendas: 29,
        linkCheckout: "https://checkout.lonekenobeat.com/pay/drumkit-dupla-gelado-de-mucua",
        videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        destaque: true
    },
    {
        id: 31,
        uuid: null,
        slug: "drumkit-edmazia-mayembe",
        titulo: "DRUMKIT EDMAZIA MAYEMBE",
        categoria: "drumkits",
        descricao: "Kits de bateria românticos e envolventes inspirados no repertório de Edmázia.",
        imagem: "img/prontos/DRUMKIT EDMAZIA MAYEMBE.jpg",
        precoAntigo: 3000,
        precoAtual: 1000,
        vendas: 16,
        linkCheckout: "https://checkout.lonekenobeat.com/pay/drumkit-edmazia-mayembe",
        videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        destaque: false
    },
    {
        id: 32,
        uuid: null,
        slug: "drumkit-fabio-hustle",
        titulo: "DRUMKIT FABIO HUSTLE",
        categoria: "drumkits",
        descricao: "A pegada certeira e os timbres dinâmicos baseados nas produções de Fabio Hustle.",
        imagem: "img/prontos/DRUMKIT FABIO HUSTLE.jpg",
        precoAntigo: 3000,
        precoAtual: 1000,
        vendas: 12,
        linkCheckout: "https://checkout.lonekenobeat.com/pay/drumkit-fabio-hustle",
        videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        destaque: false
    },
    {
        id: 33,
        uuid: null,
        slug: "drumkit-fariento-de-afro-house",
        titulo: "DRUMKIT FARIENTO DE AFRO HOUSE",
        categoria: "drumkits",
        descricao: "Loops de percussão tribal e kicks pesados focados 100% em Afro House.",
        imagem: "img/prontos/DRUMKIT FARIENTO DE AFRO HOUSE.jpg",
        precoAntigo: 3000,
        precoAtual: 1000,
        vendas: 20,
        linkCheckout: "https://checkout.lonekenobeat.com/pay/drumkit-fariento-de-afro-house",
        videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        destaque: false
    },

    // ==========================================
    // BLOCO 12: LOOPS
    // ==========================================
    {
        id: 34,
        uuid: null,
        slug: "loop-kit-tabua-mista-de-reggae",
        titulo: "LOOP KIT TABUA MISTA DE REGGAE",
        categoria: "loops",
        descricao: "Linhas de baixo e guitarras rítmicas skank para produções orgânicas de Reggae.",
        imagem: "img/prontos/LOOP KIT TABUA MISTA DE REGGAE.jpg",
        precoAntigo: 3000,
        precoAtual: 1000,
        vendas: 11,
        linkCheckout: "https://checkout.lonekenobeat.com/pay/loop-kit-tabua-mista-de-reggae",
        videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        destaque: false
    },
    {
        id: 35,
        uuid: null,
        slug: "loop-kit-tabua-mista-de-sebene",
        titulo: "LOOP KIT TABUA MISTA DE SEBENE",
        categoria: "loops",
        descricao: "Guitarras de Sebene gravadas e cortadas perfeitamente em múltiplos BPMs para dar energia imediata.",
        imagem: "img/prontos/LOOP KIT TABUA MISTA DE SEBENE.jpg",
        precoAntigo: 3000,
        precoAtual: 1000,
        vendas: 32,
        linkCheckout: "https://checkout.lonekenobeat.com/pay/loop-kit-tabua-mista-de-sebene",
        videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        destaque: true
    },

    // ==========================================
    // BLOCO 13: DRUMKITS
    // ==========================================
    {
        id: 36,
        uuid: null,
        slug: "drumkit-fariento-de-afrobeat",
        titulo: "DRUMKIT FARIENTO DE AFROBEAT",
        categoria: "drumkits",
        descricao: "Sons orgânicos, shakers e kicks cortantes no melhor padrão internacional do Afrobeat.",
        imagem: "img/prontos/DRUMKIT FARIENTO DE AFROBEAT.jpg",
        precoAntigo: 3000,
        precoAtual: 1000,
        vendas: 18,
        linkCheckout: "https://checkout.lonekenobeat.com/pay/drumkit-fariento-de-afrobeat",
        videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        destaque: false
    },
    {
        id: 37,
        uuid: null,
        slug: "drumkit-fariento-de-amapiano",
        titulo: "DRUMKIT FARIENTO DE AMAPIANO",
        categoria: "drumkits",
        descricao: "Os famosos logs drums e percussões rítmicas diretas da África do Sul.",
        imagem: "img/prontos/DRUMKIT FARIENTO DE AMAPIANO.jpg",
        precoAntigo: 3000,
        precoAtual: 1000,
        vendas: 24,
        linkCheckout: "https://checkout.lonekenobeat.com/pay/drumkit-fariento-de-amapiano",
        videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        destaque: true
    },
    {
        id: 38,
        uuid: null,
        slug: "drumkit-fariento-de-drill",
        titulo: "DRUMKIT FARIENTO DE DRILL",
        categoria: "drumkits",
        descricao: "808s com slides pesados, contra-tempos rápidos e caixas estaladas de Drill.",
        imagem: "img/prontos/DRUMKIT FARIENTO DE DRILL.jpg",
        precoAntigo: 3000,
        precoAtual: 1000,
        vendas: 10,
        linkCheckout: "https://checkout.lonekenobeat.com/pay/drumkit-fariento-de-drill",
        videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        destaque: false
    },
    {
        id: 39,
        uuid: null,
        slug: "drumkit-fariento-de-guetho-zouk",
        titulo: "DRUMKIT FARIENTO DE GUETHO ZOUK",
        categoria: "drumkits",
        descricao: "Timbragem comercial limpa feita especialmente para hits românticos e envolventes.",
        imagem: "img/prontos/DRUMKIT FARIENTO DE GUETHO ZOUK.jpg",
        precoAntigo: 3000,
        precoAtual: 1000,
        vendas: 15,
        linkCheckout: "https://checkout.lonekenobeat.com/pay/drumkit-fariento-de-guetho-zouk",
        videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        destaque: false
    },

    // ==========================================
    // BLOCO 14: CURSOS
    // ==========================================
    {
        id: 40,
        uuid: null,
        slug: "curso-completo-de-producao-de-beats-de-afrobeat-mix-e-master-no-fl-studio",
        titulo: "CURSO COMPLETO DE PRODUÇÃO DE BEATS DE AFROBEAT + MIX E MASTER NO FL STUDIO",
        categoria: "cursos",
        descricao: "Domine a criação de grooves internacionais de Afrobeat, do arranjo à masterização.",
        imagem: "img/prontos/CURSO COMPLETO DE PRODUÇÃO DE BEATS DE AFROBEAT + MIX E MASTER NO FL STUDIO.jpg",
        precoAntigo: 20000,
        precoAtual: 10000,
        vendas: 5,
        linkCheckout: "https://checkout.lonekenobeat.com/pay/curso-completo-de-producao-de-beats-de-afrobeat-mix-e-master-no-fl-studio",
        videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        destaque: true
    },
    {
        id: 41,
        uuid: null,
        slug: "curso-completo-de-producao-de-beats-de-guetho-zouk-mix-e-master-no-fl-studio",
        titulo: "CURSO COMPLETO DE PRODUÇÃO DE BEATS DE GUETHO ZOUK + MIX E MASTER NO FL STUDIO",
        categoria: "cursos",
        descricao: "Passo a passo completo focado nas melodias e batidas envolventes do Guetho Zouk.",
        imagem: "img/prontos/CURSO COMPLETO DE PRODUÇÃO DE BEATS DE GUETHO ZOUK + MIX E MASTER NO FL STUDIO.jpg",
        precoAntigo: 20000,
        precoAtual: 10000,
        vendas: 5,
        linkCheckout: "https://checkout.lonekenobeat.com/pay/curso-completo-de-producao-de-beats-de-guetho-zouk-mix-e-master-no-fl-studio",
        videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        destaque: false
    },
    {
        id: 42,
        uuid: null,
        slug: "curso-completo-de-producao-de-beats-de-semba-mix-e-master-no-fl-studio",
        titulo: "CURSO COMPLETO DE PRODUÇÃO DE BEATS DE SEMBA + MIX E MASTER NO FL STUDIO",
        categoria: "cursos",
        descricao: "Traga a nossa essência tradicional para o digital de forma autêntica e altamente profissional.",
        imagem: "img/prontos/CURSO COMPLETO DE PRODUÇÃO DE BEATS DE SEMBA + MIX E MASTER NO FL STUDIO.jpg",
        precoAntigo: 20000,
        precoAtual: 10000,
        vendas: 28,
        linkCheckout: "https://checkout.lonekenobeat.com/pay/curso-completo-de-producao-de-beats-de-semba-mix-e-master-no-fl-studio",
        videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        destaque: true
    },

    // ==========================================
    // BLOCO 15: FLP
    // ==========================================
    {
        id: 43,
        uuid: null,
        slug: "flp-i-need-you",
        titulo: "FLP I NEED YOU",
        categoria: "flp",
        descricao: "Estude as cadeias de efeitos e automações melódicas contidas neste projeto aberto profissional.",
        imagem: "img/prontos/FLP I NEED YOU.jpg",
        precoAntigo: 3000,
        precoAtual: 1000,
        vendas: 14,
        linkCheckout: "https://checkout.lonekenobeat.com/pay/flp-i-need-you",
        videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        destaque: false
    },
    {
        id: 44,
        uuid: null,
        slug: "flp-minha-ex",
        titulo: "FLP MINHA EX",
        categoria: "flp",
        descricao: "Estrutura comercial aberta para entender o arranjo perfeito de uma track de sucesso.",
        imagem: "img/prontos/FLP MINHA EX.jpg",
        precoAntigo: 3000,
        precoAtual: 1000,
        vendas: 19,
        linkCheckout: "https://checkout.lonekenobeat.com/pay/flp-minha-ex",
        videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        destaque: false
    },
    {
        id: 45,
        uuid: null,
        slug: "flp-money-follow",
        titulo: "FLP MONEY FOLLOW",
        categoria: "flp",
        descricao: "Linhas de baixo pesadas e timbragem agressiva para produções no estilo Hip-Hop/Trap.",
        imagem: "img/prontos/FLP MONEY FOLLOW.jpg",
        precoAntigo: 3000,
        precoAtual: 1000,
        vendas: 12,
        linkCheckout: "https://checkout.lonekenobeat.com/pay/flp-money-follow",
        videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        destaque: false
    },

    // ==========================================
    // BLOCO 16: DRUMKITS
    // ==========================================
    {
        id: 46,
        uuid: null,
        slug: "drumkit-fariento-de-huduro-melodico",
        titulo: "DRUMKIT FARIENTO DE KUDURO MELODICO",
        categoria: "drumkits",
        descricao: "Batidas limpas e claps estalados otimizados para se destacarem nas caixas de som.",
        imagem: "img/prontos/DRUMKIT FARIENTO DE KUDURO MELODICO.jpg",
        precoAntigo: 3000,
        precoAtual: 1000,
        vendas: 10,
        linkCheckout: "https://checkout.lonekenobeat.com/pay/drumkit-fariento-de-huduro-melodico",
        videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        destaque: false
    },
    {
        id: 47,
        uuid: null,
        slug: "drumkit-fariento-de-semba",
        titulo: "DRUMKIT FARIENTO DE SEMBA",
        categoria: "drumkits",
        descricao: "Percussões acústicas e ritmos tradicionais gravados com máxima fidelidade sonora.",
        imagem: "img/prontos/DRUMKIT FARIENTO DE SEMBA.jpg",
        precoAntigo: 3000,
        precoAtual: 1000,
        vendas: 14,
        linkCheckout: "https://checkout.lonekenobeat.com/pay/drumkit-fariento-de-semba",
        videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        destaque: false
    },
    {
        id: 48,
        uuid: null,
        slug: "drumkit-fariento-de-trap",
        titulo: "DRUMKIT FARIENTO DE TRAP",
        categoria: "drumkits",
        descricao: "808s afinados, claps pesados e hi-hats prontos para o cenário Trap atual.",
        imagem: "img/prontos/DRUMKIT FARIENTO DE TRAP.jpg",
        precoAntigo: 3000,
        precoAtual: 1000,
        vendas: 210,
        linkCheckout: "https://checkout.lonekenobeat.com/pay/drumkit-fariento-de-trap",
        videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        destaque: false
    },
    {
        id: 49,
        uuid: null,
        slug: "drumkit-filho-do-zua",
        titulo: "DRUMKIT FILHO DO ZUA",
        categoria: "drumkits",
        descricao: "Kits percussivos com forte inclinação melódica inspirados no estilo de Filho do Zua.",
        imagem: "img/prontos/DRUMKIT FILHO DO ZUA.jpg",
        precoAntigo: 3000,
        precoAtual: 1000,
        vendas: 173,
        linkCheckout: "https://checkout.lonekenobeat.com/pay/drumkit-filho-do-zua",
        videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        destaque: true
    },

    // ==========================================
    // BLOCO 17: PLUGINS
    // ==========================================
    {
        id: 50,
        uuid: null,
        slug: "packs-de-plugins-de-instrumentos-virtuais-de-guetho-zouk",
        titulo: "PACKS DE PLUGINS DE INSTRUMENTOS VIRTUAIS DE GUETHO ZOUK",
        categoria: "plugins",
        descricao: "Instrumentos digitais pré-configurados para entregar texturas suaves perfeitas de Zouk.",
        imagem: "img/prontos/PACKS DE PLUGINS DE INSTRUMENTOS VIRTUAIS DE GUETHO ZOUK.jpg",
        precoAntigo: 3000,
        precoAtual: 1000,
        vendas: 156,
        linkCheckout: "https://checkout.lonekenobeat.com/pay/packs-de-plugins-de-instrumentos-virtuais-de-guetho-zouk",
        videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        destaque: false
    },
    {
        id: 51,
        uuid: null,
        slug: "packs-de-plugins-de-instrumentos-virtuais-de-semba",
        titulo: "PACKS DE PLUGINS DE INSTRUMENTOS VIRTUAIS DE SEMBA",
        categoria: "plugins",
        descricao: "A emulação perfeita de instrumentos acústicos necessários para dar vida ao Semba moderno.",
        imagem: "img/prontos/PACKS DE PLUGINS DE INSTRUMENTOS VIRTUAIS DE SEMBA.jpg",
        precoAntigo: 3000,
        precoAtual: 1000,
        vendas: 182,
        linkCheckout: "https://checkout.lonekenobeat.com/pay/packs-de-plugins-de-instrumentos-virtuais-de-semba",
        videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        destaque: true
    },

    // ==========================================
    // BLOCO 18: DRUMKITS
    // ==========================================
    {
        id: 52,
        uuid: null,
        slug: "drumkit-ganah-boyz",
        titulo: "DRUMKIT GANAH BOYZ",
        categoria: "drumkits",
        descricao: "Sons focados na batida agressiva e contagiante característica dos Ganah Boyz.",
        imagem: "img/prontos/DRUMKIT GANAH BOYZ.jpg",
        precoAntigo: 3000,
        precoAtual: 1000,
        vendas: 87,
        linkCheckout: "https://checkout.lonekenobeat.com/pay/drumkit-ganah-boyz",
        videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        destaque: false
    },
    {
        id: 53,
        uuid: null,
        slug: "drumkit-gerilson-insrael",
        titulo: "DRUMKIT GERILSON INSRAEL",
        categoria: "drumkits",
        descricao: "Elementos percussivos de elite inspirados nos maiores sucessos de Gerilson Insrael.",
        imagem: "img/prontos/DRUMKIT GERILSON INSRAEL.jpg",
        precoAntigo: 3000,
        precoAtual: 1000,
        vendas: 432,
        linkCheckout: "https://checkout.lonekenobeat.com/pay/drumkit-gerilson-insrael",
        videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        destaque: true
    },
    {
        id: 54,
        uuid: null,
        slug: "drumkit-halison-paixao",
        titulo: "DRUMKIT HALISON PAIXÃO",
        categoria: "drumkits",
        descricao: "Kits selecionados e voltados ao estilo único e romântico de Halison Paixão.",
        imagem: "img/prontos/DRUMKIT HALISON PAIXÃO.jpg",
        precoAntigo: 3000,
        precoAtual: 1000,
        vendas: 134,
        linkCheckout: "https://checkout.lonekenobeat.com/pay/drumkit-halison-paixao",
        videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        destaque: false
    },
    {
        id: 55,
        uuid: null,
        slug: "drumkit-ivandro",
        titulo: "DRUMKIT IVANDRO",
        categoria: "drumkits",
        descricao: "Elementos percussivos acústicos e eletrônicos perfeitos para R&B e Afro Pop moderno.",
        imagem: "img/prontos/DRUMKIT IVANDRO.jpg",
        precoAntigo: 3000,
        precoAtual: 1000,
        vendas: 215,
        linkCheckout: "https://checkout.lonekenobeat.com/pay/drumkit-ivandro",
        videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        destaque: false
    },

    // ==========================================
    // BLOCO 19: CURSOS
    // ==========================================
    {
        id: 56,
        uuid: null,
        slug: "curso-completo-de-producao-de-beats-de-trap-mix-e-master-no-fl-studio",
        titulo: "CURSO COMPLETO DE PRODUÇÃO DE BEATS DE TRAP + MIX E MASTER NO FL STUDIO",
        categoria: "cursos",
        descricao: "Crie batidas de Trap comerciais com 808s que tremem tudo e melodias marcantes do zero.",
        imagem: "img/prontos/CURSO COMPLETO DE PRODUÇÃO DE BEATS DE TRAP + MIX E MASTER NO FL STUDIO.jpg",
        precoAntigo: 20000,
        precoAtual: 10000,
        vendas: 489,
        linkCheckout: "https://checkout.lonekenobeat.com/pay/curso-completo-de-producao-de-beats-de-trap-mix-e-master-no-fl-studio",
        videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        destaque: true
    },
    {
        id: 57,
        uuid: null,
        slug: "curso-de-como-baixar-e-instalar-qualquer-programa-de-producao-musical",
        titulo: "CURSO DE COMO BAIXAR E INSTALAR QUALQUER PROGRAMA DE PRODUÇÃO MUSICAL",
        categoria: "cursos",
        descricao: "Monte o seu estúdio digital sem dores de cabeça com este tutorial completo passo a passo.",
        imagem: "img/prontos/CURSO DE COMO BAIXAR E INSTALAR QUALQUER PROGRAMA DE PRODUÇÃO MUSICAL.jpg",
        precoAntigo: 15000,
        precoAtual: 10000,
        vendas: 176,
        linkCheckout: "https://checkout.lonekenobeat.com/pay/curso-de-como-baixar-e-instalar-qualquer-programa-de-producao-musical",
        videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        destaque: false
    },
    {
        id: 58,
        uuid: null,
        slug: "curso-de-como-criar-uma-conta-na-redotpay",
        titulo: "CURSO DE COMO CRIAR UMA CONTA NA REDOTPAY",
        categoria: "cursos",
        descricao: "Aprenda a configurar e validar a sua conta para receber pagamentos internacionais sem travas.",
        imagem: "img/prontos/CURSO DE COMO CRIAR UMA CONTA NA REDOTPAY.jpg",
        precoAntigo: 5000,
        precoAtual: 1000,
        vendas: 210,
        linkCheckout: "https://checkout.lonekenobeat.com/pay/curso-de-como-criar-uma-conta-na-redotpay",
        videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        destaque: false
    },

    // ==========================================
    // BLOCO 20: FLP
    // ==========================================
    {
        id: 59,
        uuid: null,
        slug: "flp-nao-fica-teimoso-vais-sofrer",
        titulo: "FLP NÃO FICA TEIMOSO VAIS SOFRER",
        categoria: "flp",
        descricao: "Estude o balanço exato dos claps e a timbragem das percussões contidas neste super hit.",
        imagem: "img/prontos/FLP NÃO FICA TEIMOSO VAIS SOFRER.jpg",
        precoAntigo: 3000,
        precoAtual: 1000,
        vendas: 145,
        linkCheckout: "https://checkout.lonekenobeat.com/pay/flp-nao-fica-teimoso-vais-sofrer",
        videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        destaque: false
    },
    {
        id: 60,
        uuid: null,
        slug: "flp-nao-tomaram-banho",
        titulo: "FLP NÃO TOMARAM BANHO",
        categoria: "flp",
        descricao: "Projeto aberto icônico com estruturas de automação agressivas prontas para estudar.",
        imagem: "img/prontos/FLP NÃO TOMARAM BANHO.jpg",
        precoAntigo: 3000,
        precoAtual: 1000,
        vendas: 189,
        linkCheckout: "https://checkout.lonekenobeat.com/pay/flp-nao-tomaram-banho",
        videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        destaque: false
    },
    {
        id: 61,
        uuid: null,
        slug: "flp-pedra",
        titulo: "FLP PEDRA",
        categoria: "flp",
        descricao: "Estrutura crua e rítmica de alta energia focada no estilo de Kuduro pesado das ruas.",
        imagem: "img/prontos/FLP PEDRA.jpg",
        precoAntigo: 3000,
        precoAtual: 1000,
        vendas: 104,
        linkCheckout: "https://checkout.lonekenobeat.com/pay/flp-pedra",
        videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        destaque: false
    },

    // ==========================================
    // BLOCO 21: DRUMKITS
    // ==========================================
    {
        id: 62,
        uuid: null,
        slug: "drumkit-j-levy",
        titulo: "DRUMKIT J LEVY",
        categoria: "drumkits",
        descricao: "Timbres refinados e grooves de alta qualidade inspirados pelo mestre J Levy.",
        imagem: "img/prontos/DRUMKIT J LEVY.jpg",
        precoAntigo: 3000,
        precoAtual: 1000,
        vendas: 112,
        linkCheckout: "https://checkout.lonekenobeat.com/pay/drumkit-j-levy",
        videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        destaque: false
    },
    {
        id: 63,
        uuid: null,
        slug: "drumkit-john-trouble",
        titulo: "DRUMKIT JOHN TROUBLE",
        categoria: "drumkits",
        descricao: "Sons dinâmicos e texturas urbanas perfeitas para produções versáteis no FL Studio.",
        imagem: "img/prontos/DRUMKIT JOHN TROUBLE.jpg",
        precoAntigo: 3000,
        precoAtual: 1000,
        vendas: 76,
        linkCheckout: "https://checkout.lonekenobeat.com/pay/drumkit-john-trouble",
        videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        destaque: false
    },
    {
        id: 64,
        uuid: null,
        slug: "drumkit-jojo-gouveia",
        titulo: "DRUMKIT JOJO GOUVEIA",
        categoria: "drumkits",
        descricao: "Kits de percussão tradicionais e acústicos inspirados na musicalidade de Jojo Gouveia.",
        imagem: "img/prontos/DRUMKIT JOJO GOUVEIA.jpg",
        precoAntigo: 3000,
        precoAtual: 1000,
        vendas: 94,
        linkCheckout: "https://checkout.lonekenobeat.com/pay/drumkit-jojo-gouveia",
        videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        destaque: false
    },
    {
        id: 65,
        uuid: null,
        slug: "drumkit-justino-handanga",
        titulo: "DRUMKIT JUSTINO HANDANGA",
        categoria: "drumkits",
        descricao: "A mais pura essência do ritmo tradicional com a timbragem clássica de Justino Handanga.",
        imagem: "img/prontos/DRUMKIT JUSTINO HANDANGA.jpg",
        precoAntigo: 3000,
        precoAtual: 1000,
        vendas: 215,
        linkCheckout: "https://checkout.lonekenobeat.com/pay/drumkit-justino-handanga",
        videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        destaque: true
    },

    // ==========================================
    // BLOCO 22: LOOPS
    // ==========================================
    {
        id: 66,
        uuid: null,
        slug: "loop-kit-tabua-mista-de-semba-volume-2",
        titulo: "LOOP KIT TABUA MISTA DE SEMBA VOLUME 2",
        categoria: "loops",
        descricao: "Progressões rítmicas avançadas de Semba para acelerar a sua velocidade de criação no estúdio.",
        imagem: "img/prontos/LOOP KIT TABUA MISTA DE SEMBA VOLUME 2.jpg",
        precoAntigo: 3000,
        precoAtual: 1000,
        vendas: 133,
        linkCheckout: "https://checkout.lonekenobeat.com/pay/loop-kit-tabua-mista-de-semba-volume-2",
        videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        destaque: false
    },
    {
        id: 67,
        uuid: null,
        slug: "loop-kit-tabua-mista-de-semba",
        titulo: "LOOP KIT TABUA MISTA DE SEMBA",
        categoria: "loops",
        descricao: "Grooves autênticos de Semba gravados por percussionistas profissionais da nossa praça.",
        imagem: "img/prontos/LOOP KIT TABUA MISTA DE SEMBA.jpg",
        precoAntigo: 3000,
        precoAtual: 1000,
        vendas: 245,
        linkCheckout: "https://checkout.lonekenobeat.com/pay/loop-kit-tabua-mista-de-semba",
        videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        destaque: true
    },

    // ==========================================
    // BLOCO 23: DRUMKITS
    // ==========================================
    {
        id: 68,
        uuid: null,
        slug: "drumkit-landrick",
        titulo: "DRUMKIT LANDRICK",
        categoria: "drumkits",
        descricao: "Sons sensuais e percussões macias sob medida para Kizomba ao estilo Landrick.",
        imagem: "img/prontos/DRUMKIT LANDRICK.jpg",
        precoAntigo: 3000,
        precoAtual: 1000,
        vendas: 320,
        linkCheckout: "https://checkout.lonekenobeat.com/pay/drumkit-landrick",
        videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        destaque: true
    },
    {
        id: 69,
        uuid: null,
        slug: "drumkit-lil-magro",
        titulo: "DRUMKIT LIL MAGRO",
        categoria: "drumkits",
        descricao: "A pegada rítmica moderna perfeita para hits de rua e produções rápidas.",
        imagem: "img/prontos/DRUMKIT LIL MAGRO.jpg",
        precoAntigo: 3000,
        precoAtual: 1000,
        vendas: 142,
        linkCheckout: "https://checkout.lonekenobeat.com/pay/drumkit-lil-magro",
        videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        destaque: false
    },
    {
        id: 70,
        uuid: null,
        slug: "drumkit-mano-chaba",
        titulo: "DRUMKIT MANO CHABA",
        categoria: "drumkits",
        descricao: "Kits percussivos ideais para criar balanços e grooves nativos de alto impacto.",
        imagem: "img/prontos/DRUMKIT MANO CHABA.jpg",
        precoAntigo: 3000,
        precoAtual: 1000,
        vendas: 91,
        linkCheckout: "https://checkout.lonekenobeat.com/pay/drumkit-mano-chaba",
        videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        destaque: false
    },
    {
        id: 71,
        uuid: null,
        slug: "drumkit-meyson",
        titulo: "DRUMKIT MEYSON",
        categoria: "drumkits",
        descricao: "Seleção exclusiva de timbres e efeitos para enriquecer qualquer produção musical.",
        imagem: "img/prontos/DRUMKIT MEYSON.jpg",
        precoAntigo: 3000,
        precoAtual: 1000,
        vendas: 104,
        linkCheckout: "https://checkout.lonekenobeat.com/pay/drumkit-meyson",
        videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        destaque: false
    },

    // ==========================================
    // BLOCO 24: CURSOS
    // ==========================================
    {
        id: 72,
        uuid: null,
        slug: "curso-de-como-ganhar-no-minimo-50000kz-por-mes-criando-artes-com-inteligencia-artificial",
        titulo: "CURSO DE COMO GANHAR NO MINIMO 50.000KZ POR MES CRIANDO ARTES COM INTELIGENCIA ARTIFICIAL",
        categoria: "cursos",
        descricao: "Aprenda a dominar as ferramentas de I.A. para criar capas de beats, flyers e faturar no mercado digital.",
        imagem: "img/prontos/CURSO DE COMO GANHAR NO MINIMO 50.000KZ POR MES CRIANDO ARTES COM INTELIGENCIA ARTIFICIAL.jpg",
        precoAntigo: 15000,
        precoAtual: 10000,
        vendas: 267,
        linkCheckout: "https://checkout.lonekenobeat.com/pay/curso-de-como-ganhar-no-minimo-50000kz-por-mes-criando-artes-com-inteligencia-artificial",
        videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        destaque: true
    },
    {
        id: 73,
        uuid: null,
        slug: "curso-de-fl-studio-para-iniciantes",
        titulo: "CURSO DE FL STUDIO PARA INICIANTES",
        categoria: "cursos",
        descricao: "O pontapé inicial perfeito. Aprenda a dominar a interface, piano roll e mixer do zero absoluto.",
        imagem: "img/prontos/CURSO DE FL STUDIO PARA INICIANTES.jpg",
        precoAntigo: 20000,
        precoAtual: 10000,
        vendas: 534,
        linkCheckout: "https://checkout.lonekenobeat.com/pay/curso-de-fl-studio-para-iniciantes",
        videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        destaque: false
    },

    // ==========================================
    // BLOCO 25: FLP
    // ==========================================
    {
        id: 74,
        uuid: null,
        slug: "flp-perigosa",
        titulo: "FLP PERIGOSA",
        categoria: "flp",
        descricao: "Estude as progressões de acordes sensuais e transições profissionais em formato aberto.",
        imagem: "img/prontos/FLP PERIGOSA.jpg",
        precoAntigo: 3000,
        precoAtual: 1000,
        vendas: 167,
        linkCheckout: "https://checkout.lonekenobeat.com/pay/flp-perigosa",
        videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        destaque: false
    },
    {
        id: 75,
        uuid: null,
        slug: "flp-peso-pesado",
        titulo: "FLP PESO PESADO",
        categoria: "flp",
        descricao: "Mixagem avançada de sub-graves aplicada a um instrumental focado em Rap de impacto.",
        imagem: "img/prontos/FLP PESO PESADO.jpg",
        precoAntigo: 3000,
        precoAtual: 1000,
        vendas: 112,
        linkCheckout: "https://checkout.lonekenobeat.com/pay/flp-peso-pesado",
        videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        destaque: true
    },
    {
        id: 76,
        uuid: null,
        slug: "flp-prolongado",
        titulo: "FLP PROLONGADO",
        categoria: "flp",
        descricao: "Estude automações estruturais complexas ideais para estender a energia das suas tracks.",
        imagem: "img/prontos/FLP PROLONGADO.jpg",
        precoAntigo: 3000,
        precoAtual: 1000,
        vendas: 89,
        linkCheckout: "https://checkout.lonekenobeat.com/pay/flp-prolongado",
        videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        destaque: false
    },

    // ==========================================
    // BLOCO 26: DRUMKITS
    // ==========================================
    {
        id: 77,
        uuid: null,
        slug: "drumkit-nelasta",
        titulo: "DRUMKIT NELASTA",
        categoria: "drumkits",
        descricao: "Sons pesados de Afro House com a assinatura inconfundível do icônico DJ Nelasta.",
        imagem: "img/prontos/DRUMKIT NELASTA.jpg",
        precoAntigo: 3000,
        precoAtual: 1000,
        vendas: 412,
        linkCheckout: "https://checkout.lonekenobeat.com/pay/drumkit-nelasta",
        videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        destaque: true
    },
    {
        id: 78,
        uuid: null,
        slug: "drumkit-paulelson",
        titulo: "DRUMKIT PAULELSON",
        categoria: "drumkits",
        descricao: "808s agressivos e elementos cortantes para produções inspiradas na sonoridade de Paulelson.",
        imagem: "img/prontos/DRUMKIT PAULELSON.jpg",
        precoAntigo: 3000,
        precoAtual: 1000,
        vendas: 310,
        linkCheckout: "https://checkout.lonekenobeat.com/pay/drumkit-paulelson",
        videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        destaque: true
    },
    {
        id: 79,
        uuid: null,
        slug: "drumkit-perola",
        titulo: "DRUMKIT PÉROLA",
        categoria: "drumkits",
        descricao: "Kits de percussão finos e elegantes ideais para Kizomba e Afro Pop no estilo de Pérola.",
        imagem: "img/prontos/DRUMKIT PÉROLA.jpg",
        precoAntigo: 3000,
        precoAtual: 1000,
        vendas: 214,
        linkCheckout: "https://checkout.lonekenobeat.com/pay/drumkit-perola",
        videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        destaque: false
    },
    {
        id: 80,
        uuid: null,
        slug: "drumkit-plutonio",
        titulo: "DRUMKIT PLUTONIO",
        categoria: "drumkits",
        descricao: "A fusão perfeita entre sons Hip Hop, RnB e Afro Trap baseados na vibe do Plutonio.",
        imagem: "img/prontos/DRUMKIT PLUTONIO.jpg",
        precoAntigo: 3000,
        precoAtual: 1000,
        vendas: 276,
        linkCheckout: "https://checkout.lonekenobeat.com/pay/drumkit-plutonio",
        videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        destaque: false
    },
    {
        id: 81,
        uuid: null,
        slug: "drumkit-puto-portugues",
        titulo: "DRUMKIT PUTO PORTUGUES",
        categoria: "drumkits",
        descricao: "Sons clássicos e batidas orgânicas com o tempero e balanço fiel de Puto Português.",
        imagem: "img/prontos/DRUMKIT PUTO PORTUGUES.jpg",
        precoAntigo: 3000,
        precoAtual: 1000,
        vendas: 154,
        linkCheckout: "https://checkout.lonekenobeat.com/pay/drumkit-puto-portugues",
        videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        destaque: false
    },

    // ==========================================
    // BLOCO 27: PLUGINS
    // ==========================================
    {
        id: 82,
        uuid: null,
        slug: "packs-de-plugins-de-instrumentos-virtuais-de-trap",
        titulo: "PACKS DE PLUGINS DE INSTRUMENTOS VIRTUAIS DE TRAP",
        categoria: "plugins",
        descricao: "Bancos de timbres pesados e sintetizadores digitais afiados para bombar produções de Trap.",
        imagem: "img/prontos/PACKS DE PLUGINS DE INSTRUMENTOS VIRTUAIS DE TRAP.jpg",
        precoAntigo: 3000,
        precoAtual: 1000,
        vendas: 342,
        linkCheckout: "https://checkout.lonekenobeat.com/pay/packs-de-plugins-de-instrumentos-virtuais-de-trap",
        videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        destaque: true
    },

    // ==========================================
    // BLOCO 28: DRUMKITS
    // ==========================================
    {
        id: 83,
        uuid: null,
        slug: "drumkit-rui-orlando",
        titulo: "DRUMKIT RUI ORLANDO",
        categoria: "drumkits",
        descricao: "Texturas românticas e percussões harmônicas suaves inspiradas nas faixas de Rui Orlando.",
        imagem: "img/prontos/DRUMKIT RUI ORLANDO.jpg",
        precoAntigo: 3000,
        precoAtual: 1000,
        vendas: 298,
        linkCheckout: "https://checkout.lonekenobeat.com/pay/drumkit-rui-orlando",
        videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        destaque: true
    },
    {
        id: 84,
        uuid: null,
        slug: "drumkit-scro-que-cuia",
        titulo: "DRUMKIT SCRO QUE CUIA",
        categoria: "drumkits",
        descricao: "A mais pura energia irreverente e eletrizante das batidas de Kuduro do Scro Que Cuia.",
        imagem: "img/prontos/DRUMKIT SCRO QUE CUIA.jpg",
        precoAntigo: 3000,
        precoAtual: 1000,
        vendas: 312,
        linkCheckout: "https://checkout.lonekenobeat.com/pay/drumkit-scro-que-cuia",
        videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        destaque: false
    },
    {
        id: 85,
        uuid: null,
        slug: "drumkit-semba-programado",
        titulo: "DRUMKIT SEMBA PROGRAMADO",
        categoria: "drumkits",
        descricao: "Elementos acústicos meticulosamente quantizados e prontos para programação veloz no sequenciador.",
        imagem: "img/prontos/DRUMKIT SEMBA PROGRAMADO.jpg",
        precoAntigo: 3000,
        precoAtual: 1000,
        vendas: 144,
        linkCheckout: "https://checkout.lonekenobeat.com/pay/drumkit-semba-programado",
        videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        destaque: false
    },
    {
        id: 86,
        uuid: null,
        slug: "drumkit-sini",
        titulo: "DRUMKIT SINI",
        categoria: "drumkits",
        descricao: "Sons de bateria versáteis com engenharia limpa prontos para produções variadas.",
        imagem: "img/prontos/DRUMKIT SINI.jpg",
        precoAntigo: 3000,
        precoAtual: 1000,
        vendas: 65,
        linkCheckout: "https://checkout.lonekenobeat.com/pay/drumkit-sini",
        videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        destaque: false
    },
    {
        id: 87,
        uuid: null,
        slug: "drumkit-soarito",
        titulo: "DRUMKIT SOARITO",
        categoria: "drumkits",
        descricao: "Grooves aconchegantes e percussões no ponto para R&B / Kizomba modernos ao estilo Soarito.",
        imagem: "img/prontos/DRUMKIT SOARITO.jpg",
        precoAntigo: 3000,
        precoAtual: 1000,
        vendas: 198,
        linkCheckout: "https://checkout.lonekenobeat.com/pay/drumkit-soarito",
        videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        destaque: false
    },

    // ==========================================
    // BLOCO 29: FLP
    // ==========================================
    {
        id: 88,
        uuid: null,
        slug: "flp-so-tenho-dois-mil-sera-que-posso-te-mandar",
        titulo: "FLP SÓ TENHO DOIS MIL SERÁ QUE POSSO TE MANDAR",
        categoria: "flp",
        descricao: "Veja como foi construído o arranjo satírico e rítmico deste projeto de enorme engajamento de rua.",
        imagem: "img/prontos/FLP SÓ TENHO DOIS MIL SERÁ QUE POSSO TE MANDAR.jpg",
        precoAntigo: 3000,
        precoAtual: 1000,
        vendas: 165,
        linkCheckout: "https://checkout.lonekenobeat.com/pay/flp-so-tenho-dois-mil-sera-que-posso-te-mandar",
        videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        destaque: false
    },
    {
        id: 89,
        uuid: null,
        slug: "flp-tenho-sida",
        titulo: "FLP TENHO SIDA",
        categoria: "flp",
        descricao: "Projeto com foco em arranjos de conscientização urbana e ritmos tradicionais de impacto.",
        imagem: "img/prontos/FLP TENHO SIDA.jpg",
        precoAntigo: 3000,
        precoAtual: 1000,
        vendas: 122,
        linkCheckout: "https://checkout.lonekenobeat.com/pay/flp-tenho-sida",
        videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        destaque: false
    },
    {
        id: 90,
        uuid: null,
        slug: "flp-todo-mal-que-eu-te-fiz",
        titulo: "FLP TODO MAL QUE EU TE FIZ",
        categoria: "flp",
        descricao: "Analise a estrutura de mixagem vocal e progressões melódicas contidas neste projeto aberto.",
        imagem: "img/prontos/FLP TODO MAL QUE EU TE FIZ.jpg",
        precoAntigo: 3000,
        precoAtual: 1000,
        vendas: 214,
        linkCheckout: "https://checkout.lonekenobeat.com/pay/flp-todo-mal-que-eu-te-fiz",
        videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        destaque: true
    },

    // ==========================================
    // BLOCO 30: DRUMKITS
    // ==========================================
    {
        id: 91,
        uuid: null,
        slug: "drumkit-tabanka-djaz",
        titulo: "DRUMKIT TABANKA DJAZ",
        categoria: "drumkits",
        descricao: "Elementos percussivos lendários inspirados na sonoridade clássica dos Tabanka Djaz.",
        imagem: "img/prontos/DRUMKIT TABANKA DJAZ.jpg",
        precoAntigo: 3000,
        precoAtual: 1000,
        vendas: 134,
        linkCheckout: "https://checkout.lonekenobeat.com/pay/drumkit-tabanka-djaz",
        videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        destaque: false
    },
    {
        id: 92,
        uuid: null,
        slug: "drumkit-tabua-mista-de-afro-house",
        titulo: "DRUMKIT TABUA MISTA DE AFRO HOUSE",
        categoria: "drumkits",
        descricao: "O verdadeiro arsenal para produtores de Afro House, contendo timbres pesados e grooves limpos.",
        imagem: "img/prontos/DRUMKIT TABUA MISTA DE AFRO HOUSE.jpg",
        precoAntigo: 3000,
        precoAtual: 1000,
        vendas: 312,
        linkCheckout: "https://checkout.lonekenobeat.com/pay/drumkit-tabua-mista-de-afro-house",
        videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        destaque: true
    },
    {
        id: 93,
        uuid: null,
        slug: "drumkit-tabua-mista-de-afrobeat",
        titulo: "DRUMKIT TABUA MISTA DE AFROBEAT",
        categoria: "drumkits",
        descricao: "Seleção completa e mista com timbragens perfeitas para estourar no mercado de Afrobeat.",
        imagem: "img/prontos/DRUMKIT TABUA MISTA DE AFROBEAT.jpg",
        precoAntigo: 3000,
        precoAtual: 1000,
        vendas: 245,
        linkCheckout: "https://checkout.lonekenobeat.com/pay/drumkit-tabua-mista-de-afrobeat",
        videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        destaque: false
    },
    {
        id: 94,
        uuid: null,
        slug: "drumkit-tabua-mista-de-guetho-zouk",
        titulo: "DRUMKIT TABUA MISTA DE GUETHO ZOUK",
        categoria: "drumkits",
        descricao: "A união dos melhores kicks, claps e percussões cadenciadas voltadas ao Guetho Zouk.",
        imagem: "img/prontos/DRUMKIT TABUA MISTA DE GUETHO ZOUK.jpg",
        precoAntigo: 3000,
        precoAtual: 1000,
        vendas: 189,
        linkCheckout: "https://checkout.lonekenobeat.com/pay/drumkit-tabua-mista-de-guetho-zouk",
        videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        destaque: false
    },
    {
        id: 95,
        uuid: null,
        slug: "drumkit-tabua-mista-de-semba",
        titulo: "DRUMKIT TABUA MISTA DE SEMBA",
        categoria: "drumkits",
        descricao: "Kit de ferramentas obrigatório para quem quer programar Semba profissional no computador.",
        imagem: "img/prontos/DRUMKIT TABUA MISTA DE SEMBA.jpg",
        precoAntigo: 3000,
        precoAtual: 1000,
        vendas: 220,
        linkCheckout: "https://checkout.lonekenobeat.com/pay/drumkit-tabua-mista-de-semba",
        videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        destaque: true
    },
    {
        id: 96,
        uuid: null,
        slug: "drumkit-thamires-moiane",
        titulo: "DRUMKIT THAMIRES MOIANE",
        categoria: "drumkits",
        descricao: "Sonoridade limpa e rítmica baseada na linha musical e carisma de Thamires Moiane.",
        imagem: "img/prontos/DRUMKIT THAMIRES MOIANE.jpg",
        precoAntigo: 3000,
        precoAtual: 1000,
        vendas: 114,
        linkCheckout: "https://checkout.lonekenobeat.com/pay/drumkit-thamires-moiane",
        videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        destaque: false
    },
    {
        id: 97,
        uuid: null,
        slug: "drumkit-tsunami",
        titulo: "DRUMKIT TSUNAMI",
        categoria: "drumkits",
        descricao: "Uma verdadeira onda de claps pesados e kicks avassaladores para produções de rua.",
        imagem: "img/prontos/DRUMKIT TSUNAMI.jpg",
        precoAntigo: 3000,
        precoAtual: 1000,
        vendas: 156,
        linkCheckout: "https://checkout.lonekenobeat.com/pay/drumkit-tsunami",
        videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        destaque: false
    },
    {
        id: 98,
        uuid: null,
        slug: "drumkit-twenty-fingers",
        titulo: "DRUMKIT TWENTY FINGERS",
        categoria: "drumkits",
        descricao: "Grooves contagiantes com elementos refinados inspirados na musicalidade do Twenty Fingers.",
        imagem: "img/prontos/DRUMKIT TWENTY FINGERS.jpg",
        precoAntigo: 3000,
        precoAtual: 1000,
        vendas: 142,
        linkCheckout: "https://checkout.lonekenobeat.com/pay/drumkit-twenty-fingers",
        videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        destaque: false
    },
    {
        id: 99,
        uuid: null,
        slug: "drumkit-yasmine",
        titulo: "DRUMKIT YASMINE",
        categoria: "drumkits",
        descricao: "Elementos percussivos românticos e texturas suaves com o DNA e estilo inconfundível de Yasmine.",
        imagem: "img/prontos/DRUMKIT YASMINE.jpg",
        precoAntigo: 3000,
        precoAtual: 1000,
        vendas: 205,
        linkCheckout: "https://checkout.lonekenobeat.com/pay/drumkit-yasmine",
        videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        destaque: true
    }
];
