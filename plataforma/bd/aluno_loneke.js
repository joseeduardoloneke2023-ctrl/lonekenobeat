// Ficheiro: bd/aluno_loneke_2.js

// =========================================================================
// 1. ESTRUTURA INICIAL E LOGIN DO UTILIZADOR
// =========================================================================
const dadosAluno = {
    usuario: {
        username: "loneke", 
        senha: "123",      
        nome: "Loneke",
        email: "loneke@gmail.com"
    },
    cursos: [],
    drumkits: [],
    flps: []
};

// =========================================================================
// 2. CONFIGURAÇÃO DE ELITE DOS 10 CURSOS (Caprichado & Customizável)
// =========================================================================
// Aqui defines as informações principais de cada curso e os nomes dos seus 10 módulos.
const configuracaoCursos = [
    {
        id: 1,
        titulo: "Mixagem Avançada de Vozes Trap",
        imagem: "../img/cursos/loneke.jpg",
        desbloqueado: true,
        linkMaterial: "https://www.mediafire.com/file/exemplo/Plugins_Vocal_Trap.zip/file",
        modulos: [
            "Fundamentos do Vocal Clean", "Correção de Pitch & Autotune", "EQ Cirúrgica Avançada", 
            "Compressão em Série", "Processamento de Sibilantes (De-Esser)", "Efeitos Espaciais (Reverb & Delay)", 
            "Saturação e Exciters Harmónicos", "Mixagem de Dobras e Ad-libs", "Colagem de Voz no Beat", "Limitação e Master Final"
        ]
    },
    {
        id: 2,
        titulo: "Segredos do Beatmaking Internacional",
        imagem: "../img/1123.png",
        desbloqueado: true,
        linkMaterial: "https://www.mediafire.com/file/exemplo/Drumkits_Internacionais.zip/file",
        modulos: [
            "Configuração de Workspace de Elite", "Criação de Melodias Magnéticas", "Arquitetura de Baterias (Drums)", 
            "O Segredo dos 808 Deslisantes", "Groove, Balanço e Micro-Shift", "Arranjo Avançado para Vendas", 
            "Sound Selection de Alto Nível", "Uso Criativo de Loops e Texturas", "Pré-Mixagem de Beats no FL Studio", "Exportação Profissional de Stems"
        ]
    },
    {
        id: 3,
        titulo: "Masterclass: Como Vender Beats Online",
        imagem: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500",
        desbloqueado: true,
        linkMaterial: "https://www.mediafire.com/file/exemplo/Templates_Contratos_Vendas.zip/file",
        modulos: [
            "Mentalidade de Beatmaker Pro", "Posicionamento de Marca no YouTube", "Configuração Otimizada da Loja BeatStars", 
            "Estratégias de Tráfego Orgânico", "Anúncios Pagos para Artistas", "Abordagem de Conversão no Instagram", 
            "Contratos, Licenças e Direitos Autorais", "Funil de Vendas Automatizado", "Networking com Grandes Produtores", "Escalando Faturamento Recorrente"
        ]
    },
    {
        id: 4,
        titulo: "Teoria Musical Aplicada ao Beatmaking",
        imagem: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500",
        desbloqueado: true,
        linkMaterial: "https://www.mediafire.com/file/exemplo/Midikit_Teoria_Musical.zip/file",
        modulos: [
            "Desmistificando o Teclado/Piano Roll", "Escalas Maiores e Menores Naturais", "Formação de Acordes Poderosos", 
            "Progressões de Acordes Emocionais", "Inversões de Acordes e Voice Leading", "Modos Gregos Sem Complicação", 
            "Criação de Linhas de Baixo Marcantes", "Ritmo, Síncope e Contratempo", "Contraponto e Linhas Melódicas Extras", "Composição Guiada de Clímax"
        ]
    },
    {
        id: 5,
        titulo: "Sound Design Profissional no Serum",
        imagem: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=500",
        desbloqueado: true,
        linkMaterial: "https://www.mediafire.com/file/exemplo/Serum_Elite_Presets.zip/file",
        modulos: [
            "Interface e Navegação no Serum", "Anatomia e Tipos de Osciladores", "Filtros Avançados e Modulação", 
            "Envelopes (ADSR) Perfeitos", "LFOs Criativos e Tabelas de Ondas", "Matriz de Modulação Pro", 
            "Efeitos Embutidos do Sintetizador", "Criando Plucks e Leads Do Zero", "Criando Basslines e 808s Únicos", "Organização e Venda de Bancas de Presets"
        ]
    },
    {
        id: 6,
        titulo: "Especialista em Afrobeat & Amapiano",
        imagem: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500",
        desbloqueado: true,
        linkMaterial: "https://www.mediafire.com/file/exemplo/Afro_Percussion_Stems.zip/file",
        modulos: [
            "Origens Históricas e Ritmos Parentes", "Construção de Percussão Afrobeat", "O Groove do Log Drum no Amapiano", 
            "Acordes e Progressões de Jazz/Soul", "Uso de Shakers e Elementos Orgânicos", "Arranjo Progressivo Dançante", 
            "Sound Selection de Instrumentos Reais", "Mixagem Focada em Graves e Percussões", "Técnicas de Transição Suaves", "Marketing focado no Mercado Africano"
        ]
    },
    {
        id: 7,
        titulo: "Estrutura e Arranjo de Hits Comerciais",
        imagem: "https://images.unsplash.com/photo-1516280440614-37939bbacd6a?w=500",
        desbloqueado: true,
        linkMaterial: "https://www.mediafire.com/file/exemplo/Arrangement_Checklist.zip/file",
        modulos: [
            "Anatomia de um Hit de Rádio", "A Importância Crucial da Introdução", "Construção Perfeita de Pontes (Bridges)", 
            "O Impacto Avassalador do Refrão (Hook)", "Transições Inesquecíveis com FX", "Dinâmica de Energia através de Automação", 
            "Arranjo Minimalista vs Arranjo Complexo", "Edição Estrutural Pós-Gravação de Voz", "Como Manter o Ouvinte Preso na Música", "Análise Analítica de Formatos Globais"
        ]
    },
    {
        id: 8,
        titulo: "Dominando a Compressão e Equalização",
        imagem: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=500",
        desbloqueado: true,
        linkMaterial: "https://www.mediafire.com/file/exemplo/EQ_Compression_CheatSheet.zip/file",
        modulos: [
            "O Guia Definitivo do Espetro de Frequências", "Tipos de Equalizadores (Analógico vs Digital)", "EQ Corretivo vs EQ Estético", 
            "Fundamentos do Limiar (Threshold) e Razão (Ratio)", "Ataque e Liberação (Attack/Release) Cirúrgicos", "Compressores VCA, FET, Opto e Vari-Mu", 
            "Compressão Paralela para dar Impacto", "Sidechain Profissional e Separação de Elementos", "Equalização Dinâmica Avançada", "Casamento Perfeito de Kick e Bass"
        ]
    },
    {
        id: 9,
        titulo: "Curso Avançado de Texturas e Ambientação",
        imagem: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=500",
        desbloqueado: false, // 🔒 BLOQUEADO 1
        linkMaterial: "",
        modulos: [
            "O Conceito de Espaço Tridimensional", "Reverbs Convolutivos e Algorítmicos", "Delays Criativos e Efeito Ping-Pong", 
            "Criação de Pads Atmosféricos Complexos", "Uso de Foley e Sons de Campo Orgânicos", "Filtros Modulados e Automatizados", 
            "Micro-Ajustes de Pitch (Detune Estendido)", "Inversão de Áudio (Reverse Textures)", "Sidechain de Ambientes e Reverbs", "Criando Imersão Cinematográfica no Beat"
        ]
    },
    {
        id: 10,
        titulo: "Mentoria VIP: Do Zero ao Topo das Vendas",
        imagem: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=500",
        desbloqueado: false, // 🔒 BLOQUEADO 2
        linkMaterial: "",
        modulos: [
            "Diagnóstico Completo de Portfólio Atual", "Construção de uma Marca Pessoal Forte", "Modelagem de Negócio High-Ticket para Produtores", 
            "Fechamento de Contratos com Gravadoras", "Direção Artística de Projetos Musicais", "Lançamentos Estruturados de Linhas de Produtos", 
            "Sistemas de Automação de Negócio Digital", "Gestão de Tráfego Pago de Alta Conversão", "Parcerias Estratégicas Internacionais", "Plano de Escala e Expansão a Longo Prazo"
        ]
    }
];

