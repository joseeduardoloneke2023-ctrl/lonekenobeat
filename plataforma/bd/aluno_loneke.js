// =========================================================================
// BANCO DE DADOS ATUALIZADO - 99 PRODUTOS ORGANIZADOS POR CATEGORIAS
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
    flps: [],
    loops: [],
    plugins: [],
    ebooks: []
};

// --- Nomes dos 10 Módulos Padrões para os Cursos ---
const estruturaModulosBase = [
    "Introdução e Mentalidade do Produtor de Elite",
    "Configuração Completa do Workflow e Ferramentas",
    "Teoria Prática e Seleção Estética de Timbres",
    "Arquitetura de Criação e Elementos Principais",
    "Estruturação de Arranjo Base e Variações",
    "Técnicas Avançadas de Processamento Dinâmico",
    "Segredos da Mixagem e Casamento de Frequências",
    "Masterização de Alto Nível para Plataformas",
    "Estratégias Comerciais, Divulgação e Vendas",
    "Conclusão, Desafio Prático e Mentoria Exclusiva"
];

// --- 1. ENTRADA BRUTA DE CURSOS (13 itens) ---
const cursosBrutos = [
    { id: 1, titulo: "CURSO COMPLETO COMO CRIAR E VENDER DRUMKITS E FAZER 50.000KZ POR SEMANA", imagem: "../../img/prontos/CURSO COMPLETO COMO CRIAR E VENDER DRUMKITS E FAZER 50.000KZ POR SEMANA.jpg" },
    { id: 2, titulo: "CURSO COMPLETO COMO DISTRIBUIR MÚSICAS NAS PLATAFORMAS DE STREAM", imagem: "../img/prontos/CURSO COMPLETO COMO DISTRIBUIR MÚSICAS NAS PLATAFORMAS DE STREAM.jpg" },
    { id: 3, titulo: "CURSO COMPLETO DE COMO BAIXAR E  INSTALAR QUALQUER PLUGIN E FAZER NO MINIMO 50.000KZ POR SEMANA", imagem: "../img/prontos/CURSO COMPLETO DE COMO BAIXAR E  INSTALAR QUALQUER PLUGIN E FAZER NO MINIMO 50.000KZ POR SEMANA.jpg" },
    { id: 4, titulo: "CURSO COMPLETO DE COMO BAIXAR E  INSTALAR QUALQUER PLUGIN", imagem: "../img/prontos/CURSO COMPLETO DE COMO BAIXAR E  INSTALAR QUALQUER PLUGIN.jpg" },
    { id: 5, titulo: "CURSO COMPLETO DE PRODUÇÃO DE BEATS DE AFRO HOUSE KUDURO + MIX E MASTER NO FL STUDIO", imagem: "../img/prontos/CURSO COMPLETO DE PRODUÇÃO DE BEATS DE AFRO HOUSE KUDURO + MIX E MASTER NO FL STUDIO.jpg" },
    { id: 6, titulo: "CURSO COMPLETO DE PRODUÇÃO DE BEATS DE AFROBEAT + MIX E MASTER NO FL STUDIO", imagem: "../img/prontos/CURSO COMPLETO DE PRODUÇÃO DE BEATS DE AFROBEAT + MIX E MASTER NO FL STUDIO.jpg" },
    { id: 7, titulo: "CURSO COMPLETO DE PRODUÇÃO DE BEATS DE GUETHO ZOUK + MIX E MASTER NO FL STUDIO", imagem: "../img/prontos/CURSO COMPLETO DE PRODUÇÃO DE BEATS DE GUETHO ZOUK + MIX E MASTER NO FL STUDIO.jpg" },
    { id: 8, titulo: "CURSO COMPLETO DE PRODUÇÃO DE BEATS DE SEMBA + MIX E MASTER NO FL STUDIO", imagem: "../img/prontos/CURSO COMPLETO DE PRODUÇÃO DE BEATS DE SEMBA + MIX E MASTER NO FL STUDIO.jpg" },
    { id: 9, titulo: "CURSO COMPLETO DE PRODUÇÃO DE BEATS DE TRAP + MIX E MASTER NO FL STUDIO", imagem: "../img/prontos/CURSO COMPLETO DE PRODUÇÃO DE BEATS DE TRAP + MIX E MASTER NO FL STUDIO.jpg" },
    { id: 10, titulo: "CURSO DE COMO BAIXAR E INSTALAR QUALQUER PROGRAMA DE PRODUÇÃO MUSICAL", imagem: "../img/prontos/CURSO DE COMO BAIXAR E INSTALAR QUALQUER PROGRAMA DE PRODUÇÃO MUSICAL.jpg" },
    { id: 11, titulo: "CURSO DE COMO CRIAR UMA CONTA NA REDOTPAY", imagem: "../img/prontos/CURSO DE COMO CRIAR UMA CONTA NA REDOTPAY.jpg" },
    { id: 12, titulo: "CURSO DE COMO GANHAR NO MINIMO 50.000KZ POR MES CRIANDO ARTES COM INTELIGENCIA ARTIFICIAL", imagem: "../img/prontos/CURSO DE COMO GANHAR NO MINIMO 50.000KZ POR MES CRIANDO ARTES COM INTELIGENCIA ARTIFICIAL.jpg" },
    { id: 13, titulo: "CURSO DE FL STUDIO PARA INICIANTES", imagem: "../img/prontos/CURSO DE FL STUDIO PARA INICIANTES.jpg" }
];

