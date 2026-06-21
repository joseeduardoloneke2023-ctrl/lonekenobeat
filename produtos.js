
const produtos = [

  {
    id: 1,
    nome: "DRUMKIT 3 FINER",
    categoria: "drumkits artista",
    preco: 500,
    precoAntigo: 2000,
    videoID: "",
    imagem: "img/drumkits artistas/DRUMKIT 3 FINER.jpg",
    headline: "O Swing do Afro Pop Angolano",
    subheadline: "Crie batidas modernas inspiradas na energia de 3 Finer.",
    descricao: "Coleção exclusiva de sons para Afro Pop, Kuduro e Afro House com qualidade profissional.",
    conteudo: [
      "15 Kicks Premium",
      "12 Claps Profissionais",
      "10 Loops Exclusivos",
      "FX de Transição"
    ],
    musicasDemonstracao: ["3 Finer Type Beat"]
  },
  
  {
    id: 2,
    nome: "DRUMKIT ANDERSON MARIO",
    categoria: "drumkits artista",
    preco: 500,
    precoAntigo: 2000,
    videoID: "",
    imagem: "img/drumkits artistas/DRUMKIT ANDERSON MARIO.jpg",
    headline: "Afro Pop Comercial",
    subheadline: "Timbres inspirados nos sucessos de Anderson Mário.",
    descricao: "Drumkit completo para Afro Pop, Kizomba e Zouk moderno.",
    conteudo: [
      "12 Kicks",
      "14 Claps",
      "10 Percussões",
      "FX Premium"
    ],
    musicasDemonstracao: ["Anderson Mario Style"]
  },
  
  {
    id: 3,
    nome: "DRUMKIT ANNA JOYCE",
    categoria: "drumkits artista",
    preco: 500,
    precoAntigo: 2000,
    videoID: "",
    imagem: "img/drumkits artistas/DRUMKIT ANNA JOYCE.jpg",
    headline: "A Elegância da Kizomba",
    subheadline: "Sons suaves e modernos para produções românticas.",
    descricao: "Ideal para Kizomba, Tarraxinha e Afro R&B.",
    conteudo: [
      "10 Soft Kicks",
      "12 Rimshots",
      "15 Loops Kizomba",
      "Pads Atmosféricos"
    ],
    musicasDemonstracao: ["Anna Joyce Type Beat"]
  },
  
  {
    id: 4,
    nome: "DRUMKIT ARIETH FEIJO",
    categoria: "drumkits artista",
    preco: 500,
    precoAntigo: 2000,
    videoID: "",
    imagem: "img/drumkits artistas/DRUMKIT ARIETH FEIJO.jpg",
    headline: "Afro Pop Moderno",
    subheadline: "Percussões inspiradas nos grandes sucessos atuais.",
    descricao: "Pacote profissional com bateria, FX e loops modernos.",
    conteudo: [
      "15 Kicks",
      "15 Claps",
      "10 Loops",
      "FX Exclusivos"
    ],
    musicasDemonstracao: ["Arieth Feijo Style"]
  },
  
  {
    id: 5,
    nome: "FLP PEDRA",
    categoria: "flp",
    preco: 1000,
    precoAntigo: 7000,
    videoID: "",
    imagem: "img/flp/FLP PEDRA.jpg",
    headline: "Projeto Completo para Estudo",
    subheadline: "Aprenda técnicas reais de produção.",
    descricao: "FLP totalmente organizado para análise e aprendizagem.",
    conteudo: [
      "Projeto FL Studio",
      "Mixer Organizado",
      "Automações",
      "Samples Inclusos"
    ],
    musicasDemonstracao: ["Pedra Preview"]
  },
  
  {
    id: 6,
    nome: "FLP PERIGOSA",
    categoria: "flp",
    preco: 1000,
    precoAntigo: 7000,
    videoID: "",
    imagem: "img/flp/FLP PERIGOSA.jpg",
    headline: "Produção Profissional",
    subheadline: "Descubra como estruturar um hit.",
    descricao: "Projeto completo para produtores aprenderem técnicas avançadas.",
    conteudo: [
      "FLP Completo",
      "Mixer Setup",
      "MIDI Organizado",
      "Master Chain"
    ],
    musicasDemonstracao: ["Perigosa Preview"]
  },
  
  {
    id: 7,
    nome: "FLP PESO PESADO",
    categoria: "flp",
    preco: 1000,
    precoAntigo: 7000,
    videoID: "",
    imagem: "img/flp/FLP PESO PESADO.jpg",
    headline: "Graves de Impacto",
    subheadline: "Aprenda a criar instrumentais pesados.",
    descricao: "Projeto profissional focado em energia e presença sonora.",
    conteudo: [
      "Projeto Completo",
      "808 Afinados",
      "Mixer Organizado",
      "Automações"
    ],
    musicasDemonstracao: ["Peso Pesado Preview"]
  },
  
  {
    id: 8,
    nome: "CURSO DE COMO GANHAR NO MINIMO 50.000KZ POR MES DISTRIBUINDO MUSICAS NAS PLATAFORMAS DIGITAIS",
    categoria: "cursos",
    preco: 5000,
    precoAntigo: 15000,
    videoID: "",
    imagem: "img/cursos/CURSO DE COMO GANHAR NO MINIMO 50.000KZ POR MES DISTRIBUINDO MUSICAS NAS PLATAFORMAS DIGITAIS.jpg",
    headline: "Ganhe Dinheiro com Música",
    subheadline: "Aprenda a monetizar lançamentos digitais.",
    descricao: "Curso completo sobre distribuição digital e geração de receitas.",
    conteudo: [
      "Distribuição Digital",
      "Royalties",
      "Spotify",
      "Estratégias de Crescimento"
    ],
    musicasDemonstracao: []
  },
  
  {
    id: 9,
    nome: "CURSO DE COMO BAIXAR E INSTALAR QUALQUER DAW",
    categoria: "cursos",
    preco: 5000,
    precoAntigo: 15000,
    videoID: "",
    imagem: "img/cursos/CURSO DE COMO BAIXAR E INSTALAR QUALQUER DAW.jpg",
    headline: "Instalação Profissional",
    subheadline: "Configure qualquer software de produção.",
    descricao: "Aprenda a instalar e configurar DAWs corretamente.",
    conteudo: [
      "FL Studio",
      "Cubase",
      "Studio One",
      "Configuração Completa"
    ],
    musicasDemonstracao: []
  },
  
  {
    id: 10,
    nome: "CURSO DE COMO BAIXAR E INSTALAR QUALQUER PLUGIN VST E VSTI",
    categoria: "cursos",
    preco: 5000,
    precoAntigo: 15000,
    videoID: "",
    imagem: "img/cursos/CURSO DE COMO BAIXAR E INSTALAR QUALQUER PLUGIN VST E VSTI.jpg",
    headline: "Domine os Plugins",
    subheadline: "Instale qualquer VST sem erros.",
    descricao: "Guia completo para organizar e utilizar plugins profissionais.",
    conteudo: [
      "Instalação VST",
      "Configuração",
      "Bibliotecas",
      "Resolução de Problemas"
    ],
    musicasDemonstracao: []
  },
  
  {
    id: 11,
    nome: "CURSO DE COMO FAZER NO MINIMO 50.000KZ POR MÊS, VENDENDO DRUMKITS E INSTALANDO PLUGINS",
    categoria: "cursos",
    preco: 5000,
    precoAntigo: 15000,
    videoID: "",
    imagem: "img/cursos/CURSO DE COMO FAZER NO MINIMO 50.000KZ POR MÊS, VENDENDO DRUMKITS E INSTALANDO PLUGINS.jpg",
    headline: "Renda Extra com Produção Musical",
    subheadline: "Transforme conhecimento em lucro.",
    descricao: "Métodos práticos para vender serviços e produtos digitais.",
    conteudo: [
      "Venda de Drumkits",
      "Instalação de Plugins",
      "Captação de Clientes",
      "Escala de Negócio"
    ],
    musicasDemonstracao: []
  },
  
  {
    id: 12,
    nome: "FLP PROLONGADO",
    categoria: "flp",
    preco: 1000,
    precoAntigo: 7000,
    videoID: "",
    imagem: "img/flp/FLP PROLONGADO.jpg",
    headline: "Produção Moderna",
    subheadline: "Estude cada etapa da construção musical.",
    descricao: "Projeto FLP completo com mixagem organizada.",
    conteudo: [
      "Projeto Original",
      "Mixer Completo",
      "MIDI",
      "Samples"
    ],
    musicasDemonstracao: ["Prolongado Preview"]
  },
  
  {
    id: 13,
    nome: "FLP SEMBA MORENA",
    categoria: "flp",
    preco: 1000,
    precoAntigo: 7000,
    videoID: "",
    imagem: "img/flp/FLP SEMBA MORENA.jpg",
    headline: "A Essência do Semba",
    subheadline: "Aprenda técnicas tradicionais e modernas.",
    descricao: "Projeto focado em ritmos angolanos autênticos.",
    conteudo: [
      "Projeto FLP",
      "Percussões",
      "Mixer",
      "Automações"
    ],
    musicasDemonstracao: ["Semba Morena Preview"]
  },
  
  {
    id: 14,
    nome: "FLP SÓ TENHO DOIS MIL SERÁ QUE POSSO TE MANDAR",
    categoria: "flp",
    preco: 1000,
    precoAntigo: 7000,
    videoID: "",
    imagem: "img/flp/FLP SÓ TENHO DOIS MIL SERÁ QUE POSSO TE MANDAR.jpg",
    headline: "Hit Viral para Estudo",
    subheadline: "Descubra a estrutura completa do instrumental.",
    descricao: "Projeto pronto para analisar produção, mixagem e arranjo.",
    conteudo: [
      "FLP Completo",
      "Mixer",
      "Samples",
      "Masterização"
    ],
    musicasDemonstracao: ["Dois Mil Preview"]
  },
  
  {
    id: 15,
    nome: "FLP TENHO SIDA",
    categoria: "flp",
    preco: 1000,
    precoAntigo: 7000,
    videoID: "",
    imagem: "img/flp/FLP TENHO SIDA.jpg",
    headline: "Estrutura de Produção Urbana",
    subheadline: "Aprenda técnicas de arranjo modernas.",
    descricao: "Projeto organizado para estudo detalhado.",
    conteudo: [
      "Projeto FLP",
      "Mixer",
      "MIDI",
      "Samples"
    ],
    musicasDemonstracao: ["Tenho Sida Preview"]
  },
  
  {
    id: 16,
    nome: "FLP TODO MAL QUE EU TE FIZ",
    categoria: "flp",
    preco: 1000,
    precoAntigo: 7000,
    videoID: "",
    imagem: "img/flp/FLP TODO MAL QUE EU TE FIZ.jpg",
    headline: "Kizomba Moderna",
    subheadline: "Aprenda a criar emoções através da música.",
    descricao: "Projeto profissional para estudo de harmonia e arranjo.",
    conteudo: [
      "Projeto Completo",
      "Mixer Organizado",
      "MIDI",
      "Samples"
    ],
    musicasDemonstracao: ["Todo Mal Preview"]
  },
  
  {
    id: 17,
    nome: "FLP APANHOU TEC TEC",
    categoria: "flp",
    preco: 1000,
    precoAntigo: 7000,
    videoID: "",
    imagem: "img/flp/FLP APANHOU TEC TEC.jpg",
    headline: "Energia para as Pistas",
    subheadline: "Aprenda técnicas modernas de produção.",
    descricao: "Projeto completo para produtores iniciantes e avançados.",
    conteudo: [
      "FLP",
      "Mixer",
      "Samples",
      "Automações"
    ],
    musicasDemonstracao: ["Tec Tec Preview"]
  },
  
  {
    id: 18,
    nome: "FLP BANANA",
    categoria: "flp",
    preco: 1000,
    precoAntigo: 7000,
    videoID: "",
    imagem: "img/flp/FLP BANANA.jpg",
    headline: "Groove Comercial",
    subheadline: "Estude um instrumental moderno.",
    descricao: "Projeto organizado para acelerar o aprendizado.",
    conteudo: [
      "Projeto FLP",
      "Mixer",
      "MIDI",
      "Samples"
    ],
    musicasDemonstracao: ["Banana Preview"]
  },
  
  {
    id: 19,
    nome: "FLP BAZA SÓ",
    categoria: "flp",
    preco: 1000,
    precoAntigo: 7000,
    videoID: "",
    imagem: "img/flp/FLP BAZA SÓ.jpg",
    headline: "Produção Afro Urbana",
    subheadline: "Descubra técnicas utilizadas por produtores profissionais.",
    descricao: "Projeto completo pronto para estudo.",
    conteudo: [
      "FLP",
      "Mixer",
      "Automações",
      "Samples"
    ],
    musicasDemonstracao: ["Baza Só Preview"]
  },
  
  {
    id: 20,
    nome: "FLP DRENA NA UK",
    categoria: "flp",
    preco: 1000,
    precoAntigo: 7000,
    videoID: "",
    imagem: "img/flp/FLP DRENA NA UK.jpg",
    headline: "Influência Internacional",
    subheadline: "Aprenda a misturar estilos modernos.",
    descricao: "Projeto focado em tendências atuais.",
    conteudo: [
      "Projeto FLP",
      "Mixer",
      "MIDI",
      "Samples"
    ],
    musicasDemonstracao: ["Drena UK Preview"]
  },
  
  {
    id: 21,
    nome: "FLP GUETHO ZOUK PIANO",
    categoria: "flp",
    preco: 1000,
    precoAntigo: 7000,
    videoID: "",
    imagem: "img/flp/FLP GUETHO ZOUK PIANO.jpg",
    headline: "Melodias de Guetho Zouk",
    subheadline: "Aprenda a criar harmonias envolventes.",
    descricao: "Projeto completo para estudo de piano e arranjo.",
    conteudo: [
      "Projeto FLP",
      "Piano MIDI",
      "Mixer",
      "Samples"
    ],
    musicasDemonstracao: ["Guetho Piano Preview"]
  },
  
  {
    id: 22,
    nome: "FLP GUETHO ZOUK RIJO",
    categoria: "flp",
    preco: 1000,
    precoAntigo: 7000,
    videoID: "",
    imagem: "img/flp/FLP GUETHO ZOUK RIJO.jpg",
    headline: "Guetho Zouk de Rua",
    subheadline: "Estude ritmos e percussões modernas.",
    descricao: "Projeto completo para produtores de Guetho Zouk.",
    conteudo: [
      "FLP",
      "Mixer",
      "Percussões",
      "Samples"
    ],
    musicasDemonstracao: ["Guetho Rijo Preview"]
  },
  
  {
    id: 23,
    nome: "CURSO COMPLETO DE PRODUÇÃO DE BEATS DE AFROBEAT MIX E MASTER NO FL STUDIO",
    categoria: "cursos",
    preco: 5000,
    precoAntigo: 15000,
    videoID: "",
    imagem: "img/cursos/CURSO COMPLETO DE PRODUÇÃO DE BEATS DE AFROBEAT MIX E MASTER NO FL STUDIO.jpg",
    headline: "Domine o Afrobeat",
    subheadline: "Da criação à masterização.",
    descricao: "Aprenda todas as etapas da produção de Afrobeat profissional.",
    conteudo: [
      "Criação",
      "Mixagem",
      "Masterização",
      "Projeto Prático"
    ],
    musicasDemonstracao: []
  },
  
  {
    id: 24,
    nome: "CURSO COMPLETO DE PRODUÇÃO DE BEATS DE GUETHO ZOUK DE ANGOLA MIX E MASTER NO FL STUDIO",
    categoria: "cursos",
    preco: 5000,
    precoAntigo: 15000,
    videoID: "",
    imagem: "img/cursos/CURSO COMPLETO DE PRODUÇÃO DE BEATS DE GUETHO ZOUK DE ANGOLA MIX E MASTER NO FL STUDIO.jpg",
    headline: "Especialista em Guetho Zouk",
    subheadline: "Produza ritmos autênticos de Angola.",
    descricao: "Curso completo focado no Guetho Zouk moderno.",
    conteudo: [
      "Percussão",
      "Baixo",
      "Mixagem",
      "Masterização"
    ],
    musicasDemonstracao: []
  },
  
  {
    id: 25,
    nome: "CURSO COMPLETO DE PRODUÇÃO DE BEATS DE SEMBA DE ANGOLA MIX E MASTER NO FL STUDIO",
    categoria: "cursos",
    preco: 5000,
    precoAntigo: 15000,
    videoID: "",
    imagem: "img/cursos/CURSO COMPLETO DE PRODUÇÃO DE BEATS DE SEMBA DE ANGOLA MIX E MASTER NO FL STUDIO.jpg",
    headline: "Domine o Semba",
    subheadline: "Aprenda a criar instrumentais autênticos.",
    descricao: "Curso completo para produção profissional de Semba.",
    conteudo: [
      "Ritmo",
      "Percussão",
      "Mixagem",
      "Masterização"
    ],
    musicasDemonstracao: []
  },
  
  {
    id: 26,
    nome: "FLP I NEED YOU",
    categoria: "flp",
    preco: 1000,
    precoAntigo: 7000,
    videoID: "",
    imagem: "img/flp/FLP I NEED YOU.jpg",
    headline: "Afro Love Vibes",
    subheadline: "Estude melodias e harmonias modernas.",
    descricao: "Projeto completo para aprendizagem profissional.",
    conteudo: [
      "Projeto FLP",
      "Mixer",
      "MIDI",
      "Samples"
    ],
    musicasDemonstracao: ["I Need You Preview"]
  },
  
  {
    id: 27,
    nome: "FLP MINHA EX",
    categoria: "flp",
    preco: 1000,
    precoAntigo: 7000,
    videoID: "",
    imagem: "img/flp/FLP MINHA EX.jpg",
    headline: "Kizomba Comercial",
    subheadline: "Aprenda técnicas utilizadas em hits modernos.",
    descricao: "Projeto organizado para estudo completo.",
    conteudo: [
      "FLP",
      "Mixer",
      "MIDI",
      "Samples"
    ],
    musicasDemonstracao: ["Minha Ex Preview"]
  },
  
  {
    id: 28,
    nome: "FLP MONEY FOLLOW",
    categoria: "flp",
    preco: 1000,
    precoAntigo: 7000,
    videoID: "",
    imagem: "img/flp/FLP MONEY FOLLOW.jpg",
    headline: "Afro Pop Atual",
    subheadline: "Analise a construção de um instrumental moderno.",
    descricao: "Projeto completo pronto para estudo.",
    conteudo: [
      "Projeto FLP",
      "Mixer",
      "Automações",
      "Samples"
    ],
    musicasDemonstracao: ["Money Follow Preview"]
  },
  
  {
    id: 29,
    nome: "FLP NÃO FICA TEIMOSO VAIS SOFRER",
    categoria: "flp",
    preco: 1000,
    precoAntigo: 7000,
    videoID: "",
    imagem: "img/flp/FLP NÃO FICA TEIMOSO VAIS SOFRER.jpg",
    headline: "Produção Completa",
    subheadline: "Aprenda estrutura, ritmo e mixagem.",
    descricao: "Projeto profissional para produtores.",
    conteudo: [
      "FLP",
      "Mixer",
      "Samples",
      "Master"
    ],
    musicasDemonstracao: ["Teimoso Preview"]
  },
  
  {
    id: 30,
    nome: "FLP NÃO TOMARAM BANHO",
    categoria: "flp",
    preco: 1000,
    precoAntigo: 7000,
    videoID: "",
    imagem: "img/flp/FLP NÃO TOMARAM BANHO.jpg",
    headline: "Aprenda Produção Moderna",
    subheadline: "Projeto completo para estudo.",
    descricao: "Analise todas as técnicas utilizadas nesta produção.",
    conteudo: [
      "Projeto FLP",
      "Mixer",
      "MIDI",
      "Samples"
    ],
    musicasDemonstracao: ["Não Tomaram Banho Preview"]
  },
  
  
  {
    id: 31,
    nome: "FLP NOSSO AMOR ESTA CUIAR",
    categoria: "flp",
    preco: 1000,
    precoAntigo: 7000,
    videoID: "",
    imagem: "img/flp/FLP NOSSO AMOR ESTA CUIAR.jpg",
    headline: "Romantismo e Groove Moderno",
    subheadline: "Aprenda a estrutura de uma produção emocional.",
    descricao: "Projeto FLP completo com melodias, bateria, automações e mixagem organizadas para estudo.",
    conteudo: [
      "Projeto FLP Completo",
      "Mixer Organizado",
      "Automações Inclusas",
      "Samples Utilizados"
    ],
    musicasDemonstracao: ["Nosso Amor Está Cuiar Preview"]
  },
  
  {
    id: 32,
    nome: "DRUMKIT TSUNAMI",
    categoria: "drumkits artista",
    preco: 500,
    precoAntigo: 2000,
    videoID: "",
    imagem: "img/drumkits artistas/DRUMKIT TSUNAMI.jpg",
    headline: "Energia Máxima para Afro House",
    subheadline: "Drums inspirados em produções explosivas.",
    descricao: "Coleção de kicks, percussões e efeitos para criar músicas com impacto profissional.",
    conteudo: [
      "15 Kicks Afro House",
      "12 Claps Premium",
      "10 Loops Percussivos",
      "FX Exclusivos"
    ],
    musicasDemonstracao: ["Tsunami Style Beat"]
  },
  
  {
    id: 33,
    nome: "DRUMKIT ASAKE",
    categoria: "drumkits artista",
    preco: 500,
    precoAntigo: 2000,
    videoID: "",
    imagem: "img/drumkits artistas/DRUMKIT ASAKE.jpg",
    headline: "Afrobeat Nigeriano Moderno",
    subheadline: "Os timbres utilizados nas tendências atuais.",
    descricao: "Pacote inspirado na sonoridade única de Asake para Afrobeat e Afro Fusion.",
    conteudo: [
      "12 Afro Kicks",
      "15 Percussões",
      "10 Shakers",
      "FX Modernos"
    ],
    musicasDemonstracao: ["Asake Type Beat"]
  },
  
  {
    id: 34,
    nome: "DRUMKIT AYRA STARR",
    categoria: "drumkits artista",
    preco: 500,
    precoAntigo: 2000,
    videoID: "",
    imagem: "img/drumkits artistas/DRUMKIT AYRA STARR.jpg",
    headline: "Afro Pop Feminino",
    subheadline: "Timbres suaves e modernos.",
    descricao: "Perfeito para Afro Pop, R&B e produções contemporâneas.",
    conteudo: [
      "10 Soft Kicks",
      "12 Claps",
      "15 Percussões",
      "Pads e FX"
    ],
    musicasDemonstracao: ["Ayra Starr Type Beat"]
  },
  
  {
    id: 35,
    nome: "DRUMKIT BADOXA",
    categoria: "drumkits artista",
    preco: 500,
    precoAntigo: 2000,
    videoID: "",
    imagem: "img/drumkits artistas/DRUMKIT BADOXA.jpg",
    headline: "Kizomba Moderna",
    subheadline: "Produza músicas românticas com qualidade profissional.",
    descricao: "Drumkit inspirado na sonoridade característica de Badoxa.",
    conteudo: [
      "10 Kizomba Kicks",
      "12 Rimshots",
      "10 Loops",
      "FX Exclusivos"
    ],
    musicasDemonstracao: ["Badoxa Style"]
  },
  
  {
    id: 36,
    nome: "DRUMKIT BUTTON ROSE",
    categoria: "drumkits artista",
    preco: 500,
    precoAntigo: 2000,
    videoID: "",
    imagem: "img/drumkits artistas/DRUMKIT BUTTON ROSE.jpg",
    headline: "Afro Fusion Criativa",
    subheadline: "Percussões e grooves modernos.",
    descricao: "Pacote completo para criar instrumentais únicos.",
    conteudo: [
      "15 Kicks",
      "15 Claps",
      "10 Loops",
      "FX"
    ],
    musicasDemonstracao: ["Button Rose Style"]
  },
  
  {
    id: 37,
    nome: "DRUMKIT CEF",
    categoria: "drumkits artista",
    preco: 500,
    precoAntigo: 2000,
    videoID: "",
    imagem: "img/drumkits artistas/DRUMKIT CEF.jpg",
    headline: "Trap e Rap Angolano",
    subheadline: "Os sons ideais para beats pesados.",
    descricao: "Inspirado na sonoridade urbana e moderna do rap angolano.",
    conteudo: [
      "808s",
      "Trap Snares",
      "Hi Hats",
      "FX Urbanos"
    ],
    musicasDemonstracao: ["CEF Type Beat"]
  },
  
  {
    id: 38,
    nome: "DRUMKIT CHELSEA DINORATH",
    categoria: "drumkits artista",
    preco: 500,
    precoAntigo: 2000,
    videoID: "",
    imagem: "img/drumkits artistas/DRUMKIT CHELSEA DINORATH.jpg",
    headline: "Afro Pop Internacional",
    subheadline: "Crie músicas modernas e elegantes.",
    descricao: "Coleção de sons inspirados nas produções atuais de Afro Pop.",
    conteudo: [
      "Kicks",
      "Claps",
      "Percussões",
      "FX"
    ],
    musicasDemonstracao: ["Chelsea Dinorath Style"]
  },
  
  {
    id: 39,
    nome: "DRUMKIT CKAY",
    categoria: "drumkits artista",
    preco: 500,
    precoAntigo: 2000,
    videoID: "",
    imagem: "img/drumkits artistas/DRUMKIT CKAY.jpg",
    headline: "Afrobeat Melódico",
    subheadline: "Inspirado nos grandes sucessos internacionais.",
    descricao: "Perfeito para Afrobeat romântico e Afro Fusion.",
    conteudo: [
      "Kicks",
      "Claps",
      "Shakers",
      "FX"
    ],
    musicasDemonstracao: ["CKay Type Beat"]
  },
  
  {
    id: 40,
    nome: "CURSO COMO GANHAR NO MINIMO 50.000KZ POR MÊS CRIANDO ARTES GRAFICA + TRAFEGO PAGO",
    categoria: "cursos",
    preco: 5000,
    precoAntigo: 15000,
    videoID: "",
    imagem: "img/cursos/CURSO COMO GANHAR NO MINIMO 50.000KZ POR MÊS CRIANDO ARTES GRAFICA + TRAFEGO PAGO.jpg",
    headline: "Transforme Design em Renda",
    subheadline: "Aprenda a captar clientes todos os meses.",
    descricao: "Curso focado em design gráfico e anúncios pagos para aumentar as vendas.",
    conteudo: [
      "Design Gráfico",
      "Facebook Ads",
      "Instagram Ads",
      "Captação de Clientes"
    ],
    musicasDemonstracao: []
  },
  
  {
    id: 41,
    nome: "CURSO COMPLETO DE PRODUÇÃO DE BEATS DE AFRO HOUSE KUDURO DE ANGOLA MIX E MASTER NO FL STUDIO",
    categoria: "cursos",
    preco: 5000,
    precoAntigo: 15000,
    videoID: "",
    imagem: "img/cursos/CURSO COMPLETO DE PRODUÇÃO DE BEATS DE AFRO HOUSE KUDURO DE ANGOLA MIX E MASTER NO FL STUDIO.jpg",
    headline: "Domine o Afro House Angolano",
    subheadline: "Da criação à masterização.",
    descricao: "Aprenda técnicas profissionais para criar Afro House e Kuduro modernos.",
    conteudo: [
      "Criação de Beats",
      "Mixagem",
      "Masterização",
      "Projetos Práticos"
    ],
    musicasDemonstracao: []
  },
  
  {
    id: 42,
    nome: "DRUMKIT CLEYTON DAVID",
    categoria: "drumkits artista",
    preco: 500,
    precoAntigo: 2000,
    videoID: "",
    imagem: "img/drumkits artistas/DRUMKIT CLEYTON DAVID.jpg",
    headline: "Afro Pop Comercial",
    subheadline: "Timbres modernos para produções atuais.",
    descricao: "Pacote completo inspirado nas tendências do mercado africano.",
    conteudo: [
      "Kicks",
      "Claps",
      "Percussões",
      "FX"
    ],
    musicasDemonstracao: ["Cleyton David Style"]
  },
  
  {
    id: 43,
    nome: "DRUMKIT CLEYTON M",
    categoria: "drumkits artista",
    preco: 500,
    precoAntigo: 2000,
    videoID: "",
    imagem: "img/drumkits artistas/DRUMKIT CLEYTON M.jpg",
    headline: "Grooves Contagiantes",
    subheadline: "Crie batidas modernas e profissionais.",
    descricao: "Coleção completa de sons inspirados no artista.",
    conteudo: [
      "15 Kicks",
      "10 Claps",
      "Loops",
      "FX"
    ],
    musicasDemonstracao: ["Cleyton M Style"]
  },
  
  {
    id: 44,
    nome: "DRUMKIT DELERO KING",
    categoria: "drumkits artista",
    preco: 500,
    precoAntigo: 2000,
    videoID: "",
    imagem: "img/drumkits artistas/DRUMKIT DELERO KING.jpg",
    headline: "Batidas Poderosas",
    subheadline: "Percussões para produções energéticas.",
    descricao: "Ideal para Afro House e Afro Pop.",
    conteudo: [
      "Kicks",
      "Claps",
      "FX",
      "Loops"
    ],
    musicasDemonstracao: ["Delero King Style"]
  },
  
  {
    id: 45,
    nome: "DRUMKIT DELMA SILVA",
    categoria: "drumkits artista",
    preco: 500,
    precoAntigo: 2000,
    videoID: "",
    imagem: "img/drumkits artistas/DRUMKIT DELMA SILVA.jpg",
    headline: "Elegância Musical",
    subheadline: "Sons suaves e modernos.",
    descricao: "Perfeito para Afro Pop e Kizomba.",
    conteudo: [
      "Kicks",
      "Claps",
      "Shakers",
      "FX"
    ],
    musicasDemonstracao: ["Delma Silva Style"]
  },
  
  {
    id: 46,
    nome: "DRUMKIT DJ AKA M",
    categoria: "drumkits artista",
    preco: 500,
    precoAntigo: 2000,
    videoID: "",
    imagem: "img/drumkits artistas/DRUMKIT DJ AKA M.jpg",
    headline: "Afro House de Pista",
    subheadline: "Crie músicas para festivais e clubes.",
    descricao: "Pacote completo para produtores exigentes.",
    conteudo: [
      "Kicks",
      "Percussões",
      "FX",
      "Loops"
    ],
    musicasDemonstracao: ["DJ Aka M Style"]
  },
  
  {
    id: 47,
    nome: "DRUMKIT DJ MALVADO",
    categoria: "drumkits artista",
    preco: 500,
    precoAntigo: 2000,
    videoID: "",
    imagem: "img/drumkits artistas/DRUMKIT DJ MALVADO.jpg",
    headline: "Kuduro de Alta Energia",
    subheadline: "Sons inspirados nos clássicos do género.",
    descricao: "Ideal para produções agressivas e dançantes.",
    conteudo: [
      "Kicks",
      "Snares",
      "Percussões",
      "FX"
    ],
    musicasDemonstracao: ["DJ Malvado Style"]
  },
  
  {
    id: 48,
    nome: "DRUMKIT DJ NELASTA",
    categoria: "drumkits artista",
    preco: 500,
    precoAntigo: 2000,
    videoID: "",
    imagem: "img/drumkits artistas/DRUMKIT DJ NELASTA.jpg",
    headline: "Afro House Profissional",
    subheadline: "Os sons usados nas pistas africanas.",
    descricao: "Coleção completa para produção moderna.",
    conteudo: [
      "Kicks",
      "Claps",
      "FX",
      "Loops"
    ],
    musicasDemonstracao: ["DJ Nelasta Style"]
  },
  
  {
    id: 49,
    nome: "DRUMKIT DJODJE",
    categoria: "drumkits artista",
    preco: 500,
    precoAntigo: 2000,
    videoID: "",
    imagem: "img/drumkits artistas/DRUMKIT DJODJE.jpg",
    headline: "Kizomba e Zouk Moderno",
    subheadline: "Timbres elegantes e profissionais.",
    descricao: "Inspirado na sonoridade de Cabo Verde.",
    conteudo: [
      "Kicks",
      "Percussões",
      "FX",
      "Loops"
    ],
    musicasDemonstracao: ["Djodje Style"]
  },
  
  {
    id: 50,
    nome: "DRUMKIT DODDY",
    categoria: "drumkits artista",
    preco: 500,
    precoAntigo: 2000,
    videoID: "",
    imagem: "img/drumkits artistas/DRUMKIT DODDY.jpg",
    headline: "Afro Pop Atual",
    subheadline: "Tudo para criar hits modernos.",
    descricao: "Pacote completo para produção musical profissional.",
    conteudo: [
      "Kicks",
      "Claps",
      "FX",
      "Loops"
    ],
    musicasDemonstracao: ["Doddy Style"]
  },
  
  {
    id: 51,
    nome: "TABUA MISTA REGGAE",
    categoria: "drumkits estilo",
    preco: 500,
    precoAntigo: 2000,
    videoID: "",
    imagem: "img/drumkits estilos/TABUA MISTA/TABUA MISTA REGGAE.jpg",
    headline: "O Groove Clássico do Reggae",
    subheadline: "Percussões autênticas e relaxadas.",
    descricao: "Drumkit ideal para criar músicas Reggae e Dub.",
    conteudo: [
      "Reggae Kicks",
      "Rimshots",
      "Percussões",
      "FX"
    ],
    musicasDemonstracao: ["Reggae Demo"]
  },
  
  {
    id: 52,
    nome: "TABUA MISTA REGGAETON",
    categoria: "drumkits estilo",
    preco: 500,
    precoAntigo: 2000,
    videoID: "",
    imagem: "img/drumkits estilos/TABUA MISTA/TABUA MISTA REGGAETON.jpg",
    headline: "O Ritmo Latino Atual",
    subheadline: "Tudo para produzir Reggaeton.",
    descricao: "Pacote completo inspirado nas tendências latinas.",
    conteudo: [
      "Kicks",
      "Claps",
      "Percussões",
      "Loops"
    ],
    musicasDemonstracao: ["Reggaeton Demo"]
  },
  
  {
    id: 53,
    nome: "TABUA MISTA SEBENE",
    categoria: "drumkits estilo",
    preco: 500,
    precoAntigo: 2000,
    videoID: "",
    imagem: "img/drumkits estilos/TABUA MISTA/TABUA MISTA SEBENE.jpg",
    headline: "A Energia do Sebene",
    subheadline: "Grooves africanos tradicionais.",
    descricao: "Coleção especializada para ritmos congoleses.",
    conteudo: [
      "Kicks",
      "Percussões",
      "Loops",
      "FX"
    ],
    musicasDemonstracao: ["Sebene Demo"]
  },
  
  {
    id: 54,
    nome: "TABUA MISTA SEMBA",
    categoria: "drumkits estilo",
    preco: 500,
    precoAntigo: 2000,
    videoID: "",
    imagem: "img/drumkits estilos/TABUA MISTA/TABUA MISTA SEMBA.jpg",
    headline: "O Verdadeiro Semba",
    subheadline: "Percussões tradicionais de Angola.",
    descricao: "Drumkit completo para produções de Semba.",
    conteudo: [
      "Kicks",
      "Percussões",
      "Loops",
      "FX"
    ],
    musicasDemonstracao: ["Semba Demo"]
  },
  
  {
    id: 55,
    nome: "MIDI E LOOPS PACK VOL. 7",
    categoria: "midis",
    preco: 1000,
    precoAntigo: 4000,
    videoID: "",
    imagem: "img/midi e loops/MIDI E LOOPS  (7).jpg",
    headline: "Inspiração Instantânea",
    subheadline: "Progressões e loops profissionais.",
    descricao: "Coleção de MIDI e loops compatível com qualquer DAW.",
    conteudo: [
      "20 MIDIs",
      "15 Loops",
      "Progressões",
      "Basslines"
    ],
    musicasDemonstracao: []
  },
  
  {
    id: 56,
    nome: "MIDI E LOOPS PACK VOL. 8",
    categoria: "midis",
    preco: 1000,
    precoAntigo: 4000,
    videoID: "",
    imagem: "img/midi e loops/MIDI E LOOPS  (8).jpg",
    headline: "Criatividade Sem Limites",
    subheadline: "Loops e harmonias prontas.",
    descricao: "Ideal para acelerar a produção musical.",
    conteudo: [
      "MIDIs",
      "Loops",
      "Basslines",
      "Chords"
    ],
    musicasDemonstracao: []
  },
  
  {
    id: 57,
    nome: "MIDI E LOOPS PACK VOL. 9",
    categoria: "midis",
    preco: 1000,
    precoAntigo: 4000,
    videoID: "",
    imagem: "img/midi e loops/MIDI E LOOPS  (9).jpg",
    headline: "Ferramentas para Produtores",
    subheadline: "Melhore a velocidade do seu workflow.",
    descricao: "Pacote profissional para criação musical.",
    conteudo: [
      "MIDIs",
      "Loops",
      "Basslines",
      "Chords"
    ],
    musicasDemonstracao: []
  },
  
  {
    id: 58,
    nome: "MIDI E LOOPS PACK VOL. 10",
    categoria: "midis",
    preco: 1000,
    precoAntigo: 4000,
    videoID: "",
    imagem: "img/midi e loops/MIDI E LOOPS  (10).jpg",
    headline: "Produza Mais Rápido",
    subheadline: "Ideias prontas para qualquer género.",
    descricao: "Coleção profissional de MIDI e loops.",
    conteudo: [
      "MIDIs",
      "Loops",
      "Basslines",
      "Chords"
    ],
    musicasDemonstracao: []
  },
  
  {
    id: 59,
    nome: "MIDI E LOOPS PACK VOL. 11",
    categoria: "midis",
    preco: 1000,
    precoAntigo: 4000,
    videoID: "",
    imagem: "img/midi e loops/MIDI E LOOPS  (11).jpg",
    headline: "Biblioteca Criativa",
    subheadline: "Acelere qualquer produção.",
    descricao: "Pack completo para produtores iniciantes e avançados.",
    conteudo: [
      "MIDIs",
      "Loops",
      "Basslines",
      "Chords"
    ],
    musicasDemonstracao: []
  },
  
  {
    id: 60,
    nome: "MIDI E LOOPS PACK VOL. 1",
    categoria: "midis",
    preco: 1000,
    precoAntigo: 4000,
    videoID: "",
    imagem: "img/midi e loops/MIDI E LOOPS  (1).jpg",
    headline: "Coleção Essencial",
    subheadline: "Comece a criar imediatamente.",
    descricao: "Biblioteca inicial com os melhores MIDIs e loops.",
    conteudo: [
      "MIDIs",
      "Loops",
      "Basslines",
      "Progressões"
    ],
    musicasDemonstracao: []
  },
  
  {
    id: 61,
    nome: "TABUA MISTA TRAP",
    categoria: "drumkits estilo",
    preco: 500,
    precoAntigo: 2000,
    videoID: "",
    imagem: "img/drumkits estilos/TABUA MISTA/TABUA MISTA TRAP.jpg",
    headline: "Trap Moderno e Profissional",
    subheadline: "808s pesados e baterias impactantes.",
    descricao: "Coleção completa para criar beats de Trap modernos com qualidade comercial.",
    conteudo: [
      "808s Afinados",
      "Trap Snares",
      "Hi-Hats Rolls",
      "FX de Transição"
    ],
    musicasDemonstracao: ["Trap Demo"]
  },
  
  {
    id: 62,
    nome: "TABUA MISTA AFRO HOUSE",
    categoria: "drumkits estilo",
    preco: 500,
    precoAntigo: 2000,
    videoID: "",
    imagem: "img/drumkits estilos/TABUA MISTA/TABUA MISTA AFRO HOUSE.jpg",
    headline: "O Balanço das Pistas Africanas",
    subheadline: "Percussões profundas e grooves envolventes.",
    descricao: "Drumkit ideal para Afro House moderno e profissional.",
    conteudo: [
      "Afro Kicks",
      "Congas",
      "Percussões",
      "FX"
    ],
    musicasDemonstracao: ["Afro House Demo"]
  },
  
  {
    id: 63,
    nome: "DRUMKIT DREAM BOYZ",
    categoria: "drumkits artista",
    preco: 500,
    precoAntigo: 2000,
    videoID: "",
    imagem: "img/drumkits artistas/DRUMKIT DREAM BOYZ.jpg",
    headline: "Afro Pop Comercial",
    subheadline: "Sons inspirados nas tendências atuais.",
    descricao: "Pacote completo para criar músicas modernas e radiofónicas.",
    conteudo: [
      "15 Kicks",
      "12 Claps",
      "Loops",
      "FX"
    ],
    musicasDemonstracao: ["Dream Boyz Style"]
  },
  
  {
    id: 64,
    nome: "DRUMKIT EDMAZIA",
    categoria: "drumkits artista",
    preco: 500,
    precoAntigo: 2000,
    videoID: "",
    imagem: "img/drumkits artistas/DRUMKIT EDMAZIA.jpg",
    headline: "Grooves Modernos",
    subheadline: "Timbres inspirados no Afro Pop atual.",
    descricao: "Ideal para produtores que procuram sonoridades modernas.",
    conteudo: [
      "Kicks",
      "Claps",
      "Percussões",
      "FX"
    ],
    musicasDemonstracao: ["Edmazia Style"]
  },
  
  {
    id: 65,
    nome: "DRUMKIT FABIO HUSTLE",
    categoria: "drumkits artista",
    preco: 500,
    precoAntigo: 2000,
    videoID: "",
    imagem: "img/drumkits artistas/DRUMKIT FABIO HUSTLE.jpg",
    headline: "Batidas Urbanas",
    subheadline: "A sonoridade das ruas em suas produções.",
    descricao: "Coleção criada para Afro Trap e Hip Hop moderno.",
    conteudo: [
      "808s",
      "Snares",
      "Hi-Hats",
      "FX"
    ],
    musicasDemonstracao: ["Fabio Hustle Style"]
  },
  
  {
    id: 66,
    nome: "DRUMKIT GANAH BOYZ",
    categoria: "drumkits artista",
    preco: 500,
    precoAntigo: 2000,
    videoID: "",
    imagem: "img/drumkits artistas/DRUMKIT GANAH BOYZ.jpg",
    headline: "Afro House de Energia",
    subheadline: "Tudo para criar músicas dançantes.",
    descricao: "Drumkit completo inspirado nos ritmos africanos modernos.",
    conteudo: [
      "Kicks",
      "Percussões",
      "Loops",
      "FX"
    ],
    musicasDemonstracao: ["Ganah Boyz Style"]
  },
  
  {
    id: 67,
    nome: "DRUMKIT GERILSON INSRAEL",
    categoria: "drumkits artista",
    preco: 500,
    precoAntigo: 2000,
    videoID: "",
    imagem: "img/drumkits artistas/DRUMKIT GERILSON INSRAEL.jpg",
    headline: "Afro Love e Kizomba",
    subheadline: "Timbres inspirados nos grandes sucessos românticos.",
    descricao: "Ideal para Afro Pop, Kizomba e R&B africano.",
    conteudo: [
      "Soft Kicks",
      "Claps",
      "Shakers",
      "Pads"
    ],
    musicasDemonstracao: ["Gerilson Type Beat"]
  },
  
  {
    id: 68,
    nome: "DRUMKIT HALISON PAIXO",
    categoria: "drumkits artista",
    preco: 500,
    precoAntigo: 2000,
    videoID: "",
    imagem: "img/drumkits artistas/DRUMKIT HALISON PAIXO.jpg",
    headline: "Afro Pop Atual",
    subheadline: "Percussões e grooves profissionais.",
    descricao: "Pacote desenvolvido para produções modernas.",
    conteudo: [
      "Kicks",
      "Claps",
      "FX",
      "Loops"
    ],
    musicasDemonstracao: ["Halison Paixo Style"]
  },
  
  {
    id: 69,
    nome: "DRUMKIT IVANDRO",
    categoria: "drumkits artista",
    preco: 500,
    precoAntigo: 2000,
    videoID: "",
    imagem: "img/drumkits artistas/DRUMKIT IVANDRO.jpg",
    headline: "Afro R&B Profissional",
    subheadline: "Sons suaves e elegantes.",
    descricao: "Ideal para Afro R&B, Pop e Kizomba moderna.",
    conteudo: [
      "Soft Drums",
      "Claps",
      "Percussões",
      "FX"
    ],
    musicasDemonstracao: ["Ivandro Style"]
  },
  
  {
    id: 70,
    nome: "DRUMKIT J LEVY",
    categoria: "drumkits artista",
    preco: 500,
    precoAntigo: 2000,
    videoID: "",
    imagem: "img/drumkits artistas/DRUMKIT J LEVY.jpg",
    headline: "Produções Comerciais",
    subheadline: "Timbres modernos para hits atuais.",
    descricao: "Coleção profissional para produtores criativos.",
    conteudo: [
      "Kicks",
      "Claps",
      "Loops",
      "FX"
    ],
    musicasDemonstracao: ["J Levy Style"]
  },
  
  {
    id: 71,
    nome: "DRUMKIT JOHN TROUBLE",
    categoria: "drumkits artista",
    preco: 500,
    precoAntigo: 2000,
    videoID: "",
    imagem: "img/drumkits artistas/DRUMKIT JOHN TROUBLE.jpg",
    headline: "Batidas com Personalidade",
    subheadline: "Sons fortes e modernos.",
    descricao: "Ideal para Afro Pop e ritmos urbanos.",
    conteudo: [
      "Kicks",
      "Claps",
      "808s",
      "FX"
    ],
    musicasDemonstracao: ["John Trouble Style"]
  },
  
  {
    id: 72,
    nome: "DRUMKIT JOJO GOUVEIA",
    categoria: "drumkits artista",
    preco: 500,
    precoAntigo: 2000,
    videoID: "",
    imagem: "img/drumkits artistas/DRUMKIT JOJO GOUVEIA.jpg",
    headline: "Afro Fusion Criativo",
    subheadline: "Misture estilos com facilidade.",
    descricao: "Pacote completo para produções contemporâneas.",
    conteudo: [
      "Kicks",
      "Percussões",
      "FX",
      "Loops"
    ],
    musicasDemonstracao: ["Jojo Gouveia Style"]
  },
  
  {
    id: 73,
    nome: "DRUMKIT KYAKU KYADAFF",
    categoria: "drumkits artista",
    preco: 500,
    precoAntigo: 2000,
    videoID: "",
    imagem: "img/drumkits artistas/DRUMKIT KYAKU KYADAFF.jpg",
    headline: "O Som da Kizomba Moderna",
    subheadline: "Percussões e grooves românticos.",
    descricao: "Coleção inspirada na sonoridade característica do artista.",
    conteudo: [
      "Kicks",
      "Claps",
      "Shakers",
      "Pads"
    ],
    musicasDemonstracao: ["Kyaku Kyadaff Style"]
  },
  
  {
    id: 74,
    nome: "DRUMKIT LANDRICK",
    categoria: "drumkits artista",
    preco: 500,
    precoAntigo: 2000,
    videoID: "",
    imagem: "img/drumkits artistas/DRUMKIT LANDRICK.jpg",
    headline: "Afro Pop Premium",
    subheadline: "Sons inspirados em grandes produções.",
    descricao: "Drumkit criado para músicas modernas e profissionais.",
    conteudo: [
      "Kicks",
      "Claps",
      "Loops",
      "FX"
    ],
    musicasDemonstracao: ["Landrick Style"]
  },
  
  {
    id: 75,
    nome: "DRUMKIT LIL MAGRO",
    categoria: "drumkits artista",
    preco: 500,
    precoAntigo: 2000,
    videoID: "",
    imagem: "img/drumkits artistas/DRUMKIT LIL MAGRO.jpg",
    headline: "Trap Angolano",
    subheadline: "808s e baterias modernas.",
    descricao: "Ideal para Afro Trap, Drill e Hip Hop.",
    conteudo: [
      "808s",
      "Trap Snares",
      "Hi Hats",
      "FX"
    ],
    musicasDemonstracao: ["Lil Magro Type Beat"]
  },
  
  {
    id: 76,
    nome: "DRUMKIT CU DOCE DE DRILL",
    categoria: "drumkits estilo",
    preco: 500,
    precoAntigo: 2000,
    videoID: "",
    imagem: "img/drumkits estilos/cu doce/DRUMKIT CU DOCE DE DRILL.jpg",
    headline: "Drill Pesado",
    subheadline: "808s agressivos e atmosferas escuras.",
    descricao: "Tudo para produzir Drill moderno.",
    conteudo: [
      "808s",
      "Snares",
      "Hi Hats",
      "FX"
    ],
    musicasDemonstracao: ["Drill Demo"]
  },
  
  {
    id: 77,
    nome: "DRUMKIT CU DOCE DE GUETHO ZOUK",
    categoria: "drumkits estilo",
    preco: 500,
    precoAntigo: 2000,
    videoID: "",
    imagem: "img/drumkits estilos/cu doce/DRUMKIT CU DOCE DE GUETHO ZOUK.jpg",
    headline: "Guetho Zouk Atual",
    subheadline: "Percussões urbanas e dançantes.",
    descricao: "Pacote completo para produtores de Guetho Zouk.",
    conteudo: [
      "Kicks",
      "Percussões",
      "Loops",
      "FX"
    ],
    musicasDemonstracao: ["Guetho Zouk Demo"]
  },
  
  {
    id: 78,
    nome: "DRUMKIT CU DOCE DE KIZOMBA",
    categoria: "drumkits estilo",
    preco: 500,
    precoAntigo: 2000,
    videoID: "",
    imagem: "img/drumkits estilos/cu doce/DRUMKIT CU DOCE DE KIZOMBA.jpg",
    headline: "Kizomba Profissional",
    subheadline: "Os timbres ideais para músicas românticas.",
    descricao: "Drumkit especializado em Kizomba moderna.",
    conteudo: [
      "Soft Kicks",
      "Shakers",
      "Claps",
      "Pads"
    ],
    musicasDemonstracao: ["Kizomba Demo"]
  },
  
  {
    id: 79,
    nome: "DRUMKIT CU DOCE DE TRAP",
    categoria: "drumkits estilo",
    preco: 500,
    precoAntigo: 2000,
    videoID: "",
    imagem: "img/drumkits estilos/cu doce/DRUMKIT CU DOCE DE TRAP.jpg",
    headline: "Trap Comercial",
    subheadline: "Tudo para criar beats modernos.",
    descricao: "Coleção profissional de sons para Trap.",
    conteudo: [
      "808s",
      "Snares",
      "Hi Hats",
      "FX"
    ],
    musicasDemonstracao: ["Trap Demo"]
  },
  
  {
    id: 80,
    nome: "DRUMKIT CU DOCE KUDURO MELODICO",
    categoria: "drumkits estilo",
    preco: 500,
    precoAntigo: 2000,
    videoID: "",
    imagem: "img/drumkits estilos/cu doce/DRUMKIT CU DOCE KUDURO MELODICO.jpg",
    headline: "Kuduro Melódico",
    subheadline: "A energia dos ritmos angolanos.",
    descricao: "Pacote especializado para Kuduro moderno.",
    conteudo: [
      "Kicks",
      "Percussões",
      "Loops",
      "FX"
    ],
    musicasDemonstracao: ["Kuduro Demo"]
  },
  
  {
    id: 81,
    nome: "DRUMKIT CU DOCE TRAP",
    categoria: "drumkits estilo",
    preco: 500,
    precoAntigo: 2000,
    videoID: "",
    imagem: "img/drumkits estilos/cu doce/DRUMKIT CU DOCE TRAP.jpg",
    headline: "Trap Urbano",
    subheadline: "Baterias pesadas e modernas.",
    descricao: "Ideal para Trap e Afro Trap.",
    conteudo: [
      "808s",
      "Snares",
      "Hi Hats",
      "FX"
    ],
    musicasDemonstracao: ["Trap Style"]
  },
  
  {
    id: 82,
    nome: "DRUMKIT LIRIANY",
    categoria: "drumkits artista",
    preco: 500,
    precoAntigo: 2000,
    videoID: "",
    imagem: "img/drumkits artistas/DRUMKIT LIRIANY.jpg",
    headline: "Afro Pop Feminino",
    subheadline: "Timbres modernos e elegantes.",
    descricao: "Coleção profissional para Afro Pop e R&B.",
    conteudo: [
      "Kicks",
      "Claps",
      "Percussões",
      "FX"
    ],
    musicasDemonstracao: ["Liriany Style"]
  },
  
  {
    id: 83,
    nome: "DRUMKIT LISANDRO CUXI",
    categoria: "drumkits artista",
    preco: 500,
    precoAntigo: 2000,
    videoID: "",
    imagem: "img/drumkits artistas/DRUMKIT LISANDRO CUXI.jpg",
    headline: "R&B e Afro Soul",
    subheadline: "Sons inspirados em produções internacionais.",
    descricao: "Ideal para músicas suaves e modernas.",
    conteudo: [
      "Soft Drums",
      "Claps",
      "Pads",
      "FX"
    ],
    musicasDemonstracao: ["Lisandro Cuxi Style"]
  },
  
  {
    id: 84,
    nome: "DRUMKIT LURHANY",
    categoria: "drumkits artista",
    preco: 500,
    precoAntigo: 2000,
    videoID: "",
    imagem: "img/drumkits artistas/DRUMKIT LURHANY.jpg",
    headline: "Afro Pop Atual",
    subheadline: "Percussões modernas e criativas.",
    descricao: "Pacote completo para produtores exigentes.",
    conteudo: [
      "Kicks",
      "Loops",
      "FX",
      "Claps"
    ],
    musicasDemonstracao: ["Lurhany Style"]
  },
  
  {
    id: 85,
    nome: "DRUMKIT MANO CHABA",
    categoria: "drumkits artista",
    preco: 500,
    precoAntigo: 2000,
    videoID: "",
    imagem: "img/drumkits artistas/DRUMKIT MANO CHABA.jpg",
    headline: "Batidas Urbanas",
    subheadline: "Produza com personalidade.",
    descricao: "Coleção completa inspirada no artista.",
    conteudo: [
      "Kicks",
      "808s",
      "FX",
      "Loops"
    ],
    musicasDemonstracao: ["Mano Chaba Style"]
  },
  
  {
    id: 86,
    nome: "DRUMKIT MEYSON",
    categoria: "drumkits artista",
    preco: 500,
    precoAntigo: 2000,
    videoID: "",
    imagem: "img/drumkits artistas/DRUMKIT MEYSON.jpg",
    headline: "Rap e Trap Angolano",
    subheadline: "Sons pesados para produções urbanas.",
    descricao: "Ideal para Trap, Rap e Afro Trap.",
    conteudo: [
      "808s",
      "Snares",
      "Hi Hats",
      "FX"
    ],
    musicasDemonstracao: ["Meyson Type Beat"]
  },
  
  {
    id: 87,
    nome: "PACK DE PLUGINS ESSENTIAL PRODUCER VOL. 3",
    categoria: "packs de plugins",
    preco: 1500,
    precoAntigo: 6000,
    videoID: "",
    imagem: "img/packs de plugins/PACKS DE PLUGINS (3).jpg",
    headline: "Ferramentas para Produção Profissional",
    subheadline: "Plugins essenciais para qualquer produtor.",
    descricao: "Coleção de plugins para criação, mixagem e masterização.",
    conteudo: [
      "VSTs",
      "Instrumentos",
      "Efeitos",
      "Presets"
    ],
    musicasDemonstracao: []
  },
  
  {
    id: 88,
    nome: "PACK DE PLUGINS ESSENTIAL PRODUCER VOL. 4",
    categoria: "packs de plugins",
    preco: 1500,
    precoAntigo: 6000,
    videoID: "",
    imagem: "img/packs de plugins/PACKS DE PLUGINS (4).jpg",
    headline: "Mais Ferramentas Criativas",
    subheadline: "Expanda sua biblioteca de plugins.",
    descricao: "Pacote focado em criatividade e produtividade.",
    conteudo: [
      "Plugins",
      "Presets",
      "Instrumentos",
      "FX"
    ],
    musicasDemonstracao: []
  },
  
  {
    id: 89,
    nome: "PACK DE PLUGINS ESSENTIAL PRODUCER VOL. 5",
    categoria: "packs de plugins",
    preco: 1500,
    precoAntigo: 6000,
    videoID: "",
    imagem: "img/packs de plugins/PACKS DE PLUGINS (5).jpg",
    headline: "Produção Sem Limites",
    subheadline: "Tudo o que precisa para criar.",
    descricao: "Coleção avançada de plugins para produtores.",
    conteudo: [
      "VSTs",
      "Instrumentos",
      "FX",
      "Presets"
    ],
    musicasDemonstracao: []
  },
  
  {
    id: 90,
    nome: "MIDI E LOOPS PACK VOL. 5",
    categoria: "midis",
    preco: 1000,
    precoAntigo: 4000,
    videoID: "",
    imagem: "img/midi e loops/MIDI E LOOPS  (5).jpg",
    headline: "Novas Ideias em Segundos",
    subheadline: "MIDIs e loops prontos para usar.",
    descricao: "Biblioteca criada para acelerar a criação musical.",
    conteudo: [
      "20 MIDIs",
      "15 Loops",
      "Basslines",
      "Progressões"
    ],
    musicasDemonstracao: []
  },


{
  id: 91,
  nome: "MIDI E LOOPS PACK VOL. 6",
  categoria: "midis",
  preco: 1000,
  precoAntigo: 4000,
  videoID: "",
  imagem: "img/midi e loops/MIDI E LOOPS  (6).jpg",
  headline: "Melodias Prontas para Produzir",
  subheadline: "Acelere sua criatividade com loops profissionais.",
  descricao: "Biblioteca completa de MIDI e loops para Afrobeat, Kizomba, Trap e Afro House.",
  conteudo: [
    "20 MIDIs",
    "15 Loops",
    "Basslines",
    "Progressões Harmónicas"
  ],
  musicasDemonstracao: []
},

{
  id: 92,
  nome: "PACK DE PLUGINS ESSENTIAL PRODUCER VOL. 6",
  categoria: "packs de plugins",
  preco: 1500,
  precoAntigo: 6000,
  videoID: "",
  imagem: "img/packs de plugins/PACKS DE PLUGINS (6).jpg",
  headline: "Biblioteca Avançada de Plugins",
  subheadline: "Ferramentas modernas para produção profissional.",
  descricao: "Pacote completo de plugins para composição, mixagem e masterização.",
  conteudo: [
    "Plugins VST",
    "Instrumentos Virtuais",
    "FX Premium",
    "Presets"
  ],
  musicasDemonstracao: []
},

{
  id: 93,
  nome: "PACK DE PLUGINS ESSENTIAL PRODUCER VOL. 7",
  categoria: "packs de plugins",
  preco: 1500,
  precoAntigo: 6000,
  videoID: "",
  imagem: "img/packs de plugins/PACKS DE PLUGINS (7).jpg",
  headline: "Expanda Seu Arsenal Criativo",
  subheadline: "Plugins para qualquer estilo musical.",
  descricao: "Coleção selecionada para aumentar sua produtividade.",
  conteudo: [
    "VSTs",
    "Instrumentos",
    "Efeitos",
    "Presets"
  ],
  musicasDemonstracao: []
},

{
  id: 94,
  nome: "PACK DE PLUGINS ESSENTIAL PRODUCER VOL. 8",
  categoria: "packs de plugins",
  preco: 1500,
  precoAntigo: 6000,
  videoID: "",
  imagem: "img/packs de plugins/PACKS DE PLUGINS (8).jpg",
  headline: "Produção Profissional",
  subheadline: "Tudo para criar músicas de alto nível.",
  descricao: "Pacote ideal para produtores iniciantes e avançados.",
  conteudo: [
    "Plugins",
    "FX",
    "Instrumentos",
    "Presets"
  ],
  musicasDemonstracao: []
},

{
  id: 95,
  nome: "DRUMKIT OMAH LAY",
  categoria: "drumkits artista",
  preco: 500,
  precoAntigo: 2000,
  videoID: "",
  imagem: "img/drumkits artistas/DRUMKIT OMAH LAY.jpg",
  headline: "Afro Fusion Internacional",
  subheadline: "Os timbres dos grandes sucessos africanos.",
  descricao: "Drumkit inspirado na estética moderna do Afro Fusion.",
  conteudo: [
    "Kicks",
    "Claps",
    "Shakers",
    "FX"
  ],
  musicasDemonstracao: ["Omah Lay Type Beat"]
},

{
  id: 96,
  nome: "DRUMKIT PALMIRA DE CARVALHO",
  categoria: "drumkits artista",
  preco: 500,
  precoAntigo: 2000,
  videoID: "",
  imagem: "img/drumkits artistas/DRUMKIT PALMIRA DE CARVALHO.jpg",
  headline: "A Tradição da Música Angolana",
  subheadline: "Sons inspirados nos clássicos nacionais.",
  descricao: "Ideal para Semba, Kizomba e ritmos tradicionais.",
  conteudo: [
    "Percussões",
    "Kicks",
    "Loops",
    "FX"
  ],
  musicasDemonstracao: ["Palmira Style"]
},

{
  id: 97,
  nome: "DRUMKIT PAULELSON",
  categoria: "drumkits artista",
  preco: 500,
  precoAntigo: 2000,
  videoID: "",
  imagem: "img/drumkits artistas/DRUMKIT PAULELSON.jpg",
  headline: "Trap e Rap Moderno",
  subheadline: "808s pesados e baterias agressivas.",
  descricao: "Coleção inspirada no Trap lusófono contemporâneo.",
  conteudo: [
    "808s",
    "Snares",
    "Hi Hats",
    "FX"
  ],
  musicasDemonstracao: ["Paulelson Type Beat"]
},

{
  id: 98,
  nome: "DRUMKIT RUI ORLANDO",
  categoria: "drumkits artista",
  preco: 500,
  precoAntigo: 2000,
  videoID: "",
  imagem: "img/drumkits artistas/DRUMKIT RUI ORLANDO.jpg",
  headline: "Kizomba e Afro Love",
  subheadline: "Crie músicas românticas e modernas.",
  descricao: "Pacote profissional para Afro Pop e Kizomba.",
  conteudo: [
    "Soft Kicks",
    "Claps",
    "Pads",
    "FX"
  ],
  musicasDemonstracao: ["Rui Orlando Style"]
},

{
  id: 99,
  nome: "DRUMKIT FARIENTO DE DRILL",
  categoria: "drumkits estilo",
  preco: 500,
  precoAntigo: 2000,
  videoID: "",
  imagem: "img/drumkits estilos/fariento/DRUMKIT FARIENTO DE DRILL.jpg",
  headline: "Drill de Nova Geração",
  subheadline: "808s escuros e atmosferas pesadas.",
  descricao: "Tudo para criar Drill moderno com qualidade profissional.",
  conteudo: [
    "808s",
    "Snares",
    "Hi Hats",
    "FX"
  ],
  musicasDemonstracao: ["Fariento Drill Demo"]
},

{
  id: 100,
  nome: "DRUMKIT FARIENTO DE GOSPEL",
  categoria: "drumkits estilo",
  preco: 500,
  precoAntigo: 2000,
  videoID: "",
  imagem: "img/drumkits estilos/fariento/DRUMKIT FARIENTO DE GOSPEL.jpg",
  headline: "Grooves para Música Gospel",
  subheadline: "Percussões limpas e inspiradoras.",
  descricao: "Coleção criada para produções Gospel modernas.",
  conteudo: [
    "Kicks",
    "Claps",
    "Percussões",
    "FX"
  ],
  musicasDemonstracao: ["Gospel Demo"]
},

{
  id: 101,
  nome: "DRUMKIT FARIENTO DE GUETHO ZOUK",
  categoria: "drumkits estilo",
  preco: 500,
  precoAntigo: 2000,
  videoID: "",
  imagem: "img/drumkits estilos/fariento/DRUMKIT FARIENTO DE GUETHO ZOUK.jpg",
  headline: "O Verdadeiro Guetho Zouk",
  subheadline: "Batidas urbanas para as ruas.",
  descricao: "Pacote especializado para Guetho Zouk moderno.",
  conteudo: [
    "Kicks",
    "Percussões",
    "Loops",
    "FX"
  ],
  musicasDemonstracao: ["Guetho Zouk Demo"]
},

{
  id: 102,
  nome: "DRUMKIT FARIENTO DE KUDURO MELODICO",
  categoria: "drumkits estilo",
  preco: 500,
  precoAntigo: 2000,
  videoID: "",
  imagem: "img/drumkits estilos/fariento/DRUMKIT FARIENTO DE KUDURO MELODICO.jpg",
  headline: "Kuduro com Melodia",
  subheadline: "Misture energia e musicalidade.",
  descricao: "Ideal para criar Kuduro moderno e comercial.",
  conteudo: [
    "Kicks",
    "Loops",
    "FX",
    "Percussões"
  ],
  musicasDemonstracao: ["Kuduro Demo"]
},

{
  id: 103,
  nome: "DRUMKIT SALIMA CHICA",
  categoria: "drumkits artista",
  preco: 500,
  precoAntigo: 2000,
  videoID: "",
  imagem: "img/drumkits artistas/DRUMKIT SALIMA CHICA.jpg",
  headline: "Afro Pop Feminino",
  subheadline: "Timbres modernos e elegantes.",
  descricao: "Coleção inspirada em produções femininas contemporâneas.",
  conteudo: [
    "Kicks",
    "Claps",
    "Pads",
    "FX"
  ],
  musicasDemonstracao: ["Salima Chica Style"]
},

{
  id: 104,
  nome: "DRUMKIT SINI",
  categoria: "drumkits artista",
  preco: 500,
  precoAntigo: 2000,
  videoID: "",
  imagem: "img/drumkits artistas/DRUMKIT SINI.jpg",
  headline: "Afro House Atual",
  subheadline: "Grooves modernos para pistas de dança.",
  descricao: "Pacote completo de sons profissionais.",
  conteudo: [
    "Kicks",
    "Percussões",
    "Loops",
    "FX"
  ],
  musicasDemonstracao: ["Sini Style"]
},

{
  id: 105,
  nome: "DRUMKIT SOARITO",
  categoria: "drumkits artista",
  preco: 500,
  precoAntigo: 2000,
  videoID: "",
  imagem: "img/drumkits artistas/DRUMKIT SOARITO.jpg",
  headline: "Batidas Urbanas Modernas",
  subheadline: "Energia e criatividade para seus beats.",
  descricao: "Drumkit completo para Afro Pop e ritmos urbanos.",
  conteudo: [
    "Kicks",
    "Claps",
    "FX",
    "Loops"
  ],
  musicasDemonstracao: ["Soarito Style"]
},

{
  id: 106,
  nome: "DRUMKIT TABANKA DJAZ",
  categoria: "drumkits artista",
  preco: 500,
  precoAntigo: 2000,
  videoID: "",
  imagem: "img/drumkits artistas/DRUMKIT TABANKA DJAZ.jpg",
  headline: "A Influência Cabo-Verdiana",
  subheadline: "Ritmos autênticos e cheios de identidade.",
  descricao: "Coleção inspirada nos clássicos da música de Cabo Verde.",
  conteudo: [
    "Percussões",
    "Kicks",
    "Loops",
    "FX"
  ],
  musicasDemonstracao: ["Tabanka Djaz Style"]
},

{
  id: 107,
  nome: "DRUMKIT TAYC",
  categoria: "drumkits artista",
  preco: 500,
  precoAntigo: 2000,
  videoID: "",
  imagem: "img/drumkits artistas/DRUMKIT TAYC.jpg",
  headline: "Afro Love Internacional",
  subheadline: "Timbres românticos e modernos.",
  descricao: "Ideal para Afro R&B, Kizomba e Pop.",
  conteudo: [
    "Soft Kicks",
    "Pads",
    "Claps",
    "FX"
  ],
  musicasDemonstracao: ["Tayc Type Beat"]
},

{
  id: 108,
  nome: "DRUMKIT TEMS",
  categoria: "drumkits artista",
  preco: 500,
  precoAntigo: 2000,
  videoID: "",
  imagem: "img/drumkits artistas/DRUMKIT TEMS.jpg",
  headline: "Afro Soul e R&B",
  subheadline: "Texturas modernas e sofisticadas.",
  descricao: "Perfeito para produções internacionais.",
  conteudo: [
    "Drums",
    "Pads",
    "FX",
    "Percussões"
  ],
  musicasDemonstracao: ["Tems Style"]
},

{
  id: 109,
  nome: "DRUMKIT THAMIRES MOIANE",
  categoria: "drumkits artista",
  preco: 500,
  precoAntigo: 2000,
  videoID: "",
  imagem: "img/drumkits artistas/DRUMKIT THAMIRES MOIANE.jpg",
  headline: "Afro Pop de Moçambique",
  subheadline: "Sons suaves e profissionais.",
  descricao: "Coleção inspirada nos ritmos modernos moçambicanos.",
  conteudo: [
    "Kicks",
    "Claps",
    "Shakers",
    "FX"
  ],
  musicasDemonstracao: ["Thamires Style"]
},

{
  id: 110,
  nome: "CURSO COMPLETO DE PRODUÇÃO DE BEATS DE TRAP MIX E MASTER NO FL STUDIO",
  categoria: "cursos",
  preco: 5000,
  precoAntigo: 15000,
  videoID: "",
  imagem: "img/cursos/CURSO COMPLETO DE PRODUÇÃO DE BEATS DE TRAP MIX E MASTER NO FL STUDIO.jpg",
  headline: "Trap do Zero ao Profissional",
  subheadline: "Aprenda produção, mixagem e masterização.",
  descricao: "Curso completo para dominar a produção de Trap moderno.",
  conteudo: [
    "Criação de Beats",
    "808s",
    "Mixagem",
    "Masterização"
  ],
  musicasDemonstracao: []
},

{
  id: 111,
  nome: "TABUA MISTA AMAPIANO",
  categoria: "drumkits estilo",
  preco: 500,
  precoAntigo: 2000,
  videoID: "",
  imagem: "img/drumkits estilos/TABUA MISTA/TABUA MISTA AMAPIANO.jpg",
  headline: "O Poder dos Log Drums",
  subheadline: "A sonoridade autêntica do Amapiano.",
  descricao: "Pacote completo para criar grooves sul-africanos.",
  conteudo: [
    "Log Drums",
    "Kicks",
    "Percussões",
    "FX"
  ],
  musicasDemonstracao: ["Amapiano Demo"]
},

{
  id: 112,
  nome: "TABUA MISTA DRILL",
  categoria: "drumkits estilo",
  preco: 500,
  precoAntigo: 2000,
  videoID: "",
  imagem: "img/drumkits estilos/TABUA MISTA/TABUA MISTA DRILL.jpg",
  headline: "Drill Profissional",
  subheadline: "Baterias modernas e agressivas.",
  descricao: "Ideal para Drill UK e Afro Drill.",
  conteudo: [
    "808s",
    "Snares",
    "Hi Hats",
    "FX"
  ],
  musicasDemonstracao: ["Drill Demo"]
},

{
  id: 113,
  nome: "TABUA MISTA GUETHO ZOUK",
  categoria: "drumkits estilo",
  preco: 500,
  precoAntigo: 2000,
  videoID: "",
  imagem: "img/drumkits estilos/TABUA MISTA/TABUA MISTA GUETHO ZOUK.jpg",
  headline: "Guetho Zouk Moderno",
  subheadline: "Os ritmos mais populares das ruas.",
  descricao: "Coleção especializada em Guetho Zouk.",
  conteudo: [
    "Kicks",
    "Percussões",
    "Loops",
    "FX"
  ],
  musicasDemonstracao: ["Guetho Demo"]
},

{
  id: 114,
  nome: "TABUA MISTA KUDURO MELODICO",
  categoria: "drumkits estilo",
  preco: 500,
  precoAntigo: 2000,
  videoID: "",
  imagem: "img/drumkits estilos/TABUA MISTA/TABUA MISTA KUDURO MELODICO.jpg",
  headline: "Kuduro com Identidade",
  subheadline: "Energia e melodia no mesmo pacote.",
  descricao: "Drumkit focado no Kuduro moderno.",
  conteudo: [
    "Kicks",
    "Loops",
    "FX",
    "Percussões"
  ],
  musicasDemonstracao: ["Kuduro Demo"]
},

{
  id: 115,
  nome: "TABUA MISTA AFROBEAT",
  categoria: "drumkits estilo",
  preco: 500,
  precoAntigo: 2000,
  videoID: "",
  imagem: "img/drumkits estilos/TABUA MISTA/TABUA MISTA AFROBEAT.jpg",
  headline: "Afrobeat Atual",
  subheadline: "Timbres inspirados nos maiores sucessos africanos.",
  descricao: "Ideal para Afrobeat moderno e Afro Fusion.",
  conteudo: [
    "Kicks",
    "Shakers",
    "Percussões",
    "FX"
  ],
  musicasDemonstracao: ["Afrobeat Demo"]
},
{
  id: 116,
  nome: "DRUMKIT FARIENTO DE AFROBEAT",
  categoria: "drumkits estilo",
  preco: 500,
  precoAntigo: 2000,
  videoID: "",
  imagem: "img/drumkits estilos/fariento/DRUMKIT FARIENTO DE AFROBEAT.jpg",
  headline: "Afrobeat Moderno e Comercial",
  subheadline: "Grooves africanos prontos para hits internacionais.",
  descricao: "Pacote completo de baterias, percussões e elementos essenciais para Afrobeat moderno.",
  conteudo: [
    "12 Afro Kicks",
    "15 Shakers",
    "10 Percussion Loops",
    "5 FX"
  ],
  musicasDemonstracao: ["Afrobeat Demo"]
},

{
  id: 117,
  nome: "DRUMKIT FARIENTO DE AMAPIANO",
  categoria: "drumkits estilo",
  preco: 500,
  precoAntigo: 2000,
  videoID: "",
  imagem: "img/drumkits estilos/fariento/DRUMKIT FARIENTO DE AMAPIANO.jpg",
  headline: "Log Drums Poderosos",
  subheadline: "A energia do Amapiano sul-africano.",
  descricao: "Biblioteca criada para produtores que procuram o som autêntico do Amapiano.",
  conteudo: [
    "15 Log Drums",
    "10 Kicks",
    "12 Percussões",
    "5 FX"
  ],
  musicasDemonstracao: ["Amapiano Demo"]
},

{
  id: 118,
  nome: "DRUMKIT FARIENTO DE SEMBA",
  categoria: "drumkits estilo",
  preco: 500,
  precoAntigo: 2000,
  videoID: "",
  imagem: "img/drumkits estilos/fariento/DRUMKIT FARIENTO DE SEMBA.jpg",
  headline: "A Essência do Semba",
  subheadline: "Percussões e ritmos tradicionais modernizados.",
  descricao: "Drumkit completo para produções de Semba contemporâneo.",
  conteudo: [
    "Kicks",
    "Congas",
    "Percussões",
    "FX"
  ],
  musicasDemonstracao: ["Semba Demo"]
},

{
  id: 119,
  nome: "DRUMKIT FARIENTO DE TRAP",
  categoria: "drumkits estilo",
  preco: 500,
  precoAntigo: 2000,
  videoID: "",
  imagem: "img/drumkits estilos/fariento/DRUMKIT FARIENTO DE TRAP.jpg",
  headline: "Trap Pesado e Atual",
  subheadline: "808s fortes e baterias modernas.",
  descricao: "Coleção desenvolvida para Trap, Afro Trap e Hip Hop.",
  conteudo: [
    "808s",
    "Snares",
    "Hi Hats",
    "FX"
  ],
  musicasDemonstracao: ["Trap Demo"]
},

{
  id: 120,
  nome: "PACK DE PLUGINS PRODUCER BUNDLE VOL. 9",
  categoria: "packs de plugins",
  preco: 1500,
  precoAntigo: 6000,
  videoID: "",
  imagem: "img/packs de plugins/PACKS DE PLUGINS (9).jpg",
  headline: "Ferramentas Profissionais",
  subheadline: "Plugins essenciais para produção musical.",
  descricao: "Coleção de plugins para composição, mixagem e masterização.",
  conteudo: [
    "VSTs",
    "Instrumentos",
    "FX",
    "Presets"
  ],
  musicasDemonstracao: []
},

{
  id: 121,
  nome: "PACK DE PLUGINS PRODUCER BUNDLE VOL. 10",
  categoria: "packs de plugins",
  preco: 1500,
  precoAntigo: 6000,
  videoID: "",
  imagem: "img/packs de plugins/PACKS DE PLUGINS (10).jpg",
  headline: "Criatividade Sem Limites",
  subheadline: "Expanda o seu arsenal de produção.",
  descricao: "Pacote completo para qualquer estilo musical.",
  conteudo: [
    "Plugins",
    "Instrumentos",
    "FX",
    "Presets"
  ],
  musicasDemonstracao: []
},

{
  id: 122,
  nome: "PACK DE PLUGINS PRODUCER BUNDLE VOL. 11",
  categoria: "packs de plugins",
  preco: 1500,
  precoAntigo: 6000,
  videoID: "",
  imagem: "img/packs de plugins/PACKS DE PLUGINS (11).jpg",
  headline: "Produção Avançada",
  subheadline: "Recursos para elevar a qualidade dos seus beats.",
  descricao: "Biblioteca premium de plugins e instrumentos virtuais.",
  conteudo: [
    "VSTs",
    "FX",
    "Presets",
    "Instrumentos"
  ],
  musicasDemonstracao: []
},

{
  id: 123,
  nome: "DRUMKIT FARIENTO DE AFRO HOUSE",
  categoria: "drumkits estilo",
  preco: 500,
  precoAntigo: 2000,
  videoID: "",
  imagem: "img/drumkits estilos/fariento/DRUMKIT FARIENTO DE AFRO HOUSE.jpg",
  headline: "Afro House Profissional",
  subheadline: "Percussões profundas para pista de dança.",
  descricao: "Coleção especializada para Afro House moderno.",
  conteudo: [
    "Kicks",
    "Congas",
    "Loops",
    "FX"
  ],
  musicasDemonstracao: ["Afro House Demo"]
},

{
  id: 124,
  nome: "DRUMKIT FARIENTO DE AFRO TECH",
  categoria: "drumkits estilo",
  preco: 500,
  precoAntigo: 2000,
  videoID: "",
  imagem: "img/drumkits estilos/fariento/DRUMKIT FARIENTO DE AFRO TECH.jpg",
  headline: "Afro Tech Futurista",
  subheadline: "Texturas modernas e batidas profundas.",
  descricao: "Ideal para produtores de Afro Tech e Deep Afro House.",
  conteudo: [
    "Tech Kicks",
    "Percussões",
    "FX",
    "Atmosferas"
  ],
  musicasDemonstracao: ["Afro Tech Demo"]
},

{
  id: 125,
  nome: "DRUMKIT DE TRAP FUNK",
  categoria: "drumkits estilo",
  preco: 500,
  precoAntigo: 2000,
  videoID: "",
  imagem: "img/drumkits estilos/ESTILOS/DRUMKIT DE TRAP FUNK.jpg",
  headline: "Trap Funk Brasileiro",
  subheadline: "Graves pesados e energia explosiva.",
  descricao: "Tudo o que precisa para criar Trap Funk profissional.",
  conteudo: [
    "808s",
    "Funk Kicks",
    "Snares",
    "FX"
  ],
  musicasDemonstracao: ["Trap Funk Demo"]
},

{
  id: 126,
  nome: "DRUMKIT DE SEMBA PROGRAMADO",
  categoria: "drumkits estilo",
  preco: 500,
  precoAntigo: 2000,
  videoID: "",
  imagem: "img/drumkits estilos/ESTILOS/DRUMKIT DE SEMBA PROGRAMADO.jpg",
  headline: "Semba Modernizado",
  subheadline: "Ritmos tradicionais com produção atual.",
  descricao: "Coleção perfeita para Semba digital e contemporâneo.",
  conteudo: [
    "Percussões",
    "Kicks",
    "Loops",
    "FX"
  ],
  musicasDemonstracao: ["Semba Programado Demo"]
},

{
  id: 127,
  nome: "DRUMKIT CU DOCE DE AFROBEAT",
  categoria: "drumkits estilo",
  preco: 500,
  precoAntigo: 2000,
  videoID: "",
  imagem: "img/drumkits estilos/cu doce/DRUMKIT CU DOCE DE AFROBEAT.jpg",
  headline: "Afrobeat de Nova Geração",
  subheadline: "Sons inspirados nos maiores artistas africanos.",
  descricao: "Pacote profissional para Afrobeat comercial.",
  conteudo: [
    "Afro Kicks",
    "Shakers",
    "Loops",
    "FX"
  ],
  musicasDemonstracao: ["Afrobeat Demo"]
},

{
  id: 128,
  nome: "DRUMKIT CU DOCE DE AMAPIANO",
  categoria: "drumkits estilo",
  preco: 500,
  precoAntigo: 2000,
  videoID: "",
  imagem: "img/drumkits estilos/cu doce/DRUMKIT CU DOCE DE AMAPIANO.jpg",
  headline: "Amapiano Premium",
  subheadline: "Log Drums e grooves sul-africanos.",
  descricao: "Biblioteca criada para produções modernas de Amapiano.",
  conteudo: [
    "Log Drums",
    "Kicks",
    "Percussões",
    "FX"
  ],
  musicasDemonstracao: ["Amapiano Demo"]
},

{
  id: 129,
  nome: "DRUMKIT CU DOCE DE AFRO HOUSE",
  categoria: "drumkits estilo",
  preco: 500,
  precoAntigo: 2000,
  videoID: "",
  imagem: "img/drumkits estilos/cu doce/DRUMKIT CU DOCE DE AFRO HOUSE.jpg",
  headline: "Afro House de Elite",
  subheadline: "Percussões envolventes para as pistas.",
  descricao: "Pacote completo para criar Afro House moderno.",
  conteudo: [
    "Kicks",
    "Congas",
    "Loops",
    "FX"
  ],
  musicasDemonstracao: ["Afro House Demo"]
},

{
  id: 130,
  nome: "PACK DE PLUGINS PRODUCER BUNDLE VOL. 1",
  categoria: "packs de plugins",
  preco: 1500,
  precoAntigo: 6000,
  videoID: "",
  imagem: "img/packs de plugins/PACKS DE PLUGINS (1).jpg",
  headline: "Coleção Inicial Essencial",
  subheadline: "Os plugins mais usados pelos produtores.",
  descricao: "Pacote indispensável para produção musical moderna.",
  conteudo: [
    "Plugins",
    "VSTs",
    "FX",
    "Presets"
  ],
  musicasDemonstracao: []
},

{
  id: 131,
  nome: "PACK DE PLUGINS PRODUCER BUNDLE VOL. 2",
  categoria: "packs de plugins",
  preco: 1500,
  precoAntigo: 6000,
  videoID: "",
  imagem: "img/packs de plugins/PACKS DE PLUGINS (2).jpg",
  headline: "Ferramentas Criativas",
  subheadline: "Mais recursos para expandir suas produções.",
  descricao: "Biblioteca complementar de plugins premium.",
  conteudo: [
    "Instrumentos",
    "FX",
    "VSTs",
    "Presets"
  ],
  musicasDemonstracao: []
},

{
  id: 132,
  nome: "PACK DE PLUGINS PRODUCER BUNDLE VOL. 12",
  categoria: "packs de plugins",
  preco: 1500,
  precoAntigo: 6000,
  videoID: "",
  imagem: "img/packs de plugins/PACKS DE PLUGINS (12).jpg",
  headline: "Coleção Definitiva",
  subheadline: "Tudo o que um produtor moderno precisa.",
  descricao: "Pacote avançado para criação, mixagem e masterização.",
  conteudo: [
    "Plugins Premium",
    "Instrumentos",
    "FX",
    "Presets"
  ],
  musicasDemonstracao: []
},

{
  id: 133,
  nome: "MIDI E LOOPS PACK VOL. 4",
  categoria: "midis",
  preco: 1000,
  precoAntigo: 4000,
  videoID: "",
  imagem: "img/midi e loops/MIDI E LOOPS  (4).jpg",
  headline: "Fluxo Criativo Instantâneo",
  subheadline: "MIDIs profissionais para acelerar produções.",
  descricao: "Coleção pronta para Afrobeat, Kizomba e Trap.",
  conteudo: [
    "20 MIDIs",
    "15 Loops",
    "Basslines",
    "Acordes"
  ],
  musicasDemonstracao: []
},

{
  id: 134,
  nome: "MIDI E LOOPS PACK VOL. 2",
  categoria: "midis",
  preco: 1000,
  precoAntigo: 4000,
  videoID: "",
  imagem: "img/midi e loops/MIDI E LOOPS  (2).jpg",
  headline: "Mais Ideias Musicais",
  subheadline: "Progressões harmónicas prontas.",
  descricao: "Biblioteca criada para inspirar novas produções.",
  conteudo: [
    "MIDIs",
    "Loops",
    "Basslines",
    "Melodias"
  ],
  musicasDemonstracao: []
},

{
  id: 135,
  nome: "MIDI E LOOPS PACK VOL. 3",
  categoria: "midis",
  preco: 1000,
  precoAntigo: 4000,
  videoID: "",
  imagem: "img/midi e loops/MIDI E LOOPS  (3).jpg",
  headline: "Criatividade Sem Bloqueios",
  subheadline: "Comece qualquer beat em minutos.",
  descricao: "Coleção de MIDI e loops compatível com qualquer DAW.",
  conteudo: [
    "MIDIs",
    "Loops WAV",
    "Basslines",
    "Progressões"
  ],
  musicasDemonstracao: []
}


  
];
