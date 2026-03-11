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
    // Exemplo: Prova tem peso 7 e AVA tem peso 3.
    let mediaFinal = ((notaProva * 7) + (notaAva * 3)) / 10;

    // 5. Atualizando o HTML com o resultado
    document.getElementById('valorMedia').innerText = mediaFinal.toFixed(1); // Deixa com 1 casa decimal
    
    let statusDiv = document.getElementById('statusAluno');
    
    // 6. Verificando se passou ou pegou exame (Média mínima 6.0)
    if (mediaFinal >= 6.0) {
        statusDiv.innerText = "Aprovado! 🎉";
        statusDiv.className = "status aprovado"; // Aplica a classe CSS verde
    } else {
        statusDiv.innerText = "Exame! 📚";
        statusDiv.className = "status exame"; // Aplica a classe CSS vermelha
    }

    // Mostra o card de resultado que estava escondido
    document.getElementById('resultadoCard').style.display = 'block';
}