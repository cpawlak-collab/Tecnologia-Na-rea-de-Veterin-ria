document.addEventListener('DOMContentLoaded', () => {
    const btnTriagem = document.getElementById('btn-triagem');
    const selectSintoma = document.getElementById('sintoma');
    const resultadoBox = document.getElementById('resultado-triagem');
    const grauPrioridade = document.getElementById('grau-prioridade');
    const mensagemTriagem = document.getElementById('mensagem-triagem');

    btnTriagem.addEventListener('click', () => {
        const sintomaSelecionado = selectSintoma.value;

        // Limpa classes anteriores de estilização do resultado
        resultadoBox.className = 'result-box';

        if (!sintomaSelecionado) {
            alert('Por favor, selecione um sintoma para realizar a triagem.');
            resultadoBox.classList.add('hidden');
            return;
        }

        // Remove o estado oculto para exibir o resultado
        resultadoBox.classList.remove('hidden');

        // Lógica de classificação do algoritmo de triagem veterinária
        switch (sintomaSelecionado) {
            case 'consulta':
                grauPrioridade.textContent = 'VERDE (Baixa)';
                mensagemTriagem.textContent = 'Atendimento agendado ou eletivo. Tempo de espera normal.';
                resultadoBox.classList.add('low');
                break;

            case 'coceira':
                grauPrioridade.textContent = 'VERDE (Baixa)';
                mensagemTriagem.textContent = 'Sintoma incômodo, mas sem risco imediato à vida. Encaminhar para atendimento ambulatorial.';
                resultadoBox.classList.add('low');
                break;

            case 'vomito':
                grauPrioridade.textContent = 'AMARELO (Moderada)';
                mensagemTriagem.textContent = 'Requer atenção médica em breve para evitar quadros severos de desidratação.';
                resultadoBox.classList.add('medium');
                break;

            case 'engasgo':
                grauPrioridade.textContent = 'VERMELHO (Emergência)';
                mensagemTriagem.textContent = 'Risco iminente de asfixia. Direcione o paciente imediatamente para a sala de estabilização.';
                resultadoBox.classList.add('high');
                break;

            case 'trauma':
                grauPrioridade.textContent = 'VERMELHO (Emergência)';
                mensagemTriagem.textContent = 'Risco severo de hemorragia interna ou choque térmico. Atendimento imediato necessário.';
                resultadoBox.classList.add('high');
                break;
        }
    });
});