// MOTOR DE EXPANSÃO AUTOMÁTICA DE CURSOS: Injeta 10 Módulos e 10 Aulas para cada Curso
cursosBrutos.forEach(curso => {
    const cursoFormatado = {
        id: curso.id,
        titulo: curso.titulo,
        imagem: curso.imagem,
        desbloqueado: true,
        linkMaterial: "https://mediafire.com/exemplo",
        modulos: []
    };

    estruturaModulosBase.forEach((nomeModulo, idxMod) => {
        const modulo = {
            nome: `Módulo ${idxMod + 1}: ${nomeModulo}`,
            aulas: []
        };

        // Injeta exatamente 10 aulas cirúrgicas e dinâmicas
        for (let a = 1; a <= 10; a++) {
            modulo.aulas.push({
                titulo: `Aula ${idxMod + 1}.${a} - Tópico de Aprofundamento ${a}`,
                url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" // URL Padrão
            });
        }
        cursoFormatado.modulos.push(modulo);
    });
    dadosAluno.cursos.push(cursoFormatado);
});

// --- 2. REGISTRO DE DRUMKITS (57 itens) ---
dadosAluno.drumkits = [
    { id: 101, titulo: "DRUMKIT 3FINER", imagem: "../img/prontos/DRUMKIT 3FINER.jpg", desbloqueado: false, linkDownload: "https://mediafire.com" },
    { id: 102, titulo: "DRUMKIT ANDERSON MÁRIO", imagem: "../img/prontos/DRUMKIT ANDERSON MÁRIO.jpg", desbloqueado: true, linkDownload: "https://mediafire.com" },
    { id: 103, titulo: "DRUMKIT ANNA JOYCE", imagem: "../img/prontos/DRUMKIT ANNA JOYCE.jpg", desbloqueado: true, linkDownload: "https://mediafire.com" },
    { id: 104, titulo: "DRUMKIT ARIETH FEIJÓ", imagem: "../img/prontos/DRUMKIT ARIETH FEIJÓ.jpg", desbloqueado: true, linkDownload: "https://mediafire.com" },
    { id: 105, titulo: "DRUMKIT BUTTON ROSE", imagem: "../img/prontos/DRUMKIT BUTTON ROSE.jpg", desbloqueado: true, linkDownload: "https://mediafire.com" },
    { id: 106, titulo: "DRUMKIT CEF", imagem: "../img/prontos/DRUMKIT CEF.jpg", desbloqueado: true, linkDownload: "https://mediafire.com" },
    { id: 107, titulo: "DRUMKIT CHELSEA DINORATH", imagem: "../img/prontos/DRUMKIT CHELSEA DINORATH.jpg", desbloqueado: true, linkDownload: "https://mediafire.com" },
    { id: 108, titulo: "DRUMKIT CLEYTON DAVID", imagem: "../img/prontos/DRUMKIT CLEYTON DAVID.jpg", desbloqueado: true, linkDownload: "https://mediafire.com" },
    { id: 109, titulo: "DRUMKIT CLEYTON M", imagem: "../img/prontos/DRUMKIT CLEYTON M.jpg", desbloqueado: true, linkDownload: "https://mediafire.com" },
    { id: 110, titulo: "DRUMKIT CU DOCE DE GUETHO ZOUK", imagem: "../img/prontos/DRUMKIT CU DOCE DE GUETHO ZOUK.jpg", desbloqueado: true, linkDownload: "https://mediafire.com" },
    { id: 111, titulo: "DRUMKIT CU DOCE KUDURO MELODICO", imagem: "../img/prontos/DRUMKIT CU DOCE KUDURO MELODICO.jpg", desbloqueado: true, linkDownload: "https://mediafire.com" },
    { id: 112, titulo: "DRUMKIT DJODJE", imagem: "../img/prontos/DRUMKIT DJODJE.jpg", desbloqueado: true, linkDownload: "https://mediafire.com" },
    { id: 113, titulo: "DRUMKIT DODDY", imagem: "../img/prontos/DRUMKIT DODDY.jpg", desbloqueado: true, linkDownload: "https://mediafire.com" },
    { id: 114, titulo: "DRUMKIT DREAM BOYZ", imagem: "../img/prontos/DRUMKIT DREAM BOYZ.jpg", desbloqueado: true, linkDownload: "https://mediafire.com" },
    { id: 115, titulo: "DRUMKIT DUPLA GELADO DE MÚCUA", imagem: "../img/prontos/DRUMKIT DUPLA GELADO DE MÚCUA.jpg", desbloqueado: true, linkDownload: "https://mediafire.com" },
    { id: 116, titulo: "DRUMKIT EDMAZIA MAYEMBE", imagem: "../img/prontos/DRUMKIT EDMAZIA MAYEMBE.jpg", desbloqueado: true, linkDownload: "https://mediafire.com" },
    { id: 117, titulo: "DRUMKIT FABIO HUSTLE", imagem: "../img/prontos/DRUMKIT FABIO HUSTLE.jpg", desbloqueado: true, linkDownload: "https://mediafire.com" },
    { id: 118, titulo: "DRUMKIT FARIENTO DE AFRO HOUSE", imagem: "../img/prontos/DRUMKIT FARIENTO DE AFRO HOUSE.jpg", desbloqueado: true, linkDownload: "https://mediafire.com" },
    { id: 119, titulo: "DRUMKIT FARIENTO DE AFROBEAT", imagem: "../img/prontos/DRUMKIT FARIENTO DE AFROBEAT.jpg", desbloqueado: true, linkDownload: "https://mediafire.com" },
    { id: 120, titulo: "DRUMKIT FARIENTO DE AMAPIANO", imagem: "../img/prontos/DRUMKIT FARIENTO DE AMAPIANO.jpg", desbloqueado: true, linkDownload: "https://mediafire.com" },
    { id: 121, titulo: "DRUMKIT FARIENTO DE DRILL", imagem: "../img/prontos/DRUMKIT FARIENTO DE DRILL.jpg", desbloqueado: true, linkDownload: "https://mediafire.com" },
    { id: 122, titulo: "DRUMKIT FARIENTO DE GUETHO ZOUK", imagem: "../img/prontos/DRUMKIT FARIENTO DE GUETHO ZOUK.jpg", desbloqueado: true, linkDownload: "https://mediafire.com" },
    { id: 123, titulo: "DRUMKIT FARIENTO DE KUDURO MELODICO", imagem: "../img/prontos/DRUMKIT FARIENTO DE KUDURO MELODICO.jpg", desbloqueado: true, linkDownload: "https://mediafire.com" },
    { id: 124, titulo: "DRUMKIT FARIENTO DE SEMBA", imagem: "../img/prontos/DRUMKIT FARIENTO DE SEMBA.jpg", desbloqueado: true, linkDownload: "https://mediafire.com" },
    { id: 125, titulo: "DRUMKIT FARIENTO DE TRAP", imagem: "../img/prontos/DRUMKIT FARIENTO DE TRAP.jpg", desbloqueado: true, linkDownload: "https://mediafire.com" },
    { id: 126, titulo: "DRUMKIT FILHO DO ZUA", imagem: "../img/prontos/DRUMKIT FILHO DO ZUA.jpg", desbloqueado: true, linkDownload: "https://mediafire.com" },
    { id: 127, titulo: "DRUMKIT GANAH BOYZ", imagem: "../img/prontos/DRUMKIT GANAH BOYZ.jpg", desbloqueado: true, linkDownload: "https://mediafire.com" },
    { id: 128, titulo: "DRUMKIT GERILSON INSRAEL", imagem: "../img/prontos/DRUMKIT GERILSON INSRAEL.jpg", desbloqueado: true, linkDownload: "https://mediafire.com" },
    { id: 129, titulo: "DRUMKIT HALISON PAIXÃO", imagem: "../img/prontos/DRUMKIT HALISON PAIXÃO.jpg", desbloqueado: true, linkDownload: "https://mediafire.com" },
    { id: 130, titulo: "DRUMKIT IVANDRO", imagem: "../img/prontos/DRUMKIT IVANDRO.jpg", desbloqueado: true, linkDownload: "https://mediafire.com" },
    { id: 131, titulo: "DRUMKIT J LEVY", imagem: "../img/prontos/DRUMKIT J LEVY.jpg", desbloqueado: true, linkDownload: "https://mediafire.com" },
    { id: 132, titulo: "DRUMKIT JOHN TROUBLE", imagem: "../img/prontos/DRUMKIT JOHN TROUBLE.jpg", desbloqueado: true, linkDownload: "https://mediafire.com" },
    { id: 133, titulo: "DRUMKIT JOJO GOUVEIA", imagem: "../img/prontos/DRUMKIT JOJO GOUVEIA.jpg", desbloqueado: true, linkDownload: "https://mediafire.com" },
    { id: 134, titulo: "DRUMKIT JUSTINO HANDANGA", imagem: "../img/prontos/DRUMKIT JUSTINO HANDANGA.jpg", desbloqueado: true, linkDownload: "https://mediafire.com" },
    { id: 135, titulo: "DRUMKIT LANDRICK", imagem: "../img/prontos/DRUMKIT LANDRICK.jpg", desbloqueado: true, linkDownload: "https://mediafire.com" },
    { id: 136, titulo: "DRUMKIT LIL MAGRO", imagem: "../img/prontos/DRUMKIT LIL MAGRO.jpg", desbloqueado: true, linkDownload: "https://mediafire.com" },
    { id: 137, titulo: "DRUMKIT MANO CHABA", imagem: "../img/prontos/DRUMKIT MANO CHABA.jpg", desbloqueado: true, linkDownload: "https://mediafire.com" },
    { id: 138, titulo: "DRUMKIT MEYSON", imagem: "../img/prontos/DRUMKIT MEYSON.jpg", desbloqueado: true, linkDownload: "https://mediafire.com" },
    { id: 139, titulo: "DRUMKIT NELASTA", imagem: "../img/prontos/DRUMKIT NELASTA.jpg", desbloqueado: true, linkDownload: "https://mediafire.com" },
    { id: 140, titulo: "DRUMKIT PAULELSON", imagem: "../img/prontos/DRUMKIT PAULELSON.jpg", desbloqueado: true, linkDownload: "https://mediafire.com" },
    { id: 141, titulo: "DRUMKIT PÉROLA", imagem: "../img/prontos/DRUMKIT PÉROLA.jpg", desbloqueado: true, linkDownload: "https://mediafire.com" },
    { id: 142, titulo: "DRUMKIT PLUTONIO", imagem: "../img/prontos/DRUMKIT PLUTONIO.jpg", desbloqueado: true, linkDownload: "https://mediafire.com" },
    { id: 143, titulo: "DRUMKIT PUTO PORTUGUES", imagem: "../img/prontos/DRUMKIT PUTO PORTUGUES.jpg", desbloqueado: true, linkDownload: "https://mediafire.com" },
    { id: 144, titulo: "DRUMKIT RUI ORLANDO", imagem: "../img/prontos/DRUMKIT RUI ORLANDO.jpg", desbloqueado: true, linkDownload: "https://mediafire.com" },
    { id: 145, titulo: "DRUMKIT SCRO QUE CUIA", imagem: "../img/prontos/DRUMKIT SCRO QUE CUIA.jpg", desbloqueado: true, linkDownload: "https://mediafire.com" },
    { id: 146, titulo: "DRUMKIT SEMBA PROGRAMADO", imagem: "../img/prontos/DRUMKIT SEMBA PROGRAMADO.jpg", desbloqueado: true, linkDownload: "https://mediafire.com" },
    { id: 147, titulo: "DRUMKIT SINI", imagem: "../img/prontos/DRUMKIT SINI.jpg", desbloqueado: true, linkDownload: "https://mediafire.com" },
    { id: 148, titulo: "DRUMKIT SOARITO", imagem: "../img/prontos/DRUMKIT SOARITO.jpg", desbloqueado: true, linkDownload: "https://mediafire.com" },
    { id: 149, titulo: "DRUMKIT TABANKA DJAZ", imagem: "../img/prontos/DRUMKIT TABANKA DJAZ.jpg", desbloqueado: true, linkDownload: "https://mediafire.com" },
    { id: 150, titulo: "DRUMKIT TABUA MISTA DE AFRO HOUSE", imagem: "../img/prontos/DRUMKIT TABUA MISTA DE AFRO HOUSE.jpg", desbloqueado: true, linkDownload: "https://mediafire.com" },
    { id: 151, titulo: "DRUMKIT TABUA MISTA DE AFROBEAT", imagem: "../img/prontos/DRUMKIT TABUA MISTA DE AFROBEAT.jpg", desbloqueado: true, linkDownload: "https://mediafire.com" },
    { id: 152, titulo: "DRUMKIT TABUA MISTA DE GUETHO ZOUK", imagem: "../img/prontos/DRUMKIT TABUA MISTA DE GUETHO ZOUK.jpg", desbloqueado: true, linkDownload: "https://mediafire.com" },
    { id: 153, titulo: "DRUMKIT TABUA MISTA DE SEMBA", imagem: "../img/prontos/DRUMKIT TABUA MISTA DE SEMBA.jpg", desbloqueado: true, linkDownload: "https://mediafire.com" },
    { id: 154, titulo: "DRUMKIT THAMIRES MOIANE", imagem: "../img/prontos/DRUMKIT THAMIRES MOIANE.jpg", desbloqueado: true, linkDownload: "https://mediafire.com" },
    { id: 155, titulo: "DRUMKIT TSUNAMI", imagem: "../img/prontos/DRUMKIT TSUNAMI.jpg", desbloqueado: true, linkDownload: "https://mediafire.com" },
    { id: 156, titulo: "DRUMKIT TWENTY FINGERS", imagem: "../img/prontos/DRUMKIT TWENTY FINGERS.jpg", desbloqueado: true, linkDownload: "https://mediafire.com" },
    { id: 157, titulo: "DRUMKIT YASMINE", imagem: "../img/prontos/DRUMKIT YASMINE.jpg", desbloqueado: true, linkDownload: "https://mediafire.com" }
];

