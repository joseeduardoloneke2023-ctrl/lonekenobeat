// BANCO DE DADOS CENTRALIZADO - 12 CURSOS LONEKE ACADEMY 2026
const PLATAFORMA_DATA = {
    cursos: [
        {
            id: "venda-artes-ia",
            titulo: "Venda de Artes com IA + Tráfego Pago",
            categoria: "business",
            daw: "IA + Meta Ads",
            imagem: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800",
            descricao: "Fature no mínimo 50.000 Kz/mês criando capas de música, flyers e logotipos profissionais em minutos usando Inteligência Artificial e anúncios digitais.",
            estudantesAtivos: 314,
            vagasPendentes: 2,
            preco: 25000,
            vslVideoId: "H_srkC1l3kM",
            vslHeadline: "COMO GERAR 50.000 KZ RECORRENTES COM ARTES EM IA SEM PRECISAR SER DESIGNER"
        },
        {
            id: "distribuicao-digital",
            titulo: "Distribuição Musical + Tráfego Pago",
            categoria: "business",
            daw: "Business",
            imagem: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800",
            descricao: "O método exato para lucrar mais de 50.000 Kz/mês colocando músicas nas plataformas digitais e usando tráfego para explodir os plays.",
            estudantesAtivos: 245,
            vagasPendentes: 4,
            preco: 30000,
            vslVideoId: "H_srkC1l3kM",
            vslHeadline: "COLOQUE MÚSICAS NO SPOTIFY/APPLE MUSIC E COBRE MAIS DE 50.000 KZ POR LANÇAMENTO"
        },
        {
            id: "venda-drumkits",
            titulo: "Venda de Drumkits & Instalação de Plugins",
            categoria: "business",
            daw: "Instalação",
            imagem: "https://images.unsplash.com/photo-1598653222000-6b7b7a552625?w=800",
            descricao: "Crie o seu próprio negócio digital faturando 50.000 Kz por mês vendendo pacotes de som e prestando serviço técnico de instalação.",
            estudantesAtivos: 189,
            vagasPendentes: 5,
            preco: 20000,
            vslVideoId: "H_srkC1l3kM",
            vslHeadline: "SAIBA COMO MONETIZAR O SEU DISCO RÍGIDO INSTALANDO COMPONENTES E VENDENDO SAMPLES"
        },
        {
            id: "producao-semba",
            titulo: "Produção de Semba Completo + Mix/Master",
            categoria: "produção",
            daw: "FL Studio",
            imagem: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800",
            descricao: "Domine o balanço tradicional do Semba. Captura de guitarras rítmicas, linhas de baixo com swing nacional e finalização comercial de elite.",
            estudantesAtivos: 167,
            vagasPendentes: 3,
            preco: 45000,
            vslVideoId: "H_srkC1l3kM",
            vslHeadline: "O SEGREDO DA CADÊNCIA BRUTA DO SEMBA REVELADO DE FORMA CIENTÍFICA NO FL STUDIO"
        },
        {
            id: "producao-afrobeat",
            titulo: "Produção de Afrobeat + Mix/Master",
            categoria: "produção",
            daw: "FL Studio",
            imagem: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800",
            descricao: "Crie grooves magnéticos no padrão nigeriano internacional. Seleção de percussões exóticas, arranjos fluidos e ganho de loudness competitivo.",
            estudantesAtivos: 420,
            vagasPendentes: 2,
            preco: 40000,
            vslVideoId: "H_srkC1l3kM",
            vslHeadline: "DOMINE OS GROOVES DE AFROBEAT QUE MANDAM NO MERCADO INTERNACIONAL ATUALMENTE"
        },
        {
            id: "producao-zouk",
            titulo: "Produção de Ghetto Zouk + Mix/Master",
            categoria: "produção",
            daw: "FL Studio",
            imagem: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800",
            descricao: "Bumbo pesado, sintetizadores envolventes e as texturas melódicas sensuais que definem as grandes produções de Ghetto Zouk do país.",
            estudantesAtivos: 288,
            vagasPendentes: 6,
            preco: 40000,
            vslVideoId: "H_srkC1l3kM",
            vslHeadline: "APRENDA A PRODUZIR INTEGRALMENTE GHETTO ZOUK WITH TEXTURAS PROFUNDAS E GRAVES LIMPOS"
        },
        {
            id: "producao-afrohouse",
            titulo: "Produção de Afro House + Mix/Master",
            categoria: "produção",
            daw: "FL Studio",
            imagem: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800",
            descricao: "Loops tribais violentos, synths cortantes e estruturação focada em pistas de dança rápidas e sound systems de alta pressão.",
            estudantesAtivos: 350,
            vagasPendentes: 3,
            preco: 45000,
            vslVideoId: "H_srkC1l3kM",
            vslHeadline: "CONSTRUA PERCUSSÕES BRUTAS DE AFRO HOUSE NO PADRÃO DAS MAIORES PISTAS DE LUANDA"
        },
        {
            id: "instalar-programas",
            titulo: "Como Baixar e Instalar Programas de Áudio",
            categoria: "utilitarios",
            daw: "Sistema",
            imagem: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?w=800",
            descricao: "Guia definitivo passo a passo para encontrar, descarregar e configurar qualquer software profissional de produção sem vírus ou erros.",
            estudantesAtivos: 195,
            vagasPendentes: 8,
            preco: 10000,
            vslVideoId: "H_srkC1l3kM",
            vslHeadline: "NUNCA MAIS SOFRA COM ERROS: INSTALE QUALQUER DAW NO SEU COMPUTADOR SEM COMPLICAÇÕES"
        },
        {
            id: "instalar-plugins",
            titulo: "Como Baixar e Instalar Qualquer Plugin",
            categoria: "utilitarios",
            daw: "Plugins VST",
            imagem: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800",
            descricao: "Aprenda o mapeamento correto de pastas (.dll, .vst3) para fazer o seu FL Studio ou qualquer DAW reconhecer todos os instrumentos instalados.",
            estudantesAtivos: 210,
            vagasPendentes: 7,
            preco: 10000,
            vslVideoId: "H_srkC1l3kM",
            vslHeadline: "DOMINE A ESTRUTURAÇÃO DE DIRETÓRIOS E INSTALE SEUS VSTs DE FORMA RÁPIDA E LIMPA"
        },
        {
            id: "kuduro-melodico",
            titulo: "Curso Completo de Kuduro Melódico",
            categoria: "produção",
            daw: "FL Studio",
            imagem: "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?w=800",
            descricao: "A evolução do Kuduro. Harmonias modernas sem perder a agressividade das percussões eletrônicas que dominam os guetos.",
            estudantesAtivos: 299,
            vagasPendentes: 4,
            preco: 35000,
            vslVideoId: "H_srkC1l3kM",
            vslHeadline: "A REVOLUÇÃO DO GUETO: PRODUZA KUDURO MELÓDICO COM ALTA QUALIDADE FONOGRÁFICA"
        },
        {
            id: "fazer-remakes",
            titulo: "Curso Avançado de Remakes",
            categoria: "produção",
            daw: "FL Studio",
            imagem: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=800",
            descricao: "Treine o seu ouvido para decifrar acapellas, descobrir instrumentos usados por produtores internacionais e replicar instrumentais com precisão milimétrica.",
            estudantesAtivos: 154,
            vagasPendentes: 4,
            preco: 25000,
            vslVideoId: "H_srkC1l3kM",
            vslHeadline: "ENGENHARIA REVERSA MUSICAL: DESCUBRA COMO REPLICAR PERFEITAMENTE QUALQUER MÚSICA"
        },
        {
            id: "fl-iniciantes",
            titulo: "FL Studio Completo para Iniciantes",
            categoria: "produção",
            daw: "FL Studio 24",
            imagem: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=800",
            descricao: "Do zero absoluto ao primeiro beat pronto. Sequencer, Playlist, canais de Mixer e automações explicadas da forma mais simples possível.",
            estudantesAtivos: 512,
            vagasPendentes: 10,
            preco: 15000,
            vslVideoId: "H_srkC1l3kM",
            vslHeadline: "DOMINE O FL STUDIO DESDE O ZERO ABSOLUTO E CONSTRUA SEU PRIMEIRO PROJETO EM 48 HORAS"
        }
    ],
    
    feedbacksAudio: [
        { 
            nome: "DJ Sombra (Viana)", 
            curso: "Produção de Afro House", 
            audioUrl: "audios/viana.mp3", 
            avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150" 
        },
        { 
            nome: "Afonso Prod (Talatona)", 
            curso: "Venda de Artes com IA", 
            audioUrl: "audios/talatona.mp3", 
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150" 
        },
        { 
            nome: "Yuri Beat (Cazenga)", 
            curso: "Distribuição Musical", 
            audioUrl: "audios/cazenga.mp3", 
            avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150" 
        }
    ],

    notificacoes: {
        nomes: ["Cláudio M.", "DJ Naice", "Filipe G.", "Edivaldo K.", "Sanderson", "Mauro Silva"],
        locais: ["Luanda", "Benguela", "Huambo", "Cabinda", "Viana", "Talatona"]
    }
};