// Ficheiro: bd/vip/vip_elite.js

const dadosVip = {
     usuario: {
        username: "maluco",
        senha: "123",  
        nome: "Loneke VIP",
        email: "loneke.vip@gmail.com"
    },
    assinatura: {
        plano: "Plano Elite Anual",
        dataAssinatura: "2026-07-01",
        dataExpiracao: "2027-07-01" // 1 ano de acesso completo
    },
    cursos: [
        {
            id: 1,
            titulo: "Curso: Engenharia de Áudio Completa",
            imagem: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=500",
            desbloqueado: true,
            linkMaterial: "https://www.mediafire.com/file/exemplo/material1.zip/file",
            modulos: [{ nome: "Módulo 1 - Frequências de Elite", aulas: [{ titulo: "Aula 1.1 - Equalização Cirúrgica", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" }] }]
        },
        {
            id: 2,
            titulo: "Curso: Criação de Melodias Emocionais (VIP)",
            imagem: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500",
            desbloqueado: true,
            videoDemo: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            linkMaterial: "https://www.mediafire.com/file/exemplo/material2.zip/file",
            modulos: [{ nome: "Módulo VIP - Harmonias Modernas", aulas: [{ titulo: "Aula 1.1 - Progressões Emocionais", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" }] }]
        },
        {
            id: 3,
            titulo: "Curso: Segredos do Sound Design Comercial",
            imagem: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500",
            desbloqueado: true,
            videoDemo: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            linkMaterial: "https://www.mediafire.com/file/exemplo/material3.zip/file",
            modulos: [{ nome: "Módulo VIP - Síntese Sonora", aulas: [{ titulo: "Aula 1.1 - Criando Leads de Rádio", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" }] }]
        },
        {
            id: 4,
            titulo: "Curso: Estruturação de Beats para Rádio",
            imagem: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=500",
            desbloqueado: true,
            videoDemo: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            linkMaterial: "https://www.mediafire.com/file/exemplo/material4.zip/file",
            modulos: [{ nome: "Módulo VIP - Arranjos de Impacto", aulas: [{ titulo: "Aula 1.1 - A Estrutura de 3 Minutos", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" }] }]
        },
        {
            id: 5,
            titulo: "Curso: Escalar Negócio de Beats Internacional",
            imagem: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500",
            desbloqueado: true,
            videoDemo: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            linkMaterial: "https://www.mediafire.com/file/exemplo/material5.zip/file",
            modulos: [{ nome: "Módulo VIP - Vendas e Marketing", aulas: [{ titulo: "Aula 1.1 - Funil de Vendas de Beats", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" }] }]
        }
    ],
    drumkits: [
        { id: 101, titulo: "VIP Premium Trap Drumkit", imagem: "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=500", desbloqueado: true, linkDownload: "https://www.mediafire.com/file/exemplo/drumvip.zip/file", preco: "Incluso no Plano Elite", videoDemo: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
        { id: 102, titulo: "R&B Soulful Essentials Drumkit", imagem: "https://images.unsplash.com/photo-1543794327-59a91fb7de1d?w=500", desbloqueado: true, linkDownload: "https://www.mediafire.com/file/exemplo/drum102.zip/file", preco: "Incluso no Plano Elite", videoDemo: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
        { id: 103, titulo: "Afrobeat Platinum Rhythm Pack", imagem: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500", desbloqueado: true, linkDownload: "https://www.mediafire.com/file/exemplo/drum103.zip/file", preco: "Incluso no Plano Elite", videoDemo: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
        { id: 104, titulo: "Drill Hard-Hitter Industry Kit", imagem: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=500", desbloqueado: true, linkDownload: "https://www.mediafire.com/file/exemplo/drum104.zip/file", preco: "Incluso no Plano Elite", videoDemo: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
        { id: 105, titulo: "Amapiano Deep Grooves Drumkit", imagem: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=500", desbloqueado: true, linkDownload: "https://www.mediafire.com/file/exemplo/drum105.zip/file", preco: "Incluso no Plano Elite", videoDemo: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" }
    ],
    flps: [
        { id: 201, titulo: "FLP Afro House Hits Remake", imagem: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500", desbloqueado: true, linkDownload: "https://www.mediafire.com/file/exemplo/flpvip.zip/file", preco: "Incluso no Plano Elite", videoDemo: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
        { id: 202, titulo: "FLP Orchestral Trap Score Structure", imagem: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500", desbloqueado: true, linkDownload: "https://www.mediafire.com/file/exemplo/flp202.zip/file", preco: "Incluso no Plano Elite", videoDemo: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
        { id: 203, titulo: "FLP Synthwave Retro Pop Layout", imagem: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=500", desbloqueado: true, linkDownload: "https://www.mediafire.com/file/exemplo/flp203.zip/file", preco: "Incluso no Plano Elite", videoDemo: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
        { id: 204, titulo: "FLP Kizomba Romantic Studio Project", imagem: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500", desbloqueado: true, linkDownload: "https://www.mediafire.com/file/exemplo/flp204.zip/file", preco: "Incluso no Plano Elite", videoDemo: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
        { id: 205, titulo: "FLP HipHop Underground BoomBap Session", imagem: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500", desbloqueado: true, linkDownload: "https://www.mediafire.com/file/exemplo/flp205.zip/file", preco: "Incluso no Plano Elite", videoDemo: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" }
    ],
    loops: [
        { id: 301, titulo: "Melody Placement Loops Vol. 5", imagem: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=500", desbloqueado: true, linkDownload: "https://www.mediafire.com/file/exemplo/loopvip.zip/file", preco: "Incluso no Plano Elite", videoDemo: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
        { id: 302, titulo: "Dark Ambient Cube Loops Pack", imagem: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=500", desbloqueado: true, linkDownload: "https://www.mediafire.com/file/exemplo/loop302.zip/file", preco: "Incluso no Plano Elite", videoDemo: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
        { id: 303, titulo: "Guitar Plucks Semba Organic Pack", imagem: "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=500", desbloqueado: true, linkDownload: "https://www.mediafire.com/file/exemplo/loop303.zip/file", preco: "Incluso no Plano Elite", videoDemo: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
        { id: 304, titulo: "Vintage Horn Loops Collection", imagem: "https://images.unsplash.com/photo-1543794327-59a91fb7de1d?w=500", desbloqueado: true, linkDownload: "https://www.mediafire.com/file/exemplo/loop304.zip/file", preco: "Incluso no Plano Elite", videoDemo: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
        { id: 305, titulo: "Synth Textures Soundscape Loops", imagem: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=500", desbloqueado: true, linkDownload: "https://www.mediafire.com/file/exemplo/loop305.zip/file", preco: "Incluso no Plano Elite", videoDemo: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" }
    ],
    plugins: [
        { id: 401, titulo: "Loneke Vox Enhance Preset Bundle", imagem: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=500", desbloqueado: true, linkDownload: "https://www.mediafire.com/file/exemplo/pluginvip.zip/file", preco: "Incluso no Plano Elite", videoDemo: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
        { id: 402, titulo: "Analog Tube Preamp Simulation Pack", imagem: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=500", desbloqueado: true, linkDownload: "https://www.mediafire.com/file/exemplo/plug402.zip/file", preco: "Incluso no Plano Elite", videoDemo: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
        { id: 403, titulo: "Sub-Bass Distortion Modulator Box", imagem: "https://images.unsplash.com/photo-1543794327-59a91fb7de1d?w=500", desbloqueado: true, linkDownload: "https://www.mediafire.com/file/exemplo/plug403.zip/file", preco: "Incluso no Plano Elite", videoDemo: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
        { id: 404, titulo: "80s Space Reverb Studio Unit VST", imagem: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=500", desbloqueado: true, linkDownload: "https://www.mediafire.com/file/exemplo/plug404.zip/file", preco: "Incluso no Plano Elite", videoDemo: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
        { id: 405, titulo: "Multi-Band Secret Stereo Expander Pack", imagem: "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=500", desbloqueado: true, linkDownload: "https://www.mediafire.com/file/exemplo/plug405.zip/file", preco: "Incluso no Plano Elite", videoDemo: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" }
    ],
    ebooks: [
        { id: 501, titulo: "Ebook: O Código da Mixagem Profissional", imagem: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500", desbloqueado: true, linkDownload: "https://www.mediafire.com/file/exemplo/ebookvip.pdf/file", preco: "Incluso no Plano Elite", videoDemo: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
        { id: 502, titulo: "Ebook: Engenharia de Áudio Psicoacústica", imagem: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=500", desbloqueado: true, linkDownload: "https://www.mediafire.com/file/exemplo/book502.pdf/file", preco: "Incluso no Plano Elite", videoDemo: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
        { id: 503, titulo: "Ebook: Monetização de Royalties Digitais", imagem: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500", desbloqueado: true, linkDownload: "https://www.mediafire.com/file/exemplo/book503.pdf/file", preco: "Incluso no Plano Elite", videoDemo: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
        { id: 504, titulo: "Ebook: Networking de Alta Performance na Música", imagem: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500", desbloqueado: true, linkDownload: "https://www.mediafire.com/file/exemplo/book504.pdf/file", preco: "Incluso no Plano Elite", videoDemo: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
        { id: 505, titulo: "Ebook: O Guia de Acústica para Home Studios", imagem: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500", desbloqueado: true, linkDownload: "https://www.mediafire.com/file/exemplo/book505.pdf/file", preco: "Incluso no Plano Elite", videoDemo: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" }
    ]
};