// --- 3. REGISTRO DE FLPS (18 itens) ---
dadosAluno.flps = [
    { id: 201, titulo: "FLP AFRO HOUSE - PRA MATAR - ME PROD.LONEKE NO BEAT", imagem: "../img/prontos/FLP AFRO HOUSE - PRA MATAR - ME PROD.LONEKE NO BEAT.jpg", desbloqueado: true, linkDownload: "https://mediafire.com" },
    { id: 202, titulo: "FLP APANHOU TEC TEC", imagem: "../img/prontos/FLP APANHOU TEC TEC.jpg", desbloqueado: true, linkDownload: "https://mediafire.com" },
    { id: 203, titulo: "FLP BANANA", imagem: "../img/prontos/FLP BANANA.jpg", desbloqueado: true, linkDownload: "https://mediafire.com" },
    { id: 204, titulo: "FLP DRENA NA UK", imagem: "../img/prontos/FLP DRENA NA UK.jpg", desbloqueado: true, linkDownload: "https://mediafire.com" },
    { id: 205, titulo: "FLP GUETHO ZOUK PIANO", imagem: "../img/prontos/FLP GUETHO ZOUK PIANO.jpg", desbloqueado: true, linkDownload: "https://mediafire.com" },
    { id: 206, titulo: "FLP GUETHO ZOUK RIJO", imagem: "../img/prontos/FLP GUETHO ZOUK RIJO.jpg", desbloqueado: true, linkDownload: "https://mediafire.com" },
    { id: 207, titulo: "FLP I NEED YOU", imagem: "../img/prontos/FLP I NEED YOU.jpg", desbloqueado: true, linkDownload: "https://mediafire.com" },
    { id: 208, titulo: "FLP MINHA EX", imagem: "../img/prontos/FLP MINHA EX.jpg", desbloqueado: true, linkDownload: "https://mediafire.com" },
    { id: 209, titulo: "FLP MONEY FOLLOW", imagem: "../img/prontos/FLP MONEY FOLLOW.jpg", desbloqueado: true, linkDownload: "https://mediafire.com" },
    { id: 210, titulo: "FLP NÃO FICA TEIMOSO VAIS SOFRER", imagem: "../img/prontos/FLP NÃO FICA TEIMOSO VAIS SOFRER.jpg", desbloqueado: true, linkDownload: "https://mediafire.com" },
    { id: 211, titulo: "FLP NÃO TOMARAM BANHO", imagem: "../img/prontos/FLP NÃO TOMARAM BANHO.jpg", desbloqueado: true, linkDownload: "https://mediafire.com" },
    { id: 212, titulo: "FLP PEDRA", imagem: "../img/prontos/FLP PEDRA.jpg", desbloqueado: true, linkDownload: "https://mediafire.com" },
    { id: 213, titulo: "FLP PERIGOSA", imagem: "../img/prontos/FLP PERIGOSA.jpg", desbloqueado: true, linkDownload: "https://mediafire.com" },
    { id: 214, titulo: "FLP PESO PESADO", imagem: "../img/prontos/FLP PESO PESADO.jpg", desbloqueado: true, linkDownload: "https://mediafire.com" },
    { id: 215, titulo: "FLP PROLONGADO", imagem: "../img/prontos/FLP PROLONGADO.jpg", desbloqueado: true, linkDownload: "https://mediafire.com" },
    { id: 216, titulo: "FLP SÓ TENHO DOIS MIL SERÁ QUE POSSO TE MANDAR", imagem: "../img/prontos/FLP SÓ TENHO DOIS MIL SERÁ QUE POSSO TE MANDAR.jpg", desbloqueado: true, linkDownload: "https://mediafire.com" },
    { id: 217, titulo: "FLP TENHO SIDA", imagem: "../img/prontos/FLP TENHO SIDA.jpg", desbloqueado: true, linkDownload: "https://mediafire.com" },
    { id: 218, titulo: "FLP TODO MAL QUE EU TE FIZ", imagem: "../img/prontos/FLP TODO MAL QUE EU TE FIZ.jpg", desbloqueado: true, linkDownload: "https://mediafire.com" }
];

