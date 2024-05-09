function add(valor){
    document.getElementById('pantalla').value += valor;
}

function reset(){
    document.getElementById('pantalla').value = '';
}

function calculate(){
    const valorPantalla = document.getElementById('pantalla').value;
    const resultado = eval(valorPantalla);
    document.getElementById('pantalla').value = resultado;
}
