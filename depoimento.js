// depoimento.js - Fonte de dados dos depoimentos (Prints e Vídeos)
const depoimentosData = [
    {
        tipo: 'imagem',
        midia: 'img/depoimento1.jpg',
        autor: 'Mateus Pedro',
        descricao: 'Feedback de cliente via WhatsApp'
    },
    {
        tipo: 'video',
        midia: 'https://www.youtube.com/embed/SEU_ID_DO_VIDEO_DEPOIMENTO1',
        autor: 'Edgar Miguel',
        descricao: 'Depoimento em vídeo do curso de Semba'
    },
    {
        tipo: 'imagem',
        midia: 'img/depoimento2.jpg',
        autor: 'João Armando',
        descricao: 'Comprovativo de resultado após Drumkit'
    },
    {
        tipo: 'video',
        midia: 'https://www.youtube.com/embed/SEU_ID_DO_VIDEO_DEPOIMENTO2',
        autor: 'Carlos G.',
        descricao: 'Review do Drumkit Fariento Afro House'
    },
    {
        tipo: 'imagem',
        midia: 'img/depoimento3.jpg',
        autor: 'António Domingos',
        descricao: 'Feedback sobre o suporte via WhatsApp'
    },
    {
        tipo: 'video',
        midia: 'https://www.youtube.com/embed/SEU_ID_DO_VIDEO_DEPOIMENTO3',
        autor: 'Fernando Silva',
        descricao: 'Instalação de VSTs e experiência'
    },
    {
        tipo: 'imagem',
        midia: 'img/depoimento4.jpg',
        autor: 'Daniel M.',
        descricao: 'Elogio ao Kit Tábua Mista'
    },
    {
        tipo: 'video',
        midia: 'https://www.youtube.com/embed/SEU_ID_DO_VIDEO_DEPOIMENTO4',
        autor: 'Samuel Costa',
        descricao: 'Aluno VIP e mentoria ao vivo'
    }
];

if (typeof window !== 'undefined') {
    window.depoimentosData = depoimentosData;
}