// --- 4. REGISTRO DE LOOPS (6 itens) ---
dadosAluno.loops = [
    { id: 301, titulo: "LOOP KIT TABUA MISTA DE KIZOMBA VOLUME 2", imagem: "../img/prontos/LOOP KIT TABUA MISTA DE KIZOMBA VOLUME 2.jpg", desbloqueado: true, linkDownload: "https://mediafire.com" },
    { id: 302, titulo: "LOOP KIT TABUA MISTA DE KIZOMBA", imagem: "../img/prontos/LOOP KIT TABUA MISTA DE KIZOMBA.jpg", desbloqueado: true, linkDownload: "https://mediafire.com" },
    { id: 303, titulo: "LOOP KIT TABUA MISTA DE REGGAE", imagem: "../img/prontos/LOOP KIT TABUA MISTA DE REGGAE.jpg", desbloqueado: true, linkDownload: "https://mediafire.com" },
    { id: 304, titulo: "LOOP KIT TABUA MISTA DE SEBENE", imagem: "../img/prontos/LOOP KIT TABUA MISTA DE SEBENE.jpg", desbloqueado: true, linkDownload: "https://mediafire.com" },
    { id: 305, titulo: "LOOP KIT TABUA MISTA DE SEMBA VOLUME 2", imagem: "../img/prontos/LOOP KIT TABUA MISTA DE SEMBA VOLUME 2.jpg", desbloqueado: true, linkDownload: "https://mediafire.com" },
    { id: 306, titulo: "LOOP KIT TABUA MISTA DE SEMBA", imagem: "../img/prontos/LOOP KIT TABUA MISTA DE SEMBA.jpg", desbloqueado: true, linkDownload: "https://mediafire.com" }
];

