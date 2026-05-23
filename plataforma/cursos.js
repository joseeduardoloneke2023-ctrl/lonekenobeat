// BANCO DE DADOS CENTRALIZADO - LONEKE ACADEMY 2026
const PLATAFORMA_DATA = {
    cursos: [
        {
            id: "cursos-sobre-ganhar-dinheiro",
            titulo: "CURSO COMPLETO DE COMO GANHAR NO MINIMO 50.000KZ POR MÊS CRIANDO ARTES COM INTELIGENCIA ARTIFICIAL",
            categoria: "curso",
            daw: "",
            imagem: "https://www.image2url.com/r2/default/images/1779534767030-95462f5d-57d1-4342-8d2d-828e2b828205.jpg",
            descricao: "Aprenda a dominar as ferramentas de IA mais avançadas do mercado para criar e monetizar artes digitais profissionais e garantir uma renda sólida.",
            estudantesAtivos: 314,
            vagasPendentes: 2,
            precoAntes: 45000,
            preco: 25000,
            vslVideoId: "VIDEO_ID_AQUI", // Insira o ID do vídeo do YouTube aqui
            vslHeadline: "DESCUBRA O MÉTODO PARA GERAR RENDA COM ARTES EM IA"
        },
        {
            id: "cursos-sobre-ganhar-dinheiro",
            titulo: "CURSO COMPLETO DE COMO GANHAR NO MINIMO 50.000KZ POR MÊS DISTRIBUINDO MUSICAS NAS PLATAFORMAS DIGITAIS",
            categoria: "business",
            daw: "",
            imagem: "https://www.image2url.com/r2/default/images/1779534804195-2c5c4a67-ce6e-4747-af51-79054faef05b.jpg",
            descricao: "Coloque as suas músicas ou de terceiros no Spotify, Apple Music e Deezer. Entenda o ecossistema de royalties e receba diretamente em Angola.",
            estudantesAtivos: 289,
            vagasPendentes: 3,
            precoAntes: 45000,
            preco: 25000,
            vslVideoId: "VIDEO_ID_AQUI",
            vslHeadline: "MONETIZE AS SUAS MÚSICAS NAS PLATAFORMAS DIGITAIS GLOBAIS"
        },
        {
            id: "cursos-sobre-ganhar-dinheiro",
            titulo: "CURSO COMPLETO DE COMO GANHAR NO MINIMO 50.000KZ POR MÊS VENDENDO DRUMKIT E INSTALANDO PLUGINS",
            categoria: "business",
            daw: "",
            imagem: "https://www.image2url.com/r2/default/images/1779535114119-9a07740e-b234-4e41-bbab-269e5c45d7ea.jpg",
            descricao: "Transforme o conhecimento técnico em negócio. Aprenda a criar os seus próprios pacotes de som e monetizar serviços especializados de instalação.",
            estudantesAtivos: 194,
            vagasPendentes: 5,
            precoAntes: 40000,
            preco: 25000,
            vslVideoId: "VIDEO_ID_AQUI",
            vslHeadline: "LUCRE PRESTANDO SERVIÇOS TÉCNICOS E VENDENDO PRODUTOS DIGITAIS"
        },
        {
            id: "cursos-de-download-e-instalacao",
            titulo: "CURSO COMPLETO DE COMO BAIXAR E INSTALAR QUALQUER PLUGIN VST E VSTI",
            categoria: "business",
            daw: "",
            imagem: "https://www.image2url.com/r2/default/images/1779534671334-09b76332-4b85-4e2d-bac5-062ac0c74690.jpg",
            descricao: "Diga adeus aos erros de sistema e incompatibilidades. O guia definitivo para encontrar, descarregar e ativar qualquer extensão ou instrumento virtual.",
            estudantesAtivos: 420,
            vagasPendentes: 1,
            precoAntes: 35000,
            preco: 25000,
            vslVideoId: "VIDEO_ID_AQUI",
            vslHeadline: "CONSTRUA O SEU ARSENAL DE PLUGINS SEM COMPLICAÇÕES OU ERROS"
        },
        {
            id: "cursos-de-download-e-instalacao",
            titulo: "CURSO COMPLETO DE COMO BAIXAR E INSTALAR QUALQUER PROGRAMA DE PRODUÇÃO MUSICAL",
            categoria: "business",
            daw: "",
            imagem: "https://www.image2url.com/r2/default/images/1779534706625-bdc46248-b127-492c-b063-8c302ab08d7a.jpg",
            descricao: "Aprenda o passo a passo seguro para instalar as principais DAWs do mercado (FL Studio, Cubase, Pro Tools) mantendo o seu computador otimizado.",
            estudantesAtivos: 385,
            vagasPendentes: 2,
            precoAntes: 38000,
            preco: 25000,
            vslVideoId: "VIDEO_ID_AQUI",
            vslHeadline: "INSTALE AS PRINCIPAIS DAWS DO MERCADO DE FORMA SEGURA E RÁPIDA"
        },
        {
            id: "cursos-completo-de-produção-no-fl-studio",
            titulo: "CURSO COMPLETO DE PRODUÇÃO DE GUETHO ZOUK + MIX E MASTER NO FL STUDIO",
            categoria: "business",
            daw: "",
            imagem: "https://www.image2url.com/r2/default/images/1779534848832-5fd827d4-a8bb-4fdc-8657-fdf39df34b28.jpg",
            descricao: "Domine a cadência, os acordes e as texturas marcantes do Guetho Zouk, culminando numa engenharia de mistura e masterização comercial de alto nível.",
            estudantesAtivos: 314,
            vagasPendentes: 2,
            precoAntes: 50000,
            preco: 25000,
            vslVideoId: "VIDEO_ID_AQUI",
            vslHeadline: "DOMINE A PRODUÇÃO DE GUETHO ZOUK DO ZERO À MASTERIZAÇÃO"
        },
        {
            id: "cursos-completo-de-produção-no-fl-studio",
            titulo: "CURSO COMPLETO DE PRODUÇÃO DE AFRO HOUSE KUDURO DE ANGOLA + MIX E MASTER NO FL STUDIO",
            categoria: "business",
            daw: "",
            imagem: "https://www.image2url.com/r2/default/images/1779534647112-21eda1cd-c12c-4dfa-b5a9-62bc51c2cfd9.jpg",
            descricao: "Capture a energia rítmica pura das pistas angolanas. Aprenda a programar os tambores agressivos do Kuduro e a espacialidade do Afro House.",
            estudantesAtivos: 512,
            vagasPendentes: 3,
            precoAntes: 55000,
            preco: 25000,
            vslVideoId: "VIDEO_ID_AQUI",
            vslHeadline: "PRODUZA O AUTÊNTICO AFRO HOUSE E KUDURO COM IMPACTO DE PISTA"
        },
        {
            id: "cursos-completo-de-produção-no-fl-studio",
            titulo: "CURSO COMPLETO DE PRODUÇÃO DE AFROBEAT + MIX E MASTER NO FL STUDIO",
            categoria: "business",
            daw: "",
            imagem: "https://www.image2url.com/r2/default/images/1779534602039-0ace794a-16be-4eca-b277-3e00333348b8.jpg",
            descricao: "Desvende os polirritmos, arranjos de metais e melodias cativantes do género que está a conquistar o mundo. Inclui pacotes de samples exclusivos.",
            estudantesAtivos: 428,
            vagasPendentes: 1,
            precoAntes: 48000,
            preco: 25000,
            vslVideoId: "VIDEO_ID_AQUI",
            vslHeadline: "APRENDA OS SEGREDOS DO AFROBEAT INTERNACIONAL NO FL STUDIO"
        },
        {
            id: "cursos-completo-de-produção-no-fl-studio",
            titulo: "CURSO COMPLETO DE PRODUÇÃO DE SEMBA + MIX E MASTER NO FL STUDIO",
            categoria: "business",
            daw: "",
            imagem: "https://www.image2url.com/r2/default/images/1779534887860-0b17fd7e-5540-4b29-a6f6-b42f56b127e3.jpg",
            descricao: "Preserve as nossas raízes com tecnologia moderna. Aprenda a emular guitarras tradicionais, linhas de baixo marcantes e a percussão orgânica do Semba.",
            estudantesAtivos: 186,
            vagasPendentes: 4,
            precoAntes: 45000,
            preco: 25000,
            vslVideoId: "VIDEO_ID_AQUI",
            vslHeadline: "UNA A TRADIÇÃO DO SEMBA À TECNOLOGIA DE PONTA DO FL STUDIO"
        },
        {
            id: "cursos-completo-de-produção-no-fl-studio",
            titulo: "CURSO COMPLETO DE PRODUÇÃO DE TRAP + MIX E MASTER NO FL STUDIO",
            categoria: "business",
            daw: "Business",
            imagem: "https://www.image2url.com/r2/default/images/1779534950224-f793d759-ddc9-4e91-a7d6-4d581afbeac3.jpg",
            descricao: "Subgraves monstruosos (808s), hi-hats velozes e melodias obscuras. Tudo o que precisa para produzir instrumentais competitivos para o mercado atual.",
            estudantesAtivos: 642,
            vagasPendentes: 4,
            precoAntes: 60000,
            preco: 30000,
            vslVideoId: "VIDEO_ID_AQUI",
            vslHeadline: "PRODUZA TRAP DE ALTA PERFORMANCE COM MIX/MASTER PROFISSIONAL"
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
