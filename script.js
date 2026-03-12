function calcularMedia() {
    // 1. Pegando os valores digitados no HTML
    let inputProva = document.getElementById('notaProva').value;
    let inputAva = document.getElementById('notaAva').value;

    // 2. Validação simples para não calcular campos vazios
    if (inputProva === "" || inputAva === "") {
        alert("Por favor, preencha ambas as notas antes de calcular!");
        return;
    }

    // 3. Convertendo os textos digitados em números decimais (floats)
    let notaProva = parseFloat(inputProva);
    let notaAva = parseFloat(inputAva);

    // 4. Lógica de cálculo (adaptável para o formato de disciplinas EAD/Flex)
    let mediaFinal = ((notaProva * 7) + (notaAva * 3)) / 10;

    // 5. Atualizando o HTML com o resultado
    document.getElementById('valorMedia').innerText = mediaFinal.toFixed(1); 
    
    let statusDiv = document.getElementById('statusAluno');
    
   // 6. Verificando o status e calculando o Exame se necessário
    if (mediaFinal >= 7.0) {
        statusDiv.innerText = "Aprovado! 🎉";
        statusDiv.className = "status aprovado"; 
    } else {
        // Calcula quanto o aluno precisa tirar no exame final
        let notaExame = 10 - mediaFinal;
        
        // Atualiza a tela com a mensagem de Exame + a nota exata que ele precisa
        statusDiv.innerHTML = `Exame! 📚<br><span style="font-size: 14px; font-weight: normal; color: #ffcdd2;">Você precisa de um <strong>${notaExame.toFixed(1)}</strong> no Exame para passar.</span>`;
        statusDiv.className = "status exame"; 
    }

    // Mostra o card de resultado que estava escondido
    document.getElementById('resultadoCard').style.display = 'block';
}

