//texto.length: tamanho do texto
//value: pega o valor do textarea
function verificarCriptografia() {
    const texto = document.querySelector('textarea').value;
    let criptografia = ''
    for(let i = 0; i < texto.length; i++) {
        switch (texto[i]) {
            case 'a':
                criptografia += 'ai'
                break;
            case 'e':
                criptografia += 'enter'
                break;
            case 'i':
                criptografia += 'imes'
                break;
            case 'o':
                criptografia += 'ober'
                break;
            case 'u':
                criptografia += 'ufat'
                break;
            default:
                criptografia += texto[i]
        }
    } 
    resultado(criptografia);
}
        
function verificarDescriptografia() {
    const texto = document.querySelector('textarea').value;
    let i = 0;
    let descriptografia = '';

    while (i < texto.length) {
        // codigo
        if (texto.startsWith('ai', i)) {
            descriptografia += 'a';
            i += 2;
        } else if (texto.startsWith('enter', i)) {
            descriptografia += 'e';
            i += 5;
        } else if (texto.startsWith('imes', i)) {
            descriptografia += 'i';
            i += 4;
        } else if (texto.startsWith('ober', i)) {
            descriptografia += 'o';
            i += 4;
        } else if (texto.startsWith('ufat', i)) {
            descriptografia += 'u';
            i += 4;
        } else {
            descriptografia += texto[i];
            i++;
        }
    }
    resultado(descriptografia);
}

function copiarParaAreaDeTransferencia () {
    let texto = document.querySelector('.texto__resultado').textContent;
    navigator.clipboard.writeText(texto);
}

function resultado(texto) {
    let paragrafo = document.createElement('p');
    paragrafo.classList.add('texto__resultado');
    paragrafo.textContent= texto;

    let button = document.createElement('button');
    button.innerText= 'Copiar';
    button.classList.add('apresentacao__botoes__base');
    button.onclick = copiarParaAreaDeTransferencia;

    let apresentacao = document.querySelector('#apresentacao__texto');
    apresentacao.innerHTML = '';
    apresentacao.appendChild(paragrafo);
    apresentacao.appendChild(button);
}

/* function resultado(texto) {
    // Limpa a seção de resultado
    let textoContainer = document.querySelector('#apresentacao__texto');
    textoContainer.innerHTML = '';

    // Cria e adiciona o parágrafo com o texto criptografado/descriptografado
    let paragrafo = document.createElement('p');
    paragrafo.classList.add('texto__resultado');
    paragrafo.textContent = texto;
    textoContainer.appendChild(paragrafo);

    // Cria e adiciona o botão de copiar
    let button = document.createElement('button');
    button.innerHTML = 'Copiar';
    button.classList.add('botao__transferencia');
    textoContainer.appendChild(button);

    // Adiciona a funcionalidade de cópia ao botão
    button.onclick = copiarParaAreaDeTransferencia
    button.addEventListener('click', function() {
        navigator.clipboard.writeText(texto).then(() => {
            alert('Texto copiado para a área de transferência!');
        }).catch(err => {
            alert('Falha ao copiar o texto: ' + err);
        });
    });
} */
