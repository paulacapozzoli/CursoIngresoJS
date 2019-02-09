/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

//numeroUno
//numeroDos

function sumar()
{	
	var primerNumero;
	var segundoNumero;
	var suma;

	primerNumero=numeroUno.value;
	segundoNumero=numeroDos.value;

	primerNumero=parseInt(primerNumero);
	segundoNumero=parseInt(segundoNumero);

	suma=primerNumero+segundoNumero;

	alert ("El resultado es "+suma);

}

function restar()
{
	var primerNumero;
	var segundoNumero;
	var resta;

	primerNumero=numeroUno.value;
	segundoNumero=numeroDos.value;

	primerNumero=parseInt(primerNumero);
	segundoNumero=parseInt(segundoNumero);

	resta=primerNumero-segundoNumero;

	alert ("El resultado es "+resta);
	
}

function multiplicar()
{ 
	var primerNumero;
	var segundoNumero;
	var producto;

	primerNumero=numeroUno.value;
	segundoNumero=numeroDos.value;

	primerNumero=parseInt(primerNumero);
	segundoNumero=parseInt(segundoNumero);

	producto=primerNumero*segundoNumero;

	alert("El resultado es "+producto);
}

function dividir()
{
	var primerNumero;
	var segundoNumero;
	var cociente;

	primerNumero=numeroUno.value;
	segundoNumero=numeroDos.value;

	primerNumero=parseInt(primerNumero);
	segundoNumero=parseInt(segundoNumero);

	cociente=primerNumero/segundoNumero;

	alert ("El resultadoes "+cociente);
	
}

