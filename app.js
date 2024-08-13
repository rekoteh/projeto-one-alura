//texto.length: tamanho do texto
//value: pega o valor do textarea
function verificarCriptografia() {
    const texto = document.querySelector('textarea').value;
    let crypto= ''
    for(let i = 0; i < texto.length; i++) {
        switch (texto[i]) {
            case 'a':
                crypto += 'ai'
                i +=2
                break;
            case 'e':
                crypto += 'enter'
                i += 5
                break;
            case 'i':
                crypto += 'imes'
                i += 4
                break;
            case 'o':
                crypto += 'ober'
                i += 4
                break;
            case 'u':
                crypto += 'ufat'
                i += 4
                break;
            default:
                crypto += texto[i]
        }
    } 
    console.log(crypto);
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
      } else if ( texto.startsWith('enter', i)) {
        descriptografia += 'e';
        i += 5;
      } else if ( texto.startsWith('imes', i)) {
        descriptografia += 'i';
        i += 4;
      } else if ( texto.startsWith('ober', i)) {
        descriptografia += 'o';
        i += 4;
      } else if ( texto.startsWith('ufat', i)) {
        descriptografia += 'u';
        i += 4;
      } else {
        descriptografia +=texto[i];
        i++;
      }
      }
    console.log(descriptografia);
}

