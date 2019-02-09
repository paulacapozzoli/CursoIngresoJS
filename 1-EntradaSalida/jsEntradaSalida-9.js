/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{


	var sueldoBasico;
	var sueldoFinal;
	var aumento;
	
	sueldoBasico=sueldo.value;

	sueldoBasico=parseInt(sueldoBasico);

	aumento=sueldoBasico*10/100;
	sueldoFinal=aumento+sueldoBasico;
	
	resultado.value=sueldoFinal; 

}