// --- 5. REGISTRO DE PLUGINS (5 itens) ---
dadosAluno.plugins = [
    { id: 401, titulo: "PACKS DE PLUGINS DE MIX E MASTER", imagem: "../img/prontos/PACKS DE PLUGINS DE MIX E MASTER.jpg", desbloqueado: true, linkDownload: "https://mediafire.com" },
    { id: 402, titulo: "PACKS DE PLUGINS DE INSTRUMENTOS VIRTUAIS DE AFROBEAT", imagem: "../img/prontos/PACKS DE PLUGINS DE INSTRUMENTOS VIRTUAIS DE AFROBEAT.jpg", desbloqueado: true, linkDownload: "https://mediafire.com" },
    { id: 403, titulo: "PACKS DE PLUGINS DE INSTRUMENTOS VIRTUAIS DE GUETHO ZOUK", imagem: "../img/prontos/PACKS DE PLUGINS DE INSTRUMENTOS VIRTUAIS DE GUETHO ZOUK.jpg", desbloqueado: true, linkDownload: "https://mediafire.com" },
    { id: 404, titulo: "PACKS DE PLUGINS DE INSTRUMENTOS VIRTUAIS DE SEMBA", imagem: "../img/prontos/PACKS DE PLUGINS DE INSTRUMENTOS VIRTUAIS DE SEMBA.jpg", desbloqueado: true, linkDownload: "https://mediafire.com" },
    { id: 405, titulo: "PACKS DE PLUGINS DE INSTRUMENTOS VIRTUAIS DE TRAP", imagem: "../img/prontos/PACKS DE PLUGINS DE INSTRUMENTOS VIRTUAIS DE TRAP.jpg", desbloqueado: true, linkDownload: "https://mediafire.com" }
];