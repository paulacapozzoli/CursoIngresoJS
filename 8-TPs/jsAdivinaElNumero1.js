/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos;
var mensaje;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	numeroSecreto=Math.floor((Math.random ()*100) +1);
		//alert (numeroSecreto);
		contadorIntentos=0;
}

function verificar()
{
	var numeroIngresado;
	contadorIntentos=contadorIntentos+1;
	numeroIngresado=numero.value;
	//alert(numeroIngresado);
	intentos.value=contadorIntentos;
	if (numeroIngresado==numeroSecreto)
	{
		mensaje="Sos un genio y en solo "+contadorIntentos+" intentos";
	}
	else
	{
		if (numeroIngresado<numeroSecreto)
		{
			mensaje="Falta";
		}
		else
		{
			mensaje="Te pasaste";
		}
	}
//un solo alert y que cuando gano me muestre en qué intento gané
alert(mensaje);	
}