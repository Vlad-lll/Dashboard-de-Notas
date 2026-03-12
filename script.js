// Função que muda a tela quando o aluno escolhe o tipo de matéria
function ajustarCampos() {
    const tipo = document.getElementById('tipoMateria').value;
    const label1 = document.getElementById('labelDinâmico1');
    const grupoAva = document.getElementById('grupoAva');

    if (tipo === 'pratica') {
        label1.innerText = "Nota do Relatório (Peso 3):";
        grupoAva.style.display = 'none'; // Esconde a caixinha do AVA
    } else {
        label1.innerText = "Nota do PIM (Peso 2):";
        grupoAva.style.display = 'block'; // Mostra a caixinha do AVA
    }
}

// Função principal de cálculo
function calcularMedia() {
    // 1. Pegando os valores digitados no HTML
    const tipo = document.getElementById('tipoMateria').value;
    const prova = parseFloat(document.getElementById('notaProva').value) || 0;
    const campo1 = parseFloat(document.getElementById('notaCampo1').value) || 0; // Pode ser PIM ou Relatório
    const ava = parseFloat(document.getElementById('notaAva').value) || 0;

    let media = 0;

    // 2. Lógica matemática da faculdade
    if (tipo === 'teorica') {
        // Regra: (7*Prova + 2*PIM + 1*AVA) / 10
        media = ((prova * 7) + (campo1 * 2) + (ava * 1)) / 10;
    } else {
        // Regra: (7*Prova + 3*Relatório) / 10
        media = ((prova * 7) + (campo1 * 3)) / 10;
    }

    // Chama a função para mostrar na tela
    exibirResultado(media);
}

// Função que pinta a tela de verde (Aprovado) ou vermelho (Exame)
function exibirResultado(media) {
    const resultadoCard = document.getElementById('resultadoCard');
    const valorMedia = document.getElementById('valorMedia');
    const statusAluno = document.getElementById('statusAluno');

    // Mostra o card de resultado que estava escondido
    resultadoCard.style.display = 'block';
    valorMedia.innerText = media.toFixed(1);

    // Condição de aprovação
    if (media >= 7.0) { 
        statusAluno.innerHTML = "Aprovado! 🎓";
        statusAluno.className = "status aprovado";
    } else {
        let notaExame = 10 - media; 
        statusAluno.innerHTML = `Exame! 📚<br>Você precisa de <b>${notaExame.toFixed(1)}</b> no exame.`;
        statusAluno.className = "status exame";
    }
}
