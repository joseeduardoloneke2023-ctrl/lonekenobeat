// Grade Curricular Master
const GRADE_AULAS_MASTER = [
    { id: 1, modulo: "Módulo 1", titulo: "01. Configuração de Workflow e Setup", tipo: "inicial" },
    { id: 2, modulo: "Módulo 1", titulo: "02. Teoria Musical e Harmonização Aplicada", tipo: "inicial" },
    { id: 3, modulo: "Módulo 2", titulo: "03. Engenharia de Beats e Estrutura", tipo: "inicial" },
    { id: 4, modulo: "Módulo 3", titulo: "04. Arquitetura de Mixagem Vocal Avançada", tipo: "avançado" },
    { id: 5, modulo: "Módulo 4", titulo: "05. Masterização Comercial de Alta Performance", tipo: "avançado" }
];

// Inicialização segura do localStorage
function obterAlunos() {
    let alunos = localStorage.getItem('loneke_alunos');
    if (!alunos) {
        const padrao = [
            { nome: "Hamilton Loneke", usuario: "hamilton10", senha: "123", liberacao: "parcelado", valor: 25000, divida: 20000, expira: "15 Dez 2026", email: "hamilton@loneke.com" },
            { nome: "José Eduardo", usuario: "jose99", senha: "123", liberacao: "completo", valor: 45000, divida: 0, expira: "Vitalicio", email: "jose.edu@gmail.com" }
        ];
        localStorage.setItem('loneke_alunos', JSON.stringify(padrao));
        return padrao;
    }
    return JSON.parse(alunos);
}

function salvarAluno(novoAluno) {
    let alunos = obterAlunos();
    alunos.push(novoAluno);
    localStorage.setItem('loneke_alunos', JSON.stringify(alunos));
}

function obterAlunoLogado() {
    let logado = localStorage.getItem('loneke_aluno_logado');
    if (!logado) {
        return obterAlunos()[0];
    }
    return JSON.parse(logado);
}