// Nomes fixos e sequenciais para as 6 aulas de cada módulo (Garante consistência Premium)
const titulosAulasBase = [
    "Conceito Fundamental e Teoria Aplicada",
    "Configuração Prática no FL Studio",
    "Análise de Frequências e Workflow Crítico",
    "Ajustes Finos e Segredos de Estúdio",
    "Evitando Erros Comuns que Destroem o Som",
    "Desafio Prático do Produtor & Sumário"
];

// MOTOR DE EXPANSÃO DOS CURSOS: Transforma o array simples acima em 10 Módulos com 6 Aulas cada
configuracaoCursos.forEach(config => {
    const cursoFormatado = {
        id: config.id,
        titulo: config.titulo,
        imagem: config.imagem,
        desbloqueado: config.desbloqueado,
        linkMaterial: config.linkMaterial,
        modulos: []
    };

    config.modulos.forEach((nomeModulo, indexMod) => {
        const modulo = {
            nome: `Módulo ${indexMod + 1}: ${nomeModulo}`,
            aulas: []
        };

        // Injeta exatamente 6 aulas profissionais dentro de cada módulo
        for (let a = 1; a <= 6; a++) {
            modulo.aulas.push({
                titulo: `Aula ${indexMod + 1}.${a} - ${titulosAulasBase[a - 1]}`,
                url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" // ℹ️ Deixa o teu link padrão do YouTube aqui!
            });
        }

        cursoFormatado.modulos.push(modulo);
    });

    dadosAluno.cursos.push(cursoFormatado);
});


