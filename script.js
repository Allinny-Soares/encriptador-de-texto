
function criptografarTexto(texto) {
    const criptografia = [
        ['e', 'enter'],
        ['i', 'imes'],
        ['a', 'ai'],
        ['o', 'ober'],
        ['u', 'ufat']
    ];
    
    let textoCriptografado = texto;

    for (let i = 0; i < criptografia.length; i++) {
        textoCriptografado = textoCriptografado.replaceAll(criptografia[i][0], criptografia[i][1]);
    }
    
    return textoCriptografado;
}


function descriptografarTexto(texto) {
    const criptografia = [
        ['enter', 'e'],
        ['imes', 'i'],
        ['ai', 'a'],
        ['ober', 'o'],
        ['ufat', 'u']
    ];
    
    let textoDescriptografado = texto;

    for (let i = 0; i < criptografia.length; i++) {
        textoDescriptografado = textoDescriptografado.replaceAll(criptografia[i][0], criptografia[i][1]);
    }
    
    return textoDescriptografado;
}


function validarTexto(texto) {
    const regex = /^[a-z\s]*$/;
    return regex.test(texto);
}


document.querySelector('.botao-encriptar').addEventListener('click', function() {
    const texto = document.querySelector('.text-area').value;
    
    if (validarTexto(texto)) {
        const textoCriptografado = criptografarTexto(texto);
        document.querySelector('.mensagem').value = textoCriptografado;
    } else {
        alert('Por favor, insira apenas letras minúsculas e sem acento.');
    }
});

document.querySelector('.botao-descriptar').addEventListener('click', function() {
    const texto = document.querySelector('.text-area').value;

    if (validarTexto(texto)) {
        const textoDescriptografado = descriptografarTexto(texto);
        document.querySelector('.mensagem').value = textoDescriptografado;
    } else {
        alert('Por favor, insira apenas letras minúsculas e sem acento.');
    }
});

document.querySelector('.botao-copiar').addEventListener('click', function() {
    const mensagem = document.querySelector('.mensagem');
    mensagem.select();
    document.execCommand('copy');
    alert('Texto copiado para a área de transferência!');
});
