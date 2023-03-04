// Selectores
cantidad = document.querySelector('.cantidad');
campo_cantidad = document.querySelector('.cantv');
precio = document.querySelector('.pricev');
campo_total = document.querySelector('.totalv');
btn_calcular = document.querySelector('.btn-calcular');
color_input = document.querySelector('.color');
color_output = document.querySelector('.dot');

// Valores por defecto
precio.value = 400000;
precio.innerHTML = '400.000';

//Eventos
btn_calcular.addEventListener('click', calcularTotal);
btn_calcular.addEventListener('click', setColor);

// Funciones
function calcularTotal(){
    campo_total.innerHTML = cantidad.value * precio.value;
    campo_cantidad.innerHTML = cantidad.value;
}

function setColor(){
    color_output.style.backgroundColor = color_input.value
}