// =========================================================================
// 3. CONFIGURAÇÃO DOS 10 DRUMKITS (8 Livres / 2 Bloqueados)
// =========================================================================
dadosAluno.drumkits = [
    { id: 101, titulo: "Ultimate Trap Drum Kit V1", imagem: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=500", desbloqueado: true, linkDownload: "https://www.mediafire.com/file/kit1/file" },
    { id: 102, titulo: "808 Massivos & Sub-Graves Extra", imagem: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500", desbloqueado: true, linkDownload: "https://www.mediafire.com/file/kit2/file" },
    { id: 103, titulo: "Drill Essentials Vol.1", imagem: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500", desbloqueado: true, linkDownload: "https://www.mediafire.com/file/kit3/file" },
    { id: 104, titulo: "Afrobeat Vibes Percussion Pack", imagem: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500", desbloqueado: true, linkDownload: "https://www.mediafire.com/file/kit4/file" },
    { id: 105, titulo: "BoomBap Nostalgia Drums", imagem: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=500", desbloqueado: true, linkDownload: "https://www.mediafire.com/file/kit5/file" },
    { id: 106, titulo: "R&B Smooth Beats Elements", imagem: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500", sieht: true, desbloqueado: true, linkDownload: "https://www.mediafire.com/file/kit6/file" },
    { id: 107, titulo: "Reggaeton Platinum Loops", imagem: "https://images.unsplash.com/photo-1516280440614-37939bbacd6a?w=500", desbloqueado: true, linkDownload: "https://www.mediafire.com/file/kit7/file" },
    { id: 108, titulo: "Melodic Trap One-Shots", imagem: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=500", desbloqueado: true, linkDownload: "https://www.mediafire.com/file/kit8/file" },
    { id: 109, titulo: "Cyberpunk Industrial Kit", imagem: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=500", desbloqueado: false, linkDownload: "" }, // 🔒 BLOQUEADO 1
    { id: 110, titulo: "Secret Gold Elite Bundle", imagem: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=500", desbloqueado: false, linkDownload: "" }  // 🔒 BLOQUEADO 2
];


// =========================================================================
// 4. CONFIGURAÇÃO DOS 10 PROJETOS FLP (8 Livres / 2 Bloqueados)
// =========================================================================
dadosAluno.flps = [
    { id: 201, titulo: "FLP Afrobeat Template Pro", imagem: "https://images.unsplash.com/photo-1516280440614-37939bbacd6a?w=500", desbloqueado: true, linkDownload: "https://www.mediafire.com/file/flp1/file" },
    { id: 202, titulo: "FLP Drill Dark Orchestral", imagem: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=500", desbloqueado: true, linkDownload: "https://www.mediafire.com/file/flp2/file" },
    { id: 203, titulo: "FLP Gunna Type Beat Melodic", imagem: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=500", desbloqueado: true, linkDownload: "https://www.mediafire.com/file/flp3/file" },
    { id: 204, titulo: "FLP Travis Scott Synth Wave", imagem: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500", desbloqueado: true, linkDownload: "https://www.mediafire.com/file/flp4/file" },
    { id: 205, titulo: "FLP Amapiano Groove Base", imagem: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500", desbloqueado: true, linkDownload: "https://www.mediafire.com/file/flp5/file" },
    { id: 206, titulo: "FLP Drake Chill Rap Layout", imagem: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500", desbloqueado: true, linkDownload: "https://www.mediafire.com/file/flp6/file" },
    { id: 207, titulo: "FLP Pop Urban Radio Hit", imagem: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=500", desbloqueado: true, linkDownload: "https://www.mediafire.com/file/flp7/file" },
    { id: 208, titulo: "FLP Future Bass Mixed Stems", imagem: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500", desbloqueado: true, linkDownload: "https://www.mediafire.com/file/flp8/file" },
    { id: 209, titulo: "FLP Secret Master Project", imagem: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=500", desbloqueado: false, linkDownload: "" }, // 🔒 BLOQUEADO 1
    { id: 210, titulo: "FLP Grammy Nominated Stem", imagem: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=500", desbloqueado: false, linkDownload: "" }   // 🔒 BLOQUEADO 2
];