function mostrar()
{

var repetciones = prompt("ingrese el número de repeticiones");
var numeroIngresado;
var numeroAnterior;
var 

numeroIngresado=prompt("Ingrese un número");
numeroIngresado=parseInt(numeroIngresado);

for(numeroAnterior=numeroIngresado-1;numeroAnterior>0;numeroAnterior--) 
	{
	console.log(numeroAnterior);

	if (numeroIngresado%numeroAnterior==0)//quiere decir que es divisible 
		{
			console.log(numeroAnterior);
			acumulador= acumulador+numeroAnterior;			
		}

	
	}

if(numeroIngresado==acumulador) 
	{
		console.log("Es perfecto");
	}

else
	{
		console.log("No es perfecto");
	}
}



